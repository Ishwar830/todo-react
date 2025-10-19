import { useState } from "react";

function CategoryForm({handleCategoryFormData, closeDialog }) {
   const [categoryName, setCategoryName] = useState("");

   function handleInputChange(e) {
      setCategoryName(e.target.value);
   }

   function resetFormData(){
      setCategoryName("");
   }

   function handleFormSubmit() {
      const formData = {
         categoryName,
         mode: "add"
      }
      handleCategoryFormData(formData);
      closeForm();
   }

   function closeForm(){
      resetFormData();
      closeDialog();
   }

   return (
      <form
         onSubmit={handleFormSubmit}
         action="#"
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
               type="button"
               onClick={handleFormSubmit}
               className="flex-1 rounded-xl border-2 bg-slate-100 p-2"
            >
               Submit
            </button>
            <button
               type="button"
               onClick={closeForm}
               className="flex-1 rounded-xl border-2 bg-slate-100 p-2"
            >
               Close
            </button>
         </div>
      </form>
   );
}

export default CategoryForm;
