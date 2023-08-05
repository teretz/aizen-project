const axios = require('axios');

async function update(filePath, searchString, replacementString) {
  try {
    const response = await axios.post('http://localhost:3000/api/update', {
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
    console.error(`Error in update: ${error}`);
  }
}

module.exports = update;