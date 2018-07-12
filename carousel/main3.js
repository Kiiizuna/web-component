


	// 1, 给btn 绑定事件
	// 2, 移除当前有active 的img 标签并取得新下标
	// 3, 给下一个加上active
var __carousel = function() {
	// var nextBtn = e('#id-btn')
	var nextPic = function() {
		var f = e(".container")
		var imgActiveIndex = parseInt(f.dataset.active )
		var imgNumbers = parseInt(f.dataset.imgs)
		var nextIndex = (imgActiveIndex + 1) % imgNumbers
		f.dataset.active = nextIndex
		var nextSelector = "#hua-imgs-" + String(nextIndex)
		var className = 'active'
		removeClassAll(className)
		var nextClass = e(nextSelector)
		log("nextClass", nextClass)
		nextClass.classList.add(className)
		// 当点击下一张时, indi 随着图片一起变化
		var classNameIndi = 'white'
		removeClassAll(classNameIndi)
		var nextIndiSelector = "#id-indi-" + nextIndex
		var target = e(nextIndiSelector)
		target.classList.add(classNameIndi)
	}

	bindAll('#id-btn-next', 'click', function(event) {
		log('next click')
		// var f = event.target.parentElement	
		// var imgActiveIndex = parseInt(f.dataset.active )
		// var imgNumbers = parseInt(f.dataset.imgs)
		// var nextIndex = (imgActiveIndex + 1) % imgNumbers
		// f.dataset.active = nextIndex
		// var nextSelector = "#hua-imgs-" + String(nextIndex)
		// var className = 'active'
		// removeClassAll(className)
		// var nextClass = e(nextSelector)
		// nextClass.classList.add(className)
		// // 当点击下一张时, indi 随着图片一起变化
		// var classNameIndi = 'white'
		// removeClassAll(classNameIndi)
		// var nextIndiSelector = "#id-indi-" + nextIndex
		// var target = e(nextIndiSelector)
		// target.classList.add(classNameIndi)
		nextPic()
	})	

	// 给上一张绑定事件
	bindAll('#id-btn-pre', 'click', function(event) {
		log('pre click')
		var f = event.target.parentElement	
		var imgActiveIndex = parseInt(f.dataset.active )
		var imgNumbers = parseInt(f.dataset.imgs)
		var preIndex = new Number()
		if (imgActiveIndex === 0) {
			preIndex = 2
		} else {
			preIndex = imgActiveIndex - 1
		}
		f.dataset.active = preIndex
		var preSelector = "#hua-imgs-" + String(preIndex)
		var className = 'active'
		removeClassAll(className)
		var preClass = e(preSelector)
		preClass.classList.add(className)
		// 当点击上一张时, indi 随着图片一起变化
		var classNameIndi = 'white'
		removeClassAll(classNameIndi)
		var preIndiSelector = "#id-indi-" + preIndex
		var target = e(preIndiSelector)
		target.classList.add(classNameIndi)
	})	

	// 给indicator 绑定事件
	//1, 给点击到的div 加上.white class
	//2, 和图片绑定切换关系
	bindAll('.hua-indi', 'click', function(event) {
		log('hua-indi click')
		// var container = e('.container')	
		//1, 给点击到的div 加上.white class
		var classNameIndi = 'white'
		removeClassAll(classNameIndi)
		var target = event.target
		target.classList.add(classNameIndi)
		//2, 和图片绑定切换关系
		var f = target.parentElement
		// var indiWhiteIndex = parseInt(f.dataset.white)
		var indis = es(".hua-indi")
		log('1111',indis[1])
		log('indis is ', indis)
		log("target is", target)
		// if (indis[2] === target) {log('hhh')}
		var j = new Number()
		for (var i = 0; i < indis.length; i++) {
			var r = indis[i]
			log("r",r)
			if (r === target) {
				log('i is', i)
				j = i
			};
		};
		var activeSelector = "#hua-imgs-" + j
		log(activeSelector)
		var className = 'active'
		removeClassAll(className)
		var activeImg = e(activeSelector)
		activeImg.classList.add(className)
	})	
// 自动播放
	var numId = null
	var autoPlay = function() {
		numId = setInterval(function() {
			nextPic()
		},1500)
	}
	autoPlay()

	// 鼠标移上去停止自动播放
	bindAll('.container', 'mouseenter', function() {
		log("鼠标在上面")
		clearInterval(numId)
	})
	bindAll('.container', 'mouseleave', function() {
		autoPlay()
	})

}


// 调用轮播
__carousel()