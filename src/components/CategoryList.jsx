function Category({ category, currentCategoryID, onCategorySelect }) {
   const isSelected = category.uid === currentCategoryID;
   const selectedCategoryStyles =
      'rounded-xl bg-amber-400 shadow-md/40 shadow-black';

   return (
      <li
         onClick={() => onCategorySelect(category.uid)}
         className={`flex overflow-hidden items-center justify-between gap-3 p-2 ${isSelected && selectedCategoryStyles}`}
      >
         <span className="flex-1 text-xl overflow-hidden text-ellipsis">{category.name}</span>
         <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
            {category.taskList.length}
         </span>
      </li>
   );
}

function CategoryList({ onCategorySelect, categoryList, currentCategoryID }) {
   const list = categoryList.map((category) => {
      return (
         <Category
            key={category.uid}
            category={category}
            currentCategoryID={currentCategoryID}
            onCategorySelect={onCategorySelect}
         ></Category>
      );
   });

   return <ul className="overflow-auto p-2 flex-1">{list}</ul>;
}

export default CategoryList;
