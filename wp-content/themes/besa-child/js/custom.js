jQuery(document).ready(function () {
	var getLogoutLink = logoutUrl;
	jQuery(".nav_logout a").attr("href", getLogoutLink);

	jQuery(".dh_quantity input").each(function () {
		if (jQuery(this).parent(".box").length) return;
		jQuery(this).wrap('<span class="box"></span>');
		jQuery(
			`<button class="minus" type="button" value="&nbsp;">${besa_settings.quantity_minus}</button>`
		).insertBefore(jQuery(this));
		jQuery(
			`<button class="plus" type="button" value="&nbsp;">${besa_settings.quantity_plus}</button>`
		).insertAfter(jQuery(this));
	});

	jQuery("#tbay-header").on("click", ".dh_plus, .dh_minus", function () {
		var qty = jQuery(this).closest(".dh_quantity").find(".mini_qty"),
			currentVal = parseFloat(qty.val()),
			max = jQuery(qty).attr("max"),
			min = jQuery(qty).attr("min"),
			step = jQuery(qty).attr("step");
		currentVal =
			!currentVal || currentVal === "" || currentVal === "NaN" ? 0 : currentVal;
		max = max === "" || max === "NaN" ? "" : max;
		min = min === "" || min === "NaN" ? 0 : min;
		step =
			step === "any" ||
			step === "" ||
			step === undefined ||
			parseFloat(step) === NaN
				? 1
				: step;

		if (jQuery(this).is(".dh_plus")) {
			if (max && (max == currentVal || currentVal > max)) {
				qty.val(max);
			} else {
				qty.val(currentVal + parseFloat(step));
			}
		} else {
			if (min && (min == currentVal || currentVal < min)) {
				qty.val(min);
			} else if (currentVal > 0) {
				qty.val(currentVal - parseFloat(step));
			}
		}

		jQuery(this).parent().find("input").trigger("change");
	});

	jQuery(document).on("change", "input.mini_qty", function () {
		console.log("nguyenbaduc");
		let miniCartQty = jQuery(this).val();
		let miniCartKey = jQuery(this).data("cartkey");
		jQuery.ajax({
			type: "POST",
			dataType: "json",
			url: besa_settings.ajaxurl,
			data: {
				action: "update_item_from_cart",
				cart_item_key: miniCartKey,
				qty: miniCartQty,
			},
			success: function (data) {
				if (data) {
					//lert('You missed something');
				} else {
					//alert('Updated Successfully');
					jQuery(document.body).trigger("wc_fragment_refresh");
				}
			},
		});
	});
});
