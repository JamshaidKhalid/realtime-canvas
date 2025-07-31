import { Stage, Layer } from "react-konva";
import { useCanvasStore } from "../store/useCanvasStore";
import Rectangle from "./Rectangle";
import { useSocket } from "../hooks/useSocket";

const CanvasBoard = () => {
  const rectangles = useCanvasStore((s) => s.rectangles);
  const addRect = useCanvasStore((s) => s.addRect);
  const socket = useSocket();

  const handleAddRect = () => {
    const newRect = {
      id: crypto.randomUUID(),
      x: Math.random() * 400,
      y: Math.random() * 400,
    };
    addRect(newRect);
    socket.emit("rectangle:add", newRect);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <button
        className="mb-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
        onClick={handleAddRect}
      >
        ➕ Add Rectangle
      </button>
      <Stage width={800} height={600} className="bg-white shadow-lg rounded">
        <Layer>
          {rectangles.map((r) => (
            <Rectangle key={r.id} {...r} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default CanvasBoard;
