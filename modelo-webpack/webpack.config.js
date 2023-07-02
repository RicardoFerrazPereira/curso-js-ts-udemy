// Importar um módulo do node (path) para trabalhar com caminhos
const path = require('path');

// Exportar um objeto que será a configuração do Webpack
module.exports = {
    mode: 'development', 
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'), // Local para onde vai o bundle
        filename: 'bundle.js' // Nome do arquivo
    },
    module: {
        rules: [{   // Regras, um array de objetos
            exclude: /node_modules/,  // Não quero que o webpack análise essa pasta, pois pode deixar o sistema lento
            test: /\.js$/, // Teste qual o arquivo que vai ser lido ou analisado
            use: {   // O que que o webpack vai usar
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            } 
        }, {
           test: /\.css$/,
           use: ['style-loader', 'css-loader']
        }] 
    },
    devtool: 'source-map'
}
