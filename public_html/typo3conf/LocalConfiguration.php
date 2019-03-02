<?php
return [
    'BE' => [
        'debug' => true,
        'explicitADmode' => 'explicitAllow',
        'installToolPassword' => '$pbkdf2-sha256$25000$rvOQmt7Rlfpt5VebW5UjBA$y4qT9ZVIhfubepqdevmJh9SBh9MBzl32UnQ0jQtgonc',
        'loginSecurityLevel' => 'rsa',
    ],
    'DB' => [
        'Connections' => [
            'Default' => [
                'charset' => 'utf8',
                'driver' => 'mysqli',
                'password' => 'dev',
                'port' => 3306,
            ],
        ],
    ],
    'EXT' => [
        'extConf' => [
            'cs_seo' => 'a:12:{s:17:"enablePathSegment";s:1:"1";s:15:"realURLAutoConf";s:1:"1";s:11:"tsConfigPid";s:1:"1";s:8:"maxTitle";s:2:"57";s:14:"maxDescription";s:3:"156";s:11:"maxNavTitle";s:2:"50";s:12:"inPageModule";s:1:"0";s:18:"evaluationDoktypes";s:1:"1";s:10:"evaluators";s:38:"Title,Description,H1,H2,Images,Keyword";s:8:"minTitle";s:2:"40";s:14:"minDescription";s:3:"140";s:5:"maxH2";s:1:"6";}',
            'extension_builder' => 'a:3:{s:15:"enableRoundtrip";s:1:"1";s:15:"backupExtension";s:1:"1";s:9:"backupDir";s:35:"uploads/tx_extensionbuilder/backups";}',
            'gridelements' => 'a:3:{s:20:"additionalStylesheet";s:0:"";s:19:"nestingInListModule";s:1:"0";s:26:"overlayShortcutTranslation";s:1:"0";}',
            'jh_magnificpopup' => 'a:2:{s:19:"colPosOfIrreContent";s:3:"109";s:19:"enableAlphaFeatures";s:1:"0";}',
            'jn_lighterbox' => 'a:0:{}',
            'lfeditor' => 'a:8:{s:13:"viewLanguages";s:0:"";s:15:"defaultLanguage";s:0:"";s:11:"searchRegex";s:60:"/^([a-z0-9_]*locallang[a-z0-9_-]*\\.(php|xml)|[^\\.]*\\.xlf)$/i";s:9:"extIgnore";s:23:"/^(CVS|.svn|.git|csh_)/";s:13:"changeXlfDate";s:1:"1";s:17:"editModeExtension";s:1:"1";s:12:"editModeL10n";s:1:"1";s:27:"pathAdditionalConfiguration";s:37:"typo3conf/AdditionalConfiguration.php";}',
            'news' => 'a:16:{s:13:"prependAtCopy";s:1:"1";s:6:"tagPid";s:1:"1";s:12:"rteForTeaser";s:1:"0";s:22:"contentElementRelation";s:1:"1";s:21:"contentElementPreview";s:1:"1";s:13:"manualSorting";s:1:"0";s:19:"categoryRestriction";s:0:"";s:34:"categoryBeGroupTceFormsRestriction";s:1:"0";s:19:"dateTimeNotRequired";s:1:"0";s:11:"archiveDate";s:4:"date";s:12:"mediaPreview";s:5:"false";s:24:"showAdministrationModule";s:1:"1";s:35:"hidePageTreeForAdministrationModule";s:1:"0";s:12:"showImporter";s:1:"0";s:18:"storageUidImporter";s:1:"1";s:22:"resourceFolderImporter";s:12:"/news_import";}',
            'powermail' => 'a:8:{s:12:"disableIpLog";s:1:"0";s:27:"disableMarketingInformation";s:1:"0";s:20:"disableBackendModule";s:1:"0";s:24:"disablePluginInformation";s:1:"0";s:35:"disablePluginInformationMailPreview";s:1:"0";s:13:"enableCaching";s:1:"0";s:15:"l10n_mode_merge";s:1:"0";s:29:"replaceIrreWithElementBrowser";s:1:"0";}',
            'rsaauth' => 'a:1:{s:18:"temporaryDirectory";s:0:"";}',
            'rte_ckeditor' => 'a:1:{s:15:"ckeditorVersion";s:6:"latest";}',
            'saltedpasswords' => 'a:2:{s:3:"BE.";a:4:{s:21:"saltedPWHashingMethod";s:41:"TYPO3\\CMS\\Saltedpasswords\\Salt\\Pbkdf2Salt";s:11:"forceSalted";i:0;s:15:"onlyAuthService";i:0;s:12:"updatePasswd";i:1;}s:3:"FE.";a:5:{s:7:"enabled";i:1;s:21:"saltedPWHashingMethod";s:41:"TYPO3\\CMS\\Saltedpasswords\\Salt\\Pbkdf2Salt";s:11:"forceSalted";i:0;s:15:"onlyAuthService";i:0;s:12:"updatePasswd";i:1;}}',
            'sourceopt' => 'a:0:{}',
            'tmpl' => 'a:0:{}',
        ],
    ],
    'EXTCONF' => [
        'lang' => [
            'availableLanguages' => [
                'ru',
            ],
        ],
    ],
    'FE' => [
        'debug' => true,
        'enableRecordRegistration' => false,
        'loginSecurityLevel' => 'rsa',
    ],
    'GFX' => [
        'jpg_quality' => '80',
        'processor' => 'GraphicsMagick',
        'processor_allowTemporaryMasksAsPng' => false,
        'processor_colorspace' => 'RGB',
        'processor_effects' => -1,
        'processor_enabled' => true,
        'processor_path' => '/usr/bin/',
        'processor_path_lzw' => '/usr/bin/',
    ],
    'MAIL' => [
        'transport' => 'sendmail',
        'transport_sendmail_command' => '/usr/sbin/sendmail -t -i',
        'transport_smtp_encrypt' => '',
        'transport_smtp_password' => '',
        'transport_smtp_server' => '',
        'transport_smtp_username' => '',
    ],
    'SYS' => [
        'caching' => [
            'cacheConfigurations' => [
                'extbase_object' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\ApcuBackend',
                    'frontend' => 'TYPO3\\CMS\\Core\\Cache\\Frontend\\VariableFrontend',
                    'groups' => [
                        'system',
                    ],
                    'options' => [
                        'defaultLifetime' => 0,
                    ],
                ],
            ],
        ],
        'devIPmask' => '*',
        'displayErrors' => 1,
        'enableDeprecationLog' => 'file',
        'encryptionKey' => '0b54cce0b2b0bbe2d0a8cc0fe78a35247875b2b75a36f7e224b28b7a6a6fff1809ecac4f6aadfdeeea844bba1abe93a0',
        'exceptionalErrors' => 28674,
        'isInitialDatabaseImportDone' => true,
        'isInitialInstallationInProgress' => false,
        'sitename' => 'Nesterov',
        'sqlDebug' => 1,
        'systemLogLevel' => 0,
        'trustedHostsPattern' => '.*',
    ],
];
