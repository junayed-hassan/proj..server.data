
function Sidebar({category}) {
  return (
    <div className="col-span-3 bg-white p-4 rounded-md ">
    <h2 className="text-[26px] font-bold pb-4 whitespace-nowrap">product categories</h2>
    <ul className="grid gap-3 sticky top-4 ">
        {category.map((c) => <li key={c.id} className="text-xl font-normal p-3 bg-green-300 rounded-md hover:bg-green-600 hover:text-yellow-50 capitalize">{c.title}</li>)}
    </ul>
  </div>
  )
}

export default Sidebar