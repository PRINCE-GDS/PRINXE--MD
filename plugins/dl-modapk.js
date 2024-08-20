import fetch from 'node-fetch';
import {search, download} from 'aptoide-scraper';

const getBuffer = async (url) => {
    const res = await fetch(url);
    const buffer = await res.buffer();
    return buffer;
};

let handler = async (m, { conn, command, usedPrefix, text }) => {
  
    const { proto, generateWAMessageFromContent, prepareWAMessageMedia, generateWAMessage } = (await import("@whiskeysockets/baileys")).default;
   
    //const { search, download } = await import("aptoide-scraper");

    if (command === "apk") {
        if (!text) throw `${mssg.example}:  ${usedPrefix + command} Whatsapp`;
        const data = await search(text);

        let sections = [
            {
                title: '𝗣𝗥𝗜𝗡𝗖𝗘-𝗠𝗗',
                highlight_label: '⚡𝑷-𝑴𝑫⚡',
                rows: [{
                    header: '👇🏻𝗙𝗢𝗥 𝗕𝗢𝗧 𝗠𝗘𝗡𝗨 𝗦𝗘𝗟𝗘𝗖𝗧 𝗧𝗛𝗜𝗦',
                    title: "𝗠𝗘𝗡𝗨",
                    id: '.menu'
                }]
            },
            {
                title: "𝗦𝗜𝗠𝗜𝗟𝗔𝗥 𝗔𝗣𝗞 𝗟𝗜𝗦𝗧𝗦👇🏻",
                highlight_label: "𝗠𝗔𝗧𝗖𝗛𝗘𝗗",
                rows: []
            }
        ];

        for (let i of data) {
            sections[1].rows.push({
                header: i.name,
                title: i.id,
                description: `View "${i.name}"`,
                id: `.apkview ${i.id}`
            });
        }

        let listMessage = {
            title: '🚀𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘',
            sections
        };

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                     },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: "𝗖𝗟𝗜𝗖𝗞 𝗢𝗡 𝗧𝗛𝗘 𝗕𝗨𝗧𝗧𝗢𝗡 𝗕𝗘𝗟𝗢𝗪 𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗬𝗢𝗨𝗥 𝗔𝗣𝗞 "
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: '⚡𝑷-𝑴𝑫⚡'
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            subtitle: '⚡𝑷-𝑴𝑫⚡',
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "single_select",
                                    "buttonParamsJson": JSON.stringify(listMessage)
                                },
                                {
                                    "name": "quick_reply",
                                    "buttonParamsJson": "{\"display_text\":\"𝗢𝗪𝗡𝗘𝗥👑\",\"id\":\".owner\"}"
                                }
                            ],
                        })
                    })
                }
            }
        }, { quoted: m, userJid: m.sender });

        await conn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
    } else if (command === "apkview") {
        if (!text) return;
        let data = await download(text);
        let teks = `*🎉${mssg.name}*: ${data.name}\n*💥${mssg.aploud}*: ${data.lastup}\n*⚖️${mssg.size}*: ${data.size}`;
        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: teks
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: '⚡𝑷-𝑴𝑫⚡'
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            subtitle: '⚡𝑷-𝑴𝑫⚡',
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: { url: data.icon } }, { upload: conn.waUploadToServer }))
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "quick_reply",
                                    "buttonParamsJson": `{"display_text":"📥𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗","id":".apkget ${data.package}"}`
                                }
                            ],
                        })
                    })
                }
            }
        }, { quoted: m, userJid: m.sender });

        await conn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
    } else if (command === "apkget") {
        if (!text) return;
        let data = await download(text);
        let buffer = await getBuffer(data.dllink);
        conn.sendMessage(m.chat, { document: buffer, mimetype: 'application/vnd.android.package-archive', fileName: data.name, caption: `𝗥𝗘𝗤𝗨𝗘𝗦𝗧𝗘𝗗 𝗕𝗬 @${m.sender.split("@")[0]}`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m });
    } else return;
}

handler.command = ["apk", "apkview", "apkget"];
handler.help = "apk";
handler.tags = "downloader";
export default handler;
