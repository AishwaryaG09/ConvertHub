import { useState } from "react";
import vkbeautify from "vkbeautify";
import { StyleButton, StyleDiv } from "./FindAge";
const XMLFormatter = () => {
  const [inputXML, setInputXML] = useState("");
  const [formattedXML, setFormattedXML] = useState("");

  const handleFormat = () => {
    try {
      const prettyXML = vkbeautify.xml(inputXML);
      setFormattedXML(prettyXML);
    } catch (error) {
      setFormattedXML("Invalid XML");
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
              setInputXML("");
              setFormattedXML("");
            }}
          >
            Reset
          </StyleButton>
          <StyleButton onClick={handleFormat} style={{ marginTop: "10px" }}>
            Format XML
          </StyleButton>
        </StyleDiv>
      </div>
      <h2>XML Formatter</h2>
      <div className="row">
        <div className="col-sm" style={{ paddingLeft: "0" }}>
          <textarea
            rows="15"
            style={{ width: "100%" }}
            placeholder="Paste your XML here..."
            value={inputXML}
            onChange={(e) => setInputXML(e.target.value)}
          />
        </div>
        <br />
        <div className="col-sm" style={{ paddingLeft: "0" }}>
          <h3>Formatted Output:</h3>
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
            {formattedXML}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default XMLFormatter;
