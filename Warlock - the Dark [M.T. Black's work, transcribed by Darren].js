/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Warlock, called "The Dark"
				This subclass has been made by M.T. Black, Greg Marks, & James Introcaso
				This code uses the subclass as it is featured in Mirt's Undermountain Survival Guide
	Code by:	Darren
	Date:		2019-04-16 (sheet v12.999)

*/

var iFileName = "Warlock - the Dark [M.T. Black's work, transcribed by Darren].js";
RequiredSheetVersion(12.999);

SourceList["MUSG:TD"] = {
	name : "Mirt's Undermountain Survival Guide: the Dark",
	abbreviation : "MUSG:TD",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/269024/Mirts-Undermountain-Survival-Guide?src=newest_community&filters=45680",
	date : "2019/03/09" // unsure of exact date of release
};

AddSubClass("warlock", "the dark", {
	regExpSearch : /^(?=.*dark)/i,
	subname : "the Dark",
    source : ["MUSG:TD", 18],
    fullname : "Warlock: the Dark",
	spellcastingExtra : ["dissonant whispers", "ray of sickness", "darkvision", "protection from poison", "bestow curse", "stinking cloud", "evard's black tentacles", "phantasmal killer", "antilife shell" , "cloudkill"],
	features : {
		"subclassfeature1" : {
			name : "Darkspiral Aura",
			source : ["MUSG:TD", 18],
			minlevel : 1,
			description : desc([
				"When you reduce a creature to 0 hit points, encase yourself in squirling shadows. Adv. on",
				"DEX (stealth) checks; ends after a short rest or when expended. When targeted by a",
                "melee or ranged attack, expend the aura as a reaction to Deal 1d6 + CHR + prof",
                "damage. If you choose to also damage an ally, you add your warlock level to the damage",
                "to the enemy."
			]),
			usages : 1,
			recovery : "short rest",
			action : ["reaction", ""]
		},
		"subclassfeature6" : {
			name : "Your Glorious Sacrifice",
			source : ["MUSG:TD", 18],
			minlevel : 6,
			description : desc([
                "Resistant to poison. When casting a spell that deals poison or psychic damage, you can",
                "add your CHR to the damage against one target. If you choose an ally as a target, one",
                "enemy also suffers damage of the same type equal to 1d6 + CHR every round; CON save",
                "ends. Add an additional 1d6 to enemy damage at 11th and again at 17th."
			]),
            usages : 1,
            dmgres : ["Poison"],
			recovery : "short rest",
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Darkest Mirror",
			source : ["MUSG:TD", 18],
			minlevel : 10,
			description : desc([
				"As a bonus action, you see invisible creatures as well as into the Ethereal Plane; you",
				"can't see any other creatures while using this ability. Lasts for 1 + CHR rounds.",
				"You can end this feature using a bonus action."
            ]),
            recovery : "short rest",
			action : ["bonus action", " (start or end)"]
		},
		"subclassfeature14" : {
			name : "Passionate Betrayal",
			source : ["MUSG:TD", 18],
			minlevel : 14,
			description : desc([
				"Whisper dark promises to an enemy within 60 ft, making them believe enemies are",
				"friends and friends are enemies. WIS save, on a failed save target is charmed for 1 min",
                "or until concentration is broken; target can retry the save after each round. If used on",
                "an ally, 1st attack is at adv. all other attacks, saves, ability checks are disadv. for",
                "1 min."
			]),
			usages : 1,
            recovery : "short rest",
            action : ["action", ""]
		}
	}
});
