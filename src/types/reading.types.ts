export interface ReadingItem {
  id: number;
  reading: string;
  frags: FragItem[];
}

export interface FragItem {
  frag: string;
}

export interface ReadingState {
  readings: ReadingItem[];
  createReading: (reading: ReadingItem) => void;
  updateReading: (reading: ReadingItem[]) => void;
  deleteReading: (id: number) => void;
}