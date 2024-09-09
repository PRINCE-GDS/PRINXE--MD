let handler = async (m, { conn }) => {
  // Check if the message is quoting a status broadcast
  if (m.quoted?.chat != 'status@broadcast') {
    // Do nothing if it's not quoting a status message
    return;
  }

  try {
    // Download the content of the quoted status message
    let buffer = await m.quoted.download();
    
    // Send the file back to the sender with the quoted message text
    await conn.sendFile(m.sender, buffer, '', m.quoted.text || '', null, false, { quoted: m });
  } catch (error) {
    // Reply with the quoted text in case of error
    m.reply(m.quoted.text || '');
  }
};

// Help and tag definitions for the handler
handler.help = ['statussave'];
handler.tags = ['tools'];

// Regular expression to match custom prefixes
handler.customPrefix = /send(kro|bro|bhai)|bhejo|Send|send(me|bro|kro|bhai)/i;

// Define the command for the handler (matches all commands)
handler.command = new RegExp;

export default handler;
