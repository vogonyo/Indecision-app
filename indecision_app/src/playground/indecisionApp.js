class Indecision extends React.Component{
    render(){
        const title = 'Indecision App @ogy4k';
        const subtitle = 'Trying again';
        
        return(
            <div>
              <Header title={title} subtitle={subtitle}/>
              <Options />
              <Action />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
             <h1>{this.props.title}</h1>
             <h2>{this.props.subtitle}</h2>           
            </div>
        );
    }
}

class Options extends React.Component{
    constructor(props){
     super(props);
     this.handleRemoveAll = this.handleRemoveAll.bind(this);

    }

    handleRemoveAll(){
        alert('handleRemoveAll');
    }
    render(){
        const options =["Take her home", "Eat her down", "Enjoy her company"];
        return(
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <p>
                  {
                      this.props.options.map((option) => <Option key={option} optionText={option} />)
                  }
                </p>          
            </div>
        );
    }
}
class Option extends React.Component{
    render(){
        return(
            <div>
                <p>
                  <input type="checkbox" />{this.props.optionText}
                </p>          
            </div>
        );
    }
}
class Action extends React.Component{
    constructor(props){
        super(props);
        this.handleData = this.handleData.bind(this);
    }
    handleData(){
        const option = e.target.elements.option.value.trim();
        if(option){
           alert(option);
        }
    }
    render(){
        return(
            <div>
                <form onSubmit ={this.handleData}>
                <input type="text" name="option"/>
                   <button>Add Item </button>
                </form>          
            </div>
        );
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<Indecision />, appRoot);