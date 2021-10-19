import React  from 'react'
import { useFectchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types'


export const GifGrid = ({category}) => {
    
    // const [images, setImages] = useState([])
    const {data: images, loading} = useFectchGifs(category);


    // getGifs();
    return (
        <>
            <h3>{category}</h3>   
            {loading ? <p className="animate__animated animate__flash" >Loading</p> : null}                     
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                }            
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}