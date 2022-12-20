const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            newTask: '',
            todolist:[
                {
                    text:'fare la spesa',
                    done: false,

                },
                {
                    text:'fare la spesa',
                    done: false,

                },
                {
                    text:'fare la spesa',
                    done: true,

                },
                {
                    text:'fare la spesa',
                    done: false,

                },
                {
                    text:'fare la spesa',
                    done: false,

                },
                
            ]
        }
    },
    methods: {
        addTask(){
            let object = {
                text: this.newTask,
                done:false,
            }
            this.todolist.push(object);
            this.newTask = '';
        },
        removeTask(index){
            this.todolist.splice(index, 1)
        },
        checkTask(index){
            let task = this.todolist[index];
            if(task.done == true){
                task.done = false;
            }
            else{
                task.done= true;
            }
        }
    },

}).mount('#app')