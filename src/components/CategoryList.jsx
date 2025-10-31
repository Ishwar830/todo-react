import { useContext } from 'react';
import { AppStateContext, DispatchContext } from './Contexts';
import { ACTION_TYPES } from '../utils/actionTypes';

function Category({ category }) {
   const appState = useContext(AppStateContext);
   const dispatch = useContext(DispatchContext);
   const isSelected = category.uid === appState.currentCategoryID;
   const selectedCategoryStyles =
      'rounded-xl bg-amber-400 shadow-md/40 shadow-black';

   return (
      <li
         onClick={() => {
            dispatch({
               type: ACTION_TYPES.CATEGORY_SELECTED,
               categoryID: category.uid,
            });
         }}
         className={`flex items-center justify-between gap-3 overflow-hidden p-2 ${isSelected && selectedCategoryStyles}`}
      >
         <span className="flex-1 overflow-hidden text-xl text-ellipsis">
            {category.title}
         </span>
         <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
            {category.taskList.length}
         </span>
      </li>
   );
}

function CategoryList() {
   const appState = useContext(AppStateContext);
   const list = appState.categoryList.map((category) => {
      return <Category key={category.uid} category={category}></Category>;
   });

   return <ul className="flex-1 overflow-auto p-2">{list}</ul>;
}

export default CategoryList;
