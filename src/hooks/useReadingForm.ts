import { useState } from "react";
import useReadingStore from "@/lib/store";
import { ReadingItem } from "@/types/reading.types";

const useReadingForm = () => {
  const { readings, createReading } = useReadingStore();
  const [newReading, setNewReading] = useState<ReadingItem>({
    id: readings.length + 1,
    reading: '',
    frags: [
      {
        frag: ''
      },
    ],
  });

  const addNewFrag = () => {
    setNewReading((prevState) => ({
      ...prevState,
      frags: [...prevState.frags, { frag: '' }],
    }));
  };

  const deleteFrag = (index: number) => {
    setNewReading((prevState) => ({
      ...prevState,
      frags: prevState.frags.filter((_, fdx) => fdx !== index),
    }));
  };

  const handleChangeFrags = (
    fragIndex: number,
    value: string
  ) => {
    const newFrags = [...newReading.frags];
    newFrags[fragIndex].frag = value;

    setNewReading((prevState) => ({ ...prevState, frags: newFrags }));
  };

  return {readings, createReading, newReading, setNewReading, handleChangeFrags, addNewFrag, deleteFrag };
};

export default useReadingForm;
