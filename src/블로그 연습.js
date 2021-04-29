import React, { useState } from 'react';
import List from './components/List';
import Modal from './components/Modal';
import './블로그 연습.css';


function App(){
  //state 
  let [topic,topicChange] = useState(['daily news','Today issue']);
  let [pageView,pageViewChange] = useState(0)
  let [name,nameChange] = useState({'도현' : '도짱' , '쩡이' : '쩡짱'});
  let [modalState,modalStateChange] = useState(0)

  //state

  //function
  function titleChange(){
    let newArray = [...topic];    // depp copy   
    if(topic[0] === 'daily news'){
      newArray = ['미스터리한 개발자','Mr.Lee의 등장!'] ;
      topicChange(newArray);
    }
    else{
      newArray = ['daily news','Today issue'] ;
      topicChange(newArray);
    }
  }

  function listClick(){
    pageViewChange(pageView + 1) ;
    
    if(modalState === 0){
      modalStateChange(1);
      
    }
    else if(modalState === 1){
      modalStateChange(0);
    }
  }
  
  //function
  
  //html
  return (
    <div className="App">
      <div className="nav">
        <div>Mr.Lee Blog</div>
        <button onClick={ titleChange } className="changeTheme">secret room</button>
      </div>    
      <List topic={topic[0]} icon={'📺'} pageView={pageView} listClick={listClick} />
      <List topic={topic[1]} icon={'🤩'} pageView={pageView} listClick={listClick} />
      <Modal title="Mr.Lee" writer={ name.쩡이 } date="21.04.26" detail="미스터리가 개발자를 선택한 이유" />
    </div>
  );
  //html
}


export default App;
