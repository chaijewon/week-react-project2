import React,{Component} from "react";
import axios from 'axios'
// 외부 파일 읽기 , 서버연결 => 데이터 얻기
/*
       Mount    Update   UnMount
       =====    =======  ========
       render()  setState()=>render()
       가상 메모리에 저장
       <App/>
       function App(props)
       {
         return (
            <div>Hello</div>
         )
       }
 */
class Movie extends Component{
   constructor(props) {
       super(props);
       this.state={
           movie:[]
       }
       console.log("constructor(props) call..")
   }
   componentDidMount() {
       console.log("componentDidMount() Call..")

       axios.get('http://localhost:3000/movie.json')
           .then((res)=>{
               console.log(res.data)
               this.setState({movie:res.data});
           })
   }
   render() {
        console.log("render() Call..")
        const html=this.state.movie.map((m)=>
            <div className="col-md-4">
                <div className="thumbnail">
                    <a href="/w3images/lights.jpg">
                        <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                            <div className="caption">
                                <p>{m.title}</p>
                            </div>
                    </a>
                </div>
            </div>
        )
        return (
            <div className={"row"}>
                {html}
            </div>
        )
   }
   shouldComponentUpdate(nextProps, nextState, nextContext) {
      console.log("shouldComponentUpdate Call");
      return true;
   }
}
export default Movie