#!/usr/bin/env node

// Import necessary functions (to be defined)
const {
  appendToFile,
  createDirectory,
  createFile,
  deleteDirectory,
  deleteFile,
  executeCommand,
  listFilesInDirectory,
  readFile,
  readMultipleFiles,
  renameFile,
  update,
  updateAll,
  updateWholeFile
} = require('./api');

const command = process.argv[2];
const model = process.argv[3];
const args = process.argv.slice(4);

switch (command) {
  case 'appendToFile':
    appendToFile(model, args);
    break;
  case 'createDirectory':
    createDirectory(model, args);
    break;
  case 'createFile':
    createFile(model, args);
    break;
  case 'deleteDirectory':
    deleteDirectory(model, args);
    break;
  case 'deleteFile':
    deleteFile(model, args);
    break;
  case 'executeCommand':
    executeCommand(model, args);
    break;
  case 'listFilesInDirectory':
    listFilesInDirectory(model, args);
    break;
  case 'readFile':
    readFile(model, args);
    break;
  case 'readMultipleFiles':
    readMultipleFiles(model, args);
    break;
  case 'renameFile':
    renameFile(model, args);
    break;
  case 'update':
    update(model, args);
    break;
  case 'updateAll':
    updateAll(model, args);
    break;
  case 'updateWholeFile':
    updateWholeFile(model, args);
    break;
  default:
    console.error('Unknown command:', command);
    process.exit(1);
}