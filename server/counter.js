const fs = require('fs');
const { promisify } = require('util')

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

async function counter() {
    try {
        let data = await readFileAsync('./values.json')
        data = JSON.parse(data.toString())
        data['id'] = ("00000"+(parseInt(data['id'])+1)).slice(-5)
        await writeFileAsync('./values.json', JSON.stringify(data))
        return data['id']
    }
    catch (err) {
        console.log(err)
    }
}
module.exports.counter = counter