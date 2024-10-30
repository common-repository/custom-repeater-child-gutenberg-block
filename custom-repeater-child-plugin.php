<?php
/*
 * Plugin Name: Custom Repeater Child Gutenberg Block
 * Plugin URI: https://plugins.svn.wordpress.org/custom-repeater-child-gutenberg-block
 * Description: Custom Repeater Child or Inner Dynamic Block Creation With Font-Size and Font-Color Options.
 * Author: Jay Upadhyay
 * Author URI: https://profiles.wordpress.org/jayupadhyay01
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * @package CGB
 */


function repeater_inner_block_example_backend_enqueue() {
    wp_enqueue_script(
        'repeater-inner-block-example-backend-script', // Unique handle.
        plugins_url( '/block.build.js', __FILE__ ), // block.js: We register the block here.
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ) // Dependencies, defined above.
    );

    register_block_type( 'repeater-inner-block-example-backend-css/css', array(
        'editor_script' => 'repeater-inner-block-example-backend-script',
    ) );

}
add_action( 'enqueue_block_editor_assets', 'repeater_inner_block_example_backend_enqueue' );

function repeater_inner_block_example_style_enqueue() {
    wp_register_style(
        'repeater-inner-block-example-backend-css',
        plugins_url( '/editor.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
    );
    wp_register_style(
        'repeater-inner-block-example-frontend-css',
        plugins_url( '/stylesheet.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'stylesheet.css' )
    );
    register_block_type( 'mdlr-block-static-jsx-example-backend-css/css', array(
        'editor_style' => 'repeater-inner-block-example-backend-css',
        'style' => 'repeater-inner-block-example-frontend-css',
    ) );
}
add_action( 'init', 'repeater_inner_block_example_style_enqueue' );

