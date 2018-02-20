class Counter extends React.Component{
    constructor(props){
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
          count : 0
      };
    }
    handleAddOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
      this.setState((prevState) => {
          return {
              count: prevState.count - 1
          }
      });
    }
    handleReset(){
        console.log(this);
    }
    render(){
        return(
            <div>
               <h1>Count : {this.state.count}</h1>
               <p>
               <button onClick={this.handleAddOne}>+1</button>
               <button onClick={this.handleMinusOne}>-1</button>
               <button onClick={this.handleReset}>reset</button>
               </p>
            </div>
        );
    }
}
const appRoot = document.getElementById('app'); 
ReactDOM.render(<Counter />, appRoot);