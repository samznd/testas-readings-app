import ColapsibleCompoent from '@/components/colapsible';
import { FragItem } from '@/types/reading.types';

interface IFragParser {
  frags: FragItem[];
}

const FragsParser = ({ frags }: IFragParser) => {
  return frags.map(({ title, answers }, fdx) => {
    const newAnswers = answers
      .split('\n')
      .filter(Boolean);
    return (
      <ColapsibleCompoent key={title} trigger={`Frag ${fdx + 1}: ${title}`}>
        <ul>
          {newAnswers.map((answer) => {
            return <li>{answer}</li>;
          })}
        </ul>
      </ColapsibleCompoent>
    );
  });
};
export default FragsParser;
