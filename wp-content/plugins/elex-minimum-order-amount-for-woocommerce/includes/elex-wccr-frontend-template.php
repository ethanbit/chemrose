<?php

if (!defined('ABSPATH')) {
	exit;
}

require_once( WP_PLUGIN_DIR . '/woocommerce/includes/admin/settings/class-wc-settings-page.php' );

class Elex_WCCR_Settings extends WC_Settings_Page {
    public function __construct() {
        global $user_adjustment_settings;
        $this->init();
        $this->id = 'elex-wccr';
    }
    public function init() {
        $this->user_adjustment_settings = get_option('elex_wccr_checkout_restriction_settings', array());
        add_filter('woocommerce_settings_tabs_array', array($this, 'elex_wccr_add_settings_tab'), 50);
        add_filter('woocommerce_settings_elex-wccr', array($this, 'elex_wccr_output_settings'));
        add_action('woocommerce_update_options_elex-wccr', array($this, 'elex_wccr_update_settings'));
        add_action('woocommerce_admin_field_checkoutrestrictiontable', array($this, 'elex_wccr_admin_field_checkoutrestrictiontable'));
    }
    public function elex_wccr_add_settings_tab ($settings_tabs) {
        $settings_tabs['elex-wccr'] = __('Minimum Order Amount', 'elex-wc-checkout-restriction');
        return $settings_tabs;
    }
    public function elex_wccr_output_settings() {
        $settings = $this->elex_wccr_get_settings();
        WC_Admin_Settings::output_fields($settings);
    }
    public function elex_wccr_update_settings () {
        $options = $this->elex_wccr_get_settings();
        woocommerce_update_options($options);
        $this->user_adjustment_settings = get_option('elex_wccr_checkout_restriction_settings', array());
    }
    public function elex_wccr_admin_field_checkoutrestrictiontable($settings) {
        include( 'elex-wccr-restriction-table.php' );
    }

    public function elex_wccr_get_settings () {
        $settings = array(
            'elex_restricton_settings' => array(
                'type' => 'checkoutrestrictiontable',
                'id' => 'elex_wccr_checkout_restriction_settings',
                'value' => ''
            ),
        );
        return $settings;
    }
}
new Elex_WCCR_Settings();