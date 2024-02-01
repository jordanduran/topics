'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface EditFormProps {
  id: string;
  title: string;
  description: string;
}

const EditForm = ({ id, title, description }: EditFormProps) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewDescription(event.target.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error('Failed to update topic!');
      }
      router.push('/');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Topic Title'
        className='border border-slate-500 px-8 py-2'
        value={newTitle}
        onChange={handleTitleChange}
      />
      <input
        type='text'
        placeholder='Topic Description'
        className='border border-slate-500 px-8 py-2'
        value={newDescription}
        onChange={handleDescriptionChange}
      />
      <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit hover:bg-green-700'>
        Update Topic
      </button>
    </form>
  );
};

export default EditForm;
