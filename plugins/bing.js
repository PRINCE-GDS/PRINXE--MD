import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw '𝙐𝙃𝙈.. 𝙒𝙃𝘼𝙏 𝘿𝙊 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝙎𝘼𝙔 ?';
    await m.react('🤖');
    let username = m.sender.split('@')[0];
    const prompt = encodeURIComponent(text);
    let apiurl = `https://gpt4.guruapi.tech/bing?username=${username}&query=${prompt}`;

    const result = await fetch(apiurl);
    const response = await result.json();
    
    if (!response.result) throw '𝙉𝙊 𝙍𝙀𝙎𝙐𝙇𝙏 𝙁𝙐𝙉𝘿';

    const replyText = response.result;
    await conn.sendButton(
      m.chat, 
      replyText, 
      author, 
      'https://techcrunch.com/wp-content/uploads/2023/11/microsoft-copilot-bing.jpg', 
      [['Go with Gpt', `.gpt ${text}`]], 
      null, 
      [['Follow Me', `https://github.com/MANNO-GDS/THE-MANNO-MD`]], 
      m
    );
  } catch (error) {
    console.error(error);
    m.reply('error');
  }
};

handler.help = ['bing <text>'];
handler.tags = ['tools'];
handler.command = /^(bing)$/i;

export default handler;
