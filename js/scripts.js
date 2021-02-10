$(document).ready(function() {
                    $('#mycarousel').carousel({ interval: 2000 });
                    $('#carouselButton').click(function() {
                        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                        $("#mycarousel").carousel('pause');
                        $("#carouselButton").children("span").removeClass('fa-pause');
                        $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');   
                }                 
                });
        });

        //script for Login Modal 

        $(document).ready(function(){
            $("#loginButton").click(function(){
                $("#loginModal").modal();
                });
            });

        //script for Reserve Table
            $(document).ready(function(){
                $('#reserve-table').click(function()
                {
                    $('#ReservetableModal').modal('show');
                });
            });