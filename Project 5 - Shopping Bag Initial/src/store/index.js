import { createStore } from 'vuex'
import axios from 'axios';


export default createStore({
  state: {
    products: [],
    productsInBag: [],
  },
  mutations: {

    loadProducts(state, products) {
      state.products = products;
    },
    addToBag(state, product) {
      state.productsInBag.push(product);
      localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag))
    },
    loadBag(state, products) {
      state.productsInBag = products;
    },
    removeFromBag(state, productId) {
      var updateBag = state.productsInBag.filter(item => productId != item.id)
      state.productsInBag = updateBag;
      localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag))

    },
  },
  actions: {

    loadProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          commit('loadProducts', response.data);
        })
    },
    loadBag({ commit }) {
      if (localStorage.getItem('productsInBag')) {
        commit('loadBag', JSON.parse(localStorage.getItem('productsInBag')));
      }
    },

    addToBag({ commit }, product) {
      commit('addToBag', product);
    },

    removeFromBag({ commit }, product) {
      if (confirm("Are you sure you want to remove this item from the bag?")) {
        commit('removeFromBag', product);
      }
    },
  },
  modules: {
  }

})
