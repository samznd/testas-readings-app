import { useState, useEffect } from "react";
import useReadingStore from "@/lib/store";
import { ReadingItem } from "@/types/reading.types";

const useEditReadingForm = (readingId: number) => {
  const { readings, updateReading } = useReadingStore();
  const [reading, setReading] = useState<ReadingItem | null>(null);

  useEffect(() => {
    const foundReading = readings.find(r => r.id === readingId);
    if (foundReading) {
      setReading(foundReading);
    }
  }, [readingId, readings]);

  const addNewFrag = () => {
    if (reading) {
      setReading((prevState) => ({
        ...prevState!,
        fragen: [...prevState!.fragen, { frage: '' }],
      }));
    }
  };

  const deleteFrag = (index: number) => {
    if (reading) {
      setReading((prevState) => ({
        ...prevState!,
        fragen: prevState!.fragen.filter((_, fdx) => fdx !== index),
      }));
    }
  };

  const handleChangefragen = (
    fragIndex: number,
    value: string
  ) => {
    if (reading) {
      const newfragen = [...reading.fragen];
      newfragen[fragIndex].frage = value;

      setReading((prevState) => ({ ...prevState!, fragen: newfragen }));
    }
  };

  const updateReadingItem = (updatedReading: ReadingItem) => {
    const updatedReadings = readings.map(r => 
      r.id === readingId ? updatedReading : r
    );
    updateReading(updatedReadings);
  };

  return {
    reading,
    setReading,
    handleChangefragen,
    updateReading: updateReadingItem,
    addNewFrag,
    deleteFrag,
  };
};

export default useEditReadingForm;

