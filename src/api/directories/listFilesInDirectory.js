const axios = require('axios');

async function listFilesInDirectory(directoryPath) {
  try {
    const response = await axios.post('http://localhost:3000/api/listFilesInDirectory', {
      directoryPath,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error in listFilesInDirectory: ${error}`);
  }
}

module.exports = listFilesInDirectory;