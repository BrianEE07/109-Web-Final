import Chicken from '../models/chickenSchema.js'

//updateLifetime save to db (username, lifetime)
//updateStage save to db(username stage)
//不用upddatetime
const updateLifeTime = async (account, lifeTime) => { 
    // const chicken = new Chicken({name, health, hunger, createTime}); 
    let msg = "";
    await Chicken.update({"account": account}, {
        $set: {
          lifeTime: lifeTime,
        //   createTime: updateTime,
        }
      })
            .then(() => {
                msg = `New Chicken ${account} updated`;
                console.log(msg); 
            })
            .catch(err => {
                if (err.errors && err.errors.chicken && err.errors.chicken.kind === 'unique') {
                    msg = `New Chicken \"${account}\" duplicate`;
                }
                console.log(msg); 
            }) 
    return msg;
}
const updateStage = async (account, stage) => { 
    // const chicken = new Chicken({name, health, hunger, createTime}); 
    let msg = "";
    let chicken = await Chicken({account: account})
    let name = chicken[0].name
    if(stage === 3) name = 4
    await Chicken.update({"account": account}, {
        $set: {
          stage: stage,
          name: name
        //   createTime: updateTime,
        }
      })
            .then(() => {
                msg = `New Chicken ${account} updated`;
                console.log(msg); 
            })
            .catch(err => {
                if (err.errors && err.errors.chicken && err.errors.chicken.kind === 'unique') {
                    msg = `New Chicken \"${account}\" duplicate`;
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
const updateHealth = async (name, health) => { 
    // const chicken = new Chicken({name, health, hunger, createTime}); 
    let msg = "";
    await Chicken.update({"name": name}, {
        $set: {
          health: health,
        //   createTime: updateTime,
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
                console.log(msg); 
            }) 
    return msg;
}
const updateHunger = async (account, hunger, message) => { 
    // const chicken = new Chicken({name, health, hunger, createTime}); 
    let msg = "";
    let health = 0
    // let hung = 0
    let newChick = ''
    let chicken = await Chicken.find({"account": account}, {hunger: 1, health: 1})
    if(message === 'return'){

        hunger = chicken[0].hunger
        health = chicken[0].health
        let newChick = ''
        if(hunger >= 200){ health = health -  10; hunger = 200}
        else {hunger = hunger + 10}
    
    }else {
        health = chicken[0].health
    }
    // let updateTime = new Date().getTime()
        await Chicken.update({"account": account}, {
        $set: {
          hunger: hunger,
          health: health,
        //   updateTime: updateTime,
        }
      })
            .then(async () => {
                newChick = await Chicken.find({"account": account}, {hunger:1, health: 1})
                msg = `New Chicken ${account} updated`;
                console.log(msg);
                console.log("Newchicken: ", newChick[0]) 
            })
            .catch(err => {
                if (err.errors && err.errors.chicken && err.errors.chicken.kind === 'unique') {
                    msg = `New Chicken \"${account}\" duplicate`;
                }
                console.log(msg); 
            }) 
    return newChick
}
const updateHappiness = async (account, happiness, updateTime) => { 
    // const chicken = new Chicken({name, health, hunger, createTime}); 
    let msg = "";
    await Chicken.update({"account": account}, {
        $set: {
          happiness: happiness,
          lifeTime: updateTime,
        }
      })
            .then(async () => {
                const chickenList = await Chicken.find();
                console.log('fhwef',chickenList)
                msg = `New Chicken ${account} updated`;
                console.log(msg); 
            })
            .catch(err => {
                if (err.errors && err.errors.chicken && err.errors.chicken.kind === 'unique') {
                    msg = `New Chicken \"${account}\" duplicate`;
                }
                console.log(msg); 
            }) 
    return msg;
}
const saveNewChicken = async (account, name, health, happiness, hunger, createTime, lifeTime, stage) => { 
    const chicken = new Chicken({account, name, health, happiness, hunger, createTime, lifeTime, stage}); 
    let msg = "";
    console.log('hereeeeeee')
    // const c = await Chicken.find({account: account});
    // console.log(c)
    // if(c === []) return chicken
    // await Chicken.deleteMany({account: account})
    const chickenList = await Chicken.find();
    console.log(chickenList)
    await chicken.save()
        .then(() => {
            msg = `New Chicken ${name} saved`;
            console.log(msg); 
            console.log('fhwef',chickenList)
        })
        .catch(err => {
            if (err.errors && err.errors.chicken && err.errors.chicken.kind === 'unique') {
                msg = `New Chicken \"${name}\" duplicate`;
            }
            console.log(msg); 
        }) 
    console.log("create: ", chicken)
    return chicken;
};
const getUser = async (account) => { 
    let msg = "";
    const chickenList = await Chicken.find({"account":account})
    console.log('fhwef',chickenList)
    const chicken = chickenList[0]
    console.log("dead: ", chicken)
    return chicken;
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
    console.log("wefef", chickenList);
}

export { saveNewChicken, changeAC, changePW, addChicken, clearChDB, printChDB, updateHunger, updateHealth, updateHappiness, getUser, updateLifeTime, updateStage }