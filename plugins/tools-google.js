
import fetch from 'node-fetch'
import googleIt from 'google-it'
let handler = async (m, { conn, usedPrefix, command, args }) => {
  let full = /f$/i.test(command)
  let text = args.join` `
  if (!text) return conn.reply(m.chat, `✳️ What do you want to search on Google?`, m)
 m.react(rwait)
  let url = 'https://google.com/search?q=' + encodeURIComponent(text)
  let search = await googleIt({ query: text })
  let msg = search.map(({ title, link, snippet}) => {
    return `*${title}*\n_${link}_\n_${snippet}_`
  }).join`\n\n`
  try {
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
    if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
    await conn.sendFile(m.chat, ss, 'screenshot.png', msg, m)
    m.react(done)
  } catch (e) {
    m.reply(msg)
  }
}
handler.help = ['google']
handler.tags = ['tools']
handler.command = ['google', 'googlef'] 
handler.diamond = false

export default handler
