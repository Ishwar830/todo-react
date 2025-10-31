import TaskView from "./TaskView";
import OverviewChart from "./OverviewChart";

function TaskOverviewPanel({currentTaskList , task }) {
   
   return (
      <div className="grid grid-rows-[1fr_1fr] h-dvh gap-2 bg-indigo-200 p-5 shadow-xl/40 overflow-auto">
         <TaskView task={task}></TaskView>
         <OverviewChart currentTaskList={currentTaskList}></OverviewChart>
      </div>
   );
}

export default TaskOverviewPanel;
