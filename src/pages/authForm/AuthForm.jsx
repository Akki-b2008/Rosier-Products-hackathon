import { useForm } from "react-hook-form";
import { useState } from "react";
import "./AuthForm.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data", data);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: !isLogin })}
            />
          )}
          {errors.name && <p className="error">Name is required</p>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="error">Email is required</p>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <p className="error">Password is required</p>}

          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>

        <p className="toggle-auth">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
