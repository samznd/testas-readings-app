import FragsParser from '@/components/frag-parser';
import useReadingStore from '@/lib/store';
import Button from '@/shared/components/ui/button';
import LinkComponent from '@/shared/components/ui/link';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';

const ReadingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { readings, deleteReading } = useReadingStore();

  const readingInfo = useMemo(() => {
    if (!id) return null;
    return readings.find((reading) => reading.id === Number(id));
  }, []);

  const handleDeleteReading = () => {
    if (!readingInfo) return;
    deleteReading(readingInfo?.id);
    navigate(`/`);
  };

  return (
    <div className='p-3 relative h-screen flex flex-col'>
      <div className='ml-1 mb-4 sticky top-0 left-0 w-full p-3 h-[30px] bg-[rgba(252, 239, 145, 0.703)]'>
        <LinkComponent to='/'>Back</LinkComponent>
        <Button variant='danger' className='ml-3' onClick={handleDeleteReading}>
          Delete
        </Button>
      </div>
      <div className='w-full flex-1 p-2 flex justify-between mt-4 overflow-hidden'>
        {readingInfo ? (
          <div className='w-full grid grid-cols-2 h-full' id='main-body'>
            <div
              className='overflow-y-auto overflow-x-hidden h-full flex-[1 1 50%] bg-white p-2 border-r border-r-black'
              dangerouslySetInnerHTML={{ __html: readingInfo.reading }}
            />
            <div className='overflow-y-auto overflow-x-hidden h-full flex-[1 1 50%] bg-white p-2'>
              <FragsParser frags={readingInfo.frags} />
            </div>
          </div>
        ) : (
          <span className='text-red-500 font-semibold'>No Reading Found!</span>
        )}
      </div>
    </div>
  );
};

export default ReadingPage;
