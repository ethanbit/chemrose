<?php
if (!defined('ABSPATH')) {
	exit;
}
?>
<h3>Restriction based on order subtotal</h3>
<tr valign="top" >
    <td class="forminp" colspan="2" style="padding-left:0px">
            <?php
            global $wp_roles;           
            ?>
        <table class="widefat" id="elex_wccr_checkout_restriction_settings" style="width: 60%;">
            <thead>
            <th class="sort">&nbsp;</th>
            <th><?php _e('User Role', 'elex-wc-checkout-restriction'); ?></th>
            <th style="text-align:center;"><?php echo sprintf(__('Min subtotal (%s)', 'elex-wc-checkout-restriction'), get_woocommerce_currency_symbol()); ?></th>
            <th style="text-align:center;"><?php echo sprintf(__('Max subtotal (%s)', 'elex-wc-checkout-restriction'), get_woocommerce_currency_symbol()); ?></th>
            <th style="text-align:center;"><?php _e('Warning Message', 'elex-wc-checkout-restriction'); ?></th>
            <th style="text-align:center;"><?php _e('Enable', 'elex-wc-checkout-restriction'); ?></th>
        </thead>
        <tbody>
            <?php
            $wordpress_roles = $wp_roles->role_names;
            $i=0;
            $decimal_steps = 1;
            $woo_decimal = wc_get_price_decimals();
            for ($temp=0;$temp<$woo_decimal;$temp++) {
                $decimal_steps = $decimal_steps/10;
            }
            $wordpress_roles['unregistered_user'] = 'Unregistered User';
           $user_adjustment_settings = get_option('elex_wccr_checkout_restriction_settings');
            $this->restriction_table = array();
           if (empty($user_adjustment_settings)) {
                foreach ($wordpress_roles as $id => $value) {
                    $this->restriction_table[$i]['id'] = $id;
                    $this->restriction_table[$i]['name'] = $value;
                    $this->restriction_table[$i]['min_price'] = '';
                    $this->restriction_table[$i]['max_price'] = '';
                    $this->restriction_table[$i]['error_message'] = '';
                    $this->restriction_table[$i]['enable_restriction'] = '';
                    $i++;
                }
            } else {
                foreach ($user_adjustment_settings as $id => $value) {
                    if (is_array($wordpress_roles) && key_exists($id, $wordpress_roles)) {
                        $this->restriction_table[$i]['id'] = $id;
                        $this->restriction_table[$i]['name'] = $wordpress_roles[$id];
                        $this->restriction_table[$i]['min_price'] = $this->user_adjustment_settings[$id]['min_price'];
                        $this->restriction_table[$i]['max_price'] = $this->user_adjustment_settings[$id]['max_price'];
                        $this->restriction_table[$i]['error_message'] = $this->user_adjustment_settings[$id]['error_message'];
                        if (key_exists('enable_restriction', $this->user_adjustment_settings[$id])) {
                            $this->restriction_table[$i]['enable_restriction'] = $this->user_adjustment_settings[$id]['enable_restriction'];
                        } else {
                            $this->restriction_table[$i]['enable_restriction'] = '';
                        }
                    }
                    $i++;
                    unset($wordpress_roles[$id]);
                }
                if (!empty($wordpress_roles)) {
                    foreach ($wordpress_roles as $id => $value) {
                        $this->restriction_table[$i]['id'] = $id;
                        $this->restriction_table[$i]['name'] = $value;
                        $this->restriction_table[$i]['min_price'] = '';
                        $this->restriction_table[$i]['max_price'] = '';
                        $this->restriction_table[$i]['error_message'] = '';
                        $this->restriction_table[$i]['enable_restriction'] = '';
                        $i++;
                    }
                }
            }
            foreach ($this->restriction_table as $key => $value) {
                ?>
            <tr>
                <td class="sort">
                        <input type="hidden" class="order" name="elex_wccr_checkout_restriction_settings[<?php echo $this->restriction_table[$key]['id'] ?>]" value="<?php echo $this->restriction_table[$key]['id']; ?>" />
                    </td>
                    <td style="width: 15%;">
                        <label name="elex_wccr_checkout_restriction_settings[<?php echo $this->restriction_table[$key]['id']; ?>][name]" size="35" ><?php echo isset($this->restriction_table[$key]['name']) ? $this->restriction_table[$key]['name'] : ''; ?></label>
                    </td>
                    <td style="text-align:center;">
                        <input type="number" style="width:50% !important;" min="0" step="<?php echo $decimal_steps ?>" name="elex_wccr_checkout_restriction_settings[<?php echo $this->restriction_table[$key]['id']; ?>][min_price]" placeholder="N/A" value="<?php echo isset($this->restriction_table[$key]['min_price']) ? $this->restriction_table[$key]['min_price'] : ''; ?>" />
                        
                    </td>
                    <td style="text-align:center;">
                        <input type="number" style="width:50% !important;" min="0" step="<?php echo $decimal_steps ?>" name="elex_wccr_checkout_restriction_settings[<?php echo $this->restriction_table[$key]['id']; ?>][max_price]" placeholder="N/A" value="<?php echo isset($this->restriction_table[$key]['max_price']) ? $this->restriction_table[$key]['max_price'] : ''; ?>" />
                        
                    </td>
                    <td style="text-align:center;">
                        <textarea name="elex_wccr_checkout_restriction_settings[<?php echo $this->restriction_table[$key]['id']; ?>][error_message]" placeholder="N/A" value="<?php echo isset($this->restriction_table[$key]['error_message']) ? htmlspecialchars($this->restriction_table[$key]['error_message']) : ''; ?>" ><?php echo isset($this->restriction_table[$key]['error_message']) ? htmlspecialchars($this->restriction_table[$key]['error_message']) : ''; ?></textarea>
                        
                    </td>
                    
                    <td style="text-align:center; width: 5%;">
                        <label>
                            <?php $checked = (!empty($this->restriction_table[$key]['enable_restriction']) ) ? true : false; ?>
                            <input type="checkbox" name="elex_wccr_checkout_restriction_settings[<?php echo $this->restriction_table[$key]['id']; ?>][enable_restriction]" <?php checked($checked, true); ?> />
                        </label>
                    </td>
            </tr>
            
            <?php
            }
           
           
            ?>
        </tbody>
    </table>
</td>
</tr>