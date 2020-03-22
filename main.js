Vue.config.devtools = true;

Vue.component('hello', {
    template: `<h1>Hello</h1>`
});

Vue.component('product', {
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
            </ul>
            <div class="info-bloc">
              <div class="variant-names" v-for="variant in variants" :key="variant.variantId">
                <p @mouseover="updateProduct(variant.variantImage, variant.variantColor, variant.inventory)"> {{variant.variantColor}}</p>
              </div>
            </div>
    
            <div class="addremove-cart">
                <button v-on:click="addToCart">Add to Cart</button>
                <button v-on:click="removeCart">Remove from cart</button>
                <div class="Cart">
                  <p>Cart: {{ cart }}</p>
                </div>
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
            cart: 0,
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

    methods: {
        addToCart: function() {
            this.cart = this.cart < 10 ? this.cart + 1 : 10;
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
    el: "#app"
});
