var data = {
    name:'Yoshi'
}

Vue.component('greeting', {
    template: '<p>I am {{ name }}. <button v-on:click="changeName">Change Name</button></p>',
    data: function(){
        return data
        
    },
    methods: {
        changeName: function(){
            this.name = 'Mario';
        }
    }
});


var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'

    },
    methods: {
   
    },
    computed: {
        greet: function(){
            return 'Hello from app one :)';
        }
       
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'

    },
    methods: {
        changeTitle: function(){
            one.title = "Title changed";
        }
   
    },
    computed: {
        greet: function(){
            return 'Hi, from app 2 >:)';
        }
       
    }
});

two.title = "Changed from outside";
        // age: 32,
        // x: 0,
        // y: 0
        // name: 'Calvin',
        // job: 'Ninja',
        // website: 'http://www.calvinbrownlee.com',
        // websiteTag: '<a href="http://www.calvinbrownlee.com">Calvin Brownlee Portfolio</a>'
    // add: function(inc){
        //     this.age += inc;
        // },
        // subtract: function(dec){
        //     this.age -= dec;
        // },
        // updateXY: function(event){
        //     this.x = event.offsetX;
        //     this.y = event.offsetY;
        // },
        // click: function(){
        //     alert('You clicked me');
        // }
    // methods: {
    //     greet: function(time){
    //         this.name
    //         return 'Good ' + time + ' ' + this.name;
    //     }
    // }

            // addToA: function(){
        //     return this.a + this.age;
        // },
        // addToB: function(){
        //     return this.b + this.age;
        // }       
// available: false,
        // nearby: false

        //  compClasses: function(){
        //     return {
        //         available: this.available,
        //         nearby: this.nearby,
        //     }
        // }

                // error: false,
        // success: false  

        //         characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        // ninjas: [
        //     {name: 'Ryu', age:25},
        //     {name:'Yoshi', age:35},
        //     {name:'Ken', age: 55}
        // ]