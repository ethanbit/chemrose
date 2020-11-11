jQuery(document).ready(function () {
  var getLogoutLink = logoutUrl;
  jQuery('.nav_logout a').attr('href', getLogoutLink);

  jQuery(document).on('change', 'input.mini_qty', function () {
    console.log('nguyenbaduc');
    let miniCartQty = jQuery(this).val();
    let miniCartKey = jQuery(this).data('cartkey');
    jQuery.ajax({
      type: 'POST',
      dataType: 'json',
      url: besa_settings.ajaxurl,
      data: {
        action: 'update_item_from_cart',
        cart_item_key: miniCartKey,
        qty: miniCartQty,
      },
      success: function (data) {
        if (data) {
          //lert('You missed something');
        } else {
          //alert('Updated Successfully');
          jQuery(document.body).trigger('wc_fragment_refresh');
        }
      },
    });
  });
});
