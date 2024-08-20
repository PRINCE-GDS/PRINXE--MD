
const {
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion, 
    MessageRetryMap,
    makeCacheableSignalKeyStore, 
    jidNormalizedUser,
    PHONENUMBER_MCC
   } = await import('@whiskeysockets/baileys')
import moment from 'moment-timezone'
import NodeCache from 'node-cache'
import readline from 'readline'
import qrcode from "qrcode"
import crypto from 'crypto'
import fs from "fs"
import pino from 'pino';
import * as ws from 'ws';
const { CONNECTING } = ws
import { Boom } from '@hapi/boom'
import { makeWASocket } from '../lib/simple.js';

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner }) => {

  let parent = args[0] && args[0] == 'plz' ? _conn : await global.conn
  if (!((args[0] && args[0] == 'plz') || (await global.conn).user.jid == _conn.user.jid)) {
	throw `📌 ${mssg.nobbot}\n\n wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix}botclone`
}

	//=====
  async function bbts() {

  let authFolderB = crypto.randomBytes(10).toString('hex').slice(0, 8)
  //let authFolderB = m.sender.split('@')[0]


    if (!fs.existsSync("./bebots/"+ authFolderB)){
        fs.mkdirSync("./bebots/"+ authFolderB, { recursive: true });
    }
    args[0] ? fs.writeFileSync("./bebots/" + authFolderB + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""
    
//--
const {state, saveState, saveCreds} = await useMultiFileAuthState(`./bebots/${authFolderB}`)
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = m.sender.split('@')[0]

const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))

const connectionOptions = {
  logger: pino({ level: 'silent' }),
  printQRInTerminal: false,
  mobile: MethodMobile, 
  //browser: ['Chrome (Linux)', '', ''],
  browser: [ "Ubuntu", "Chrome", "20.0.04" ], 
  auth: {
  creds: state.creds,
  keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
  },
  markOnlineOnConnect: true, 
  generateHighQualityLinkPreview: true, 
  getMessage: async (clave) => {
  let jid = jidNormalizedUser(clave.remoteJid)
  let msg = await store.loadMessage(jid, clave.id)
  return msg?.message || ""
  },
  msgRetryCounterCache,
  msgRetryCounterMap,
  defaultQueryTimeoutMs: undefined,   
  version
  }

//--
let conn = makeWASocket(connectionOptions)

if (methodCode && !conn.authState.creds.registered) {
    if (!phoneNumber) {
        //parent.sendMessage(m.chat, { text: `✴️ Su número de teléfono no está definido` }, { quoted: m })
        process.exit(0);
    }
    let cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(v => cleanedNumber.startsWith(v))) {
        //parent.sendMessage(m.chat, { text: `✴️ Su número debe comenzar con el código de país` }, { quoted: m })
        process.exit(0);
    }

    setTimeout(async () => {
        let codeBot = await conn.requestPairingCode(cleanedNumber);
        codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot;
         //parent.sendFile(m.chat, 'https://i.ibb.co/SKKdvRb/code.jpg', 'qrcode.png', `➤ Code: *${codeBot}*\n\n${mssg.botqr}`, m)
	 parent.sendButton2(m.chat, `➤ Code: *${codeBot}*\n\n${mssg.botqr}`, mssg.ig, 'https://telegra.ph/file/14f0099881126386f089d.jpg', [], codeBot, null, m) 
        rl.close();
    }, 3000);
}

conn.isInit = false

//---new
let isInit = true

async function connectionUpdate(update) {
    const { connection, lastDisconnect, isNewLogin, qr } = update
    if (isNewLogin) conn.isInit = true
    // scan qr
   /* if (qr) {
      let scan = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', `${mssg.botqr}`, m)
  setTimeout(() => {
    parent.sendMessage(m.chat, { delete: scan.key })
  }, 50000) //50 segundos
}*/

    const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
        if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
      let i = global.conns.indexOf(conn)
      if (i < 0) return console.log(await creloadHandler(true).catch(console.error))
      delete global.conns[i]
      global.conns.splice(i, 1)

     if (code !== DisconnectReason.connectionClosed){ 
        parent.sendMessage(conn.user.jid, {text : `⚠️ ${mssg.recon}`}, { quoted: m }) //reconectar
    } else {
        parent.sendMessage(m.chat, {text : `⛔ ${mssg.sesClose}`}, { quoted: m }) // session cerrada
    }
    }
    //----
    if (global.db.data == null) loadDatabase()

    if (connection == 'open') {
    conn.isInit = true
    global.conns.push(conn)
    await parent.sendMessage(m.chat, {text : args[0] ? `✅ ${mssg.connet}` : `✅ ${mssg.connID}`}, { quoted: m })
    await sleep(5000)
    if (args[0]) return
		await parent.sendMessage(conn.user.jid, {text : `✅ ${mssg.connMsg}`}, { quoted: m })
		parent.sendMessage(conn.user.jid, {text : usedPrefix + command + " " + Buffer.from(fs.readFileSync("./bebots/" + authFolderB + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })
	  }
 
  }

  setInterval(async () => {
    if (!conn.user) {
      try { conn.ws.close() } catch { }
      conn.ev.removeAllListeners()
      let i = global.conns.indexOf(conn)
      if (i < 0) return
      delete global.conns[i]
      global.conns.splice(i, 1)
    }}, 60000)
    

	
let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
} catch (e) {
console.error(e)
}
if (restatConn) {
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
isInit = true
}

if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
  
conn.welcome = global.conn.welcome + ''
conn.bye = global.conn.bye + ''
conn.spromote = global.conn.spromote + ''
conn.sdemote = global.conn.sdemote + ''

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('groups.update', conn.groupsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
bbts()

}
handler.help = ['botclone']
handler.tags = ['bebot']
handler.command = ['bebot', 'serbot', 'jadibot', 'botclone', 'clonebot']
handler.rowner = false

export default handler

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
