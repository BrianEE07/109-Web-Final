import { updateHunger, updateHealth, updateLifeTime, updateStage, getUser} from './core/chickenDB.js'
// game main logic for WebSocket
class GG {
    constructor(username, lifetime, stage, health, hunger, happiness) {
        this.username = username;
        this.lifetime = lifetime;
        this.stage = stage;
        this.health = health;
        this.hunger = hunger;
        this.happiness = happiness;
        this.id1 = 0;
        this.id2 = 0;
        this.id3 = 0;
        this.id4 = 0;
    }
    growUp = (timescale, sendtofront, sendData) => {
        this.id1 = setInterval(() => {
            this.lifetime += 1;
            console.log(`${this.username}'s lifetime: ${this.lifetime}`)
            // send lifetime to DB
            updateLifeTime(this.username, this.lifetime)

            // stage from 0 to 3, 3 is die
            if (this.lifetime >= 30 && this.lifetime < 60) {
                this.stage = 1; 
            }
            else if (this.lifetime >= 60 && this.lifetime < 1200) {
                this.stage = 2; 
            }
            else if (this.lifetime >= 1200) {
                this.stage = 3; 
                console.log(`life is short, gg died.`)
                clearInterval(this.id1);
                clearInterval(this.id2);
                clearInterval(this.id3);
                clearInterval(this.id4);
            }
            console.log(`${this.username}'s stage: ${this.stage}`)
            // send stage to DB
            updateStage(this.username, this.stage);
            // send to frontend 
            if (sendtofront) {
                sendData({type: 'lifetime', value: this.lifetime});
                sendData({type: 'stage', value: this.stage});
            }
        }, 1000 * timescale);
    }

    gettingHungry =  (timescale, sendtofront, sendData) => {
        this.id2 = setInterval(async () => {
            const userdata = await getUser(this.username);
            this.hunger = userdata[0].hunger;
            this.health = userdata[0].health;
            if (this.hunger === 0) {
                if (this.health === 0) {
                    this.stage = 3;
                    // send stage to DB
                    updateStage(this.username, this.stage);
                    console.log(`${this.username}'s stage: ${this.stage}`)
                    console.log(`starving, gg died.`)
                    clearInterval(this.id1);
                    clearInterval(this.id2);
                    clearInterval(this.id3);
                    clearInterval(this.id4);
                }
                else {
                    this.health -= 10;
                    // send health to DB
                    updateHealth(this.username, this.health);
                }
                console.log(`${this.username}'s health: ${this.health}`)
            }
            else {
                this.hunger -= 10;
                console.log(`${this.username}'s hunger: ${this.hunger}`)
                // send hunger to DB
                updateHunger(this.username, this.hunger, "no return");
            }
            // send to frontend 
            if (sendtofront) { 
                sendData({type: 'hunger', value: this.hunger});
                sendData({type: 'health', value: this.health});
                sendData({type: 'stage', value: this.stage});
            }
        }, 20000 * timescale)
    }

    // gettingSad =  (timescale, sendtofront, sendData) => {
    //     this.id3 = setInterval(async () => {
    //         const userdata = await getUser(this.username);
    //         this.happiness = userdata[0].happiness;
    //         this.health = userdata[0].health;
    //         if (this.happiness === 0) {
    //             if (this.health === 0) {
    //                 this.stage = 3;
    //                 // send stage to DB
    //                 updateStage(this.username, this.stage);
    //                 console.log(`${this.username}'s stage: ${this.stage}`)
    //                 console.log(`crying, gg died.`)
    //                 clearInterval(this.id1);
    //                 clearInterval(this.id2);
    //                 clearInterval(this.id3);
    //                 clearInterval(this.id4);
    //             }
    //             else {
    //                 this.health -= 10;
    //                 // send health to DB
    //                 updateHealth(this.username, this.health);
    //             }
    //             console.log(`${this.username}'s health: ${this.health}`)
    //         }
    //         else {
    //             this.happiness -= 10;
    //             console.log(`${this.username}'s happiness: ${this.happiness}`)
    //             // send happiness to DB
    //             // updateHappiness(this.username, this.happiness, "no return"});
    //         }
    //         // send to frontend 
    //         if (sendtofront) { 
    //             sendData({type: 'happiness', value: this.happiness});
    //             sendData({type: 'health', value: this.health});
    //             sendData({type: 'stage', value: this.stage});
    //         }
    //     }, 40000 * timescale)
    // }

    recoverHealth =  (sendtofront, sendData) => {
        this.id4 = setInterval(async () => {
            const userdata = await getUser(this.username);
            this.hunger = userdata[0].hunger;
            this.happiness = userdata[0].happiness;
            this.health = userdata[0].health;
            if (this.hunger >= 90 && this.happiness >= 90 && this.health <= 90) {
                this.health += 10;
                // send health to DB
                updateHealth(this.username, this.health);
                if (sendtofront) {
                    sendData({type: 'health', value: this.health});
                }
            }
        }, 10000)
    }

    clearInterval = () => {
        if (this.id1 !== 0)
            clearInterval(this.id1);
        if (this.id2 !== 0)
            clearInterval(this.id2);
        if (this.id3 !== 0)
            clearInterval(this.id3);
        if (this.id4 !== 0)
            clearInterval(this.id4);
    }
}

export default GG;