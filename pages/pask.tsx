import { NextPage } from 'next'
import styles from "../styles/pask.module.css"
import { MuiBottomNavBar } from '@/p-components/MuiBottomNavBar'
import Link from 'next/link'
import Image from "next/image"
import React, { useState, useEffect } from "react";

interface Product {
  code: string;
  product_name: string;
  ingredients_text: string;
  ecoscore_grade: string;
  image_url:string;
  nutriments:string;


  // Add more properties as needed
}

const OpenFoodFact: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://world.openfoodfacts.org/api/v0/product/737628064502.json")
   
      .then((response) => response.json())
      .then((data) => {
        setProducts([data.product]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>OpenFoodFact Products</h1>


      <div>
        {products.map((product) => (
          <li key={product.code}>
            {product.product_name}: {product.ingredients_text} :
             {product.ecoscore_grade}
          
             <p></p>
            <img src={product.image_url} alt={product.product_name}
            width={"200"}
            height={"200"}  className={styles.image22}></img>
          </li>
        ))}
      </div>




      
<div className={styles.navdiv}>
    <MuiBottomNavBar/>
    </div>


    </div>
  );
};

export default OpenFoodFact;