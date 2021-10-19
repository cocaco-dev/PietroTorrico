import React from 'react';
import { useFectchGifs } from '../../hooks/useFetchGifs';
import {shallow} from 'enzyme'
import { GifGrid } from '../../components/GifGrid';
import '@testing-library/jest-dom';
jest.mock('../../hooks/useFetchGifs');

describe('pruebas con el componente <GifGrid/>', ()=> {
    
    const category = 'One PunchMan';   

    test('Debemos probar el snapshot ', () => {        

        useFectchGifs.mockReturnValue({ //ERROR, NO ES RECONOCIDO COMO UNA FUNCIÓN
            data: [],
            loading: false
        });
        const wrapper = shallow(<GifGrid category = {category}/>)
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de mostrar items cuando se cargan imágenes UseFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://google.com',
            title: 'Titulo de ejemplo'
        },
        {
            id: '123',
            url: 'https://google.com',
            title: 'Titulo de ejemplo'
        }
        ]

        useFectchGifs.mockReturnValue({ 
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category = {category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
    

});