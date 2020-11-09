import { combineReducers, createStore } from 'redux';
import './index.css'

//let initState = document.getElementById('counter').innerText;

const reducer = (state = 0, action)=>{
       switch (action.type){
         case 'PLUS':
          {
            return state +1;
          }
          case 'PLUS_2':
          {
            return state +2;
          }
          case 'MULTIPLY_2':
          {
            return state *2;
          }
         case 'MINUS':{
           return state - 1;
         }
         case 'MINUS_2':{
          return state -2;
        }
        case 'DIVIDE_2':{
          return state /2;
        }
        default:{
          return state;
        }
       }  
};

const reducerBackgrd = (state = 'backgrnON', action)=>{
   switch(action.type){
     case 'BACKGRNON':{
        return 'backgrnON';
     }
     case 'BACKGRNOFF':{
      return 'backgrnOFF';
     }
     default:{
       return state;
     }
   }
}

const GrouprReducers =  combineReducers({
  reducer,
  reducerBackgrd
})

const store = createStore(GrouprReducers);

let flagBGND = 0;

document.getElementById('plus').addEventListener("click",()=>{
  store.dispatch({type: 'PLUS'});
  //console.log('store',store.getState().reducer);
})
document.getElementById('plus_2').addEventListener("click",()=>{
  store.dispatch({type: 'PLUS_2'});
})
document.getElementById('multiply_2').addEventListener('click',()=>{
  store.dispatch({type: 'MULTIPLY_2'});
})

document.getElementById('minus').addEventListener('click',()=>{
  store.dispatch({type:'MINUS'});
})
document.getElementById('minus_2').addEventListener('click',()=>{
  store.dispatch({type:'MINUS_2'});
})
document.getElementById('divide_2').addEventListener('click',()=>{
  store.dispatch({type:'DIVIDE_2'});
})

document.getElementById('sw_backgrn').addEventListener("click",()=>{
  if(flagBGND===0){
    document.getElementById('backgnd-container').classList.remove(store.getState().reducerBackgrd);
    store.dispatch({type:'BACKGRNOFF'})
    flagBGND=1;
    console.log('flagBNG',flagBGND)
  }else if(flagBGND===1){
    document.getElementById('backgnd-container').classList.remove(store.getState().reducerBackgrd);
    store.dispatch({type:'BACKGRNON'})
    flagBGND=0;
    console.log('flagBNG',flagBGND)
  }
})

const update =()=>{
 document.getElementById('counter').innerText = store.getState().reducer;
 document.getElementById('backgnd-container').classList.add(store.getState().reducerBackgrd);
};

store.subscribe(update);


