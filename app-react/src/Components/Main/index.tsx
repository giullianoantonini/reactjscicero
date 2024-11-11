import Titulo from "../Título";
import { useState } from "react";

const Main: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  let selectedCourse = "";
  if (selectedOption === "reactJS") {
    selectedCourse = "React JS";
  } else if (selectedOption === "nodeJS") {
    selectedCourse = "Node JS";
  } else if (selectedOption === "jsECSSPro") {
    selectedCourse = "JS e CSS Pro";
  }

  return (
    <>
      <Titulo nome={selectedCourse} />
      <form>
        <input
          type="radio"
          id="optionOne"
          name="course"
          value="reactJS"
          onChange={handleOptionChange}
        />
        <label htmlFor="optionOne">React JS</label>
        <br />
        <input
          type="radio"
          id="optionTwo"
          name="course"
          value="nodeJS"
          onChange={handleOptionChange}
        />
        <label htmlFor="optionTwo">Node JS</label>
        <br />
        <input
          type="radio"
          id="optionThree"
          name="course"
          value="jsECSSPro"
          onChange={handleOptionChange}
        />
        <label htmlFor="optionThree">JS e CSS Pro</label>
      </form>
    </>
  );
};

export default Main;
