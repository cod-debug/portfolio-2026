import "./modal.css";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop relative" onClick={onClose}>
        <button className="modal-close text-light text-5xl" onClick={onClose}>
          ×
        </button>
      <div
        className="modal-container p-2 md:p-4 rounded-lg bg-primary-background"
        onClick={(e) => e.stopPropagation()}
      >

        {children}
      </div>
    </div>
  );
}