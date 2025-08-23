import { FragItem } from '@/types/reading.types';
import { Accordion } from '../accordion';

interface IFragParser {
  fragen: FragItem[];
}

const extractQuestion = (frage: string): string => {
  const lines = frage.trim().split('\n');
  for (const line of lines) {
    if (line.trim().endsWith('?')) {
      return line.trim();
    }
  }
  return ''; // if no line ends with '?'
};

const extractOptions = (text: string): string[] => {
  const lines = text.trim().split('\n');
  const options: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === '' || trimmed.endsWith('?')) continue;

    options.push(trimmed);
  }

  return options;
}



const fragenParser = ({ fragen }: IFragParser) => {
  
  return (
    <Accordion
      items={fragen.map(({ frage }, fdx) => ({
        id: String(fdx),
        title: extractQuestion(frage),
        content: (
          <>
            {extractOptions(frage)
              .map((option: string) => {
                return <p>{option}</p>;
              })}
          </>
        ),
      }))}
    />
  );
};
export default fragenParser;
