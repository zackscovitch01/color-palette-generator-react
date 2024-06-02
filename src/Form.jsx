import { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    let newList = [...list, {}];
  };
  return (
    <section className="container">
      <h4>color generator</h4>
      <form onSubmit={handleSubmit} className="color-form">
        <input type="color" value={color} onChange={handleChange} />
        <input
          type="text"
          id="color"
          value={color}
          onChange={handleChange}
          placeholder="#f15025"
        />
        <button type="submit" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
