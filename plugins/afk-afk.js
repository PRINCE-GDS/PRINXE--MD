//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  😴 *𝘼𝙁𝙆* 
𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊𝙒 𝘼𝙁𝙆 𝙐𝙉𝙏𝙄𝙇 𝙐 𝙎𝙀𝙉𝘿 𝙈𝙀 𝘼 𝙈𝙀𝙎𝙎𝙀𝙂𝙀
▢ *𝙐𝙎𝙀𝙍:* ${conn.getName(m.sender)} 
▢ *𝙍𝙀𝘼𝙎𝙊𝙉:* ${text ? text : ''}
  `)
}
handler.help = ['afk <reason>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
