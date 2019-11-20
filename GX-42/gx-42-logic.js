<script>
var breadCrumbs = [];
var validated = false;


firstAttempt();

function firstAttempt() {
    breadCrumbs = [];
    validated = false;
    $('.right-wrapper>.details>h5>a').each(function () {
        var self = $(this);
        var a = $(this).attr('href');
        var x = $('<div></div>');
        var y = $('<div></div>');
        x.load(a + ' span[itemprop="itemListElement"]>a,  .variety>span', function () {
            var xtoCheck = x.text().trim();
            breadCrumbs.push(xtoCheck);
            if ($('.gx-listeners', self).length < 1)
                itemListeners(xtoCheck, self);
            validated = true;
        });
    });
}


var currentItemsOnCart = $('.right-wrapper>.details>h5>a').length;

function itemListeners(toCheck, tableRow) {
    var listener = $('<div class="gx-listeners">' + toCheck + '</div>');
    $(tableRow).append(listener);
}
var z = setInterval(function () {
    if (validated) {
        $('.gx-addons-checkbox').each(function () {
            var category = $(this).text();
            if (breadCrumbs.toString().includes(category)) {
                $(this).siblings('.gx-item-checkbox').attr('checked', '');
            }
        });
        clearInterval(z);
    }
}, 1000);

//NO TOUCH FOR ABOVE;



var currentItemsOnCart = $('.right-wrapper>.details>h5>a').length;
$('.close.close-wrapper').on('click', function () {
    $(document).ajaxStop(function () {
        var content = $(this).siblings('.details').find('h5>a>.gx-listeners').text();
        var d = setInterval(function () {
            var filtered = breadCrumbs.filter(function (loaded) {
                return loaded != content;
            });
            breadCrumbs = filtered;
            console.log('itemsDone');
            firstAttempt();
            if ($('.gx-listeners').length) {
                console.log('clearingInterval');
                return;
            }
        }, 1000);
    });

});

</script>