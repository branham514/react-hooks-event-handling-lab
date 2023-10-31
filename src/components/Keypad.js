// Code Keypad Component Here

// const Keypad =() =>{
//     //event handler for input change
//     const handleChange = () => {
//         console.log("Entering password..");
//     };

//     return(
//         <div>
//     <input
//     type="passsword"
//     onchange ={handleChange} 
//     /> 
//     </div>
//     );
// };


// export default Keypad;
import React from 'react';

const Keypad = () => {
  // Event handler for input change
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      <input
        type="password" // Use the 'password' type for a password input
        onChange={handleChange} // Listen for the 'change' event
      />
    </div>
  );
};

export default Keypad;
