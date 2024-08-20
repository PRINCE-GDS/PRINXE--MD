
import ws from 'ws';
async function handler(m, { usedPrefix }) {
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map(conn => conn.user)])]
  let b = users.map((v, i) => `_*${i + 1}.*_ *${v.name}*\nwa.me/${v.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}help`).join('\n')
 m.reply(` 
≡ *List of Active Sub Bots*

▢ *Total:* ${users.length} 

${b}`) 
  
}
handler.help = ['botlist']
handler.tags = ['bebot']
handler.command = ['listbot', 'listbots', 'bots', 'bebots', 'botlist'] 

export default handler
