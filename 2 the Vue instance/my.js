var d = {message:"1"}
var vm1 = new Vue({
    el: '#vm-1',
    data: d
})
var vm2 = new Vue({
    el: '#vm-2',
    data: d
})
var vm3 = new Vue({
    el: '#vm-3',
    data: d
})

var o = {
    foo: 'foo'
}
//Object.freeze(o);
var vm4 = new Vue({
    el: "#vm-4",
    data: o,
    //Хук
    created: function(){
        console.log("VM4")
    }
})
//Коллбек
vm4.$watch('foo',function(new_v,old_v){
    document.writeln("change")
})