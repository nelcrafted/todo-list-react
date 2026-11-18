import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TodoFormModal from "../components/TodoFormModal";

export default function TodoDetailPage({ todos, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);

  const todo = todos.find((t) => t.id === Number(id)); // useParams selalu string

  if (!todo) {
    return (
      <main className="detail-wrap">
        <div className="detail-card">
          <p>Tugas tidak ditemukan.</p>
          <button className="btn btn-red" onClick={() => navigate("/")}>Kembali</button>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-wrap">
      <section className="detail-card">
        <div className="detail-left">
          <h3>Judul</h3>
          <p className="small">{todo.title}</p>
          <h3>Deskripsi</h3>
          <div className="desc-box">{todo.description || "-"}</div>
        </div>
        <div className="detail-right">
          <h3>Status</h3>
          <p className="small">{todo.status}</p>
          <h3>Prioritas</h3>
          <p className="small">{todo.priority}</p>
          <h3>Deadline</h3>
          <p className="small">{todo.deadline}</p>
          <div className="btn-row left">
            <button className="btn btn-red btn-sm" onClick={() => navigate("/")}>Kembali</button>
            <button className="btn btn-blue btn-sm" onClick={() => setShowEdit(true)}>Update</button>
          </div>
        </div>
      </section>

      {showEdit && (
        <TodoFormModal
          mode="edit"
          initialData={todo}
          onSubmit={(data) => onUpdate(todo.id, data)}
          onClose={() => setShowEdit(false)}
        />
      )}
    </main>
  );
}