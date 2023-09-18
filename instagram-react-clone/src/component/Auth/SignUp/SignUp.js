import './SignUp.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  const navigater = useNavigate();

  const [userInput, setUserInput] = useState({
    email: '',
    name: '',
    nickname: '',
    password: ''
  })

  const changeEmail = (event) => {
    setUserInput({
      ...userInput,
      email: event.target.value
    })
  }
  const changeName = (event) => {
    setUserInput({
      ...userInput,
      name: event.target.value
    })
  }
  const changeNickName = (event) => {
    setUserInput({
      ...userInput,
      nickname: event.target.value
    })
  }
  const changePassword = (event) => {
    setUserInput({
      ...userInput,
      password: event.target.value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const data = ({
      ...userInput,
      id: Math.random().toString()
    })
    props.onSaveUserData(data);
    navigater('/');
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input onChange={changeEmail} value={userInput.email} />
        <input onChange={changeName} value={userInput.name} />
        <input onChange={changeNickName} value={userInput.nickname} />
        <input onChange={changePassword} value={userInput.password} />
        <button>확인</button>
      </form>
    </>
  );
}

export default SignUp;