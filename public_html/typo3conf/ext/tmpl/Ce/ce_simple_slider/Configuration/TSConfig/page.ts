# **************************************************
# Add the slider to the "New Content Element Wizard"
# **************************************************
mod.wizards.newContentElement.wizardItems.common {
	elements {
		ce_slider {
			iconIdentifier = content-image
			title = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:wizard.simple_slider_title
			description = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:wizard.simple_slider_description
			tt_content_defValues {
				CType = ce_slider
			}
		}
	}
	show := addToList(ce_slider)
}