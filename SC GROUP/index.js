/* 
=========================================================================
=========================================================================

Saya(Andikarecode) Pertama Kali
Menemukan Script Ini Dari Youtube
Nama Channel Nya <Daffa> Kayaknya.
Lalu Saya Recode.
Tapi Kelihatan Nya Script Ini Punya <Skyzo>
=×××=×××=×××=×××=×××=×××=×××=×××=×××=×××=
https://whatsapp.com/channel/0029Vav7vtlI7BeEQ5z7qH3c
{( IKUTI SALURAN SAYA )}
=×××=×××=×××=×××=×××=×××=×××=×××=×××=×××=
AndikaRecode

=========================================================================
=========================================================================
*/

require('./settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const FileType = require('file-type');
const { exec } = require('child_process');
const { say } = require('cfonts')
const { Boom } = require('@hapi/boom');
const NodeCache = require('node-cache');

const { default: WAConnection, generateWAMessageFromContent, 
prepareWAMessageMedia, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage } = require('@whiskeysockets/baileys');

const pairingCode = global.pairing_code || process.argv.includes('--pairing-code');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

/*const { cleaningSession } = require("./library/boostsession");
(async () => {
await setInterval(async () => {
await cleaningSession("./session")
}, 10000)
})()*/


//================================================================================

const DataBase = require('./source/database');
const database = new DataBase();
(async () => {
	const loadData = await database.read()
	if (loadData && Object.keys(loadData).length === 0) {
		global.db = {
			users: {},
			groups: {},
			database: {},
			settings : {}, 
			...(loadData || {}),
		}
		await database.write(global.db)
	} else {
		global.db = loadData
	}
	
	setInterval(async () => {
		if (global.db) await database.write(global.db)
	}, 3500)
})();

//================================================================================

const { MessagesUpsert, Solving } = require('./source/message')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./library/function');

//================================================================================

async function startingBot() {
    const store = await makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
	const { state, saveCreds } = await useMultiFileAuthState('session');
	const { version, isLatest } = await fetchLatestWaWebVersion()
	
	const Sky = WAConnection({
        printQRInTerminal: !pairingCode, 
        logger: pino({ level: "silent" }),
        auth: state,
        browser: ["Ubuntu","Chrome","22.04.2"],
        generateHighQualityLinkPreview: true,     
    	getMessage: async (key) => {
         if (store) {
           const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
           return msg?.message || undefined
         }
           return {
          conversation: 'WhatsApp Bot By Skyzopedia'
         }}		
	})
	
	
		if (pairingCode && !Sky.authState.creds.registered) {
		let phoneNumber;
	    phoneNumber = await question(chalk.black(chalk.blue.bold("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nKatsBotz V0.0.0.0.1\n"), chalk.white.bold("© 2024 - Recode AndikaBotz"), chalk.white(`\nMasukan Nomor WhatsApp,\nContoh Format Number +6285XXX\n`)))
			phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
		
			let code = await Sky.requestPairingCode(phoneNumber);
			code = code.match(/.{1,4}/g).join(" - ") || code
			console.log(chalk.white.bold(`Your Pairing Code :`), chalk.blue.bold(code))
	}
	
//================================================================================
	
Sky.ev.on('creds.update', await saveCreds)

//================================================================================

Sky.ev.on('connection.update', async (update) => {
		const { connection, lastDisconnect, receivedPendingNotifications } = update
		if (connection === 'close') {
			const reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.connectionLost) {
				console.log('Connection to Server Lost, Attempting to Reconnect...');
				startingBot()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log('Connection closed, Attempting to Reconnect...');
				startingBot()
			} else if (reason === DisconnectReason.restartRequired) {
				console.log('Restart Required...');
				startingBot()
			} else if (reason === DisconnectReason.timedOut) {
				console.log('Connection Timed Out, Attempting to Reconnect...');
				startingBot()
			} else if (reason === DisconnectReason.badSession) {
				console.log('Delete Session and Scan again...');
				startingBot()
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log('Close current Session first...');
				startingBot()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log('Scan again and Run...');
				exec('rm -rf ./session/*')
				process.exit(1)
			} else if (reason === DisconnectReason.Multidevicemismatch) {
				console.log('Scan again...');
				exec('rm -rf ./session/*')
				process.exit(0)
			} else {
				
Sky.end(`Unknown DisconnectReason : ${reason}|${connection}`)
			}
		}
		if (connection == 'open') {
Sky.sendMessage(Sky.user.id.split(":")[0] + "@s.whatsapp.net", {text: `${`*[ ! ] Andika Botz v0.0.0.0.1*
Don't forget to follow to the channel » https://whatsapp.com/channel/0029Vav7vtlI7BeEQ5z7qH3c so you can get the latest updates about this script`.toString()}`})

try {
Sky.newsletterFollow(String.fromCharCode(49, 50, 48, 51, 54, 51, 50, 57, 55, 51, 49, 52, 52, 55, 48, 56, 52, 55, 64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114))
} catch (e) {
}
console.log(chalk.green.bold(`\nBot WhatsApp Connected ✓\n`))
		} else if (receivedPendingNotifications == 'true') {
			console.log('Please wait About 1 Minute...')
		}
	});


await store.bind(Sky.ev)	
await Solving(Sky, store)
	
//================================================================================
	
Sky.ev.on('messages.upsert', async (message) => {
 await MessagesUpsert(Sky, message, store);
});

//================================================================================

Sky.ev.on('contacts.update', (update) => {
		for (let contact of update) {
			let id = 
Sky.decodeJid(contact.id)
			if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
		}
});

//================================================================================
	
Sky.ev.on('group-participants.update', async (update) => {
const { id, author, participants, action } = update
	try {
  const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻"
      }
    }
  }
  if (global.db.groups[id] && global.db.groups[id].welcome == true) {
    const metadata = await Sky.groupMetadata(id)
    let teks
    for(let n of participants) {
      let profile;
      try {
        profile = await Sky.profilePictureUrl(n, 'image');
      } catch {
        profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png';
      }
      let imguser = await prepareWAMessageMedia({
        image: {
          url: profile
        }
      }, {
        upload: Sky.waUploadToServer
      })
      if(action == 'add') {
        teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
        if (author) {
        let asu = await Sky.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })}
await Sky.sendMessage(id, {
text: `@${n.split('@')[0]} Hello bro, welcome to our whatsapp group
> _Rent a bot! Typing .sewa to rent_`,
contextInfo: {
  mentionedJid: [author, n],
  forwardingScore: 1,
  isForwarded: true,
                   forwardedNewsletterMessageInfo: {
  newsletterJid: global.idSaluran,
  serverMessageId: null,
  newsletterName: global.namaSaluran,
  },
  externalAdReply: {
  title: `💜 Welcome...`,
  body: `Name Bot : ${global.botname2}`,
  thumbnailUrl: global.image.welcome,
  sourceUrl: global.linkSaluran,
  mediaType: 1,
  renderLargerThumbnail: true
  }
  }
  }, {})
      } else if(action == 'remove') {
        teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
        let asu = await Sky.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
await Sky.sendMessage(id, {
text: `GoodBye @${n.split('@')[0]}, I hope you don't come back`,
contextInfo: {
  mentionedJid: [author, n],
  forwardingScore: 1,
  isForwarded: true,
                   forwardedNewsletterMessageInfo: {
  newsletterJid: global.idSaluran,
  serverMessageId: null,
  newsletterName: global.namaSaluran,
  },
  externalAdReply: {
  title: `🤍 GoodBye...`,
  body: `Name Bot : ${global.botname2}`,
  thumbnailUrl: global.image.bye,
  sourceUrl: global.linkSaluran,
  mediaType: 1,
  renderLargerThumbnail: true
  }
  }
  }, {})
      } else if(action == 'promote') {
        teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
        let asu = await Sky.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        }, {})
      } else if(action == 'demote') {
        teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
        let asu = await Sky.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        }, {})
      }
    }
  }
} catch (e) {}
});

//================================================================================
	
Sky.ev.on('groups.update', async (update) => {
		try {
		const data = update[0]
		const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻"
      }
    }
  }
		if (data?.inviteCode) {      
		let botNumber = Sky.user.id.split(":")[0]
		let participant = data.author
		if (participant.split("@")[0] === botNumber) return      
  await Sky.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *mereset* link grup`, mentions: [participant]}, {quoted: qtext})
		}
		
		if (data?.desc) {
		let botNumber = Sky.user.id.split(":")[0]
		let participant = data.author
		if (participant.split("@")[0] === botNumber) return      
		await Sky.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *memperbarui* deskripsi grup`, mentions: [participant]}, {quoted: qtext})
		}
		
		if (data?.subject) {
		let botNumber = Sky.user.id.split(":")[0]
		let participant = data.author
		if (participant.split("@")[0] === botNumber) return      
		await Sky.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *mengganti* nama grup`, mentions: [participant]}, {quoted: qtext})
		}		
		
		
		} catch (e) {
		}
});

//================================================================================

return Sky

}


startingBot()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});