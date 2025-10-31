import { useImmer } from 'use-immer';
import { useContext } from 'react';
import { DispatchContext } from './Contexts';
import { ACTION_TYPES } from '../utils/actionTypes';

const defaultData = {
   title: '',
};

function CategoryForm({ initialData }) {
   const data = initialData || defaultData;
   const dataCopy = { ...data };
   const [categoryData, setCategoryData] = useImmer(dataCopy);
   const dispatch = useContext(DispatchContext);

   function handleInputChange(e) {
      setCategoryData((draft) => {
         draft.title = e.target.value;
      });
   }

   function handleFormSubmit() {
      const actionType = !initialData
         ? ACTION_TYPES.ADD_CATEGORY
         : ACTION_TYPES.UPDATE_CATEGORY;

      dispatch({
         type: actionType,
         data: categoryData,
      });
   }

   return (
      <form
         onSubmit={handleFormSubmit}
         action="#"
         method="dialog"
         className="grid h-[max-content] w-[250px] gap-4 p-4"
      >
         <div>
            <label htmlFor="category-name" className="text-xl font-bold">
               Category-Title:
            </label>
            <input
               onChange={handleInputChange}
               value={categoryData.title}
               type="text"
               id="category-name"
               name="category-name"
               className="mt-2 w-full border-2"
               required
            />
         </div>
         <div className="flex gap-4">
            <button
               type="submit"
               className="flex-1 rounded-xl border-2 bg-slate-100 p-2"
            >
               Submit
            </button>
         </div>
      </form>
   );
}

export default CategoryForm;
