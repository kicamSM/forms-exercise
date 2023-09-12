import React, { useState } from "react";

/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { width: "", height: "", color: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {width, height, color} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    console.log('handleChange is running')
    const { name, value }= evt.target;
    // ! Note this handles all values so name is equal to name on input...

    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
    
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        type="input"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
       <label htmlFor="height">Height:</label>
        <input
        type="input"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <button>Add a new div!</button>
    </form>
  );
};

export default NewBoxForm;