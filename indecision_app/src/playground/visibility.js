
class Toggle extends React.Component{
 constructor(props){
     super(props);
     this.changeState = this.changeState.bind(this);
     this.state = { 
         visibility: false
     };
 }
 changeState(){
  this.setState((prevState)=>{
      return {
          visibility : !prevState.visibility
      }
  });
 }
 render(){
     return(
         <div>
           <button onClick = {this.changeState}>
           {this.state.visibility ? 'Hide details': 'Show details'}
           </button>
              {this.state.visibility && (
                   <div>
                      <p>Get a girlfriend bruh!</p>
                   </div>
               )}
         </div>
     );
 }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<Toggle />, appRoot);