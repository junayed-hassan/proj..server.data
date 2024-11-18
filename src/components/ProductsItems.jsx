import { getImage } from "../utils/getimage";

function ProductsItems({product}) {
  const image = getImage(`../assets/blog_images/${product.image}`);
  return (
    <li className="col-span-4 border rounded-[3px] overflow-hidden shadow-md">
    <img src={image} alt="#" />
    <div className="px-1">
      <h3 className="text-xl font-medium pt-2 ">{product.title}</h3>
      <p className="text-sm text-gray-400">{product.category}</p>
      <div className="flex justify-between mt-2">
        <p className="font-medium text-base">{product.price}</p>
        <p className="font-medium text-base text-yellow-400">{product.ratting}</p>
      </div>
    </div>
    <button className="py-2 bg-green-600 text-yellow-100 text-center w-full mt-2">Read More</button>                
  </li>
  )
}

export default ProductsItems