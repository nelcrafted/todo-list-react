import { useState } from "react";
import { STATUS_OPTIONS, PRIORITY_OPTIONS } from "../data/dummyTodos";

const EMPTY = { title: "", description: "", status: "to-do", priority: "low", deadline: "" };

export default function TodoFormModal({ mode = "add", initialData, onSubmit, onClose }) {
  const [form, setForm] = useState(initialData ? { ...EMPTY, ...initialData } : EMPTY);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.title.trim()) er.title = "Judul wajib diisi";
    if (!form.deadline) er.deadline = "Deadline wajib diisi";
    if (Object.keys(er).length) return setErrors(er);
    onSubmit({ ...form, title: form.title.trim(), description: form.description.trim() });
    onClose();
  };

  const isAdd = mode === "add";

  return (
    <div className="overlay" onClick={onClose}>
      <form className="modal" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} noValidate>
        <h2 className="modal-title">{isAdd ? "Tambah Todo" : "Update Todo"}</h2>

        <label className="label" htmlFor="title">Judul</label>
        <input id="title" name="title" className="input" value={form.title} onChange={handleChange} autoFocus />
        {errors.title && <p className="error">{errors.title}</p>}

        <label className="label" htmlFor="description">Deskripsi</label>
        <textarea id="description" name="description" className="input" rows={3} value={form.description} onChange={handleChange} />

        <div className="grid-2">
          <div>
            <label className="label" htmlFor="status">Status</label>
            <select id="status" name="status" className="input" value={form.status} onChange={handleChange}>
              {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="label" htmlFor="priority">Prioritas</label>
            <select id="priority" name="priority" className="input" value={form.priority} onChange={handleChange}>
              {PRIORITY_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>

        <label className="label" htmlFor="deadline">Deadline</label>
        <input id="deadline" name="deadline" type="date" className="input" value={form.deadline} onChange={handleChange} />
        {errors.deadline && <p className="error">{errors.deadline}</p>}

        <div className="btn-row">
          <button type="button" className="btn btn-red" onClick={onClose}>Batal</button>
          <button type="submit" className="btn btn-blue">{isAdd ? "Tambah" : "Update"}</button>
        </div>
      </form>
    </div>
  );
}