$('head').append(`
<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,400,500,700&display=swap');
    .gx-ul-wrapper>ul>li:last-child{
        display: none;
    }
    .need-anything-else>span {
        background: #33393E;
        color: #FFFFFF;
        padding: 0 10px;
        font: normal 500 20px/40px Roboto;
    }

    .gx-ul-wrapper>ul>li {
        font-size: 0.9em;
        font-size: 0.9em;
        height: 26px;
        margin: 10px 0;
    }

    .gx-ul-wrapper>ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        padding: 0 10px;
        height: 140px;
    }

    .gx-addons-checkbox:hover,
    .need-anything-else input:hover,
    .round .gx-label:after:hover {
        cursor: pointer;
    }

    .tier-incentive-container {
        margin-top: 10px;
    }

    .gx-ul-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .need-anything-else {
        display: flex;
        flex-direction: column;
        margin-top: 10px !important;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
        width: 100%;
        max-width: 500px;
        border: 1px #E5E5E5 solid;
        border-radius: 5px;
    }

    .round {
        position: relative;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .gx-href:hover {
        cursor: pointer;
    }

    label.gx-href {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 27px;
        margin-left: 17px;
        color: #33393E;
        padding-left: 10px;
    }

    .round:hover {
        color: #1CB1B8;
        text-decoration: underline;
    }

    .round .gx-label {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        height: 20px;
        left: 0;
        position: absolute;
        top: 3px;
        width: 20px;
    }

    .round .gx-label:after {
        border: 2px solid #fff;
        border-top: none;
        border-right: none;
        content: "";
        height: 4px;
        left: 5px;
        opacity: 0;
        position: absolute;
        top: 6px;
        transform: rotate(-55deg);
        width: 8px;
    }

    .round input[type="checkbox"] {
        visibility: hidden;
    }

    .round input[type="checkbox"]:checked+.gx-label {
        background-color: #1CB1B8;
        border-color: #1CB1B8;
    }

    .round input[type="checkbox"]:checked+.gx-label:after {
        opacity: 1;
    }
</style>
`);

if ($('.need-anything-else').length < 1) {
    $('.form.right-wrapper').append(`<div class="need-anything-else"> <span><strong>Essentials in your cart</strong></span>
        <div class="gx-ul-wrapper">
            <ul>
                <li class="round"><input class="gx-item-checkbox" disabled name="DryFood" id="dryFoodsCategory"
                        type="checkbox"><label class="gx-label" for="dryFoodsCategory"></label><label
                        class="gx-addons-checkbox gx-href" for="dryFoodsCategory">Dry Food</label>
                </li>
    
                <li class="round"><input class="gx-item-checkbox" disabled name="WetFood" id="wetFoodsCategory"
                        type="checkbox"><label class="gx-label" for="wetFoodsCategory"></label><label
                        class="gx-addons-checkbox gx-href" for="wetFoodsCategory">Wet Food</label>
                </li>
    
                <li class="round"><input class="gx-item-checkbox" disabled name="Treats" id="treatsCategory"
                        type="checkbox"><label class="gx-label" for="treatsCategory"></label><label
                        class="gx-addons-checkbox gx-href" for="treatsCategory">Treats</label>
                </li>
    
                <li class="round"><input class="gx-item-checkbox" disabled name="Toys" id="toysCategory"
                        type="checkbox"><label class="gx-label" for="toysCategory"></label><label
                        class="gx-addons-checkbox gx-href" for="toysCategory">Toys</label>
                </li>
    
                <li class="round"><input class="gx-item-checkbox" disabled name="Flea&Worming" id="fnwCategory"
                        type="checkbox"><label class="gx-label" for="fnwCategory"></label><label
                        class="gx-addons-checkbox gx-href" for="fnwCategory">Flea &amp; Worming</label>
                </li>
    
                <li class="round"><input class="gx-item-checkbox" disabled name="Health" id="healthCategory"
                        type="checkbox"><label class="gx-label" for="healthCategory"></label><label
                        class="gx-addons-checkbox gx-href" for="healthCategory">Health</label>
                </li>
                <li class="round"><input class="gx-item-checkbox gx-kitten" disabled name="Litter" id="litterCategory"
                        type="checkbox"><label class="gx-label" for="litterCategory"></label><label
                        class="gx-addons-checkbox gx-href" for="litterCategory">Litter</label>
                </li>
            </ul>
        </div>
    </div>`);
}


$('body').append(`
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
`);