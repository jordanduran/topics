import EditForm from '@/components/EditForm';

interface EditPageProps {
  params: { id: string };
}

const getTopicById = async (id: string) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/topics/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch topic!');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditPage = async ({ params }: EditPageProps) => {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  return <EditForm id={id} title={title} description={description} />;
};

export default EditPage;
