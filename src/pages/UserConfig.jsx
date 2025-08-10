import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useUser } from "../../utils/useUser";

export const UserConfig = () => {
  const { updateName } = useUser();
  const [input, setInput] = useState("");

  function getInput(e) {
    const value = e.target.value;
    setInput(value);

  }
  useEffect(()=>{
    updateName(input);
  }, [input])
  return (
    <div>
      <h1>Descubre tu profesión</h1>
      <h3>Introduce tu nombre</h3>
      <input type="text" onChange={(e) => getInput(e)} value={input} />
      {/* <h3>Selecciona un avatar</h3>
      <img src="OccupationsGame/public/icons8-fruta-50-2.png" alt="" /> */}
      <Button texto={"Comenzar"} link={"/activities"} />
    </div>
  );
};

export default UserConfig;
