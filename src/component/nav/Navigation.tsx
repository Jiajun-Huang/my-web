import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classNames from "classnames";
import "./Navigation.style.scss";
//icon
import {
  BgColorsOutlined,
  CheckOutlined,
  HomeOutlined,
  MenuOutlined,
  SettingOutlined,
} from "@ant-design/icons";

//import { Drawer } from "antd";

//import { NavLink, useNavigate } from "react-router-dom";

export default function Navigation() {

  
  const navArr = [
    { name: "Article", to: "/articles" },
    { name: "Quote", to: "/quote" },
    { name: "Talk", to: "/say" },
    { name: "Comments", to: "/msg" },
    { name: "Project", to: "/show" },
    { name: "Update", to: "/log" },
    { name: "About", to: "/about" },
  ];

  return (
    <nav className={"nav"}>
      <ul className="nav-container">
        <li className="nav-item-container">
          <NavLink className={"nav-item home"} to={"/"}>
            <HomeOutlined></HomeOutlined>
          </NavLink>
        </li>
        <li>
          <ul className="main-nav-container">
            {navArr.map((item, index) => (
              <li className="nav-item-container" key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-item highlight" : "nav-item"
                  }
                  to={item.to}
                  key={index}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li className="nav-item-container">
          <NavLink className={"nav-item"} to={"/"}>
            <HomeOutlined></HomeOutlined>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

const styles = StyleSheet.create({});
