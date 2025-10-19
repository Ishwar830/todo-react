import CategoryList from './CategoryList';

function SidePanel({ onCategorySelect, categoryList, currentCategoryID }) {
   return (
      <>
         <aside className="bg-sky-600 shadow-xl/40">
            <div className="mt-4 flex justify-center">
               <button className="rounded-md shadow-md/40 shadow-gray-800 bg-slate-100 p-2 text-xl transition-transform hover:scale-105 hover:bg-slate-300">
                  Add Category
               </button>
            </div>
            <CategoryList
               categoryList={categoryList}
               currentCategoryID={currentCategoryID}
               onCategorySelect={onCategorySelect}
            ></CategoryList>
         </aside>
      </>
   );
}

export default SidePanel;
