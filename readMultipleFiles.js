const axios = require('axios');

async function readMultipleFiles(filePaths) {
  try {
    const response = await axios.post('http://localhost:3000/api/readMultipleFiles', {
      filePaths,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error in readMultipleFiles: ${error}`);
  }
}

module.exports = readMultipleFiles;