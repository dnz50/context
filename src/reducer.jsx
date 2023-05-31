import { useReducer, } from 'react';

function reducer(state,action){
switch(action.type){
  case "set-book":
    return{...state,book:action.value};
  
  case "add-book":
    return{...state, books:[...state.books, action.value]};

    default:return state;
}
}

function Reducer() {

  const [state,dispatch]=useReducer(reducer,{books:[],book:""})

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch({type:"add-book",value:state.book})
  }

  const handleChange = (e)=>{
    dispatch({type:"set-book",value:e.target.value})
  }
  return (
    <div className="App">
      <h1>Books</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
        onChange={handleChange}
        value={state.book} />

        <button disabled={!state.book}
        type='submit'>Submit</button>
      </form>

      <ol>
        {state.books.map((item)=>(
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default Reducer;