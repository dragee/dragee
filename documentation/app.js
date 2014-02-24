(function (global, $, undefined) {
	var $win = $(window),
		$nav = $('.subnav'),
		navTop = $('.subnav').length && $('.subnav').offset().top - 40,
		isFixed = 0,
		processScroll = function () {
			var i, scrollTop = $win.scrollTop()
			if (scrollTop >= navTop && !isFixed) {
				isFixed = 1;
				$nav.addClass('subnav-fixed');
			} else if (scrollTop <= navTop && isFixed) {
				isFixed = 0;
				$nav.removeClass('subnav-fixed');
			}
		};

	$nav.on('click', function () {
		if (!isFixed) setTimeout(function () {
			$win.scrollTop($win.scrollTop() - 47);
		}, 10)
	})
	$win.on('scroll', processScroll);
	processScroll();

//	window.prettyPrint && prettyPrint()
})(window, jQuery);


(function (global, $, undefined) {
		var $win = $(window),
		$demoRows = $('.demo-row'),
		template = $("#codeViewTemplate")[0].innerHTML,
		removeTab = function(text){
			var reg=/^(\t+)\S+.*/gmi,match,dTabCount=99999;
			while(match = reg.exec(text)){
				dTabCount > match[1].length && (dTabCount = match[1].length);
			}
			return text.replace(new RegExp("^\\t{"+dTabCount+"}","gmi"),"").replace(/\t/gmi,"  ");
		};

	$demoRows.each(function(i,row){
		var $row = $(row),
		$demo = $row.find('.demo-span'),
		$demoHtml = $demo.find('.demo-html'),
		$demoCss = $demo.find('style'),
		$demoJs = $demo.find('script'),
		$code = $row.find('.code-span'),
		demoId = $demoHtml[0].id,
		view = {
			id: demoId,
			html:removeTab($demoHtml[0].outerHTML),
			css:removeTab($demoCss[0].innerHTML),
			js:removeTab($demoJs[0].innerHTML)
		},
		output = Mustache.render(template, view);
		$code.append(output);

	});

	window.prettyPrint && prettyPrint()
})(window, jQuery);
