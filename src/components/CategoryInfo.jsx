

function CategoryInfo({ category }) {
   return (
      <div className="flex items-center justify-between flex-wrap min-h-1/10 gap-4">
         <h1 className="text-4xl font-mono font-bold">{category.name}</h1>
         <div className="flex gap-4">
            <button className="bg-slate-800 rounded-xs w-16 h-8 text-white">Delete</button>
            <button className="bg-slate-800 rounded-xs w-16 h-8 text-white">Edit</button>
         </div>
      </div>
   );
}

export default CategoryInfo;
