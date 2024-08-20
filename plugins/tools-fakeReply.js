
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`✳️ Uso del comando\n\n*${usedPrefix + command}* hola que? @${m.sender.split`@`[0]} nada y tu`, null, { mentions: [m.sender] })
  let cm = copy(m)
  let who
  if (text.includes('@0')) who = '0@s.whatsapp.net'
  else if (m.isGroup) who = cm.participant = m.mentionedJid[0]
  else who = m.chat
  if (!who) return m.reply(`✳️ Uso del comando\n\n*${usedPrefix + command}* hola que? @${m.sender.split`@`[0]} nada y tu`, null, { mentions: [m.sender] })
  cm.key.fromMe = false 
  cm.message[m.mtype] = copy(m.msg)
  let sp = '@' + who.split`@`[0]
  let [fake, ...real] = text.split(sp)
  conn.fakeReply(m.chat, real.join(sp).trimStart(), who, fake.trimEnd(), m.isGroup ? m.chat : false, {
    contextInfo: {
      mentionedJid: conn.parseMention(real.join(sp).trim())
    }
  })
}
handler.help = ['fake <text> @user <text2>']
handler.tags = ['tools']
handler.command = /^(fitnah|fakereply|fake)$/

export default handler

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
