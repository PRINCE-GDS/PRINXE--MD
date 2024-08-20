
let handler = async (m, { conn }) => {
  if (global.conn.user.jid === conn.user.jid) {
   await conn.reply(m.chat, '✳️ Why not go directly to the terminal?', m);
  } else {
    //Si el número no coincide, se detiene el bot.
    await conn.reply(m.chat, `✅ Bot disconnected`, m);
    conn.ws.close();
  }
};
handler.help = ['stop']
handler.tags = ['bebot']
handler.command = ['stop', 'stopbot', 'stopbebot']
handler.owner = true

export default handler
