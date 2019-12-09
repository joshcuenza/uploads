    var executed = false;
    var docHt = $(document).height();
    console.log('raw');
    var triggerXp = docHt / 4;
    if ($(document).scrollTop() > triggerXp && !executed) {
        dataLayer.push({
            "event": "optimize.activate"
        });
        executed = true;
    }