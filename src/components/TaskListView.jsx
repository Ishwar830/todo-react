import DialogModalTriggerButton from "./DialogModalTriggerButton";
import TaskForm from "./TaskForm";

function EditTaskButton({task, handleTaskFormData}){
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
   
   function handleTaskDelete(e){
      e.stopPropagation();
      onDeleteTask(task.uid);
   }
   
   return (
      <li
         className="grid rounded-xl border-2 bg-neutral-100 p-4 shadow-md/20"
         onClick={() => onTaskSelect(task.uid)}
      >
         <div className="flex items-center justify-between gap-4">
            <div>
               <input
                  readOnly
                  className="size-4"
                  type="checkbox"
                  name="taskProgress"
                  checked={task.isComplete}
                  onClick={(e) =>{
                     e.stopPropagation();
                     handleTaskFormData({
                        initialData: task,
                        newData: {...task, isComplete:!task.isComplete}
                     })
                  }}
               />
               <span className="ml-1 text-xl">{task.name}</span>
            </div>
            <div className="flex gap-2">
               <EditTaskButton task={task} handleTaskFormData={handleTaskFormData}></EditTaskButton>
               <button onClick={handleTaskDelete} className="w-16 rounded-xs bg-gray-800 p-1 text-white">
                  Delete
               </button>
            </div>
         </div>
         <div className="flex gap-2">
            <p>Priority: {task.priority}</p>
            <p>Due Date: {task.dueDate.toDateString()}</p>
         </div>
      </li>
   );
}

function TaskListView({ taskList, onTaskSelect, onDeleteTask, handleTaskFormData }) {
   const listItems = taskList.map((task) => (
      <TaskItem
         key={task.uid}
         task={task}
         onTaskSelect={onTaskSelect}
         onDeleteTask={onDeleteTask}
         handleTaskFormData={handleTaskFormData}
      ></TaskItem>
   ));
   return <ul className="grid gap-4">{listItems}</ul>;
}

export default TaskListView;
