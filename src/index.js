import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Header, UserPosts, UserTodos} from "./components";
import { getUsers, getPostsByUser, getTodosByUser } from "./api";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [UserTodos, setUserTodos] = useState([]);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUserList(users);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  useEffect(() => {
    if (!currentUser) {
      setUserPosts([]);
      setUserTodos([]);
      return;
    }

    getPostsByUser(currentUser.id).then((posts) => {
      setUserPosts(posts);
    });
  }, [currentUser]);

    getTodosByUser(currentUser.id)
      .then(todos => {
        setUserTodos(todos);
      })
      .catch(error => {
        throw error
      }, [currentUser]);

  return (
    <div id="App">
      <Header
        userList={userList}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser} />
      {
      currentUser 
      ? <>
        <UserPosts 
          userPosts={userPosts} 
          currentUser={currentUser} />
        <UserTodos
          userTodos={userTodos}
          currentUser={currentUser} />
        </>
      : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
