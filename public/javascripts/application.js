$(function () {

	// Open external links in a new window
	hostname = window.location.hostname
	$("a[href^=http]")
	  .not("a[href*='" + hostname + "']")
	  .addClass('link external')
	  .attr('target', '_blank');

    $.jribbble.getShotsByPlayerId('kuzin', function (shots) {

        var html = [];

         $.each(shots.shots, function (i, shot) {
            html.push('<li class="drib" id="' + shot.id + '">');
            html.push('<a href="' + shot.short_url + '">');
            html.push('<img src="' + shot.image_url + '" alt="' + shot.title + '"/>');
            html.push('<div class="dribble-desc">');
            html.push('<strong>' + shot.title + '</strong>');
            html.push('<ul class="dribble-stats">');
            html.push('<li class="likes">' + shot.likes_count + '</li>');
            html.push('<li class="comments">' + shot.comments_count + '</li>');
            html.push('<li class="views">' + shot.views_count + '</li>');
            html.push('</div></ul></a></li>');
        });

        $('#portfolio ul').html(html.join(''));
    }, {page: 1, per_page: 12});

});
