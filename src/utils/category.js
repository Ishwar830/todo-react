import Task from "./task";

class Category{
    static defaultValues = {
        taskList: [],
        uid: null,
    }

    constructor(inititalValues = {}){
        if(!inititalValues.name){
            throw new Error("Category name required");
        }

        const finalValues = {...Category.defaultValues, ...inititalValues};
        this.name = finalValues.name;
        this.taskList = [...finalValues.taskList];
        this.uid = finalValues.uid || crypto.randomUUID();
    }

    getCompletedTaskCount(){
        let count = 0;
        for(let i=0; i<this.taskList.length; ++i){
            if(this.taskList[i].isComplete) count++;
        }

        return count;
    }

    getTaskList(){
        return this.taskList;
    }

    addTask(task){
        const newTask = new Task(task);
        this.taskList.push(newTask);
    }

    removeTask(uid){
        this.taskList = this.taskList.filter((task) => task.uid !== uid);
    }

    updateTask(updatedTask){
        this.taskList = this.taskList.map((task) => {
            if(task.uid === updatedTask.uid) return updatedTask;
            return task;
        });
    }
}

export default Category;