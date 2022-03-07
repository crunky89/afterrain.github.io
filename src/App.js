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