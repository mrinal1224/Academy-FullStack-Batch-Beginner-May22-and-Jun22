import uuid from "react-uuid"

const taskReducers = (state , action) =>{
    switch(action.type){
        case "ADD_TASK" : {
            const newTask = {...action.payload , "id" : uuid() , "isDone": false }
            return [...state , newTask]

        }

        case "REMOVE_TASK" : {
          const taskRemained = state.filter((task)=> task.id !== action.payload )
          return [...taskRemained]

        }

        case "DONE_TASK" : {
            const index = state.findIndex((task) => task.id === action.payload);
            const doneTask = [...state];
            doneTask[index].isDone = true;
            return [...doneTask]
  
          }
    }
}


const formReducers = (state , action) => {
    switch(action.type){
        case 'HANDLE_TASK' : {
            return {
                ...state,
                [action.field] : action.payload
            }
        }

        default :
        return state
    }
}

export {taskReducers , formReducers}