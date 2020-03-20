var app = new Vue({
el:'#app',
    data:{
        product: 'Pink Shoes',
        image: 'shoes-1.jpg',
        inventory: 100,
        onSale:true,
        details:["Vegan Leather","100% for bad bitches","Best Shoes on the market", "Made with love"],
        cart:0,
        variants:[{
            variantId: 2234,
            variantColor: 'pink',
            variantImage: 'shoes-1.jpg',

        },
            {
                variantId: 2235,
                variantColor: 'dangerous',
                variantImage: 'shoes-2.jpg',
            },
            {
                variantId: 2236,
                variantColor: 'wild',
                variantImage: 'shoes-3.jpg',
            }]
    },

    methods:{
        addToCart: function () {
            this.cart +=1;

        },
        removeCart: function () {
            this.cart = this.cart > 0 ? this.cart - 1 : 0;
        },
        updateProduct: function (variantImage) {
            this.image = variantImage

        }
    },


});
var blink_speed = 500; var t = setInterval(function () { var ele = document.getElementById('blinker'); ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden'); }, blink_speed);
