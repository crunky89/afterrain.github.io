import React, {Component} from "react";
import "./App.css";

class TestStudy extends Component {

  constructor(props) {
    super(props);//*생성자 정의하면 props를 전달

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
    //const imgSrc = "https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    const divtext = <h3 className="title">구글!! 사랑!!</h3>;
    return (
      <div className="study-container">
        
        {/* <img src={imgSrc}/> */}
        {/* 프로퍼티 사용. 소스에 사용되는 텍스트를 App으로부터 전달받아서 사용 */}
        <img src={this.props.text}/>
        
        {/* 내부에서 지정한 것을 바로 사용 */}
        <div>진짜 {divtext} 정말 </div>
        
        {/* 스테이트 사용 */}
        <p>숫자 값 : {this.state.count}</p>
        <p>10 이상 : {this.state.isTen ? "이상" : "미만"}</p>
        <button onClick={this.countUp}>카운팅</button>
      </div>
    );
  }
}




export default TestStudy;