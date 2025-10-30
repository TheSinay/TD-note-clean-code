export const isBrelan = (dices) => {
    if (!Array.isArray(dices) || dices.length === 0) return false;
    
    dices.sort((a, b) => a - b);
    let currentCount = 1;
    for (let i = 1; i < dices.length; i++) {
        if (dices[i] === dices[i - 1]) {
            currentCount++;
            if (currentCount == 3) return true;
        } else {
            currentCount = 1;
        }
    }
    return false;
};