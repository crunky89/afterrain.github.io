/* 
  리액트 테스트

  자식 컴포넌트가 props를 통해 받은 데이터는 읽기 전용
*/

import React, {Component} from 'react';

export class TodoRow extends Component {
  render = () =>
  <tr>
    <td>{this.props.item.action}</td>
    <td>
      <input type="checkbox" checked={this.props.item.done} onChange={ () => this.props.callback(this.props.item) }/>
    </td>
  </tr>
}