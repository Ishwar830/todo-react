import CategoryInfo from './CategoryInfo';
import TaskListManager from './TaskListManager';
import TaskOverviewPanel from './TaskOverviewPanel';

function MainPanel({
   currentCategory,
   onTaskSelect,
   currentTask,
   handleCategoryFormData,
   onDeleteCategory,
   onDeleteTask,
   currentTaskList,
   handleTaskFormData,
}) {
   return (
      <>
         <div className="flex flex-col p-5 h-dvh">
            <CategoryInfo
               category={currentCategory}
               handleCategoryFormData={handleCategoryFormData}
               onDeleteCategory={onDeleteCategory}
            ></CategoryInfo>
            <TaskListManager
               taskList={currentCategory.taskList}
               onTaskSelect={onTaskSelect}
               onDeleteTask={onDeleteTask}
               handleTaskFormData={handleTaskFormData}
            ></TaskListManager>
         </div>
         <TaskOverviewPanel
            task={currentTask}
            currentTaskList={currentTaskList}
         ></TaskOverviewPanel>
      </>
   );
}

export default MainPanel;
