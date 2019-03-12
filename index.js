const SIMPLA_CONFIG = {
  repo: 'felixlberg/felixlberg.github.io',
  auth: new SimplaNetlify({ site: 'simpla-theme.netlify.com' }),
  source: window.location.origin,
  branch: 'master'
};

// Init Simpla
Simpla.init(SIMPLA_CONFIG);
