const fs = require("fs")
const os = require('os');

let handler = async (m, { Sky, isCreator, isPremium, qtext, runtime, toIDR, Reply }) => {
let teksnya = `
\`USER - INFORMATION\`
  • Number : ${m.sender.split("@")[0]}
  • Status : *${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}*

*\`Owner Only\`*

 *\`⊰⊹ 𝔇𝔦𝔤𝔦𝔱𝔞𝔩 𝔒𝔠𝔢𝔞𝔫 𝔐𝔢𝔫𝔲 ⊹⊱\`*
  ェ  r1c1
  ェ  r2c1
  ェ  r4c2
  ェ  r8c4
  ェ  r16c4
  ェ  sisadroplet
  ェ  deldroplet
  ェ  listdroplet
  ェ  rebuild
  ェ  restartvps
  
 *\`⊰⊹ ℑ𝔫𝔰𝔱𝔞𝔩𝔩𝔢𝔯 𝔐𝔢𝔫𝔲 ⊹⊱\`*
  ェ  hackbackpanel
  ェ  installpanel
  ェ  installtemastellar
  ェ  installtemabilling
  ェ  installtemaenigma
  ェ  uninstallpanel
  ェ  uninstalltema
`
await Sky.sendMessage(m.chat, {react: {text: '⏱', key: m.key}})
await Reply(`${teksnya}`)
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}

handler.command = [".nextmenu"]

module.exports = handler