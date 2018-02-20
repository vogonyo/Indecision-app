console.log('App.js is running!');
//if statements
//Ternary operators
//logical AND operator

//only render the description and p tag if subtitle exits -logical AND

//render new p tag - if options.length > 0 'Here are your options' 'No options'

//This is JSX -> Javascript and XML
const app = {
    title: 'How to get laid !',
    description: 'Bruh get a life first',
    options: []
};
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option){
      app.options.push(option);
      e.target.elements.option.value = '';
      renderFormApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderFormApp();
};
const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    renderFormApp();
};
const renderFormApp = () => {
 const template = (
    <div>
       <h1>{app.title}</h1>
       {app.description && <p> {app.description} </p>}
       {app.options.length > 0 ? <p> Here are your options {app.options}</p>: <p>No options</p>}
       <p>{app.options.length}</p>
       <button disabled={app.options.length === 0} onClick={onMakeDecision}>Which Language?</button>
       <button onClick ={removeAll}>RemoveAll</button>
       <ul>
          {
              app.options.map((option) => {
                  return <li key={option}>{option}</li>;
              })
           }
       </ul>
       <form onSubmit ={onFormSubmit}>
         <input type ="text" name = "option"/>
         <button>Add Option</button> 
       </form>
    </div>
    );
    ReactDOM.render(template, appRoot);
}
const appRoot = document.getElementById('app');
renderFormApp();
