const fs = require('fs-extra')

beforeEach(() => writeTestFile(''))
it('does nothing', () => console.log('does nothing'))

function writeTestFile(txt) {
  return fs
    .writeFile(`${__dirname}/test-file.js`, txt)
    .then(()=> console.log('hi!'))
    .catch(console.error)
}

function readTestFile() {
  return fs.readFile(`${__dirname}/test-file.js`)
}
