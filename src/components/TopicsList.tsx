import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';

interface ITopic {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const fetchTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics');

    if (!res.ok) throw new Error('Failed to fetch topics!');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TopicsList = async () => {
  const { topics } = await fetchTopics();

  return (
    <>
      {topics.map((topic: ITopic) => {
        return (
          <div
            key={topic._id}
            className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'
          >
            <div>
              <h2 className='font-bold text-2xl'>{topic.title}</h2>
              <div>{topic.description}</div>
            </div>
            <div className='flex gap-2'>
              <RemoveBtn id={topic._id} />
              <Link href={`/edit/${topic._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TopicsList;
