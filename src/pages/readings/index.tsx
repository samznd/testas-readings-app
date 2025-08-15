import useReadingStore from '@/lib/store';
import LinkComponent from '@/shared/components/ui/link';
import ReadingItemComponent from './reading-item';

const ReadingsPage = () => {
  const { readings } = useReadingStore();
  return (
    <div className='min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 sm:items-start'>
        <h1 className='text-3xl font-bold'>Testas Readings</h1>
        <LinkComponent to='/readings/create'>Create Reading</LinkComponent>
        <div className='w-full'>
          {readings.length > 0 ? (
            <div className='grid grid-cols-1 gap-4 w-full p-2'>
              {readings.map((reading) => {
                return (
                  <ReadingItemComponent reading={reading} key={reading.id} />
                );
              })}
            </div>
          ) : (
            <span className='text-red-500 font-semibold'>
              No Reading Found!
            </span>
          )}
        </div>
      </main>
    </div>
  );
};

export default ReadingsPage;
