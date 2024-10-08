const { option } = require('yargs');

const argv = require('yargs')
        .option('b',{
            alias:'base',
            type:'number',
            demandOption: true
        })
        .check((argv,options)=>{
            if(isNaN(argv.b)){
                throw 'La base debe ser un numero'
            }
            return true;
        })
        .option('l',{
            alias:'listar',
            type:'boolean',
            default:false,
            describe:'Muestra la tabla en consola'
        })
        .option('h',{
            alias:'hasta',
            type:'number',
            default: 10,
            describe:'indicador del alcance del multiplicador'
        })
        .check((argv,options)=>{
            if(isNaN(argv.h)){
                throw 'El Multiplicador debe ser un Numero'
            }
            return true;
        })
        .argv;

module.exports = argv;     