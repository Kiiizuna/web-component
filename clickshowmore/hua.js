var log = function() {
	console.log.apply(console, arguments)
}

var e = function(selector) {
	return document.querySelector(selector)
}

var bindEvent = function(element, event, callback) {
	return element.addEventListener(event, callback)
}


var toggleClass = function(className, element) {
	if (element.classList.contains(className)) {
		element.classList.remove(className)
	} else {
		element.classList.add(className)
	}
}