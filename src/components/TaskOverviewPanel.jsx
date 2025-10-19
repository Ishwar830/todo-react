import TaskView from "./TaskView";
import OverviewChart from "./OverviewChart";

function TaskOverviewPanel({category ,task }) {
   return (
      <div className="grid grid-rows-[1fr_1fr] gap-2 bg-indigo-200 p-5 shadow-xl/40">
         <TaskView task={task}></TaskView>
         <OverviewChart category={category}></OverviewChart>
      </div>
   );
}

export default TaskOverviewPanel;
