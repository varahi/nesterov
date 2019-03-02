# setup:
# no need to include static file anymore:
#<INCLUDE_TYPOSCRIPT: source=FILE:EXT:gridelements/static/gridelements/setup.txt>

#tt_content.gridelements_pi1.10 =< lib.stdheader
tt_content.gridelements_pi1.20.10.setup {
  
  Grid_3Cols < lib.gridelements.defaultGridSetup
  Grid_3Cols {  
    cObject = FLUIDTEMPLATE
    cObject {
    	partialRootPath = EXT:tmpl/Gridelements/Grid_3Cols/Resources/Private/Partials/
      file = EXT:tmpl/Gridelements/Grid_3Cols/Resources/Private/Templates/Template.html
    }
  }  
}