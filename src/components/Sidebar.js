import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaHeartbeat,
  FaWeight,
  FaFire,
  FaHistory,
  FaEye
} from "react-icons/fa";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">🩺 Smart Health</h2>

      <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>
        <FaTachometerAlt /> Dashboard
      </NavLink>

      <NavLink to="/bmi" className={({ isActive }) => isActive ? "link active" : "link"}>
        <FaWeight /> BMI
      </NavLink>

      <NavLink to="/bodyfat" className={({ isActive }) => isActive ? "link active" : "link"}>
        <FaHeartbeat /> Body Fat
      </NavLink>

      <NavLink to="/calories" className={({ isActive }) => isActive ? "link active" : "link"}>
        <FaFire /> Calories
      </NavLink>

      <NavLink to="/history" className={({ isActive }) => isActive ? "link active" : "link"}>
        <FaHistory /> History
      </NavLink>

      <NavLink to="/color-test" className={({ isActive }) => isActive ? "link active" : "link"}>
        <FaEye /> Color Test
      </NavLink>
    </div>
  );
}