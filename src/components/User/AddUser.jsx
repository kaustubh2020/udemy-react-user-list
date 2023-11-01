import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./AddUser.module.css";

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      alert("Please enter a username/age first and try again");
      return;
    }
    if (+enteredAge > 0) return;

    console.log(enteredAge, enteredUsername);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles["input"]}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={usernameChangedHandler}
        />
        <label htmlFor="age">Age (in Years)</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangedHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
