import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { product } from "@/utils/product";
import React from "react";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  // {products.map((product: any) => {
  //   return <ProductCard data={product} />;
  // })}

  

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
