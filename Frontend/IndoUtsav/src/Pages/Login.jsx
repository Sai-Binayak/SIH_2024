
import React, { useState } from "react";
import Modal from "react-modal";
import "./LoginStyle.css";

Modal.setAppElement("#root");

export const Login = ({ isOpen, onRequestClose }) => {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isSignup = mode === "signup";

  const switchMode = (newMode) => {
    setMode(newMode);
    setError("");
    setSuccess("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // UI demonstration only. Connect your authentication backend here.
    setSuccess(
      isSignup
        ? "Your details are valid. Connect authentication to create your account."
        : "Your details are valid. Connect authentication to log in."
    );

    console.log("Form submitted:", {
      mode,
      name: isSignup ? name : undefined,
      email,
    });
  };

  const handleClose = () => {
    setError("");
    setSuccess("");
    onRequestClose?.();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel={isSignup ? "Sign Up" : "Log In"}
      className="iu-auth-modal"
      overlayClassName="iu-auth-overlay"
      bodyOpenClassName="iu-auth-body-open"
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
    >
      <div className="iu-auth-container">
        <button
          type="button"
          className="iu-auth-close"
          onClick={handleClose}
          aria-label="Close authentication dialog"
        >
          &times;
        </button>

        <div className="iu-auth-decoration" aria-hidden="true">
          <span className="iu-auth-orbit iu-auth-orbit-one" />
          <span className="iu-auth-orbit iu-auth-orbit-two" />
          <span className="iu-auth-star">✦</span>
        </div>

        <div className="iu-auth-brand">
          <span className="iu-auth-brand-mark">✦</span>
          <span>Indo<span className="iu-auth-gold">Utsav</span></span>
        </div>

        <div className="iu-auth-heading">
          <p className="iu-auth-eyebrow">
            {isSignup ? "JOIN OUR COMMUNITY" : "WELCOME BACK"}
          </p>

          <h2>
            {isSignup ? (
              <>Celebrate with <span>us.</span></>
            ) : (
              <>Your culture. <span>Your space.</span></>
            )}
          </h2>

          <p className="iu-auth-description">
            {isSignup
              ? "Create an account and discover the celebrations, traditions, and stories that bring us together."
              : "Sign in to reconnect with traditions, discover festivals, and celebrate India's cultural heritage."}
          </p>
        </div>

        <div className="iu-auth-tabs" role="tablist" aria-label="Authentication mode">
          <button
            type="button"
            role="tab"
            aria-selected={!isSignup}
            className={!isSignup ? "active" : ""}
            onClick={() => switchMode("login")}
          >
            Log In
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={isSignup}
            className={isSignup ? "active" : ""}
            onClick={() => switchMode("signup")}
          >
            Sign Up
          </button>
        </div>

        <form className="iu-auth-form" onSubmit={handleSubmit}>
          {isSignup && (
            <div className="iu-auth-field">
              <label htmlFor="iu-auth-name">Full name</label>
              <input
                id="iu-auth-name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                required
              />
            </div>
          )}

          <div className="iu-auth-field">
            <label htmlFor="iu-auth-email">Email address</label>
            <input
              id="iu-auth-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="iu-auth-field">
            <label htmlFor="iu-auth-password">Password</label>
            <input
              id="iu-auth-password"
              type="password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete={isSignup ? "new-password" : "current-password"}
              minLength={8}
              required
            />
          </div>

          {isSignup && (
            <div className="iu-auth-field">
              <label htmlFor="iu-auth-confirm-password">
                Confirm password
              </label>
              <input
                id="iu-auth-confirm-password"
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                autoComplete="new-password"
                minLength={8}
                required
              />
            </div>
          )}

          {error && (
            <p className="iu-auth-message error" role="alert">
              {error}
            </p>
          )}

          {success && (
            <p className="iu-auth-message success" role="status">
              {success}
            </p>
          )}

          <button type="submit" className="iu-auth-submit">
            {isSignup ? "Create Account" : "Log In"}
            <span aria-hidden="true">→</span>
          </button>
        </form>

        <p className="iu-auth-switch">
          {isSignup ? "Already have an account?" : "New to IndoUtsav?"}
          <button
            type="button"
            onClick={() => switchMode(isSignup ? "login" : "signup")}
          >
            {isSignup ? "Log In" : "Create an account"}
          </button>
        </p>

        <p className="iu-auth-footer">
          Bringing India's traditions closer, one celebration at a time.
        </p>
      </div>
    </Modal>
  );
};
