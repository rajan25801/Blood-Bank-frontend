import React, { useState } from "react";
import { createInventory } from "../../services/inventoryService";

const InventoryForm = () => {
  const [bloodType, setBloodType] = useState("in");
  const [donarEmail, setDonarEmail] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      inventoryType: bloodType,
      email: donarEmail,
      quantity: parseInt(quantity),
    };

    await createInventory(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={bloodType} onChange={(e) => setBloodType(e.target.value)}>
        <option value="in">IN</option>
        <option value="out">OUT</option>
      </select>

      <input
        type="email"
        placeholder="Donor Email"
        value={donarEmail}
        onChange={(e) => setDonarEmail(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Quantity (ML)"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default InventoryForm;
