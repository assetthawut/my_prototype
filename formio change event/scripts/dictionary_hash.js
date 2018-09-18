class dictionary {

    items;

    constructor(){

    }


    has(key){
        
        return key in items;
    }

    set(key,value){

        items[key] = value;
    }    

    delete(key){

        if(this.has(key)){

            delete items[key];
            return true;
        }

        return false;
    }

    get(key){

        return this.has(key)? items[key] : undefined;

    }

    values(){

        var values = [];
        for( var k in items){
            if(this.has(k)){
                values.push(items[k])
            }
        }

        return values;
    }

    key(){

        return Object.keys(items);
    }

    getItems = function(){

        return items;
    }

}