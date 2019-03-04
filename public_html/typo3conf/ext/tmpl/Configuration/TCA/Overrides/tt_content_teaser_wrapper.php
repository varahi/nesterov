<?php

$_CEKEY  = 'ce_teaser_wrapper';
$_EXTKEY = 'tmpl';


$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = [
    'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:wizard.teaser_wrapper_title',
    $_CEKEY, 'EXT:tmpl/Ce/' . $_CEKEY . '/Icons/ce_wiz.gif'
];


// make overrides for tt_content columns
$GLOBALS['TCA']['tt_content']['types'][$_CEKEY]['columnsOverrides'] = [
    'bodytext' => [
        'defaultExtras' => 'richtext:rte_transform[mode=ts_css]'
    ],
];


$GLOBALS['TCA']['tt_content']['types'][$_CEKEY]['showitem'] = '
    --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general
    
    ,--div--;LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:teaser_wrapper.div
    ,header;LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:teaser_wrapper.header
    ,bodytext;LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:teaser_wrapper.bodytext
    ,header_link;LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:teaser_wrapper.header_link
    
    ,--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.access
    ,--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.visibility;visibility
    ,--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access
    ,--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.extended
   ';

if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('gridelements')) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('tt_content', 'tx_gridelements_container, tx_gridelements_columns', $_CEKEY);
}
