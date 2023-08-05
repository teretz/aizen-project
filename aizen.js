const yargs = require('yargs');
const listFilesInDirectory = require('./listFilesInDirectory');
const readFile = require('./readFile');
const createFile = require('./createFile');
const deleteFile = require('./deleteFile');
const update = require('./update');
const updateAll = require('./updateAll');
const renameFile = require('./renameFile');
const executeCommand = require('./executeCommand');
const createDirectory = require('./createDirectory');
const deleteDirectory = require('./deleteDirectory');
const readMultipleFiles = require('./readMultipleFiles');

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