import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from "../styles/productPage.module.css"



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

      <div className={styles.productImageContainer2}>
        <img className={styles.productImage} src={image_url} alt={product_name} />
      </div>

    <div className={styles.productNameContainer2}>
    <p className={styles.product_name}>Product Name: {product_name}</p>
    </div>
      


<div className={styles.infoCard}>
  {/* <div className = {styles.ecoScoreContainer}> */}
    <div className = {styles.ecoScoreImageContainer}>
  <img className = {styles.ecoScoreImage}src={ecoScoreImage} alt={`EcoScore: ${ecoscore_grade}`} />

  </div>
      <div className={styles.ecoScoreLabelContainer}>
        <p className={styles.ecoScoreLabel}>Eco Score Label: {ecoScoreLabel}</p>
        </div>

    <table>
      <tr>
<th>Kategori</th>
<th>Påverkan</th>


      </tr>
    </table>

    <div className={styles.categoriesContainer}><p className={styles.categories}></p>
<p className={styles.categories}>Kategori</p></div>

<div className={styles.impactContainer}><p className={styles.impact}></p>
<p className={styles.categories}>Påverkan</p></div>
    
      
          
          
          
         
        {/* </div> */}
  
</div>
      





      {/* <p className={styles.ecoscore_grade}>Eco Score Grade:</p>
      <h1 className={styles.headline}>Product Details</h1>
      <p className={styles.code}>Code:</p>
      <p className={styles.product_name}>Product Name: {product_name}</p>
      <p className={styles.brands}>Brands: </p>
      <p className={styles.categories}>Categories</p> */}
     
      
   
    </div>
  );
};

export default ProductPage;
