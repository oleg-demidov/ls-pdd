
(function($) {
    "use strict";

    $.widget( "livestreet.bsButton", $.livestreet.lsComponent, {
        /**
         * Дефолтные опции
         */
        options: {
            selectors:{
                badge:".badge",
                icon:".fa, .far"
            },
            icon_classes:null,
            classes:{
                iconLoader:"fa fa-circle-o-notch fa-spin mr-1"
            }
        },
        
        /**
         * Конструктор
         *
         * @constructor
         * @private
         */
        _create: function() {
            this._super();
            this.option('icon_classes', this.elements.icon.attr('class'));
        },
        
        setCount:function(count){
            let badge = this.element.find(this.option('selectors.badge'))
            if(badge.length){
                if(count < 1){
                    badge.addClass('d-none');
                }else{
                    badge.removeClass('d-none');
                }
                badge.html(count);
            }
        },
        
        loading:function(){
            this.elements.icon.attr('class', this.option('classes.iconLoader') )
        },
        loaded:function(){
            this.elements.icon.attr('class', this.option('icon_classes') )
        }
    });
})(jQuery);