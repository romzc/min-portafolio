const fs = require('fs');

fs.writeFileSync('./.env', `APU=${process.env.API}\n`);