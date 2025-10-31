import Task from './task';
import Category from './category';

const priorities = ['low', 'medium', 'high'];

const startDate = new Date(2000, 0, 1);
const endDate = new Date(2020, 12, 31);


function generateRandomName(namelength){
   let name = "";
   const letterString = "abcdefghijklmnopqrstuvwxyz";
   
   for(let i=0; i<namelength; ++i) name += letterString[Math.floor(Math.random() * letterString.length)]
   return name;
}

function randomDate(start = startDate, end = endDate) {
   return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
   );
}

function generateCheckList(size) {
   return Array.from({ length: size }, (_, i) => `Checkpoint ${i}`);
}

function generateTaskList(size) {
   const taskList = Array.from({ length: size }, (_, i) => {
      const task = new Task({
         name: generateRandomName(5),
         priority: priorities[Math.floor(Math.random() * priorities.length)],
         isComplete: i % 3 === 0,
         checkList: generateCheckList(Math.floor(Math.random() * size)),
         dueDate: randomDate(),
      });
      return task;
   });

   return taskList;
}

function generateCategoryList(size) {
   const categoryList = Array.from({ length: size }, (_, i) => {
      const category = new Category({
         title: `Category-${i}`,
      });
      category.taskList = generateTaskList(
         Math.floor(Math.random() * size)
      );
      return category;
   });

   return categoryList;
}

const dummyData = generateCategoryList(10);

export default dummyData;
