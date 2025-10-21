function TaskItem({ task, onTaskSelect, onDeleteTask }) {
   
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
               />
               <span className="ml-1 text-xl">{task.name}</span>
            </div>
            <div className="flex gap-2">
               <button className="w-16 rounded-xs bg-gray-800 p-1 text-white">
                  Edit
               </button>
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

function TaskListView({ taskList, onTaskSelect, onDeleteTask }) {
   const listItems = taskList.map((task) => (
      <TaskItem
         key={task.uid}
         task={task}
         onTaskSelect={onTaskSelect}
         onDeleteTask={onDeleteTask}
      ></TaskItem>
   ));
   return <ul className="grid gap-4">{listItems}</ul>;
}

export default TaskListView;
