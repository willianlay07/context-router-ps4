import { createContext, useContext, useReducer } from "react";

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState = {
  isAuth: false,
  user: null,
};

const AuthContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };

    case "logout":
      return {
        ...state,
        isAuth: false,
        user: null,
      };

    default:
      throw new Error("Invalid");
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isAuth, user } = state;

  function handleLogin(email, password) {
    if (FAKE_USER.email === email && FAKE_USER.password === password) {
      dispatch({
        type: "login",
        payload: FAKE_USER,
      });
    }
  }

  function handleLogout() {
    dispatch({
      type: "logout",
    });
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw Error("AuthContext is outside of AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
