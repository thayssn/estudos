const path = require('path');


module.exports = {
    entry: path.resolve(__dirname, 'app', 'app.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true,
    },
}