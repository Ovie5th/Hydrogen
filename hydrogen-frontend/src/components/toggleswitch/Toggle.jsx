import React, { useState } from "react";
import "./toggle.css";

function ToggleSwitch({ status }) {
  const [isToggled, setIsToggled] = useState(status);
  const onToggle = () => setIsToggled(!isToggled);

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
      />
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;
