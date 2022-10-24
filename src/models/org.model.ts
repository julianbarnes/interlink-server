import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const orgSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    leaderId: {type: String, required: true}
  }, {
    timestamps: true,
  });

export const Org = mongoose.model('Org', orgSchema);

