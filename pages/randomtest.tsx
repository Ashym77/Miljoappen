import { log } from "console";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/randmtest.module.css"

interface Props {}

interface Product {
  code: string;
  product_name: string;
  brands: string;
  categories: string;
  image_url: string;
  grade: string;
}

function ProductList() {
  const [filteredProduct, setFilteredProduct] = useState<Product>({ code: "", product_name: "", brands: "", categories: "", image_url: "", grade: "" });
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        "https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=countries&tag_contains_0=contains&tag_0=Sweden&sort_by=unique_scans_n&page_size=200&json=true"
      );

      const data = await response.json();

      if (data.products) {
        const productList = data.products.map((product: any) => {
          return {
            code: product.code,
            product_name: product.product_name,
            brands: product.brands,
            categories: product.categories,
            image_url: product.image_url,
            grade: product.nutriscore_grade || ""
          };
        });

        setProducts(productList);
      } else {
        setProducts([]);
      }
    }

    fetchProducts();
  }, []);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value.toLowerCase();

    const newFilteredProduct = products.find((product) => {
      const productName = product.product_name?.toLowerCase();
      return productName?.includes(searchTerm);
    });

    if (newFilteredProduct) {
      setFilteredProduct(newFilteredProduct);
    } else {
      setFilteredProduct({ code: "", product_name: "", brands: "", categories: "", image_url: "", grade: "" });
    }
  }

  return (
    <div >
      <h1>Product List</h1>
      <input
        type="search"
        onChange={(event) => {
          handleSearch(event);
        }}
      />
      {filteredProduct.code !== "" ? (
        <div className=" border-cyan-600 bg-white">
          <h3>{filteredProduct.product_name}</h3>
          <p>{filteredProduct.brands}</p>
          <p>{filteredProduct.categories}</p>
          <p>Grade: {filteredProduct.grade}</p>
          <img src={filteredProduct.image_url} alt={filteredProduct.product_name} />
        </div>
      ) : (
        <div >
          {products.map((product) => (
            <div key={product.code} className={styles.cardContainer} >
              <h3 className={styles.h3}>{product.product_name}</h3>
              <p>{product.brands}</p>
              <p>{product.categories}</p>
              <p>Grade: {product.grade}</p>
              <img src={product.image_url} alt={product.product_name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const RandomTest: NextPage<Props> = ({}) => {
  return <ProductList />;
};

export default RandomTest;