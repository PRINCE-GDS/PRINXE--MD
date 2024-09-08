let handler = async (m, { conn, args, usedPrefix, command }) => {


   if (!m.quoted) return m.reply('Reply chat')
   m.reply(m.chat)
}

handler.help = ['getjid']
handler.tags = ['tools']
handler.command = ['getjid']
export default handler
