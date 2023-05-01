import React, { createContext, ReactNode, useContext, useState } from 'react'



interface UserProviderProps {
    children: ReactNode
}


interface ProductContextProps {
    code: string

    product_name: string

    brands: string

    categories: string

    image_url: string

    ecoscore_grade: string

    ecoScoreImage: string

    ecoScoreLabel: string

    setCode: (code: string) => void

    setProduct_name: (product_name: string) => void

    setBrands: (brands: string) => void

    setCategories: (categories: string) => void

    setImage_url: (image_url: string) => void

    setEcoscore_grade: (ecoscore_grade: string) => void

    setEcoScoreImage: (ecoScoreImage: string) => void

    setEcoScoreLabel: (ecoScoreImageLabel: string) => void
}
const initialProductContext: ProductContextProps = {
    code: "",

    product_name: "",

    brands: "",

    categories: "",

    image_url: "",

    ecoscore_grade: "",

    ecoScoreImage: "",

    ecoScoreLabel: "",

    setCode: () => { },

    setProduct_name: () => { },

    setBrands: () => { },

    setCategories: () => { },

    setImage_url: () => { },

    setEcoscore_grade: () => { },

    setEcoScoreImage: () => { },

    setEcoScoreLabel: () => { },
}
export const MyProduct = createContext<ProductContextProps>(initialProductContext)

const MyContextProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [code, setCode] = useState<string>(initialProductContext.code)
    const [product_name, setProduct_name] = useState<string>(initialProductContext.product_name)
    const [brands, setBrands] = useState<string>(initialProductContext.brands)
    const [categories, setCategories] = useState<string>(initialProductContext.categories)
    const [image_url, setImage_url] = useState<string>(initialProductContext.image_url)
    const [ecoscore_grade, setEcoscore_grade] = useState<string>(initialProductContext.ecoscore_grade)
    const [ecoScoreImage, setEcoScoreImage] = useState<string>(initialProductContext.ecoScoreImage)
    const [ecoScoreLabel, setEcoScoreLabel] = useState<string>(initialProductContext.ecoScoreLabel)

    const contextValue: ProductContextProps = {

        code,

        product_name,

        brands,

        categories,

        image_url,

        ecoscore_grade,

        ecoScoreImage,

        ecoScoreLabel,

        setCode: (code: string) => setCode(code),

        setProduct_name: (product_name: string) => setProduct_name(product_name),

        setBrands: (brands: string) => setBrands(brands),

        setCategories: (categories: string) => setCategories(categories),

        setImage_url: (image_url: string) => setImage_url(image_url),

        setEcoscore_grade: (ecoscore_grade: string) => setEcoscore_grade(ecoscore_grade),

        setEcoScoreImage: (ecoScoreImage: string) => setEcoScoreImage(ecoScoreImage),

        setEcoScoreLabel: (ecoScoreLabel: string) => setEcoScoreLabel(ecoScoreLabel)


    }
    return (<MyProduct.Provider value={contextValue}  >

    {children   }
    </MyProduct.Provider>

    )
 
}


export default MyContextProvider