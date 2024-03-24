import React from "react";

function DeleteUserModal({ userToDelete, onConfirm, onCancel }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete {userToDelete.userName}?</p>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteUserModal;
