import React from 'react'
import { useParams } from 'react-router-dom'
import { 
  airPurifyingPlants, 
  fragrantPlants, 
  medicinalPlants 
} from '../../assets/data';
import SingleProductComponent from '../../component/product-list/single-product';

const SinglePlant = () => {
    const { id } = useParams();

    const allPlants = [
        ...airPurifyingPlants,
        ...fragrantPlants,
        ...medicinalPlants
    ];

    const plants = allPlants.find((item) => item?.id === Number(id));

    return (
        <>
            <SingleProductComponent plants={plants} />
        </>
    );
};

export default SinglePlant;