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
				"Gain advantage on Wisdom (Perception) or Intelligence (Investigation) checks made to",
				"find traps, and advantage on Dexterity checks using thieves tools to disarm traps.",
				"You can search for traps while traveling at a fast pace without penalty."
			])
		},
		"subclassfeature3.1" : {
			name : "Booby Traps",
			source : ["MUSG:TS", 16],
			minlevel : 3,
			description : desc([
				"Quickly set up simple booby traps, make a DEX check using thieves tools. The DC to",
				"detect and disable your traps is 8 + prof + DEX. Constructing a trap takes 1 minute.",
				"If you spend 1 minute dismantling the trap, you recover the materials.",
				"9th level: hastily construct the trap using only 1 action, but halves the DC to spot,",
				"and grants advantage to the save against it. Traps available are Alarm Trap, Bolt Trap,",
				"Drop Trap, and Trip Rope trap. Mirts Undermountain Surival Guide PG 16."
			]),
			action : ["action", ""]
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
		"subclassfeature13" : {
			name : "Unravel the Arcane",
			source : ["MUSG:TS", 16],
			minlevel : 13,
			description : desc([
				"Your mastery of traps has extended to the magical. You can cast dispel magic, but you",
				"may only target magical traps that you can see. Spellcasting ability: Intelligence.",
				"You may use this ability once per short or long rest."
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
				"Eliminate a sprung trap before the effect happens. If next to or a target the trap,",
				"use a reaction to disable it, preventing its effects. DEX check using thieves tools",
				"equal to the disarm DC or it activates as normal. This doesn't work for magical traps."
			]),
			action : ["reaction", ""]
		}
	}
});
