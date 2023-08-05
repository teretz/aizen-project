const axios = require('axios');

async function deleteDirectory(directoryPath) {
  try {
    const response = await axios.post('http://localhost:3000/api/deleteDirectory', {
      directoryPath,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error in deleteDirectory: ${error}`);
  }
}

module.exports = deleteDirectory;