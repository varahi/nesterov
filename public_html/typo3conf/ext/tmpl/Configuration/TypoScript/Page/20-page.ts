// Page config
page = PAGE
page.10 = FLUIDTEMPLATE
page.10 {
    #templateName = TEXT
    templateName = Default
    templateName.stdWrap {
        cObject = TEXT
        cObject {
            data = levelfield:-2,backend_layout_next_level,slide
            override.field = backend_layout
            split {
                token = tmpl__
                1.current = 1
                1.wrap = |
            }
        }
        ifEmpty = Main
    }

    templateRootPaths {
        #10 = EXT:tmpl/Resources/Private/Templates/
        10 = {$plugin.tx_tmpl.view.templateRootPath}
    }
    layoutRootPaths {
        #10 = EXT:tmpl/Resources/Private/Layouts/
        10 = {$plugin.tx_tmpl.view.layoutRootPath}
    }
    partialRootPaths {
        #10 = EXT:tmpl/Resources/Private/Partials/
        10 = {$plugin.tx_tmpl.view.partialRootPath}
    }

    variables {
        // Render colpos sections
        content < styles.content.get
        content {
            stdWrap.wrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
            stdWrap.required = 1
            select.where = colPos=0
        }
        content_colpos1 < styles.content.get
        content_colpos1 {
            select.where = colPos=1
            stdWrap.wrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
            stdWrap.required = 1
        }
        content_colpos2 < styles.content.get
        content_colpos2 {
            select.where = colPos=2
            stdWrap.wrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
            stdWrap.required = 1
        }
    }
}

// Standard pages with boy class "media-body"
/*
page.bodyTag = <body class="media-body">
[globalVar = TSFE:id = 1]
    page.bodyTag >
[PIDinRootline = 11]||[PIDinRootline = 23]
    page.bodyTag >
    page.bodyTag = <body class="map-body">

[PIDinRootline = 21]
    page.bodyTag >
    page.bodyTag = <body class="card-body">
[global]
*/