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


// 以下是绑定多个事件, 
var bindEventToggleAll = function() {
	bindAll('.item-img', 'mouseenter', function(event) {
		// var p = event.target.parentElement
		// var e = findElement(p, '.content')
		// toggleClass('hidden',e)
		log('mouseenter')	
		var img = event.target
		img.classList.add('highlight')
	})

	bindAll('.item-img', 'mouseout', function(event) {
		// var p = event.target.parentElement
		// var e = findElement(p, '.content')
		// toggleClass('hidden',e)
		log('mouseout')	
		var img = event.target
		img.classList.remove('highlight')
	})
}

bindEventToggleAll()