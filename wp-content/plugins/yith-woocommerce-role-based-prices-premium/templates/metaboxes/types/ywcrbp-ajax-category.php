<?php
if( !defined( 'ABSPATH' ) )
    exit;

extract( $args );

global $post;
$placeholder_txt    =   isset( $placeholder ) ? $placeholder : '';
$is_multiple = isset( $multiple ) && $multiple;
$multiple = ( $is_multiple ) ? 'true' : 'false';

$category_ids = get_post_meta( $post->ID, $id, true );
if( !is_array( $category_ids ) ) {
    $category_ids = explode( ',', get_post_meta( $post->ID, $id, true ) );
}
$json_ids   =   array();

if( $category_ids ){

    foreach( $category_ids as $category_id ){

        $cat_name   =   get_term_by( 'ids', $category_id, 'product_cat' );
        if( !empty( $cat_name ) )
            $json_ids[ $category_id ] = '#'.$cat_name->term_id.'-'.$cat_name->name;
        }
    }

?>

<div id="<?php echo $id ?>-container" <?php if ( isset( $deps ) ): ?>data-field="<?php echo $id ?>" data-dep="<?php echo $deps['ids'] ?>" data-value="<?php echo $deps['values'] ?>" <?php endif ?>>

    <label for="<?php echo esc_attr( $id ); ?>"><?php echo esc_html($label ); ?></label>
    <?php
       if( version_compare( WC()->version, '2.7.0', '>=' ) ):?>
           <select id="<?php echo esc_attr( $id );?>" class="ywcrbp_enhanced_select" multiple="multiple" style="width: 50%;" name="<?php echo esc_attr( $name );?>[]" data-placeholder="<?php esc_attr_e( $placeholder_txt );?>" data-action="yit_role_price_json_search_product_categories">
               <?php

               foreach ( $json_ids as $category_id => $category_name ) {

                       echo '<option value="' . esc_attr( $category_id ) . '"' . selected( true, true, false ) . '>' . $category_name. '</option>';
                   }

               ?>
           </select>
      <?php else:?>

               <input type="hidden" style="width:80%;" class="ywcrbp_enhanced_select" id="<?php echo esc_attr( $id );?>" name="<?php echo esc_attr( $name );?>" data-placeholder="<?php echo $placeholder_txt; ?>" data-action="yit_role_price_json_search_product_categories" data-multiple="<?php echo $multiple;?>" data-selected="<?php echo esc_attr( json_encode( $json_ids ) ); ?>"
                      value="<?php echo implode( ',', array_keys( $json_ids ) ); ?>" />



<?php endif; ?>
    <span class="desc inline"><?php echo $desc ?></span>
</div>

