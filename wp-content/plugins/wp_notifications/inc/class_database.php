<?php 
class WpNotificationDB {
	public function installTable(){
		$this->_add_devices_table();
		$this->_add_group_table();
		$this->_add_history_table();
		$this->_add_woochange_table();
	}

	private function _add_devices_table(){
    global $wpdb;
    $number_of_tables = $wpdb->query(
      $wpdb->prepare("SHOW TABLES LIKE '{$wpdb->prefix}notifications_devices'")
    );
    $checkExistTable = (bool) (1 == $number_of_tables);

    if (!$checkExistTable) {
      $sql = "CREATE TABLE {$wpdb->prefix}notifications_devices (
							`id` BIGINT( 20 ) NOT NULL AUTO_INCREMENT,
              `device_id` TEXT,
							`user_id` BIGINT( 20 ) NOT NULL ,
              `device_type` TINYINT( 1 ) NOT NULL,
              `status` TINYINT( 1 ) NOT NULL,
              `device_os` VARCHAR( 255 ) DEFAULT NULL,
              `is_notify` TINYINT( 1 ) NOT NULL DEFAULT '1',
              `update_date` int DEFAULT NULL,
              `register_date` int NOT NULL DEFAULT '0',
							PRIMARY KEY  ( id ),
							UNIQUE KEY `id` (`id`)
						) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;";

      require_once ABSPATH . 'wp-admin/includes/upgrade.php';
      dbDelta($sql);
    }

    return;
  }

	private function _add_group_table(){
    global $wpdb;
    $number_of_tables = $wpdb->query(
      $wpdb->prepare("SHOW TABLES LIKE '{$wpdb->prefix}notifications_groups'")
    );
    $checkExistTable = (bool) (1 == $number_of_tables);

    if (!$checkExistTable) {
      require_once ABSPATH . 'wp-admin/includes/upgrade.php';
      $sql = "CREATE TABLE {$wpdb->prefix}notifications_groups (
							`id` int NOT NULL AUTO_INCREMENT,
							`name` varchar(255) DEFAULT NULL,
							PRIMARY KEY (`id`)
						) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;";

			dbDelta($sql);
			
      $sql = "CREATE TABLE {$wpdb->prefix}notifications_groups_users (
							`id` int NOT NULL AUTO_INCREMENT,
							`group_id` int DEFAULT NULL,
							`user_id` int DEFAULT NULL,
							PRIMARY KEY (`id`)
						) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;";

      dbDelta($sql);
    }

    return;
  }

	private function _add_history_table(){
    global $wpdb;
    $number_of_tables = $wpdb->query(
      $wpdb->prepare("SHOW TABLES LIKE '{$wpdb->prefix}notifications_history'")
    );
    $checkExistTable = (bool) (1 == $number_of_tables);

    if (!$checkExistTable) {
      require_once ABSPATH . 'wp-admin/includes/upgrade.php';
      $sql = "CREATE TABLE {$wpdb->prefix}notifications_history (
							`id` int NOT NULL AUTO_INCREMENT,
							`type` varchar(20) NOT NULL,
							`user_id` int DEFAULT NULL,
							`group_id` int DEFAULT NULL,
							`count` int NOT NULL,
							`success` int NOT NULL,
							`created_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
							PRIMARY KEY (`id`)
						) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;";

			dbDelta($sql);
    }

    return;
  }

	private function _add_woochange_table(){
    global $wpdb;
    $number_of_tables = $wpdb->query(
      $wpdb->prepare("SHOW TABLES LIKE '{$wpdb->prefix}notifications_woo_change'")
    );
    $checkExistTable = (bool) (1 == $number_of_tables);

    if (!$checkExistTable) {
      require_once ABSPATH . 'wp-admin/includes/upgrade.php';
      $sql = "CREATE TABLE {$wpdb->prefix}notifications_woo_change (
							`id` int NOT NULL AUTO_INCREMENT,
							`action` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
							`type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
							`object_id` int NOT NULL,
							`timestamp` int NOT NULL,
							`date_time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
							PRIMARY KEY (`id`)
						) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;";

			dbDelta($sql);
    }

    return;
  }
}