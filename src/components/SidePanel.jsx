import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';
import DialogModalTriggerButton from './DialogModalTriggerButton';

function AddCategoryButton({handleCategoryFormData}) {
   const buttonLabel = 'Add Category';
   const butttonStyles =
      'rounded-md shadow-md/40 shadow-gray-800 bg-slate-100 p-2 text-xl transition-transform hover:scale-105 hover:bg-slate-300';
   return (
      <DialogModalTriggerButton buttonLabel={buttonLabel} buttonStyles={butttonStyles}>
         <CategoryForm handleCategoryFormData={handleCategoryFormData}></CategoryForm>
      </DialogModalTriggerButton>
   );
}

function SidePanel({
   onCategorySelect,
   categoryList,
   currentCategoryID,
   handleCategoryFormData,
}) {
   return (
      <>
         <aside className="flex h-dvh flex-col gap-2 bg-sky-600 p-4 shadow-xl/40 overflow-hidden">
            <div className="flex justify-center">
               <AddCategoryButton
                  handleCategoryFormData={handleCategoryFormData}
               ></AddCategoryButton>
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
