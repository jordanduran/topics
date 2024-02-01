import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../libs/mongodb';
import Topic from '../../../../models/topic';

export const POST = async (request) => {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: 'Topic created!' }, { status: 201 });
};

export const GET = async () => {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
};

export const DELETE = async (request) => {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Topic deleted!' }, { status: 200 });
};
