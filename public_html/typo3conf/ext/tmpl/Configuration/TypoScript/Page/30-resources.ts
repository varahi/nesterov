page {
    # include js header
    includeJSLibs {
        //00_jquery = https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
        //00_jquery = EXT:tmpl/Resources/Public/JavaScript/jquery-2.2.4.min.js
        //00_jquery.external = 1
        //00_jquery.forceOnTop = 1
    }
    # include is in header
    includeJS {
        10_jquery = EXT:tmpl/Resources/Public/js/jquery-3.3.1.min.js
        20_placeholder = EXT:tmpl/Resources/Public/js/jquery.placeholder.min.js
        30_masked = EXT:tmpl/Resources/Public/js/jquery.maskedinput.js
        40_toshowhide = EXT:tmpl/Resources/Public/js/jquery.toshowhide.js
        50_slick = EXT:tmpl/Resources/Public/js/slick.min.js
        60_magnificpopup = EXT:tmpl/Resources/Public/js/jquery.magnific-popup.min.js
        //60_magnific = EXT:tmpl/Resources/Public/js/jquery.toshowhide.js
        70_jquery = EXT:tmpl/Resources/Public/js/main.js
    }

    # include css
    includeCSS {
        10_style = EXT:tmpl/Resources/Public/css/style.css
        20_fonts = EXT:tmpl/Resources/Public/css/fonts.css
        20_magnificpopup = EXT:tmpl/Resources/Public/css/magnific-popup.min.css
        40_fonts = EXT:tmpl/Resources/Public/css/adapt.css
    }

    #footerData {
    #	10 = TEXT
    #	10.value = <script src="/typo3conf/ext/tmpl/Resources/Public/JavaScript/functions.min.js" type="text/javascript"></script>
    #}

    #shortcutIcon = EXT:tmpl/Resources/Public/Favicons/favicon.ico
}

# Favicons
//page.headerData.2039 = FLUIDTEMPLATE
//page.headerData.2039 {
//    file = EXT:tmpl/Resources/Private/Partials/Favicons.html
//    extbase.controllerExtensionName = tmpl
//}