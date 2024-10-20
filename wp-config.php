<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'shams' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'z&@xS>zjx%TZMGpAW@MvyB-R+dO<qIG^S&Vs!MXL(bBPst%r/uTx$XS.HjVV}Gx+' );
define( 'SECURE_AUTH_KEY',  ':ddd2)P]s&K@A*yQNe]siGiyDw1:+`g))rp{PeZXxU#N-snS Iy.4Kp ?}?lZo w' );
define( 'LOGGED_IN_KEY',    '/Sc=CCo0u/CV/RdI9u7#]hcNOMf[;E+PDX#]S*0]1G-I!sXZE |_ZA~u][P.!5z,' );
define( 'NONCE_KEY',        '_g=77HZ*9HbDO*.;_)yAP5[^Y`]5h1P:vs>A }-].9<fU?iZovdjpOPC(0D X3S2' );
define( 'AUTH_SALT',        'hvaXlJ;/K:(-|Ws|]#i jR=L6Om[P%*$z5i<a*;Xu$u?t|9wwQM[~4vA-Y94>$El' );
define( 'SECURE_AUTH_SALT', 'G=V/(hs(kK~8=12u+azre-|>,sFjIwOh[y)Vl7S=@b[|tTLA!kX/E.Jw%AfIBde#' );
define( 'LOGGED_IN_SALT',   'YjA5z8Wx=9/2-k1?q`C(&`o4#pIhYs6O0`9/cY{xlxD&3K-}dL.f< Ev~^rZ#@= ' );
define( 'NONCE_SALT',       'w5j5+i8_![JNH[^[BOV?<&hnxiznwUT6Sfjq4*80Lu51#y,fd#|p2ht2V[lp4$t,' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
