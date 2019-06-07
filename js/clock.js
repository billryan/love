(function(){

    var meet   = moment("2014-01-13T18:00:00+08:00"),
        inlove = moment("2016-03-24T08:00:00+08:00");

    function updateClock(){
        var now = moment();

        meet_years   = now.diff(meet, 'years');
        // meet_months  = now.diff(meet, 'months');
        meet_days    = now.diff(meet, 'days');
        meet_hours   = now.diff(meet, 'hours') % 24;
        meet_minutes = now.diff(meet, 'minutes') % 60;
        meet_seconds = now.diff(meet, 'seconds') % 60;
        $("#meet_years").text(meet_years);
        // $("#meet_months").text(meet_months);
        $("#meet_days").text(meet_days);
        $("#meet_hours").text(meet_hours);
        $("#meet_minutes").text(meet_minutes);
        $("#meet_seconds").text(meet_seconds);

        inlove_years   = now.diff(inlove, 'years');
        // inlove_months  = now.diff(inlove, 'months');
        inlove_days    = now.diff(inlove, 'days');
        inlove_hours   = now.diff(inlove, 'hours') % 24;
        inlove_minutes = now.diff(inlove, 'minutes') % 60;
        inlove_seconds = now.diff(inlove, 'seconds') % 60;
        $("#inlove_years").text(inlove_years);
        // $("#inlove_months").text(inlove_months);
        $("#inlove_days").text(inlove_days);
        $("#inlove_hours").text(inlove_hours);
        $("#inlove_minutes").text(inlove_minutes);
        $("#inlove_seconds").text(inlove_seconds);
    }

    function timedUpdate () {
        updateClock();
        setTimeout(timedUpdate, 1000);
    }

    timedUpdate();
})();

