export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `💭𝘽𝙔 𝘽𝙔 *${this.user.name}* 𝙒𝙄𝙇𝙇 𝙇𝙀𝘼𝙑𝙀 𝙏𝙃𝙀 𝙂𝙍𝙊𝙐𝙋 \n\n𝙔𝙊𝙐 𝙍 𝙍𝙀𝙉𝙏 𝙀𝙉𝘿𝙀𝘿`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
