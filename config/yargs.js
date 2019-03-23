const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 't',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multimplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}