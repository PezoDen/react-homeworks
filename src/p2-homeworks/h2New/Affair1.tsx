import React from "react";
import {AffairType1} from "./HW2New";

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType1 // need to fix any
  deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair1(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  };// need to fix

  return (
    <div>
      {/*// show some text*/}
      {`${props.affair.name} ${props.affair.priority}`}
      <button onClick={deleteCallback}>X</button>
    </div>
  );
}

export default Affair1;
