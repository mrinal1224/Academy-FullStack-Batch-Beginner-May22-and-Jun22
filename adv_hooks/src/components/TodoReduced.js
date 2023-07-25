import {useReducer} from "react";
import {TiTick, TiTrash} from 'react-icons/ti';

import { taskReducers , formReducers } from "./reducers";



const TodoReduced = () => {

  const [state , dispatch] = useReducer(taskReducers , [])

  const [task , dispatchForm] = useReducer(formReducers ,{
    title: "",
    by: ""
  } )


  
  const handleTask = (e) => {
    e.preventDefault();
    dispatchForm({
        type : 'HANDLE_TASK',
        field : e.target.name,
        payload : e.target.value
    })
  }


  

  return (
    <>
      <div>
        <h1>My TodoList by using useReducer</h1>
        <div>
          I want to do <input type="text" name="title" onChange={handleTask}/> by{" "}
          <input type="date" name="by" onChange={handleTask} />
          <button className="wishBtn" onClick={()=> dispatch({type :"ADD_TASK" , payload : task })}>Add a Task</button>
        </div>
        <ul>
          {state && state.length >0 && state.map((item) => (
            <li key={item.id}>
              <span style={{ textDecoration: item.isDone ? "line-through" : "" }}>
                <strong>{item.title}</strong> is due by {item.by}</span>
              <span><TiTick size={24} onClick={() => dispatch({type:"DONE_TASK" , payload :item.id})} /></span>
              <span><TiTrash size={24} onClick={() => dispatch({type : "REMOVE_TASK" , payload : item.id})}/></span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoReduced;