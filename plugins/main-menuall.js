let handler = async (m, { conn, usedPrefix, command}) => {
      let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
      if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;
    
      let pp = (thumb);
      let more = String.fromCharCode(8206);
      let readMore = more.repeat(850); 
    
      let lkr;
      switch (command) {
        case 'list':
lkr = ` ${readMore}
  ✦ ───『 *ɢʀᴏᴜᴘ* 』─── ⚝
  ◈ .ɢᴇᴛʙɪᴏ <@ᴛᴀɢ/ʀᴇᴘʟʏ>  Ⓛ
  ◈ .ᴀɴɪᴍᴇϙᴜᴏᴛᴇ
  ◈ .Sᴇᴛᴅᴇsᴄ <ᴛᴇxᴛ>
  ◈ .sᴇᴛɴᴀᴍᴇ <ᴛᴇxᴛ>
  ◈ .ᴀᴅᴅ
  ◈ .ᴅᴇʟᴇᴛᴇ
  ◈ .ᴅᴇʟᴡᴀʀɴ @ᴜsᴇʀ
  ◈ .ᴅᴇᴍᴏᴛᴇ (@ᴛᴀɢ)
  ◈ .ɪɴғᴏɢᴘ
  ◈ .ʜɪᴅᴇᴛᴀɢ
  ◈ .ɪɴᴠɪᴛᴇ <923xxx>
  ◈ .ᴋɪᴄᴋ @ᴜsᴇʀ
  ◈ .ʟɪɴᴋ
  ◈ .ᴘᴏʟʟ ϙᴜᴇsᴛɪᴏɴ|ᴏᴘᴛɪᴏɴ|ᴏᴘᴛɪᴏɴ
  ◈ .ᴘʀᴏғɪʟᴇ
  ◈ .ᴘʀᴏᴍᴏᴛᴇ
  ◈ .ʀᴇsᴇᴛʟɪɴᴋ
  ◈ .sᴇᴛʙʏᴇ <ᴛᴇxᴛ>
  ◈ .ɢʀᴏᴜᴘ *ᴏᴘᴇɴ/ᴄʟᴏsᴇ*
  ◈ .sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>
  ◈ .sɪᴍᴜʟᴀᴛᴇ <ᴇᴠᴇɴᴛ> @ᴜsᴇʀ
  ◈ .sᴛᴀғғ
  ◈ .ᴛᴀɢᴀʟʟ
  ◈ .ᴛᴏᴛᴀɢ
  ◈ .ᴡᴀʀɴ @ᴜsᴇʀ
  ◈ .ᴡᴀʀɴs
  ◈ .ᴍᴀɪɴ
  ╰──────────⳹
  
  ✦ ───『 *ᴏᴡɴᴇʀ* 』─── ⚝
  ◈ .ᴀᴅᴅᴘʀᴇᴍ <@ᴛᴀɢ>
  ◈ .ᴀᴅᴅᴏᴡɴᴇʀ @ᴜsᴇʀ
  ◈ .ᴀʟʟᴏᴡ <@ᴛᴀɢ>
  ◈ .HEROKU
  ◈ .ʙᴀɴ @ᴜsᴇʀ
  ◈ .ʙᴀɴᴄʜᴀᴛ
  ◈ .ᴛx
  ◈ .ʙʀᴏᴀᴅᴄᴀsᴛɢʀᴏᴜᴘ <ᴛᴇxᴛ>
  ◈ .ʙᴄɢᴄ <ᴛᴇxᴛ>
  ◈ .ᴄʟᴇᴀʀᴛᴍᴘ
  ◈ .ᴅᴇʟᴇxᴘɪʀᴇᴅ
  ◈ .ᴅᴇʟᴘʀᴇᴍ @ᴜsᴇʀ
  ◈ .ʀᴇᴍᴏᴠᴇᴏᴡɴᴇʀ @ᴜsᴇʀ
  ◈ .sᴇᴛᴘᴘʙᴏᴛғᴜʟʟ
  ◈ .ɢᴇᴛᴘʟᴜɢɪɴ <ɴᴀᴍᴇ ғɪʟᴇ>
  ◈ .ɢᴇᴛғɪʟᴇ <ɴᴀᴍᴇ ғɪʟᴇ>
  ◈ .ᴊᴏɪɴ <ᴄʜᴀᴛ.ᴡʜᴀᴛsᴀᴘᴘ.ᴄᴏᴍ> <ᴅɪᴀs>
  ◈ .ʀᴇsᴇᴛ <54xxx>
  ◈ .ʀᴇsᴇᴛᴘʀᴇғɪx
  ◈ .ʀᴇsᴛᴀʀᴛ
  ◈ ..sᴇᴛᴘʀᴇғɪx
  ◈ ..sᴇᴛᴘʀᴇғɪx [sʏᴍʙᴏʟ]
  ◈ .ᴜɴʙᴀɴ @ᴜsᴇʀ
  ◈ .ᴜɴʙᴀɴᴄʜᴀᴛ
  ◈ .ᴜᴘᴅᴀᴛᴇ
  ◈ .ᴄᴏɴғɪɢ
  ◈ .ʟɪsᴛʙᴀɴ
  ◈ .ᴅᴇʟᴇᴛᴇᴘʟᴜɢɪɴ <ɴᴀᴍᴇ>
  ╰──────────⳹
  
  
  ✦ ───『 *ғᴜɴ* 』─── ⚝
  ◈ .ᴀғᴋ <ʀᴇᴀsᴏɴ>
  ◈ .ᴛᴏᴍᴘ3
  ◈ .ᴛᴏᴀᴠ
  ◈ .ʙᴏᴛ
  ◈ .ᴄʜᴀʀᴀᴄᴛᴇʀ @ᴛᴀɢ
  ◈ .ᴅᴀʀᴇ
  ◈ .ғʟɪʀᴛ
  ◈ .ɢᴀʏ @ᴜsᴇʀ
  ◈ .ᴘɪᴄᴋᴜᴘʟɪɴᴇ
  ◈ .ϙᴜᴇsᴛɪᴏɴ
  ◈ .sʜᴀʏᴀʀɪ
  ◈ .sʜɪᴘ
  ◈ .ʏᴏᴍᴀᴍᴀᴊᴏᴋᴇ
  ◈ .ᴛʀᴜᴛʜ
  ◈ .ᴡᴀsᴛᴇ @ᴜsᴇʀ
  ◈ .ɪᴍᴀɢᴇ
  ◈ .ᴍᴇᴍᴇ
  ◈ .ϙᴜᴏᴛᴇ
  ╰──────────⳹

                  
  ✦ ───『 *ʀᴇᴀᴄᴛɪᴏɴ* 』─── ⚝
  ◈ .ʙᴜʟʟʏ @ᴛᴀɢ
  ◈ .ᴄᴜᴅᴅʟᴇ @ᴛᴀɢ
  ◈ .ᴄʀʏ @ᴛᴀɢ
  ◈ .ʜᴜɢ @ᴛᴀɢ
  ◈ .ᴀᴡᴏᴏ @ᴛᴀɢ
  ◈ .ᴋɪss @ᴛᴀɢ
  ◈ .ʟɪᴄᴋ @ᴛᴀɢ
  ◈ .ᴘᴀᴛ @ᴛᴀɢ
  ◈ .sᴍᴜɢ @ᴛᴀɢ
  ◈ .ʙᴏɴᴋ @ᴛᴀɢ
  ◈ .ʏᴇᴇᴛ @ᴛᴀɢ
  ◈ .ʙʟᴜsʜ @ᴛᴀɢ
  ◈ .sᴍɪʟᴇ @ᴛᴀɢ
  ◈ .ᴡᴀᴠᴇ @ᴛᴀɢ
  ◈ .ʜɪɢʜғɪᴠᴇ @ᴛᴀɢ
  ◈ .ʜᴀɴᴅʜᴏʟᴅ @ᴛᴀɢ
  ◈ .ɴᴏᴍ @ᴛᴀɢ
  ◈ .ʙɪᴛᴇ @ᴛᴀɢ
  ◈ .ɢʟᴏᴍᴘ @ᴛᴀɢ
  ◈ .sʟᴀᴘ @ᴛᴀɢ
  ◈ .ᴋɪʟʟ @ᴛᴀɢ
  ◈ .ʜᴀᴘᴘʏ @ᴛᴀɢ
  ◈ .ᴡɪɴᴋ @ᴛᴀɢ
  ◈ .ᴘᴏᴋᴇ @ᴛᴀɢ
  ◈ .ᴅᴀɴᴄᴇ @ᴛᴀɢ
  ◈ .ᴄʀɪɴɢᴇ @ᴛᴀɢ
  ╰──────────⳹
  
 
  ✦ ───『 *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ* 』───✫
  │◈ .ғᴀᴄᴇʙᴏᴏᴋ <ᴜʀʟ>
  │◈ .ɢᴅʀɪᴠᴇ <ᴜʀʟ>
  │◈ .ɢɪᴛᴄʟᴏɴᴇ <ᴜʀʟ>
  │◈ .ɪɢsᴛᴀʟᴋ
  │◈ .ɪɴsᴛᴀɢʀᴀᴍ
  │◈ .ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>
  │◈ .ᴍᴇɢᴀ
  │◈ .ᴍᴏᴅᴀᴘᴋ
  │◈ .ᴘʟᴀʏ <ϙᴜᴇʀʏ>
  │◈ .ᴘʟᴀʏʏ <ᴛᴇxᴛ>
  │◈ .ᴠɪᴅᴇᴏ <ᴛᴇxᴛ>
  │◈ .ᴛɪᴋᴛᴏᴋ <ᴜʀʟ>
  │◈ .ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
  │◈ .ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>
  │◈ .ʏᴛᴀ <ᴜʀʟ>
  │◈ .ʏᴛᴅʟ <ᴜʀʟ>
  │◈ .ʏᴛᴠ <ᴜʀʟ>
  │◈ .ʏᴛᴍᴘ3 <ᴜʀʟ>
  │◈ .ʏᴛsᴇᴀʀᴄʜ <ϙᴜᴇʀʏ>
  │◈ .ʏᴛᴍᴘ4 <ʏᴛ-ʟɪɴᴋ>
  │◈ .ᴡᴀʟʟᴘᴀᴘᴇʀ <ϙᴜᴇʀʏ>
  ╰━━━━━━━━━━━━━━━━━━━━╯
  
  
  ✦ ───『 *ɢᴀᴍᴇ* 』─── ⚝
  ◈ .sʟᴏᴛ <ᴀᴍᴏᴜɴᴛ>
  ◈ .ᴄʜᴇss [ғʀᴏᴍ ᴛᴏ]
  ◈ .ᴄʜᴇss ᴅᴇʟᴇᴛᴇ
  ◈ .ᴄʜᴇss ᴊᴏɪɴ
  ◈ .ᴄʜᴇss sᴛᴀʀᴛ
  ◈ .ᴅᴇʟᴛᴛᴛ
  ◈ .ɢᴜᴇssғʟᴀɢ
  ◈ .Mᴀᴛʜs <ᴍᴏᴅᴇs>
  ◈ .ᴘᴘᴛ <ʀᴏᴄᴋ/ᴘᴀᴘᴇʀ/sᴄɪssᴏʀs>
  ◈ .ᴛɪᴄᴛᴀᴄᴛᴏᴇ <ᴛᴀɢ ɴᴜᴍʙᴇʀ>
  ╰──────────⳹

  
  ✦ ───『 *ᴍᴀᴋᴇʀ* 』─── ⚝
  ◈ .ʙʟᴜʀ
  ◈ .ᴅɪғᴜᴍɪɴᴀʀ2
  ◈ .ʜᴏʀɴʏᴄᴀʀᴅ
  ◈ .ʜᴏʀɴʏʟɪᴄᴇɴsᴇ
  ◈ .ɢғx1
  ◈ .ɢғx2
  ◈ .ɢғx3
  ◈ .ɢғx4
  ◈ .ɢғx5
  ◈ .ɢғx6
  ◈ .ɢғx7
  ◈ .ɢғx8
  ◈ .ɢғx9
  ◈ .ɢғx10
  ◈ .ɢғx11
  ◈ .ɢғx12
  ◈ .sɪᴍᴘᴄᴀʀᴅ
  ◈ .ɪᴛssᴏsᴛᴜᴘɪᴅ
  ◈ .ɪss
  ◈ .sᴛᴜᴘɪᴅ
  ◈ .ᴛᴡᴇᴇᴛ <ᴄᴏᴍᴍᴇɴᴛ>
  ◈ .ʟᴏʟɪᴄᴏɴ
  ◈ .ʏᴛᴄᴏᴍᴍᴇɴᴛ <ᴄᴏᴍᴍᴇɴᴛ>
  ╰──────────⳹
  
  🛡️ ───『 *sᴛɪᴄᴋᴇʀ* 』─── 🛡️
  ◈ .ᴇᴍᴏᴊɪᴍɪx <ᴇᴍᴏᴊɪ+ᴇᴍᴏᴊɪ>
  ◈ .ɢᴇᴛsᴛɪᴄᴋᴇʀ
  ◈ .sᴍᴀᴋᴇʀ
  ◈ .sᴛɪᴄᴋᴇʀᴡɪᴛʜᴍᴇᴍᴇ (ᴄᴀᴘᴛɪᴏɴ|ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ)
  ◈ .sᴡᴍᴇᴍᴇ <ᴜʀʟ>
  ◈ .sᴡᴍ(ᴄᴀᴘᴛɪᴏɴ|ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ)
  ◈ .sғᴜʟʟ
  ◈ .ᴛᴏɪᴍɢ <sᴛɪᴄᴋᴇʀ>
  ◈ .ᴛᴏᴠɪᴅ
  ◈ .ᴛʀɪɢɢᴇʀ <@ᴜsᴇʀ>
  ◈ .ᴛᴛᴘ
  ◈ .ᴛᴛᴘ2
  ◈ .ᴛᴛᴘ3
  ◈ .ᴛᴛᴘ4
  ◈ .ᴛᴛᴘ5
  ◈ .ᴀᴛᴛᴘ
  ◈ .ᴀᴛᴛᴘ2
  ◈ .ᴀᴛᴛᴘ3
  ◈ .ᴛᴀᴋᴇ <ɴᴀᴍᴇ>|<ᴀᴜᴛʜᴏʀ>
  ╰──────────⳹

 
  🛡️ ───『 *ᴀᴜᴅɪᴏ* 』─── 🛡️
  ◈ .ʙᴀss [ᴠɴ]
  ◈ .ʙʟᴏᴡɴ [ᴠɴ]
  ◈ .ᴅᴇᴇᴘ [ᴠɴ]
  ◈ .ᴇᴀʀʀᴀᴘᴇ [ᴠɴ]
  ◈ .ғᴀsᴛ [ᴠɴ]
  ◈ .ғᴀᴛ [ᴠɴ]
  ◈ .ɴɪɢʜᴛᴄᴏʀᴇ [ᴠɴ]
  ◈ .ʀᴇᴠᴇʀsᴇ [ᴠɴ]
  ◈ .ʀᴏʙᴏᴛ [ᴠɴ]
  ◈ .sʟᴏᴡ [ᴠɴ]
  ◈ .sᴍᴏᴏᴛʜ [ᴠɴ]
  ◈ .ᴛᴜᴘᴀɪ [ᴠɴ]
  ╰──────────⳹
  
  
  ✦ ───『 *ɴᴇᴡs* 』─── ⚝
  ◈ .ɴᴇᴡs
  ◈ .ᴛᴇᴄʜɴᴇᴡs
  ◈ .ɴᴅᴛᴠ
  ╰──────────⳹
  
  
  🛡️ ───『 *ᴛᴏᴏʟs* 』─── 🛡️
  🛡️ .ɴᴏᴡᴀ
  🛡️ .ϙʀ <ᴛᴇxᴛ>
  🛡️ .ϙʀᴄᴏᴅᴇ <ᴛᴇxᴛ>
  🛡️ .sᴛʏʟᴇ <ᴋᴇʏ> <ᴛᴇxᴛ>
  🛡️ .ᴡᴇᴀᴛʜᴇʀ *<ᴘʟᴀᴄᴇ>*
  🛡️ .ᴅᴇʜᴀᴢᴇ
  🛡️ .ʀᴇᴄᴏʟᴏʀ
  🛡️ .ʜᴅʀ
  🛡️ .ʟᴇɴɢᴛʜ <ᴀᴍᴏᴜɴᴛ>
  🛡️ .ᴛɪɴʏᴜʀʟ <ʟɪɴᴋ>
  🛡️ .sʜᴏʀᴛᴇɴ <ʟɪɴᴋ>
  🛡️ .ᴛᴇᴍᴘᴍᴀɪʟ
  🛡️ .sʜᴀᴢᴀᴍ
  🛡️ .ᴄᴀʟ <ᴇϙᴜᴀᴛɪᴏɴ>
  🛡️ .ᴄᴀʀʙᴏɴ <ᴄᴏᴅᴇ>
  🛡️ .ᴅᴇғɪɴᴇ <ᴡᴏʀᴅ>
  🛡️ .ᴇʟᴇᴍᴇɴᴛ
  🛡️ .ɢᴏᴏɢʟᴇ
  🛡️ .ɪᴛᴜɴᴇs
  🛡️ .ʟʏʀɪᴄs
  🛡️ .ɪᴍᴅʙ
  🛡️ .ᴄᴏᴜʀsᴇ
  🛡️ .ʀᴀɴᴅᴏᴍᴄᴏᴜʀsᴇ
  🛡️ .ʀᴇᴀᴅᴍᴏʀᴇ <ᴛᴇxᴛ1>|<ᴛᴇxᴛ2>
  🛡️ .ʀᴇᴀᴅᴠᴏ
  🛡️ .ʀᴇᴍᴏᴠᴇʙɢ
  🛡️ .ss <ᴜʀʟ>
  🛡️ .ssғ <ᴜʀʟ>
  🛡️ .sᴜʙʀᴇᴅᴅɪᴛ
  🛡️ .ᴛᴇʟᴇsᴛɪᴄᴋᴇʀ  Ⓛ
  🛡️ .ᴛᴏᴜʀʟ
  🛡️ .ᴛʀᴀɴsʟᴀᴛᴇ <ʟᴀɴɢ> <ᴛᴇxᴛ>
  🛡️ .ᴛʀᴜᴇ
  🛡️ .ᴛᴛs <ʟᴀɴɢ> <ᴛᴀsᴋ>
  🛡️ .ᴡᴀ
  🛡️ .ᴡɪᴋɪᴘᴇᴅɪᴀ
  ╰━━━━━━━━━━━━━━━━━━━━╯

  
  🛡️ ───『 *AI* 』─── 🛡️
  🛡️.ʙɪɴɢ
  🛡️.ᴅᴀʟʟᴇ
  🛡️.ɢᴘᴛ
  🛡️.ᴛᴏᴀɴɪᴍᴇ
  🛡️.ᴛᴏᴄᴀʀᴛᴏᴏɴ
  🛡️.ᴀɪ
  🛡️.ʙᴀʀᴅ
  🛡️.ᴀʟᴇxᴀ
  🛡️.ɢᴘᴛ2
  ╰━━━━━━━━━━━━━━━━╯
  
  
  ✦ ───『 *ʀᴇʟɪɢɪᴏɴ* 』─── ⚝
  ◈ .ϙᴜʀᴀɴᴍᴇɴᴜ ғᴏʀ ɢᴇᴛᴛɪɴɢ ɴᴜᴍʙᴇʀ
  ◈ .ϙᴜʀᴀɴ [sᴜʀᴀʜ_ɴᴜᴍʙᴇʀ|sᴜʀᴀʜ_ɴᴀᴍᴇ]
  ╰──────────⳹

╭━━⊱•🛡️ *sᴛᴜᴅʏᴍᴇɴᴜ* 🛡️•⊱━━╮
│✫ .ϙᴜʀᴀɴᴍᴇɴᴜ
│✫ .sᴜʀᴀʜ 36  
│✫ .ɢᴘᴛ
│✫ .ɢᴘᴛ2    
│✫ .ʙɪɴɢ  
│✫ .ʙᴀʀᴅ 
│✫ .ϙᴜᴏᴛᴇ  
│✫ .ᴀɪsᴇᴀʀᴄʜ 
│✫ .ᴅᴇғɪɴᴇ
│✫ .ᴇʟᴇᴍᴇɴᴛ
╰━━━━━━━━━━━━━━━━━━━━━━╯
  
  
  🛡️ ───『 *Bᴏᴛ Mᴇɴᴜ* 』─── 🛡️
  🛡️ .ᴘɪɴɢ
  🛡️ .ʀᴜɴᴛɪᴍᴇ
  🛡️ .sᴄʀɪᴘᴛ
  🛡️ .sᴇʀᴠᴇʀ
  🛡️ .ʙʟᴏᴄᴋʟɪsᴛ
  🛡️ .ᴀʟɪᴠᴇ
  🛡️ .ɪɴғᴏ
  🛡️ .ᴏᴡɴᴇʀ
  🛡️ .ᴛᴏᴛᴀʟғᴇᴀᴛᴜʀᴇ
  🛡️ .ʟɪsᴛ
  🛡️ .ᴄʀɪsᴛɪᴀɴᴏʀᴏɴᴀʟᴅᴏ
  🛡️ .ᴄʀ7
  🛡️ .ᴘᴘᴄᴏᴜᴘʟᴇ 
  🛡️ .ᴘᴘᴄᴘ
  🛡️ .ᴘɪɴᴛᴇʀᴇsᴛ
  🛡️ .ᴍʏsɴ
  ╰━━━━━━━━━━━━━━━━━━━╯
  
  ✦ ───『 *ᴘʟᴜɢɪɴ* 』─── ⚝
  ◈ .ᴘʟᴜɢɪɴs
  ◈ .ɪɴsᴛᴀʟʟ <Gɪsᴛ URL>
  ╰──────────⳹`;
break;
        
        

        case 'botmenu':
          lkr = `┌────•✧𝘽𝙊𝙏_𝙈𝙀𝙉𝙐✧•────┐
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙞𝙣𝙜 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙐𝙥𝙩𝙞𝙢𝙚 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙤𝙩/𝙋𝙧𝙞𝙣𝙘𝙚 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙊𝙬𝙣𝙚𝙧 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙄𝙣𝙛𝙤𝙗𝙤𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙧𝙤𝙪𝙥𝙨 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙡𝙤𝙘𝙠𝙡𝙞𝙨𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙇𝙞𝙨𝙩𝙥𝙧𝙚𝙢 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙜𝙥 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙥𝙥𝙧𝙞𝙣𝙘𝙚 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙈𝙚𝙣𝙪/𝙃𝙚𝙡𝙥/𝙃 ✧
└───── •✧✧✧✧✧✧• ─────┘`; // Your bot menu message here
          break;
        case 'ownermenu':
          lkr = `┌────•✧𝙊𝙒𝙉𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎✧•────┐
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙖𝙣𝙘𝙝𝙖𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙐𝙣𝙗𝙖𝙣𝙘𝙖𝙝𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙖𝙣𝙪𝙨𝙚𝙧 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙐𝙣𝙗𝙖𝙣𝙐𝙨𝙚𝙧 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙧𝙚𝙢𝙡𝙞𝙨𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙖𝙣𝙡𝙞𝙨𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘼𝙙𝙙𝙥𝙧𝙚𝙢 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙜𝙘 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙅𝙤𝙞𝙣 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙩𝙭 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙥𝙥𝙗𝙤𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙥𝙧𝙚𝙛𝙞𝙭 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙍𝙚𝙨𝙚𝙩𝙥𝙧𝙚𝙛𝙞𝙭 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙚𝙩𝙛𝙞𝙡𝙚 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙚𝙩𝙥𝙡𝙪𝙜𝙞𝙣 ✧
└───── •✧✧✧✧✧✧✧✧✧✧• ─────┘`; // 
          break;
          case 'groupmenu':
          lkr = `┌────•✧𝙂𝙍𝙊𝙐𝙋_𝙈𝙀𝙉𝙐✧•────┐
┊ ꒰ ͜͡➸ ${usedPrefix}𝙆𝙞𝙘𝙠      𝙩𝙖𝙜/𝙨𝙡𝙞𝙙𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙧𝙤𝙢𝙤𝙩𝙚   𝙩𝙖𝙜/𝙨𝙡𝙞𝙙𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝘿𝙚𝙢𝙤𝙩𝙚    𝙩𝙖𝙜/𝙨𝙡𝙞𝙙𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙍𝙚𝙨𝙚𝙩𝙡𝙞𝙣𝙠   𝙧𝙚𝙫𝙤𝙠𝙚 𝙜𝙘𝙡𝙞𝙣𝙠
┊ ꒰ ͜͡➸ ${usedPrefix}𝙄𝙣𝙛𝙤𝙜𝙧𝙤𝙪𝙥   𝙜𝙘 𝙞𝙣𝙛𝙤
┊ ꒰ ͜͡➸ ${usedPrefix}𝙇𝙞𝙣𝙠        𝙘𝙪𝙧𝙧𝙚𝙣𝙩 𝙜𝙘𝙡𝙞𝙣𝙠
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙥𝙥      𝙘𝙪𝙧𝙧𝙚𝙣𝙩 𝙜𝙘 𝙥𝙧𝙤𝙛𝙞𝙡𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙣𝙖𝙢𝙚    𝙜𝙘 𝙣𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙙𝙚𝙨𝙘     𝙜𝙘 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙩𝙞𝙤𝙣
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙬𝙚𝙡𝙘𝙤𝙢𝙚  𝙬𝙚𝙡𝙘𝙤𝙢𝙚 𝙢𝙨𝙜
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙗𝙮𝙚      𝙗𝙮𝙚 𝙢𝙨𝙜
┊ ꒰ ͜͡➸ ${usedPrefix}𝙃𝙞𝙙𝙚𝙩𝙖𝙜     𝙩𝙖𝙜 𝙖𝙣𝙮𝙩𝙝𝙞𝙣𝙜 
┊ ꒰ ͜͡➸ ${usedPrefix}𝙒𝙖𝙧𝙣       𝙬𝙖𝙧𝙣 𝙪𝙨𝙚𝙧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙐𝙣𝙬𝙖𝙧𝙣     𝙪𝙣𝙬𝙖𝙧 𝙪𝙨𝙚𝙧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙧𝙤𝙪𝙥      𝙤𝙥𝙚𝙣/𝙘𝙡𝙤𝙨𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙀𝙣𝙖𝙗𝙡𝙚      𝙛𝙤𝙧 𝙘𝙢𝙙𝙨
┊ ꒰ ͜͡➸${usedPrefix}𝙊𝙉/𝙊𝙁𝙁      𝙛𝙤𝙧 𝙘𝙢𝙙𝙨
└───── •✧✧✧✧✧✧✧• ──────┘`; // 
          break;
          case 'downloadermenu':
            case 'dlmenu' :
          lkr = `┌────•✧𝘿𝙇 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎✧•────┐
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙡𝙖𝙮     𝙉𝙖𝙖𝙩...
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙡𝙖𝙮2    𝙉𝙖𝙖𝙩...
┊ ꒰ ͜͡➸ ${usedPrefix}𝙄𝙜      𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙁𝙗       𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙄𝙢𝙜      𝙉𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙙𝙧𝙞𝙫𝙚     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙞𝙩𝙘𝙡𝙤𝙣𝙚    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙞𝙜𝙨𝙩𝙖𝙡𝙠      𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙈𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙈𝙛𝙞𝙧𝙚      𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙏𝙞𝙠𝙩𝙤𝙠.     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙏𝙞𝙠𝙩𝙤𝙠𝙨𝙩𝙖𝙡𝙠     𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙏𝙬𝙞𝙩𝙩𝙚𝙧     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙔𝙩𝙨      𝙉𝙖𝙢𝙚/𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙔𝙩𝙢𝙥4    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙔𝙩𝙢𝙥3    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙔𝙩𝙖      𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙤𝙣𝙜    𝙉𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙑𝙞𝙙𝙚𝙤    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝘼𝙥𝙠     𝙉𝙖𝙢𝙚/𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩    𝙐𝙍𝙇
└───── •✧✧✧✧✧✧✧✧✧• ─────┘`; // 
                  
          break;
          case 'funmenu':
          lkr = `┏━━━ʕ•𝙁𝙐𝙉 𝙈𝙀𝙉𝙐•ʔ━━━┓
⎪⌲🔖🇵🇰 _${usedPrefix}character_
⎪⌲🔖🇵🇰 _${usedPrefix}truth_
⎪⌲🔖🇵🇰 _${usedPrefix}dare_
⎪⌲🔖🇵🇰 _${usedPrefix}flirt_
⎪⌲🔖🇵🇰 _${usedPrefix}gay_
⎪⌲🔖🇵🇰 _${usedPrefix}shayeri_
⎪⌲🔖🇵🇰 _${usedPrefix}ship_
⎪⌲🔖🇵🇰 _${usedPrefix}waste_
⎪⌲🔖🇵🇰 _${usedPrefix}simpcard_
⎪⌲🔖🇵🇰 _${usedPrefix}hornycard_
⎪⌲🔖🇵🇰 _${usedPrefix}ytcomment_
⎪⌲🔖🇵🇰 _${usedPrefix}stupid_
⎪⌲🔖🇵🇰 _${usedPrefix}lolicon_
┗━━━ʕ•💌•ʔ━━━┛`; // 
   
          break;
          case 'gamemenu':
          lkr = `┏━━━ʕ•𝙂𝘼𝙈𝙀 𝙈𝙀𝙉𝙐•ʔ━━━┓
⎪⌲🎮 _${usedPrefix}tictactoe_
⎪⌲🎮 _${usedPrefix}delttt_
⎪⌲🎮 _${usedPrefix}math_
⎪⌲🎮 _${usedPrefix}math answer_
⎪⌲🎮 _${usedPrefix}ppt_
⎪⌲🎮 _${usedPrefix}slot_
┗━━━ʕ•💌•ʔ━━━┛`; // 
          break;
          case 'stickermenu':
          lkr = `┏━━━ʕ•𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐•ʔ━━━┓
⎪⌲🔖🇵🇰 _${usedPrefix}sticker_
⎪⌲🔖🇵🇰 _${usedPrefix}take_
⎪⌲🔖🇵🇰 _${usedPrefix}scircle_
⎪⌲🔖🇵🇰 _${usedPrefix}smaker_
⎪⌲🔖🇵🇰 _${usedPrefix}sremovebg_
⎪⌲🔖🇵🇰 _${usedPrefix}getsticker_
⎪⌲🔖🇵🇰 _${usedPrefix}emojimix_
⎪⌲🔖🇵🇰 _${usedPrefix}toimg_
⎪⌲🔖🇵🇰 _${usedPrefix}tovid_
⎪⌲🔖🇵🇰 _${usedPrefix}ttp_
⎪⌲🔖🇵🇰 _${usedPrefix}ttp2_
⎪⌲🔖🇵🇰 _${usedPrefix}ttp3_
⎪⌲🔖🇵🇰 _${usedPrefix}ttp4_
⎪⌲🔖🇵🇰 _${usedPrefix}ttp5_
⎪⌲🔖🇵🇰 _${usedPrefix}attp_
⎪⌲🔖🇵🇰 _${usedPrefix}attp2_
⎪⌲🔖🇵🇰 _${usedPrefix}attp3_
┗━━━ʕ•💌•ʔ━━━┛`; 
          break;
          case 'toolmenu':
          lkr = `┏━━━ʕ•𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐•ʔ━━━┓
⎪⌲🔖🇵🇰 _${usedPrefix}autosticker_
⎪⌲🔖🇵🇰 _${usedPrefix}pdf_
⎪⌲🔖🇵🇰 _${usedPrefix}whatmusic_
⎪⌲🔖🇵🇰 _${usedPrefix}calc_
⎪⌲🔖🇵🇰 _${usedPrefix}google_
⎪⌲🔖🇵🇰 _${usedPrefix}lyrics_
⎪⌲🔖🇵🇰 _${usedPrefix}readmore_
⎪⌲🔖🇵🇰 _${usedPrefix}ssweb_
⎪⌲🔖🇵🇰 _${usedPrefix}tts_
⎪⌲🔖🇵🇰 _${usedPrefix}translate_
⎪⌲🔖🇵🇰 _${usedPrefix}tourl_
⎪⌲🔖🇵🇰 _${usedPrefix}wikipedia_
⎪⌲🔖🇵🇰 _${usedPrefix}nowa_
⎪⌲🔖🇵🇰 _${usedPrefix}qrmaker_
⎪⌲🔖🇵🇰 _${usedPrefix}readqr_
⎪⌲🔖🇵🇰 _${usedPrefix}styletext_
⎪⌲🔖🇵🇰 _${usedPrefix}weather_
⎪⌲🔖🇵🇰 _${usedPrefix}siri_
⎪⌲🔖🇵🇰 _${usedPrefix}alexa_
⎪⌲🔖🇵🇰 _${usedPrefix}dalle_
⎪⌲🔖🇵🇰 _${usedPrefix}wa_
⎪⌲🔖🇵🇰 _${usedPrefix}itunes_
⎪⌲🔖🇵🇰 _${usedPrefix}tinyurl/shorturl_
⎪⌲🔖🇵🇰 _${usedPrefix}readvo_
⎪⌲🔖🇵🇰 _${usedPrefix}true_
┗━━━━━━━ʕ•🧬•ʔ━━━━━━┛`; // 
          break;
          case 'nsfwmenu':
          lkr = `use command ${usedPrefix}nsfw`; // 
          break;
          case 'logomenu':
          lkr = `use ${usedPrefix}logo to see all options \ngfx cmd upto 12`; // 
          break;
        default:
          lkr = `Invalid command. Type ${usedPrefix}list to see available options.`;
      }
    
      conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] });
    
      let done = '✅';
      m.react(done);
    };
    
    handler.help = ['list', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'economymenu', 'funmenu', 'gamemenu', 'stickermenu', 'nsfwmenu', 'logomenu', 'toolmenu'];
    handler.tags = ['main'];
    handler.command = ['list', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'economymenu', 'funmenu', 'gamemenu', 'stickermenu', 'nsfwmenu', 'logomenu', 'toolmenu'];
    
    export default handler
