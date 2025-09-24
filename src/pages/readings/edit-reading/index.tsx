import Button from '@/shared/components/ui/button';
import LinkComponent from '@/shared/components/ui/link';

import ReactFroalaComponent from '@/shared/components/froala-editor';
import { useNavigate, useParams } from 'react-router';
import useEditReadingForm from '@/hooks/useEditReadingForm';
import { generateSnackbar } from '@/lib/generate-snackbar';

const EditReadingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const {
    reading,
    setReading,
    handleChangefragen,
    updateReading,
    addNewFrag,
    deleteFrag,
  } = useEditReadingForm(Number(id));
  
  if (!reading) {
    return (
      <div className='min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <div className='w-full mb-7'>
          <LinkComponent to='/'>Back</LinkComponent>
        </div>
        <div className='text-center'>
          <span className='text-red-500 font-semibold'>Reading not found!</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className=' min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='w-full mb-7'>
        {' '}
        <LinkComponent to='/'>Back</LinkComponent>
        <Button
          variant='success'
          className='py-2 px-12 ml-5'
          onClick={() => {
            if (!reading.reading) {
              return generateSnackbar({ type: 'error', message: "unvalid reading title!" })
            }
            updateReading(reading);
            navigate('/');
          }}
        >
          Update
        </Button>
      </div>
      <main className=' h-[300px] max-h-[300px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
          <div className='w-full'>
            <ReactFroalaComponent
              title='Reading'
              model={reading.reading}
              onModelChange={(model: string) =>
                setReading((prevState) => prevState ? { ...prevState, reading: model } : null)
              }
            />
            <ReactFroalaComponent
              title=''
              model={reading.answerBox}
              onModelChange={(model: string) =>
                setReading((prevState) => prevState ? { ...prevState, answerBox: model } : null)
              }
            />
          </div>
          <div className='w-full'>
            {reading.fragen.map((frage, fdx) => {
              return (
                <div
                  key={fdx}
                  className={`flex flex-col ${
                    reading.fragen.length > 1 ? 'mt-2' : ''
                  }`}
                >
                  <div className='flex justify-between mb-1'>
                    <strong>frage {fdx + 1}:</strong>
                    {reading.fragen.length > 1 ? (
                      <Button
                        variant='danger'
                        className='!py-1 !px-6 text-sm'
                        onClick={() => deleteFrag(fdx)}
                      >
                        Delete
                      </Button>
                    ) : null}
                  </div>
                  <textarea
                    placeholder='write your question and answers here'
                    className='bg-white rounded-md border-none p-2 mt-2'
                    value={frage.frage}
                    onChange={(event) =>
                      handleChangefragen(fdx, event.target.value)
                    }
                  />
                </div>
              );
            })}
            <Button
              className='py-2 px-4 mt-3'
              onClick={addNewFrag}
            >
              New frage
            </Button>
          </div>
        </div>
        <div className='md:hidden flex flex-col justify-center items-center w-full fixed left-0 bottom-0 z-50 bg-white border-t md:border-none border-slate-950 py-4'>
          <Button
            variant='success'
            className='py-2 px-12 w-3/4'
            onClick={() => updateReading(reading)}
          >
            Update
          </Button>
        </div>
      </main>
    </div>
  );
};

export default EditReadingPage;

