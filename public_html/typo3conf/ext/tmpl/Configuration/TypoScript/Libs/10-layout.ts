
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

lib.footerLogo = IMAGE
lib.footerLogo {
    wrap = <div class="logo">|</div>
    file = EXT:tmpl/Resources/Public/i/logo-f.png
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

lib.copyright = TEXT
lib.copyright {
    wrap = <div class="copy">|</div>
    value = {$config.layout.footer.copyright}
}

lib.headerSocial = COA
lib.headerSocial {
    10 = TEXT
    10 {
        value = {$config.layout.header.instaTtitle}
        stdWrap {
            typolink {
                ATagParams = class="instagram"
                parameter = {$config.layout.footer.instaLink}
                extTarget = _blank
                wrap = <span>|</span>
                ATagBeforeWrap = 1
            }
        }

    }
}

lib.footerSocial = COA
lib.footerSocial {
    wrap = <div class="share">|</div>
    10 = IMAGE
    10 {
        file = EXT:tmpl/Resources/Public/i/insta.png
        stdWrap {
            typolink {
                //ATagParams = class="social__item social-fb"
                parameter = {$config.layout.footer.instaLink}
                extTarget = _blank
            }
        }
    }
}