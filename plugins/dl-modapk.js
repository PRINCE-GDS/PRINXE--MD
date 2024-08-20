import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'modapk', 'apk', 'app') {
      if (!text) throw `*[❗] Please provide the APK Name you want to download.*`;
      m.react(rwait)
      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 200) {
        return await conn.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  m.react(done)
  } catch {
    throw `*[🪩]Make sure to provide a valid name / link.*`;
  }
};

handler.help = ['modapk', 'apk', 'app']
handler.tags = ['downloader']
handler.command = ['modapk', 'apk', 'app'];
export default handler;
