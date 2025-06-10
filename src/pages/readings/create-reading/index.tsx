import Button from '@/shared/components/ui/button';
import LinkComponent from '@/shared/components/ui/link';

import ReactFroalaComponent from '@/shared/components/froala-editor';
import { useNavigate } from 'react-router';
import useReadingForm from '@/hooks/useReadingForm';
import { generateSnackbar } from '@/lib/generate-snackbar';

const CreateReadingPage = () => {
  let navigate = useNavigate();
  const {
    newReading,
    setNewReading,
    handleChangeFrags,
    createReading,
    addNewFrag,
    deleteFrag,
  } = useReadingForm();
  console.log(newReading);
  
  return (
    <div className=' min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='w-full mb-7'>
        {' '}
        <LinkComponent to='/'>Back</LinkComponent>
        <Button
          variant='success'
          className='py-2 px-12 ml-5'
          onClick={() => {
            if (!newReading.reading) {
              return generateSnackbar({ type: 'error', message: "unvalid reading title!" })
            }
            createReading(newReading);
            navigate('/');
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
            {newReading.frags.map((frag, fdx) => {
              return (
                <div
                  key={fdx}
                  className={`flex flex-col ${
                    newReading.frags.length > 1 ? 'mt-2' : ''
                  }`}
                >
                  <div className='flex justify-between mb-1'>
                    <strong>Frag {fdx + 1}:</strong>
                    {newReading.frags.length > 1 ? (
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
                    value={frag.frag}
                    onChange={(event) =>
                      handleChangeFrags(fdx, event.target.value)
                    }
                  />
                </div>
              );
            })}
            <Button
              className='py-2 px-4 mt-3'
              onClick={addNewFrag}
            >
              New Frag
            </Button>
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
