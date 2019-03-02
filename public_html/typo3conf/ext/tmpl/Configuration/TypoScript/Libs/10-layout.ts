
lib.bannerLogo = IMAGE
lib.bannerLogo {
    wrap = <div class="logotype">|</div>
    file = EXT:tmpl/Resources/Public/i/banner_logo.png
    stdWrap {
        typolink.parameter = {$config.layout.header.logo.link}
        typolink.title = {$config.layout.header.logo.title}
        #typolink.ATagParams = class="header-logo"
        #typolink.extTarget = _blank
    }
}

lib.logo = IMAGE
lib.logo {
    wrap = <div class="logo">|</div>
    file = EXT:tmpl/Resources/Public/i/logo.png
    stdWrap {
        typolink.parameter = {$config.layout.header.logo.link}
        typolink.title = {$config.layout.header.logo.title}
    }
}

lib.topPhone = TEXT
lib.topPhone {
    wrap = <div class="contacts">|</div>
    value = {$config.layout.header.contact.phone}
}