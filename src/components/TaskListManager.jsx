import TaskListView from './TaskListView';
import TaskListModifier from './TaskListModifier';
import { useState } from 'react';

const priorityWeight = {
   high: 3,
   medium: 2,
   low: 1,
};

const sortFn = {
   alphabetical: (taskA, taskB) => {
      if(taskA.name >= taskB.name) return 1;
      return -1;
   },
   default: () => 0,
   priority: (taskA, taskB) =>
      priorityWeight[taskB.priority] - priorityWeight[taskA.priority],
   date: (taskA, taskB) => taskB.dueDate - taskA.dueDate,
};

function TaskListManager({ taskList, onTaskSelect }) {
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
            <TaskListView
               taskList={modifiedTaskList}
               onTaskSelect={onTaskSelect}
            ></TaskListView>
         </div>
      </>
   );
}

export default TaskListManager;
