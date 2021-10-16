import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {
    
    test('Debe retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        // console.log(user);

        expect(user).toEqual(userTest);

    })
    

    // getUsuarioActivo debe retonara un objeto
    test('getUsuarioActivo debe retornar un objeto ', () => {

        const nombre = 'Juan' 
        const userActive = getUsuarioActivo(nombre);   

        expect(userActive).toEqual({
            uid: 'ABC567',
            username: nombre,
        });

    })
    
})