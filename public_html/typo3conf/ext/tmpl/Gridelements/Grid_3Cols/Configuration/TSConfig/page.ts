# Page TSConfig:

tx_gridelements.overruleRecords = 1
tx_gridelements.setup {
	# ID of Element
	Grid_3Cols {
		title = Grid element - 3 columns
		description = Three Columns with configurations
		#flexformDS = FILE:EXT:tmpl/Gridelements/Grid_3Cols/Configuration/FlexForms/Configuration.xml
		icon = EXT:tmpl/Gridelements/Grid_3Cols/Resources/Public/Icons/icon.gif
		topLevelLayout = 1
			config {
				colCount = 3
				rowCount = 1
				rows {
				
					1 {
						columns {
							1 {
							name = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelement.flexform.left_column
							colPos = 0
						}
							2 {
							name = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelement.flexform.center_column
							colPos = 1
						}
							3 {
							name = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelement.flexform.right_column
							colPos = 2
						}
						
					}
				}
			}
		}
	}
}