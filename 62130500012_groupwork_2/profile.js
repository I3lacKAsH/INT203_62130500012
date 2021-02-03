const app = {
    data() {
        return {
            firstname: 'Khomsan',
            lastname: 'Chuechuphaeng',
            info: '#IT25',
            imgUrl: './images/khomsan.jpeg'
        }
    },
}

var mountedApp = Vue.createApp(app).mount('#app')

