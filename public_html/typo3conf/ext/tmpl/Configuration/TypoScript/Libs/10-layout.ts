lib.logo = IMAGE
lib.logo {
    file = EXT:tmpl/Resources/Public/i/logo.png
    stdWrap {
        wrap = <div class="logo">|</div>
        typolink.parameter = {$config.layout.header.logo.link}
        typolink.title = {$config.layout.header.logo.title}
    }
}

lib.logo >
lib.logo = TEXT
lib.logo {
    wrap = <div class="logo"><a href="/">|</a></div>
    value = <img src="typo3conf/ext/tmpl/Resources/Public/i/logo.png" alt=""/>
}

lib.slogan >
lib.slogan = TEXT
lib.slogan {
    wrap = <div class="slogan"><p>|</p></div>
    value = {$config.layout.header.slogan}
}

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

lib.footerLogo = IMAGE
lib.footerLogo {
    wrap = <div class="logo">|</div>
    file = EXT:tmpl/Resources/Public/i/logo-f.png
    file.maxW = 153
}

lib.topPhone = TEXT
lib.topPhone {
    wrap = <div class="contacts top-phone">|</div>
    value = {$config.layout.header.contact.phone}
}

lib.mobilePhone = TEXT
lib.mobilePhone {
    value = <a href="{$config.layout.header.contact.mobilePhone}"><div class="mobile-phone"></div></a>
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

lib.jivoSite >
lib.jivoSite = TEXT
lib.jivoSite.value (
<!-- BEGIN JIVOSITE CODE -->
<script type='text/javascript'>
(function(){ var widget_id = '2FyEzUTyeT';var d=document;var w=window;function l(){ var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id ; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);} if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);} else{w.addEventListener('load',l,false);}}})();
</script>
<!-- END JIVOSITE CODE -->
)