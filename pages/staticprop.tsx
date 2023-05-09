// interface Product {
//     code: string

//     product_name: string

//     brands: string

//     categories: string

//     image_url: string

//     ecoscore_grade: string

//     ecoScoreImage: string

//     ecoScoreLable: string
//   }

// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=countries&tag_contains_0=contains&tag_0=Sweden&tagtype_1=brands&tag_contains_1=contains&tag_1=Arla&sort_by=unique_scans_n&page_size=300&json=true')
//     const data = await res.json()

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props:{

//         data:String
//     }
//   }
// }

//   export default staticprop
