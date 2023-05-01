import { NextPage } from 'next'
import MyContextProvider, { MyProduct } from '@/context/my-context-provider'
import { useContext } from 'react'
import Image from "next/image"
import { log } from 'console'


interface Props {

}

const productPage: NextPage<Props> = ({}) => {
   
  
  
  const{code} = useContext(MyProduct)
    const{product_name} = useContext(MyProduct)
    const {brands} = useContext(MyProduct)
    const {categories} = useContext(MyProduct)
    const {image_url} = useContext(MyProduct)
    const {ecoscore_grade} = useContext(MyProduct)
    const {ecoScoreImage} = useContext(MyProduct)
    const {ecoScoreLabel} = useContext(MyProduct) 

    

  return( <div>



    











  



  </div>

  )
}

export default productPage