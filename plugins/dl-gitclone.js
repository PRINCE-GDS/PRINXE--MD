
import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `𝙒𝙃𝙀𝙍𝙀 𝙄𝙎 𝙏𝙃𝙀 𝙂𝙄𝙏𝙃𝙐𝘽 𝙇𝙄𝙉𝙆?\n\n📌 𝙀𝙓𝘼𝙈𝙋𝙇𝙀: ${usedPrefix + command} https://github.com/MANNO-GDS/THE-MANNO-MD/api`
    if (!regex.test(args[0])) throw '⚠️ link incorrect'
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  
    m.reply(`✳️ *𝙒𝘼𝙄𝙏,𝙎𝙀𝙉𝘿𝙄𝙉𝙂 𝙍𝙀𝙋𝙊𝙎𝙄𝙊𝙏𝙍𝙔..*`)
    conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = ['gitclone'] 
handler.credit = true

export default handler
