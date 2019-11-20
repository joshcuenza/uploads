$(document).ready(function() {
    var animals = $('section.breadcrumbs>div>div>div>span:nth-child(2)>a').text().trim().toLowerCase();
    if(animals.includes("dog") || animals.includes("cat")){
        ifnotDogCat();
    }
    function ifnotDogCat(){
        var animals = $('section.breadcrumbs>div>div>div>span:nth-child(2)>a').text().trim().toLowerCase();
        Cookies.set('GX-Optimize-experiment', 'GX-23');
        Cookies.set('allcategories', '');
        var cartItems = [];
        var newCategory = [];
        appendItems();
        var clone;
        complete = true;
        var boolX = false;
    $(document).on('click', '.round', function(e){
        e.stopPropagation();
        $(this).each(function() {
            var type = $(this).text().replace(/[ ]/gi,"-").replace(/[&]/gi,'and').toLowerCase();
            analytics.track('WebExperiment Clicks', {
                section: "/" + animals + "/" + type,
                experiment: 'GX-23',
                variation: 'ATC redirect links'
            },function() {
                setTimeout(function() {
                    window.location.pathname = "/" + animals + "/" + type;
                }, 300);
            });
        });
    });
    $(document).on('click', '.gx-item-checkbox', function(){
        $(this).each(function(e){
            e.preventDefault();
            e.stopPropagation();
            $(this).parent().click();
        });
    });
    $(document).on('click', '.mfp-wrap', function(e) {
        cloneCart();
    });
    $('#addToCart').on('click', function() {
        setTimeout(function() {
            cloneCart().done(function() {
                analytics.track('WebExperiment Clicks', {
                    section: 'Add to Cart',
                    experiment: 'GX-23',
                    variation: 'Add to cart button'
                });
            });
        }, 500);

    });
    $(document).on('click', '.add-to-cart-suggested', function() {
        var xt = $(this).parent();
        $(this).each(function() {
            var toCheck_ = xt.find('>.details>h5>a').text();
            var sd = xt.find('>.details>h5>a').attr('href');
            var fnGG;
            var gxVariety = "";
            var tf = $('<div class="gx-ttfy hidden"> </div>').appendTo(xt);
            $('>.gx-ttfy', xt).load('https://www.petcircle.com.au' + sd + ' section.breadcrumbs, li.variety>span', function() {
                var gxTFy = $('>.gx-ttfy.hidden', xt).text();
                var isFood = checkFood(gxTFy);
                isFood?gxVariety = isWetFood(gxTFy): gxVariety = gxTFy;
                fnGG = gxVariety.replace(/[ /\s+]/gi, '') + " " + toCheck_;
                console.log("typeof " + typeof fnGG);
                $('.gx-item-checkbox').each(function() {
                    var gxCategory = $(this).attr('name').toString();
                    console.log('newSets done : ' + gxCategory);
                    if (fnGG.includes(gxCategory)) {
                        console.log('newSets done');
                        $(this).prop('checked', true);
                        $(this).attr('disabled', '');
                    }
                });
                defferedClone().done(cloneCart());
            });

        });

    });
    function isWetFood(food){
        if(food.includes("Wet")){
            return food = "WetFood";
        }
        else{
            return food = "DryFood";
        }
    }
    function checkFood(varietyCheck){
        if(varietyCheck.includes('Food')){
            return true;
        }
        return false;
    }
    function cloneCart(cloning) {
        var f = $.Deferred();
        $('.gx-cloned').each(function() {
            $(this).remove();
        });
        var x = setInterval(function() {
            if ($('.mfp-wrap').length) {
                $('.product-item-container').each(function() {
                    clone.removeClass('hidden').appendTo(this);
                });
            }
        }, 100);
        var v = setInterval(function() {
            if ($('.gx-cloned').length) {
                clearInterval(x);
                clearInterval(v);
            }
        }, 100);
        return f;
    }

    function loadCart() {
        var ajaxRun = $.Deferred();
        $.ajax({
            method: 'GET',
            url: "https://www.petcircle.com.au/my-cart",
            dataType: "html",
        }).done(function(data) {
            var x = $(data).find('.right-wrapper>.details>h5>a');
            x.each(function() {
                cartItems.push($(this).attr('href'));
                $('<div class="gx-varieties hidden">' + cartItems[cartItems.length - 1] + '<span><span></div>').appendTo('#footer');
            });
        });
        console.log('loadCart done');
        return ajaxRun;
    }

    function loadCartItems() {
        var i = 0;
        var x = $.Deferred();
        var v = setInterval(function() {
            if ($('.gx-varieties').length) {
                var y = $('.gx-varieties').length;
                $('.gx-varieties').each(function() {
                    $('>span', this).load("https://www.petcircle.com.au/" + $(this).text() + " section.breadcrumbs, li.variety>span", function(response, status, xhr) {
                        var div = $(this).text().replace(/[ /\s+]/gi, '');
                        var checkedDiv = "";
                        var isFoodL = checkFood(div);
                        isFoodL?checkedDiv = isWetFood(div): checkedDiv = div;
                        newCategory.push(checkedDiv);
                        Cookies.set('allcategories', newCategory);
                        i += 1;
                        console.log('loadCartItems() attempt : ' + i);
                    });
                }).promise().done(function() {

                    var deffered = $.Deferred();
                    var t = setInterval(function() {
                        if (i == y) {
                            boolX = true;
                            categoryChecklist(boolX).done(defferedClone().done(cloneCart()));
                            clearInterval(t);
                        }
                    }, 50);

                    console.log('loadCartItems done');
                    return x;
                });
                clearInterval(v);
            }
        }, 100);
        return x;

    }
    
    function categoryChecklist() {
        var newSets = JSON.stringify(Cookies.getJSON('allcategories')).replace(/[ /\s+]/gi, '');
        var ifCat = $.Deferred();
        $('.gx-item-checkbox').each(function() {
            var gxCategory = $(this).attr('name').toString();
            console.log('newSets done : ' + gxCategory);
            if (newSets.includes(gxCategory)) {
                console.log('newSets done');
                $(this).prop('checked', true);
                $(this).attr('disabled', '');
            }
        });
        return ifCat;
    }

    function currentChecklist() {
        var ixat = $.Deferred();
        var currentCategory = $('section.breadcrumbs').text().toString().replace(/[ /\s+]/gi, '') + $('li.variety>span').text().toString().replace(/[ /\s+]/gi, '');
        var checkedCategory = "";
        var isFoodC = checkFood(currentCategory);
        isFoodC?checkedCategory = isWetFood(currentCategory): checkedCategory = currentCategory;
        $('.gx-item-checkbox').each(function() {
            var gxCategory = $(this).attr('name').toString();
            console.log(gxCategory)
            if (checkedCategory.includes(gxCategory)) {
                console.log('currentCategory done');
                $(this).prop('checked', true);
                $(this).attr('disabled', '');
            }
        });
        return ixat;
    }

    function defferedClone(boolDef) {
        if ($('.gx-cloned').length)
            $('.gx-cloned').each(function() {
                $(this).remove();
            });
        var cloneDef = $.Deferred();
        clone = $('.need-anything-else').clone().addClass('gx-cloned');
        console.log('defferedClone done');
        return cloneDef;
    }

    function appendItems() {
        $('<div id="allCartContent" class="hidden"></div>').appendTo('#footer');
        $('<div class="need-anything-else"> <span><strong>Need anything else?</strong></span> <div class="gx-ul-wrapper"> <ul> <li class="round"><input class=" gx-item-checkbox" disabled name="DryFood" id="dryFoodsCategory" type="checkbox"><label class="gx-label" for="dryFoodsCategory"></label><label class="gx-addons-checkbox gx-href" for="dryFoodsCategory">Dry Food</label> </li> <li class="round"><input class=" gx-item-checkbox" disabled name="WetFood" id="wetFoodsCategory" type="checkbox"><label class="gx-label" for="wetFoodsCategory"></label><label class="gx-addons-checkbox gx-href" for="wetFoodsCategory">Wet Food</label></li> <li class="round"><input class=" gx-item-checkbox" disabled name="Flea&Worming" id="fnwCategory" type="checkbox"><label class="gx-label" for="fnwCategory"></label><label class="gx-addons-checkbox gx-href" for="fnwCategory">Flea &amp; Worming</label> </li> </ul> <ul> <li class="round"><input class=" gx-item-checkbox" disabled name="Treats" id="treatsCategory" type="checkbox"><label class="gx-label" for="treatsCategory"></label><label class="gx-addons-checkbox gx-href" for="treatsCategory">Treats</label> </li> <li class="round"><input class=" gx-item-checkbox" disabled name="Toys" id="toysCategory" type="checkbox"><label class="gx-label" for="toysCategory"></label><label class="gx-addons-checkbox gx-href" for="toysCategory">Toys</label> </li> <li class="round"><input class=" gx-item-checkbox" disabled name="Health" id="healthCategory" type="checkbox"><label class="gx-label" for="healthCategory"></label><label class="gx-addons-checkbox gx-href" for="healthCategory">Health</label> </li> </ul> </div> </div>').appendTo('#footer');
        if ($('section.breadcrumbs>div>div>div>span>a').text().trim().includes('Cat')) {
            $('#healthCategory').parent().remove();
            $(' <li class="round"><input class="gx-item-checkbox" disabled name="Litter" id="litterCategory" type="checkbox"><label class="gx-label" for="litterCategory"></label><label class="gx-addons-checkbox gx-href" for="litterCategory">Litter</label></li>').appendTo('.gx-ul-wrapper>ul:nth-child(2)');
        }
        currentChecklist().done(defferedClone(boolX));
    }
        /*var max = 0;
        var x = setInterval(function() {
            if (complete) {
                $('.gx-href').each(function() {
                    var animals = $('section.breadcrumbs>div>div>div>span:nth-child(2)>a').text().trim().toLowerCase();
                    var type = $(this).text().replace(/[ ]/gi,"-").replace(/[&]/gi,'and').toLowerCase();
                    console.log("animals :" + animals);
                    $(this).parent().click(function(e) {
                        e.stopPropagation();
                        max += 1;
                        if (max == 1) {
                            analytics.track('WebExperiment Clicks', {
                                section: "/" + animals + "/" + type,
                                experiment: 'GX-23',
                                variation: 'ATC redirect links'
                            }, function() {
                                setTimeout(function() {
                                    window.location.pathname = "/" + animals + "/" + type;
                                    clearInterval(x);
                                    return;
                                }, 300);
                            });
                        }
                    });
                });
            }
        }, 100);*/
    loadCart().promise().done(loadCartItems());
    }
});