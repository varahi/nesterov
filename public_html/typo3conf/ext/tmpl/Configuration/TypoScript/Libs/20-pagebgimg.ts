/*
lib.pageBgImg = COA
lib.pageBgImg {
    10 = IMG_RESOURCE
    10.file {
        import {
            cObject = TEXT
            cObject.override {
                required = 1
                # slide sets image for all the subpages as well,
                # overwritten if subpage has it's own image added
                data = levelmedia: -1, slide
                wrap = uploads/media/|
                # gets first image from recources list
                listNum = 0
            }
        }


        # image manipulation – if 'c' crop is in action
        # images must be bigger than given width and height
        width = 1400c
        height = 540c
        format = jpg
        quality = 100
    }
}
*/

lib.pageBgImg = COA
lib.pageBgImg {
    wrap = |
    10 = IMG_RESOURCE
    10 {
        file {
            treatIdAsReference = 1
            import.data = levelmedia: -1,slide
            import.listNum = 0
            import.override.field = media
            maxWidth = 1000
            #minHeight = 900c
            format = jpg
            quality = 100
        }
        altText.data = page:title
        #params = class="bw"
    }
}