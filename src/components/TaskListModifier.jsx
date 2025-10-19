function TaskListModifier() {
   return (
      <div className="flex justify-between mt-4 mb-4">
         <div>
            <label htmlFor="taskNameSearch">Search: </label>
            <input className="border-2 rounded-xs p-1 bg-gray-100" type="search" name="taskName" id="taskNameSearch" />
         </div>
         <div>
            <label htmlFor="sortSelect">Sort By: </label>
            <select className="bg-gray-200 p-1" name="sortOption" id="sortSelect">
               <option value="alphabetical">A-Z</option>
               <option value="date">Date</option>
               <option value="priority">Priority</option>
            </select>
         </div>
      </div>
   );
}

export default TaskListModifier;
