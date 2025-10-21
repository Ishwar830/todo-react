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
}) {
   return (
      <>
         <div className="grid grid-rows-[auto_1fr] p-5">
            <CategoryInfo
               category={currentCategory}
               handleCategoryFormData={handleCategoryFormData}
               onDeleteCategory={onDeleteCategory}
            ></CategoryInfo>
            <TaskListManager
               taskList={currentCategory.taskList}
               onTaskSelect={onTaskSelect}
               onDeleteTask={onDeleteTask}
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
