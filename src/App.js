import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/TodoLists/Todos";
import { Footer } from "./MyComponents/TodoLists/Footer";
import { AddTodo } from "./MyComponents/TodoLists/AddTodo";
import { About } from "./MyComponents/About";
import TextForm from "./MyComponents/WordAnalizer/TextForm";
import News from "./MyComponents/NewsUpdates/News";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./MyComponents/NewsUpdates/Navbar";
import Weather from "./MyComponents/Weathers/Weather";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="React App" />

        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route
            exact
            path="/todo"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>

          <Route exact path="/news">    <Navbar /> <News country="in" /> </Route>
          <Route exact path="/news/us">  <News country="us" /> </Route>
          <Route exact path="/news/in">  <News country="in" /> </Route>
          <Route exact path="/news/en">  <News country="gb" /> </Route>
          <Route exact path="/news/au">  <News country="au" /> </Route>

          <Route exact path="/word">
            <TextForm />
          </Route>
          <Route exact path="/weather">
            <Weather/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
