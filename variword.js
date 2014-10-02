;(function($, window, document, undefined){
	var pluginName = "variword";
	var defaults = {
		delay: 2000,
		duration: 500
	};

	function Plugin(element, options) {
		this.element = $(element);
		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	$.extend(Plugin.prototype, {
		init: function() {
			var list = this.element;

			list.find('li:not(:first-child)').css({visibility: 'visible', opacity: 0});
			list.find('li').wrapInner('<span class="wrapper">');
			list.width(list.width());

			setTimeout(function()
			{
				this.animate(list, list.find('li:first-child'));
			}.bind(this), this.settings.delay);
		},
		animate: function(list, li) {
			var nextLi = li.next();
			if (!nextLi.length) return;

			var curTop = list.position().top;
			var liHeight = li.height();
			var liWidth = nextLi.find('span.wrapper').width();


			list.animate({
				top: curTop - liHeight,
				width: liWidth
			}, {
				queue: false,
				duration: this.settings.duration
			});
			
			li.animate({
				opacity: 0
			}, {
				queue: false,
				duration: this.settings.duration
			});

			nextLi.animate({
				opacity: 1
			}, {
				queue: false,
				duration: this.settings.duration
			});


			// Queue the next one
			setTimeout(function()
			{
				this.animate(list, nextLi);
			}.bind(this), this.settings.delay);
		}
	});

	$.fn[pluginName] = function(options) {
		this.each(function(){
			if (!$.data(this, "plugin_"+pluginName)) {
				$.data(this, "plugin_"+pluginName, new Plugin(this, options));
			}
		});
		return this;
	};
})(jQuery, window, document);
