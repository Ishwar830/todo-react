import { useEffect, useState } from 'react';

function CategoryForm({ handleCategoryFormData, initialData = null }) {
   const [categoryName, setCategoryName] = useState('');
   
   useEffect(() => {
      if (initialData) {
         setCategoryName(initialData.category.name);
      } else {
         setCategoryName('');
      }
   }, [initialData]);

   function handleInputChange(e) {
      setCategoryName(e.target.value);
   }

   function resetFormData() {
      setCategoryName('');
   }

   function handleFormSubmit() {
      if (!categoryName) return;
      const formData = {
         newData: {
            categoryName,
         },
         initialData,
      };
      handleCategoryFormData(formData);
      resetFormData();
   }

   return (
      <form
         onSubmit={handleFormSubmit}
         action="#"
         method="dialog"
         className="grid h-[max-content] w-[250px] gap-4 rounded-xl border-2 bg-white p-5"
      >
         <div>
            <label htmlFor="category-name" className="text-xl font-bold">
               Category-Title:
            </label>
            <input
               onChange={handleInputChange}
               value={categoryName}
               type="text"
               id="category-name"
               name="category-name"
               className="mt-2 w-full border-2"
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
