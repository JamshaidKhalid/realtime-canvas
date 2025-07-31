import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { SERVER_URL } from "../config/constants";
import { useCanvasStore } from "../store/useCanvasStore";

const socket: Socket = io(SERVER_URL);

export const useSocket = () => {
  const addRect = useCanvasStore((s) => s.addRect);
  const updateRect = useCanvasStore((s) => s.updateRect);

  useEffect(() => {
    socket.on("rectangle:add", (data) => addRect(data));
    socket.on("rectangle:move", (data) => updateRect(data.id, data.x, data.y));

    return () => {
      socket.off("rectangle:add");
      socket.off("rectangle:move");
    };
  }, [addRect, updateRect]);

  return socket;
};
