class IndecisionApp extends React.Component{
    constructor(props){
    super(props);
     this.handleAddOption = this.handleAddOption.bind(this);
     this.handlePick = this.handlePick.bind(this);
     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
     this.handleDeleteOption = this.handleDeleteOption.bind(this);
     this.state = {
      options : []
     }
    }
    //Component fires when component first gets mounted to the DOM
    //For class-based components only
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() =>({ options }));
            }
        }catch(e){
            //Do nothing at all
        }
        
    }
    componentDidUpdate(prevProps, prevState){
       if(prevState.options.length !== this.state.options.length){
          const json = JSON.stringify(this.state.options); 
          localStorage.setItem('options', json)
          console.log('Storing data');
       }
    }
    //fires before your component goes away
    componentWillUnmount(){
        console.log('Component will unmount');
    }
    handleDeleteOptions(){
        this.setState(() =>({ options : [] }));    
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState) =>({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){
        if(!option){
          return 'Enter valid value to add Item!';
       }else if(this.state.options.indexOf(option) > -1){
          return 'This option already Exists';
       }
       this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render(){
        const title = 'Indecision';
        const subtitle = 'Enjoy life now!';
        return(
            <div> 
               <Header subtitle={subtitle}/>
               <Action hasOptions ={this.state.options.length > 0} handlePick ={this.handlePick}/>
               <Options 
                  options={this.state.options}
                  handleDeleteOptions={this.handleDeleteOptions}
                  handleDeleteOption={this.handleDeleteOption}
                />
               <AddOption 
                  handleAddOption={this.handleAddOption}
               />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
           <h1>{props.title}</h1>
           {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>    
   );
}
Header.defaultProps = {
 title: 'Indecision App'
};



const Action = (props) => {
        return(
            <div>
              <button 
              onClick={props.handlePick}
              disabled={!props.hasOptions}
              >What should I do?</button>
            </div>
        );
}
const Options = (props) => {
    return(
    <div>
      {( props.options.length > 1) && <p>Which of the {props.options.length}?</p> }
      {( props.options.length > 1) && <button onClick={props.handleDeleteOptions}>Remove All</button>}      
      {props.options.length === 0 &&(<p>Enter options ..None is available at the moment!</p>)}
        {
         props.options.map((option) => (
            <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
            />
         ))
        }
     
     </div>
        
    );
}
const Option = (props) =>{
    return(
        <div>
         <input type="checkbox" checked/> {props.optionText}
         <button 
         onClick={(e) =>{
           props.handleDeleteOption(props.optionText)
         }}

         >
          -
           </button>
        </div>
    );
}

class AddOption extends React.Component{
    constructor(props){
    super(props);
     this.handleAddOption = this.handleAddOption.bind(this);
     this.state = {
       error : undefined
     }
    }

    handleAddOption(e){
      e.preventDefault();
      const content = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(content);
      this.setState(() => ({ error })); 
      if(!error){
          e.target.elements.option.value ='';
      }
    }
    render(){
        return (
            <div>
                {this.state.error &&(<p>{this.state.error}</p>)}
                <form onSubmit={this.handleAddOption}>
                   <input type="text" placeholder="What you wanna do?" name="option"/>
                   <button>Submit</button>
                </form>
            </div>
        );
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);