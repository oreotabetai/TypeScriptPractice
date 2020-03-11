const path = require('path');

//指定した値を外部から読み込んで再利用できる
module.exports = {
    mode: 'development',
    entry: './ts/index.ts',
    // バンドルを出力する場所と名付け
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    },

    module: {
        rules: [{// 拡張子が.tsの場合コンパイルする
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },

    // importを解決
    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [
            '.ts',
            '.js'
        ]
    }
};