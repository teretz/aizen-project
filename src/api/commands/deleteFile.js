const axios = require('axios');

async function deleteFile(filePath) {
  try {
    const response = await axios.post('http://localhost:3000/api/deleteFile', {
      filePath,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error in deleteFile: ${error}`);
  }
}

module.exports = deleteFile;