import { promises } from 'fs';
import { join } from 'path';
import axios from 'axios'; 

let handler = async function (m, { conn, __dirname }) {
  const githubRepoURL = 'https://github.com/MANNO-GDS/THE-MANNO-MD';

  try {
  
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

    if (response.status === 200) {
      const repoData = response.data;

      // Format the repository information with emojis
      const formattedInfo = `
╭⊱✫💌𝙈𝘼𝙉𝙉𝙊-𝘽𝙊𝙏✫⊱╮
│✫ - *📂𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙔-𝙉𝘼𝙈𝙀:* ${repoData.name}
│✫ - *📃𝘿𝙀𝙎𝘾𝙍𝙀𝙋𝙏𝙄𝙊𝙉:* ${repoData.description}
│✫ - *👤𝙊𝙒𝙉𝙀𝙍:* ${repoData.owner.login}
│✫ - *⭐𝙎𝙏𝘼𝙍𝙎:* ${repoData.stargazers_count}
│✫ - *💌𝙁𝙊𝙍𝙆𝙎:* ${repoData.forks_count}
│✫ - *🌐 𝙐𝙍𝙇:* ${repoData.html_url}
╰━━━━━━━━━━━━━━━━━╯
https://chat.whatsapp.com/BNE0V8XpEZK0q4IgJ9jklM`.trim();

      // Send the formatted information as a message
      await conn.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'Rupee',
          amount1000: 10000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    } else {
      // Handle the case where the API request fails
      await conn.reply(m.chat, 'Unable to fetch repository information.', m);
    }
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'An error occurred while fetching repository information.', m);
  }
};

handler.help = ['script'];
handler.tags = ['main'];
handler.command = ['sc', 'repo', 'script', 'git', 'github'];

export default handler;
