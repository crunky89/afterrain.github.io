/* 
  리액트 테스트 App
*/

import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import { TodoBanner } from './TodoBanner';
import { TodoCreator } from './TodoCreator';
import { TodoRow } from './TodoRow';

import { TodoVisibilityControl } from './TodoVisibilityControl';

import TestStudy from './TestStudy';
import TestStudy001 from './TestStudy001';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "UHU",
      todoItems : [
        {action: "Buy Flowers", done: false},
        {action: "Get Shoes", done: false},
        {action: "Collect Tickets", done: true},
        {action: "Call Joe", done: false},
      ],
      //newItemText: ""
      showCompleted: true
    } 
  }

  updateNewTextValue = (event) => {
    this.setState({newItemText: event.target.value });
  }

  /* createNewTodo= () => {
    if(!this.state.todoItems.find(item => item.action == this.state.newItemText)) {
      this.setState({
        todoItems : [...this.state.todoItems, {action: this.state.newItemText, done: false}],
        newItemText: ""
      });
    }
  } */
  createNewTodo= (task) => {
    if(!this.state.todoItems.find(item => item.action == task)) {
      this.setState({
        todoItems : [...this.state.todoItems, {action: task, done: false}],
      } , () => localStorage.setItem("todos", JSON.stringify(this.state))
      );
    }
  }

  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(data != null ? JSON.parse(data) :
    {
      userName: "UHU",
      todoItems: [
        {action: "Buy Flowers", done: false},
        {action: "Get Shoes", done: false},
        {action: "Collect Tickets", done: true},
        {action: "Call Joe", done: false},
      ],
      showCompleted: true
    })
  }

  changeStateData = () => {
    this.setState({
      userName : this.state.userName === "UHU" ? "BBB" : "UHU"
    });
  }

  toggleTodo = (todo) => this.setState({ todoItems:
    this.state.todoItems.map(item => item.action == todo.action ? 
      { ...item, done: !item.done } : item)
  }, () => localStorage.setItem("todos", JSON.stringify(this.state)))
  /* 
    변경 발생시 컴포넌트의 render 메서드를 호출해 현재 브랑줘 에서 보여준 결과와 비교해 바뀐 부분만 반영되게 한다
    현재와 새로운 것을 상호 연관시켜 변경 관리를 하기 위해 필요한 것이 key 속성
  */
  /* todoTableRows = () => this.state.todoItems.map(item =>
    <tr key = {item.action}> 
      <td>{item.action}</td>
      <td><input type="checkbox" checked={item.done} onChange={() => this.toggleTodo(item) } /></td>
    </tr>
  ); */
  /* todoTableRows = () => this.state.todoItems.map(item =>
    <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
  ); */
  todoTableRows = (doneValue) => 
    this.state.todoItems.filter(item => item.done === doneValue)
    .map(item =>
      <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
    );

  render() {
    return (
      <div>{/* 주석처리 하나의 컨테이너 안에 있어야 하는게 기본인듯 */}
        <TestStudy text="data:image/jpeg;base64,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"/>
        {/* import 로 해당 기능 가져와야 에러 없음 */}
        {/* <TestStudy001/> */}

        {/* <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List
          ({this.state.todoItems.filter(t => !t.done).length} items to do)
        </h4> */}
        <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
        <button type="button" className="btn btn-primary m-2" onClick={this.changeStateData}>Change</button>

        <div className='container-fluid'>
        {/* 
          <div className='my-1'>
            <input className='form-control' value={this.state.newItemText} onChange={this.updateNewTextValue} />
            <button className='btn btn-primary mt-1' onClick={this.createNewTodo}>ADD</button>
          </div>
        */}
          <TodoCreator callback={this.createNewTodo}/>

          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {this.todoTableRows(false)}
            </tbody>
          </table>

          <div className='bg-secondary text-white text-center p-2'>
            <TodoVisibilityControl description="Completed Tasks" isChecked={this.state.showCompleted}
            callback={ (checked) => this.setState({showCompleted: checked})} />
          </div>
          {this.state.showCompleted && 
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{this.todoTableRows(true) }</tbody>
          </table>}
        </div> 
      </div>
    )
  }
}