'use client';
import { useRouter } from 'next/navigation';
import { HiOutlineTrash } from 'react-icons/hi';

interface RemoveBtnProps {
  id: string;
}

// Next.js v14 has issues with DELETE at the time, this is setup correctly but not working
const RemoveBtn = ({ id }: RemoveBtnProps) => {
  const router = useRouter();

  const handleDeleteTopic = async () => {
    const confirmed = confirm('Are you sure you want to delete this topic?');

    if (confirmed) {
      const res = await fetch(`${process.env.BASE_URL}/api/topics/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button className='text-red-400' onClick={handleDeleteTopic}>
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
