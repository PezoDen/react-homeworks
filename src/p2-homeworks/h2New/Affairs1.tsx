import React from "react";
import Affair1 from "./Affair1";
import {AffairType1, FilterType} from "./HW2New";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType1>
    setFilter: (filter:FilterType)=>void
    deleteAffairCallback: (_id: number)=>void
}

function Affairs1(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType1) => (
        <Affair1 // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll1 = () => {props.setFilter("all")}; // need to
    const setHigh1 = () => {props.setFilter("high")};
    const setMiddle1 = () => {props.setFilter("middle")};
    const setLow1 = () => {props.setFilter("low")};

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll1}>All</button>
            <button onClick={setHigh1}>High</button>
            <button onClick={setMiddle1}>Middle</button>
            <button onClick={setLow1}>Low</button>
        </div>
    );
}

export default Affairs1;
