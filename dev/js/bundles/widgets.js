window.jQuery&&define("jquery",[],function(){"use strict";return window.jQuery}),define(["jquery","mockup-registry","mockup-patterns-base","mockup-patterns-select2","mockup-patterns-pickadate","mockup-patterns-relateditems","mockup-patterns-querystring"],function(a,b,c){"use strict";var d=c.extend({name:"plone-widgets",init:function(){}});return window.parent===window&&a(document).ready(function(){a("body").addClass("pat-plone-widgets"),b.scan(a("body"))}),d});