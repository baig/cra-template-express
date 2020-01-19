/* eslint-disable @typescript-eslint/no-var-requires */
const { remove, copy, emptyDir } = require('fs-extra');

(async () => {
  try {
    // Empty the template
    await emptyDir('../template');
    // Handle api directory
    await remove('api/node_modules');
    await remove('api/build');
    await copy('api', '../template/api');
    await remove('../template/api/yarn.lock');
    // Handle public directory
    await copy('public', '../template/public');
    // Handle src directory
    await copy('src', '../template/src');
    // Handle each files
    await copy('.editorconfig', '../template/.editorconfig');
    await copy('.eslintignore', '../template/.eslintignore');
    await copy('.eslintrc', '../template/.eslintrc');
    await copy('.prettierrc', '../template/.prettierrc');
    await copy('tsconfig.json', '../template/tsconfig.json');
    await copy('distribute.js', '../template/distribute.js');
    await copy('README.md', '../template/README.md');
    await copy('.gitignore', '../template/gitignore');
  } catch (error) {
    console.log(error);
  }
})();
