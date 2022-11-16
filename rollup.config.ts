/**
 * @description plugin rollup config
 * @author 阿怪
 * @date 2022/11/17 02:22
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

export default ({
  input: 'lib/index.ts',
  plugins: [typescript(), json()],
  output: [{
    sourcemap: true,
    file: 'dist/index.js',
    format: 'cjs'
  }],
  external: [
    'path',
    'fs',
    'os',
    'node:url',
    'node:module'
  ]
});
