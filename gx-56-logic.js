"use strict";
$('head').append('<style> li.product-item.product { min-height: 325px !important; } ul#productListing { display: flex; justify-content: flex-start; flex-wrap: wrap; margin-left: -15px; margin-right: -15px; } .quick-add-to-cart { padding: 0; width: 100%; background: #EFEB63; border: 2px solid #EFEB63; box-sizing: border-box; border-radius: 4px; font-family: Arial; font-size: 14px; line-height: 16px; color: #4A4A4A; height: 51px; font-weight: normal; } .product-item.product .wrap .details div.price .product-range-price span { display: block; font-family: Helvetica; font-size: 18px; line-height: 18px; color: #4A4A4A; margin-bottom: 9px; font-weight: bold; } .product-item.product .wrap .details h3.product-name span { text-transform: capitalize; } .product-tags-rrp-wrapper, .product-price-wrapper { display: none !important; } .add-product .content .product-list .product figure { height: 142px; margin-bottom: 23px; } .rating { display: none !important; } .ui-cart .checkout-funnel form#checkout-form .your-cart #got-everything-you-need .carousel .product-list .product .product-inner .details h3 { min-height: 88px; } li.product.product-item { margin-bottom: -35px !important; } .product-grid-item { order: -1; flex-basis: 25%; max-width: none; margin-bottom: 40px; padding-left: 0; margin-right: 0; padding: 0 15px; max-width: 225px; } #got-everything-you-need>h3 { font-family: "Arial"; font-weight: bold; font-size: 18px; line-height: 20px; color: #4A4A4A; margin-bottom: 15px; } .product.myCart { display: none; } .product.myCart.to-keep { display: block !important; } @media screen and (max-width: 970px) { .ui-cart .checkout-funnel form#checkout-form .your-cart #got-everything-you-need .carousel .product-list .product-grid-item { flex-basis: 33%; } .ui-cart .checkout-funnel form#checkout-form .your-cart #got-everything-you-need .carousel .product-list .product { flex-basis: 33%; } } @media (max-width: 900px) { .ui-cart .checkout-funnel form#checkout-form .your-cart #got-everything-you-need .carousel .product-list .product { min-width: 225px; } .ui-cart .checkout-funnel form#checkout-form .your-cart #got-everything-you-need .carousel .product-list .product-grid-item { min-width: 225px; } } @media (max-width: 768px) { .ui-cart .checkout-funnel form#checkout-form .your-cart #got-everything-you-need .carousel.add-product.hidden-xs { display: block !important; } fieldset.sizes-wrapper-mobile{ min-width: 100%; } .ui-cart .checkout-funnel form#checkout-form .your-cart #got-everything-you-need .carousel .product-list { display: flex; justify-content: flex-start; flex-wrap: nowrap; margin-left: -15px; margin-right: -15px; overflow-x: auto; } } @media screen and (max-width: 411px) { .ui-cart .checkout-funnel form#checkout-form .your-cart #got-everything-you-need { display: block; } } </style>');
if($('#previousPurchaseGO').length <1)
    $('body').append('<script id="previousPurchaseGO">$(document).ready(function () { var prevPurchaseValidate = new XMLHttpRequest(); prevPurchaseValidate.onreadystatechange = function () { if (this.readyState == 4 && this.status == 200) { dataLayer.push({ "event": "gtm.previouspurchase" }); } if (this.status == 404) { } }; prevPurchaseValidate.open("GET", "https://www.petcircle.com.au/s1/productinnavigationpage?totalItemShows=32&orderType=POINTS_BASED&pageNumber=1&petName=null-pet&brandName=&searchQueryBase64=&categoryName=&searchCacheKey=&pageType=previouslypurchased&hiddenSections=&hiddenNavTags=&minPrice=&maxPrice=&pref=&prefb=&contextPath=%2Fpreviouslypurchased", false); prevPurchaseValidate.send(); });</script>');
var prevPurchaseReq = new XMLHttpRequest();
prevPurchaseReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        var x = document.createElement('DIV');
        x.innerHTML = data;
        var ul = document.createElement('UL');
        ul.setAttribute('id', 'productListing');
        document.querySelector('#got-everything-you-need div.content').appendChild(ul);
        var len = x.querySelectorAll(".product-grid-item");
        var i = 0;
        var j = $('<div></div>');
        var listSet = len.forEach(function (list) {
            var skuChecker = list.querySelectorAll('.sizes-wrapper>input');
            skuChecker.forEach(function (buttonSku) {
                if (document.getElementById(buttonSku.getAttribute('id'))) {
                    list.remove();
                } else {
                    if (j.length < 4) {
                        list.querySelector('.quick-add-to-cart').innerHTML = "Add to Cart";
                        list.querySelector('.quick-add-to-cart').setAttribute('data-material-before', 'add');
                        $(list.querySelector('.quick-add-to-cart')).addClass('recommendedItems');
                        $('.recommendedItems[data-sku-name="' + buttonSku.getAttribute('id') + '"]').parents('.product.myCart').remove();
                        j.push(list);
                    }
                }
            });
        });
        
        $('#recommended-items').append(j);
        var prevPurchaseLength = $('.product-grid-item').length;
        var geynLength = $('.product.myCart').length;
        var toShow = geynLength - prevPurchaseLength;
        for (i = 0; i < toShow; i++) {

            $('.product.myCart:eq(' + i + ')').addClass('to-keep');
        }
    }
    if (this.status == 404) {
        console.log('NOT CONNECTING');
    }
};

prevPurchaseReq.open("GET", "https://www.petcircle.com.au/s1/productinnavigationpage?totalItemShows=32&orderType=POINTS_BASED&pageNumber=1&petName=null-pet&brandName=&searchQueryBase64=&categoryName=&searchCacheKey=&pageType=previouslypurchased&hiddenSections=&hiddenNavTags=&minPrice=&maxPrice=&pref=&prefb=&contextPath=%2Fpreviouslypurchased", false);
prevPurchaseReq.send();


$(document).on('click', '.select-sizes', function () {
    var currentSize = $(this);
    if (currentSize.hasClass('active'))
        return false;
    var skuId = currentSize.attr('id');
    var productParent = currentSize.parents('.product-grid-item');
    var productCode = productParent.find('.product-code');
    currentSize.parent().find('.active').removeClass('active');
    currentSize.addClass('active');
    productParent.find('.quick-add-to-cart').attr('data-sku', skuId).removeClass('added').text('Add to Cart');
    loadSku(skuId, productCode.html(), productCode.index('.product-code'));
});

$('.select-wrapper>select').on('change', function () {
    var _sku = $('>option:selected', this).attr('id');
    var productParent = $(this).parents('.product-grid-item');
    var productCode = productParent.find('.product-code');
    productParent.find('.quick-add-to-cart').attr('data-sku', _sku).removeClass('added').text('Add to Cart');
    loadSku(_sku, productCode.html(), productCode.index('.product-code'));
});
$('.recommendedItems.quick-add-to-cart').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var _self = $(this);
    if (_self.hasClass('added'))
        return false;
    var _sku = _self.attr('data-sku');
    _self.addClass('added');
    _self.text('Added to Cart');
    analytics.track('WebExperiment Clicks', {
        'section': 'Add to cart from Previous Purchase',
        'experiment': 'GX-56',
        'variant': 'variant 2'
    }, null, function () {
        PCCart.addItems([{
            skuName: _sku,
            quantity: 1,
            frequency: -1
        }], null, afterModifyCart);
    });

});

function afterModifyCart(data, skus) {
    if (skus.constructor === Array) {
        for (var i = 0; i != skus.length; i++) {
            $('#' + escapeCssSelector(skus[i].skuName)).html(data);
        }
    } else {
        $('#' + escapeCssSelector(skus)).html(data);
    }
    refreshYourCart();
    SHIBA_COMPONENTS.loadCartSummary();
    refreshFreeItems();
};

function refreshYourCart() {
    var cartDetails = {}
    if (AUTO_DELIVERY.adHeaderId !== -1) {
        cartDetails.cartFilePath = "/s1/purchase/auto-delivery-group/auto-delivery-group.jspf";
        cartDetails.componentWrapper = $('.auto-delivery-group-wrapper');
        $('#cart-items .auto-delivery-group[data-adheaderid=' + AUTO_DELIVERY.adHeaderId + ']').remove();
    } else {
        cartDetails.cartFilePath = "/s1/purchase/your-cart.jspf";
        cartDetails.componentWrapper = $('#cart-items .cart-items-wrapper');
    }
    loadCartContent(cartDetails);
}

function refreshFreeItems() {
    $.ajax({
        type: "POST",
        url: "/s1/purchase/free-item-list.jspf",
        dataType: 'html',
        success: function (data) {
            $('.free-item-line').each(function () {
                $(this).remove();
            });
            $('table.order-details-table > tbody:last > tr:last').after(data);
        },
        error: function (data) {
            warningMsg('Sorry, something has gone wrong.');
        }
    });
}

function loadCartContent(loadCartDetail) {
    loadCartDetail.componentWrapper.load(loadCartDetail.cartFilePath, function (html) {
        $('.no-item').remove();
        if ($(html).data('has-item') === 0) {
            $('.cart-items-table').hide();
            $('<p class="no-item">No items in cart</p>').appendTo('.cart-heading');
            if (AUTO_DELIVERY.adHeaderId != -1) {
                AUTO_DELIVERY.adHeaderId = -1;
            }
        } else {
            $('.cart-items-table').show();
        }
        PCCart.refreshCartTotalsHeader();
    });
}

function loadSku(skuId, productCode, index) {
    var _url = "/product/" + productCode + "/" + skuId;
    var first = '<div class="product-tags-wrapper"><span>';
    var second = '</span></div>';
    var autoDeliverPrice = $('<span></span>');
    autoDeliverPrice.load(_url + ' li.auto-delivery span.product-price', function () {
        var priceUpdate = $('>span.product-price', this).html();
        $('.product-range-price.none-active-free-shipping:eq(' + index + ')').html(first + priceUpdate + second);
    });
}