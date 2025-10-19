import CategoryForm from './CategoryForm';
import DialogModalTriggerButton from './DialogModalTriggerButton';

function EditCategoryButton({ handleCategoryFormData, initialData }) {
   const buttonLabel = 'Edit';
   const butttonStyles = 'bg-slate-800 rounded-xs w-16 h-8 text-white';
   return (
      <DialogModalTriggerButton
         buttonLabel={buttonLabel}
         buttonStyles={butttonStyles}
      >
         <CategoryForm
            handleCategoryFormData={handleCategoryFormData}
            initialData={initialData}
         ></CategoryForm>
      </DialogModalTriggerButton>
   );
}

function CategoryInfo({ category, handleCategoryFormData, onDeleteCategory }) {
   return (
      <div className="flex min-h-1/10 flex-wrap items-center justify-between gap-4">
         <h1 className="font-mono text-4xl font-bold">{category.name}</h1>
         <div className="flex gap-4">
            <button onClick={() => onDeleteCategory(category.uid)} className="h-8 w-16 rounded-xs bg-slate-800 text-white">
               Delete
            </button>
            <EditCategoryButton
               handleCategoryFormData={handleCategoryFormData}
               initialData={{category}}
            ></EditCategoryButton>
         </div>
      </div>
   );
}

export default CategoryInfo;
