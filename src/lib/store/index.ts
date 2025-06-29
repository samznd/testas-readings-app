import { ReadingState } from '@/types/reading.types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

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
