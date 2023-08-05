// pages/api/executeCommand.js

import axios from 'axios';
const KAGUYA_API_URL = 'http://localhost:3000/api'; // Replace with your Kaguya server URL

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://chat.openai.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, openai-conversation-id, openai-ephemeral-user-id');
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Handle preflight request (OPTIONS method)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  if (req.method === 'POST') {
    const { model, args } = req.body;
    if (!args) {
      return res.status(400).json({ message: 'Command parameter is required.' });
    }

    const response = await axios.post(`${KAGUYA_API_URL}/executeCommand`, { model, args });
    if (response.data.error) {
      console.error(`Error executing command: ${response.data.message}`); // Log error to console
      return res.status(500).json({ message: `Error executing command: ${response.data.message}`, output: response.data.output });
    }
    console.log(`Command executed successfully. Output: ${response.data.output}`); // Log output to console
    return res.status(200).json({ message: 'Command executed successfully.', output: response.data.output });
  } else {
    res.status(405).json({ message: 'Method not allowed. Please use POST.' });
  }
}
