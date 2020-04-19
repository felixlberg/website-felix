'use strict';
// Import Simpla and OAuth adapter
import Simpla from 'simpla';
import SimplaNetlify from 'simpla/adapters/netlify';
// In-Context Edit Configuration by Simplajs https://github.com/simplajs/simpla
Simpla.init({
  repo: 'felixlberg/website-felix',
  auth: new SimplaNetlify({ site: 'underground-consulting.netlify.com' }),
  source: 'https://underground-consulting.netlify.com',
  branch: 'master'
});
// Simplajs Init
window.Simpla = Simpla;
