const yargs = require('yargs');
const listFilesInDirectory = require('../api/directories/listFilesInDirectory');
const readFile = require('../api/files/readFile');
const createFile = require('../api/commands/createFile');
const deleteFile = require('../api/commands/deleteFile');
const update = require('../api/commands/update');
const updateAll = require('../api/commands/updateAll');
const renameFile = require('../api/commands/renameFile');
const executeCommand = require('../api/commands/executeCommand');
const createDirectory = require('../api/directories/createDirectory');
const deleteDirectory = require('../api/directories/deleteDirectory');
const readMultipleFiles = require('../api/files/readMultipleFiles');

yargs.command({
  command: 'list',
  describe: 'List files in a directory',
  builder: {
    directory: {
      describe: 'Directory path',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    listFilesInDirectory(argv.directory)
      .then(files => console.log(files))
      .catch(error => console.error(error));
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a file',
  builder: {
    file: {
      describe: 'File path',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    readFile(argv.file)
      .then(content => console.log(content))
      .catch(error => console.error(error));
  },
});

// Add similar interfaces for the other commands...

yargs.parse();