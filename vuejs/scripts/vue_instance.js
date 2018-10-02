var  vm = new Vue({
    el: '#vue_det',
    data: {
       firstname : "Wayne",
       lastname  : "Rooney",
       address    : "Manchester"
    },
    methods: {
       mydetails : function() {
          return "I am "+this.firstname +" "+ this.lastname;
       }
    }
 })