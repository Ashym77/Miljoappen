import { NextApiRequest, NextApiResponse } from "next";
import { useState, useEffect } from "react";
import { json } from "stream/consumers";

 export type Product= {
    code: string;
    product_name: string;
    ingredients_text: string;
    ecoscore_grade: string;
    image_url:string;
    nutriments:string;
  
    // Add more properties as needed
  }

  const productlist:Product[]=[]


  export default async function handler(
    req:NextApiRequest, res:NextApiResponse<Product[]>) {

        const response =await fetch("https://world.openfoodfacts.org/api/v0/product/8715700423869.json")
        const data = await response.json()

data.foreach(({code, product_name, ingredients_text,ecoscore_grade,image_url,nutriments}:Product) => {
productlist.push({

    code,
    product_name,
    ingredients_text,
    ecoscore_grade,
    image_url,
    nutriments
   


})
})
res.status(200).json(productlist)
   


  }
  
