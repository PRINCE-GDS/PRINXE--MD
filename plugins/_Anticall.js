const { WAMessageStubType } = (await import('@WhiskeySockets/Baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

export async function all(m) {
	if (m.fromMe && m.isBaileys) return !0
	let text;
	let setting = global.db.data.settings[this.user.jid]
	if(!setting.anticall) return 
	
	if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO )) {
	    await delay(1000) 
		await conn.reply(m.chat, `You Are Blocked For Calling Bots!!`, m)
		return conn.updateBlockStatus(m.chat, "block") 
	}
}
