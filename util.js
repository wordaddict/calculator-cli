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
