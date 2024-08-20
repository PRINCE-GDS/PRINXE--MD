import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
const handler = async (m, {conn, args}) => {
  if (!args[0]) throw '*🚩Need a Youtube Link...*';
  await m.reply(wait);
    m.react(rwait);
  try {
    const qu = args[1] || '720';
    const q = qu + 'p';
    const v = args[0];
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.video[q].download();
    const ttl = await yt.title;
    const size = await yt.video[q].fileSizeH;
    const cap = `*◉╭━⊱⌈📥 𝙔𝙊𝙐𝙏𝙐𝘽𝙀_𝘿𝙇 📥⌋⊱━╮◉*\n🎉*${mssg.title}:* ${ttl}\n🌐*${mssg.size}:* ${size}`.trim();
    await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
  } catch {
    m.react(done)
    try {
      const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      const n2 = lolh.result.link;
      const n3 = lolh.result.size;
      const cap2 = `*◉╭━⊱⌈📥 𝙔𝙊𝙐𝙏𝙐𝘽𝙀_𝘿𝙇 📥⌋⊱━╮◉*\n🎉*${mssg.title}:* ${n}\n🌐*${mssg.size}:* ${n3}`.trim();
      await conn.sendMessage(m.chat, {document: {url: n2}, caption: cap2, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m});
    } catch {
      m.react(done)
      await conn.reply(m.chat, '*Error couldnt download the video*', m);
    }
  }
};
handler.command = /^ytmp4doc|ytvdoc|ytdl$/i;
handler.tags = ['downloader'];
export default handler;
