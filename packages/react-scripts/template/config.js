const {
  argv
} = require('yargs')
const localIP = require('local-ipv4-address')
const fsPromises = require('fs').promises

async function main(argv) {
  const ip = await localIP()
  const src = argv.local ?
    `http://${ip}:3000/` :
    `index.html`

  let config = await fsPromises.readFile('config.xml', 'utf8')
  config = config.replace(/content src="(.*)"/g, `content src="${src}"`)
  await fsPromises.writeFile('config.xml', config, 'utf8')
}

main(argv)
  .catch(console.error)
