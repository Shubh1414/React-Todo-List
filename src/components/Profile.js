import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import TodoMain from './TodoMain';
import { Provider } from "react-redux";
import store from "../redux/store";


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <p style={{ color: 'white', }}>Singned In As : {user.name}</p>
        <Provider store={store}>
          <TodoMain />
        </Provider>
      </div>
    )
  )
}

export default Profile
