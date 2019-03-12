const SIMPLA_CONFIG = {
  repo: 'felixlberg/felixlberg.github.io',
  auth: new SimplaNetlify({ site: 'underground-consulting.netlify.com' }),
  source: window.location.origin,
  branch: 'master'
};

// Init Simpla
Simpla.init(SIMPLA_CONFIG);
