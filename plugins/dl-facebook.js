import fg from 'api-dylux'

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `💭 𝙋𝙇𝙀𝘼𝘾𝙀 𝙎𝙀𝙉𝘿 𝙏𝙃𝙀 𝙇𝙄𝙉𝙆 𝙊𝙁 𝘼 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙑𝙄𝘿𝙀𝙊 𝙇𝙄𝙉𝙆 ....\n\n📌 𝙀𝙓𝘼𝙈𝙋𝙇𝙀 :\n*${usedPrefix + command}* 𝙔𝙊𝙐𝙍𝙀 𝙁𝘽 𝙇𝙄𝙉𝙆 𝙃𝙀𝙍𝙀`
  }

  const urlRegex =
    /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i
  if (!urlRegex.test(args[0])) {
    throw '⚠️ 𝙋𝙇𝙀𝘼𝘾𝙀 𝙂𝙄𝙑𝙀 𝙈𝙀 𝘼 𝙑𝘼𝙇𝙄𝘿 𝙐𝙍𝙇....'
  }

  m.react(wait)

  try {
    const result = await fg.fbdl(args[0])
    const tex = `
*•┈┈••✦❀ 𝙈𝘼𝙉𝙉𝙊-𝙁𝘽𝘿𝙇 ❀✦••┈┈•* 
↳ *𝙑𝙄𝘿𝙀𝙊 𝙏𝙄𝙏𝘼𝙇:* *${result.title}*
*•┈✦❀📥 𝙂𝙍𝘼𝙉𝙏𝙀𝘿-𝘽𝙔-𝙏𝙃𝙀-𝙈𝘼𝙉𝙉𝙊-𝙈𝘿 ❀✦┈•*`

    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)

    conn.sendFile(m.chat, videoBuffer, 'fb.mp4', tex, m)
    m.react(done)
  } catch (error) {
    console.log(error)
    m.reply('⚠️ An error occurred while processing the request. Please try again later.')
  }
}

handler.help = ['facebook <url>']
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = false

export default handler
