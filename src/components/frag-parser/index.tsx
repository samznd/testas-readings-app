import { FragItem } from '@/types/reading.types';
import { Accordion } from '../accordion';

interface IFragParser {
  frags: FragItem[];
}

const answersContent = (text: string): string[] => {
  const matches = [...text.matchAll(/(?:^|\n)([IVXLCDM]+)\.\s+(.*?)(?=(\n[IVXLCDM]+\.)|\n*$)/gs)];
  return matches.map(m => m[2].trim());
}

const FragsParser = ({ frags }: IFragParser) => {
  return (
      <Accordion
        items={frags.map(({ frag }, fdx) => ({
          id: String(fdx),
          title: frag,
          content: (
            <ul>
              {answersContent(frag).map((answer: string) => {
                return <li>{answer}</li>;
              })}
            </ul>
          ),
        }))}
      />
  );
};
export default FragsParser;
