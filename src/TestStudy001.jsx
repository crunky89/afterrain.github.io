import React from "react";

class TestStudy001 extends React.PureComponent {

  constructor(props) {
    super(props);//*생성자 정의하면 props를 전달

    //state 값은 반드시 초기화하기
    this.state = {
      listEnd: 20,
      listPlus: 10,
    };
    // 바인딩
    this.setRef = this.setRef.bind(this);
    this.checkScroll = this.checkScroll.bind(this);
  }

  setRef(ref) {
    this.ref = ref;
  }
  checkScroll() {
    const posBottom = this.ref.getBoundingClientRect().bottom;
    const winHeight = window.innerHeight;
    console.log(`posBottom :  ${posBottom}, window height : ${winHeight}`);

    //스크롤이 내려오면 리스트 추가
    if(posBottom < winHeight) {
      this.setState({listEnd: this.state.listEnd + this.state.listPlus});
    }
  }
  //컴포넌트가 마운트 됐을 때
  componentDidMount() {
    //이벤트 리스너에 체크 함수 연결
    window.addEventListener("scroll", this.checkScroll);
    this.checkScroll();
  }
  //컴포넌트가 해제 됐을 때
  componentWillUnmount() {
    //이벤트 리스너 삭제
    window.removeEventListener("scroll", this.checkScroll);

  }

  render() {
    
    const listComponent = [];
    for(var i = 1; i <= this.state.listEnd; i++) {
      //리스트일 경우에 꼭 key 지정
      listComponent.push(<h1 key={i}>리스트 컴포넌트{i}</h1>);
    }
    return <div ref={this.setRef}>{listComponent}</div>;
  }
}




export default TestStudy001;