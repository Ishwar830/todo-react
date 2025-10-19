function CheckList({ checkList = [] }) {
   const list = checkList.map((checkPoint, index) => (
      <li key={index}>{checkPoint}</li>
   ));

   return <ul>{list}</ul>;
}

function TaskInfo({ task }) {
   return (
      <>
         <p className="text-2xl font-bold">Title: {task.name}</p>
         <p>Priority: {task.priority}</p>
         <p>Due-Date: {task.dueDate.toDateString()}</p>
         <div className="flex-1 rounded-xl border-2 p-1">
            <p className="border-b-2 text-xl">CheckList</p>
            <CheckList checkList={task.checkList}></CheckList>
         </div>
      </>
   );
}

function TaskView({ task }) {
   return (
      <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-xl/20">
         {task ? (
            <TaskInfo task={task}></TaskInfo>
         ) : (
            <p className="flex-1 grid items-center justify-center text-2xl text-center font-bold">Select Task to view details</p>
         )}
      </div>
   );
}

export default TaskView;
