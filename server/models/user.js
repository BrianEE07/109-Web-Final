import mongoose from 'mongoose' 
const Schema = mongoose.Schema
const UserSchema = new Schema({
    
    id: Number, // Number is shorthand for {type: Number}
    name: String
});
// 定義 schema
const User = mongoose.model('User', UserSchema);
// 根據 schema 宣告⼀一個 collection (model)
export default User;