require('colors');
const inquirer = require('inquirer');

const questions = [
    {
        type:'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value:'1',
                name: '1. Crear Lista'
            },
            {
                value:'2',
                name: '2. Listar tareas'
            },{
                value:'3',
                name: '3. Listar tareas completadas'
            },{
                value:'4',
                name: '4. Listar tareas pendientes'
            },{
                value:'5',
                name: '5. Borrar tarea'
            },{
                value:'0',
                name: '0. Salir\n'
            }]

    }
]
const inquireMenu = async () => {
    console.clear();
    console.log('================================'.green);
    console.log('     Seleccione una opción      '.green);
    console.log('================================\n'.green);

    //const prompt = inquirer.createPromptModule()

    const {option} = await inquirer.prompt(questions);
    console.log('\n');
    return option;
}

const inquirePausa = async() => {
    
    const question = [{
        type:'input',
        name: 'enter',
        message: `Presione ${'enter'.green} para continuar`
    }]
    await inquirer.prompt(question);
}

const inquireDescripcionTarea = async(message) => {
    const question =[{
        type: 'input',
        name: 'desc',
        message,
        validate(value){
            if(value.length === 0){
                return 'Por favor ingrese un valor';
            }
            return true;
        }
    }]
    const {desc} = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inquireMenu,
    inquirePausa,
    inquireDescripcionTarea
}