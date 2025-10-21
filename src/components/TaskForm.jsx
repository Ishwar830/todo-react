import { useState } from 'react';

function dateFormatter(dateObj) {
   dateObj = dateObj || new Date();
   const year = dateObj.getFullYear();
   const month = dateObj.getMonth();
   const day = dateObj.getDate();
   const formattedDate = `${String(year)}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
   return formattedDate;
}

const defaultTaskData = {
   name: '',
   isComplete: false,
   checkList: [],
   dueDate: new Date(),
};

function CheckListEditor({ onTaskDataChange, taskData }) {
   const [checkpointInput, setCheckpointInput] = useState('');
   const checkList = taskData.checkList;

   function onCheckPointDelete(deleteIndex) {
      const newCheckList = checkList.filter(
         (_, index) => index !== deleteIndex
      );
      onTaskDataChange({ checkList: newCheckList });
   }

   function onCheckPointAdd(checkpoint) {
      if (!checkpoint.trim()) return;
      const newCheckList = [...checkList, checkpoint];
      onTaskDataChange({ checkList: newCheckList });
      setCheckpointInput('');
   }

   return (
      <div className='h-[200px] flex flex-col'>
         <input
            className="border-2"
            onChange={(e) => setCheckpointInput(e.target.value)}
            type="text"
            value={checkpointInput}
         />
         <button
            className="mt-2 rounded-md bg-gray-300 p-2"
            onClick={() => onCheckPointAdd(checkpointInput)}
            type="button"
         >
            Add Checkpoint
         </button>
         <ul className="mt-2 grid gap-2 flex-1 border-2 border-slate-400 p-2 overflow-auto">
            {checkList.map((checkPoint, index) => {
               return (
                  <li className="flex justify-between text-wrap" key={index}>
                     {checkPoint}
                     <button
                        type="button"
                        className="size-8 rounded-full bg-red-400"
                        onClick={() => onCheckPointDelete(index)}
                     >
                        X
                     </button>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

function TaskForm({ handleTaskFormData, initialData }) {
   const data = initialData || defaultTaskData;
   const dataCopy = { ...data };
   dataCopy.checkList = [...data.checkList];
   
   const [taskData, setTaskData] = useState(dataCopy);

   function onTaskDataChange(newData) {
      setTaskData({ ...taskData, ...newData });
   }

   function handleFormSubmit(){
      if (!taskData.name.trim()) return;
      const formData = {
         newData: taskData,
         initialData,
      };
      handleTaskFormData(formData);
   }

   return (
      <form
         action="#"
         method="dialog"
         onSubmit={handleFormSubmit}
         className="grid h-[max-content] w-[280px] gap-4 p-4"
      >
         <div className="flex justify-between gap-2 bg-slate-200 p-2">
            <label htmlFor="task-name">Title</label>
            <input
               className="border-2"
               type="text"
               id="task-name"
               value={taskData.name}
               onChange={(e) => onTaskDataChange({ name: e.target.value })}
               required
            />
         </div>
         <div className="flex justify-between gap-2 bg-slate-200 p-2">
            <label htmlFor="task-priority">Priority</label>
            <select
               className="border-2"
               onChange={(e) => onTaskDataChange({ priority: e.target.value })}
               name="task-priority"
               id="task-priority"
            >
               <option value="low">low</option>
               <option value="medium">medium</option>
               <option value="high">high</option>
            </select>
         </div>
         <div className="flex justify-between gap-2 bg-slate-200 p-2">
            <label htmlFor="task-status">Completed</label>
            <input
               className="border-2"
               type="checkbox"
               id="task-status"
               checked={taskData.isComplete}
               onChange={(e) =>
                  onTaskDataChange({ isComplete: e.target.checked })
               }
            />
         </div>
         <div className="flex justify-between gap-2 bg-slate-200 p-2">
            <label htmlFor="due-date">Due-Date</label>
            <input
               className="border-2"
               onChange={(e) =>
                  onTaskDataChange({ dueDate: new Date(e.target.value) })
               }
               type="date"
               id="due-date"
               value={dateFormatter(taskData.dueDate)}
            />
         </div>
         <CheckListEditor
            onTaskDataChange={onTaskDataChange}
            taskData={taskData}
         ></CheckListEditor>
         <div className="flex justify-center">
            <button className="mt-2 rounded-md bg-emerald-300 p-2 font-bold text--xl" type="submit">
               Submit
            </button>
         </div>
      </form>
   );
}

export default TaskForm;
