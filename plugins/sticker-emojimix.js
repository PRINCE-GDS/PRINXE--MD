
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `🎴 Example: ${usedPrefix + command} 😎+🥰`
if (!text.includes('+')) throw  `✳️ Separate the emoji with a *+* sign\n\n📌 Example: \n*${usedPrefix + command}* 😎+🥰`
let [emoji, emoji2] = text.split`+`
let anu = await (await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji)}_${encodeURIComponent(emoji2)}`) ).json()  
for (let res of anu.results) {
let stiker = await sticker(false, res.url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
}}

handler.help = ['emojimix <emoji+emoji>']
handler.tags = ['sticker']
handler.command = ['emojimix', 'emix'] 
handler.diamond = false

export default handler
