$(document).ready(function(){
    $('form').on('submit', function (e) {
        e.preventDefault();
        let input = $('input').val();
        console.log(input);
        const newTopic = $(`<li>${input}</li>`);
        $(`${input}`).appendTo(newTopic);
        $(newTopic).appendTo('ul');
        $('input').val('');

    })

    $('ul').on('click', 'li', function(){
        $(this).toggleClass("clicked-item");
    })
})

