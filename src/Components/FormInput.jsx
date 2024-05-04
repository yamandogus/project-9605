import { Form, InputGroup } from "react-bootstrap";
import { Button, Li } from "./Button";
import { useState } from "react";
import AlertMessage from "./Alert";
import "./FormInputStyle.module.css";

function FormInput() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const addTodo = (e) => {
    if (todoInput.trim() !== "") {
      e.preventDefault();
      setTodos([...todos, todoInput]);
      setTodoInput("");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    } else {
      e.preventDefault();
      setErrorMessage("Hedef boş olamaz!");
      setTimeout(() => setErrorMessage(""), 2000);
    }
  };

  const removeTodo= (index)=>{
    const updatedTodos = todos.filter((todo, i) => i !== index);
    console.log(index);
    setTodos(updatedTodos)
  }
  return (
    <>
      <Form>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Hedef Ekle"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button onClick={addTodo}>Ekle</Button>
        </InputGroup>
      </Form>
      {showAlert && (
        <AlertMessage type="success" message="Yeni bir hedef eklendi!" />
      )}
      {errorMessage && <AlertMessage type="danger" message={errorMessage} />}
      <div>
        <ul>
          {todos.map((todo, index) => (
            <Li onClick={()=> removeTodo(index)} key={index}>{todo}</Li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FormInput;
