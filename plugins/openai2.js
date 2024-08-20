import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `Please provide some text or quote a message to get a response.`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    m.react('⏳');
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);
    const response = await fetch(`https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`);

    if (!response.ok) {
      throw `Error ${response.status}: ${response.statusText}`;
    }

    const data = await response.json();
    const result = data.completion;
    m.reply(result); // Make sure this is the correct method to send the response
  } catch (error) {
    console.error('Error:', error);
    throw `Error: ${error.message}`;
  }
};

handler.help = ['chatgpt'];
handler.tags = ['AI'];
handler.command = ['aii', 'openai'];

export default handler;
