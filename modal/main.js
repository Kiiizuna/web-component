
var _show = function() {
	var button = e('.button')
	bindEvent(button, 'click', function() {
	log('click')
	showModal()
	})	
}

var _close = function() {
	var close = e('.close')
	bindEvent(close, 'click', function() {
	closeModal()
	})
}

// 点击显示弹窗
// bindEvent(button, 'click', function() {
// 	log('click')
// 	showModal()
// })

bindEvent(window, 'click', function(event) {
	var modal= e('.modal')
	if (event.target === modal) {
		closeModal()
	}
})

var showModal = function() {
	var modal = e('.modal')
	removeClassAll('hidden')
	// 如果不remove show也会覆盖hidden
	modal.classList.add('show')
}

var closeModal = function() {
	var modal = e('.modal')
	removeClassAll('show')
	// 如果不remove show也会覆盖hidden
	modal.classList.add('hidden')
}



var __modal = function() {
	_show()
	_close()
}

__modal()