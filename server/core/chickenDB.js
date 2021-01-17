import Chicken from '../models/chickenSchema.js'


const updateHP = async (name, hp, updateTime) => { 
    // const chicken = new Chicken({name, hp, hunger, createTime}); 
    let msg = "";
    await Chicken.update({"name": name}, {
        $set: {
          hp: hp,
          createTime: updateTime,
        }
      })
            .then(() => {
                msg = `New Chicken ${name} updated`;
                console.log(msg); 
            })
            .catch(err => {
                if (err.errors && err.errors.chicken && err.errors.chicken.kind === 'unique') {
                    msg = `New Chicken \"${name}\" duplicate`;
                }
                // else if (err.errors && err.errors.account && err.errors.account.kind === 'unique') {
                //     msg = `Account \"${account}\" duplicate`;
                // }
                // else {
                //     msg = 'Something wrong when register...';
                //     console.error(err);
                // }
                console.log(msg); 
            }) 
    return msg;
}
const updateHunger = async (name, hunger, updateTime) => { 
    // const chicken = new Chicken({name, hp, hunger, createTime}); 
    let msg = "";
    await Chicken.update({"name": name}, {
        $set: {
          hunger: hunger,
          createTime: updateTime,
        }
      })
            .then(() => {
                msg = `New Chicken ${name} updated`;
                console.log(msg); 
            })
            .catch(err => {
                if (err.errors && err.errors.chicken && err.errors.chicken.kind === 'unique') {
                    msg = `New Chicken \"${name}\" duplicate`;
                }
                // else if (err.errors && err.errors.account && err.errors.account.kind === 'unique') {
                //     msg = `Account \"${account}\" duplicate`;
                // }
                // else {
                //     msg = 'Something wrong when register...';
                //     console.error(err);
                // }
                console.log(msg); 
            }) 
    return msg;
}
const saveNewChicken = async (name, hp, hunger, createTime) => { 
    const chicken = new Chicken({name, hp, hunger, createTime}); 
    let msg = "";
    await chicken.save()
            .then(() => {
                msg = `New Chicken ${name} saved`;
                console.log(msg); 
            })
            .catch(err => {
                if (err.errors && err.errors.chicken && err.errors.chicken.kind === 'unique') {
                    msg = `New Chicken \"${name}\" duplicate`;
                }
                // else if (err.errors && err.errors.account && err.errors.account.kind === 'unique') {
                //     msg = `Account \"${account}\" duplicate`;
                // }
                // else {
                //     msg = 'Something wrong when register...';
                //     console.error(err);
                // }
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
const clearChDB = async () => {
    await Chicken.deleteMany({}, (err) => {
        if (err) console.error(err);
        else console.log("DB cleared!!");
    });
}
const printChDB = async () => {
    const chickenList = await Chicken.find();
    console.log(chickenList);
}

export { saveNewChicken, changeAC, changePW, addChicken, clearChDB, printChDB, updateHunger, updateHP }