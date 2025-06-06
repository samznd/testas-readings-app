import { ReadingItem } from '@/lib/store';
import { useNavigate } from 'react-router';

interface IReadingItem {
  reading: ReadingItem;
}

const ReadingItemComponent = ({ reading }: IReadingItem) => {
  const navigate = useNavigate()
  return (
    <div
      className='bg-[#FED16A] p-2 rounded-md w-full cursor-pointer '
      key={reading.id}
    >
      <div
        onClick={() => navigate(`/reading/${reading.id}`)}
        className='line-clamp-3'
        dangerouslySetInnerHTML={{ __html: reading.reading }}
      />
    </div>
  );
};

export default ReadingItemComponent;
