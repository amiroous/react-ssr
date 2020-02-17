const WebpackConfig = {

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        "@babel/plugin-proposal-object-rest-spread",
                        "@babel/plugin-proposal-function-bind"
                    ]
                }
            }
        ]
    }
};

module.exports = WebpackConfig;