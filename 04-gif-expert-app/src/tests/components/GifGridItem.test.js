import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import { GifGridItem } from '../../components/GifGridItem';

describe('Debemos mostrar el componente <GifGridItem/>', () => {   
    const title = 'Un título';
    const url = "https://google.com";
    const className = "animate__fadeIn";
    const wrapper = shallow(<GifGridItem title = {title} url = {url}/>)

    test('Muestra el componente ', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de tener un parrafo con el title ', () => {
        const p = wrapper.find('p').text();
        expect(p.trim()).toBe(title)
    })

    test('Debe de tener una imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Debe tener el className = FadeIn ', () => {
        const div = wrapper.find('div');           
        expect(div.prop('className').includes(className)).toBe(true); //Verificamos que en classname exista la const classname, si es así es tru
    })
    
    
    
})