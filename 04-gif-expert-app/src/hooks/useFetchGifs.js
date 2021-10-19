import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFectchGifs = ( category ) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs =>{

                setstate({
                    data:imgs,
                    loading: false
                });  
                                       
            })
    }, [category]);

    // setTimeout(() => {
    //     setstate({
    //         data: [1,2,3,4,5,6],
    //         loading: false
    //     })
    // }, 1500);

    return state; // {data:[], loading:true}
}