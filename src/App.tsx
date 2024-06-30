import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useAuth } from "./redux/features/auth/authSlice";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import TaskPage from "./pages/TaskPage";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {isAuthenticated && <Navbar />}
      <div className="pt-9">
        <Router>
          <Routes>
            <Route
              path="/login"
              element={
                !isAuthenticated ? <LoginPage /> : <Navigate to="/tasks" />
              }
            />
            <Route
              path="/tasks"
              element={
                isAuthenticated ? <TaskPage /> : <Navigate to="/login" />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
