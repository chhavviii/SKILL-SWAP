$(document).ready(function() {
    // Load content based on navigation
    $('a.nav-link').click(function(event) {
        event.preventDefault();
        const href = $(this).attr('href');
        $('#content').load(href);
    });

    // Load initial content
    $('#content').load('listings.html');
});
