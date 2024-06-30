import React from "react";
import { LoginForm } from "../components/auth/login-form";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
