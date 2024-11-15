import React, { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { useEffect } from "react";
import axios from "axios";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts]=useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await axios.get(
          "https://fakestoreapi.com/products"
        );
      setProducts(fetchedProducts.data)
      setFilteredProducts(fetchedProducts.data);
      } catch (error) {
        console.log(error.response.data.error)
      }
    };
    fetchProducts();
  }, []);
  console.log(products)
  const filterProducts=(category)=>{
    if(category==="mens"){
        setFilteredProducts(
          products.filter((prod) => prod.category === "men's clothing")
        );
    }else if(category==="womens"){
        setFilteredProducts(
          products.filter((prod) => prod.category === "women's clothing")
        );

    }else if(category==="electronics"){

           setFilteredProducts(
             products.filter((prod) =>prod.category==="electronics")
           );

    }else{
          setFilteredProducts(
            products
          );

    }


  }

  return (
    <>
      <Header />
      <div className="py-2 ">
        <h1 className="font-bold text-center underline my-2">
          Category Filter
        </h1>
        <ul className="flex justify-around font-semibold">
          <li className="cursor-pointer" onClick={() => filterProducts("All")}>
            All Products
          </li>
          <li className="cursor-pointer" onClick={() => filterProducts("mens")}>
            mens clothing
          </li>
          <li
            className="cursor-pointer"
            onClick={() => filterProducts("womens")}
          >
            womens clothing
          </li>
          <li
            className="cursor-pointer"
            onClick={() => filterProducts("electronics")}
          >
            electronics{" "}
          </li>
        </ul>
      </div>
      <div className="flex  flex-wrap  w-full">
        {filteredProducts?.map((product, index) => {
          return (
            <div className="p-5 mb-72">
              <ProductCard
                key={index}
                title={product?.title}
                category={product?.category}
                price={product?.price}
                description={product?.description}
                image={product?.image}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductsPage;
