const axios = require('axios');

async function executeCommand(command) {
  try {
    const response = await axios.post('http://localhost:3000/api/executeCommand', {
      command,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error in executeCommand: ${error}`);
  }
}

module.exports = executeCommand;