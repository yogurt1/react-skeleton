import {rollup} from 'rollup';
import babel from 'rollup-plugin-babel';

const config = {
    entry: './src/index.js',
    dest: './lib/index.js',
    sourceMap: true,
    format: 'cjs',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ],
    globals: [
        "styled-components"
    ]
}

export default config;
