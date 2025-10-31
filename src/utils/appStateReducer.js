import Category from './category';
import Task from './task';
import { ACTION_TYPES } from './actionTypes';

export default function appStateReducer(draft, action) {
   switch (action.type) {
      case ACTION_TYPES.CATEGORY_SELECTED: {
         draft.currentCategoryID = action.categoryID;
         draft.currentTaskID = null;
         break;
      }
      case ACTION_TYPES.TASK_SELECTED: {
         draft.currentTaskID = action.taskID;
         break;
      }
      case ACTION_TYPES.DELETE_CATEGORY: {
         if (draft.categoryList.length === 1) {
            alert('Cannot delete last category.');
            return;
         }
         draft.categoryList = draft.categoryList.filter(
            (cat) => cat.uid !== draft.currentCategoryID
         );
         draft.currentCategoryID = draft.categoryList[0].uid;
         break;
      }
      case ACTION_TYPES.DELETE_TASK: {
         const category = findItemWithUID(
            draft.categoryList,
            draft.currentCategoryID
         );
         category.taskList = category.taskList.filter(
            (task) => task.uid !== action.taskID
         );
         break;
      }
      case ACTION_TYPES.ADD_CATEGORY: {
         const newCategory = new Category(action.data);
         draft.categoryList.push(newCategory);
         break;
      }
      case ACTION_TYPES.UPDATE_CATEGORY: {
         const category = findItemWithUID(
            draft.categoryList,
            draft.currentCategoryID
         );
         category.title = action.data.title;
         break;
      }
      case ACTION_TYPES.ADD_TASK: {
         const currentTaskList = findItemWithUID(
            draft.categoryList,
            draft.currentCategoryID
         ).taskList;
         currentTaskList.push(new Task(action.data));
         break;
      }
      case ACTION_TYPES.UPDATE_TASK: {
         const currentTaskList = findItemWithUID(
            draft.categoryList,
            draft.currentCategoryID
         ).taskList;
         const task =  findItemWithUID(currentTaskList, action.data.uid);
         Object.assign(task, action.data);
         break;
      }
      case ACTION_TYPES.TOGGLE_TASK_COMPLETION: {
         const currentTaskList = findItemWithUID(
            draft.categoryList,
            draft.currentCategoryID
         ).taskList;
         const task = findItemWithUID(currentTaskList, action.taskID);
         task.isComplete = !task.isComplete;
         break;
      }
      default: {
         throw new Error('invalid action');
      }
   }
}

function findItemWithUID(list, itemUID) {
   const item = list.find((curr) => curr.uid == itemUID);
   return item;
}
