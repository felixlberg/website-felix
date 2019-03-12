// In-Context Edit Configuration by Simplajs https://github.com/simplajs/simpla
const SIMPLA_CONFIG = {
  repo: 'felixlberg/website-felix',
  auth: new SimplaNetlify({ site: 'underground-consulting.netlify.com' }),
  source: 'https://underground-consulting.netlify.com',
  branch: 'master'
};
// Simplajs Init
Simpla.init(SIMPLA_CONFIG);
