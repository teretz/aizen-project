const assert = require('assert');
const executeCommand = require('../src/api/commands/executeCommand');
const appendToFile = require('../src/api/commands/appendToFile');
const createFile = require('../src/api/commands/createFile');
const deleteFile = require('../src/api/commands/deleteFile');
const renameFile = require('../src/api/commands/renameFile');
const update = require('../src/api/commands/update');
const updateAll = require('../src/api/commands/updateAll');
const createDirectory = require('../src/api/directories/createDirectory');
const deleteDirectory = require('../src/api/directories/deleteDirectory');
const listFilesInDirectory = require('../src/api/directories/listFilesInDirectory');
const readFile = require('../src/api/files/readFile');
const readMultipleFiles = require('../src/api/files/readMultipleFiles');

// Add your tests here

describe('executeCommand', function() {
  it('should return the correct result', async function() {
    const result = await executeCommand('echo hello');
    assert.strictEqual(result, 'hello');
  });
});

describe('createFile and deleteFile', function() {
  it('should create a new file and then delete it', async function() {
    await createFile('test.txt', 'Hello, world!');
    let files = await listFilesInDirectory('.');
    assert(files.includes('test.txt'));
    await deleteFile('test.txt');
    files = await listFilesInDirectory('.');
    assert(!files.includes('test.txt'));
  });
});

// Add more tests for the other functions...