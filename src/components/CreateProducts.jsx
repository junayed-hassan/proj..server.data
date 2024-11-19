import { useEffect, useState } from "react";
import { api } from "../api/Api";
import useInput from "../hooks/useInput";

function CreateProducts() {
  const {attr:titleProps,onClear:titleClear} = useInput("");
  const {attr:categoryProps,onClear:categoryClear} = useInput("");
  const {attr:messageProps,onClear:messageClear} = useInput("");
  const {attr:imageProps,onClear:imageClear} = useInput("");
  const {attr:priceProps,onClear:priceClear} = useInput("");
  const {attr:rattingProps,onClear:rattingClear} = useInput("");
  const [category,setCategory] = useState([]);
  
  const handlerSave = () => {
    const fromData = {
      id: crypto.randomUUID(),
      title: titleProps.value,
      image: imageProps.value,
      description: messageProps.value,
      price: priceProps.value,
      ratting: rattingProps.value,
      category: categoryProps.value,
    };
    api.post("/products", fromData)

    titleClear();
    categoryClear();
    messageClear();
    imageClear();
    priceClear();
    rattingClear();

  };

  useEffect(() => {
    try {
      async function getCategory() {
        const cate = await api.get("/categories");
        setCategory(cate.data)
      }
      getCategory();
    } catch (error) {
      console.log(error);
    }
  },[])

  return (
    <div className="col-span-9 bg-white p-4 rounded-md ">
      <h2 className="text-[26px] font-bold pb-4 whitespace-nowrap uppercase">
        create product
      </h2>

      <div className="mb-5">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your title
        </label>
        <input
          type="text"
          id="title"
          {...titleProps}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <div>
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          id="countries"
          {...categoryProps}
          className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {category.map((e)=><option key={e.id}>{e.title}</option>)}
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          {...messageProps}
          id="message"
          rows="4"
          className="mb-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      <div className="mb-5">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your image
        </label>
        <input
          type="text"
          id="image"
          {...imageProps}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your price
        </label>
        <input
          type="number"
          {...priceProps}
          id="price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your ratting
        </label>
        <input
          max={5}
          min={0}
          type="number"
          {...rattingProps}
          id="ratting"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <button
        onClick={handlerSave}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Save post
      </button>
    </div>
  );
}

export default CreateProducts;
