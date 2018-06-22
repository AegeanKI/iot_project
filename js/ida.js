 $(function(){
        csmapi.set_endpoint ('http://140.113.199.200:9999');
        
        // var profile = {
        //     'dm_name': 'Bulb',          
        //     'idf_list':[],
        //     'odf_list':[[Luminance], [Color_O]],

        // };
        var profile = {
            'dm_name': 'project7',          
            'idf_list':[LED_position],
            'odf_list':[degree],         
        };

        var r = 255 ;
        var g = 255;
        var b = 0;
        var lum = 100;

        var bulb = [0, 0, 0, 0];
        function draw (degree, num) {
            // var rr = Math.floor((r * lum) / 100);
            // var gg = Math.floor((g * lum) / 100);
            // var bb = Math.floor((b * lum) / 100);
            // console.log("(r,g,b)=(",r,g,b,")")
            if((degree < 300 && num != 4)|| (degree > 28 && num == 4)){
                bulb[num-1] = 1;
                $('[id^=bulb'+num+']').children().css(
                    {'background': 'rgb('+ 255 +', '+ 0 +', '+ 0 +')'}
                );
            }
            else{
                bulb[num-1] = 0;
                $('[id^=bulb'+num+']').children().css(
                    {'background': 'rgb('+ 0 +', '+ 255 +', '+ 0 +')'}
                );
            }
            var flag = 0;
            for (var i = bulb.length - 1; i >= 0; i--) {
                if(bulb[i] == 1)
                    flag = 1;
            }
            if(flag)
                $('legend').css({'background': 'rgb(255,0,0)'});
            else
                $('legend').css({'background': 'rgb(0,255,0)'});

            // $('#bulb4').children().css({'background' : 'rgb(255,0,0)'})
        }
        
        function LED_position(){
            console.log(bulb);
            return bulb;
        }


        // function Luminance (data){
        //     console.log(data);
        //     // $('font')[0].innerText=data[0];
        //     lum = data[0];
        //     draw();
        // }

        function degree (data){
            //$('font')[0].innerText=data[0];
            console.log(data);
            light_degree = data[0];
            bulb_num = data[1];
            draw(light_degree, bulb_num);
        }
      
/*******************************************************************/                
        function ida_init(){}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
