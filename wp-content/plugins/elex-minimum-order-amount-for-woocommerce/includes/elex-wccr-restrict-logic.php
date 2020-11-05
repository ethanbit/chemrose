<?php

if (!defined('ABSPATH')) {
	exit;
}

class Elex_restrict_logic {
    public function __construct() {
        add_action( 'woocommerce_check_cart_items', array($this,'elex_wccr_check_cart_quantities') );
    }
    
    function elex_wccr_check_cart_quantities () {
        global $woocommerce;
        $restrictions = get_option('elex_wccr_checkout_restriction_settings');
        if(is_user_logged_in()) {
          $user_role = wp_get_current_user()->roles[0];
        }
        else {
            $user_role = 'unregistered_user';
        }
        $restrict_checkout = FALSE;
        $restrict_msg = '';
        if (is_array($restrictions) && in_array($user_role, array_keys($restrictions)) && isset($restrictions[$user_role]['enable_restriction'])) {
            if($restrictions[$user_role]['min_price'] && ($restrictions[$user_role]['min_price'] > $woocommerce->cart->subtotal)) {
                $restrict_checkout = TRUE;
                  $restrict_msg = $restrictions[$user_role]['error_message'];
            }

            if(!$restrict_checkout && $restrictions[$user_role]['max_price'] && ($restrictions[$user_role]['max_price'] < $woocommerce->cart->subtotal)) {
                $restrict_checkout = TRUE;
                  $restrict_msg = $restrictions[$user_role]['error_message'];
            }
        }
          if ( $restrict_checkout ) 
              wc_add_notice(html_entity_decode ($restrict_msg), 'error' );
    }
}
new Elex_restrict_logic();