import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface ReadingItem {
  id: number;
  reading: string;
  frags: string;
}

interface ReadingState {
  readings: ReadingItem[];
  createReading: (reading: ReadingItem) => void;
  updateReading: (reading: ReadingItem[]) => void;
  deleteReading: (id: number) => void;
}

const useReadingStore = create<ReadingState>()(
  devtools(
    persist(
      (set) => ({
        readings: [],
        createReading: (newReadings) =>
          set((state) => ({ readings: [...state.readings, newReadings] })),
        updateReading: (newReadings) => set(() => ({ readings: newReadings })),
        deleteReading: (readingId: number) =>
          set((state) => ({
            readings: state.readings.filter(
              (reading) => reading.id !== readingId
            ),
          })),
      }),
      {
        name: 'readings-storage',
      }
    )
  )
);

export default useReadingStore;
