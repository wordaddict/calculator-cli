import { storeNames } from '../constants.js';
import { Store } from '../store.js';
const store  = new Store();

export class CalculatorService {

    setPreviousValue(value){
        return store.setValue(storeNames.previousValue, value);
    }

    getPreviousValue(){
        return store.getValue(storeNames.previousValue);
    }

    setCurrentValue(value){
        return store.setValue(storeNames.currentValue, value);
    }

    getCurrentValue(){
        return store.getValue(storeNames.currentValue);
    }

    setPreviousOperator(value){
        return store.setValue(storeNames.previousOperator, value);
    }

    getPreviousOperator(){
        return store.getValue(storeNames.previousOperator);
    }

    resetValues(){
        store.setValue(storeNames.previousValue, 0);
        store.setValue(storeNames.currentValue, '');
        store.setValue(storeNames.previousOperator, '+');
        return;
    }
}