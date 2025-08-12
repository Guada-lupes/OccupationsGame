import React from "react";
import { useParams } from "react-router-dom";
import Questions from "../components/Questions"
import Occupations from "../components/Occupations";
import useTreeLogic from "../../utils/useTreeLogic";

export const QuestionsPage = () => {
  const { id } = useParams();
const {currentNode, handleOptionClick, handleBack, path} = useTreeLogic(id)

  if (currentNode.ocupaciones) {
    return <Occupations currentNode={currentNode} handleBack={handleBack}/>;
  }
  return <Questions currentNode={currentNode} handleBack={handleBack} handleOptionClick={handleOptionClick} path={path}/>;
};

export default QuestionsPage;
