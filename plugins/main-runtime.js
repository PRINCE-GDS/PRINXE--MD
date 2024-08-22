import displayLoadingScreen from '../lib/loading.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let pp = 'https://telegra.ph/file/d52a552a0b817753754e8.jpg'
await displayLoadingScreen(conn, m.chat)
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let str = `*あMANNO RUNTIMEあ\n\n${muptime}*`
    conn.sendMessage(m.chat, {
      text: str,
      contextInfo: {
      
      mentionedJid: [m.sender],
      isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363178281296360@newsletter',
                newsletterName: global.author,
                serverMessageId: -1
            },
      forwardingScore: 999,
      externalAdReply: {
      title: "💌 𝙏𝙃𝙀-𝙈𝘼𝙉𝙉𝙊-𝙈𝘿 💌",
      body: "R U N T I M E",
      thumbnailUrl: pp,
      sourceUrl: 'https://telegra.ph/file/a1e3c864edf9d114e32a2.jpg',
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.help = ['runtime']
handler.tags = ['main']
handler.command = ['runtime', 'uptime']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
}
