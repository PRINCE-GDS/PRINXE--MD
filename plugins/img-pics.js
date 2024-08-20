import { googleImage } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Example:* *${usedPrefix + command} ${mssg.reply}*`
  
  const prohibited = ['fuck', 'porn', 'pussy', 'hentai', 'pornhub', 'xnxx', 'xvideos', 'vagina', 'horny', 'ass', 'nude', 'nsfw', 'sex', 'blowjob', 'anal', '+18', 'hot', 'xxx']
  if (prohibited.some(word => m.text.toLowerCase().includes(word))) return m.reply('*⚠️OHY , Prince bot ak Muslim bot hai gatya images support nhi krta*')      

  const match = text.match(/(\d+)/);
  const numberOfImages = match ? parseInt(match[3]) : 3;

  for (let i = 0; i < numberOfImages; i++) { 
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link, 'error.jpg', `*💞𝙍𝙚𝙨𝙪𝙡𝙩: ${text}*`, m)
  }
}

handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'Downloader']
handler.command = /^(gimage|image|imagen|img)$/i

export default handler
