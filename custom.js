$(document).ready(function(){

  $('button#submit').click(function(){
    let userName=$('input#fname').val()
    
    
    if(userName===""){
        alert("you have not filled your username")
    }
    else {
        alert(`${userName}, we have received your message.Thank you for reaching out`)

    } 
   
});


    $("#image1").hover(function(){
      $(".text1").toggle();        
  })
   $("#image2").hover(function(){
      $(".text2").toggle();       
  })
    $("#image3").hover(function(){
      $(".text3").toggle();         
  })
    $("#image4").hover(function(){
      $(".text4").toggle();        
  })
    $("#image5").hover(function(){
     $(".text5").toggle();      
  })
    $("#image6").hover(function(){
      $(".text6").toggle();     
  })
    $("#image7").hover(function(){
      $(".text7").toggle();         
  })
    $("#image8").hover(function(){
      $(".text8").toggle();      
  })
  });
  

  $(document).ready(function(){
      $("#design").onclick(function(){
        $("#img-design").show();
      }).click(function(){
        $("#img-design").hide();
      });
    })
    $(document).ready(function(){
      $("#img-design").click(function(){
        $("#img-design").hide('1000');
        $("#design").show('1500');
      });
      $("#design").click(function(){
        $("#design").hide('1500');
        $("#img-design").show('1500');
      });
    });
  
    $(document).ready(function(){
      $("#img-development").click(function(){
        $("#img-development").hide('1000');
        $("#development").show('1500');
      });
      $("#development").click(function(){
        $("#development").hide('1500');
        $("#img-development").show('1500');
      });
    });
  
    $(document).ready(function(){
      $("#img-product").click(function(){
        $("#img-product").hide('1000');
        $("#product").show('1500');
      });
      $("#product").click(function(){
        $("#product").hide('1500');
        $("#img-product").show('1500');
      });
    });
  
    