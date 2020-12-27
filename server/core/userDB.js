import User from '../models/userSchema.js'

const saveNewUser = async (email, account, password, chicken) => { 
    const user = new User({email, account, password, chicken}); 
    let msg = "";
    await user.save()
            .then(() => {
                msg = `User ${account} saved`;
                console.log(msg); 
            })
            .catch(err => {
                if (err.errors && err.errors.email && err.errors.email.kind === 'unique') {
                    msg = `Email \"${email}\" duplicate`;
                }
                else if (err.errors && err.errors.account && err.errors.account.kind === 'unique') {
                    msg = `Account \"${account}\" duplicate`;
                }
                else {
                    msg = 'Something wrong when register...';
                    console.error(err);
                }
                console.log(msg); 
            }) 
    return msg;
};
const changeAC = () => {

}
const changePW = () => {

}
const addChicken = () => {

}
const clearDB = async () => {
    await User.deleteMany({}, (err) => {
        if (err) console.error(err);
        else console.log("DB cleared!!");
    });
}
const printDB = async () => {
    const userList = await User.find();
    console.log(userList);
}

export { saveNewUser, changeAC, changePW, addChicken, clearDB, printDB }