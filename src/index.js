import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {Header} from './components';
import {getUsers} from './api';

const App = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers()
      .then(users => {
        setUserList(users)
      })
      .catch(error => {
       throw error
      })
  }, [])

    return (
      <div id="App">
        <Header userList={userList} />
      </div> 
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

