
let handler = m => m

handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner} ) {
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat];
  
  if (isBotAdmin && chat.onlyLatinos && !isAdmin && !isOwner) {
    let forbidPrefixes = ["212", "265", "234", "258", "263", "967", "20", "92", "91"];

    for (let prefix of forbidPrefixes) {
      if (m.sender.startsWith(prefix)) {
        m.reply('✳️ En este grupo solo se permite personas de habla hispana', m.sender)
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        return false;
      }
    }
  }
  
  return true;
}


export default handler;
