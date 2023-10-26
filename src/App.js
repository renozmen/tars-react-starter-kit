import { createElement, forwardRef, useReducer, useState } from "react"
import './tailwind.css'
import Button from "./Button"
import Button2 from "./deneme"
import Tab from "./Tab"
import Test from "./Test"
import { useRef } from "react"

function reducer (state,action){
  console.log(state,action)
}

function Input(props, ref) {
  return <input ref={ref} type="text" {...props} />
}
Input = forwardRef(Input)
function App() {
  const [activeTab, setActiveTab] = useState(1)
  // const todos = ['todo1', 'todo2', 'todo3']
  // const h1 = createElement('h1', null, 'test')
  // const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)))
  // return createElement('main', {
  //   className: 'test',
  //   id: 'main'
  // }, h1, ul)
  const style = { backgroundColor: "darkblue", color: "yellow" }
  const [show, setShow] = useState(false)

  const inputRef = useRef()
  const focusInput = () => {
    console.log(inputRef.current.focus())
  }

  const [state,dispatch]=useReducer(reducer,{
    todos:[],
    todo:''
  });

  const submitHandle=e=>{
  e.preventDefault()
  // setTodos([...todos,todo])
  // setTodo('')
}
const onChange = e=>{
  setTodo (e.target.value)
  dispatch ({
    type:'SET_TODO',
    value:e.target.value
  })
}
  return (

    <>
      {/* R8 */}
      
      <h1>Todo App</h1>
      <form onSubmit={submitHandle}>
        <input type="text" value ={state.todo} onChange={onChange}/>
        <button type="submit" disabled={!state.todo}>ekle</button>
      </form>
      <ul>
        {state.todos.map((todo,index)=>(
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>

      {/*R7 */}
      <h1>useRef() - useForward ()</h1>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focusla</button>
      {/*R6  */}
      <div style={{ padding: 20 }}>
        <button style={{ padding: 5, border: '2px solid black', marginLeft: 50, borderRadius: 10 }} onClick={() => setShow(show => !show)}>
          {show ? 'Gizle' : 'Göster'}
        </button>
      </div>
      {show && <Test />}
      {/* P5 */}
      <div style={{ padding: 20 }}>
        <button onClick={() => setActiveTab(2)}>
          Active Tabı Değiştir
        </button>
        <Tab activeTab={activeTab} onChange={tabIndex => console.log('tab değişti', tabIndex)}>
          <Tab.Panel title="Profil">1.tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2.tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3.tab</Tab.Panel>

        </Tab>
      </div>
      {/*  */}

      <Button2 eren="3434343"></Button2>
      <Button2 eren="fenerbahçe" />
      {/*  */}

      <div style={{ padding: 20 }}>
        <Button text="button örneği" >Dugme</Button>
        <Button variant="success" text="button örneği" >IButton</Button>
        <Button variant="danger" text="button örneği">Dugme</Button>
        <Button variant="warning" text="button örneği">Dugme</Button>
      </div>
      {/*  */}

      <h1 style={style} tabIndex={3}>Test</h1>
      <label htmlFor='search' tabIndex={2} onClick={() => alert('merhaba    ')}>Arama</label>
      <input type="text" id="search" tabIndex={1}></input>

      {/*  */}
      <ul>
        {todos.map((todo, fb) => (
          <li key={fb}>
            {todo}
          </li>
        ))}
      </ul>
    </>

  );
}
export default App