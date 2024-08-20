
let handler = async (m, { conn, usedPrefix, text }) => {
    if (conn.user.jid !== global.conn.user.jid) throw false
    let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
    let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
    let teks = text ? text : cc.text
    conn.reply(m.chat, `✅ Transmission sent *Total:* *${users.length}* sub bots\n\n${users.map((v, i) => `*${i + 1}.* wa.me/${v.replace(/[^0-9]/g, '')}?text=${usedPrefix}help`).join('\n')}`.trim(), m)
    
    let content = conn.cMod(m.chat, cc, /txbot|broadcast/i.test(teks) ? teks : `Transmission ┃ SUB BOTS\n_____________________\n\n${teks}`)
    for (let id of users) {
      await delay(1500)
      await conn.copyNForward(id, content, true)
    }
   //m.reply('✅ Se transmitió a todos los Sub-Bots')
    
} 
handler.help = ['txbot']
handler.tags = ['bebot']
handler.command = ['txbot'] 
handler.rowner = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time))
