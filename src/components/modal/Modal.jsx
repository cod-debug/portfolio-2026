import "./modal.css";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container p-2 md:p-4 rounded-lg bg-primary-background"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close text-primary text-5xl" onClick={onClose}>
          ×
        </button>

        {children}
      </div>
    </div>
  );
}