import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {
	
  if (!text) throw `💭 𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀 𝙊𝙁 𝙏𝙄𝙆𝙏𝙊𝙆 𝙐𝙎𝙀𝙍`
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *𝙏𝙄𝙆𝙏𝙊𝙆-𝙎𝙏𝘼𝙇𝙆* 
▢ *🔖 𝙉𝙐𝙈𝘽𝙀𝙍:* ${res.name}
▢ *💌 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀:* ${res.username}
▢ *👥 𝙁𝙊𝙇𝙇𝙊𝙒𝙀𝙍𝙎:* ${res.followers}
▢ *🫂 𝙁𝙊𝙇𝙇𝙒𝙄𝙉𝙂𝙎:* ${res.following}
▢ *📌 𝘿𝙀𝙎𝘾:* ${res.desc}
▢ *🔗 𝙇𝙄𝙉𝙆* : https://tiktok.com/${res.username}
└────────────`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
}
handler.help = ['tiktokstalk']
handler.tags = ['downloader']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler
