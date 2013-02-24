"use strict";

if (typeof KokkoSuite === 'undefined')
{
    var KokkoSuite =
	{
	    utils:
		{
		    //pass width or height and get the corresponding window length
		    getWindowAxisLength: function (axis) {
		        if (axis.toLowerCase() === 'width') {
		            axis = 'Width';
		        }

		        else if (axis.toLowerCase() === 'height') {
		            axis = 'Height';
		        }

		        var axisLength = 0;

		        if (document.body && document.body['offset' + axis]) {
		            axisLength = document.body['offset' + axis];
		        }

		        if (document.compatMode == 'CSS1Compat' &&
					document.documentElement &&
					document.documentElement['offset' + axis]) {
		            axisLength = document.documentElement['offset' + axis];
		        }
		        if (window.innerWidth && window.innerHeight) {
		            axisLength = window['inner' + axis];
		        }

		        return axisLength;
		    },

		    //This checks when a namespace is ready, and when ready, fires  (namespace should be passed as a string)
		    NamespaceReady: function (namespace, callbacks) {
		        //fields
		        this.namespace = namespace;
		        this.callbacks = callbacks;
		        this.ready = false;

		        var self = this;

		        this.start = function () {
		            if (!this.ready) {
		                setTimeout(this.onReady, 100);
		            }

		            else {
		                //deletes the object
		                delete this;
		            }
		        };

		        this.onReady = function () {
		            if (this[namespace]) {
		                for (var i = 0; i < self.callbacks.length; i++) {
		                    self.callbacks[i]();
		                    self.ready = true;
		                }
		            }

		            self.start();
		        };

		        this.start();

		        return this;
		    },

		    Sizing:
			{
			    functions: [],

			    runAll: function () {
			        for (var i = 0; i < this.functions.length; i++) {
			            this.functions[i]();
			        }
			    },

			    functionNames: [],

			    addFunction: function (newFunction, functionName) {
			        KokkoSuite.utils.Sizing.functions.push(newFunction);
			        KokkoSuite.utils.Sizing.functionNames.push(functionName);
			    }
			},

		    AllReady: function (values, callback) {
		        this.values = values;
		        this.callback = callback;
		        var self = this;

		        this.startTimer = function () {
		            setTimeout(self.timerCallback, 100);
		        };

		        this.timerCallback = function () {
		            var allReady = true;

		            for (var i = 0; i < self.values.length; i++) {
		                if (!self.values[i].ready) {
		                    allReady = false;
		                    break;
		                }
		            }

		            if (!allReady) {
		                self.startTimer();
		            }

		            else {
		                self.callback();
		            }
		        };

		        return this;
		    }
		},

	    //Depending on what libraries you list, it will perform certain functions
	    appInit: function (libraryList) {
	        for (var i = 0; libraryList !== undefined && i < libraryList.length; i++) {
	            if (libraryList[i].toLowerCase() === 'senchatouch') {
	                KokkoSuite.utils.Sizing.addFunction(function () {
	                    Ext.each(Ext.DomQuery.select('.x-toolbar .x-title > .x-innerhtml'), function (value, index) {
	                        value.style.width = Math.floor(KokkoSuite.utils.getWindowAxisLength('width') / 2) + 'px';
	                    });
	                }, 'titlebars');

	                KokkoSuite.utils.Sizing.addFunction(function () {
	                    if (Ext.DomQuery.select('#error-view')[0]) {
	                        Ext.DomQuery.select('#error-view')[0].style.width = KokkoSuite.utils.getWindowAxisLength('width') + 'px';
	                    }
	                }, 'errorViewWidthListener');

	                //run sizing
	                KokkoSuite.utils.Sizing.runAll();
	            }
	        }

	        window.onresize = function () {
	            KokkoSuite.utils.Sizing.runAll();
	        };

	        //Adds contains function to String prototype
	        if (typeof String.prototype.contains === 'undefined') {
	            String.prototype.contains = function (it) {
	                return this.indexOf(it) != -1;
	            };
	        }

	        KokkoSuite.utils.Sizing.runAll();
	    }
	};
}