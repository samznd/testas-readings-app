export interface ReadingItem {
  id: number;
  reading: string;
  answerBox: string;
  fragen: FragItem[];
}

export interface FragItem {
  frage: string;
}

export interface ReadingState {
  readings: ReadingItem[];
  createReading: (reading: ReadingItem) => void;
  updateReading: (reading: ReadingItem[]) => void;
  deleteReading: (id: number) => void;
}