import common from '@rosmarinus/common-plugins';

const external = [];

/**
 * @param {import('rollup').InternalModuleFormat} format
 * @param {string | undefined} banner
 * @returns {import('rollup').RollupOptions}
 */
function getConfig(format, banner = undefined) {
  return {
    input: 'src/index.ts',
    output: {
      file: `dist/${format}/index.js`,
      format,
      banner,
      sourcemap: true,
    },
    external,
    plugins: [common()],
  };
}

export default [getConfig('cjs'), getConfig('es')];
