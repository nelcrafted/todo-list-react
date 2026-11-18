import { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { dummyTodos } from "./data/dummyTodos";
import TodoListPage from "./pages/TodoListPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import Toast from "./components/Toast";

export default function App() {
  const [todos, setTodos] = useState(dummyTodos);
  const [toast, setToast] = useState(null); // { message, type }

  const closeToast = useCallback(() => setToast(null), []);
  const notify = useCallback((message, type = "success") => {
    setToast({ message, type, key: Date.now() });
  }, []);

  const addTodo = (data) => {
    const newId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    setTodos((prev) => [...prev, { ...data, id: newId }]);
    notify("Tugas berhasil ditambahkan");
  };

  const updateTodo = (id, data) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...data, id } : t)));
    notify("Tugas berhasil diperbarui");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    notify("Tugas berhasil dihapus");
  };

  const list = <TodoListPage todos={todos} onAdd={addTodo} onDelete={deleteTodo} />;

  return (
    <>
      <Routes>
        <Route path="/" element={list} />
        <Route path="/todo/:id" element={<TodoDetailPage todos={todos} onUpdate={updateTodo} />} />
        <Route path="*" element={list} />
      </Routes>
      <Toast toast={toast} onClose={closeToast} />
    </>
  );
}