import JavaScriptObfuscator from 'javascript-obfuscator'

let handler = async(m, { conn, text }) => {
if (!text && !(m.quoted && m.quoted.text)) {
if (!text) return m.reply(`🚩 *${mssg.example}* Past the code you want to encrypt`) 
 }
  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }
function obfuscateCode(code) {
  return JavaScriptObfuscator.obfuscate(code, { compact: false, controlFlowFlattening: true, deadCodeInjection: true, simplify: true, numbersToExpressions: true }).getObfuscatedCode();
}
let obfuscatedCode = await obfuscateCode(text);
conn.sendMessage(m.chat, {text: obfuscatedCode}, {quoted: m});
}
handler.command = /^(ofuscar|obfuscator|obs)$/i
export default handler
