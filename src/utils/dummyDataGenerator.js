import Task from './task';
import Category from './category';

const priorities = ['low', 'medium', 'high'];

function generateCheckList(size) {
   return Array.from({ length: size }, (_, i) => `Checkpoint ${i}`);
}

function generateTaskList(size, categoryID) {
   const taskList = Array.from({ length: size }, (_, i) => {
      const task = new Task({
         name: `Task-${i}`,
         priority: priorities[Math.floor(Math.random() * priorities.length)],
         isComplete: i % 3 === 0,
         checkList: generateCheckList(Math.floor(Math.random() * size)),
         categoryID,
      });
      return task;
   });

   return taskList;
}

function generateCategoryList(size) {
   const categoryList = Array.from({ length: size }, (_, i) => {
      const category = new Category({
         name: `Category-${i}`,
      });
      category.taskList = generateTaskList(
         Math.floor(Math.random() * size),
         category.uid
      );
      return category;
   });

   return categoryList;
}

const dummyData = generateCategoryList(10);

export default dummyData;
