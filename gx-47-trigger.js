$(document).ready(function () {
    var executed = false;
    var docHt = $(document).height();
    var triggerXp = docHt / 4;
    if ($(document).scrollTop() > triggerXp && !executed) {
        dataLayer.push({
            "event": "optimize.activate"
        });
        executed = true;
    }
});