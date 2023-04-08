const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            description: 'Green socks',
            url: 'https://google.com',
            inventory: 7,
            onSale: true,
        }
    }
});

app.mount('#app');