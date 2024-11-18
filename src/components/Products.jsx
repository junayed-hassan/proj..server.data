import ProductsItems from "./ProductsItems";

export default function Products({products}) {
  return (
    
    <div className="col-span-9 bg-white p-4 rounded-md">
    <h2 className="text-3xl font-bold pb-4">Our products</h2>
    <ul className="grid grid-cols-12 gap-4">
        {products.map(p => <ProductsItems product={p} key={p.id}/>)}
    </ul>
  </div> 
  )
}
