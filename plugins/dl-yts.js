
import yts from 'yt-search'

let handler = async (m, {conn, text }) => {
  if (!text) throw '💭 𝙒𝙃𝘼𝙏 𝘿𝙊 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙈𝙀 𝙏𝙊 𝙎𝙀𝘼𝙍𝘾𝙃 𝙊𝙁 𝙊𝙉 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 ?'
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
▢★ ${v.title}
▢★ *𝙇𝙄𝙉𝙆* : ${v.url}
▢★ *𝘿𝙐𝙍𝘼𝙏𝙄𝙊𝙉* : ${v.timestamp}
▢★ *𝙐𝙋𝙇𝙊𝘼𝘿𝙀𝙍:* ${v.ago}
▢★ *𝙑𝙄𝙀𝙒𝙎:* ${v.views}

★☆━━⊱│- 「 💌 𝙏𝙃𝙀-𝙈𝘼𝙉𝙉𝙊-𝙈𝘿 💌」 -│⊱━━☆★
   `.trim()
      case 'canal': return `
▢ *${v.name}* (${v.url})
▢${v.subCountLabel} (${v.subCount}) Subscribe
▢ ${v.videoCount} videos
`.trim()
    }
  }).filter(v => v).join('\n\n________________________\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch'] 
handler.tags = ['downloader']
handler.command = ['ytsearch', 'yts'] 

export default handler
