import fetch from 'node-fetch'
import uploader from '../lib/uploadImage.js'

var handler = async (m, { conn, text, command, usedPrefix }) => {
let BK7 = m.quoted ? m.quoted : m
let BK8 = (BK7.msg || BK7).mimetype || BK7.mediaType || ''
if (/image/g.test(BK8) && !/webp/g.test(BK8)) {
let BK0 = await BK7.download()
m.react('⏳')
let BK9img = await (uploader)(BK0)
let BK9api = await (await fetch(`https://bk9.fun/ai/geminiimg?url=${BK9img}&q=${text}`)).json()
conn.sendMessage(m.chat, { text: BK9api.BK9 }, { quoted: m })
m.react('✅')
} else throw  `${mssg.replyImg}`
}
handler.tags = ['bardimg']
handler.command = /^(bmg|bardimg|bard)$/i;

handler.limit = false

export default handler
