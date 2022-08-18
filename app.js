require('colors');
const { inquireMenu,inquirePausa, inquireDescripcionTarea } = require('./helpers/inquirer');
const Tareas = require('./models/Tareas');




console.clear();

const main = async () => {

    const tareas = new Tareas(); 
    let option = '';
    do{
        option = await inquireMenu();    
        
        switch (option) {
            case '1':
                const desc = await inquireDescripcionTarea('Descripción:');
                tareas.crearTarea(desc);
                break;
        
                case '2':
                console.log(tareas._listado);
                break;
            default:
                break;
        }
        await inquirePausa();
    }
    while (option !== '0')
   
    
}
main()