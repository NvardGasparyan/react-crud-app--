const List = ({ user, deleteUserHandler, editUserHandler }) => {
  return (
    <ul className="item-list">
      <li className="item-list-li">{user.userName}</li>
      <li className="iitem-list-li">{user.password}</li>
      <li className="item-list-li">{user.email}</li>
      <div>
        <button
          className="item-list-button"
          onClick={() => editUserHandler(user.id)}
        >
          Edit
        </button>
        <button
          className=" item-list-button item-list-button1"
          onClick={() => deleteUserHandler(user.id)}
        >
          Delete
        </button>
      </div>
    </ul>
  );
};

export default List;
