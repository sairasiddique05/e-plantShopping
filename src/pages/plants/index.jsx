import React from 'react'
import { plantsData } from '../../assets/data';
import ProductList from '../../component/product-list';





const PlantPage = () => {
 const airPurifyingPlants = plantsData?.filter(
    (item) => item?.category === "Air Purifying"
  );

  // Filter Fragrant plants
  const fragrantPlants = plantsData?.filter(
    (item) => item?.category === "Fragrant"
  );

  const medicinalPlants = plantsData?.filter(
    (item) => item?.category === "Medicinal"
  );

  return (
    <div className='container-fluid text-center  py-5 pb-5' >


           <h2 className="font-bold mb-3 text-center">Air Purifying Plants</h2>
           <ProductList  products={airPurifyingPlants}/>

             <h2 className="mb-4 text-center mt-5">Fragrant Plants</h2>
      <ProductList products={fragrantPlants} />

      <h2 className="mb-4 text-center mt-5">Medicinal Plants</h2>
      <ProductList products={medicinalPlants} />
           
    </div>
  )
}

export default PlantPage