let handler = async (m, { conn, participants, usedPrefix, command }) => {

    let kickte = `✳️ Correct use of the command\n*${usedPrefix + command}* @tag`

    if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte) }) 
    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    let owr = m.chat.split`-`[0]

    try {
        let delet = m.message.extendedTextMessage.contextInfo.participant
        let bang = m.message.extendedTextMessage.contextInfo.stanzaId
        await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
    } catch {
        await conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
    await conn.updateBlockStatus(user, 'block');

    m.reply(`✅ ᴜsᴇʀ ʜᴀs ʙᴇᴇɴ ᴇʟɪᴍɪɴᴀᴛᴇᴅ ᴀɴᴅ ʜɪs ᴍᴇssᴀɢᴇ ʜᴀs ʙᴇᴇɴ ᴅᴇʟᴇᴛᴇᴅ + ʙʟᴏᴄᴋᴇᴅ ɪɴ ᴅᴍ👋🏻`);
}

handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick2', 'expulsar2', 'k2', 'kk'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler;
