import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "./AuthForm.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
 const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({ shouldUnregister: true });

  const onSubmit = (data) => {
    console.log("Form Data", data);
  };

  useEffect(() => {
  console.log("Mounted User component");

  return () => {
    console.log("Unmounting User component");
  };
}, []);

  return (
    <div className="auth-page">
      <div className="auth-left">
        <img
          src="https://ik.imagekit.io/sl8w2ayuc/Og/User%20research-bro.webp?updatedAt=1753296819189"
          alt="Study Illustration"
        />
      </div>

      <div className="auth-right">
        <div className="form-box">
          <h1 className="brand">
            <span>ROSIER</span> <span className="green">FOODS</span>
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="form">
            {!isLogin && (
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: true })}
              />
            )}
            {errors.username && <p className="error">Username is required</p>}

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

            {/* Use NavLink here later */}
            <div className="extra-options">
              <span className="nav-placeholder">Forgot password?</span>
            </div>

            <button type="submit" className="btn scale-hover">
              {isLogin ? "Sign in" : "Register"}
            </button>

            <div className="or-divider">or</div>

            <button type="button" className="google-button scale-hover">
              <img
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt="Google"
              />
              Sign in with Google
            </button>

            <p className="switch-auth">
              {isLogin ? "Are you new ? " : "Already have an account ? "}{" "}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="link-toggle"
              >
                {isLogin ? "Create an Account" : "Login"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
