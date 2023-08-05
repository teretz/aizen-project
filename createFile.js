const axios = require('axios');

module.exports = function createFile(filePath, content) {
  return axios.post('http://localhost:3000/api/createFile', {
    filePath,
    content,
  })
  .then(response => response.data)
  .catch(error => console.error(error));
};