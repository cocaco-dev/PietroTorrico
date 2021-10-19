import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en el componte <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories}/>); 
    beforeEach (() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    })

    test('probar con el snapshot ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: {value} });
        const parrafo = wrapper.find('p').text().trim();
        expect(parrafo).toBe(value)

    })
    
    test('No debe de postear la información on submit ', () => {
        wrapper.find('form').simulate('submit', {preventDefault: ()=> {}});
        
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto ', () => {

        // 1.Simulació del InputChange
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', {target: {value}});

        // 2.Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault: ()=>{}})

        // 3. SetCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // 4. El valor del inputo debe ser ''
        expect(wrapper.find('input').prop('value')).toBe('')
    })
    

    

})