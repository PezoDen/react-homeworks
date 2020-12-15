import React, {useState} from "react";
import Affairs1 from "./Affairs1";
// types
export type AffairPriorityType = "high" | "low" | "middle"; // need to fix any
export type AffairType1 = {
  _id: number
  name: string
  priority: string

} // need to fix any
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType1> = [ // need to fix any
  {_id: 1, name: "React", priority: "high"},
  {_id: 2, name: "anime", priority: "low"},
  {_id: 3, name: "games", priority: "low"},
  {_id: 4, name: "work", priority: "high"},
  {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType1>, filter: FilterType): Array<AffairType1> => { // need to fix any
  if (filter === "all") return affairs;
  if (filter === "high") return affairs.filter((affairs) => affairs.priority === "high");
  if (filter === "middle") return affairs.filter((affairs) => affairs.priority === "middle");
  if (filter === "low") return affairs.filter((affairs) => affairs.priority === "low");
  else return affairs // need to fix
}
export const deleteAffair = (affairs: Array<AffairType1>, _id: number): Array<AffairType1> => { // need to fix any
  return affairs.filter((affairs) => affairs._id !== _id); // need to fix
}

function HW2New() {
  const [affairs, setAffairs] = useState<Array<AffairType1>>(defaultAffairs); // need to fix any
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

  return (
    <div>
      <hr/>
      homeworks 2

      {/*should work (должно работать)*/}
      <Affairs1
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr/>
    </div>
  );
}

export default HW2New;
