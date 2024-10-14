let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './Assets/quran.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `
      ❀° ┄──•••───╮
         ♥️𝐐𝐔𝐑𝐀𝐍 𝐊𝐀𝐑𝐄𝐄𝐌♥
      ╰───•••──┄ °❀
      
    💫 𝘈𝘭𝘭 𝘴𝘶𝘳𝘢𝘩 𝘢𝘯𝘥 𝘵𝘩𝘦𝘪𝘳 𝘯𝘶𝘮𝘣𝘦𝘳𝘴 𝘭𝘪𝘴𝘵
𝘧𝘰𝘳 𝘨𝘦𝘵𝘵𝘪𝘯𝘨 𝘴𝘶𝘳𝘢𝘩 𝘵𝘺𝘱𝘦 .𝘴𝘶𝘳𝘢𝘩 36 💫

_Or type .alquran 36 58_ 
_Mean surah number and ayat number_

Type .asmaulhusna to get Allah SWT names


1. 🕌 Al-Fatiha (The Opening) - الفاتحہ (پہلا سورہ)


2. 🐄 Al-Baqarah (The Cow) - البقرہ (گائے)


3. 🏠 Aali Imran (The Family of Imran) - آل عمران (عمران کا خاندان)


4. 👩 An-Nisa' (The Women) - النساء (عورتیں)


5. 🍽️ Al-Ma'idah (The Table Spread) - المائدہ (پھیلی ہوئی میز)


6. 🐪 Al-An'am (The Cattle) - الانعام (مویشی)


7. ⛰️ Al-A'raf (The Heights) - الأعراف (بلندیاں)


8. ⚔️ Al-Anfal (The Spoils of War) - الانفال (غنائم)


9. 🙏 At-Tawbah (The Repentance) - التوبہ (توبہ)


10. 🐟 Yunus (Jonah) - یونس (یونس)


11. 🌩️ Hud (Hud) - ہود (ہود)


12. 👶 Yusuf (Joseph) - یوسف (یوسف)


13. ⚡ Ar-Rad (The Thunder) - الرعد (گرج)


14. 🕊️ Ibrahim (Abraham) - ابراہیم (ابراہیم)


15. 🪨 Al-Hijr (The Rocky Tract) - الحجر (پتھرائی زمین)


16. 🐝 An-Nahl (The Bee) - النحل (مکھی)


17. 🌙 Al-Isra' (The Night Journey) - الإسراء (رات کا سفر)


18. 🕳️ Al-Kahf (The Cave) - الکہف (غار)


19. 👩‍🍼 Maryam (Mary) - مریم (مریم)


20. 📜 Ta-Ha (Ta-Ha) - طٰہٰ (طٰہٰ)


21. 📖 Al-Anbiya' (The Prophets) - الانبیاء (پیغمبروں)


22. 🕋 Al-Hajj (The Pilgrimage) - الحج (حج)


23. 🙌 Al-Mu'minun (The Believers) - المؤمنون (ایمان والے)


24. 💡 An-Nur (The Light) - النور (روشنی)


25. ⚖️ Al-Furqan (The Criterion) - الفرقان (فرق کرنے والا)


26. 🎤 Ash-Shu'ara' (The Poets) - الشعراء (شاعر)


27. 🐜 An-Naml (The Ant) - النمل (چڑیا)


28. 📚 Al-Qasas (The Stories) - القصص (کہانیاں)


29. 🕷️ Al-Ankabut (The Spider) - الأنعام (مکڑی)


30. 🏛️ Ar-Rum (The Romans) - الروم (رومی)


31. 📖 Luqman (Luqman) - لقمان (لقمان)


32. 🙇 As-Sajda (The Prostration) - السجدہ (سجدہ)


33. ⚔️ Al-Ahzab (The Combined Forces) - الاحزاب (مخلوط قوتیں)


34. 🌸 Saba' (Sheba) - سبا (سبا)


35. 🛠️ Fatir (The Originator) - فاطر (خالق)


36. 📖 Ya-Sin (Ya-Sin) - یس (یس)


37. 🛡️ As-Saffat (Those who set the Ranks) - الصافات (صفیں مرتب کرنے والے)


38. 🅱️ Sad (The Letter Sad) - صاد (حرف صاد)


39. 🪖 Az-Zumar (The Troops) - الزمر (جنگی دستے)


40. 🤲 Ghafir (The Forgiver) - غافر (بخشنے والا)


41. 📜 Fussilat (Explained in Detail) - فصلت (تفصیل سے بیان)


42. 🗣️ Ash-Shura (Consultation) - الشوری (مشاورت)


43. 💰 Az-Zukhruf (The Gold Adornments) - الزخرف (سونے کے زیور)


44. 💨 Ad-Dukhan (The Smoke) - الدخان (دھواں)


45. 🐊 Al-Jathiyah (The Crouching) - الجاثیہ (جھکنا)


46. 🌪️ Al-Ahqaf (The Wind-Curved Sandhills) - الأحقاف (ہوائی چکروں والی ریت کی پہاڑیاں)


47. 🕋 Muhammad (Muhammad) - محمد (محمد)


48. 🏆 Al-Fath (The Victory) - الفتح (فتح)


49. 🏠 Al-Hujurat (The Rooms) - الحجرات (کمرے)


50. 🔤 Qaf (The Letter Qaf) - قاف (حرف قاف)


51. 🌬️ Adh-Dhariyat (The Winnowing Winds) - الذاریات (پھٹنے والی ہوائیں)


52. ⛰️ At-Tur (The Mount) - الطور (پہاڑ)


53. 🌟 An-Najm (The Star) - النجم (ستارہ)


54. 🌙 Al-Qamar (The Moon) - القمر (چاند)


55. 💖 Ar-Rahman (The Beneficent) - الرحمن (بہت مہربان)


56. 🌌 Al-Waqi'a (The Inevitable) - الواقعہ (ہونے والا)


57. 🔩 Al-Hadid (The Iron) - الحدید (لوہا)


58. 👩‍⚖️ Al-Mujadila (The Pleading Woman) - المجادلہ (مدعی عورت)


59. 🏴 Al-Hashr (The Exile) - الحشر (اخراج)


60. 🔍 Al-Mumtahanah (She that is to be examined) - الممتحنہ (جانچنے والی)


61. 📊 As-Saff (The Ranks) - الصف (صفیں)


62. 🕌 Al-Jumu'ah (Friday) - الجمعة (جمعہ)


63. 🤥 Al-Munafiqun (The Hypocrites) - المنافقون (منافق)


64. 🌪️ At-Taghabun (Mutual Disillusion) - التغابن (آپس کی بے وقوفی)


65. 💔 At-Talaq (The Divorce) - الطلاق (طلاق)


66. 🚫 At-Tahrim (The Prohibition) - التحریم (پابندی)


67. 👑 Al-Mulk (The Sovereignty) - المُلك (حکومت)


68. 🖋️ Al-Qalam (The Pen) - القلم (قلم)


69. 🔍 Al-Haqqah (The Reality) - الحقہ (حقیقت)


70. ⬆️ Al-Ma'arij (The Ascending Stairways) - المعارج (چڑھنے کی سیڑھیاں)


71. 🌊 Nuh (Noah) - نوح (نوح)


72. 👻 Al-Jinn (The Jinn) - الجن (جنات)


73. 🕵️‍♂️ Al-Muzzammil (The Enshrouded One) - المزمل (چادر اوڑھے ہوئے)


74. 🧕 Al-Muddathir (The Cloaked One) - المُدثر (پوشیدہ)


75. 🌅 Al-Qari'ah (The Calamity) - القارعة (آفت)


76. 🧑‍🤝‍🧑 Al-Insan (Man) - الانسان (انسان)


77. ✉️ Al-Mursalat (The Emissaries) - المُرسلات (پہنچانے والے)


78. 📣 An-Naba' (The Tidings) - النبأ (خبریں)


79. 🪤 An-Nazi'at (Those who drag forth) - النازعات (کھینچنے والے)


80. 😠 Abasa (He frowned) - عبس (اس نے چہرہ بدلا)


81. 💥 At-Takwir (The Overthrowing) - التکوير (پھٹنا)


82. 💔 Al-Infitar (The Cleaving) - الانفطار (پھٹنا)


83. ⚖️ Al-Mutaffifin (Defrauding) - المطففين (کم تولنے والے)


84. 🌀 Al-Inshiqaq (The Splitting Open) - الانشقاق (پھٹنا)


85. 🌌 Al-Buruj (The Mansions of the Stars) - البروج (ستاروں کے گھر)


86. 🌠 At-Tariq (The Morning Star) - الطارق (صبح کا ستارہ)


87. 🌍 Al-Ala (The Most High) - الأعلى (سب سے بلند)


88. 🌊 Al-Ghashiyah (The Overwhelming) - الغاشیہ (پرامن)


89. 🌅 Al-Fajr (The Dawn) - الفجر (صبح)


90. 🏙️ Al-Balad (The City) - البلد (شہر)


91. ☀️ Ash-Shams (The Sun) - الشمس (سورج)


92. 🌜 Al-Lail (The Night) - اللیل (رات)


93. 🌅 Ad-Duha (The Morning Hours) - الضحی (صبح کے گھنٹے)


94. 📖 As-Sharh (The Relief) - الشرح (آرام)


95. 🍈 At-Tin (The Fig) - التین (انجیر)


96. 💧 Al-Alaq (The Clot) - العلق (خون کا لوتھڑا)


97. ⚡ Al-Qadr (The Power) - القدر (قدرت)


98. 📜 Al-Bayyinah (The Clear Proof) - البینة (واضح دلیل)


99. 🌍 Az-Zalzalah (The Earthquake) - الزلزلة (زلزلہ)


100. 🐎 Al-Adiyat (The Chargers) - العادیات (چارج کرنے والے)


101. ⚡ Al-Qari'ah (The Calamity) - القارعة (آفت)


102. 💰 At-Takathur (The Abundance of Wealth) - التکاثر (مال کی کثرت)


103. ⏳ Al-Asr (The Time) - العصر (وقت)


104. 😠 Al-Humazah (The Scandal-Monger) - الہمزہ (چغلی کرنے والا)


105. 🐘 Al-Fil (The Elephant) - الفیل (ہاتھی)


106. 🕌 Quraysh (Quraysh) - قریش (قریش)


107. 🤲 Al-Ma'un (Acts of Kindness) - الماعون (نیکی کے کام)


108. 🍇 Al-Kawthar (The Abundance) - الکوثر (کثرت)


109. ❌ Al-Kafirun (The Disbelievers) - الکافرون (کافر)


110. 🛡️ An-Nasr (The Help) - النصر (مدد)


111. 🔥 Al-Lahab (The Flame) - اللہب (شعلہ)


112. ❤️ Al-Ikhlas (The Sincerity) - الإخلاص (اخلاص)


113. 🌅 Al-Falaq (The Daybreak) - الفلق (طلوع صبح)


114. 🌐 An-Nas (Mankind) - الناس (انسانیت)

❀° ┄──•••───╮
  ♥️ 𝐐𝐔𝐑𝐀𝐍 𝐊𝐀𝐑𝐄𝐄𝐌♥
╰───•••──┄ °❀`
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react(done)
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['surahmenu', 'quranmenu'] 

export default handler
