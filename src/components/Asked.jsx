import React from "react";
import { Desplegar } from "./Desplegar";

export const Asked = () => {
  return (
    <div>
      <h2 style={{ fontWeight: "500" }}>Frequently Asked Questions</h2>
      <p style={{ color: "hsl(229, 8%, 60%)", width: "35%", margin: "0 auto" }}>
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us
      </p>
      <div style={{ marginTop: "50px" }}>
        <Desplegar
          title="What is Bookmark?"
          content="Este es el contenido desplegado para la primera pregunta."
        />
        <Desplegar
          title="How can i rquest a new browser?"
          content="Este es el contenido desplegado para la primera pregunta."
        />
        <Desplegar
          title="Is there a mobile app?"
          content="Este es el contenido desplegado para la primera pregunta."
        />
        <Desplegar
          title="What about other Chromium browsers?"
          content="Este es el contenido desplegado para la primera pregunta."
        />
      </div>
    </div>
  );
};
