import TaskListView from './TaskListView';
import TaskListModifier from './TaskListModifier';
import TaskForm from './TaskForm';
import DialogModalTriggerButton from './DialogModalTriggerButton';
import { useState } from 'react';

const priorityWeight = {
   high: 3,
   medium: 2,
   low: 1,
};

const sortFn = {
   alphabetical: (taskA, taskB) => {
      if (taskA.name >= taskB.name) return 1;
      return -1;
   },
   default: () => 0,
   priority: (taskA, taskB) =>
      priorityWeight[taskB.priority] - priorityWeight[taskA.priority],
   date: (taskA, taskB) => taskB.dueDate - taskA.dueDate,
};

function AddTaskButton({handleTaskFormData}) {
   const buttonLabel = 'Add Task';
   const butttonStyles =
      'rounded-md shadow-md/40 shadow-gray-800 bg-slate-100 p-2 text-md transition-transform hover:scale-105 hover:bg-slate-300 my-2';
   return (
      <DialogModalTriggerButton
         buttonLabel={buttonLabel}
         buttonStyles={butttonStyles}
      >
         <TaskForm handleTaskFormData={handleTaskFormData}></TaskForm>
      </DialogModalTriggerButton>
   );
}

function TaskListManager({
   taskList,
   onTaskSelect,
   onDeleteTask,
   handleTaskFormData,
}) {
   const [modifierValues, setmodifierValues] = useState({
      searchString: '',
      sortOption: 'default',
   });

   const updateSearchString = (searchString) =>
      setmodifierValues({ ...modifierValues, searchString });
   const updateSortOption = (sortOption) =>
      setmodifierValues({ ...modifierValues, sortOption });

   const modifiedTaskList = taskList
      .filter((task) => task.name.includes(modifierValues.searchString))
      .toSorted(sortFn[modifierValues.sortOption]);

   return (
      <>
         <div>
            <TaskListModifier
               updateSearchString={updateSearchString}
               updateSortOption={updateSortOption}
            ></TaskListModifier>
            <AddTaskButton handleTaskFormData={handleTaskFormData}></AddTaskButton>
            <TaskListView
               taskList={modifiedTaskList}
               onTaskSelect={onTaskSelect}
               onDeleteTask={onDeleteTask}
            ></TaskListView>
         </div>
      </>
   );
}

export default TaskListManager;
