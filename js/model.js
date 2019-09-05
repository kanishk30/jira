'use strict' 
export default class Model {
    constructor() {}
    getAppState() {
        let draggableData = window.localStorage.getItem('draggableData');
        if(!draggableData){
            window.localStorage.setItem('draggableData', JSON.stringify([])
            );
        }
        return JSON.parse(window.localStorage.getItem('draggableData'));
    }

    setAppState(data, newTodoAdded=false){
        let promise = new Promise ((resolve, reject)  => {
            let draggableData = JSON.parse(window.localStorage.getItem('draggableData'));
            
            if(!newTodoAdded) {
                for(let todo of draggableData) {
                    if(todo.id === data.id) {
                        draggableData.splice(data.id, 1, data)
                        break;
                    }
                }
            } else {
                draggableData.push(data);
            }
            

            window.localStorage.setItem('draggableData', JSON.stringify([...draggableData]));
            resolve(this.getAppState()); 
        })
        return promise;
    }
}