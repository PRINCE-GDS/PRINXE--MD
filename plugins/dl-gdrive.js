
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {

	if (!args[0]) throw `💭 𝙀𝙉𝙏𝙀𝙍 𝘼 𝙂𝙄𝙊𝙂𝙇𝙀 𝘿𝙍𝙄𝙑𝙀 𝙇𝙄𝙉𝙆`
	m.react(rwait) 
	try {
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`
≡ *𝙂𝙊𝙊𝙂𝙇𝙀 𝘿𝙍𝙄𝙑𝙀 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍*

▢ *𝙉𝙐𝙈𝘽𝙀𝙍:* ${res.fileName}
▢ *𝙎𝙄𝙕𝙀:* ${res.fileSize}
▢ *𝙏𝙔𝙋𝙀:* ${res.mimetype}`)
		
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
	m.react(done)
   } catch {
	m.reply('𝙀𝙍𝙍𝙊𝙍: 𝘾𝙃𝙀𝙆 𝙏𝙃𝙀 𝙇𝙄𝙉𝙆 𝙊𝙍 𝙏𝙍𝙔 𝘼𝙉𝙊𝙏𝙃𝙀𝙍 𝙇𝙄𝙉𝙆') 
  }
}
handler.help = ['gdrive']
handler.tags = ['downloader']
handler.command = ['gdrive']
handler.credit = false
handler.premium = false

export default handler
