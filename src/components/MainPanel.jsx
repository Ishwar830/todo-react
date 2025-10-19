import CategoryInfo from './CategoryInfo';
import TaskListManager from './TaskListManager';
import TaskOverviewPanel from './TaskOverviewPanel';

function MainPanel({ currentCategory, onTaskSelect, currentTask }) {
   return (
      <>
         <div className="grid grid-rows-[auto_1fr] p-5">
            <CategoryInfo category={currentCategory}></CategoryInfo>
            <TaskListManager
               taskList={currentCategory.taskList}
               onTaskSelect={onTaskSelect}
            ></TaskListManager>
         </div>
         <TaskOverviewPanel
            category={currentCategory}
            task={currentTask}
         ></TaskOverviewPanel>
      </>
   );
}

export default MainPanel;
