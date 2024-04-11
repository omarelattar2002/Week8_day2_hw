interface Attack{
    attack():string;
}

interface Defend{
    defend():string;
}


class Attackwithsword implements Attack {
    attack():string{
        return `attack with sword`;
    }
}

class AttackwithClub implements Attack {
    attack():string{
        return `attack with club`;
    }
}


class AttackwithBowAndArrow implements Attack {
    attack():string{
        return `attack with bow and arrow`;
    }
}

class DefendwithShield implements Defend {
    defend():string{
        return `defend with shield`;
    }
}

class DefendwithArmor implements Defend {
    defend():string{
        return `defend with armor`;
    }
}



class DefendwithTunic implements Defend {
    defend():string{
        return `defend with tunic`;
    }
}


abstract class Character implements Attack,Defend{
    protected _gold:number=0;
    protected abstract attackChoice: Attack;
    protected abstract defendChoice: Defend;

    constructor(private _name:string){}

    get name():string{
        return this._name;
    }

    get gold():number{
        return this._gold;
    }

    attack():string{
        return `${this.name} is attacking with ${this.attackChoice.attack()}`;
    }


    defend():string{
        return `${this.name} is defending with ${this.defendChoice.defend()}`;
    }

    collectGold(collectedGold:number){
        this._gold += collectedGold;
        console.log(`${this.name} collected ${collectedGold} gold`);
    }

}


class Ogre extends Character{
    protected attackChoice= new AttackwithClub;
    protected defendChoice= new DefendwithShield;
}

class Peons extends Character{
    protected attackChoice= new AttackwithClub;
    protected defendChoice= new DefendwithShield;
}

class Knight extends Character{
    protected attackChoice= new Attackwithsword;
    protected defendChoice= new DefendwithArmor;
}

class Archer extends Character{
    protected attackChoice= new AttackwithBowAndArrow;
    protected defendChoice= new DefendwithTunic;
}


let shrek = new Ogre('shrek');
let sam = new Peons('sam');
let brian = new Knight('brian');
let legolas = new Archer('legolas');

let allch: Character[] = [shrek, sam, brian, legolas]

// for (let char of allch){
//     console.log(char.attack())
// }


function getRandomNumber():number{
    return Math.ceil(Math.random()*25)
}

for (let char of allch) {
    console.log(char.attack());
    console.log(char.defend());
    char.collectGold(getRandomNumber());
    console.log(`${this._name} has collected ${this._gold} gold. Their total gold is ${this._gold}`);
}