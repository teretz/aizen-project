const axios = require('axios');

async function createDirectory(directoryPath) {
  const response = await axios.post('http://localhost:3000/api/createDirectory', {
    directoryPath,
  });
  return response.data;
}

module.exports = createDirectory;