import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';
import DialogModalTriggerButton from './DialogModalTriggerButton';

function AddCategoryButton() {
   const buttonLabel = 'Add Category';
   const butttonStyles =
      'rounded-md shadow-md/40 shadow-gray-800 bg-slate-100 p-2 text-xl transition-transform hover:scale-105 hover:bg-slate-300';
   return (
      <DialogModalTriggerButton
         buttonLabel={buttonLabel}
         buttonStyles={butttonStyles}
      >
         <CategoryForm></CategoryForm>
      </DialogModalTriggerButton>
   );
}

function SidePanel() {
   return (
      <>
         <aside className="flex h-dvh flex-col gap-2 overflow-hidden bg-sky-600 p-4 shadow-xl/40">
            <div className="flex justify-center">
               <AddCategoryButton></AddCategoryButton>
            </div>
            <CategoryList></CategoryList>
         </aside>
      </>
   );
}

export default SidePanel;
