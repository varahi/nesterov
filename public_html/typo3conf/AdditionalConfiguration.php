<?php

// Set DB connections
$GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default'] = array_merge($GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default'], [
    'dbname' => 'typo3_dev',
    'host' => '172.17.0.1',
    'password' => 'dev',
    'port' => '3306',
    'user' => 'dev',
]);