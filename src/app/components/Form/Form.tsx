"use client";
import { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    birthDate: "",
  });

  const [touched, setTouched] = useState({
    fullName: false,
    phone: false,
    email: false,
    birthDate: false,
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const errors = {
    fullName: (() => {
      const words = values.fullName.trim().split(/\s+/);
      if (words.length < 2) return "Must contain at least two words";
      if (words.some((w) => /^\d/.test(w))) return "Words cannot start with a number";
      return "";
    })(),
    phone: values.phone && !/^\d+$/.test(values.phone) ? "Phone must contain only numbers" : "",
    email:
      values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
        ? "Invalid email"
        : "",
    birthDate: (() => {
      if (!values.birthDate) return "";
      const today = new Date();
      const birth = new Date(values.birthDate);
      let age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      const d = today.getDate() - birth.getDate();
      if (m < 0 || (m === 0 && d < 0)) age--;
      return age < 18 ? "Must be 18 or older" : "";
    })(),
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, phone: true, email: true, birthDate: true });

    if (Object.values(errors).every((e) => e === "")) {
      setSubmitMessage("✅ Registration successful!");
    } else {
      setSubmitMessage("⚠️ Please fix the errors before submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.formTitle}>Register</h2>

      {["fullName", "phone", "email", "birthDate"].map((field) => {
        const labelMap: any = {
          fullName: "Full Name",
          phone: "Phone",
          email: "Email",
          birthDate: "Birth Date",
        };
        const typeMap: any = {
          fullName: "text",
          phone: "text",
          email: "email",
          birthDate: "date",
        };

        return (
          <div key={field} className={styles.formGroup}>
            <label>{labelMap[field]}</label>
            <input
              type={typeMap[field]}
              name={field}
              value={(values as any)[field]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched[field as keyof typeof touched] && (errors as any)[field] && (
              <p className={styles.error}>{(errors as any)[field]}</p>
            )}
          </div>
        );
      })}

      <button type="submit" className={styles.submitButton}>
        Register
      </button>

      {submitMessage && (
        <p
          className={`${styles.message} ${
            submitMessage.startsWith("✅") ? styles.success : styles.warning
          }`}
        >
          {submitMessage}
        </p>
      )}
    </form>
  );
}
