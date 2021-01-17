const os = require('os')
const colors = require('colors')
const { readFileSync } = require('fs')
const { format } = require('date-fns')

const total = Math.trunc(os.totalmem() / 1024 ^ 2)
const free = Math.trunc(os.freemem() / 1024 ^ 2)

let seconds = os.uptime()
let date = format(new Date(0).setSeconds(seconds), 'hh:mm:ss')
  
console.log(colors.magenta.bold(readFileSync('ascii.txt', 'utf8').toString()))
console.log(` OS → ${os.version}\n Hostname → ${os.hostname}\n Kernel → ${os.release}\n Arch → ${os.arch}\n Memory → ${free}/${total}\n Uptime → ${date}`.magenta.bold)