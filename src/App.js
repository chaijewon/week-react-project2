import React,{Component,Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
/*
      import React,{Component} from 'react';
      class App extends Component
      {
      }
      import React from 'react';
      class App extends React.Component
      {
      }
      class 기반 =====>
      형식)
           class App extends Component
           {
               constructor(){}
               componentWillMount()
               render(){}
               componentDidMount() => $(function(){})
                       $(document).ready(function(){})
                       window.onload=function(){}

           }
      function 기반
        function App()
        {
           return (
              <html>
              </html>
           )
        }

        JSX 문법 => HTML 데이터 만들때 사용
        ===
         javascript+XML (문법사항은 XML)
         1) 반드시 계층구조를 만든다
            <div>Hello</div>
            <div>React</div> ===> Error

            <div>
              <div>Hello</div>
              <div>React</div>
            </div>
         2) HTML 태그는 반드시 소문자로만 사용한다
            <Html> => function,class
         3) 속성은 반드시 ""
            <table width=100> error
            <table width="100">
         4) 여는 태그 <a>
            닫는 태그 </a>
            빈 태그  <br/>
 */
class App extends Component{
    constructor() {
        super(); // 멤버변수 선언 , 이벤트 등록
    }
    componentDidMount() {
         // 데이터를 서버에서 전송 받거나 , Jquery연동
    }
    // 필수 (반드시 사용) => 화면 출력 => JSX
    render() {
        return (
            <Fragment>
             <div>{this.props.name}</div>
             <div>{this.props.sex}</div>
            </Fragment>
        )
    }
}
/*
       return (
         <ul>
          <li>aaa</li>
          <li>bbb</li>
         </ul>
       )

       return (
         React.createElement('ul',null,
           React.createElement('li',null,'aaa'),
           React.createElement('li',null,'bbb')
           )
       )
 */
export default App;
