const axios = require('axios');
const baseURL = 'http://localhost:3000'; // Kaguya server URL

// Function to execute a shell command
async function executeCommand(model, args) {
  const response = await axios.post(`${baseURL}/executeCommand`, { model, args });
  console.log(response.data);
}

// Function to list files in a directory
async function listFilesInDirectory(model, args) {
  const response = await axios.post(`${baseURL}/listFilesInDirectory`, { model, args });
  console.log(response.data);
}

// Function to read the content of a file
async function readFile(model, args) {
  const response = await axios.post(`${baseURL}/readFile`, { model, args });
  console.log(response.data);
}

// Function to read the content of multiple files
async function readMultipleFiles(model, args) {
  const response = await axios.post(`${baseURL}/readMultipleFiles`, { model, args });
  console.log(response.data);
}

// Function to rename a file
async function renameFile(model, args) {
  const response = await axios.post(`${baseURL}/renameFile`, { model, args });
  console.log(response.data);
}

// Function to update a file by performing a search-and-replace operation
async function update(model, args) {
  const response = await axios.post(`${baseURL}/update`, { model, args });
  console.log(response.data);
}

// Function to update a file by performing a search-and-replace operation on all occurrences
async function updateAll(model, args) {
  const response = await axios.post(`${baseURL}/updateAll`, { model, args });
  console.log(response.data);
}

// Function to replace the entire content of a file
async function updateWholeFile(model, args) {
  const response = await axios.post(`${baseURL}/updateWholeFile`, { model, args });
  console.log(response.data);
}

// Function to create a new file
async function createFile(model, args) {
  const response = await axios.post(`${baseURL}/createFile`, { model, args });
  console.log(response.data);
}

// Function to delete a file
async function deleteFile(model, args) {
  const response = await axios.post(`${baseURL}/deleteFile`, { model, args });
  console.log(response.data);
}

// Function to append content to the end of an existing file
async function appendToFile(model, args) {
  const response = await axios.post(`${baseURL}/appendToFile`, { model, args });
  console.log(response.data);
}

// Function to create a new directory
async function createDirectory(model, args) {
  const response = await axios.post(`${baseURL}/createDirectory`, { model, args });
  console.log(response.data);
}

// Function to delete a directory and its contents
async function deleteDirectory(model, args) {
  const response = await axios.post(`${baseURL}/deleteDirectory`, { model, args });
  console.log(response.data);
}

// Command-line argument handling
const command = process.argv[2];
const model = process.argv[3];
const args = process.argv.slice(4);

switch (command) {
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
  case 'createFile':
    createFile(model, args);
    break;
  case 'deleteFile':
    deleteFile(model, args);
    break;
  case 'appendToFile':
    appendToFile(model, args);
    break;
  case 'createDirectory':
    createDirectory(model, args);
    break;
  case 'deleteDirectory':
    deleteDirectory(model, args);
    break;
  default:
    console.error('Unknown command. Please refer to the documentation for a list of available commands.');
    process.exit(1);
}