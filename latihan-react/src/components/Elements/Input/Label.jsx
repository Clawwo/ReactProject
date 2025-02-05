import { Children } from "react";

const Label = (props) => {
  const { htmlFor, Children } = props;
  return (
    <div>
      <label className="block mb-2 font-bold text-gray-700" htmlFor={ htmlFor }>
        {Children}
      </label>
    </div>
  );
};

export default Label;
