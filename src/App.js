import React from 'react';
import { Form } from './components/Form';
import { ToDoList } from './components/ToDoList';


const App = () => {
  return (
    <>
      <h1>LKMX Frontend</h1>
      <Form />
      <ToDoList />
      <small>Agrega tus pendientes.<br />Elimina con doble click.</small>
    </>
  );
}

export default App;
