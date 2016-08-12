'user strict';

const path = require('path');
const srcDir = path.join(__dirname, 'src');

require('blanket')({
  // Only files that match the pattern will be instrumented
  pattern: srcDir
});
