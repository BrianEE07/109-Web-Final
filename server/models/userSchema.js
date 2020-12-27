import mongoose from 'mongoose' 
import uniqueValidator from 'mongoose-unique-validator'
const Schema = mongoose.Schema
const UserSchema = new Schema({
    
    email: {type: String, unique: true},
    account: {type: String, unique: true},
    password: String,
    chicken: [{current: Boolean, bornDate: Date}],
    
});


// validate:{
//     validator: validator.isEmail,
//     message: '{VALUE} is not a valid email',
//     isAsync: false
//   }


UserSchema.plugin(uniqueValidator);

const User = mongoose.model('User', UserSchema);
export default User;