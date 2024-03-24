import List from "../List";
import DeleteUserModal from "../DeleteUserModal";
import { useState } from "react";

const UserList = ({ userData, deleteUserHandler, editUserHandler }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      deleteUserHandler(userToDelete.id);
      setUserToDelete(null);
      setShowDeleteModal(false);
    }
  };

  const handleCancelDelete = () => {
    setUserToDelete(null);
    setShowDeleteModal(false);
  };

  return (
    <>
      {userData.map((user) => (
        <List
          user={user}
          key={user.id}
          deleteUserHandler={deleteUserHandler}
          editUserHandler={editUserHandler}
          onDeleteClick={() => handleDeleteClick(user)}
        />
      ))}

      {showDeleteModal && (
        <DeleteUserModal
          userToDelete={userToDelete}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
};

export default UserList;
