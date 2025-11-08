import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDelete } from "./store/reducers/UserReducer";

const App = () => {
  const { users } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const DeleteHandler = (idx) => {
    dispatch(userDelete(idx));
  };

  return (
    <div className="m-auto container p-10 mt-5 bg-red-50">
      <h1 className="text-2xl font-bold text-red-900">User List</h1>
      <ul className="text-red-600">
        {users.map((user, idx) => {
          return (
            <li className="mb-2" key={user.id}>
              <h1 className="p-2 px-3 rounded-md flex justify-between bg-red-100">
                {user.name}{" "}
                <span
                  onClick={() => DeleteHandler(idx)}
                  className="text-red-600 font-bold cursor-pointer"
                >
                  X
                </span>
              </h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
