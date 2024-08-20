import fetch from 'node-fetch';
import yts from 'yt-search';
import axios from 'axios';
import ytmp44 from '../lib/ytmp44.js'; 

let limit = 200;
let enviando = false;

const handler = async (m, { conn, args, usedPrefix, command }) => {
  
  
  if (!args[0]) throw '🚩Provide a Youtube Link...';

  if (enviando) return;
  enviando = true;

  let youtubeLink = '';
  if (args[0].includes('you')) {
    youtubeLink = args[0];
  } else {
    const index = parseInt(args[0]) - 1;
    if (index >= 0) {
      if (Array.isArray(global.videoList) && global.videoList.length > 0) {
        const matchingItem = global.videoList.find((item) => item.from === m.sender);
        if (matchingItem) {
          if (index < matchingItem.urls.length) {
            youtubeLink = matchingItem.urls[index];
          } else {
            enviando = false  
            throw `*❗ A link was not found for that number, please enter a number between 1 and 1. ${matchingItem.urls.length}*`;
          }
        } else {
          enviando = false  
          throw `*❗ To be able to make use of the command in this way (${usedPrefix + command} <numero>), please search for videos with the ${usedPrefix}playlist <texto>*`;
        }
      } else {
        enviando = false  
        throw `*❗ To be able to make use of the command in this way (${usedPrefix + command} <numero>), por favor realiza la busqueda de videos con el comando ${usedPrefix}playlist <texto>*`;
      }
    }
  }
  
  const { key } = await conn.sendMessage(m.chat, { text: wait}, { quoted: m });

  try {
    const yt_play = await yts(youtubeLink);
    const { status, resultados, error } = await ytmp44(yt_play.all[0].url);  
    if (!status) {
      enviando = false;
      throw new Error(error);
    }
    const buff_vid = await getBuffer(resultados.descargar);
    const fileSizeInBytes = buff_vid.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const roundedFileSizeInMB = fileSizeInMB.toFixed(2);
    const title = resultados.titulo;

    if (fileSizeInMB > limit) {
      enviando = false;
      await conn.sendMessage(m.chat, { document: buff_vid, caption: `❣️${mssg.title}: ${title}\n❣️${mssg.size} ${roundedFileSizeInMB} MB`, fileName: title + '.mp4', mimetype: 'video/mp4' }, { quoted: m });
      await conn.sendMessage(m.chat, { text: `${roundedFileSizeInMB} ❣️${mssg.title}: ${title}`, edit: key }, { quoted: m });
    } else {
      enviando = false;
      await conn.sendMessage(m.chat, { video: buff_vid, caption: `❣️${mssg.title}: ${title}\n❣️${mssg.size}: ${roundedFileSizeInMB} MB`, fileName: title + '.mp4', mimetype: 'video/mp4' }, { quoted: m });
      await conn.sendMessage(m.chat, { text: `𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘𝗗✅`, edit: key }, { quoted: m });
    }
  } catch (error) {
    try {
      const yt_play = await yts(youtubeLink);
      const videoUrl = `https://api.cafirexos.com/api/v1/ytmp4?url=${yt_play.all[0].url}&apikey=BrunoSobrino`;
      const buff_vid = await getBuffer(videoUrl);
      const fileSizeInBytes = buff_vid.byteLength;
      const fileSizeInKB = fileSizeInBytes / 1024;
      const fileSizeInMB = fileSizeInKB / 1024;
      const roundedFileSizeInMB = fileSizeInMB.toFixed(2);
      const title = yt_play.all[0].title;

      if (fileSizeInMB > limit) {
        enviando = false;
        await conn.sendMessage(m.chat, { document: buff_vid, caption: `❣️${mssg.title}: ${title}\n❣️${mssg.size}: ${roundedFileSizeInMB} MB`, fileName: title + '.mp4', mimetype: 'video/mp4' }, { quoted: m });
        await conn.sendMessage(m.chat, { text: `${mssg.size} ${roundedFileSizeInMB} ❣️${mssg.title}: ${title}`, edit: key }, { quoted: m });
      } else {
        enviando = false;
        await conn.sendMessage(m.chat, { video: buff_vid, caption: `❣️${mssg.title}: ${title}\n❣️${mssg.size}: ${roundedFileSizeInMB} MB`, fileName: title + '.mp4', mimetype: 'video/mp4' }, { quoted: m });
        await conn.sendMessage(m.chat, { text: `𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘𝗗✅`, edit: key }, { quoted: m });
      }
    } catch (error) {
      try {
        const yt_play = await yts(youtubeLink);
        const videoUrl = `https://api.cafirexos.com/api/v2/ytmp4?url=${yt_play.all[0].url}&apikey=BrunoSobrino`;
        const buff_vid = await getBuffer(videoUrl);
        const fileSizeInBytes = buff_vid.byteLength;
        const fileSizeInKB = fileSizeInBytes / 1024;
        const fileSizeInMB = fileSizeInKB / 1024;
        const roundedFileSizeInMB = fileSizeInMB.toFixed(2);
        const title = yt_play.all[0].title;

        if (fileSizeInMB > limit) {
          enviando = false;
          await conn.sendMessage(m.chat, { document: buff_vid, caption: `❣️${mssg.title}: ${title}\n❣️${mssg.size}: ${roundedFileSizeInMB} MB`, fileName: title + '.mp4', mimetype: 'video/mp4' }, { quoted: m });
          await conn.sendMessage(m.chat, { text: `❣️${mssg.size}: ${roundedFileSizeInMB} ❣️${mssg.title}: ${title}`, edit: key }, { quoted: m });
        } else {
          enviando = false;
          await conn.sendMessage(m.chat, { video: buff_vid, caption: `❣️${mssg.title}: ${title}\n❣️${mssg.size}: ${roundedFileSizeInMB} MB`, fileName: title + '.mp4', mimetype: 'video/mp4' }, { quoted: m });
          await conn.sendMessage(m.chat, { text: `𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘𝗗✅`, edit: key }, { quoted: m });
        }
      } catch (error) {
        enviando = false;
        await conn.sendMessage(m.chat, { text: `𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘𝗗✅`, edit: key }, { quoted: m });
        throw `⭕Couldnt download your video`;
      }
    }
  } finally {
    enviando = false;
  }
};

handler.command = /^(video|fgmp4|dlmp4|getvid|yt(v|mp4)?)$/i;
export default handler;

const getBuffer = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: 'get',
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1,
      },
      ...options,
      responseType: 'arraybuffer',
    });
    return res.data;
  } catch (e) {
    console.log(`Error : ${e}`);
  }
};
