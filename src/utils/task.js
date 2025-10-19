class Task {
   static defaultValues = {
      priority: "low",
      isComplete: false,
      dueDate: null,
      checkList: [],
      uid: null,
      categoryID: null,
   };

   constructor(initialValues = {}) {
      if (!initialValues.name) {
         throw new Error("Task name is required!");
      }

      const finalValues = { ...Task.defaultValues, ...initialValues };
      this.uid = finalValues.uid || crypto.randomUUID();
      this.name = finalValues.name;
      this.priority = finalValues.priority;
      this.isComplete = finalValues.isComplete;
      this.dueDate = finalValues.dueDate;
      this.checkList = [...finalValues.checkList];
      this.categoryUID = finalValues.categoryID;
   }

   toggleComplete() {
      this.isComplete = !this.isComplete;
   }

   getCheckList() {
      return this.checkList;
   }

   addToCheckList(checkpoint) {
      this.checkList.push(checkpoint);
   }

   changePriority(newPriority) {
      const priorityList = ["low", "medium", "high"];
      if (priorityList.contains(newPriority)) {
         this.priority = newPriority;
      }
   }
}

export default Task;