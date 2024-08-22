
let handler = async (m, { conn }) => {
  if (global.conn.user.jid === conn.user.jid) {
   await conn.reply(m.chat, '💭 𝙒𝙃𝙔 𝙉𝙊𝙏 𝙂𝙊 𝘿𝙄𝙍𝙄𝘾𝙏𝙇𝙔 𝙏𝙊 𝙏𝙃𝙀 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙇 ?', m);
  } else {
    //Si el número no coincide, se detiene el bot.
    await conn.reply(m.chat, `✅ 𝘽𝙊𝙏 𝙄𝙎 𝘾𝙊𝙉𝙉𝙀𝘾𝙏𝙀𝘿`, m);
    conn.ws.close();
  }
};
handler.help = ['stop']
handler.tags = ['bebot']
handler.command = ['stop', 'stopbot', 'stopbebot']
handler.owner = true

export default handler
