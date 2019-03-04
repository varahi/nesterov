# **************************************************
# Add the teaser to the "New Content Element Wizard"
# **************************************************
mod.wizards.newContentElement.wizardItems.common {
	elements {
		ce_teaser_wrapper {
			iconIdentifier = content-image
			title = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:wizard.teaser_wrapper_title
			description = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:wizard.teaser_wrapper_description
			tt_content_defValues {
				CType = ce_teaser_wrapper
			}
		}
	}
	show := addToList(ce_teaser_wrapper)
}