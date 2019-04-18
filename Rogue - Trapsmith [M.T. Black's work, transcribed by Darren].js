/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Rogue, called "Trapsmith"
				This subclass has been made by M.T. Black, Greg Marks, & James Introcaso
				This code uses the subclass as it is featured in Mirt's Undermountain Survival Guide
	Code by:	Darren
	Date:		2019-04-16 (sheet v12.999)
*/

var iFileName = "Rogue - Trapsmith [M.T. Black's work, transcribed by Darren].js";
RequiredSheetVersion(12.999);

SourceList["MUSG:TS"] = {
	name : "Mirt's Undermountain Survival Guide: Trapsmith",
	abbreviation : "MUSG:TS",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/269024/Mirts-Undermountain-Survival-Guide?src=newest_community&filters=45680",
	date : "2019/03/09" // unsure of exact date of release
};

AddSubClass("rogue", "trapsmith", {
	regExpSearch : /^(?=.*trapsmith)/i,
	subname : "Trapsmith",
	source : ["MUSG:TS", 16],
	fullname : "Rogue: Trapsmith",
	features : {
		"subclassfeature3" : {
			name : "Master Disarmer",
			source : ["MUSG:TS", 16],
			minlevel : 3,
			description : desc([
				"Adv. on WIS (Perception) and INT (Investigation) checks made to find traps, and adv. on",
				"DEX checks using thieves' tools to disarm them. You can search for traps while travelling",
				"at a fast pace without penalty."
			])
		},
		"subclassfeature3.1" : {
			name : "Booby Traps",
			source : ["MUSG:TS", 16],
			minlevel : 3,
			description : desc([
				"Setup simple booby traps; DEX check using thieves' tools. The DC to detect and disable",
				"is 8 + prof + DEX. Constructing a trap takes 1 min. If you spend 1 min dismantling the",
				"trap, you recover the materials.",
				"Traps available are Alarm Trap, Bolt Trap, Drop Trap, and Trip Rope trap."
			]),
		},
		"subclassfeature9" : {
			name : "Trap Sense",
			source : ["MUSG:TS", 16],
			minlevel : 9,
			description : desc([
				"Your expertise gives you the edge when dealing with deadly traps. You have advantage",
				"when making saving throws to avoid or resist traps. Traps that make an attack roll to",
				"hit you do so with disadvantage. You also have resistance to the damage dealt by traps.",
				"To gain this benefit, you cannot be blinded, deafened or incapacitated."
			])
		},
		"subclassfeature9.1" : {
			name : "Hasty Booby Traps",
			source : ["MUSG:TS", 16],
			minlevel : 9,
			description : desc([
				"9th level: hastily construct traps using 1 action, but halves the DC to spot, and grants",
				"adv. to the saves against them."
			]),
			action : ["action", ""]
		},
		"subclassfeature13" : {
			name : "Unravel the Arcane",
			source : ["MUSG:TS", 16],
			minlevel : 13,
			description : desc([
				"Your mastery of traps extends to the magical. You can cast dispel magic, but only on",
				"magical traps that you can see; use INT for the check. Once per short or long rest."
			]),
			action : ["action", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature17" : {
			name : "Avoid Disaster",
			source : ["MUSG:TS", 16],
			minlevel : 17,
			description : desc([
				"If next to or a target the trap, use a reaction to disable it, preventing its effects.",
				"DEX check using thieves' tools equal to the disarm DC or it activates as normal."
			]),
			action : ["reaction", ""]
		}
	}
});
