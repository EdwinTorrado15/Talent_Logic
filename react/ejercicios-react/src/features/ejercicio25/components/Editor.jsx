import { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const Editor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    height: 500,
    uploader: {
      insertImageAsBase64URI: true, // Inserta la imagen como base64 en el contenido
    },
  };

  const handleSave = () => {
    localStorage.setItem("document", content);
  };

  const loadDoc = () => {
    setContent(localStorage.getItem("document"));
  };

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)}
      />
      <div className="flex w-full my-2 gap-5">
        <button
          className="border-2 border-gray-700 p-1 rounded-md font-weight cursor-pointer"
          onClick={handleSave}
        >
          Guardar Documento
        </button>
        <button
          className="border-2 border-gray-700 p-1 rounded-md font-weight cursor-pointer"
          onClick={loadDoc}
        >
          Cargar Documento
        </button>
        <button
          className="border-2 border-gray-700 p-1 rounded-md font-weight cursor-pointer"
          onClick={() => setContent("")}
        >
          Nuevo
        </button>
      </div>
    </>
  );
};

export default Editor;
