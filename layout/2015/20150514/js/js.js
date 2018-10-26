$ ( function () {
    $ (window) .scroll (function() {
        
        var  value = $ ( this ) .scrollTop ();   // 스크롤 값을 취득
        $ ( '#scrollValue' ) .text (value);
        
        if(value>=100) {
            $("#scrollValue").css("color","red");
        } 
        else { 
             $("#scrollValue").css("color","#000");
        }

        //.text1
        if(value>=400) {
            $(".text1").addClass("text1_on");
        } 
        else { 
             $(".text1").removeClass("text1_on");
        }

        //.slbox1 .srbox1
        if(value>=600) {
            $(".sl_box1").addClass("sl_box1_on");
            $(".sr_box1").addClass("sr_box1_on");            
        } 
        else { 
             $(".sl_box1").removeClass("sl_box1_on");
             $(".sr_box1").removeClass("sr_box1_on");
        }

        //.slbox2 
        if(value>=1300) {
            $(".sl_box2").addClass("sl_box2_on");
        } 
        else { 
             $(".sl_box2").removeClass("sl_box2_on");
        }

        // .srbox3
        if(value>=1500) {
            $(".sr_box2").addClass("sr_box2_on");            
        } 
        else { 
             $(".sr_box2").removeClass("sr_box2_on");
        }

        // .srbox3
        if(value>=2500) {
            $(".s_box3").addClass("s_box3_on");          
        } 
        else { 
             $(".s_box3").removeClass("s_box3_on");
        }

/*
        //  if(value>=0000&&value<=0000) {}
            && 그리고 ㅋㅋ 
            
        // .test1
        if(value>=2300) {
            $(".test1").addClass("test1_on");          
        } 
        else { 
             $(".test1").removeClass("test1_on");
        }

        // .test1
        if(value>=3200) {
            $(".test1").addClass("test1_on1");          
        } 
        else { 
             $(".test1").removeClass("test1_on1");
        }
*/


    
    });
});


