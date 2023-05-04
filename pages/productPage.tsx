import { useRouter } from 'next/router';
import { useState } from 'react';



const ProductPage = () => {
  const router = useRouter();
  
  const {
    code,
    product_name,
    brands,
    categories,
    image_url,
    ecoscore_grade,
    ecoScoreImage,
    ecoScoreLabel,
  } = router.query;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Code: {code}</p>
      <p>Product Name: {product_name}</p>
      <p>Brands: {brands}</p>
      <p>Categories: {categories}</p>
     
      <img src={image_url} alt={product_name} />
      <p>Eco Score Grade: {ecoscore_grade}</p>
     <img src={ecoScoreImage} alt={`EcoScore: ${ecoscore_grade}`} />
      <p>Eco Score Label: {ecoScoreLabel}</p>
    </div>
  );
};

export default ProductPage;
