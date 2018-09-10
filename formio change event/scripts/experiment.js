// var subJSON = document.getElementById('subjson');
$( document ).ready(function() {
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

var setDisplay = function(display) {
  builder.setDisplay(display).then(function(instance) {
    //  var jsonElement = document.getElementById('json');
    //  var formElement = document.getElementById('formio');
     instance.on('saveComponent', function(event) {
    //    var schema = instance.schema;
    //    jsonElement.innerHTML = '';
    //    formElement.innerHTML = '';
    //    jsonElement.appendChild(document.createTextNode(JSON.stringify(schema, null, 4)));
    //    Formio.createForm(formElement, schema).then(onForm);
     console.log("Save...");
     });
   
     instance.on('editComponent', function(event) {
       console.log('editComponent', event);
     });
     
     instance.on('updateComponent', function(event) {
    //    jsonElement.innerHTML = '';
    //    jsonElement.appendChild(document.createTextNode(JSON.stringify(instance.schema, null, 4)));
     });
     
     instance.on('deleteComponent', function(event) {
    //    jsonElement.innerHTML = '';
    //    jsonElement.appendChild(document.createTextNode(JSON.stringify(instance.schema, null, 4)));
     });
     
    //  Formio.createForm(formElement, instance.schema).then(onForm);

    // instance.on("change",function(){
    //     console.log("Change 12345 ");
    //     builder.render();
    // })


   });
};

// Handle the form selection.
var formSelect = document.getElementById('form-select');
console.log("formSelect",formSelect);
formSelect.addEventListener("change", function() {
  setDisplay(this.value);
});

setDisplay('form');


    console.log( "ready!" );
});