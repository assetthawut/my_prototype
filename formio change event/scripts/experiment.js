

// var subJSON = document.getElementById('subjson');
$(document).ready(function () {
    var builder = new Formio.FormBuilder(document.getElementById("builder"), {
        display: 'form',
        components: [],
        settings: {
            pdf: {
                "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
                "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
            }
        }
    }, {
            baseUrl: 'https://examples.form.io'
        });

    // var onForm = function(form) {
    //   form.on('change', function() {
    //     subJSON.innerHTML = '';
    //     subJSON.appendChild(document.createTextNode(JSON.stringify(form.submission, null, 4)));
    //   });
    // };

    var setDisplay = function (display) {
        builder.setDisplay(display).then(function (instance) {
            //  var jsonElement = document.getElementById('json');
            //  var formElement = document.getElementById('formio');
            
            instance.on('formload',function(){
                //console.log("form load");
            })

            instance.on('saveComponent', function (event) {
                //    var schema = instance.schema;
                //    jsonElement.innerHTML = '';
                //    formElement.innerHTML = '';
                //    jsonElement.appendChild(document.createTextNode(JSON.stringify(schema, null, 4)));
                //    Formio.createForm(formElement, schema).then(onForm);
                
                console.log("Saveeeeeeeee");
               // console.log("onChange",onchange);
                // instance.on('update',function(){

                //    // console.log("------------------------> 1234 update")
                // })

                instance.on('change',function(){
                    console.log("---->save<-----");
                })
               


            });

            instance.on('editComponent', function (event) {
              //  console.log('editComponent', event);
            
            });

            instance.on('update',function(){

              //  console.log("------------------------> 1234 update")
            })

            instance.on('onChange',function(){

                console.log("On ->>>> Change")


            })

            instance.on('nextPage',function(){

             //   console.log("nextPage 123456");
            })

            instance.on('refreshData',function(){

             //   console.log("Refresh Data !!");

            });


            instance.on('editGridAddRow',function(){


              //  console.log(" editGridAddRow ")
            })




            instance.on('updateComponent', function (event) {
                //    jsonElement.innerHTML = '';
                //    jsonElement.appendChild(document.createTextNode(JSON.stringify(instance.schema, null, 4)));
               // console.log("Update Component");
                // instance.on("change",function(){
                //     console.log("Change Funtcion XXXXX ");
                //   //  console.log("instance",instance);
                // })   

            });

            // instance.on('render',function(event){

            //    //   console.log("Render !!! ");
            //    //   console.log("event",event);
            //    //   console.log("instance schema ",instance.schema);
            //   console.log("Render!");

            // })

            instance.on("copyComponent",function(){


                  //  console.log("COPPPPPPPY");
            })


            instance.on("componentCopy",function(){

                   //console.log(" COCOPY ");
            })

            instance.on('componentChange',function(){

             //   console.log("-TEST componentChange-");
            })

            instance.on('pasteComponent',function(){

                console.log("-- paste -- ");

            })


            instance.on('componentPaste',function(){

                console.log("-- paste -- ");

            })            


            instance.on('change',function(){

                console.log("--- CHANGE X ---");
            })






            // setTimeout(function(){ 
            //     instance.on("change",function(event){

            //         console.log(" ----- Chang event run  ----");
            //         // console.log("---",instance.schema);
    
            //     })
            
            // }, 2000);

            // instance.on('deleteComponent', function (event) {
            //     //    jsonElement.innerHTML = '';
            //     //    jsonElement.appendChild(document.createTextNode(JSON.stringify(instance.schema, null, 4)));
            //     console.log("delete...");
            //     instance.on("change", function () {
            //         console.log("Change Delete"); 
            //         //  console.log("instance",instance);
            //     })
            // });

          

            // builder.setForm(instance.scheme);





            // builder.instance.on('deleteComponent',function(){

            //     console.log("Set formmmmmm");
                
            // })





            // builder.on('change',function(){

            //     console.log("Set formmmmmm Change");
                
            // })

            //  Formio.createForm(formElement, instance.schema).then(onForm);
            // instance.on("componentChange", function (event) {
            //     console.log("Change Change Change");
                  
            //     //  console.log("instance",instance);
            // })
// // ---------------------------------
// instance.on("change",function(){
//     console.log("Change Event in in ");
// })
// instance.on("setForm",function(){
//     console.log("Change Event in in in in X ");
// })
// ---------------------------------




            $('#editschema').click(function () {

                console.log("Show Instance ",instance);
                console.log("Builder",builder);
                // console.log("Display ",display);
                // console.log("form 5555 ",instance.form);
            })

            $('#setformx').click(function(){

                console.log("show setform x");
                var sample = experiment;
                builder.instance.setForm(sample);
                // console.log("sample",sample);
                console.log("instance",instance);
            
            })

            $('#setform2').click(function(){

                // builder.instance.setForm(experiment2);
                // builder.instance.on("change",function(){
                //      console.log("Change Event change from click");
                //  })
                // instance.on("setForm",function(){
                //     console.log("Change Event setForm");
                // })

                builder.instance.setForm(experiment2);
            
            })

            $('#showschema').click(function(){

                console.log("show schema",builder.instance.schema.components);
                
                // builder.instance.on("change",function(){
                //      console.log("Change Event change from click");
                //  })                
                
                builder.render();

            })



        $('#testclass').click(function(){

            //  testclass = new Rectangle(100,100);
            //  testclass.sayName();
            //  console.log(testclass.area)
            //  console.log(" testclass ",testclass.sayName());

            // extendclassx = new Square(9,100);
            // extendclassx.sayName();
            // console.log(extendclassx.area);
            // extendclassx.sayHello();
            // console.log("#testclass builder",builder);
            demoWebformBuilderx = new sampleclass(builder);


        })

        $('#formrender').click(function(){


            console.log("Form-Render");
            builder.render();


        })

        $('#getkey').click(function(){

            console.log("key: ",dict.key());
        })

            


        })
    };

    // Handle the form selection.
    var formSelect = document.getElementById('form-select');
    console.log("formSelect", formSelect);
    formSelect.addEventListener("change", function () {
        setDisplay(this.value);
    });

    setDisplay('form');
    console.log("ready!");

    console.log("Builder",builder);
    

    // builder.instance.setForm(experiment2)
    // builder.instance.on("change",function(event){
    //         console.log("Success");
    //         console.log(event);
    //     })

    builder.instance.on("copyComponent",function(){
         console.log("COCOPY");
    })


    var dict = new dictionaryx();

    $('#createdict').click(function(){

        console.log(" === createdict ===");
        
        dict.set('a','Rooney');
        dict.set('b','Beckham');

        console.log('dict',dict);
        

        

    })

    $('#showvalue').click(function(){

        console.log(" === showvalue ===");
        console.log(dict.values());
        console.log("GET =:=")
        console.log(dict.get('b'))

        console.log("Check has: ",dict.has('b'));

    })

    $('#deletedict').click(function(){

        console.log("Delete Dict");
        dict.delete('a');

    })


});







//  Formio.createForm(document.getElementById('formio'), 'https://examples.form.io/customerload') .then(function(form) { 
//      // Triggered when they click the submit button. 
//      form.on('change', function(event) { 
//          if (event.changed && event.changed.component.key === 'customerNumber' && event.changed.value)
//           { fetch('https://examples.form.io/customers/submission?data.number=' + event.changed.value, { headers: { 'content-type': 'application/json' }, mode: 'cors', }) .then(function(response) { response.json().then(function(result) { if (Array.isArray(result) && result.length > 0) { var submission = { data: event.data }; submission.data.name = result[0].data.name; submission.data.phoneNumber = result[0].data.phonenumber; form.submission = submission; } }); }); } }); });