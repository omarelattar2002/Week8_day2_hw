interface Attack {
    attack(): string;
}

interface Defense {
    defend(): string;
}



class AttackWithSword implements Attack {
    attack(): string {
        return "Attacking with a sword.";
    }
}


class DefendsWithShield implements Defense {
    defend(): string {
        return "Defending with a shield.";
    }
}

abstract class Character implements Attack, Defense {
    protected _gold: number = 0;
    protected abstract attackAbility$: Attack;
    protected abstract defendAbility$: Defense;

    constructor(protected _name: string){
        
    }
    defend(): string {
        throw new Error("Method not implemented.");
    }
    attack(): string {
        throw new Error("Method not implemented.");
    }


}