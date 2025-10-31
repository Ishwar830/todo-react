import { useContext } from 'react';
import CategoryForm from './CategoryForm';
import DialogModalTriggerButton from './DialogModalTriggerButton';
import { DispatchContext } from './Contexts';
import { ACTION_TYPES } from '../utils/actionTypes';

function EditCategoryButton({ initialData }) {
   const buttonLabel = 'Edit';
   const butttonStyles = 'bg-slate-800 rounded-xs w-16 h-8 text-white';
   return (
      <DialogModalTriggerButton
         buttonLabel={buttonLabel}
         buttonStyles={butttonStyles}
      >
         <CategoryForm initialData={initialData}></CategoryForm>
      </DialogModalTriggerButton>
   );
}

function CategoryInfo({ category }) {
   const dispatch = useContext(DispatchContext);

   return (
      <div className="flex flex-wrap items-center justify-between gap-4">
         <h1 className="font-mono text-4xl font-bold tracking-widest">
            {category.title}
         </h1>
         <div className="flex gap-4">
            <button
               onClick={() => {
                  dispatch({
                     type: ACTION_TYPES.DELETE_CATEGORY,
                     categoryID: category.uid,
                  });
               }}
               className="h-8 w-16 rounded-xs bg-slate-800 text-white"
            >
               Delete
            </button>
            <EditCategoryButton initialData={category}></EditCategoryButton>
         </div>
      </div>
   );
}

export default CategoryInfo;
