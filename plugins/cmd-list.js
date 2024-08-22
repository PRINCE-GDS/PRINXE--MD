//import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    conn.reply(m.chat, `
*𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎*

*▢ 𝙄𝙉𝙁𝙊 𝙎𝙄 𝙀𝙎𝙏𝘼 𝙀𝙉 𝙉𝙀𝙂𝙍𝙄𝙏𝘼  𝙀𝙎𝙏𝘼 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝙊*

*──────────────────*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(bloqueado) ${key}` : key} : ${value.text}`).join('\n')}

`.trim(), null, {
        mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    })
}


handler.help = ['listcmd']
handler.tags = ['cmd']
handler.command = ['listcmd']

export default handler
