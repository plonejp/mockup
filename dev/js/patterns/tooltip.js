define(["jquery","mockup-patterns-base"],function(a,b){"use strict";var c=b.extend({name:"tooltip",defaults:{attribute:"class",event_enter:"mouseenter",event_exit:"mouseleave"},init:function(){var a=this;a.on(a.options.event_enter,function(b){b.stopPropagation(),a.show.apply(a,[b])}),a.on(a.options.event_exit,function(b){b.stopPropagation(),a.hide.apply(a,[b])})},closest:function(b,c){var d;return a.each(b.parents(),function(b,e){return d=a(c,e),0!==d.size()?!1:void 0}),d},show:function(b){var c=a(b.target).attr("href");this.closest(this.$el,c).addClass("active")},hide:function(b){var c=a(b.target).attr("href");this.closest(this.$el,c).removeClass("active")}});return c});