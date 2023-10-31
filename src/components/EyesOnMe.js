// Code EyesOnMe Component Here
import React from 'react';

const EyesOnMe = () => {
  // Event handler for the focus event
  const handleFocus = () => {
    console.log('Good!');
  };

  // Event handler for the blur event
  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <div>
      <button
        onFocus={handleFocus} // Listen for the 'focus' event
        onBlur={handleBlur} // Listen for the 'blur' event
      >
        Eyes on me
      </button>
    </div>
  );
};

export default EyesOnMe;
