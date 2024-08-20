import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import {instagram} from '@xct007/frieren-scraper';
import {instagramdl} from '@bochilteam/scraper';
import instagramDl from '@sasmeee/igdl';
import {fileTypeFromBuffer} from 'file-type';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!args[0]) throw `_*[ 🪩 ] Enter an Instagram link.*\n\n*[ 🎴 ] Example:* _${usedPrefix + command} past url here_`;
  m.reply(wait);
  m.react(rwait)
  try {
const img = await instagramDl(args[0]);
for (let i = 0; i < img.length; i++) {
    const bufferInfo = await getBuffer(img[i].download_link);
        if (bufferInfo.detectedType.mime.startsWith('image/')) {
            await conn.sendMessage(m.chat, {image: {url: img[i].download_link}}, {quoted: m});
        } else if (bufferInfo.detectedType.mime.startsWith('video/')) {
            await conn.sendMessage(m.chat, {video: {url: img[i].download_link }}, {quoted: m});
          m.react(done)
        }
}
  } catch {   
  try {
    let cap = 'Here is your insta video';
    const datTa = await instagram.download(args[0]);
    for (const urRRl of datTa) {
      const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
      const tXXxt = `_*< Instagram downloader />*_\n\n▢ *URL:* _${shortUrRRl}_`.trim();
      conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, cap, m);
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  } catch {
      try {
        let cap = 'Here is your insta video';
        const resultss = await instagramGetUrl(args[0]).url_list[0];
        const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
        const txt2 = `_*< Instagram downloader/>*_\n\n▢ *URL:* _${shortUrl2}_`.trim();
        await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, cap, m);
      } catch {
        try {
          let cap = 'Here is your insta video';
          const resultssss = await instagramdl(args[0]);
          const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
          const txt4 = `_*< Instagram downloader/>*_\n\n▢ *URL:* _${shortUrl3}_`.trim();
          for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m);
        } catch {
          try {
            let cap = 'Here is your insta video';
            const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
            const json = await human.json();
            const videoig = json.result;
            const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
            const txt1 = `_*< Instagram downloader />*_\n\n▢ *URL:* _${shortUrl1}_`.trim();
            await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, cap, m);
          } catch {
            throw `_*[ ⛔ ] An error occurred. Please try again later._*`;
          }
        }
      }
    }
  }
};
handler.command = /^(instagramdl|insta|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i;
handler.tags = ['downloader'];
export default handler;

const getBuffer = async (url, options) => {
    options = options || {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1}, ...options, responseType: 'arraybuffer'});
    const buffer = Buffer.from(res.data, 'binary');
    const detectedType = await fileTypeFromBuffer(buffer);
    if (!detectedType || (detectedType.mime !== 'image/jpeg' && detectedType.mime !== 'image/png' && detectedType.mime !== 'video/mp4')) {
        return null;
    }
    return { buffer, detectedType };
};
