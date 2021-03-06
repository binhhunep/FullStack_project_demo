import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import styles from "./styles.module.scss";

function InputC({ label, icon, error, onChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.container_form_label}>{label}</label>
      <div className={styles.container_form_item}>
        {icon === "UserOutlined" ? (
          <UserOutlined className={styles.container_form_icon} />
        ) : (
          <LockOutlined className={styles.container_form_icon} />
        )}

        <Input
          className={styles.container_form_input}
          value={inputValue}
          onChange={(e) => handleChangeValue(e)}
        />
      </div>
      <div className={styles.container_form_error}>{error}</div>
    </div>
  );
}

export default InputC;
