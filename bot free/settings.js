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

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")


//===============[ SETTINGS BOT ]===============//
global.owner = '6282314864683'
global.versi = version
global.namaOwner = "AndikaHndsm"
global.packname = 'Bot WhatsApp'
global.botname = 'Kats Botz'
global.botname2 = 'Kats - Botz'

global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah
//=================================== === == =  =


//===============[ SETTINGS LINK ]===============//
global.linkOwner = "https://wa.me/6282314864683"
global.linkGrup = "https://chat.whatsapp.com/BjbTinXEvHCGmbW2PFAegI"
//=================================== === == =  =


//===============[ SETTINGS DELAY ]===============//
// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 7000
global.delayPushkontak = 6000
//=================================== === == =  =


//===============[ SETTINGS CHANNEL ]===============//
global.linkSaluran = "https://whatsapp.com/channel/0029Vav7vtlI7BeEQ5z7qH3c"
global.idSaluran = "120363358697565499@newsletter"
global.namaSaluran = "🎟 Powered By : Andk Store"
//=================================== === == =  =


//===============[ API ORKUT ]===============//
//Tapi kyknya di bot ini gada fiturnya
global.merchantIdOrderKuota = "-"
global.apiOrderKuota = "-"
global.qrisOrderKuota = "-"
//=================================== === == =  =


//===============[ API DIGITAL OCEAN ]===============//
global.apiDigitalOcean = "-"
// Settings Api Digital Ocean
global.apiSimpelBot = "new2025"
//=================================== === == =  =


//===============[ SETTINGS PAYMENT ]===============//
global.dana = "Tidak Tersedia"
global.ovo = "Tidak Tersedia"
global.gopay = "085187585671"
//=================================== === == =  =


//===============[ SETTINGS IMAGE URL ]===============//
global.image = {
thumb: "https://img101.pixhost.to/images/393/552263320_katsbotz.jpg",

menu: "https://img101.pixhost.to/images/367/551627747_katsbotz.jpg", 
akses: "https://img101.pixhost.to/images/415/552781546_katsbotz.jpg",
reply: "https://img101.pixhost.to/images/367/551627747_katsbotz.jpg", 
logo: "https://img101.pixhost.to/images/367/551627747_katsbotz.jpg", 

qris: "https://img101.pixhost.to/images/257/549494890_skyzopedia.jpg",
dana: "https://img100.pixhost.to/images/667/540082364_skyzopedia.jpg", 
ovo: "https://img100.pixhost.to/images/667/540082774_skyzopedia.jpg", 
gopay: "https://img100.pixhost.to/images/667/540083275_skyzopedia.jpg", 

welcome: "https://img101.pixhost.to/images/365/551576243_katsbotz.jpg",
bye: "https://img101.pixhost.to/images/365/551583364_katsbotz.jpg",
}
//=================================== === == =  =


//===============[ API PTERODACTYL ]===============//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc
//=================================== === == =  =


//===============[ API PTERODACTYL 2 PRIVATE ]===============//
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://-"
global.apikeyV2 = "-" //ptla
global.capikeyV2 = "-" //ptlc
//=================================== === == =  =


//===============[ SETTINGS API SUBDOMAIN ]===============//
global.subdomain = {
"privatehost.us.kg": {
"zone": "790918217c4add75b7684458518c5836", 
"apitoken": "qYv4NvEN6ZcUIv4dEXihjkmQMwbP_-3Qy_zFlAHv"
}, 
"botwhatsapp.us.kg": {
"zone": "fb1ac418c5564373a56c91d962b30dca", 
"apitoken": "rfQih0XNXiq7AyEuDoLjoFfHX2mhYf_9kddAdKIo"
}, 
"skyzopedia.us.kg": {
"zone": "9e4e70b438a65c1d3e6d0e48b82d79de", 
"apitoken": "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
}, 
"marketplace.us.kg": {
"zone": "2f33118c3db00b12c38d07cf1c823ed1", 
"apitoken": "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ZPAXx7CL51PtbGweL2pE3BsI3x0hgTgLuy56iXuo"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "HXVf4soYFM3iiOewHZ6tk6LEnG9f7m7CVhU0EoVz"
}, 
"xyz-store.biz.id": {
"zone": "8ae812c35a94b7bd2da993a777b8b16d", 
"apitoken": "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4"
}
}
//=================================== === == =  =


//===============[ MASSAGE COMMAND ]===============//
global.mess = {
	owner: "*Akses Ditolak*\n_Fitur ini hanya untuk owner bot!_",
	premium: "*Akses Ditolak*\n_Fitur ini hanya untuk user premium!_",
	admin: "*Akses Ditolak*\n_Fitur ini hanya untuk admin grup!_",
	botAdmin: "*Akses Ditolak*\n_Fitur ini hanya untuk ketika bot menjadi admin!_",
	group: "*Akses Ditolak*\n_Fitur ini hanya untuk dalam grup!_",
	private: "*Akses Ditolak*\n_Fitur ini hanya untuk dalam private chat!_",
	prem: "*Akses Ditolak*\n_Fitur ini hanya untuk user premium!_",
	wait: 'Loading...',
	error: 'Error!',
	done: '\`Done\`'
}
//=================================== === == =  =

global.othermenu = ` *\`⊰⊹ Other Menu ⊹⊱\`*
  ェ  Nextmenu
  ェ  Cekidch
  ェ  Cekidgc
  ェ  Qc
  ェ  Brat
  ェ  Readviewonce
  ェ  Stickerwm
  ェ  Sticker
  ェ  Sewa
  ェ  Donasi`
global.searchmenu = ` *\`⊰⊹ Search Menu ⊹⊱\`*
  ェ  Yts
  ェ  Apkmod
  ェ  Pinterest
  ェ  Jarak`
global.toolsmenu = ` *\`⊰⊹ Tools Menu ⊹⊱\`*
  ェ  Ai
  ェ  Gpt
  ェ  Tourl
  ェ  Tourl2
  ェ  Ssweb
  ェ  Translate
  ェ  Tohd
  ェ  Shortlink
  ェ  Shortlink2
  ェ  Enc`
global.downloadmenu = ` *\`⊰⊹ Download Menu ⊹⊱\`*
  ェ  Tiktok
  ェ  Tiktokmp3
  ェ  Instagram
  ェ  Ytmp3
  ェ  Ytmp4
  ェ  Play
  ェ  Gitclone
  ェ  Mediafire`
global.groupmenu = ` *\`⊰⊹ Group Menu ⊹⊱\`*
  ェ  Add
  ェ  Kick
  ェ  Close
  ェ  Open
  ェ  Hidetag
  ェ  Kudetagc
  ェ  Leave
  ェ  Tagall
  ェ  Promote
  ェ  Demote
  ェ  Resetlinkgc
  ェ  On
  ェ  Off
  ェ  Linkgc`
global.funmenu = ` *\`⊰⊹ Fun Menu ⊹⊱\`*
  ェ  Tiktokvids
  ェ  Cekkhodam
  ェ  Namaninja
  ェ  Artinama
  ェ  Haribaik
  ェ  Weton`
global.panelmenu = ` *\`⊰⊹ Panel Menu ⊹⊱\`*
  ェ  Addseller
  ェ  Delseller
  ェ  Listseller
  ェ  1gb
  ェ  2gb
  ェ  3gb
  ェ  4gb
  ェ  5gb
  ェ  6gb
  ェ  7gb
  ェ  8gb
  ェ  9gb
  ェ  10gb
  ェ  11gb
  ェ  12gb
  ェ  13gb
  ェ  14gb
  ェ  15gb
  ェ  16gb
  ェ  17gb
  ェ  18gb
  ェ  19gb
  ェ  20gb
  ェ  Unlimited
  ェ  Cadmin
  ェ  Delpanel
  ェ  Deladmin
  ェ  Listpanel
  ェ  Listadmin
  
 *\`⊰⊹ Panel Private Menu⊹⊱\`*
  ェ  1gb-private
  ェ  2gb-private
  ェ  3gb-private
  ェ  4gb-private
  ェ  5gb-private
  ェ  6gb-private
  ェ  7gb-private
  ェ  8gb-private
  ェ  9gb-private
  ェ  10gb-private
  ェ  unlimited-v2
  ェ  cadmin-v2
  ェ  delpanel-v2
  ェ  deladmin-v2
  ェ  listpanel-v2
  ェ  listadmin-v2`
global.ownermenu = ` *\`⊰⊹ Owner Menu ⊹⊱\`*
  ェ  Autoread
  ェ  Autopromosi
  ェ  Autoreadsw
  ェ  Autotyping
  ェ  Addplugins
  ェ  Listplugins
  ェ  Delplugins
  ェ  Getplugins
  ェ  Saveplugins
  ェ  Addowner
  ェ  Listowner
  ェ  Delowner
  ェ  Self/Public
  ェ  Setimgmenu
  ェ  Setimgfake
  ェ  Setppbot
  ェ  Clearsession
  ェ  Clearchat
  ェ  Resetdb
  ェ  Restartbot
  ェ  Getsc
  ェ  Getcase
  ェ  Listgc
  ェ  Joingc
  ェ  Joinch
  ェ  Upchannel
  ェ  Upchannel2
  ェ  Addrespon
  ェ  Delrespon
  ェ  Listrespon
  ェ  Done
  ェ  Proses
  ェ  Jpm
  ェ  Jpm2
  ェ  Jpmhidetag
  ェ  Jpmhidetag2
  ェ  Jpmtesti
  ェ  Sendtesti
  ェ  Pushkontak
  ェ  Pushkontak2
  ェ  Payment
  ェ  Produk
  ェ  Subdomain`
global.xxxmenu = ` *\`⊰⊹ 18+ Menu ⊹⊱\`*
  ェ  Hentaivid
  ェ  Pornhubvid
  ェ  Neko
  ェ  Asupan`
global.islammenu = ` *\`⊰⊹ Islam Menu ⊹⊱\`*
  ェ  Kisahnabi
  ェ  Ayatkursi
  ェ  Bacaansholat
  ェ  Niatsholat`
global.gamemenu = ` *\`⊰⊹ Islam Menu ⊹⊱\`*
  ェ  Tebakkata
  ェ  Susunkata`
global.allmenu = `${othermenu}\n\n${groupmenu}\n\n${downloadmenu}\n\n${toolsmenu}\n\n${searchmenu}\n\n${funmenu}\n\n${gamemenu}\n\n${islammenu}\n\n${xxxmenu}\n\n${panelmenu}\n\n${ownermenu}`


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})