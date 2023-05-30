import { useState, useEffect, useContext } from "react";

import { DataContext } from "../context/DataProvider";

import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  height: 41vh;
`;

const Result = () => {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(DataContext);

  useEffect(() => {
    const srcCode = `
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
            </html>
        `;
    setSrc(srcCode);
  }, [html, css, js]);

  return (
    <Container style={html || css || js ? null : { background: "#444857" }}>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
