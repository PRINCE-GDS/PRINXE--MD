import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

let handler = async (m, { conn, text }) => {
    const inputText = text || "PRINCE BOT";
    console.log('ðŸ“¥ Input text:', inputText);
    
    const styledText = await stylizeText(inputText);
    const entries = Object.entries(styledText);
    
    let replyText = entries.map(([name, value]) => {
        return `*${name}*\n${value}`;
    }).join('\n\n');
    
    console.log('âœ¨ Generated styles:');
    console.log(replyText);
    
    await conn.reply(m.chat, replyText, m);
};

handler.help = ['fancy'].map(v => v + ' <text>');
handler.tags = ['tools'];
handler.command = /^(fancy(text)?)$/i;
handler.exp = 0;

export default handler;

async function stylizeText(text) {
    const res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text));
    const html = await res.text();
    const dom = new JSDOM(html);
    const table = dom.window.document.querySelector('table').children[0].children;
    const obj = {};

    for (let tr of table) {
        let name = tr.querySelector('.aname').innerHTML;
        let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '');
        obj[name + (obj[name] ? ' Reversed' : '')] = content;
    }

    return obj;
}
