const details = {
    content: 'Hey These are some of the details you can now see',
    Author: 'Victor Ogonyo',
    state: false
};
const contentDisplay = () => {
    const content = details.content;
    if(details.state){
        return content;
        visibilityRender();
     }
};
const changeState = () => {
    details.state = !details.state;
     visibilityRender();
};

const visibilityRender = () => {
    const template = (
        <div>
           <h2>Visibility Toggle</h2>
           <button onClick= {changeState}>
           {details.state ? "Hide Details": "Show Details"}
           </button>
           {/*{details.state && (
               <div>
                  <p>Hey Man here are the details!</p>
               </div>
           )}
        
        */}
           <p>{contentDisplay()}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
visibilityRender();