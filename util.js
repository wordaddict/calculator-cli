export const performOperation = (currentValue, previousVal, operator) => {
    if(!currentValue){
        return previousVal;
    }
    if(operator === '+'){
        return previousVal + parseInt(currentValue);
    }

    if(operator === '-'){
        return previousVal - parseInt(currentValue);
    }

    if(operator === '*'){
        return previousVal * parseInt(currentValue);
    }

    if(operator === '/'){
        return previousVal / parseInt(currentValue);
    }
}
