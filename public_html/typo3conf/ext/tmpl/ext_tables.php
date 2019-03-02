<?php
defined('TYPO3_MODE') || die('Access denied.');

/**
 * Page TS Config
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig
('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tmpl/Configuration/TSConfig/page.ts">');

/**
 * add some basic User TS Config
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig
('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tmpl/Configuration/TSConfig/user.ts">');

/**
 * Main Typoscript
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('tmpl', 'Configuration/TypoScript', 'Site Template');

/**
 *  Configuration ce for tables
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_tmplcemainslider_item');