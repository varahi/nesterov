lib.navigation = HMENU
lib.navigation {
    #special = list
    #special.value = 3,2

    wrap = <nav class="menu">|</nav>
    1 = TMENU
    1 {
        expAll = 1
        wrap = <ul>|</ul>
        NO.wrapItemAndSub = <li>|</li>
        NO.linkWrap = <span>|</span>
        NO.ATagBeforeWrap = 1
        CUR = 1
        CUR.wrapItemAndSub = <li class="active">|</li>
        ACT < .CUR
    }
    2 = TMENU
    2 {
        wrap = <ul>|</ul>

        NO = 1
        NO.wrapItemAndSub = <li>|</li>
    }
}