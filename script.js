

    // $('#btn').click(function () {
    //     $('.item').slideToggle(1000, function () {
    //         $('.box').slideUp(1000).slideDown(1000).hide(1000)
    //     })
    // })
// $(document).ready(function () {
//     $('#btn').click(function () {
//         $('.box').animate({ width: '500px' }, 2000, function () {
//             $('.box').animate({left : '300px'} , 2000)
//         })
//     })
// });

// $(document).ready(function () {
//     // let about = $('#about').offset()
//     let y = $('a[href="#"]').offset()
//     console.log(y);
// });

$(document).ready(function () {
    let homeOffset = $('#home').offset().top
    let contactOffset = $('#contact').offset().top
    let footerOffset = $('#footer').offset().top
    $('#aboutLink').click(function () {
        let aboutOffset = $('#about').offset().top
        $('html , body').animate({scrollTo : aboutOffset} , 3000)
    })
});