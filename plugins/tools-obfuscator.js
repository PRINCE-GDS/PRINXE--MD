import JavaScriptObfuscator from 'javascript-obfuscator'

let handler = async(m, { conn, text }) => {
if (!text) return m.reply(`*${lenguajeGB['smsAvisoMG']()}Past the code you want to encrypt*`) 
function obfuscateCode(code) {
  return JavaScriptObfuscator.obfuscate(code, { compact: false, controlFlowFlattening: true, deadCodeInjection: true, simplify: true, numbersToExpressions: true }).getObfuscatedCode();
}
let obfuscatedCode = await obfuscateCode(text);
conn.sendMessage(m.chat, {text: obfuscatedCode}, {quoted: m});
}
handler.command = /^(ofuscar|ofuscador|obs)$/i
export default handler
