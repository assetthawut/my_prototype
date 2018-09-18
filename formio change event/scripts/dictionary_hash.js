class dictionaryx {
    constructor() {
        // Check that (year, month, day) is a valid date
        // ...
    
        // If it is, use it to initialize "this" date
        this.items = {};

      }


    has(key){
        
        return key in this.items;
    }

    set(key,value){

        this.items[key] = value;
    }    

    delete(key){

        if(this.has(key)){

            delete this.items[key];
            return true;
        }

        return false;
    }

    get(key){

        return this.has(key)? this.items[key] : undefined;

    }

    values(){

        var values = [];
        for( var k in this.items){
            if(this.has(k)){
                values.push(this.items[k])
            }
        }

        return values;
    }

    key(){

        return Object.keys(this.items);
    }

    getItems(){

        return this.items;
    }

}