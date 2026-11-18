export default function ConfirmModal({ title, message, confirmLabel = "Hapus", onConfirm, onCancel }) {
  return (
    <div className="overlay" onClick={onCancel}>
      <div className="modal modal-sm" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <h2 className="modal-title">{title}</h2>
        <p className="confirm-text">{message}</p>
        <div className="btn-row">
          <button className="btn btn-blue" onClick={onCancel}>Batal</button>
          <button className="btn btn-red" onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}