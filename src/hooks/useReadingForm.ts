import { useState } from "react";
import useReadingStore from "@/lib/store";
import { FragItem, ReadingItem } from "@/types/reading.types";

const useReadingForm = () => {
  const { readings, createReading } = useReadingStore();
  const [newReading, setNewReading] = useState<ReadingItem>({
    id: readings.length + 1,
    reading: '',
    frags: [
      {
        title: '',
        answers: '',
      },
    ],
  });

  const addNewFrag = () => {
    setNewReading((prevState) => ({
      ...prevState,
      frags: [...prevState.frags, { title: '', answers: '' }],
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
    fragProp: keyof FragItem,
    value: string
  ) => {
    const newFrags = [...newReading.frags];
    newFrags[fragIndex][fragProp] = value;

    setNewReading((prevState) => ({ ...prevState, frags: newFrags }));
  };

  return {readings, createReading, newReading, setNewReading, handleChangeFrags, addNewFrag, deleteFrag };
};

export default useReadingForm;
