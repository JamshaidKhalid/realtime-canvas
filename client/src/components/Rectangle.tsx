import { Rect } from "react-konva";
import { useCanvasStore } from "../store/useCanvasStore";
import { useSocket } from "../hooks/useSocket";

interface Props {
  id: string;
  x: number;
  y: number;
}

const Rectangle = ({ id, x, y }: Props) => {
  const updateRect = useCanvasStore((s) => s.updateRect);
  const socket = useSocket();

  const handleDragMove = (e: any) => {
    const newX = e.target.x();
    const newY = e.target.y();
    updateRect(id, newX, newY);
    socket.emit("rectangle:move", { id, x: newX, y: newY });
  };

  return (
    <Rect
      x={x}
      y={y}
      width={100}
      height={60}
      fill="#facc15" // golden
      stroke="black"
      draggable
      onDragMove={handleDragMove}
      cornerRadius={8}
      shadowBlur={6}
    />
  );
};

export default Rectangle;
