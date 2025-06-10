import { FragItem } from '@/types/reading.types';
import { Accordion } from '../accordion';

interface IFragParser {
  frags: FragItem[];
}

const extractQuestion = (frag: string): string => {
  const lines = frag.trim().split('\n');
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

    // Ignore empty lines and question lines (ending with '?')
    if (trimmed === '' || trimmed.endsWith('?')) continue;

    options.push(trimmed);
  }

  return options;
}



const FragsParser = ({ frags }: IFragParser) => {
  
  return (
    <Accordion
      items={frags.map(({ frag }, fdx) => ({
        id: String(fdx),
        title: extractQuestion(frag),
        content: (
          <>
            {extractOptions(frag)
              .map((option: string) => {
                return <p>{option}</p>;
              })}
          </>
        ),
      }))}
    />
  );
};
export default FragsParser;
