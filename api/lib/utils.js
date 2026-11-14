const path = require('path');
const fs = require('fs');

// Static require ensures @vercel/nft traces and bundles data files in serverless deployment
const projectsData = require('../data/projects.json');
const skillsData = require('../data/skills.json');

const STATIC_DATA = {
  'projects.json': projectsData,
  'skills.json': skillsData,
};

const dataDir = path.join(__dirname, '..', 'data');

function readJsonFile(fileName) {
  if (STATIC_DATA[fileName]) {
    return STATIC_DATA[fileName];
  }
  const filePath = path.join(dataDir, fileName);
  try {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return [];
  }
}

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function handleOptions(req, res) {
  if (req.method === 'OPTIONS') {
    setCorsHeaders(res);
    res.status(204).end();
    return true;
  }
  return false;
}

module.exports = { readJsonFile, setCorsHeaders, handleOptions };
