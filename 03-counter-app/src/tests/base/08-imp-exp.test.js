import { getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp.js";
import { heroes } from "../../data1/heroes.js";

describe ('Pruebas en funciones de heroes', () => {

    test('Debe retornar un heroe ', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);

    });

    test('Debe retornar Undefine', () => {        
        const id = 10;
        const heroe = getHeroeById(id);        
        expect(heroe).toBe(undefined);
    });

    test('Debe retornar un arreglo con los heroes de DC ', () => {        
        const owner = 'DC';
        const arrHeroes = getHeroesByOwner(owner);
        const arrData = heroes.filter ((h)=> h.owner === owner);
        // console.log(arrData);
        expect(arrHeroes).toEqual(arrData);
    });

    test('Debe retornar un array de length 2', () => {        
        const owner = 'Marvel'
        const ownerArray = getHeroesByOwner(owner);            
        expect(ownerArray.length).toBe(2);                  
    });



    
})