const fs = require('fs').promises;
const path = require('path');

// fs.readdir('./') // caminho da pasta que vai ser escaneado
// fs.readdir(path.resolve(__dirname)) // caminho absoluto - lê os arquivos e retorna um arrayinformando quais arquivos tem na pasta
//     .then(files => console.log(files))
//     .catch(e => console.log(e));

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir); // função para andar pelos arquivos
}
async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath); // Mostrar estatíticas do arquivo 

        // se tiver node modules no caminho da pasta, não mostre...continue
        if(/node_modules/.test(fileFullPath)) continue;
        // se tiver git no caminho da pasta, não mostre...continue
        if(/\.git/.test(fileFullPath)) continue;    
        
        // Entrar nos diretórios e listar os arquivos
        if(stats.isDirectory()) { // se for um diretório
            readdir(fileFullPath); // leia os arquivos dentro do diretório
            continue;
        } 
        // encontrar os arquivos html
        if(!/\.html$/.test(fileFullPath)) continue;
        
        console.log(fileFullPath); 
    }
}

readdir('/media/ricardo/Pessoal/projetos/javascript/curso-js-ts-udemy/');