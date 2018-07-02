
var btn = e('.btn')
var content = e('.content')

bindEvent(btn, 'click', function() {
	log('click button')
	toggleClass('hidden',content)
})

