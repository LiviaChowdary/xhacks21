$(document).ready(function() {
    setInterval(function() {
        $.ajax({
            url: '/time',
            dataType: 'json',
            type: 'POST',
            success: function(data) {
                console.log('success');
                document.getElementById('numberTime').innerHTML = data['time'];
            }
        });
    }, 100);
});