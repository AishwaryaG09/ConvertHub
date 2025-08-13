import { useState } from "react";
import { StyleButton, StyleDiv } from "./FindAge";
const JsonFormatter = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setJsonInput(inputValue);

    try {
      // Attempt to parse the JSON
      const parsed = JSON.parse(inputValue);
      // Stringify with 2-space indentation for pretty printing
      setFormattedJson(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      // If parsing fails, display the error and keep the original input
      setError("Invalid JSON: " + e.message);
      setFormattedJson(inputValue); // Keep the unformatted input in case of error
    }
  };

  return (
    <div
      className="container"
      style={{ alignContent: "flex-start", margin: "24px 0 0 24px" }}
    >
      <div style={{ display: "flex" }}>
        <h4 style={{ padding: "12px", width: "40%" }}>JSON Formatter</h4>
        <StyleDiv style={{ textAlignLast: "right" }}>
          <StyleButton
            onClick={() => {
              setJsonInput("");
              setFormattedJson("");
            }}
          >
            Reset
          </StyleButton>
        </StyleDiv>
      </div>

      <div className="row">
        <div className="col-sm" style={{ paddingLeft: "0" }}>
          <textarea
            value={jsonInput}
            onChange={handleInputChange}
            placeholder="Paste your JSON here..."
            rows="15"
            cols="80"
            style={{ width: "100%", fontFamily: "monospace" }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className="col-sm" style={{ paddingLeft: "0" }}>
          <h4>Formatted JSON (or original input if invalid)</h4>
          <pre
            style={{
              padding: "10px",
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              border: "1px Solid",
              overflow: "scroll",
              height: "330px",
            }}
          >
            {formattedJson}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default JsonFormatter;
