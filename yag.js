const os = require('os')
const colors = require('colors')
const { readFileSync } = require('fs');
const { min } = require('moment');

const restan = (os.totalmem() / 1024 / 1024)
const to = (os.freemem() / 1024 / 1024)
const calc1 = (Math.trunc(`${restan}`))
const calc2 = (Math.trunc(`${to}`))

let segu = os.uptime()
let minu = segu/60
let horr = minu/60 
   
segu = Math.floor(segu)
minu = Math.floor(minu) 
horr = Math.floor(horr) 
  
horr = horr%60
minu = minu%60 
segu = segu%60
  
 console.log(colors.magenta.bold(readFileSync('ascii.txt', 'utf8').toString()))
console.log(` OS → ${os.version}\n Hostname → ${os.hostname}\n Kernel → ${os.release}\n Arch → ${os.arch}\n Memory → ${calc2}/${calc1}\n Uptime → ${horr}:${minu}:${segu}`.magenta.bold)