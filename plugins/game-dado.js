const da = [
  'https://tinyurl.com/gdd01',
  'https://tinyurl.com/gdd02',
  'https://tinyurl.com/gdd003',
  'https://tinyurl.com/gdd004',
  'https://tinyurl.com/gdd05',
  'https://tinyurl.com/gdd006'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, pickRandom(da), 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['dado', 'dados'] 

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
