const axios = require('axios');

async function renameFile(oldFilePath, newFilePath) {
  try {
    const response = await axios.post('http://localhost:3000/api/renameFile', {
      oldFilePath,
      newFilePath,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error in renameFile: ${error}`);
  }
}

module.exports = renameFile;