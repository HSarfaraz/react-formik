import React, { useState } from "react";
import Select from "react-select";

const DropList = (props) => {
  // const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (value) => {
    props.onChange("topics", value);
  };

  const handleBlur = () => {
    props.onBlur("topics", true);
  };

  return (
    <div>
      <Select
        value={props.value}
        onChange={handleChange}
        onBlur={handleBlur}
        options={props.options}
        isMulti={true}
      />
    </div>
  );
};

export default DropList;
