const fs = require("fs")
const os = require('os');

let handler = async (m, { Sky, isCreator, isPremium, qtext, runtime, toIDR }) => {
let teksnya = `
╭━━━━  *\`[ SEWA BOT ]\`*
*┊⫹⫺* Hemat 7day : *Rp5,000*
*┊⫹⫺* Normal 30day : *Rp8,000*
*┊⫹⫺* Permanen : *Rp10,000*
╰═┅═━––––––๑

*🃏 Feature :*
- On / Off
- Welcome
- Antilink  *Kick mmember*
- Antilink2  *Hapus pesan*
- Brat  *Pembuat Stiker teks*
- Sticker  *Foto to stiker*
- Qc  *Stiker pesan*
- Play  *Play musik*
- Toimg  *Stiker to foto*
- Downloader  *Tt/Ig/Yt/Dll*
- Hidetag
- Translate
- Chat Ai
- Download Apk Mod
- DLL

*⚠️ Note :*
- _Harga Diatas Berlaku *Untuk 1 Group*_
- _Peraturan Sewa *Tidak* Boleh *Spam Command* Bot_

☎️ Tertarik Untuk Menyewa?
Chat *Owner!*
`
let msg = generateWAMessageFromContent(m.chat, {
	viewOnceMessage: {
	message: {
	"messageContextInfo": {
	"deviceListMetadata": {},
	"deviceListMetadataVersion": 2
	},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teksnya
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
  "name": "cta_url",
  "buttonParamsJson": `{\"display_text\":\"Chat Owner!\",\"url\":\"wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
  }
],
}),
})
}}}, { quoted: qlocJpm })
Sky.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}

handler.command = ["sewa"]

module.exports = handler