import React from "react";

function Alert(props) {
  const capatalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
     
  };

  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {/* props.alert && is used as a and function , ki agar props.alert hai to aage show hoga , warna null */}
          {capatalize(props.alert.type)} : {props.alert.msg}
        </div>
      </div>
    )
  );
}

export default Alert;
