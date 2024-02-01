interface CreateFormProps {
  onHandleSubmit: (event: React.SyntheticEvent) => void;
  onHandleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleDescriptionChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  title: string;
  description: string;
}

const CreateForm = ({
  onHandleSubmit,
  onHandleTitleChange,
  onHandleDescriptionChange,
  title,
  description,
}: CreateFormProps) => {
  return (
    <form className='flex flex-col gap-3' onSubmit={onHandleSubmit}>
      <input
        type='text'
        placeholder='Topic Title'
        className='border border-slate-500 px-8 py-2'
        value={title}
        onChange={onHandleTitleChange}
        required
      />
      <input
        type='text'
        placeholder='Topic Description'
        className='border border-slate-500 px-8 py-2'
        value={description}
        onChange={onHandleDescriptionChange}
        required
      />
      <button
        type='submit'
        className='bg-green-600 font-bold text-white py-3 px-6 w-fit hover:bg-green-700'
      >
        Create Topic
      </button>
    </form>
  );
};

export default CreateForm;
