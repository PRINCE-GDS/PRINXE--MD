let generateWAMessageFromContent = await (await import('@whiskeysockets/baileys')).default;
import * as fs from 'fs';



global.md = "https://github.com/PRINCE-GDS/MR-PRINCE-BOT"


const handler = async (m, { conn, text, isOwner, isAdmin }) => {
  try {
    const q = m.quoted ? m.quoted : m;
    const c = m.quoted ? await m.getQuotedObj() : m;
    const msg = conn.cMod(m.chat, {
      [m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted
        ? c.message[q.mtype]
        : { text: '' || c },
    }, { quoted: m, userJid: conn.user.id });
    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
  } catch {
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || '';
    const isMedia = /image|video|sticker|audio/.test(mime);
    const more = String.fromCharCode(8206);
    const masss = more.repeat(850);
    const htextos = `${text ? text : '*Huh..🙃*'}`;
    if ((isMedia && quoted.mtype === 'imageMessage') && htextos) {
      var mediax = await quoted.download?.();
      conn.sendMessage(m.chat, { image: mediax, caption: htextos }, { quoted: m });
    } else if ((isMedia && quoted.mtype === 'videoMessage') && htextos) {
      var mediax = await quoted.download?.();
      conn.sendMessage(m.chat, { video: mediax, mimetype: 'video/mp4', caption: htextos }, { quoted: m });
    } else {
      await conn.relayMessage(m.chat, { extendedTextMessage: { text: `${masss}\n${htextos}\n`, ...{ contextInfo: { externalAdReply: { thumbnail: imagen1, sourceUrl: md } } } } }, {});
    }
  }
};
handler.command = /^(caption|cap|cp)$/i;
handler.tags = ['tools'];
handler.group = false;
handler.admin = false;
export default handler;
