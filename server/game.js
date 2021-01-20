// import { updateHunger, updateHP, updateLifeTime, updateStage, clearChDB, printChDB} from './core/chickenDB.js'
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
    }
    growUp = (timescale, sendtofront, sendData) => {
        this.id1 = setInterval(() => {
            this.lifetime += 1;
            console.log(`${this.username}'s lifetime: ${this.lifetime}`)
            // send lifetime to DB
            // updateLifeTime(username, lifetime)

            // stage from 0 to 3, 3 is die
            if (this.lifetime >= 120 && this.lifetime < 360) {
                this.stage = 1; 
            }
            else if (this.lifetime >= 360 && this.lifetime < 1200) {
                this.stage = 2; 
            }
            else if (this.lifetime >= 1200) {
                this.stage = 3; 
                console.log(`life is short, gg died.`)
                // clearChDB(username);
                clearInterval(this.id1);
                clearInterval(this.id2);
            }
            console.log(`${this.username}'s stage: ${this.stage}`)
            if (this.stage <= 2) {
                // send stage to DB
                // updateStage(username, stage);
            }
            // send to frontend 
            if (sendtofront) {
                sendData({type: 'lifetime', value: this.lifetime});
                sendData({type: 'stage', value: this.stage});
            }
        }, 1000 * timescale);
    }
    gettingHungry = (timescale, sendtofront, sendData) => {
        this.id2 = setInterval(() => {
            if (this.hunger === 0) {
                this.health -= 10;
                console.log(`${this.username}'s health: ${this.health}`)
                if (this.health === 0) {
                    this.stage = 3;
                    console.log(`starving, gg died.`)
                    // clearChDB(username);
                    clearInterval(this.id1);
                    clearInterval(this.id2);
                }
                else {
                    // send health to DB
                    // updateHP(username, health);
                    // console.log("update health")
                }
            }
            else {
                this.hunger -= 10;
                console.log(`${this.username}'s hunger: ${this.hunger}`)
                // send hunger to DB
                // updateHunger(username, hunger);
                // console.log("update hunger")
            }
            // send to frontend 
            if (sendtofront) {
                sendData({type: 'hunger', value: this.hunger});
                sendData({type: 'health', value: this.health});
                sendData({type: 'stage', value: this.stage});
            }
        }, 20000 * timescale)
    }
    clearInterval = () => {
        if (this.id1 !== 0)
            clearInterval(this.id1);
        if (this.id2 !== 0)
            clearInterval(this.id2);
    }
}

export default GG;