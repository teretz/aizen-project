const axios = require('axios');

async function appendToFile(filePath, contentToAppend) {
  const response = await axios.post('http://localhost:3000/api/appendToFile', {
    filePath,
    contentToAppend,
  });
  return response.data;
}

module.exports = appendToFile;