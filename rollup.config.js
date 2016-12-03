import {rollup} from 'rollup';
import babel from 'rollup-plugin-babel';

const config = {
    entry: './src/entry.js',
    dest: 'static/bundle.js',
    sourceMap: true,
    format: 'umd',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}

export default config;
