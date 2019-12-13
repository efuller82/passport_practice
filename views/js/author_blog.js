$(document).ready(function() {
    $.ajax({
        dataType: 'json',
        url: '/blogs/all',
        data: data,
        success: console.log('success');
    })
    console.log('page works');
})