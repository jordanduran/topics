import mongoose, { Schema } from 'mongoose';

interface ITopic {
  title: string;
  description: string;
}

const topicSchema = new Schema<ITopic>(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema);

export default Topic;
