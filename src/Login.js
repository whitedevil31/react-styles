import React, { useEffect } from "react";
const Login = (props) => {
  const {
    setEmail,
    email,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    clearInput,
    googleSubmit,
  } = props;
  const methodChange = () => {
    setHasAccount(!hasAccount);
    clearInput();
  };
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <button className="googleSignIn" onClick={googleSubmit}>
          SIGN IN WITH GOOGLE
        </button>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign in </button>
              <p>
                Do not have a accout ?
                <span onClick={methodChange}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Sign up</button>
              <p>
                Have a account ?<span onClick={methodChange}>Sign in </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
