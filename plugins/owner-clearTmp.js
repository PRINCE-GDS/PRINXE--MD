
import { tmpdir } from 'os'
import path, { join } from 'path'
import fs from 'fs'
import { readdirSync, unlinkSync, rmSync } from 'fs'
let handler = async (m, { conn, __dirname, args }) => {

  m.reply(`✅ The *tmp + sessions* folder was cleaned `)
  m.react(done)
  
  // -- eliminar archivos temporales ---
  const tmpDirs = [tmpdir(), join(__dirname, '../tmp')]
  const tmpFiles = []
  tmpDirs.forEach((dir) => readdirSync(dir).forEach((file) => tmpFiles.push(join(dir, file))))
  tmpFiles.forEach((file) => {
    const filePath = file
    if (fs.lstatSync(filePath).isDirectory()) {
      rmSync(filePath, { recursive: true, force: true })
    } else {
      unlinkSync(filePath)
    }
  })

  // -- eliminar sesiones del bot ---
  const Sessions = "./sessions"
  readdirSync(Sessions).forEach((file) => {
    const filePath = `${Sessions}/${file}`
    if (file !== 'creds.json') {
      if (fs.lstatSync(filePath).isDirectory()) {
        rmSync(filePath, { recursive: true, force: true })
      } else {
        unlinkSync(filePath)
      }
    }
  })

  // -- eliminar sesiones de bots ---
  const bbtSessions = "./bebots"
  readdirSync(bbtSessions, { withFileTypes: true }).forEach((file) => {
    const filePath = `${bbtSessions}/${file.name}`
    if (file.isDirectory()) {
      readdirSync(filePath, { withFileTypes: true }).forEach((subFile) => {
        const subFilePath = `${filePath}/${subFile.name}`
        if (subFile.isFile() && subFile.name !== "creds.json") {
          unlinkSync(subFilePath)
        }
      })
      // -- verificar si la carpeta está vacía ---
      if (readdirSync(filePath).length === 0) {
        rmSync(filePath, { recursive: true, force: true })
      }
    } else if (file.isFile() && file.name !== "creds.json") {
      unlinkSync(filePath)
    }
  })
}
handler.help = ['cleartmp']
handler.tags = ['owner']
handler.command = /^(cleartmp)$/i
handler.rowner = true

export default handler
