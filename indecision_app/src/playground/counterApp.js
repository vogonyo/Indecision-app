let count = 0;
const addOne = () => {
    count = count + 1;
    renderCounterApp();
};
const minusOne = () => {
    count --;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};


function  renderCounterApp(){
    const counterApp = (
        <div>
           <h1>Count: {count}</h1>
           <button onClick={addOne}> +1 </button>
           <button onClick={minusOne}> -1 </button>
           <button onClick={reset}>RESET </button>
        </div>
    );
    ReactDOM.render(counterApp, appRoot);        
}
const appRoot = document.getElementById('app');

renderCounterApp();
