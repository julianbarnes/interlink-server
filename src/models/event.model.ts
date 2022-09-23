import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: {type: String, required: false},
    location: {type: String, required: false},
    category: {type: String, required: false},
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    picture: { type: String, required: false},
    approved: { type: Boolean, required: false}
  }, {
    timestamps: true,
  });

export const Event = mongoose.model('Event', eventSchema);

