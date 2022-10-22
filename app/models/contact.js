import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BusinessContactsSchema = new Schema({
    name: String,  
    number: String,
    email: String,
}, {
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contacts', BusinessContactsSchema);