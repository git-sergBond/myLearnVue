var app = new Vue({
    el: '#app-1',
    data: {
        msg: 'first',
        dynamicId: 'v123',
        isButtonDisabled: false,
        color: 'red',
        url:'',
        rawHtml: `<span style="color:red"> {{msg}} </span>`
    }
})