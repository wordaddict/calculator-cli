import conf from 'conf';
const confInstance = new conf();

export class Store {
    setValue(key, value){
        return confInstance.set(key, value);
    }

    getValue(key){
        return confInstance.get(key);
    }

    deleteValue(key){
        return confInstance.delete(key)
    }
}