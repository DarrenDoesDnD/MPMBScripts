/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race, called "Netherese"
				This subclass has been made by Matt Pegoraro
				This code uses the subclass as it is featured in The Netherese Race
	Code by:	Darren modified code by MorePurpleMoreBetter
	Date:		2019-12-05 (sheet v12.999)
*/

var iFileName = "Netherese [Matt Pegoraro's work, modified by Darren originally transcribed by MPMB].js";
RequiredSheetVersion(12.999);

SourceList["TNR"] = {
	name : "The Netherese Race",
	abbreviation : "TNR",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/296768/The-Netherese-Race?term=netherese",
	date : "2019/12/05" // unsure of exact date of release
};

/* RaceList["netherese"] = {
	regExpSearch : /netherese/i,
	name : "Netherese",
	source : ["TNR", 2],
	plural : "Netherese",
	
	improvements : "Netherese: +2 Intelligence;",
	scores : [0, 0, 0, 2, 0, 0],
	trait : "Netherese (+2 Intelligence)\n",
    //variants : ["High Netherese", "Low Netherese", "Half-Netherese", "Shadovar"],
}; */
RaceList["Low Netherese"] = {
	regExpSearch : /^(?=.*low)(?=.*netherese).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "something", "great" and "catlike" in it, disregarding capitalization). If this looks too complicated, just write: /something great catlike/i This lookup is in addition to the one from the parent in the RaceList. So if the name of this subrace does not include the name of the parent race, it will never be recognized!

		name : "Low Netherese", //required; the name to use for the race
		sortname : "Netherese, Low Netherese",
		source : ["TNR", 2], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

		plural : "Low Netherese", //required; the name to use for the race when the plural form is used
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Draconic", "Netherese"],
		skills : ["Arcana"],
		age : "Like all humans, and can live around a century.",
		height : "Typical height for humans.",
		weight : "Typical weight for humans.",
		heightMetric : "Typical height for humans.",
		weightMetric : "Typical weight for humans.",
		improvements : "High Netherese: +1 Constitution, +2 Intelligence;",
		scores : [0, 1, 0, 2, 0, 0],
		spellcastingAbility : 4,
        trait : "Low Netherese (+1 Constituion, +1 ability score of your choice, +2 Intelligence)\n", //optional; changes the racial trait description to something else
		
		features : {
		"mage hand" : { //note the use of lower case characters
			name : "Mage Hand", //required; the name of the racial feature
			minlevel : 1, //required; the level at which the feature is gained
			//usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level
			//recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. If you can use anything, but use either "long rest" or "short rest" (note the lower case) for best compatibility with the limited features section. This can be one value, but can also be an array of 20 values, one for each level
			tooltip : " (Innate Spell - Mage Hand)", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gained from Something Catlike (Celestial Legacy)"
			action : ["action", ""], //optional; adds the name of the feature to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
			spellcastingBonus : { //optional; works just like the "spellcastingBonus" object defined above
				name : "Innate Spell - Mage Hand (cantrip)",
				spells : ["mage hand"],
				selection : ["mage hand"]
			},
		},
			"light" : { //note the use of lower case characters
				name : "Light", //required; the name of the racial feature
				minlevel : 1, //required; the level at which the feature is gained
				//usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level
				//recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. If you can use anything, but use either "long rest" or "short rest" (note the lower case) for best compatibility with the limited features section. This can be one value, but can also be an array of 20 values, one for each level
				tooltip : " (Innate Spell - Light)", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gained from Something Catlike (Celestial Legacy)"
				action : ["action", ""], //optional; adds the name of the feature to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
				spellcastingBonus : { //optional; works just like the "spellcastingBonus" object defined above
					name : "Innate Spell - Light (cantrip)",
					spells : ["light"],
					selection : ["light"]
				},
			},
				"mending" : { //note the use of lower case characters
					name : "Mending", //required; the name of the racial feature
					minlevel : 1, //required; the level at which the feature is gained
					//usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level
					//recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. If you can use anything, but use either "long rest" or "short rest" (note the lower case) for best compatibility with the limited features section. This can be one value, but can also be an array of 20 values, one for each level
					tooltip : " (Innate Spell - Mending)", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gained from Something Catlike (Celestial Legacy)"
					time : "1 min", //optional; adds the name of the feature to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
					spellcastingBonus : { //optional; works just like the "spellcastingBonus" object defined above
						name : "Innate Spell - Mending (cantrip)",
						spells : ["mending"],
						selection : ["mending"]
					},
				},
				"prestidigitation" : { //note the use of lower case characters
					name : "Prestidigitation", //required; the name of the racial feature
					minlevel : 1, //required; the level at which the feature is gained
					//usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level
					//recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. If you can use anything, but use either "long rest" or "short rest" (note the lower case) for best compatibility with the limited features section. This can be one value, but can also be an array of 20 values, one for each level
					tooltip : " (Innate Spell - Prestidigitation)", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gained from Something Catlike (Celestial Legacy)"
					action : ["action", ""], //optional; adds the name of the feature to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
					spellcastingBonus : { //optional; works just like the "spellcastingBonus" object defined above
						name : "Innate Spell - Prestidi... (cantrip)",
						spells : ["prestidigitation"],
						selection : ["prestidigitation"]
					},
				},
            "task mastery" : {
                name : "Task Mastery",
                source : ["TNR", 3],
                minlevel : 1,
                description : "\n   " + "You gain proficiency in two skills of your choice." + "\n You also gain proficiency in one tool of your choice.",
				skillstxt : "Choose any two skills and one tool of your choice.",
				toolProfs : [["Artisan's tools", 1]]
            },
           
        }
};
RaceList["High Netherese"] = {
	regExpSearch : /^(?=.*high)(?=.*netherese).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "something", "great" and "catlike" in it, disregarding capitalization). If this looks too complicated, just write: /something great catlike/i This lookup is in addition to the one from the parent in the RaceList. So if the name of this subrace does not include the name of the parent race, it will never be recognized!

	name : "High Netherese", //required; the name to use for the race

	source : ["TNR", 2], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]
	sortname : "Netherese, High Netherese",
	plural : "High Netherese", //required; the name to use for the race when the plural form is used
	size : 3,
	speed : {
        walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic", "Netherese"],
    //skills : ["Arcana"],
	age : "Like all humans, and can live around a century.",
	height : "Typical height for humans.",
	weight : "Typical weight for humans.",
	heightMetric : "Typical height for humans.",
	weightMetric : "Typical weight for humans.",
	languageProfs : ["Loross"],
	improvements : "High Netherese: +1 Wisdom, +2 Intelligence;",
	scores : [0, 0, 0, 2, 1, 0],
	trait : "High Netherese (+1 Wisdom, +2 Intelligence)\n" + "Your Mage Hand is invisible.", //optional; changes the racial trait description to something else

	features : {
		"superior arcana" : {
			name : "Superior Arcana",
			source : ["TNR", 2],
			minlevel : 1,
			description : "\n   " + "I gain expertise with the Arcana skill",
			skillstxt : "\n" + toUni("High Netherese (Superior Arcana)") + ": Arcana expertise",
			eval : "AddSkillProf('Arcana', true, true);",
			removeeval : "AddSkillProf('Arcana', false, true);"
		},
		"weave manipulation" : {
			name : "Weave Manipulation",
			usages : 1,
			recovery : "long rest",
			tooltip : "Weave Manipulation; Your deep knowledge allows you to manipulate the very fabric of magic." + "\n 1/day gain adv on spell saves.",
			oncelr : true
		},
		"mage hand" : { //note the use of lower case characters
			name : "Invisible Mage Hand", //required; the name of the racial feature
			minlevel : 1, //required; the level at which the feature is gained
			usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level
			recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. If you can use anything, but use either "long rest" or "short rest" (note the lower case) for best compatibility with the limited features section. This can be one value, but can also be an array of 20 values, one for each level
			tooltip : " (Innate Spell - Invisible Mage Hand)", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gained from Something Catlike (Celestial Legacy)"
			action : ["action", ""], //optional; adds the name of the feature to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
			spellcastingBonus : { //optional; works just like the "spellcastingBonus" object defined above
				name : "Innate Spell - Mage Hand (level 1)",
				spells : ["mage hand"],
				selection : ["mage hand"],
				oncelr : true
			},
		},
			"detect magic" : { //note the use of lower case characters
				name : "Detect Magic", //required; the name of the racial feature
				minlevel : 3, //required; the level at which the feature is gained
				usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level
				recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. If you can use anything, but use either "long rest" or "short rest" (note the lower case) for best compatibility with the limited features section. This can be one value, but can also be an array of 20 values, one for each level
				tooltip : " (Innate Spell - Detect Magic)", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gained from Something Catlike (Celestial Legacy)"
				action : ["action", ""], //optional; adds the name of the feature to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
				spellcastingBonus : { //optional; works just like the "spellcastingBonus" object defined above
					name : "Innate Spell - Detect Magic (level 3)",
					spells : ["detect magic"],
					selection : ["detect magic"],
					oncelr : true
				},
			},
				"identify" : { //note the use of lower case characters
					name : "Identify", //required; the name of the racial feature
					minlevel : 5, //required; the level at which the feature is gained
					usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level
					recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. If you can use anything, but use either "long rest" or "short rest" (note the lower case) for best compatibility with the limited features section. This can be one value, but can also be an array of 20 values, one for each level
					tooltip : " (Innate Spell - Identify)", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gained from Something Catlike (Celestial Legacy)"
					time : "1 min", //optional; adds the name of the feature to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
					spellcastingBonus : { //optional; works just like the "spellcastingBonus" object defined above
						name : "Innate Spell - Identify (level 5)",
						spells : ["identify"],
						selection : ["identify"],
						oncelr : true
					},
				},
		}
};
RaceList["Shadovar"] = {
	regExpSearch : /^(?=.*shadovar).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "something", "great" and "catlike" in it, disregarding capitalization). If this looks too complicated, just write: /something great catlike/i This lookup is in addition to the one from the parent in the RaceList. So if the name of this subrace does not include the name of the parent race, it will never be recognized!

	name : "Shadovar", //required; the name to use for the race
	sortname : "Netherese, Shadovar",
	source : ["TNR", 3], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	plural : "Shadovar", //required; the name to use for the race when the plural form is used
	size : 3,
	speed : {
        walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic", "Netherese"],
    skills : ["Stealth", "Arcana"],
	age : "Like all humans, and can live around a century.",
	height : "Typical height for humans.",
	weight : "Typical weight for humans.",
	heightMetric : "Typical height for humans.",
	weightMetric : "Typical weight for humans.",
	languageProfs : ["Loross"],

	vision : [["Darkvision", 120], ["Sunlight Sensitivity", 0]],

	damage_vulnerabilities : "radiant",

	//skills : ["Stealth"],

	dmgres : ["Necrotic"],
	improvements : "Shadovar: +1 Dexterity, +2 Intelligence;",
	scores : [0, 1, 0, 2, 0, 0],
	trait : "Shadovar (+1 Dexterity, +2 Intelligence)\n", //optional; changes the racial trait description to something else

	features : {
		"misty step" : {
			name : "Misty Step",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Dark Step)",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Dark Step",
				spells : ["misty step"],
				selection : ["misty step"],
				oncelr : true
			}
		},
		"invisibility" : { //note the use of lower case characters
			name : "Invisibility", //required; the name of the racial feature
			minlevel : 3, //required; the level at which the feature is gained
			usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level
			recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. If you can use anything, but use either "long rest" or "short rest" (note the lower case) for best compatibility with the limited features section. This can be one value, but can also be an array of 20 values, one for each level
			tooltip : " (Shadow Weave Magic - Invisibility)", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gained from Something Catlike (Celestial Legacy)"
			action : ["action", ""], //optional; adds the name of the feature to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
			spellcastingBonus : { //optional; works just like the "spellcastingBonus" object defined above
				name : "Shadow Magic - Invisibility (level 3)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				oncelr : true
			},
		},
			"mirror image" : { //note the use of lower case characters
				name : "Mirror Image", //required; the name of the racial feature
				minlevel : 5, //required; the level at which the feature is gained
				usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level
				recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. If you can use anything, but use either "long rest" or "short rest" (note the lower case) for best compatibility with the limited features section. This can be one value, but can also be an array of 20 values, one for each level
				tooltip : " (Shadow Weave Magic - Mirror Image)", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gained from Something Catlike (Celestial Legacy)"
				action : ["action", ""], //optional; adds the name of the feature to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
				spellcastingBonus : { //optional; works just like the "spellcastingBonus" object defined above
					name : "Shadow Magic - Mirror Image (level 5)",
					spells : ["mirror image"],
					selection : ["mirror image"],
					oncelr : true
				},
			},     
		}
};
