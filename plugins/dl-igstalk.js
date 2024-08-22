
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `💭 𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙇𝙄𝙉𝙆 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀\n\n📌Example: ${usedPrefix + command} 𝙈𝘼𝙉𝙉𝙊-𝙂𝘿𝙎` 
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *𝙎𝙏𝘼𝙇𝙆𝙄𝙉𝙂* 
▢ *🔖𝙉𝙐𝙈𝘽𝙀𝙍:* ${res.name} 
▢ *🔖𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀:* ${res.username}
▢ *👥𝙁𝙊𝙇𝙇𝙊𝙒𝙀𝙍𝙎:* ${res.followersH}
▢ *🫂𝙁𝙊𝙇𝙇𝙒𝙄𝙉𝙂:* ${res.followingH}
▢ *📌𝘽𝙄𝙊:* ${res.description}
▢ *🏝️𝙋𝙊𝙎𝙏𝙎:* ${res.postsH}
└────────────`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['downloader']
handler.command = ['igstalk'] 

export default handler
