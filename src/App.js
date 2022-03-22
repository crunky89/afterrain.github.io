/* 
  리액트 테스트 App
*/

import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


import Layout from './layout/Layout';

export default class App extends Component {



  render() {
    return (
      <>{/* 주석처리 // 하나의 컨테이너 안에 있어야 하는게 기본인듯 */}
          <Layout/>
      </>
    )
  }
}