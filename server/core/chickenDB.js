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
    let chicken = await Chicken.find({account: account})
    console.log(chicken)
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
                console.log(msg); 
            }) 
    return msg;
}
const updateHealth = async (account, health) => { 
    // const chicken = new Chicken({name, health, hunger, createTime}); 
    let msg = "";
    await Chicken.update({"account": account}, {
        $set: {
          health: health,
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
const updateHunger = async (account, hunger, message) => { 
    // const chicken = new Chicken({name, health, hunger, createTime}); 
    let msg = "";
    let health = 0
    // let hung = 0
    let newChick = ''
    let stage = 0
    let chicken = await Chicken.find({"account": account}, {hunger: 1, health: 1})
    console.log("db", chicken)
    if(message === 'return'){

        hunger = chicken[0].hunger
        health = chicken[0].health
        if(hunger >= 200){ health = health -  10; hunger = 200}
        else {hunger = hunger + 10}
    
    }else {
        health = chicken[0].health
    }
    if(health <= 0) stage = 3
    // let updateTime = new Date().getTime()
        await Chicken.update({"account": account}, {
        $set: {
          hunger: hunger,
          health: health,
          stage: stage
        //   updateTime: updateTime,
        }
      })
            .then(async () => {
                newChick = await Chicken.find({"account": account}, {hunger:1, health: 1, stage: 1})
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
            return newChick[0]
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
    const c = await Chicken.find({account: account});
    console.log("db",c)
    if(c.length === 0) {
        
    // const chickenList = await Chicken.find();
    // console.log(chickenList)
            await chicken.save()
                .then(() => {
                    msg = `New Chicken ${name} saved`;
                    console.log(msg); 
                    // console.log('fhwef',chickenList)
                })
                .catch(err => {
                    if (err.errors && err.errors.chicken && err.errors.chicken.kind === 'unique') {
                        msg = `New Chicken \"${name}\" duplicate`;
                    }
                    console.log(msg); 
                }) 
            console.log("create: ", chicken)
            return chicken;
        }

    else  {
        return c
    
    }
};
const getUser = async (account) => { 
    let msg = "";
    const chickenList = await Chicken.find({"account":account})
    console.log('fhwef',chickenList)
    // const chicken = chickenList[0]
    // console.log("dead: ", chicken)
    return chickenList;
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