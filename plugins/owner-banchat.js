//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply('🎯Tʜᴇ ʙᴏᴛ ʜᴀs ʙᴇᴇɴ ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇᴅ ғᴏʀ ᴛʜɪs ᴄʜᴀᴛ𒁂')

    // Save the updated database
    if (global.db && typeof global.db.save === 'function') {
        await global.db.save()
    }
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['banchat', 'botoff'] 

export default handler
