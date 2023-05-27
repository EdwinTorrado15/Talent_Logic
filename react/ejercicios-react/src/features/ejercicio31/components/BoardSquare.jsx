import { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { handleMove } from "../utils/Game";
import { gameSubject } from "../utils/Game";
import { Square, Piece, Promote } from "@/features/ejercicio31/components";

const BoardSquare = ({ piece, black, position }) => {
  const [promotion, setPromotion] = useState(null);
  const [, drop] = useDrop({
    accept: "piece",
    drop: (item) => {
      const [fromPosition] = item.id.split("_");
      handleMove(fromPosition, position);
    },
  });
  useEffect(() => {
    const subscribe = gameSubject.subscribe(({ pendingPromotion }) =>
      pendingPromotion && pendingPromotion.to === position
        ? setPromotion(pendingPromotion)
        : setPromotion(null)
    );
    return () => subscribe.unsubscribe();
  }, [position]);
  return (
    <div className="w-full h-full" ref={drop}>
      <Square black={black}>
        {promotion ? (
          <Promote promotion={promotion} />
        ) : piece ? (
          <Piece piece={piece} position={position} />
        ) : null}
      </Square>
    </div>
  );
};

export default BoardSquare;
