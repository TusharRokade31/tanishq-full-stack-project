import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers, signUp } from "../store/users/action";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UserDashInfo = () => {
  const [show, setShow] = useState(false);
  const [oneUser, setUser] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Usershow, setUserShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleUserClose = () => setUserShow(false);
  const handleUserShow = () => setUserShow(true);

  const [showDelete, setShowDelete] = useState(false);

  const handleDeleteClose = () => setShowDelete(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [show]);

  const useList = useSelector((state) => state.userss.users);
  // console.log(useList)

  const handleDeleteShow = (id) => {
    const singleUser = useList.filter((user) => user._id == id);

    setUser(singleUser);
    setShowDelete(true);
  };




  return (
    <>
      <div className="d-flex justify-content-evenly align-items-center">
        <h4 className="border d-inline-block p-2 text-left">
          Total Users {useList.length}
        </h4>
        
      </div>
      <div className="mt-2">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">users</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Conatct</th>
              <th scope="col">Account Created</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {useList.map((user) => {
              return (
                <tr key={user.createdAt}>
                  <td>
                    <FaUserCircle />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteShow(user._id)}
                      className="btn btn-danger"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {oneUser.map((user) => {
        return (
          <Modal show={showDelete} onHide={handleDeleteClose}>
            <Modal.Body>
              <h6 className="ms-2">
                Are you sure you want to delete {user.name} Account !!!
              </h6>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleDeleteClose}>
                Close
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(deleteUser(user._id));
                  handleDeleteClose(); 
                }}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        );
      })}

    </>
  );
};

export default UserDashInfo;
