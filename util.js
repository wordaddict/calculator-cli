export const performOperation = (currentValue, previousVal, operator) => {
    if(!currentValue){
        return previousVal;
    }
    if(operator === '+'){
        return previousVal + Number(currentValue);
    }

    if(operator === '-'){
        return previousVal - Number(currentValue);
    }

    if(operator === '*'){
        return previousVal * Number(currentValue);
    }

    if(operator === '/'){
        return previousVal / Number(currentValue);
    }
}

export const handleSpecialOperations = (operator, currentValue) => {
    console.log('currentValue', currentValue)
    if(operator === '!'){
        console.log('enetered')
        // return -parseInt(currentValue)
        return -Math.abs(currentValue)
    }

    if(operator === '%'){
        return Number(currentValue) / 100;
    }
}

// console.log('guy', performOperation(0.05, 24, '*'))