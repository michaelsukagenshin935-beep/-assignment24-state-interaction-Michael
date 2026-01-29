import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

  const [items, setItems] = useState([]);
  const [itemInput, setItemInput] = useState("");

  const addItem = () => {
    if (itemInput.trim() === "") return;
    setItems([...items, itemInput]);
    setItemInput("");
  };

  const [parentText, setParentText] = useState("");

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", email: "" });
  };

  const pageStyle = {
    minHeight: "100vh",
    background: "#f3f4f6",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "900px",
  };

  const boxStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    backgroundColor: "#ffffff",
    color: "#111827",
  };

  const titleStyle = {
    marginBottom: "12px",
  };

  const listStyle = {
    paddingLeft: "20px",
    marginTop: "10px",
    lineHeight: "1.8",
  };

  const inputFullStyle = {
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    padding: "8px",
    marginTop: "8px",
  };

  const longTextStyle = {
    wordBreak: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "pre-wrap",
    maxWidth: "100%",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={{ marginBottom: "25px" }}>Assignment 3</h1>

        <section style={boxStyle}>
          <h2 style={titleStyle}>Task 1 — Counter</h2>
          <h3>{count}</h3>
          <button onClick={() => setCount(count + 1)}>Increase</button>{" "}
          <button onClick={() => setCount(count - 1)}>Decrease</button>{" "}
          <button onClick={() => setCount(0)}>Reset</button>
        </section>

        <section style={boxStyle}>
          <h2 style={titleStyle}>Task 2 — Toggle Message</h2>
          <button onClick={() => setShowMessage(!showMessage)}>
            {showMessage ? "Hide" : "Show"}
          </button>
          {showMessage && <p style={{ marginTop: "10px" }}>Hello React!</p>}
        </section>

        <section style={boxStyle}>
          <h2 style={titleStyle}>Task 3 — Login Status</h2>
          {isLoggedIn ? (
            <>
              <p>Welcome back!</p>
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          )}
        </section>

        <section style={boxStyle}>
          <h2 style={titleStyle}>Task 4 — Fruit List</h2>
          <p>Total Fruits: {fruits.length}</p>
          <ul style={listStyle}>
            {fruits.map((fruit, index) => (
              <li key={fruit + index}>{fruit}</li>
            ))}
          </ul>
        </section>

        <section style={boxStyle}>
          <h2 style={titleStyle}>Task 5 — Add Item to List</h2>
          <input
            type="text"
            value={itemInput}
            onChange={(e) => setItemInput(e.target.value)}
            placeholder="Enter item"
            style={inputFullStyle}
          />
          <button onClick={addItem} style={{ marginTop: "8px" }}>Add</button>
          <ul style={listStyle}>
            {items.map((item, index) => (
              <li key={item + index}>{item}</li>
            ))}
          </ul>
        </section>

        <section style={boxStyle}>
          <h2 style={titleStyle}>Task 6 — Lifting State Up</h2>
          <h3 style={longTextStyle}>Typed in Child: {parentText}</h3>
          <ChildInput value={parentText} onChange={setParentText} />
        </section>

        <section style={boxStyle}>
          <h2 style={titleStyle}>Task 7 — Simple Form</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputFullStyle}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputFullStyle}
              />
            </div>
            <button type="submit">Submit</button>
          </form>

          {submittedData && (
            <div
              style={{
                marginTop: "15px",
                borderTop: "1px dashed #aaa",
                paddingTop: "10px",
              }}
            >
              <h4>Submitted Data:</h4>
              <p>Name: {submittedData.name}</p>
              <p>Email: {submittedData.email}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function ChildInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type here..."
      style={{
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        padding: "8px",
        marginTop: "8px",
      }}
    />
  );
}
