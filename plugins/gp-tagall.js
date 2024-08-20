let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`┃💗⊹ 𝗚𝗥𝗢𝗨𝗣 : *${groupMetadata.subject}*\n\n┃💗⊹ 𝗠𝗘𝗠𝗕𝗘𝗥𝗦 : *${participants.length}*${text ? `\n┃💗⊹ 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 : ${text}\n` : ''}\n\n┌───⊷ 𝗠𝗘𝗡𝗧𝗜𝗢𝗡𝗦\n` + users.map(v => '┃💗⊹ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ ⚡𝑷-𝑴𝑫⚡ ┃ ᴮᴼᵀ ✪──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
