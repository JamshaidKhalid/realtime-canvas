import { create } from "zustand";

export interface Rect {
  id: string;
  x: number;
  y: number;
}

interface CanvasState {
  rectangles: Rect[];
  addRect: (rect: Rect) => void;
  updateRect: (id: string, x: number, y: number) => void;
}

export const useCanvasStore = create<CanvasState>((set) => ({
  rectangles: [],
  addRect: (rect) =>
    set((state) => ({ rectangles: [...state.rectangles, rect] })),
  updateRect: (id, x, y) =>
    set((state) => ({
      rectangles: state.rectangles.map((r) =>
        r.id === id ? { ...r, x, y } : r
      ),
    })),
}));
