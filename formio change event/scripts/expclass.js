


class Rectangle {
    constructor(height, width) {
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
    }
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }
    get area() {
        console.log("get")
        return this.height * this.width;
    }
    set area(value) {
        console.log("set")
        this.height = this.width = Math.sqrt(value);
    }
}




class Square extends Rectangle {
    constructor(height, width) {
        //    this.height; // ReferenceError, super needs to be called first!
        // Here, it calls the parent class' constructor with lengths
        // provided for the Rectangle's width and height
        super();
        //   super(length,name);
        //   super.sayName();


        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        this.name = 'Square';
        this.height = height;
        this.width = width;
    }
    sayHello() {

        console.log("Hello World JS");

    }
}


class sampleclass {
    constructor(builder) {
        console.log("...");
        // builder is element id 
        // console.log(builder);

        console.log("-builder-", builder.form);
        var sampleform = builder.form
        builder.setForm(sampleform);

    }
}




