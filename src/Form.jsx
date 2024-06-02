import { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("");
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {};
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">color</label>
      <input type="text" id="color" value={color} onChange={handleChange} />
      <button type="submit" className="btn">
        submit
      </button>
    </form>
  );
};
export default Form;
