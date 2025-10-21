import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function OverviewChart({ currentTaskList}) {
   const completedTaskCount = currentTaskList.filter((task) => task.isComplete).length
   const dueTaskCount = currentTaskList.length - completedTaskCount;
   const chartData = {
      labels: ["Completed", "Due"],
      datasets: [
         {
            data: [completedTaskCount, dueTaskCount],
            backgroundColor: ["#2ECC71", "#E74C3C"],
            hoverOffset: 4,
         },
      ],
   };

   return (
      <div className="grid flex-1 content-start gap-4 rounded-2xl bg-white p-4 shadow-xl/20">
         <p className="text-xl font-bold">Task-List Overview</p>
         <Doughnut
            width={100}
            height={100}
            data={chartData}
         />
         <div>
            <p>Task Completed: {completedTaskCount}</p>
            <p>Task Due: {dueTaskCount}</p>
         </div>
      </div>
   );
}

export default OverviewChart;
