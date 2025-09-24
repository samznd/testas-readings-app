import { ReadingItem } from '@/types/reading.types';
import { useNavigate } from 'react-router';
import Button from '@/shared/components/ui/button';

interface IReadingItem {
  reading: ReadingItem;
}

const ReadingItemComponent = ({ reading }: IReadingItem) => {
  const navigate = useNavigate()
  
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/readings/edit/${reading.id}`);
  };
  
  return (
    <div
      className='bg-[#FED16A] p-2 rounded-md w-full cursor-pointer'
      key={reading.id}
    >
      <div
        onClick={() => navigate(`/reading/${reading.id}`)}
        className='line-clamp-3'
        dangerouslySetInnerHTML={{ __html: reading.reading }}
      />
      <div className='mt-2 flex justify-end'>
        <Button
          variant='primary'
          className='!py-1 !px-4 text-sm'
          onClick={handleEditClick}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default ReadingItemComponent;
