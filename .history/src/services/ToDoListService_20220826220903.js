export class ToDoListService{
    constructor(){

    }
    getTaskApi = () => {
        return Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET'
        })
    }
}


