import { useState } from "react";
import useReadingStore from "@/lib/store";
import { ReadingItem } from "@/types/reading.types";

const useReadingForm = () => {
  const { readings, createReading } = useReadingStore();
  const [newReading, setNewReading] = useState<ReadingItem>({
    id: readings.length + 1,
    reading: '',
    answerBox: '',
    fragen: [
      {
        frage: ''
      },
    ],
  });

  const addNewFrag = () => {
    setNewReading((prevState) => ({
      ...prevState,
      fragen: [...prevState.fragen, { frage: '' }],
    }));
  };

  const deleteFrag = (index: number) => {
    setNewReading((prevState) => ({
      ...prevState,
      fragen: prevState.fragen.filter((_, fdx) => fdx !== index),
    }));
  };

  const handleChangefragen = (
    fragIndex: number,
    value: string
  ) => {
    const newfragen = [...newReading.fragen];
    newfragen[fragIndex].frage = value;

    setNewReading((prevState) => ({ ...prevState, fragen: newfragen }));
  };

  return {readings, createReading, newReading, setNewReading, handleChangefragen, addNewFrag, deleteFrag };
};

export default useReadingForm;
