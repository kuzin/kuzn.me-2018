
var count;

var dribbble = {
    init : function (p, n) {

        dribbble.getShotList(p,n);
        // Paging, when I have time...

    },
    getShotList : function (p, n) {

        // Grab Shots
        $.jribbble.getShotsByPlayerId('Kuzin', function (data) {

            var total = data.total;
            var html = [];
            var pages = Math.ceil(total / n);
            var current_page = p;

            $.each(data.shots, function (i, shot) {
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


            // if ($('#dribbble-nav').is(':empty'))
            //     dribbble.createNav(pages, current_page);


        }, {page: p, per_page: n});
    }
};

var twitter = {
    init : function () {
        $.getJSON("//twitter.com/statuses/user_timeline/kuzin.json?callback=?", function(data) {
            $(".tweet-box").html(data[0].text).tweetLinkify();
        });
    }
};


$(function () {
	// Open external links in a new window
	hostname = window.location.hostname;
	$("a[href^=http]").not("a[href*='" + hostname + "']").addClass('link external').attr('target', '_blank');
});
