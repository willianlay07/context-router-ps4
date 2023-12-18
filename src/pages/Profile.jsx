import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useEffect } from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 150px;
  height: auto;
  padding: 10px 10px;
  outline: 0px;
  border-radius: 7px;
  border: 1px solid #000;
  cursor: pointer;
`;

const Profile = () => {
  const { isAuth, user, handleLogout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/log-in", {
        replace: true,
      });
    }
  }, [isAuth, navigate]);

  function logout() {
    handleLogout();
    navigate("/log-in", {
      replace: true,
    });
  }

  return isAuth ? (
    <div>
      <h1>Profile</h1>
      <p>FullName: {user.name}</p>
      <p>Email: {user.email}</p>
      <img src={user.avatar} alt="Profile" />
      <br />
      <br />
      <ButtonStyle onClick={logout}>Log Out</ButtonStyle>
    </div>
  ) : null;
};

export default Profile;
