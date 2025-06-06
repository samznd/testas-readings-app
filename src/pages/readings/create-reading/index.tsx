import { useState } from 'react';
import useReadingStore from '@/lib/store';
import Button from '@/shared/components/ui/button';
import LinkComponent from '@/shared/components/ui/link';

import ReactFroalaComponent from '@/shared/components/froala-editor';
import { useNavigate } from 'react-router';

const CreateReadingPage = () => {
  let navigate = useNavigate();
  const { readings, createReading } = useReadingStore();
  const [newReading, setNewReading] = useState({
    id: readings.length + 1,
    reading: '',
    frags: '',
  });
  return (
    <div className=' min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='w-full mb-7'>
        {' '}
        <LinkComponent to='/'>Back</LinkComponent>
        <Button
          variant='success'
          className='py-2 px-12 ml-5'
          onClick={() => {
            createReading(newReading);
            navigate('/')
          }}
        >
          Submit
        </Button>
      </div>
      <main className=' h-[300px] max-h-[300px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
          <div className='w-full'>
            <ReactFroalaComponent
              title='Reading'
              model={newReading.reading}
              onModelChange={(model: string) =>
                setNewReading((prevState) => ({ ...prevState, reading: model }))
              }
            />
          </div>
          <div className='w-full'>
            <ReactFroalaComponent
              title='frags'
              model={newReading.frags}
              onModelChange={(model: string) =>
                setNewReading((prevState) => ({ ...prevState, frags: model }))
              }
            />
          </div>
        </div>
        <div className='md:hidden flex flex-col justify-center items-center w-full fixed left-0 bottom-0 z-50 bg-white border-t md:border-none border-slate-950 py-4'>
          <Button
            variant='success'
            className='py-2 px-12 w-3/4'
            onClick={() => createReading(newReading)}
          >
            Submit
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CreateReadingPage;
