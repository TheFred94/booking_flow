import { useEffect, useState } from "react";
import { AreaList } from "./AreaList";

export function ChooseArea() {
  // Creates variables, and sets default state for area
  const [areas, setAreas] = useState("");

  // fetches the different areas from api, and sets state of area to the fechted data
  useEffect(() => {
    fetch(`http://localhost:8080/available-spots`)
      .then(res => res.json())
      .then(data => {
        setAreas(data);
      });
  }, []);

  return (
    <>
      <h2 className="mb-5 mt-16 text-center uppercase">Choose area</h2>

      {/* if areas is empty, then don't show anything, else show AreaList component.  */}
      {areas === "" ? <p></p> : <AreaList areas={areas} />}
    </>
  );
}
