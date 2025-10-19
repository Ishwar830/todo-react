import TaskListView from './TaskListView';
import TaskListModifier from './TaskListModifier';

function TaskListManager({ taskList, onTaskSelect }) {
   return (
      <>
         <div>
            <TaskListModifier></TaskListModifier>
            <TaskListView
               taskList={taskList}
               onTaskSelect={onTaskSelect}
            ></TaskListView>
         </div>
      </>
   );
}

export default TaskListManager;
