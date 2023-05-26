import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { GrRotateLeft, GrRotateRight } from "react-icons/gr";
import { CgMergeVertical, CgMergeHorizontal } from "react-icons/cg";
import { IoMdUndo, IoMdRedo, IoIosImage } from "react-icons/io";
import storeData from "../utils/LinkedList";

const Main = () => {
  const filterElement = [
    {
      name: "Brillo",
      maxValue: 200,
    },
    {
      name: "Escala gris",
      maxValue: 200,
    },
    {
      name: "sepia",
      maxValue: 200,
    },
    {
      name: "Saturacion",
      maxValue: 200,
    },
    {
      name: "Contraste",
      maxValue: 200,
    },
    {
      name: "hueRotate",
    },
  ];

  const [property, setProperty] = useState({
    name: "brightness",
    maxValue: 200,
  });
  const [details, setDetails] = useState("");
  const [crop, setCrop] = useState("");
  const [state, setState] = useState({
    image: "",
    brightness: 100,
    grayscale: 0,
    sepia: 0,
    saturate: 100,
    contrast: 100,
    hueRotate: 0,
    rotate: 0,
    vartical: 1,
    horizental: 1,
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const leftRotate = () => {
    setState({
      ...state,
      rotate: state.rotate - 90,
    });

    const stateData = state;
    stateData.rotate = state.rotate - 90;
    storeData.insert(stateData);
  };

  const rightRotate = () => {
    setState({
      ...state,
      rotate: state.rotate + 90,
    });
    const stateData = state;
    stateData.rotate = state.rotate + 90;
    storeData.insert(stateData);
  };
  const varticalFlip = () => {
    setState({
      ...state,
      vartical: state.vartical === 1 ? -1 : 1,
    });
    const stateData = state;
    stateData.vartical = state.vartical === 1 ? -1 : 1;
    storeData.insert(stateData);
  };

  const horizentalFlip = () => {
    setState({
      ...state,
      horizental: state.horizental === 1 ? -1 : 1,
    });
    const stateData = state;
    stateData.horizental = state.horizental === 1 ? -1 : 1;
    storeData.insert(stateData);
  };

  const redo = () => {
    const data = storeData.redoEdit();
    if (data) {
      setState(data);
    }
  };
  const undo = () => {
    const data = storeData.undoEdit();
    if (data) {
      setState(data);
    }
  };
  const imageHandle = (e) => {
    if (e.target.files.length !== 0) {
      const reader = new FileReader();

      reader.onload = () => {
        setState({
          ...state,
          image: reader.result,
        });

        const stateData = {
          image: reader.result,
          brightness: 100,
          grayscale: 0,
          sepia: 0,
          saturate: 100,
          contrast: 100,
          hueRotate: 0,
          rotate: 0,
          vartical: 1,
          horizental: 1,
        };
        storeData.insert(stateData);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const imageCrop = () => {
    const canvas = document.createElement("canvas");
    const scaleX = details.naturalWidth / details.width;
    const scaleY = details.naturalHeight / details.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      details,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Url = canvas.toDataURL("image/jpg");

    setState({
      ...state,
      image: base64Url,
    });
  };

  const saveImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = details.naturalHeight;
    canvas.height = details.naturalHeight;
    const ctx = canvas.getContext("2d");

    ctx.filter = `brightness(${state.brightness}%) brightness(${state.brightness}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) grayscale(${state.grayscale}%) hue-rotate(${state.hueRotate}deg)`;

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((state.rotate * Math.PI) / 180);
    ctx.scale(state.vartical, state.horizental);

    ctx.drawImage(
      details,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );

    const link = document.createElement("a");
    link.download = "image_edit.jpg";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#e1e6ef]">
      <div className="p-7 w-[700px] h-4/5 bg-white shadow-md">
        <div className="text-center pb-4">
          <h2 className="uppercase text-red-600 text-xl font-semibold">
            Editor de imagenes
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="sidebar">
            <div className="w-64 border border-[#c3c5c4] mr-2 h-80 p-3">
              <div className="filter_section">
                <span className="text-sm text-[#404040] mb-1 block">
                  Filtros
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {filterElement.map((v, i) => (
                    <button
                      className={
                        property.name === v.name
                          ? "text-white bg-blue-600"
                          : "p-2 border border-[#dad7d7] cursor-pointer text-[#404040] capitalize"
                      }
                      onClick={() => setProperty(v)}
                      key={i}
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="m-[15px 0px]">
                <div className="mb-1 flex justify-between">
                  <label
                    className="text-[#404040] text-sm capitalize"
                    htmlFor="range"
                  >
                    Rotar
                  </label>
                  <span className="text-[#404040] text-sm capitalize">
                    100%
                  </span>
                </div>
                <input
                  className="w-full"
                  name={property.name}
                  onChange={inputHandle}
                  value={state[property.name]}
                  max={property.maxValue}
                  type="range"
                />
              </div>
              <div className="rotate">
                <label className="mb-2 block text-sm text-[#404040]" htmlFor="">
                  Rotar & voltear
                </label>
                <div className="grid grid-cols-4 gap-1">
                  <div
                    className="border border-[rgb(179, 194, 194)] p-[8px 5px] flex justify-center items-center cursor-pointer"
                    onClick={leftRotate}
                  >
                    <GrRotateLeft />
                  </div>
                  <div
                    className="border border-[rgb(179, 194, 194)] p-[8px 5px] flex justify-center items-center cursor-pointer"
                    onClick={rightRotate}
                  >
                    <GrRotateRight />
                  </div>
                  <div
                    className="border border-[rgb(179, 194, 194)] p-[8px 5px] flex justify-center items-center cursor-pointer"
                    onClick={varticalFlip}
                  >
                    <CgMergeVertical />
                  </div>
                  <div
                    className="border border-[rgb(179, 194, 194)] p-[8px 5px] flex justify-center items-center cursor-pointer"
                    onClick={horizentalFlip}
                  >
                    <CgMergeHorizontal />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <button
                onClick={saveImage}
                className="bg-green-600 ml-1 p-2 rounded outline-none border border-[#dad7d7] cursor-pointer text-white font-semibold capitalize text-sm"
              >
                Guardar imagen
              </button>
            </div>
          </div>
          <div className="ml-2 w-[350px] bg-[#f0f0f0] h-80">
            <div className="w-full h-full flex justify-center items-center overflow-hidden">
              {state.image ? (
                <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
                  <img
                    className="object-scale-down w-full h-100 transition-all duration-500"
                    onLoad={(e) => setDetails(e.currentTarget)}
                    style={{
                      filter: `brightness(${state.brightness}%) brightness(${state.brightness}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) grayscale(${state.grayscale}%) hue-rotate(${state.hueRotate}deg)`,
                      transform: `rotate(${state.rotate}deg) scale(${state.vartical},${state.horizental})`,
                    }}
                    src={state.image}
                    alt=""
                  />
                </ReactCrop>
              ) : (
                <label
                  className="w-full h-full flex border-dotted border-[#c5c9c5] cursor-pointer justify-center items-center flex-col"
                  htmlFor="choose"
                >
                  <IoIosImage className="text-sm text-[#b4acac]" />
                  <span className="text-[#404040]">Elegir imagen</span>
                </label>
              )}
            </div>
            <div className="m-[20px 0px] flex justify-end">
              <button
                onClick={undo}
                className="p-2 rounded-md outline-none border border-[#dad7d7] cursor-pointer font-semibold capitalize text-sm bg-blue-600 ml-1 text-white p-[5px 0px] text-lg"
              >
                <IoMdUndo />
              </button>
              <button
                onClick={redo}
                className="p-2 rounded-md outline-none border border-[#dad7d7] cursor-pointer font-semibold capitalize text-sm bg-blue-600 ml-1 text-white p-[5px 0px] text-lg"
              >
                <IoMdRedo />
              </button>
              {crop && (
                <button
                  onClick={imageCrop}
                  className="p-2 rounded-md outline-none border border-[#dad7d7] cursor-pointer font-semibold capitalize text-sm bg-green-600 ml-1 text-white p-[5px 0px] text-lg"
                >
                  Acortar imagen
                </button>
              )}
              <label
                className="p-2 rounded-md outline-none border border-[#dad7d7] cursor-pointer font-semibold capitalize text-sm text-white bg-yellow-600 ml-1"
                htmlFor="choose"
              >
                Elegir imagen
              </label>
              <input
                className="hidden"
                onChange={imageHandle}
                type="file"
                id="choose"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
