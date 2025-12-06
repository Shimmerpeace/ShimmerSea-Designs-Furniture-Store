import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("signin");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) {
      // Reset form when modal closes
      setFormData({ name: "", email: "", password: "" });
      setError("");
      setActiveTab("signin");
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API call (replace with real backend)
    setTimeout(() => {
      if (activeTab === "signup" && formData.password.length < 6) {
        setError("Password must be at least 6 characters");
      } else if (activeTab === "signin" &&
                 formData.email !== "test@example.com" ||
                 formData.password !== "password123") {
        setError("Invalid email or password");
      } else {
        localStorage.setItem('userToken', 'mock-jwt-token');
        onClose();
        navigate('/');
      }
      setLoading(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
       
        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === "signin" ? "active" : ""}`}
            onClick={() => setActiveTab("signin")}
          >
            Sign In
          </button>
          <button
            className={`tab-btn ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {activeTab === "signup" && (
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
         
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
         
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
         
          {error && <div className="error">{error}</div>}
         
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? (activeTab === "signin" ? "Signing In..." : "Creating Account...") :
             (activeTab === "signin" ? "Sign In" : "Sign Up")}
          </button>
        </form>
      </div>
    </div>
  );
}