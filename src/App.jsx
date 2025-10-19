import { useImmer } from 'use-immer';
import dummyData from './utils/dummyDataGenerator';
import { useState } from 'react';
import SidePanel from './components/SidePanel';
import MainPanel from './components/MainPanel';

function App() {
   const [categoryList, setCategoryList] = useImmer(dummyData);
   const [currentCategoryID, setcurrentCategoryID] = useState(
      categoryList[0].uid
   );
   const [currentTaskID, setCurrentTaskID] = useState(null);

   const currentCategory = categoryList.find(
      (category) => category.uid === currentCategoryID
   );
   const currentTaskList = currentCategory.taskList;
   const currentTask = currentTaskList.find(
      (task) => task.uid === currentTaskID
   );

   function onCategorySelect(categoryID) {
      setcurrentCategoryID(categoryID);
      setCurrentTaskID(null);
   }

   function onTaskSelect(taskID) {
      setCurrentTaskID(taskID);
   }

   return (
      <div className="grid h-dvh grid-cols-[250px_1fr_300px]">
         <SidePanel
            categoryList={categoryList}
            currentCategoryID={currentCategoryID}
            onCategorySelect={onCategorySelect}
         ></SidePanel>
         <MainPanel
            onTaskSelect={onTaskSelect}
            currentCategory={currentCategory}
            currentTask={currentTask}
         ></MainPanel>
      </div>
   );
}

export default App;
