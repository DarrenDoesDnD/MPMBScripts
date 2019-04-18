/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Subclass
	Effect:     This script adds a subclass for the fighter, called "Bone Knight"
				This subclass was been created by Keith Baker, Ruty Rutenberg
				This code uses the subclass as it is featured in Eberron Morgrave Miscellany
	Code by:	Darren
	Date:		2019-04-16 (sheet v12.999)
*/

var iFileName = "Fighter - Bone Knight [M.T. Black's work, transcribed by Darren].js";
RequiredSheetVersion(12.999);

SourceList["EMM:BK"] = {
	name : "Eberron Morgrave Miscellany",
	abbreviation : "EMM:BK",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/270012/Morgrave-Miscellany?term=morgrave+miscellany&filters=45469",
	date : "2019/03/09" // unsure of exact date of release
};

AddSubClass("fighter", "bone knight", {
	regExpSearch : /^(?=.*bone)(?=.*knight).*$/i,
	subname : "Bone Knight",
	source : ["EMM:BK", 42],
	fullname : "Fighter: Bone Knight",
	abilitySave : 5,
    spellcastingFactor : "3",
	spellcastingTable : [ 
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 9
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl10
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl11
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl12
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl13
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl14
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl15
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl16
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl17
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl18
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl19
		[4, 3, 3, 1, 0, 0, 0, 0, 0] //lvl20
    ],
    spellcastingKnown : { 

		cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 

		spells : [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13],

		prepared : true, //Optional; This indicates that the class has to prepare spells like a cleric/druid/paladin/wizard

	},
	spellcastingList : {
        class : "cleric",
        school : ["Necro", "Trans"],
		level : [0, 4],
	},
	features : {
		"subclassfeature3" : {
			name : "Ivory Legionnaire",
			source : ["EMM:BK", 43],
            minlevel : 3,
            description : "\n   " + "You have an Warhorse Skeleton to ride into battle and a Skeleton Protector that obeys" + "\n   " + "your commands. It acts on your initiative and add your prof bonus to attack, damage," + "\n   " + "saves, and gains HP equal to your fighter level. If either dies, you can spend 1 hour" + "\n   " + "to reanimate the corpse, once per short rest." + "\n   " + "At 10th level, your skeleton becomes a Dread Warrior."
		},
		"subclassfeature7" : {
			name : "Bonecraft Armour",
			source : ["EMM:BK", 43],
			minlevel : 7,
			description : "\n   " + "You grow armour, expend a spell slot of 1st, or higher to increase effectivness, lasting" + "\n   " + "until the end of the next long rest. Armour: +1 AC per spell slot level." + "\n   " + "Bonecraft Armour. AC: 10+ CON + Prof bonus, you can use a shield.",
			recovery : "long rest",
            usages : 1,
            action : ["action", ""]
        },
        "subclassfeature7.1" : {
			name : "Bonecraft Weapon",
			source : ["EMM:BK", 43],
			minlevel : 7,
			description : "\n   " + "You grow weapons, expend a spell slot of 1st, or higher to increase effectiveness" + "\n   " + "Weapon: +1 attack and damage per spell slot level. Your weapon appears in your hand," + "\n   " + "and it breaks down to dust if more than 5 ft away from you for more than 1 minute.",
            action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Master of the Ivory Banner",
			source : ["EMM:BK", 44],
			minlevel : 10,
			description : "\n   " + "When using Second Wind, you add your proficiency bonus to all the hit points you" + "\n   " + "regain, undead allies within 60 ft gain temporary hit points equal to the same amount." // + "\n   " + "amount",
		},
		"subclassfeature15" : {
			name : "Death Strike",
			source : ["EMM:BK", 44],
			minlevel : 15,
			description : "\n   " + "When you hit a creature with melee or ranged bonecraft weapon, you can expend one" + "\n   " + "spell slot to deal an additional 1d10 damage per spell slot level used. Max. 4d10." + "\n   " + " This damage increase by 1d10 if the target is undead."
		},
		"subclassfeature18" : {
			name : "Grim Conscription",
			source : ["EMM:BK", 44],
			minlevel : 18,
			description : "\n   " + "Assume command of undead creatures from a willing summoner, or force undead you" + "\n   " + "can see within 30 ft of you to make a CHR save against your spell save DC. if the" + "\n   " + "target has INT 8 or higher, it has advantage on the save. If INT 12 or higher and it " + "\n   " + "fails, it can repeat the save each round. The total CR of your undead legion can't be" + "\n   " + "greater than your fighter level.",
            recovery : "short rest",
            usages : 1,
            action : ["action", ""]
        }
	}
});
