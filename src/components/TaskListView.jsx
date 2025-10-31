import { useContext } from 'react';
import DialogModalTriggerButton from './DialogModalTriggerButton';
import TaskForm from './TaskForm';
import { DispatchContext } from './Contexts';
import { ACTION_TYPES } from '../utils/actionTypes';

function EditTaskButton({ task }) {
   const buttonLabel = 'Edit';
   const butttonStyles = 'w-16 rounded-xs bg-gray-800 p-1 text-white';
   return (
      <DialogModalTriggerButton
         buttonLabel={buttonLabel}
         buttonStyles={butttonStyles}
      >
         <TaskForm initialData={task}></TaskForm>
      </DialogModalTriggerButton>
   );
}

function TaskItem({ task }) {
   const dispatch = useContext(DispatchContext);

   const priorityThemeColors = {
      low: 'bg-emerald-100 text-emerald-700',
      medium: 'bg-amber-100 text-amber-700',
      high: 'bg-red-100 text-red-700',
   };

   return (
      <li
         className="grid gap-2 rounded-xl border-2 bg-neutral-100 p-4 shadow-md/20"
         onClick={() =>
            dispatch({
               type: ACTION_TYPES.TASK_SELECTED,
               taskID: task.uid,
            })
         }
      >
         <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
               <input
                  readOnly
                  className="size-6"
                  type="checkbox"
                  name="taskProgress"
                  checked={task.isComplete}
                  onClick={(e) => {
                     e.stopPropagation();
                     dispatch({
                        type: ACTION_TYPES.TOGGLE_TASK_COMPLETION,
                        taskID: task.uid,
                     });
                  }}
               />
               <span className="font-mono text-2xl font-bold tracking-wide">
                  {task.name}
               </span>
            </div>
            <div className="flex gap-2">
               <EditTaskButton task={task}></EditTaskButton>
               <button
                  onClick={(e) => {
                     e.stopPropagation();
                     dispatch({
                        type: ACTION_TYPES.DELETE_TASK,
                        taskID: task.uid,
                     });
                  }}
                  className="w-16 rounded-xs bg-gray-800 p-1 text-white"
               >
                  Delete
               </button>
            </div>
         </div>
         <div className="flex flex-wrap gap-4">
            <p>
               Priority:{' '}
               <span className={priorityThemeColors[task.priority] + ' p-1'}>
                  {task.priority}
               </span>
            </p>
            <p>
               Due Date:{' '}
               <span className="inline-block bg-slate-300 p-1">
                  {task.dueDate.toDateString()}
               </span>
            </p>
         </div>
      </li>
   );
}

function TaskListView({ taskList }) {
   if(taskList.length == 0){
      return (
         <div className='flex-1 grid justify-center items-center text-2xl text-gray-700 font-bold'>
            No Task in this category
         </div>
      );
   }


   const listItems = taskList.map((task) => (
      <TaskItem key={task.uid} task={task}></TaskItem>
   ));
   return (
      <ul className="grid flex-1 content-start gap-4 overflow-auto">
         {listItems}
      </ul>
   );
}

export default TaskListView;
