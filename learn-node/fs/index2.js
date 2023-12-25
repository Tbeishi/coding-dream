const fs = require('fs')

// fs.writeFileSync('./target.md','举头望明月')

const img = fs.readFileSync('./avater.jpg')

fs.writeFileSync('./pic/avater.jpg',img)