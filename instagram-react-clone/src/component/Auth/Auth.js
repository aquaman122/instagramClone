import './Auth.css';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigater = useNavigate();

  const saveUserData = (props) => {
    console.log(props.id);
  }

  return (
    <>
      <button onClick={() => {}} items={1}>Login</button>
      <button onSaveUserData={saveUserData}>SignUp</button>
    </>
  );
}

export default Auth;