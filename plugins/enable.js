//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'jarvis':
     case 'autotalk':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
           throw false
          }}
      chat.jarvis = isEnable
     break
	case 'pmblocker':
	case 'pbm':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.pmblocker = isEnable
break	  
case 'autobio':
  isAll = true
  if (!isROwner) {
  global.dfail('rowner', m, conn)
  throw false
  }
  bot.autoBio = isEnable
  break	 
      case 'detect':
      case 'detector':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
     break
      case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autosticker = isEnable
      break
      case 'antispam':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSpam = isEnable
      break
    case 'antidelete':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
      case 'antitoxic':
    case 'antibadword':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiToxic = isEnable
      break

    case 'document':
    case 'documento':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
    case 'autostatus':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      chat.viewStory = isEnable
      break

    case 'antilink':
    case 'antilinkwa':
    case 'antilinkwha':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      
      case 'antibotclone':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBotClone = isEnable
      break

      case 'nsfw':
      case '+18':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    case 'autolevelup':
    isUser = true
     user.autolevelup = isEnable
     break
     
     case 'chatbot':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.chatbot = isEnable
      break
     
    case 'restrict':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
      case 'autotype':
    case 'alwaysonline':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.autotype = isEnable
      break
      
      case 'anticall':
        case 'nocall':
          isAll = true
          if (!isOwner) {
            global.dfail('owner', m, conn)
            throw false
          }
          bot.antiCall = isEnable
          break
    case 'onlypv':
    case 'onlydm':
    case 'onlymd':
    case 'solopv':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
      
    case 'gponly':
    case 'onlygp':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
      
    default:
     if (!/[01]/.test(command)) return m.reply(`
╭━⊱⊱⊱『 *💌𝙊𝙉/𝙊𝙁𝙁-𝙈𝙀𝙉𝙐💌* 』⊱⊱⊱━╮

╭━━━━⊱『 *𝙊𝙒𝙉𝙀𝙍*』⊱━━━━╮
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝙋𝙈𝘽𝙇𝙊𝘾𝙆𝙀𝙍
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝙊𝙉𝙇𝙔𝘿𝙈
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝙂𝙍𝙊𝙐𝙋𝙊𝙉𝙇𝙔
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝘼𝙐𝙏𝙊𝙏𝙔𝙋𝙀
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝘼𝙐𝙏𝙊𝘽𝙄𝙊
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝘼𝙉𝙏𝙄𝘽𝙊𝙏𝘾𝙇𝙊𝙉𝙀
╰━━━━━━━━━━━━━━━╯
╭━━━━⊱『 *𝘼𝘿𝙈𝙄𝙉*』⊱━━━━╮
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝙒𝙀𝙇𝘾𝙊𝙈𝙀
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝘼𝙐𝙏𝙊𝙎𝙏𝙄𝘾𝙆𝙀𝙍
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝘿𝙀𝙏𝙀𝘾𝙏
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝙅𝘼𝙍𝙑𝙄𝙎
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝘼𝙉𝙏𝙄𝙎𝙋𝘼𝙈
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝘼𝙉𝙏𝙄𝙏𝙊𝙓𝙄𝘾
╰━━━━━━━━━━━━━━╯
╭━━━━⊱『 *𝙐𝙎𝙀𝙍𝙎*』⊱━━━━╮
│⛊ ${usedPrefix}𝙊𝙉/𝙊𝙁𝙁 𝘾𝙃𝘼𝙏𝘽𝙊𝙏 
╰━━━━━━━━━━━━━━╯
*🔻𝙀𝙓𝘼𝙈𝙋𝙇𝙀🔻 :*
*${usedPrefix}𝙊𝙉* 𝙒𝙀𝙇𝘾𝙊𝙈𝙀
*${usedPrefix}𝙊𝙁𝙁* 𝙒𝙀𝙇𝘾𝙊𝙈𝙀
`)
      throw false
  }

m.reply(`✅ *${type}* 𝙷𝚊𝚜 𝚋𝚎𝚎𝚗 *${isEnable ? '𝙰𝚌𝚝𝚒𝚟𝚊𝚝𝚎𝚍' : '𝙳𝚎𝚊𝚌𝚝𝚒𝚟𝚊𝚝𝚎𝚍'}* ${isAll ? '𝙵𝚘𝚛 𝚝𝚑𝚒𝚜 𝙶𝚛𝚘𝚞𝚙' : isUser ? '' : '𝙵𝚘𝚛 𝚝𝚑𝚒𝚜 𝙲𝚑𝚊𝚝'}
`.trim()) 

}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['config']
handler.command = /^((en|dis)able|(turn)?o(n|ff)|[01])$/i

export default handler
