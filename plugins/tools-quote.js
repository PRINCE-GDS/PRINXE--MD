import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text();
    const json = await res.json();
    const { sentence, character, anime } = json;

    const message = `💌📚𝙌𝙐𝙊𝙏𝙀  ❀° ┄──•♥️♥️•─────╮
                                  📚Mᴏᴛɪᴠᴀᴛɪᴏɴᴀʟ Qᴜᴏᴛᴇs📚
                                  ╰───•••────┄ °❀             
    
    ${sentence}\n                                                                                          📚💌   
  📝𝘼𝙐𝙏𝙃𝙊𝙍 ${anime}`;
    conn.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m });
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['animequote'];
handler.tags = ['internet'];
handler.command = /^(quotes|q|quote)$/i;

export default handler;
