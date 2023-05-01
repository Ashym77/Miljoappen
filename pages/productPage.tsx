import { NextPage } from 'next'
import MyContextProvider, { MyProduct } from '@/context/my-context-provider'
import { useContext } from 'react'
import Image from "next/image"
import { log } from 'console'


interface Props {

}


const ProductPage: NextPage<Props> = ({}) => {
    const{code} = useContext(MyProduct)

    const{product_name} = useContext(MyProduct)
    const {brands} = useContext(MyProduct)
    const {categories} = useContext(MyProduct)
    const {image_url} = useContext(MyProduct)
    const {ecoscore_grade} = useContext(MyProduct)
    const {ecoScoreImage} = useContext(MyProduct)

    const {ecoScoreLabel} = useContext(MyProduct)
    console.log(product_name);

  return <div>
<MyContextProvider>
<div><h1>{product_name}</h1></div>
<div><p>{brands}</p></div>
<div><Image src={image_url} alt={""} width={"0"}
          height={"0"}></Image></div>
    </MyContextProvider>

  </div>
}

export default ProductPage

