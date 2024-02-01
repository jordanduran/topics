'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CreateForm from '@/components/CreateForm';

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!title || !description) {
      alert('All fields are required before submitting!');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push('/');
        router.refresh();
      } else {
        throw new Error('Failed to create new topic!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateForm
      onHandleSubmit={handleSubmit}
      onHandleTitleChange={handleTitleChange}
      onHandleDescriptionChange={handleDescriptionChange}
      title={title}
      description={description}
    />
  );
};

export default CreatePage;
