( function($) {
    let scale = 1,
        deg=0;


    //jQuery ui plugin for input type="range"
    $( "#domino-speed" ).slider({
        min: 1,
        max: 50,
        change: function(event, ui) {
            let speedRotate = ui.value / 10;
            $(".domino__bone").css("transition",`all ${speedRotate}s ease-in-out`);
        }
    });
    $( "#domino-size" ).slider({
        min: 100,
        max: 200,
        change: function(event, ui) {
            scale = ui.value / 100;
            $(".domino__bone").css("transform",`rotate(${deg}deg) scale(${scale})`);
        }
    });

    $(document).ready( function(){

        //choose half bone for check numbers
        $(".bone__half").on("click", function() {
            const boneHalfs = $(".bone__half");

            $.map(boneHalfs, function(elem) {
                $(elem).removeAttr("data-choose" );
            });

            $(this).attr("data-choose", true);
        });

        //choose number half of bone
        $(".domino__choose").on("click", ".domino__btn", function(){
            const num = $(this).attr("data-num"),
                  boneHalfs = $(".bone__half");

            $.map(boneHalfs, function(elem) {
                if( $(elem).attr("data-choose") ) {
                    $(elem).children("table").removeAttr('class');
                    $(elem).children("table").addClass(num);
                }
            });
        });

        //reset setting for bone
        $(".domino__new").on("click", function(){
           $(".domino__bone").removeAttr("style");

           $(".bone__half").each(function(){
              $(this).removeAttr("data-choose");
              $(this).children("table").removeAttr('class');
           });

           $(".bone__up ").attr("data-choose", true).children("table").addClass("one");
           $(".bone__down ").children("table").addClass("three");

           scale = 1;
           deg = 0;

           $( "#domino-speed" ).slider("value", 1);
           $( "#domino-size" ).slider("value", 100);
        });

        (function($) {
            const domino = $(".domino__bone");

            //rotate bone
            $(".domino__right").on("click", function(){
                deg += 90;
                domino.css("transform",`rotate( ${deg}deg) scale(${scale})`);
            });

            $(".domino__left").on("click", function(){
                deg -=90;
                domino.css("transform",`rotate( ${deg}deg) scale(${scale})`);
            });

        })(jQuery);

    });

} )(jQuery);
