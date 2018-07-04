// 绑定单个事件
// var bindEventToggle = function() {
// 	var btn = e('.btn')
// 	var content = e('.content')
// 	log(btn)
// 	bindEvent(btn, 'click', function() {
// 		log('111')
// 		log('click button')
// 		toggleClass('hidden',content)
// 	})
// 	// btn.addEventListener('click', function() {
// 	// 	log('test')
// 	// })
// }
// bindEventToggle()


// 以下是绑定多个事件, p和e 是为了找到toggleClass的变量
var bindEventToggleAll = function() {
	bindAll('.btn', 'click', function(event) {
		var p = event.target.parentElement
		var e = findElement(p, '.content')
		toggleClass('hidden',e)	
	})
}

bindEventToggleAll()