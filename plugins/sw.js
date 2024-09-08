export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.key.remoteJid !== 'status@broadcast') return false;

    this.story = this.story || [];

    const { mtype, text, sender } = m;
    const name = sender.split('@')[0];
    const riyal = conn.getName(sender) || 'Unknown';
    
    console.log('Bot ID:', conn.user.id);

    try {
        let buffer;
        let caption = '';

        // Define the fixed part of the caption
        const endi = 'UFJJTkNFIEJPVCBBVVRvIFN0YXRVUyBTQVZFUlI=';
        const rtext = Buffer.from(endi, 'base64').toString('utf-8');

        // Construct the caption based on message type
        if (mtype === 'imageMessage' || mtype === 'videoMessage') {
            caption = `*${rtext}* \n\n *📱STATUS FROM:* ${riyal}\n\n *CAPTION:* ${text || ''}`;
            buffer = await m.download();
            await this.sendFile(conn.user.id, buffer, '', caption, m, false, {
                mentions: [sender],
            });

            this.story.push({
                type: mtype,
                quoted: m,
                sender,
                caption,
                buffer,
            });

        } else if (mtype === 'audioMessage') {
            caption = `${rtext} \n\n *🎵STATUS FROM:* ${riyal}`;
            buffer = await m.download();
            await this.sendFile(conn.user.id, buffer, '', caption, m, false, {
                mimetype: m.mimetype,
            });

            this.story.push({
                type: mtype,
                quoted: m,
                sender,
                buffer,
            });

        } else if (mtype === 'extendedTextMessage') {
            caption = `${rtext} \n\n ${text || ''}`;
            await this.reply(conn.user.id, caption, m, {
                mentions: [sender],
            });

            this.story.push({
                type: mtype,
                quoted: m,
                sender,
                message: caption,
            });

            return; // No file to send for extendedTextMessage

        } else if (m.quoted) {
            buffer = await m.quoted.download();
            await conn.sendFile(m.chat, buffer, '', caption, null, false, { quoted: m });
        } else {
            // If message type is unsupported or has no content
            console.log('Unsupported message type or empty message.');
            return false;
        }

    } catch (error) {
        console.error('Failed to process message:', error.message);

        if (m.quoted) {
            await m.reply(m.quoted.text || '');
        } else {
            await this.reply(conn.user.id, `Failed to process message: ${error.message}`, m, {
                mentions: [sender],
            });
        }
    }

    if (process.env.STATUSVIEW) return true;
}
