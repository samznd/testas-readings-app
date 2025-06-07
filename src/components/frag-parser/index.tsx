import { FragItem } from '@/types/reading.types';
import { Accordion } from '../accordion';

interface IFragParser {
  frags: FragItem[];
}

const answersContent = (answers: string) => answers.split('\n').filter(Boolean);

const FragsParser = ({ frags }: IFragParser) => {
  return (
      <Accordion
        items={frags.map(({ title, answers }, fdx) => ({
          id: String(fdx),
          title,
          content: (
            <ul>
              {answersContent(answers).map((answer: string) => {
                return <li>{answer}</li>;
              })}
            </ul>
          ),
        }))}
      />
  );
};
export default FragsParser;
