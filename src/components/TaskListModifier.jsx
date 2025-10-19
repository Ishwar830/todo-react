function TaskListModifier({ updateSearchString, updateSortOption }) {
   return (
      <div className="mt-4 mb-4 flex justify-between">
         <div>
            <label htmlFor="taskNameSearch">Search: </label>
            <input
               onChange={(e) => {
                  updateSearchString(e.target.value);
               }}
               className="rounded-xs border-2 bg-gray-100 p-1"
               type="search"
               name="taskName"
               id="taskNameSearch"
            />
         </div>
         <div>
            <label htmlFor="sortSelect">Sort By: </label>
            <select
               onChange={(e) => updateSortOption(e.target.value)}
               className="bg-gray-200 p-1"
               name="sortOption"
               id="sortSelect"
            >
               <option value="default">Default</option>
               <option value="alphabetical">A-Z</option>
               <option value="date">Date</option>
               <option value="priority">Priority</option>
            </select>
         </div>
      </div>
   );
}

export default TaskListModifier;
