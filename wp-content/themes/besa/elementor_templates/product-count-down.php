<?php 
/**
 * Templates Name: Elementor
 * Widget: Product Flash Sales
 */

extract( $settings );

$this->settings_layout();

$this->add_render_attribute('wrapper', 'class', ['products']);
?>

<div <?php echo trim($this->get_render_attribute_string('wrapper')); ?>>
	
	<?php $this->render_element_heading();
	?>
	
    <?php $this->render_content_product_count_down(); ?>

</div>