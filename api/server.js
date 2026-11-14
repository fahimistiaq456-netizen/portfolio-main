const http = require('http');

const indexHandler = require('./index');
const projectsHandler = require('./projects');
const skillsHandler = require('./skills');
const contactHandler = require('./contact');

const PORT = process.env.PORT || 5001;

// Helper to decorate Node's res with Express/Vercel-like helper methods (.status, .json)
function enrichResponse(res) {
  res.status = function (code) {
    res.statusCode = code;
    return res;
  };
  res.json = function (data) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
    return res;
  };
  return res;
}

const server = http.createServer(async (req, res) => {
  enrichResponse(res);

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // Handle CORS Preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(204).end();
  }

  // Parse JSON body for POST requests
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', async () => {
      try {
        req.body = body ? JSON.parse(body) : {};
      } catch (err) {
        req.body = {};
      }
      routeRequest(pathname, req, res);
    });
  } else {
    routeRequest(pathname, req, res);
  }
});

async function routeRequest(pathname, req, res) {
  try {
    if (pathname === '/api/projects' || pathname === '/api/projects/') {
      return projectsHandler(req, res);
    }
    if (pathname === '/api/skills' || pathname === '/api/skills/') {
      return skillsHandler(req, res);
    }
    if (pathname === '/api/contact' || pathname === '/api/contact/') {
      return contactHandler(req, res);
    }
    if (pathname === '/' || pathname === '/api' || pathname === '/api/') {
      return indexHandler(req, res);
    }

    res.status(404).json({ error: 'Not found' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

server.listen(PORT, () => {
  console.log(`\n🚀 Portfolio Backend API is running at http://localhost:${PORT}`);
  console.log(`   - Root:     http://localhost:${PORT}/api`);
  console.log(`   - Projects: http://localhost:${PORT}/api/projects`);
  console.log(`   - Skills:   http://localhost:${PORT}/api/skills`);
  console.log(`   - Contact:  http://localhost:${PORT}/api/contact\n`);
});
