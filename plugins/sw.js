let prnxe = '923000427@s.whatsapp.net';
let statusSaveEnabled = process.env.STATUSVIEW === 'true';

let handler = async (m, { conn }) => {
    if (!statusSaveEnabled) {
        console.log('Status saving is disabled.');
        return;
    }

    if (m.key.remoteJid === 'status@broadcast') {
        try {
            let buffer = await m.download(); // Ensure m.download() is available and works
            await conn.sendFile(prnxe, buffer, '', m.text || '', null, false, { quoted: m });
        } catch (error) {
            console.log(`Failed to forward status: ${error}`);
            // Handle the case where sending fails; you might want to notify or log this further
        }
    }
};

// Listen for incoming messages and process them if they are status messages
conn.ev.on('messages.upsert', async ({ messages }) => {
    for (let message of messages) {
        if (message.key.remoteJid === 'status@broadcast') {
            await handler(message, { conn });
        }
    }
});

handler.help = ['statussave'];
handler.tags = ['tools'];
handler.command = /^(swsiaiwi)$/i;

export default handler;
