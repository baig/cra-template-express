/* eslint-disable @typescript-eslint/no-var-requires */
const { remove, copy } = require('fs-extra');

(async () => {
  try {
    // Hanlde api
    await copy('api/build', 'dist/api/build');
    await copy('api/ormconfig.ts', 'dist/api/ormconfig.ts');
    await copy('api/package.json', 'dist/api/package.json');
    // Handle client
    await copy('build', 'dist/client');
    await remove('build');
  } catch (error) {
    console.log(error);
  }
})();
