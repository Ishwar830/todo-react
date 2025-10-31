import { useContext } from 'react';
import CategoryInfo from './CategoryInfo';
import TaskListManager from './TaskListManager';
import TaskOverviewPanel from './TaskOverviewPanel';
import { AppStateContext } from './Contexts';

function MainPanel() {
   const appState = useContext(AppStateContext);
   const currentCategory = appState.categoryList.find(
      (category) => category.uid === appState.currentCategoryID
   );
   const currentTask = currentCategory.taskList.find(
      (task) => task.uid == appState.currentTaskID
   );

   return (
      <>
         <div className="flex h-dvh flex-col p-5">
            <CategoryInfo category={currentCategory}></CategoryInfo>
            <TaskListManager
               key={appState.currentCategoryID}
               taskList={currentCategory.taskList}
            ></TaskListManager>
         </div>
         <TaskOverviewPanel
            currentTaskList={currentCategory.taskList}
            task={currentTask}
         ></TaskOverviewPanel>
      </>
   );
}

export default MainPanel;
