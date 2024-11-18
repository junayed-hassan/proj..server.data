import { useState } from "react"
import Products from "./components/products"
import Sidebar from "./components/Sidebar"
import { useEffect } from "react";
import { api } from "./api/Api";
import CreateProducts from "./components/CreateProducts";

function App() {
 const [products, setProducts] = useState([]);
 const [category, setCategory] = useState([]);

 useEffect(() => {
  try {
    async function getData() {
      // const conn = await fetch("http://localhost:3000/products");
      // const data = await conn.json();
      // setProducts(data);
      const conn = await api.get("/products");
      setProducts(conn.data);
    }
    getData();
    
  } catch (error) {
    console.log(error);
  }
 },[])

 useEffect(() => {
  try {
    async function getCategory() {
      // const cate = await fetch("http://localhost:3000/categories");
      // const cateData = await cate.json();
      // setCategory(cateData);
      const cate = await api.get("/categories");
      setCategory(cate.data);
    }  
    getCategory();
  } catch (error) {
    console.log(error);
  }
 },[])

  return (
    <>
    <div className="grid grid-cols-12 px-16 py-7 bg-gray-100 gap-7">
     <Sidebar category={category}/>
     {/* <Products products={products}/> */}
     <CreateProducts/>
    </div>
    </>
  )
}

export default App