import React from "react";

const NumberButton = (props) => {
  return (
    <>
    {
      props.number === '0' ?
      <button onClick={props.clickNumberBtn} name='zero'  data-type="number">{props.number}</button>
      :<button onClick={props.clickNumberBtn} data-type="number">{props.number}</button>
    }
    </>
  )
}
    // <>
    //   {/* Display a button element rendering the data being passed down from the parent container on props */}
    // </>



export default NumberButton ;