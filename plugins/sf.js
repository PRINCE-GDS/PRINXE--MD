import fs from 'fs' 
 let handler = async (m, { text, usedPrefix, command }) => { 
     if (!text) throw `uhm.. where is the text?\n\nusage:\n${usedPrefix + command} <text>\n\nexample:\n${usedPrefix + command} plugins/sweeto.js` 
     if (!m.quoted.text) throw `reply to the message!` 
     let path = `${text}` 
     await fs.writeFileSync(path, m.quoted.text) 
     m.reply(`stored in ${path}`) 
 } 
 handler.help = ['sf'].map(v => v + ' <text>') 
 handler.tags = ['owner'] 
 handler.command = /^(sf|sp)$/i 
  
 handler.rowner = true 
 export default handler
