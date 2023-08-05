const axios = require('axios');

async function readFile(filePath) {
  try {
    const response = await axios.post('http://localhost:3000/api/readFile', {
      filePath,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error in readFile: ${error}`);
  }
}

module.exports = readFile;