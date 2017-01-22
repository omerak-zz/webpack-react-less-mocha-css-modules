process.env.NODE_ENV = 'test';

import hook from 'css-modules-require-hook'
import less from 'postcss-less'


hook({
  extensions: [ '.less' ],
  processorOpts: { parser: less.parse },
})


function noop() {
  return null;
}

