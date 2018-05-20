
new Vue({ 
	el: '#components-demo',
	data:{
		curentView: 'menu'
	},
	methods:{
		SwitchView: function(view){
			this.curentView = view;
		}
	}
})
//анкетирование
Vue.component('cliker1', {
	data: function () {
	  return {
		count: 0
	  }
	},
	template: '#cliker1-tmp'
})
//конфг тестов
Vue.component('cliker2', {
	data: function () {
	  return {
		count: 0
	  }
	},
	template: '#cliker2-tmp'
})