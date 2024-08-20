import yts from 'youtube-yts'
import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 320
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) throw `✳️ Example: *${usedPrefix + command}* Subha Taiba main Owais Raza Qadri Naat`
  let chat = global.db.data.chats[m.chat]
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  if (!vid) throw `✳️ Video/Audio No found`
  let isVideo = /vid$/.test(command)
  m.react('🎧') 
  
  let play = `
╭━━⊱│✫PRINCE YTDL✫│⊱━━╮
│✫ -📌 *TITLE:* ${vid.title}
│✫ -📆 *UPLOAD:* ${vid.ago}
│✫ -⌚ *DURATION:* ${vid.timestamp}
│✫ -👀 *VIEWS:* ${vid.views.toLocaleString()}
╰━━━━━━━━━━━━━━━━━━╯

_Downloading..._` 
conn.sendFile(m.chat, vid.thumbnail, 'play', play, m, null)
  
  let q = isVideo ? '360p' : '128kbps' 
try {
  let yt = await (isVideo ? fg.ytv : fg.yta)(vid.url, q)
  let { title, dl_url, quality, size, sizeB } = yt
  let isLimit = limit * 1024 < sizeB 

     await conn.loadingMsg(m.chat, '📥 Downloading', ` ${isLimit ? `≡  *PRINCE YTDL*\n\n▢ *⚖️SIZE*: ${size}\n▢ *🎞️QUALITY*: ${quality}\n\n▢ _LIMITDL_ *+${limit} MB*` : '✅ Download Completed' }`, ["▬▭▭▭▭▭", "▬▬▭▭▭▭", "▬▬▬▭▭▭", "▬▬▬▬▭▭", "▬▬▬▬▬▭", "▬▬▬▬▬▬"], m)
     
	  if(!isLimit) conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `
 
╭━━⊱│✫ - 「PRINCE YTDL」 - ✫│⊱━━╮ 
│✫ - *📌Title* : ${title}
│✫ - *🎞️Pixels* : ${quality}
│✫ - *⚖️Size* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
  } catch {
  try {
//  let q = isVideo ? '360p' : '128kbps' 
  let yt = await (isVideo ? fg.ytmp4 : fg.ytmp3)(vid.url, q)
  let { title, dl_url, quality, size, sizeB } = yt
  let isLimit = limit * 1024 < sizeB 

     await conn.loadingMsg(m.chat, '📥 Downloading', ` ${isLimit ? `≡  *PRINCE YTDL*\n\n▢ *⚖️SIZE*: ${size}\n▢ *🎞️QUALITY*: ${quality}\n\n▢ _LIMITDL_ *+${limit} MB*` : '✅ Download Completed' }`, ["▬▭▭▭▭▭", "▬▬▭▭▭▭", "▬▬▬▭▭▭", "▬▬▬▬▭▭", "▬▬▬▬▬▭", "▬▬▬▬▬▬"], m)
	  if(!isLimit) conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /2$/.test(command)), `
 
╭━━⊱│✫ - 「PRINCE YTDL」 - ✫│⊱━━╮
  
*📌TITLE* : ${title}
*🎞️QUALITY* : ${quality}
*⚖️SIZE* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
		
		 } catch (error) {
        m.reply(`❎ ERROR`)
    }
}

}
handler.help = ['play']
handler.tags = ['downloader']
handler.command = ['play', 'playvid']

export default handler
