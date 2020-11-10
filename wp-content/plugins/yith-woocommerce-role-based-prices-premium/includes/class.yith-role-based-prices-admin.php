<?php
if ( !defined( 'ABSPATH' ) )
    exit;

if ( !class_exists( ' YITH_Role_Based_Prices_Admin' ) ) {

    class YITH_Role_Based_Prices_Admin
    {

        protected static $instance;

        /**
         * YITH_Role_Based_Prices_Admin constructor.
         */
        public function __construct()
        {
            add_action( 'woocommerce_admin_field_select-customer-role', array( $this, 'show_custom_type' ) );
            add_action( 'woocommerce_admin_field_show-prices-user-role', array( $this, 'show_prices_user_type' ) );
            add_action( 'pre_update_option', array( $this, 'update_custom_message' ), 20, 3 );
            add_action( 'admin_enqueue_scripts', array( $this, 'include_admin_script' ) );

        }

        /**
         * Returns single instance of the class
         * @author YITHEMES
         * @return \YITH_Role_Based_Prices_Admin
         * @since 1.0.0
         */
        public static function get_instance()
        {
            if ( is_null( self::$instance ) ) {
                self::$instance = new self();
            }

            return self::$instance;
        }

        /**show custom type
         * @author YITHEMES
         * @since 1.0.0
         */
        public function show_custom_type( $option )
        {

            wc_get_template( 'admin/select-customer-role.php', array( 'option' => $option ), '', YWCRBP_TEMPLATE_PATH );
        }

        /**show custom type
         * @author YITHEMES
         * @since 1.0.0
         */
        public function show_prices_user_type( $option )
        {

            wc_get_template( 'admin/show-prices-user-role.php', array( 'option' => $option ), '', YWCRBP_TEMPLATE_PATH );
        }

        /**
         * add script and style in admin
         * @author YITHEMES
         * @since 1.0.0
         */
        public function include_admin_script()
        {
            global $pagenow;
            

            if ( !isset( $_GET[ 'post' ] ) )
                global $post;
            else
                $post = $_GET[ 'post' ];

            $right_post_type = ( isset( $post ) && get_post_type( $post ) === 'yith_price_rule' ) || ( isset( $_GET[ 'post_type' ] ) && 'yith_price_rule' === $_GET[ 'post_type' ] ) || ( isset($_GET['page'] ) && 'yith_vendor_role_based_prices_settings' === $_GET['page']);
            $suffix = !( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '.min' : '';

            wp_enqueue_script( 'ywcrbp_admin', YWCRBP_ASSETS_URL . 'js/ywcrbp_admin' . $suffix . '.js', array( 'jquery' ), YWCRBP_VERSION );
            wp_enqueue_script( 'wc-enhanced-select' );
            
            
            if($pagenow != 'user-new.php' OR $pagenow != 'customize.php'){
                wp_enqueue_script( 'woocommerce_admin', WC()->plugin_url() . '/assets/js/admin/woocommerce_admin' . $suffix . '.js', array( 'jquery', 'jquery-blockui', 'jquery-ui-sortable', 'jquery-ui-widget', 'jquery-ui-core', 'jquery-tiptip' ), WC_VERSION );
            }

            $locale  = localeconv();
            $decimal = isset( $locale['decimal_point'] ) ? $locale['decimal_point'] : '.';

            $params = array(
                'i18n_decimal_error'                => sprintf( __( 'Please enter in decimal (%s) format without thousand separators.', 'woocommerce' ), $decimal ),
                'i18n_mon_decimal_error'            => sprintf( __( 'Please enter in monetary decimal (%s) format without thousand separators and currency symbols.', 'woocommerce' ), wc_get_price_decimal_separator() ),
                'i18n_country_iso_error'            => __( 'Please enter in country code with two capital letters.', 'woocommerce' ),
                'i18_sale_less_than_regular_error'  => __( 'Please enter in a value less than the regular price.', 'woocommerce' ),
                'decimal_point'                     => $decimal,
                'mon_decimal_point'                 => wc_get_price_decimal_separator()
            );

            wp_localize_script( 'woocommerce_admin', 'woocommerce_admin', $params );

            if ( ( isset( $_GET[ 'page' ] ) && $_GET[ 'page' ] == 'yith_wcrbp_panel' ) || $right_post_type ) {

                wp_enqueue_style( 'ywcrbp_style', YWCRBP_ASSETS_URL . 'css/ywrbp_admin.css', array(), YWCRBP_VERSION );

            }

            if ( $right_post_type ) {

                wp_enqueue_script( 'ywcrbp_enhanceselect', YWCRBP_ASSETS_URL . 'js/ywcrbp_enhancedcselect' . $suffix . '.js', array( 'jquery', 'select2' ), YWCRBP_VERSION, true );

                $ywcrbp = array(
                    'i18n_matches_1' => _x( 'One result is available, press enter to select it.', 'enhanced select', 'woocommerce' ),
                    'i18n_matches_n' => _x( '%qty% results are available, use up and down arrow keys to navigate.', 'enhanced select', 'woocommerce' ),
                    'i18n_no_matches' => _x( 'No matches found', 'enhanced select', 'woocommerce' ),
                    'i18n_ajax_error' => _x( 'Loading failed', 'enhanced select', 'woocommerce' ),
                    'i18n_input_too_short_1' => _x( 'Please enter 1 or more characters', 'enhanced select', 'woocommerce' ),
                    'i18n_input_too_short_n' => _x( 'Please enter %qty% or more characters', 'enhanced select', 'woocommerce' ),
                    'i18n_input_too_long_1' => _x( 'Please delete 1 character', 'enhanced select', 'woocommerce' ),
                    'i18n_input_too_long_n' => _x( 'Please delete %qty% characters', 'enhanced select', 'woocommerce' ),
                    'i18n_selection_too_long_1' => _x( 'You can only select 1 item', 'enhanced select', 'woocommerce' ),
                    'i18n_selection_too_long_n' => _x( 'You can only select %qty% items', 'enhanced select', 'woocommerce' ),
                    'i18n_load_more' => _x( 'Loading more results&hellip;', 'enhanced select', 'woocommerce' ),
                    'i18n_searching' => _x( 'Searching&hellip;', 'enhanced select', 'woocommerce' ),
                    'ajax_url' => admin_url( 'admin-ajax.php', is_ssl() ? 'https' : 'http' ),
                    'search_categories_nonce' => wp_create_nonce( YWCRBP_SLUG . '_search-categories' ),
                    'plugin_nonce' => '' . YWCRBP_SLUG . '',
                    'is_wc_2_7' => version_compare( WC()->version, '2.7.0', '>=' )
                );

                wp_localize_script( 'ywcrbp_enhanceselect', 'ywcrbp_enhanceselect', $ywcrbp );
            }
        }

        /**
         * before update custom message, remove html tag
         * @author YITHEMES
         * @since 1.0.0
         * @param $value
         * @param $option
         * @param $old_value
         * @return string
         */
        public function update_custom_message( $value, $option, $old_value )
        {

            if ( 'ywcrbp_message_user' === $option ) {
                $value = htmlspecialchars( stripslashes( $value ) );
            }

            return $value;
        }
    }
}

/**
 * 
 * @author YITHEMES
 * @return YITH_Role_Based_Prices_Admin
 * @since 1.0.0
 */
function YITH_Role_Based_Admin()
{
    return YITH_Role_Based_Prices_Admin::get_instance();
}

