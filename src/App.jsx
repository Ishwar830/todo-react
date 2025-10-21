import { useImmer } from 'use-immer';
import dummyData from './utils/dummyDataGenerator';
import { useState } from 'react';
import SidePanel from './components/SidePanel';
import MainPanel from './components/MainPanel';
import Category from './utils/category';
import Task from './utils/task';

function App() {
   const [categoryList, setCategoryList] = useImmer(dummyData);
   const [currentCategoryID, setcurrentCategoryID] = useState(
      categoryList[0].uid
   );
   const [currentTaskID, setCurrentTaskID] = useState(null);

   const currentCategory = categoryList.find(
      (category) => category.uid === currentCategoryID
   );
   const currentTaskList = currentCategory?.taskList;
   const currentTask = currentTaskList?.find(
      (task) => task.uid === currentTaskID
   );

   function onCategorySelect(categoryID) {
      setcurrentCategoryID(categoryID);
      setCurrentTaskID(null);
   }

   function onTaskSelect(taskID) {
      setCurrentTaskID(taskID);
   }

   function onDeleteTask(taskID) {
      const newTaskList = currentCategory.taskList.filter(
         (task) => task.uid !== taskID
      );
      const newList = categoryList.map((category) => {
         if (category.uid === currentCategory.uid) {
            category.taskList = newTaskList;
         }
         return category;
      });
      setCategoryList(newList);
   }

   function onDeleteCategory(categoryID) {
      const newList = categoryList.filter((cat) => cat.uid !== categoryID);
      if (!newList.length) {
         alert('Cannot delete last category.');
         return;
      }
      setCategoryList(newList);
      setcurrentCategoryID(newList[0].uid);
   }

   function handleCategoryFormData(formData) {
      if (!formData.initialData) {
         const categoryName = formData.newData.categoryName;
         const newCategory = new Category({ name: categoryName });
         setCategoryList((draft) => {
            draft.push(newCategory);
         });
      } else {
         const newList = categoryList.map((category) => {
            if (category.uid === formData.initialData.category.uid) {
               category.name = formData.newData.categoryName;
            }

            return category;
         });

         setCategoryList(newList);
      }
   }

   function handleTaskFormData(formData) {
      console.log(formData);
      if (formData.initialData) {
         const newTask = { ...formData.initialData, ...formData.newData };
         const idx = currentTaskList((task) => task.uid === newTask.uid);
         currentTaskList[idx] = newTask;
         const newList = categoryList.map((category) => category);
         setCategoryList(newList);
      } else {
         const newTask = new Task(formData.newData);
         const newList = categoryList.map((category) => {
            if (category.uid === currentCategoryID) {
               category.taskList = [...category.taskList, newTask];
            }
            return category;
         });
         setCategoryList(newList);
      }
   }

   return (
      <div className="relative grid min-h-dvh grid-cols-[250px_1fr_300px]">
         <SidePanel
            categoryList={categoryList}
            currentCategoryID={currentCategoryID}
            onCategorySelect={onCategorySelect}
            handleCategoryFormData={handleCategoryFormData}
         ></SidePanel>
         <MainPanel
            key={currentCategoryID}
            handleCategoryFormData={handleCategoryFormData}
            onTaskSelect={onTaskSelect}
            currentCategory={currentCategory}
            currentTask={currentTask}
            onDeleteCategory={onDeleteCategory}
            onDeleteTask={onDeleteTask}
            currentTaskList={currentTaskList}
            handleTaskFormData={handleTaskFormData}
         ></MainPanel>
      </div>
   );
}

export default App;
