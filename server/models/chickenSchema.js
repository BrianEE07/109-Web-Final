import mongoose from 'mongoose' 
import uniqueValidator from 'mongoose-unique-validator'
const Schema = mongoose.Schema
const ChickenSchema = new Schema({
    
    name: {type: String, unique: false},
    hp: {type: Number, unique: false},
    hunger: Number,
    createTime: Number
    
});
ChickenSchema.plugin(uniqueValidator);
const Chicken = mongoose.model('Chicken', ChickenSchema);
export default Chicken ;



// validate:{
//     validator: validator.isEmail,
//     message: '{VALUE} is not a valid email',
//     isAsync: false
//   }