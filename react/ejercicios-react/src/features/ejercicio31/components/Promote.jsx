import { Square } from "@/features/ejercicio31/components";
import { move } from "../utils/Game";

const promotionPieces = ["r", "n", "b", "q"];

const Promote = ({ promotion: { from, to, color } }) => {
  return (
    <div className="w-full h-full flex flex-wrap">
      {promotionPieces.map((p, i) => (
        <div key={i} className="w-1/2 h-1/2">
          <Square black={i % 3 === 0}>
            <div
              className="cursor-grab w-full h-full flex items-center justify-center"
              onClick={() => move(from, to, p)}
            >
              <img
                src={require(`./assets/${p}_${color}.png`)}
                alt=""
                className="max-w-[70%] max-h-[70%] cursor-pointer"
              />
            </div>
          </Square>
        </div>
      ))}
    </div>
  );
};

export default Promote;
