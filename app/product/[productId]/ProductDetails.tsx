"use client"; 

interface ProductDetailsProps{
    product: any
}

const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {
    const productRating = product.reviews.reduce((acc:number,item:any) => item.rating + acc, 0)/ product.reviews.length
  
    return (  <div>product</div>);
}
 
export default ProductDetails;