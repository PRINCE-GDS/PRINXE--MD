let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `*${botname} 𝘓𝘌𝘈𝘝𝘌 𝘛𝘏𝘌 𝘎𝘙𝘖𝘜𝘗, 𝘐𝘛 𝘞𝘈𝘚 𝘎𝘙𝘌𝘈𝘛 𝘉𝘌𝘐𝘕𝘎 𝘏𝘌𝘙𝘌 👋🏻*`) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`error`) 
return console.log(e)
}}
handler.command = /^(left|leavegc|exit|leave)$/i
handler.group = true
handler.rowner = true
export default handler
