const { setCorsHeaders, handleOptions } = require('./lib/utils');

module.exports = (req, res) => {
  if (handleOptions(req, res)) return;

  setCorsHeaders(res);

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  return res.status(200).json({
    name: 'Md. Fahim Istiaq Siam Portfolio API',
    status: 'online',
    version: '1.0.0',
    endpoints: {
      projects: '/api/projects',
      skills: '/api/skills',
      contact: '/api/contact',
    },
  });
};
