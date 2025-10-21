import DialogModalTriggerButton from './DialogModalTriggerButton';
import TaskForm from './TaskForm';

function EditTaskButton({ task, handleTaskFormData }) {
   const buttonLabel = 'Edit';
   const butttonStyles = 'w-16 rounded-xs bg-gray-800 p-1 text-white';
   return (
      <DialogModalTriggerButton
         buttonLabel={buttonLabel}
         buttonStyles={butttonStyles}
      >
         <TaskForm
            handleTaskFormData={handleTaskFormData}
            initialData={task}
         ></TaskForm>
      </DialogModalTriggerButton>
   );
}

function TaskItem({ task, onTaskSelect, onDeleteTask, handleTaskFormData }) {
   const priorityThemeColors = {
      low: 'bg-emerald-100 text-emerald-700',
      medium: 'bg-amber-100 text-amber-700',
      high: 'bg-red-100 text-red-700',
   };

   function handleTaskDelete(e) {
      e.stopPropagation();
      onDeleteTask(task.uid);
   }

   return (
      <li
         className="grid gap-2 rounded-xl border-2 bg-neutral-100 p-4 shadow-md/20"
         onClick={() => onTaskSelect(task.uid)}
      >
         <div className="flex items-center justify-between gap-4">
            <div className='flex items-center gap-4'>
               <input
                  readOnly
                  className="size-6"
                  type="checkbox"
                  name="taskProgress"
                  checked={task.isComplete}
                  onClick={(e) => {
                     e.stopPropagation();
                     handleTaskFormData({
                        initialData: task,
                        newData: { ...task, isComplete: !task.isComplete },
                     });
                  }}
               />
               <span className="text-2xl font-bold font-mono tracking-wide">{task.name}</span>
            </div>
            <div className="flex gap-2">
               <EditTaskButton
                  task={task}
                  handleTaskFormData={handleTaskFormData}
               ></EditTaskButton>
               <button
                  onClick={handleTaskDelete}
                  className="w-16 rounded-xs bg-gray-800 p-1 text-white"
               >
                  Delete
               </button>
            </div>
         </div>
         <div className="flex flex-wrap gap-4">
            <p>
               Priority:{' '}
               <span className={priorityThemeColors[task.priority] + " p-1"}>
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

function TaskListView({
   taskList,
   onTaskSelect,
   onDeleteTask,
   handleTaskFormData,
}) {
   const listItems = taskList.map((task) => (
      <TaskItem
         key={task.uid}
         task={task}
         onTaskSelect={onTaskSelect}
         onDeleteTask={onDeleteTask}
         handleTaskFormData={handleTaskFormData}
      ></TaskItem>
   ));
   return (
      <ul className="grid flex-1 content-start gap-4 overflow-auto">
         {listItems}
      </ul>
   );
}

export default TaskListView;
