import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true }
  }, {
    timestamps: true,
  });

export const Event = mongoose.model('Event', eventSchema);

