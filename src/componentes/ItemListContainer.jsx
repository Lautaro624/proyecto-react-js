import React, {useState, useEffect} from 'react';

import Title from './Title';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const albums = [
    { id: 1, price: 900, image: "../images/gibson-lespaul-bonamassa.png", category:"prog", title: "Gibson Les Paul Joe Bonamassa" },
    { id: 2, price: 750, image: "../images/epiphone-sg-standard.png", category:"prog", title: "Epiphone SG Standard 60s" },
    { id: 3, price:650, image: "../images/epiphone-explorer.png", category: "rock", title: "Epiphone Explorer" },
    { id: 4, image: "../images/flying-v.png", category: "rock", title: "Flying V Prophecy" },
    
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(albums);
            }, 250);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(album => album.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }


    }, [categoriaId])

    
    
    return (
        <>
            <Title greeting={texto}/>
            <div className='counter d-flex img-fluid justify-content-center mx-3 p-3'>
               <ItemList data={data}/> 
            </div>
            
        </>
    )
}

export default ItemListContainer;