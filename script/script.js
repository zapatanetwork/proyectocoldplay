var miflecha = document.querySelector("#subir")
    miflecha.addEventListener("click",untotop)
    function untotop() {
        var mipagina = document.querySelector("html")
        mipagina.scrollTo(0,0)
    }


    $(document).ready(function() {
        $('#subir').hide(0);
        
                $(window).scroll(function(){
                        var windowHeight = $(window).scrollTop();

                        if(windowHeight >= 200  ){
                            $('#subir').fadeIn(10);
                        }else{
                            $('#subir').fadeOut(10);
                        }
                });
        
        });