<script setup>
import Books from './components/Books.vue';

let books = [
  
        {
          id: 1,
          title: "History of Europe",
          cover:
            "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-6-540x861.jpg",
          isRead: true,
          isbn: "0-395-07157-8",
          author: "Daniel Trejo",
        },
        {
          id: 2,
          title: "Penguin Classics",
          cover:
            "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-2-540x861.jpg",
          isRead: false,
          isbn: "0-395-07157-8",
          author: "Daniel Trejo, Jon Snow",
        },
        {
          id: 3,
          title: "Becoming",
          cover:
            "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-7-540x861.jpg",
          isRead: false,
          isbn: "0-395-07157-8",
          author: "Daniel Trejo",
        },
        {
          id: 4,
          title: "Sonnets",
          cover:
            "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-5-540x861.jpg",
          isRead: false,
          isbn: "0-395-07157-8",
          author: "Daniel Trejo",
        },
];

</script>

<template>

<div class="container">
    <h1>📖 Meus Livros</h1>
    <div class="header-btns">
      <button
        class="btn"
        
      >
        Adicionar Livro +
      </button>
    </div>

    <div class="books-container">
      
      <Books :books="books" />
     
    </div>
  </div>

</template>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
