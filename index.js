$(document).ready(function(){

    let images = $('.slide')
    images.hide()

    let min=0
    let max=images.length-1
    let curr=min

    images.eq(curr).show()



    $('#slide-left').click(()=>{
        images.eq(curr).hide()
        curr--
        if(curr < min) curr=max
        images.eq(curr).show()
        
     })

     $('#slide-right').click(()=>{
        images.eq(curr).hide()
        curr++
        if(curr > max) curr=min
        images.eq(curr).show()
     }) 

     let cur = 0;
     let count = $('.slide').length;

   setInterval(()=>{
    $('.slide').eq(cur).fadeOut(function () {
        $(this).removeClass('active');
        cur = (cur + 1) % count;
        $('.slide').eq(cur).addClass('active').fadeIn();
    });
}, 5000);

})
