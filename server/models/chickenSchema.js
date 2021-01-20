import mongoose from 'mongoose' 
import uniqueValidator from 'mongoose-unique-validator'
const Schema = mongoose.Schema
const ChickenSchema = new Schema({
    
    account: String,
    name: {type: Number, unique: false},
    health: {type: Number, unique: false},
    happiness: Number,
    hunger: Number,
    createTime: Number,
    lifeTime: Number,
    stage: Number
});
ChickenSchema.plugin(uniqueValidator);
const Chicken = mongoose.model('Chicken', ChickenSchema);
export default Chicken ;



// validate:{
//     validator: validator.isEmail,
//     message: '{VALUE} is not a valid email',
//     isAsync: false
//   }