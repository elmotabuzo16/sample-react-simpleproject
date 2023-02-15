import React, { useState } from 'react';
import Wrapper from './components/UI/Helpers/Wrapper';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


const App = () => {
  const[usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge}];
    });
  };

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Wrapper>
  );
}

export default App;
