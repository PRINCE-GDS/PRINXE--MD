import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

import dotenv from 'dotenv'
dotenv.config()

const ownervb = process.env.OWNERS;
if (!ownervb){
   throw new Error("OWNERS env is not set");
}

const ownerlist = ownervb.split(';');

global.owner = [];
for (let i = 0; i < ownerlist.length; i += 2) {
    const owner = [
        ownerlist[i],            
        ownerlist[i + 1],         
        true                        
    ];
    global.owner.push(owner);
}

//💌------------------------------------------💌


//💌global.pairingNumber = "" //put your bot number here💌
global.mods = ['917705895455'] 
global.prems = ['']
global.allowed = ['']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
//💌------------------------------------------💌



//💌------------------------------------------💌
//CONFIG VARS. Do not touch them⚠️

  global.vidcap = process.env.DL_MSG


//💌------------------------------------------💌



    
// APIS
global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
// 💌------------------------------------------💌



//APIs keys
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
   'https://api.fgmods.xyz': 'm2XBbNvz',
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`
   
}

//💌------------------------------------------💌



// Bot Images 
global.imagen1 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen2 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen3 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen4 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen5 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen6 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen7 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen8 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen9 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen10 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen11 = fs.readFileSync("./Assets/menus/Menu.png")
//💌------------------------------------------💌









// Randome
global.princeImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11]
//💌------------------------------------------💌



// Moderator 
global.developer = 'https://wa.me/message/917705895455' //contact
//💌------------------------------------------💌



//Sticker WM
global.botname = process.env.BOT_NAME
global.princebot = '「 💌 𝙏𝙃𝙀-𝙈𝘼𝙉𝙉𝙊-𝙈𝘿 💌」'
global.packname = ' 「𝙈𝘼𝙉𝙉𝙊」 ♥️' 
global.author = '💭' 
global.princeig = 'https://www.instagram.com' 
global.princegp = 'https://chat.whatsapp.com/BNE0V8XpEZK0q4IgJ9jklM'
global.menuvid = 'https://i.imgur.com/8E2itvZ.mp4'
global.Princesc = 'https://github.com/MANNO-GDS/THE-MANNO-MD' 
global.princeyt = 'https://youtube.com/'
global.Princelog = 'https://telegra.ph/file/a1e3c864edf9d114e32a2.jpg'
global.thumb = fs.readFileSync('./Assets/Prince.png')
//💌------------------------------------------💌



//Reactions
global.wait = '*📥 `𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙄𝙉𝙂 𝙔𝙊𝙐𝙍 𝙁𝙄𝙇𝙀 𝙒𝘼𝙄𝙏...`*\n*▰▰▰▱▱▱▱▱*'
global.imgs = '*🖼️ _𝙂𝙀𝙏𝙏𝙄𝙉𝙂 𝙔𝙊𝙐𝙍𝙀 𝙄𝙈𝘼𝙂𝙀 𝙒𝘼𝙄𝙏..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '♻️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 
global.multiplier = 69 
global.maxwarn = '2' 
global.eror = '```404 error```'
//💌------------------------------------------💌






let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
