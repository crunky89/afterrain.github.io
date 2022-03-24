import React, { Component } from "react";
import Footer from "./Footer";
import Header from './Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

class Layout extends Component {

  constructor(props) {
    super(props);

    //state 값은 반드시 초기화하기
    this.state = {
      count : 1,
      isTen : false,
    };
    //countUp 함수에서 객체 인식을 위한 바인딩
    this.countUp = this.countUp.bind(this);
  }
  
  countUp() {
    const countTemp = this.state.count + 1;
    let isTenTemp = this.state.isTen;
    if(countTemp >= 10) isTenTemp = true;
    this.setState({
      count : countTemp,
      isTen : isTenTemp,
    });
    console.log("count ++ : " , this.state.count);
  }


  render() {
    return (
      <>
        {/* <Header/> */}
        <div className="app-body">
          Body !!

          {/* 스테이트 사용 */}
          <p>숫자 값 : {this.state.count}</p>
          <p>10 이상 : {this.state.isTen ? "이상" : "미만"}</p>
          <button onClick={this.countUp}>카운팅</button>
        </div>
        <BrowserRouter>
          <div className="pages">
            <Routes>
              <Route exact path="/">
                abc
              </Route>
            </Routes>
          </div>
        </BrowserRouter>

        {/* <Footer/> */}
      </>
    )
  }
}

export default Layout;