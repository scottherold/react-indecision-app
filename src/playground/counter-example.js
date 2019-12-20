





// // ** Counter Variables ** //
// let count = 0;

// // *** FUNCTIONS *** //
// // Rendering
// const renderCounterApp = () => {
//     /* 
//     / Ternary operator used for conditional name display
//     / Logical and operator used for age validation
//     / You can set functions within JSX expressions
//     / If the function returns 'undefined' it will not display the data within the expression
//     */
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Resent</button>
//         </div>
//     );

//     // Rendering
//     ReactDOM.render(templateTwo, appRoot);
// };

// // increments counter
// const addOne = () => { 
//     count++;
//     renderCounterApp();
// };

// // decrements counter
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// // reset button
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// // *** RENDERING *** //
// renderCounterApp();