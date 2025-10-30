
const cheackDicesResult = (dices, repeat) => {
    if (!Array.isArray(dices) || dices.length === 0 || repeat === 0) return false;
    
    dices.sort((a, b) => a - b);
    let currentCount = 1;
    for (let i = 1; i < dices.length; i++) {
        if (dices[i] === dices[i - 1]) {
            currentCount++;
            if (currentCount >= repeat) return dices[i];
        } else {
            currentCount = 1;
        }
    }
    return 0;
};

export const isBrelan = (dices) => {
    return cheackDicesResult(dices, 3) !== 0;
};


export const isCarre = (dices) => {
    return cheackDicesResult(dices, 4) !== 0;
};


export const isPair = (dices) => {
    return cheackDicesResult(dices, 2) !== 0;
};

export const isYams = (dices) => {
    return cheackDicesResult(dices, 5) !== 0;
};

export const isGrandeSuite = (dices) => {
    if (!Array.isArray(dices) || dices.length !== 5) return false;
    dices.sort((a, b) => a - b);
    for (let i = 0; i < dices.length - 1; i++) {
        if (dices[i] + 1 !== dices[i + 1]) {
            return false;
        }
    }
    return true;
}



