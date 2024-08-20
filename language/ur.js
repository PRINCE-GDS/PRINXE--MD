
const translations = {
    
    afktemx: 'یار، کیا تم ایک پورا عہد نامہ چھوڑنا چاہتے ہو یا کیا؟',
    afkdone: 'AFK Set',
    afkdel: 'خوش آمديد',
    afktime: 'اس کے بعد سے دور',
    with: 'وجہ',
    afkmsg: 'میں ہر اس شخص کو مطلع کروں گا جو آپ کا ذکر کرے گا',
    afktag: 'صارف اے ایف کے ہے',
    name: 'نام',
    noMention: 'صارف کا ذکر کریں',
    userDb: 'صارف میرے ڈیٹا بیس میں نہیں ہے',
    example: 'مثال',

    //-- Stick reaction
    killmsg: 'مارا',
    kismsg: 'ایک بوسہ دیا',
    patmsg: 'Pat',
    slapmsg: 'تھپڑ مارا گیا',

    next: 'اگلا',
    hi: 'ہیلو',
    gp: 'گروپ',
    nobbot: 'یہ کمانڈ صرف مرکزی بوٹ میں استعمال کیا جا سکتا ہے',
    botqr: '*بوٹ بننے کے لئے اس کوڈ کا استعمال کریں*\n\n1. اوپری دائیں کونے میں تین نقطوں پر کلک کریں۔\n2. منسلک ڈیوائسز پر ٹیپ کریں۔\n3. فون نمبر کے ساتھ * لنک منتخب کریں*\n\n*نوٹ:* کوڈ صرف اس نمبر کے لئے درست ہے۔',
    recon: 'کنکشن کھو گیا...',
    sesClose: 'کنکشن بند کر دیا گیا ہے، آپ کو *ID* بھیج کر دستی طور پر رابطہ قائم کرنا ہوگا*',
    connet: 'Connected successfully',
    connID: '*کامیابی سے منسلک ہے!*\n\nچند سیکنڈ میں، ہم آپ کو *ID* بھیجیں گے جسے آپ کو دوبارہ رابطہ قائم کرنے کے لئے استعمال کرنا ہوگا\n\n*نوٹ:* گروپ کو چھوڑ دیں *Prince  ┃ ᴮᴼᵀ*\nاس لنک کو محفوظ کریں تاکہ آپ بعد میں شامل ہوسکیں',
    connMsg: 'اگلی بار جب آپ رابطہ کرتے ہیں تو ، کسی دوسرے *QR* کوڈ کو اسکین کیے بغیر لاگ ان کرنے کے لئے درج ذیل پیغام بھیجیں۔',
    botlist: 'فعال ذیلی بوٹس کی فہرست',
    newcode: (usedPrefix) => `عظیم! اب آپ نئے کیو آر کوڈ کی درخواست کرنے کے لئے *${usedPrefix}bot کلون* استعمال کرسکتے ہیں`,
    nsbot: 'یہ کمانڈ صرف *فعال ذیلی بوٹس* کے لئے ہے',
    msgcode: 'نیا کوڈ آپ کی نجی چیٹ پر بھیج دیا گیا ہے',
    stopbot: 'بوٹ منقطع',

    total: 'کل',
    tx: 'ترسیل',
    txdone: 'ٹرانسمیشن بھیج دیا گیا',
    cmdlist: '*کمانڈ کی فہرست*\n\n▢ *معلومات:* اگر یہ *بولڈ* میں ہے تو ، اسے بلاک کردیا گیا ہے۔',
    notext: 'متن شامل کرکے دہرائیں',
    textSe: 'متن کو ایک سے الگ کریں',
    reply: 'پیغام کا جواب دیں',
    replyImg: 'تصویر کا جواب دیں',
    cmdSave: 'Commands محفوظ',

    oversizePrem: 'فائل کا سائز ڈاؤن لوڈ کی حد سے تجاوز کرتا ہے',
    error: 'کوئی نقص واقع ہوا، براہ کرم بعد میں دوبارہ کوشش کریں',
    size: 'ناپ',
    link: 'ربط',
    dev: 'ڈویلپر',
    version: 'ورژن',
    searchTo: (value, usedPrefix, command) => `تلاش کرنے کے لئے ${value}:\n\n📌استعمال: *${usedPrefix + command} <text>*\n\nURL سے ڈاؤن لوڈ کرنے کے لئے:\n*${usedPrefix + command}* <link>`,
    search: (value) => `درج کریں کہ آپ کیا تلاش کرنا چاہتے ہیں *${value}*`,
    lastUp: 'آخری اپ ڈیٹ',
    noLink: (value) => `ایک درج کریں ${value} link`,
    title: 'Title',
    noUsername: 'صارف نام درج کریں',
    username: 'صارف نام',
    followers: 'پیروکاروں',
    follows: 'ذیل',
    bio: 'بائیو',
    posts: 'خطوط',
    aploud: 'اپ لوڈ',
    limitdl: 'فائل ڈاؤن لوڈ کی حد سے تجاوز کرتی ہے',
    limitdlTe: 'فائلوں کو ڈاؤن لوڈ کرنے کے لئے پریمیم میں اپ گریڈ کریں',
    duration: 'دورانیہ',
    views: 'خیالات',
    quality: 'اضافی وصف',
    type: 'قسم',
    desc: 'بیان',
    useCmd: 'کمانڈ کا استعمال',
    noNum: 'صرف نمبر درج کریں',
    random: 'تصادفی',

    purse: 'پرس',
    dmd: 'ہیرے',
    money: 'پیسہ',
    bank: 'Bank',
    itemV: 'To view all *Items*',
    isNan: 'The amount must be a valid number',
    voucher: 'Voucher',
    buy: 'Purchased',
    buyCount: 'Quantity purchased',
    spent: 'Spent',
    buyNan: (value) => `You don't have enough *${value}* to buy`,
    noItem: (usedPrefix) => `That item doesn't exist:\n\n*${usedPrefix}shop* to see available items`,
    noTime: 'Invalid time format',
    second: 'Second(s)',
    hour: 'Hour(s)',
    minute: 'Minute(s)',
    day: 'Day(s)',

    robCd: 'You cannot commit a *Crime* at this time. You must wait',
    crime: 'You have successfully committed a crime',
    crimeAl: 'You were not very careful when entering to steal and activated the alarm. You could only take',
    robMul: 'Oh no! Your crime has failed and you have been fined',
    victin: 'Victim',
    robDo: 'You stole',
    tag: 'دن',
    dailyCd: 'You have already collected your daily reward. Come back in',
    daily: 'Daily Reward',
    amount: 'Amount',
    dep: (value) => `You have deposited *${value}🪙* to the Bank`,
    depNan: 'You have no money to deposit',
    resBt: 'Reset',
    lbTitle: 'لیڈر بورڈ',
    top: 'Top',
    lvl: 'Level',
    of: 'of',
    you: 'You',
    rank: 'Rank',
    fxp: 'XP needed to level up',
    lvlbfor: 'Previous Level',
    lvlup: 'Current Level',
    mineCd: 'You can return to the mine in',
    mine: 'Great! You mined',
    restEcon: 'The bot economy has been restored',
    shop: 'Shop',
    shopMsg: 'You can buy using',
    prem: 'Premium',
    onTransfer: 'You are making a transfer',
    transItem: 'Transferable items',
    confirm: 'Are you sure you want to transfer',
    to: 'To',
    payNan: 'Insufficient funds to transfer',
    payCd: 'Time has run out',
    cancelPay: 'Transfer canceled',
    pay: 'Transfer of',
    payError: 'Error transferring',
    wd: 'How many *Coins* are you trying to withdraw?',
    wdYes: 'You have withdrawn',
    noWd: 'You cannot withdraw more than what you have in the bank',
    weeklyCd: `It's called a weekly reward 😉. Come back in`,
    weekly: '*WEEKLY REWARD*\n\nOh! Has a week already passed? Anyway, here is',
    workCd: 'You can return to work in',

    nable: 'اہل',
    disable: 'نااہل',
    toBot: 'اس بوٹ کے لئے',
    toGp: 'اس گروپ کے لئے',
    gaytex: 'کون اس ہم جنس پرست کی خلاف ورزی کرنا چاہتا ہے؟',
    result: 'نتیجہ',
    shipCd: 'You can choose another partner within',
    shipp: 'Couple of the day',
    toaud: 'اس ویڈیو یا صوتی نوٹ کا جواب دیں جسے آپ کمانڈ کے ساتھ ایم پی 3 میں تبدیل کرنا چاہتے ہیں۔',
    toav: 'اس آڈیو کا جواب دیں جس کے ساتھ آپ صوتی نوٹ میں تبدیل کرنا چاہتے ہیں۔',

    noGame: 'Not in a game',
    resGame: 'The *TicTacToe* session has been reset',
    gameOff: 'The game has ended',
    gaDone: 'Correct answer',
    win: 'You won',
    mathOff: 'No more chances',
    chance: 'Chances',
    answer: 'Answer',
    mathError: '*Incorrect answer*\n\nThere are still',
    gameMode: 'Available Difficulties',
    mathOn: 'There are still unanswered questions in this group',
    time: 'Time',
    timeOff: 'Time is up!\nThe answer is:',
    reward: 'Reward',
    pptCd: 'To play again, you must wait',
    ppt: (usedPrefix, command) => `Select rock/paper/scissors\n\n📌 Example: *${usedPrefix + command}* paper`,
    coinNan: 'You don\'t have enough *Coins* to play',
    stone: 'rock',
    sciss: 'scissors',
    paper: 'paper',
    tie: 'Draw',
    win: 'You won',
    lost: 'You lost',
    roulet: (usedPrefix) => `You can place multiple bets in a roulette game.\n\nUsage: *${usedPrefix}roulette* <amount> <space>\n\nPayout multiplier`,
    rouletCd: 'You have already placed a bet. Please wait',
    moreInfo: 'For more information',
    betMin: 'The bet amount must be greater than',
    betMax: 'The bet amount exceeds the maximum limit of',
    betNan: 'You don\'t have enough *Coins* to place that bet',
    in: 'in',
    bet: 'You have placed a bet of',
    fell: 'The roulette landed on',
    slotC: 'You almost made it, keep trying :)',

    delWarnUser: 'ایڈمن نے آپ کی وارننگ کو کم کر دیا، اب آپ کے پاس ہے',
    warnNan: 'صارف کے پاس کوئی انتباہ نہیں ہے',
    delwarn: 'Unwarn',
    warns: 'تنبیہات',
    warn: 'اشارہ',
    warnRec: 'آپ کو ایڈمن کی طرف سے ایک انتباہ موصول ہوا',
    numError: 'غلط نمبر',
    promote: 'صارف کو فروغ دیا گیا',
    demote: 'صارف کی حوصلہ شکنی',
    gpInfo: 'گروپ کی معلومات',
    members: 'ارکان',
    gpOwner: 'گروپ کے مالک',
    admin: 'ایڈمن',
    gpConf: 'گروپ Configuration',
    gpConfMsg: 'پیغام Configuration',
    kick: 'صارف کو لاٹھی ماری گئی',
    linkGp: 'گروپ لنک',
    preNan: 'ایک درست پریفیکس نمبر درج کریں',
    gpNanPre: 'اس گروپ کا کوئی رکن نہیں ہے جس کے پاس سرفکس ہو۔',
    userPref: 'سرفکس کے ساتھ صارفین',
    profile: 'پروفائل',
    number: 'تعداد',
    age: 'عمر',
    gender: 'جنس',
    lang: 'زبان',
    regOn: 'رجسٹرڈ',
    xpUp: 'تیار ہیں',
    upNan: 'سطح پر رہنے کے لئے باقی',
    gpRulesNan: 'گروپ کے پاس فی الحال کوئی اصول نہیں ہیں',
    gpRules: 'گروپ کے قواعد',
    rulesMsgOn: 'گروپ *قواعد* مقرر کیے گئے ہیں',
    rulesMsg: 'گروپ کے قواعد درج کریں',
    welMsgOn: 'خوش آمدید پیغام سیٹ کیا گیا ہے',
    leaMsgOn: 'الوداع کا پیغام سیٹ کر دیا گیا ہے',
    welMsg: 'خوش آمدید کا پیغام درج کریں\n\n@user (mention)\n@group (Group name)\n@desc (Group description)',
    leaMsg: 'الوداع کا پیغام درج کریں\n\n@user (mention)',
    gpSetting: 'گروپ کی ترتیبات\n\nگروپ کو کھولیں اور بند کریں',
    user: 'صارف',
    userWarn: 'صارف کو تنبیہ',
    wningUser: (war) => `اگر آپ وصول کرتے ہیں *${war}* انتباہ، آپ کو خود بخود گروپ سے ہٹا دیا جائے گا`,
    warnMaxU: (war) => `صارف نے حد سے تجاوز کیا *${war}* انتباہ اور ہٹا دیا جائے گا`,
    blockNan: 'کوئی بلاک شدہ نمبر نہیں',
    bckList: 'مسدود فہرست',
    donate: '*عطیہ*\nاگر آپ بوٹ کو فعال رکھنے میں مدد کرنا چاہتے ہیں تو آپ عطیہ کرسکتے ہیں',
    langList: 'وہ زبان منتخب کریں جسے آپ استعمال کرنا چاہتے ہیں\n\n≡ *دستیاب زبانیں*',
    expire: 'میں ختم ہو جاتا ہے',
    ping: 'رفتار',
    uptime: 'اپ ٹائم',
    gpNsfw: (usedPrefix) => `The group does not allow NSFW content\nUse this group\n\nIf you are an admin, enable it with\n*${usedPrefix}enable* nsfw`,
    nsfwAge: 'آپ کی عمر کم ہے! جب آپ واپس آئیں\'re over 18',
    addPremUser: 'اب آپ ایک پریمیم صارف ہیں',
    banChat: 'بوٹ کو اس گروپ میں غیر فعال کر دیا گیا ہے',
    unBanChat: 'بوٹ اس گروپ میں فعال ہے',
    banUser: 'آپ اب میرے احکامات استعمال نہیں کر سکتے',
    unBanUser: 'آپ پر پابندی عائد کر دی گئی ہے',
    restartBot: 'بوٹ کو دوبارہ شروع کریں...\nبراۓ مہربانی انتظار کريں',

    genderList: 'Available Genders',
    man: 'Male',
    woman: 'Female',
    other: 'Other',
    regIsOn: 'You are already registered\n\nDo you want to register again?\n\n 📌 Use this command to remove your registration',
    nameMax: 'نام بہت لمبا ہے',
    oldReg: 'واہ، دادا بوٹ کے ساتھ کھیلنا چاہتے ہیں',
    numSn: 'سیریل نمبر',
    snVerify: 'کمانڈ کے ساتھ اپنے سیریل نمبر کی تصدیق کریں',
    snError: 'غلط سیریل نمبر',
    unReg: 'رجسٹریشن ہٹا دی گئی',
    stickError: 'تبدیلی ناکام ہو گئی, بھیجنے کی کوشش کریں *image/video/gif* پہلے اور پھر حکم کے ساتھ جواب دیں',
    tgStick: 'ٹیلی گرام اسٹیکر پیک کا لنک درج کریں',
    replyStick: 'اسٹیکر کا جواب دیں',
    ssWeb: 'کسی ویب پیج کا URL درج کریں',
    tradList: 'حمایت یافتہ زبانوں کی فہرست',
    searchError: 'کوئی نتیجہ نہیں ملا',

    rownerH: 'یہ کمانڈ صرف *بوٹ تخلیق کار* کے ذریعہ استعمال کیا جا سکتا ہے',
    ownerH: 'یہ کمانڈ صرف * مالک اور ذیلی بوٹس * کے ذریعہ استعمال کیا جا سکتا ہے',
    modsH: 'یہ فنکشن صرف *بوٹ ماڈریٹرز* کے لئے ہے',
    premH: 'یہ کمانڈ صرف *پریمیم ممبران* کے لئے ہے*\n\nType */مزید معلومات کے لئے پریمیم*',
    groupH: 'یہ کمانڈ صرف گروپوں میں استعمال کیا جا سکتا ہے',
    privateH: 'یہ کمانڈ صرف *بوٹ کی نجی چیٹ میں استعمال کیا جا سکتا ہے*',
    adminH: 'یہ کمانڈ صرف *گروپ ایڈمنز* کے لیے ہے۔',
    botAdmin: 'اس کمانڈ کو استعمال کرنے کے لئے، مجھے *منتظم* ہونا ضروری ہے!',
    unregH: 'ٹائپ کرکے اس فیچر کو استعمال کرنے کے لیے رجسٹر کریں:\n\n*/reg*',
    ig: `▢ انسٹاگرام پر مجھے فالو کریں`
}

export default translations
