<?php
defined('TYPO3_MODE') or die();

// Add new fields to tt_content for common use of custom CTypes
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', [

        'textfield1' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:wizard.teaser_wrapper_ttl',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
            ],
        ],
    ]
);

