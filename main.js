var app = new Vue({
el:'#app',
    data:{
        product: 'Pink Shoes',
        image: 'shoes-1.jpg',
        inventory: 100,
        inStock: false,
        onSale:true,
        details:["Vegan Leather","Best Shoes on the market", "Made with love"],
        cart:0,
        variants:[{
            variantId: 2234,
            variantColor: 'Pink flames',
            variantImage: 'shoes-1.jpg',
            inventory:20

        },
            {
                variantId: 2235,
                variantColor: 'Mary jane',
                variantImage: 'shoes-2.jpg',
                inventory: 8
            },
            {
                variantId: 2236,
                variantColor: 'Butterly fantasy',
                variantImage: 'shoes-3.jpg',
                inventory: 20
            }]
    },

    methods:{
        addToCart: function () {
            this.cart +=1;

        },
        removeCart: function () {
            this.cart = this.cart > 0 ? this.cart - 1 : 0;
        },
        updateProduct: function (variantImage,variantColor,inventory) {
            this.image = variantImage,
            this.product = variantColor
            this.inventory = inventory

        }
    },


});
var blink_speed = 500; var t = setInterval(function () { var ele = document.getElementById('blinker'); ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden'); }, blink_speed);
