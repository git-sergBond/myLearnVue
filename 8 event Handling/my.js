var app = new Vue({
	el: '#app',
	data: {
		counter: 0
	}
})
var ex2 = new Vue({
	el: '#ex2',
	data: {
		msg: 'my greeting'
	},
	methods: {
		greet: function (event) {
			alert(this.msg);
			if (event) {
				alert(event.target.tagName);
			}
		},
		say: function(msg){
			alert(msg);
		},
		warn: function(msg, event){
			if(event) event.preventDefault();
			alert(msg);
		}
	}
})