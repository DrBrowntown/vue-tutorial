new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: false
    },
    methods: {
   
    },
    computed: {
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby,
            }
        }
    }
});
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
