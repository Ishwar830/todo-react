import TaskListView from './TaskListView';
import TaskListModifier from './TaskListModifier';
import TaskForm from './TaskForm';
import DialogModalTriggerButton from './DialogModalTriggerButton';
import { useImmer } from 'use-immer';

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

function AddTaskButton() {
   const buttonLabel = 'Add Task';
   const butttonStyles =
      'self-start rounded-md m-2 shadow-md/40 shadow-slate-200 bg-emerald-400 p-2 text-md transition-transform hover:scale-105 hover:bg-emerald-500';
   return (
      <DialogModalTriggerButton
         buttonLabel={buttonLabel}
         buttonStyles={butttonStyles}
      >
         <TaskForm></TaskForm>
      </DialogModalTriggerButton>
   );
}

function TaskListManager({ taskList }) {
   const [modifierValues, setmodifierValues] = useImmer({
      searchString: '',
      sortOption: 'default',
   });

   const updateSearchString = (searchString) =>
      setmodifierValues((draft) => {
         draft.searchString = searchString;
      });
   const updateSortOption = (sortOption) =>
      setmodifierValues((draft) => {
         draft.sortOption = sortOption;
      });

   const modifiedTaskList = taskList
      .filter((task) => task.name.includes(modifierValues.searchString))
      .toSorted(sortFn[modifierValues.sortOption]);

   return (
      <>
         <div className="flex flex-1 flex-col overflow-hidden">
            <TaskListModifier
               updateSearchString={updateSearchString}
               updateSortOption={updateSortOption}
            ></TaskListModifier>
            <AddTaskButton></AddTaskButton>
            <TaskListView taskList={modifiedTaskList}></TaskListView>
         </div>
      </>
   );
}

export default TaskListManager;
