Vue.config.devtools = true;

Vue.component('hello', {
    template: `<h1>Hello</h1>`
});

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    template: `
    <div class="wrapper">
          <div class="product-description">
            <h1>{{product}}</h1>
            <img v-bind:src="image">
          </div>
    
          <div class="product-info">
          
            <p v-if="inventory > 10">In Stock</p>
            <p v-else>Out of Stock</p>
            <span id="blinker" class="onsale" v-if="onSale">On sale!</span>
            <ul>
              <li class="details" v-for="detail in details"> {{detail}}</li>
              <li class="details">Shipping: {{ shipping }}</li>
            </ul>
            <div class="info-bloc">
              <div class="variant-names" v-for="variant in variants" :key="variant.variantId">
                <p @mouseover="updateProduct(variant.variantImage, variant.variantColor, variant.inventory)"> {{variant.variantColor}}</p>
               
              </div>
              
            </div>
    
            <div class="addremove-cart">
                <button v-on:click="addToCart">Add to Cart</button>
                <button v-on:click="removeCart" :disabled="this.card === 0" :click="removeCart">Remove from cart</button>
             
            </div>
          </div>
        </div>
   `,
    data() {
        return {
            product: "Pink Shoes",
            image: "shoes-1.jpg",
            inventory: 100,
            inStock: false,
            onSale: true,
            details: ["Vegan Leather", "Best Shoes on the market", "Made with love"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "Pink flames",
                    variantImage: "shoes-1.jpg",
                    inventory: 20
                },
                {
                    variantId: 2235,
                    variantColor: "Mary jane",
                    variantImage: "shoes-2.jpg",
                    inventory: 8
                },
                {
                    variantId: 2236,
                    variantColor: "Butterly fantasy",
                    variantImage: "shoes-3.jpg",
                    inventory: 20
                }
            ]
        };
    },

    computed: {
        shipping(){
            if(this.premium){
                return "Free"
            }else{
                return 2.99
            }
        }
    },

    methods: {
        addToCart: function() {
            this.$emit('add-to-cart')
        },
        removeCart: function() {
            this.cart = this.cart > 0 ? this.cart - 1 : 0;
        },
        updateProduct: function(variantImage, variantColor, inventory) {
            (this.image = variantImage),
                (this.product = variantColor),
                (this.inventory = inventory);
        }
    }
});


var app = new Vue({
    el: "#app",
    data:{
        premium: true,
        cart: 0
    },
    method:{
        updateCart(){
            this.cart = this.cart < 10 ? this.cart + 1 : 10;
        }
    }
});
