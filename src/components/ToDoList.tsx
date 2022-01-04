import React from "react";
import { ToDo } from "../models/Todo";

const ToDoList = () => {
  const ToDos: ToDo[] = [
    { id: 1, title: "Ir ao supermercado", done: false },
    { id: 2, title: "Ir à Academia", done: false },
  ];
  return (
    <table className="uk-table">
      <caption>Lista de Tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th>Aprovação</th>
        </tr>
      </thead>
      <tbody>
        {ToDos.map((Todo) => {
          let aprovacao = "";
          if (Todo.done) {
            aprovacao = "Aprovado";
          } else {
            aprovacao = "Reprovado";
          }
          return (
            <tr>
              <td>{Todo.id}</td>
              <td>{Todo.title}</td>
              <td>{aprovacao}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ToDoList;
