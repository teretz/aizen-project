const axios = require('axios');

async function updateAll(filePath, searchString, replacementString) {
  try {
    const response = await axios.post('http://localhost:3000/api/updateAll', {
      filePath,
      searchString,
      replacementString,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error in updateAll: ${error}`);
  }
}

module.exports = updateAll;