import ReactFroalaComponent from 'react-froala-wysiwyg';

interface IFroalaEditor {
  title?: string;
  model: string;
  onModelChange: object;
}
const FroalaEditor = ({ title, model, onModelChange }: IFroalaEditor) => {
  return (
    <div className='w-full froala-container list mb-8'>
      {title ? <span className='block text-xl font-bold capitalize mb-2'>{title}:</span>: null}
      <ReactFroalaComponent
        tag='textarea'
        onModelChange={onModelChange}
        model={model}
        config={{
          placeholder: 'Write Your Content Here',
          plainPaste: true,
        }}
      />
    </div>
  );
};

export default FroalaEditor;
