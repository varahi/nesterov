lib.navigation = HMENU
lib.navigation {
    #special = list
    #special.value = 3,2
    #wrap = <nav class="menu">|</nav>
    excludeUidList = {$config.navigation.mainPageUid}
    1 = TMENU
    1 {
        expAll = 1
        #wrap = <ul>|</ul>
        NO.wrapItemAndSub = <li>|</li>
        NO.linkWrap = <span>|</span>
        NO.ATagBeforeWrap = 1
        NO.ATagTitle.field = nav_title // title

        #CUR = 1
        #CUR.wrapItemAndSub = <li class="">|</li>
        #ACT < .CUR
    }
    2 = TMENU
    2 {
        wrap = <ul>|</ul>
        wrap.override = <ul class="override">|</ul>
        wrap.insertData = 1
        wrap.override.if {
            value = 8
            equals.field = pid
        }

        expAll = 0
        noBlur = 1

        NO = 1
        NO {
            ATagTitle.field = nav_title // title
            wrapItemAndSub = <li>|</li>
        }
        #ACT < .NO
        #ACT {
        #    wrapItemAndSub = <li class="active">|</li>
        #    before.cObject = LOAD_REGISTER
        #    before.cObject.actsubmenu = TEXT
        #    before.cObject.actsubmenu.value = 1
        #}
        #CUR < .ACT
        #wrap.override.if.isTrue.data = REGISTER:actsubmenu

    }
    #wrap.override.if.isTrue.data = REGISTER:actsubmenu

}

lib.navigationMainPageLink = TEXT
lib.navigationMainPageLink {
    wrap = <li><a href="/"><span>|</span></a></li>
    value = {$config.navigation.mainPageTitile}
}


lib.navigation >
lib.navigation = HMENU
lib.navigation {
    excludeUidList = {$config.navigation.mainPageUid}
    1 = TMENU
    1 {
        #wrap = <ul>|</ul>
        noBlur = 1
        # Necessary to have submenus already rendered
        expAll = 1

        NO {
            wrapItemAndSub = <li>|</li>
            stdWrap.htmlSpecialChars = 1
            linkWrap = <span>|</span>
            ATagBeforeWrap = 1
        }

        ACT < .NO
        ACT = 1
        ACT {
            wrapItemAndSub = <li class="_active">|</li>
        }

        # Add the submenu opening <ul>, if our 1st-level item has a submenu
        IFSUB = 1
        IFSUB {
            wrapItemAndSub = <li>|</li>
            stdWrap.wrap =  <span>|</span>
            linkWrap = |<ul>
        }

        # Add the submenu opening <ul> if our 1st-level item has children and have the submenu open on load
        CURIFSUB = 1
        CURIFSUB {
            wrapItemAndSub = <li>|</li>
            linkWrap = |<ul style="display: block;">
        }

        # Same as above if any submenu item is currently active
        ACTIFSUB = 1
        ACTIFSUB {
            wrapItemAndSub = <li class="_active">|</li>
            stdWrap.wrap =  <span>|</span>
            #ATagBeforeWrap = 0
            linkWrap = |<ul style="display: block;">
        }
    }

    2 = TMENU
    2 {
        # Close the previously openend <ul>
        wrap = |</ul>
        noBlur = 1
        expAll = 1

        NO {
            wrapItemAndSub = <li>|</li>
            stdWrap.htmlSpecialChars = 1
        }

        ACT < .NO
        ACT = 1
        ACT {
            wrapItemAndSub = <li class="_active">|</li>
        }
    }
}