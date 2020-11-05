<?php
/*
 * Plugin Name: ELEX Minimum Order Amount for WooCommerce
 * Plugin URI: https://elextensions.com/plugin/elex-minimum-order-amount-for-woocommerce-free/
 * Description: This plugin helps you to configure minimum and maximum order amount based on WordPress user roles.
 * Version: 1.0.8
 * Author: ELEXtensions
 * Author URI: https://elextensions.com
 * Text Domain: elex-wc-checkout-restriction
 * WC requires at least: 2.6
 * WC tested up to: 4.6
 */

if (!defined('ABSPATH')) {
    exit;
}
// Check if woocommerce is active
if (!in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins')))) {
    return;
}
add_filter('plugin_action_links_' . plugin_basename(__FILE__) , 'elex_wccr_plugin_action_links');
function elex_wccr_plugin_action_links($links) {
			$plugin_links = array(
				'<a href="' . admin_url( 'admin.php?page=wc-settings&tab=elex-wccr' ) . '">' . __( 'Settings', 'elex-wc-checkout-restriction' ) . '</a>',
                '<a href="https://elextensions.com/support/" target="_blank">' . __('Support', 'elex-wc-checkout-restriction') . '</a>'
			);
			return array_merge($plugin_links, $links);
		}
                
                add_action('init', 'elex_wccr_admin_menu');
                function elex_wccr_admin_menu () {
                    require_once 'includes/elex-wccr-frontend-template.php';
                    require_once 'includes/elex-wccr-restrict-logic.php';
                }
                
                add_action('admin_menu', 'elex_wccr_admin_menu_option');
                
                function elex_wccr_admin_menu_option() {
                    add_submenu_page('woocommerce', __('Minimum Order Amount', 'elex-wc-checkout-restriction') , __('Minimum Order Amount', 'elex-wc-checkout-restriction') , 'manage_woocommerce', 'admin.php?page=wc-settings&tab=elex-wccr');
                }