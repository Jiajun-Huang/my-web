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
    { name: "文章", to: "/articles" },
    { name: "名言", to: "/quote" },
    { name: "说说", to: "/say" },
    { name: "留言", to: "/msg" },
    { name: "友链", to: "/link" },
    { name: "作品", to: "/show" },
    { name: "建站", to: "/log" },
    { name: "关于", to: "/about" },
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
