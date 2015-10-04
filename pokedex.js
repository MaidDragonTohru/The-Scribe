exports.pokedex = {
	0: {
		species: "Missingno.",
		randomBattleMoves: ["watergun","skyattack","doubleedge","metronome"],
		type: ["Bird", "Normal"],
		uber: 1
	},
	1: {
		species: "Bulbasaur",
		randomBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","powerwhip","leechseed","synthesis"],
		randomDoubleBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","powerwhip","protect"],
		type: ["Grass", "Poison"],
		nfe: 1
	},
	2: {
		species: "Ivysaur",
		randomBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","powerwhip","leechseed","synthesis"],
		randomDoubleBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","powerwhip","protect"],
		type: ["Grass", "Poison"],
		nfe: 1
	},
	3: {
		species: "Venusaur",
		randomBattleMoves: ["sunnyday","sleeppowder","gigadrain","hiddenpowerfire","sludgebomb","leechseed","substitute"],
		randomDoubleBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","powerwhip","protect"],
		megaRandomBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","sludgebomb","leechseed","synthesis","earthquake","knockoff"],
		megaRandomDoubleBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","powerwhip","protect"],
		type: ["Grass", "Poison"],
		mega: ["mega"],
	},
	4: {
		species: "Charmander",
		randomBattleMoves: ["flamethrower","overheat","dragonpulse","hiddenpowergrass","fireblast"],
		randomDoubleBattleMoves: ["heatwave","dragonpulse","hiddenpowergrass","fireblast","protect"],
		type: ["Fire"],
		nfe: 1
	},
	5: {
		species: "Charmeleon",
		randomBattleMoves: ["flamethrower","overheat","dragonpulse","hiddenpowergrass","fireblast","dragondance","flareblitz","shadowclaw","dragonclaw"],
		randomDoubleBattleMoves: ["heatwave","dragonpulse","hiddenpowergrass","fireblast","protect"],
		type: ["Fire"],
		nfe: 1
	},
	6: {
		species: "Charizard",
		//Standard moves
		randomBattleMoves: ["fireblast","airslash","focusblast","roost","swordsdance","flareblitz","acrobatics","earthquake"],
		randomDoubleBattleMoves: ["heatwave","fireblast","airslash","overheat","dragonpulse","roost","tailwind","protect"],
		//for Mega Charizard Y
		megaRandomBattleMoves: ["fireblast","airslash","roost","solarbeam","focusblast","dragonpulse"],
		megaRandomDoubleBattleMoves: ["heatwave","fireblast","airslash","roost","solarbeam","focusblast","protect"],
		//For Mega Charizard X
		extraMegaRandomBattleMoves: ["dragondance","flareblitz","dragonclaw","earthquake","roost","willowisp"],
		extraMegaRandomDoubleBattleMoves: ["dragondance","flareblitz","dragonclaw","earthquake","rockslide","roost","substitute"],
		type: ["Fire", "Flying"],
		mega: ["mega-x", "mega-y"]
	},
	7: {
		species: "Squirtle",
		randomBattleMoves: ["icebeam","hydropump","rapidspin","scald","aquajet","toxic"],
		randomDoubleBattleMoves: ["muddywater","icebeam","hydropump","fakeout","scald","followme","icywind","protect"],
		type: ["Water"],
		nfe: 1
	},
	8: {
		species: "Wartortle",
		randomBattleMoves: ["icebeam","hydropump","rapidspin","scald","aquajet","toxic"],
		randomDoubleBattleMoves: ["muddywater","icebeam","hydropump","fakeout","scald","followme","icywind","protect"],
		type: ["Water"],
		nfe: 1
	},
	9: {
		species: "Blastoise",
		randomBattleMoves: ["icebeam","rapidspin","scald","toxic","dragontail","roar"],
		randomDoubleBattleMoves: ["muddywater","icebeam","hydropump","fakeout","scald","followme","icywind","protect","waterspout"],
		megaRandomBattleMoves: ["icebeam","hydropump","rapidspin","scald","toxic","dragontail","darkpulse","aurasphere"],
		megaRandomDoubleBattleMoves: ["muddywater","icebeam","hydropump","fakeout","scald","darkpulse","aurasphere","followme","icywind","protect"],
		type: ["Water"],
		mega: ["mega"]
	},
	10: {
		species: "Caterpie",
		randomBattleMoves: ["bugbite","snore","tackle","electroweb"],
		type: ["Bug"],
		nfe: 1
	},
	11: {
		species: "Metapod",
		randomBattleMoves: ["snore","bugbite","tackle","electroweb"],
		type: ["Bug"],
		nfe: 1
	},
	12: {
		species: "Butterfree",
		randomBattleMoves: ["quiverdance","roost","bugbuzz","substitute","sleeppowder","psychic","shadowball"],
		randomDoubleBattleMoves: ["quiverdance","bugbuzz","substitute","sleeppowder","psychic","shadowball","protect"],
		type: ["Bug", "Flying"]
	},
	13: {
		species: "Weedle",
		randomBattleMoves: ["bugbite","stringshot","poisonsting","electroweb"],
		type: ["Bug", "Poison"],
		nfe: 1
	},
	14: {
		species: "Kakuna",
		randomBattleMoves: ["electroweb","bugbite","irondefense","poisonsting"],
		type: ["Bug", "Poison"],
		nfe: 1
	},
	15: {
		species: "Beedrill",
		type: ["Bug", "Poison"],
		randomBattleMoves: ["toxicspikes","tailwind","uturn","endeavor","poisonjab","knockoff"],
		randomDoubleBattleMoves: ["xscissor","uturn","poisonjab","drillrun","brickbreak","knockoff","protect","stringshot"],
		megaRandomBattleMoves: ["xscissor","swordsdance","uturn","poisonjab","drillrun","knockoff"],
		megaRDoubleBattleMoves: ["xscissor","uturn","substitute","poisonjab","drillrun","knockoff","protect"],
		mega: ["mega"]
	},
	16: {
		species: "Pidgey",
		randomBattleMoves: ["roost","bravebird","heatwave","return","workup","uturn","thief"],
		randomDoubleBattleMoves: ["bravebird","heatwave","return","uturn","tailwind","protect"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	17: {
		species: "Pidgeotto",
		randomBattleMoves: ["roost","bravebird","heatwave","return","workup","uturn","thief"],
		randomDoubleBattleMoves: ["bravebird","heatwave","return","uturn","tailwind","protect"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	18: {
		species: "Pidgeot",
		randomBattleMoves: ["roost","bravebird","heatwave","return","doubleedge","uturn","hurricane"],
		randomDoubleBattleMoves: ["bravebird","heatwave","return","doubleedge","uturn","tailwind","protect"],
		megaRandomBattleMoves: ["roost","heatwave","uturn","hurricane","defog"],
		megaRandomDoubleBattleMoves: ["tailwind","heatwave","uturn","hurricane","protect"],
		type: ["Normal", "Flying"],
		mega: ["mega"]
	},
	19: {
		species: "Rattata",
		randomBattleMoves: ["facade","flamewheel","suckerpunch","uturn","wildcharge","thunderwave","crunch","revenge"],
		randomDoubleBattleMoves: ["facade","flamewheel","suckerpunch","uturn","wildcharge","superfang","crunch","protect"],
		type: ["Normal"],
		nfe: 1
	},
	20: {
		species: "Raticate",
		randomBattleMoves: ["protect","facade","flamewheel","suckerpunch","uturn","swordsdance"],
		randomDoubleBattleMoves: ["facade","flamewheel","suckerpunch","uturn","crunch","protect"],
		type: ["Normal"]
	},
	21: {
		species: "Spearow",
		randomBattleMoves: ["return","drillpeck","doubleedge","uturn","quickattack","pursuit","drillrun","featherdance"],
		randomDoubleBattleMoves: ["return","drillpeck","doubleedge","uturn","quickattack","drillrun","protect"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	22: {
		species: "Fearow",
		randomBattleMoves: ["return","drillpeck","doubleedge","uturn","pursuit","drillrun"],
		randomDoubleBattleMoves: ["return","drillpeck","doubleedge","uturn","quickattack","drillrun","protect"],
		type: ["Normal", "Flying"]
	},
	23: {
		species: "Ekans",
		randomBattleMoves: ["coil","gunkshot","seedbomb","glare","suckerpunch","aquatail","earthquake","rest","rockslide"],
		randomDoubleBattleMoves: ["gunkshot","seedbomb","suckerpunch","aquatail","earthquake","rest","rockslide","protect"],
		type: ["Poison"],
		nfe: 1
	},
	24: {
		species: "Arbok",
		randomBattleMoves: ["coil","gunkshot","suckerpunch","aquatail","earthquake","rest"],
		randomDoubleBattleMoves: ["gunkshot","suckerpunch","aquatail","crunch","earthquake","rest","rockslide","protect"],
		type: ["Poison"]
	},
	25: {
		species: "Pikachu",
		randomBattleMoves: ["thunderbolt","volttackle","voltswitch","grassknot","hiddenpowerice","brickbreak","extremespeed","encore","substitute","knockoff"],
		randomDoubleBattleMoves: ["fakeout","thunderbolt","volttackle","voltswitch","grassknot","hiddenpowerice","brickbreak","extremespeed","encore","substitute","knockoff","protect","discharge"],
		type: ["Electric"],
		forms: ["rockstar", "belle", "popstar", "phd", "libre"],
		//Rockstar moves
		rockstarRandomMoves: ["meteormash","wildcharge","knockoff","brickbreak"],
		rockstarDoubleBattleMoves: ["meteormash","discharge","hiddenpowerice","protect"],
		//Belle moves
		belleBattleMoves: ["iciclecrash","thunderbolt","knockoff","brickbreak"],
		belleDoubleBattleMoves: ["iciclecrash","discharge","protect","brickbreak"],
		//Popstar
		popstarBattleMoves: ["drainingkiss","thunderbolt","hiddenpowerice","knockoff"],
		popstarDoubleBattleMoves: ["drainingkiss","discharge","hiddenpowerice","protect"],
		//Ph. D moves
		phdBattleMoves: ["electricterrain","thunderbolt","hiddenpowerice","knockoff"],
		phdDoubleBattleMoves: ["electricterrain","discharge","hiddenpowerice","protect"],
		//Libre moves
		libreBattleMoves: ["flyingpress","thunderbolt","knockoff","grassknot"],
		libreDoubleBattleMoves: ["flyingpress","discharge","knockoff","protect"],
		nfe: 1
	},
	26: {
		species: "Raichu",
		randomBattleMoves: ["nastyplot","encore","thunderbolt","grassknot","hiddenpowerice","focusblast","voltswitch"],
		randomDoubleBattleMoves: ["fakeout","encore","thunderbolt","grassknot","hiddenpowerice","focusblast","substitute","extremespeed","knockoff","protect"],
		type: ["Electric"]
	},
	27: {
		species: "Sandshrew",
		randomBattleMoves: ["earthquake","rockslide","swordsdance","rapidspin","xscissor","stealthrock","toxic","knockoff"],
		randomDoubleBattleMoves: ["earthquake","rockslide","swordsdance","xscissor","knockoff","protect"],
		type: ["Ground"],
		nfe: 1
	},
	28: {
		species: "Sandslash",
		randomBattleMoves: ["earthquake","swordsdance","rapidspin","toxic","stealthrock","knockoff"],
		randomDoubleBattleMoves: ["earthquake","rockslide","stoneedge","swordsdance","xscissor","knockoff","protect"],
		type: ["Ground"]
	},
	29: {
		species: "Nidoran-f",
		randomBattleMoves: ["toxicspikes","crunch","poisonjab","honeclaws"],
		randomDoubleBattleMoves: ["helpinghand","crunch","poisonjab","protect"],
		type: ["Poison"],
		nfe: 1
	},
	30: {
		species: "Nidorina",
		randomBattleMoves: ["toxicspikes","crunch","poisonjab","honeclaws","icebeam","thunderbolt","shadowclaw"],
		randomDoubleBattleMoves: ["helpinghand","crunch","poisonjab","protect","icebeam","thunderbolt","shadowclaw"],
		type: ["Poison"],
		nfe: 1
	},
	31: {
		species: "Nidoqueen",
		randomBattleMoves: ["toxicspikes","stealthrock","fireblast","icebeam","earthpower","sludgewave"],
		randomDoubleBattleMoves: ["helpinghand","protect","fireblast","icebeam","earthpower","sludgebomb"],
		type: ["Poison", "Ground"]
	},
	32: {
		species: "Nidoran-m",
		randomBattleMoves: ["suckerpunch","poisonjab","headsmash","honeclaws","shadowclaw"],
		randomDoubleBattleMoves: ["suckerpunch","poisonjab","shadowclaw","helpinghand","protect"],
		type: ["Poison"],
		nfe: 1
	},
	33: {
		species: "Nidorino",
		randomBattleMoves: ["suckerpunch","poisonjab","headsmash","honeclaws","shadowclaw"],
		randomDoubleBattleMoves: ["suckerpunch","poisonjab","shadowclaw","helpinghand","protect"],
		type: ["Poison"],
		nfe: 1
	},
	34: {
		species: "Nidoking",
		randomBattleMoves: ["substitute","fireblast","icebeam","earthpower","sludgewave","superpower"],
		randomDoubleBattleMoves: ["helpinghand","protect","fireblast","thunderbolt","icebeam","earthpower","sludgebomb","focusblast"],
		type: ["Poison", "Ground"]
	},
	35: {
		species: "Clefairy",
		randomBattleMoves: ["healingwish","reflect","thunderwave","lightscreen","toxic","fireblast","encore","wish","protect","aromatherapy","stealthrock","moonblast","knockoff","moonlight"],
		randomDoubleBattleMoves: ["reflect","thunderwave","lightscreen","safeguard","fireblast","followme","protect","moonblast"],
		type: ["Fairy"],
		nfe: 1
	},
	36: {
		species: "Clefable",
		randomBattleMoves: ["calmmind","softboiled","fireblast","moonblast","stealthrock","thunderwave"],
		randomDoubleBattleMoves: ["reflect","thunderwave","lightscreen","safeguard","fireblast","followme","protect","moonblast","dazzlinggleam","softboiled"],
		type: ["Fairy"]
	},
	37: {
		species: "Vulpix",
		randomBattleMoves: ["flamethrower","fireblast","willowisp","energyball","substitute","toxic","hypnosis","painsplit"],
		randomDoubleBattleMoves: ["heatwave","fireblast","willowisp","energyball","substitute","protect"],
		type: ["Fire"],
		nfe: 1
	},
	38: {
		species: "Ninetales",
		randomBattleMoves: ["fireblast","willowisp","solarbeam","nastyplot","substitute","hiddenpowerice"],
		randomDoubleBattleMoves: ["heatwave","fireblast","willowisp","solarbeam","substitute","protect"],
		type: ["Fire"]
	},
	39: {
		species: "Jigglypuff",
		randomBattleMoves: ["wish","thunderwave","reflect","lightscreen","healbell","seismictoss","counter","stealthrock","protect","knockoff","dazzlinggleam"],
		randomDoubleBattleMoves: ["wish","thunderwave","reflect","lightscreen","seismictoss","protect","knockoff","dazzlinggleam"],
		type: ["Normal", "Fairy"],
		nfe: 1
	},
	40: {
		species: "Wigglytuff",
		randomBattleMoves: ["wish","protect","fireblast","stealthrock","dazzlinggleam","hypervoice"],
		randomDoubleBattleMoves: ["thunderwave","reflect","lightscreen","protect","knockoff","dazzlinggleam","fireblast","icebeam","hypervoice"],
		type: ["Normal", "Fairy"]
	},
	41: {
		species: "Zubat",
		randomBattleMoves: ["bravebird","roost","toxic","taunt","nastyplot","gigadrain","sludgebomb","airslash","uturn","whirlwind","heatwave","superfang"],
		randomDoubleBattleMoves: ["bravebird","taunt","nastyplot","gigadrain","sludgebomb","airslash","uturn","protect","heatwave","superfang"],
		type: ["Poison", "Flying"],
		nfe: 1
	},
	42: {
		species: "Golbat",
		randomBattleMoves: ["bravebird","roost","toxic","taunt","defog","superfang","uturn"],
		randomDoubleBattleMoves: ["bravebird","taunt","nastyplot","gigadrain","sludgebomb","airslash","uturn","protect","heatwave","superfang"],
		type: ["Poison", "Flying"],
		nfe: 1
	},
	43: {
		species: "Oddish",
		randomBattleMoves: ["gigadrain","sludgebomb","synthesis","sleeppowder","stunspore","toxic","hiddenpowerfire","leechseed","dazzlinggleam","sunnyday"],
		randomDoubleBattleMoves: ["gigadrain","sludgebomb","sleeppowder","stunspore","protect","hiddenpowerfire","leechseed","dazzlinggleam","sunnyday"],
		type: ["Grass", "Poison"],
		nfe: 1
	},
	44: {
		species: "Gloom",
		randomBattleMoves: ["gigadrain","sludgebomb","synthesis","sleeppowder","stunspore","toxic","hiddenpowerfire","leechseed","dazzlinggleam","sunnyday"],
		randomDoubleBattleMoves: ["gigadrain","sludgebomb","sleeppowder","stunspore","protect","hiddenpowerfire","leechseed","dazzlinggleam","sunnyday"],
		type: ["Grass", "Poison"],
		nfe: 1
	},
	45: {
		species: "Vileplume",
		randomBattleMoves: ["gigadrain","sludgebomb","synthesis","sleeppowder","hiddenpowerfire","aromatherapy"],
		randomDoubleBattleMoves: ["gigadrain","sludgebomb","sleeppowder","stunspore","protect","hiddenpowerfire","moonblast","dazzlinggleam"],
		type: ["Grass", "Poison"]
	},
	46: {
		species: "Paras",
		randomBattleMoves: ["spore","stunspore","xscissor","seedbomb","synthesis","leechseed","aromatherapy","knockoff"],
		randomDoubleBattleMoves: ["spore","stunspore","xscissor","seedbomb","ragepowder","leechseed","protect","knockoff","wideguard"],
		type: ["Bug", "Grass"],
		nfe: 1
	},
	47: {
		species: "Parasect",
		randomBattleMoves: ["spore","substitute","xscissor","seedbomb","leechseed","knockoff"],
		randomDoubleBattleMoves: ["spore","stunspore","xscissor","seedbomb","ragepowder","leechseed","protect","knockoff","wideguard"],
		type: ["Bug", "Grass"]
	},
	48: {
		species: "Venonat",
		randomBattleMoves: ["sleeppowder","morningsun","toxicspikes","sludgebomb","signalbeam","stunspore","psychic"],
		randomDoubleBattleMoves: ["sleeppowder","morningsun","ragepowder","sludgebomb","signalbeam","stunspore","psychic","protect"],
		type: ["Bug", "Poison"],
		nfe: 1
	},
	49: {
		species: "Venomoth",
		randomBattleMoves: ["sleeppowder","quiverdance","batonpass","bugbuzz","sludgebomb","substitute"],
		randomDoubleBattleMoves: ["sleeppowder","roost","ragepowder","quiverdance","protect","bugbuzz","sludgebomb","gigadrain","substitute","psychic"],
		type: ["Bug", "Poison"]
	},
	50: {
		species: "Diglett",
		randomBattleMoves: ["earthquake","rockslide","stealthrock","suckerpunch","reversal","substitute","shadowclaw"],
		randomDoubleBattleMoves: ["earthquake","rockslide","protect","suckerpunch","shadowclaw"],
		type: ["Ground"],
		nfe: 1
	},
	51: {
		species: "Dugtrio",
		randomBattleMoves: ["earthquake","stoneedge","stealthrock","suckerpunch","reversal","substitute"],
		randomDoubleBattleMoves: ["earthquake","rockslide","protect","suckerpunch","stoneedge"],
		type: ["Ground"]
	},
	52: {
		species: "Meowth",
		randomBattleMoves: ["fakeout","uturn","thief","taunt","return","hypnosis"],
		randomDoubleBattleMoves: ["fakeout","uturn","nightslash","taunt","return","hypnosis","feint","protect"],
		type: ["Normal"],
		nfe: 1
	},
	53: {
		species: "Persian",
		randomBattleMoves: ["fakeout","uturn","taunt","return","knockoff"],
		randomDoubleBattleMoves: ["fakeout","uturn","knockoff","taunt","return","hypnosis","feint","protect"],
		type: ["Normal"]
	},
	54: {
		species: "Psyduck",
		randomBattleMoves: ["hydropump","scald","icebeam","hiddenpowergrass","crosschop","encore","psychic","signalbeam"],
		randomDoubleBattleMoves: ["hydropump","scald","icebeam","hiddenpowergrass","crosschop","encore","psychic","signalbeam","surf","icywind","protect"],
		type: ["Water"],
		nfe: 1
	},
	55: {
		species: "Golduck",
		randomBattleMoves: ["hydropump","scald","icebeam","signalbeam","encore","calmmind","substitute"],
		randomDoubleBattleMoves: ["hydropump","scald","icebeam","hiddenpowergrass","focusblast","encore","psychic","surf","icywind","protect"],
		type: ["Water"]
	},
	56: {
		species: "Mankey",
		randomBattleMoves: ["closecombat","uturn","icepunch","rockslide","punishment","earthquake","poisonjab"],
		randomDoubleBattleMoves: ["closecombat","uturn","icepunch","rockslide","punishment","earthquake","poisonjab","protect"],
		type: ["Fighting"],
		nfe: 1
	},
	57: {
		species: "Primeape",
		randomBattleMoves: ["closecombat","uturn","icepunch","stoneedge","encore","earthquake","gunkshot"],
		randomDoubleBattleMoves: ["closecombat","uturn","icepunch","rockslide","punishment","earthquake","poisonjab","protect","taunt","stoneedge"],
		type: ["Fighting"]
	},
	58: {
		species: "Growlithe",
		randomBattleMoves: ["flareblitz","wildcharge","hiddenpowergrass","closecombat","morningsun","willowisp","toxic","flamethrower"],
		randomDoubleBattleMoves: ["flareblitz","wildcharge","hiddenpowergrass","closecombat","willowisp","snarl","heatwave","helpinghand","protect"],
		type: ["Fire"],
		nfe: 1
	},
	59: {
		species: "Arcanine",
		randomBattleMoves: ["flareblitz","wildcharge","extremespeed","closecombat","morningsun","willowisp","toxic","crunch","roar"],
		randomDoubleBattleMoves: ["flareblitz","wildcharge","closecombat","willowisp","snarl","helpinghand","protect","extremespeed"],
		type: ["Fire"]
	},
	60: {
		species: "Poliwag",
		randomBattleMoves: ["hydropump","icebeam","encore","bellydrum","hypnosis","waterfall","return"],
		randomDoubleBattleMoves: ["hydropump","icebeam","encore","icywind","hypnosis","waterfall","return","protect","helpinghand"],
		type: ["Water"],
		nfe: 1
	},
	61: {
		species: "Poliwhirl",
		randomBattleMoves: ["hydropump","icebeam","encore","bellydrum","hypnosis","waterfall","return","earthquake"],
		randomDoubleBattleMoves: ["hydropump","icebeam","encore","icywind","hypnosis","waterfall","return","protect","helpinghand","earthquake"],
		type: ["Water"],
		nfe: 1
	},
	62: {
		species: "Poliwrath",
		randomBattleMoves: ["hydropump","focusblast","icebeam","rest","sleeptalk","scald","circlethrow","raindance"],
		randomDoubleBattleMoves: ["bellydrum","encore","waterfall","protect","icepunch","earthquake","brickbreak","rockslide"],
		type: ["Water", "Fighting"]
	},
	63: {
		species: "Abra",
		randomBattleMoves: ["calmmind","psychic","psyshock","hiddenpowerfighting","shadowball","encore","substitute"],
		randomDoubleBattleMoves: ["protect","psychic","psyshock","hiddenpowerfighting","shadowball","encore","substitute"],
		type: ["Psychic"],
		nfe: 1
	},
	64: {
		species: "Kadabra",
		randomBattleMoves: ["calmmind","psychic","psyshock","hiddenpowerfighting","shadowball","encore","substitute"],
		randomDoubleBattleMoves: ["protect","psychic","psyshock","hiddenpowerfighting","shadowball","encore","substitute"],
		type: ["Psychic"],
		nfe: 1
	},
	65: {
		species: "Alakazam",
		randomBattleMoves: ["psyshock","psychic","focusblast","shadowball","hiddenpowerice","hiddenpowerfire"],
		randomDoubleBattleMoves: ["protect","psychic","psyshock","focusblast","shadowball","encore","substitute","dazzlinggleam"],
		megaRandomBattleMoves: ["calmmind","psyshock","focusblast","shadowball","encore","substitute"],
		megaRandomDoubleBattleMoves: ["protect","psychic","psyshock","focusblast","shadowball","encore","substitute","dazzlinggleam"],
		type: ["Psychic"],
		mega: ["mega"]
	},
	66: {
		species: "Machop",
		randomBattleMoves: ["dynamicpunch","bulkup","icepunch","rockslide","bulletpunch","knockoff"],
		randomDoubleBattleMoves: ["dynamicpunch","protect","icepunch","rockslide","bulletpunch","knockoff"],
		type: ["Fighting"],
		nfe: 1
	},
	67: {
		species: "Machoke",
		randomBattleMoves: ["dynamicpunch","bulkup","icepunch","rockslide","bulletpunch","poweruppunch","knockoff"],
		randomDoubleBattleMoves: ["dynamicpunch","protect","icepunch","rockslide","bulletpunch","knockoff"],
		type: ["Fighting"],
		nfe: 1
	},
	68: {
		species: "Machamp",
		randomBattleMoves: ["dynamicpunch","icepunch","stoneedge","bulletpunch","knockoff","substitute"],
		randomDoubleBattleMoves: ["dynamicpunch","protect","icepunch","stoneedge","rockslide","bulletpunch","knockoff","wideguard"],
		type: ["Fighting"]
	},
	69: {
		species: "Bellsprout",
		randomBattleMoves: ["swordsdance","sleeppowder","sunnyday","growth","solarbeam","gigadrain","sludgebomb","weatherball","suckerpunch","seedbomb"],
		randomDoubleBattleMoves: ["swordsdance","sleeppowder","sunnyday","growth","solarbeam","gigadrain","sludgebomb","weatherball","suckerpunch","seedbomb","protect"],
		type: ["Grass", "Poison"],
		nfe: 1
	},
	70: {
		species: "Weepinbell",
		randomBattleMoves: ["swordsdance","sleeppowder","sunnyday","growth","solarbeam","gigadrain","sludgebomb","weatherball","suckerpunch","seedbomb","knockoff"],
		randomDoubleBattleMoves: ["swordsdance","sleeppowder","sunnyday","growth","solarbeam","gigadrain","sludgebomb","weatherball","suckerpunch","seedbomb","protect","knockoff"],
		type: ["Grass", "Poison"],
		nfe: 1
	},
	71: {
		species: "Victreebel",
		randomBattleMoves: ["sleeppowder","sunnyday","growth","solarbeam","gigadrain","sludgebomb","weatherball","suckerpunch","powerwhip","knockoff","swordsdance"],
		randomDoubleBattleMoves: ["swordsdance","sleeppowder","sunnyday","growth","solarbeam","gigadrain","sludgebomb","weatherball","suckerpunch","powerwhip","protect","knockoff"],
		type: ["Grass", "Poison"]
	},
	72: {
		species: "Tentacool",
		randomBattleMoves: ["toxicspikes","rapidspin","scald","sludgebomb","icebeam","knockoff","gigadrain","toxic","dazzlinggleam"],
		randomDoubleBattleMoves: ["muddywater","scald","sludgebomb","icebeam","knockoff","gigadrain","protect","dazzlinggleam"],
		type: ["Water", "Poison"],
		nfe: 1
	},
	73: {
		species: "Tentacruel",
		randomBattleMoves: ["toxicspikes","rapidspin","scald","sludgebomb","protect","knockoff"],
		randomDoubleBattleMoves: ["muddywater","scald","sludgebomb","acidspray","icebeam","knockoff","gigadrain","protect","dazzlinggleam"],
		type: ["Water", "Poison"]
	},
	74: {
		species: "Geodude",
		randomBattleMoves: ["stealthrock","earthquake","stoneedge","suckerpunch","hammerarm","firepunch","rockblast"],
		randomDoubleBattleMoves: ["rockslide","earthquake","stoneedge","suckerpunch","hammerarm","firepunch","protect"],
		type: ["Rock", "Ground"],
		nfe: 1
	},
	75: {
		species: "Graveler",
		randomBattleMoves: ["stealthrock","earthquake","stoneedge","suckerpunch","hammerarm","firepunch","rockblast"],
		randomDoubleBattleMoves: ["rockslide","earthquake","stoneedge","suckerpunch","hammerarm","firepunch","protect"],
		type: ["Rock", "Ground"],
		nfe: 1
	},
	76: {
		species: "Golem",
		randomBattleMoves: ["stealthrock","earthquake","explosion","suckerpunch","toxic","rockblast"],
		randomDoubleBattleMoves: ["rockslide","earthquake","stoneedge","suckerpunch","hammerarm","firepunch","protect"],
		type: ["Rock", "Ground"]
	},
	77: {
		species: "Ponyta",
		randomBattleMoves: ["flareblitz","wildcharge","morningsun","hypnosis","flamecharge"],
		randomDoubleBattleMoves: ["flareblitz","wildcharge","protect","hypnosis","flamecharge"],
		type: ["Fire"],
		nfe: 1
	},
	78: {
		species: "Rapidash",
		randomBattleMoves: ["flareblitz","wildcharge","morningsun","drillrun","willowisp","sunnyday","solarbeam"],
		randomDoubleBattleMoves: ["flareblitz","wildcharge","protect","hypnosis","flamecharge","megahorn","drillrun","willowisp"],
		type: ["Fire"]
	},
	79: {
		species: "Slowpoke",
		randomBattleMoves: ["scald","aquatail","zenheadbutt","thunderwave","toxic","slackoff","trickroom"],
		randomDoubleBattleMoves: ["scald","aquatail","zenheadbutt","thunderwave","slackoff","trickroom","protect"],
		type: ["Water", "Psychic"],
		nfe: 1
	},
	80: {
		species: "Slowbro",
		randomBattleMoves: ["scald","toxic","thunderwave","psyshock","foulplay","fireblast","icebeam","slackoff"],
		randomDoubleBattleMoves: ["scald","fireblast","icebeam","psychic","grassknot","thunderwave","slackoff","trickroom","protect","psyshock"],
		megaRandomBattleMoves: ["calmmind","scald","psyshock","slackoff","fireblast","psychic","icebeam","grassknot"],
		megaRandomDoubleBattleMoves: ["scald","fireblast","icebeam","psychic","grassknot","thunderwave","slackoff","trickroom","protect","psyshock"],
		type: ["Water", "Psychic"],
		mega: ["mega"]
	},
	81: {
		species: "Magnemite",
		randomBattleMoves: ["thunderbolt","thunderwave","magnetrise","substitute","flashcannon","hiddenpowerice","voltswitch"],
		randomDoubleBattleMoves: ["thunderbolt","thunderwave","magnetrise","substitute","flashcannon","hiddenpowerice","voltswitch","protect","electroweb","discharge"],
		type: ["Electric", "Steel"],
		nfe: 1
	},
	82: {
		species: "Magneton",
		randomBattleMoves: ["thunderbolt","substitute","flashcannon","hiddenpowerice","voltswitch","chargebeam","hiddenpowerfire"],
		randomDoubleBattleMoves: ["thunderbolt","thunderwave","magnetrise","substitute","flashcannon","hiddenpowerice","voltswitch","protect","electroweb","discharge","hiddenpowerfire"],
		type: ["Electric", "Steel"],
		nfe: 1
	},
	83: {
		species: "Farfetch'd",
		randomBattleMoves: ["bravebird","swordsdance","return","leafblade","roost","nightslash"],
		randomDoubleBattleMoves: ["bravebird","swordsdance","return","leafblade","protect","nightslash"],
		type: ["Normal", "Flying"]
	},
	84: {
		species: "Doduo",
		randomBattleMoves: ["bravebird","return","doubleedge","roost","quickattack","pursuit"],
		randomDoubleBattleMoves: ["bravebird","return","doubleedge","quickattack","protect"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	85: {
		species: "Dodrio",
		randomBattleMoves: ["bravebird","return","doubleedge","roost","quickattack","knockoff"],
		randomDoubleBattleMoves: ["bravebird","return","doubleedge","quickattack","protect"],
		type: ["Normal", "Flying"]
	},
	86: {
		species: "Seel",
		randomBattleMoves: ["surf","icebeam","aquajet","protect","rest","toxic","drillrun"],
		randomDoubleBattleMoves: ["surf","icebeam","aquajet","protect","rest","toxic","fakeout","drillrun","icywind"],
		type: ["Water"],
		nfe: 1
	},
	87: {
		species: "Dewgong",
		randomBattleMoves: ["surf","icebeam","perishsong","encore","toxic","protect"],
		randomDoubleBattleMoves: ["surf","icebeam","protect","perishsong","fakeout","encore","toxic"],
		type: ["Water", "Ice"]
	},
	88: {
		species: "Grimer",
		randomBattleMoves: ["curse","gunkshot","poisonjab","shadowsneak","painsplit","icepunch","firepunch","memento"],
		randomDoubleBattleMoves: ["gunkshot","poisonjab","shadowsneak","protect","icepunch","firepunch"],
		type: ["Poison"],
		nfe: 1
	},
	89: {
		species: "Muk",
		randomBattleMoves: ["curse","gunkshot","poisonjab","shadowsneak","icepunch","firepunch","memento"],
		randomDoubleBattleMoves: ["gunkshot","poisonjab","shadowsneak","protect","icepunch","firepunch","brickbreak"],
		type: ["Poison"]
	},
	90: {
		species: "Shellder",
		randomBattleMoves: ["shellsmash","hydropump","razorshell","rockblast","iciclespear","rapidspin"],
		randomDoubleBattleMoves: ["shellsmash","hydropump","razorshell","rockblast","iciclespear","protect"],
		type: ["Water"],
		nfe: 1
	},
	91: {
		species: "Cloyster",
		randomBattleMoves: ["shellsmash","hydropump","rockblast","iciclespear","iceshard","rapidspin","spikes","toxicspikes"],
		randomDoubleBattleMoves: ["shellsmash","hydropump","razorshell","rockblast","iciclespear","protect"],
		type: ["Water", "Ice"]
	},
	92: {
		species: "Gastly",
		randomBattleMoves: ["shadowball","sludgebomb","hiddenpowerfighting","thunderbolt","substitute","disable","painsplit","hypnosis","gigadrain","trick","dazzlinggleam"],
		randomDoubleBattleMoves: ["shadowball","sludgebomb","hiddenpowerfighting","thunderbolt","substitute","disable","taunt","hypnosis","gigadrain","trick","dazzlinggleam","protect"],
		type: ["Ghost", "Poison"],
		nfe: 1
	},
	93: {
		species: "Haunter",
		randomBattleMoves: ["shadowball","sludgebomb","dazzlinggleam","substitute","destinybond"],
		randomDoubleBattleMoves: ["shadowball","sludgebomb","hiddenpowerfighting","thunderbolt","substitute","disable","taunt","hypnosis","gigadrain","trick","dazzlinggleam","protect"],
		type: ["Ghost", "Poison"],
		nfe: 1
	},
	94: {
		species: "Gengar",
		randomBattleMoves: ["shadowball","sludgewave","focusblast","substitute","disable","painsplit","willowisp"],
		randomDoubleBattleMoves: ["shadowball","sludgebomb","focusblast","substitute","disable","taunt","hypnosis","willowisp","dazzlinggleam","protect"],
		megaRandomBattleMoves: ["shadowball","sludgewave","focusblast","taunt","destinybond","disable","perishsong","protect"],
		megaRandomDoubleBattleMoves: ["shadowball","sludgebomb","focusblast","substitute","disable","taunt","hypnosis","willowisp","dazzlinggleam","protect"],
		type: ["Ghost", "Poison"],
		mega: ["mega"]
	},
	95: {
		species: "Onix",
		randomBattleMoves: ["stealthrock","earthquake","stoneedge","dragontail","curse"],
		randomDoubleBattleMoves: ["stealthrock","earthquake","stoneedge","rockslide","protect","explosion"],
		type: ["Rock", "Ground"],
		nfe: 1
	},
	96: {
		species: "Drowzee",
		randomBattleMoves: ["psychic","seismictoss","thunderwave","wish","protect","toxic","shadowball","trickroom","calmmind","dazzlinggleam"],
		randomDoubleBattleMoves: ["psychic","seismictoss","thunderwave","wish","protect","hypnosis","shadowball","trickroom","calmmind","dazzlinggleam","toxic"],
		type: ["Psychic"],
		nfe: 1
	},
	97: {
		species: "Hypno",
		randomBattleMoves: ["psychic","seismictoss","foulplay","wish","protect","thunderwave","toxic"],
		randomDoubleBattleMoves: ["psychic","seismictoss","thunderwave","wish","protect","hypnosis","trickroom","dazzlinggleam","foulplay"],
		type: ["Psychic"]
	},
	98: {
		species: "Krabby",
		randomBattleMoves: ["crabhammer","swordsdance","agility","rockslide","substitute","xscissor","superpower","knockoff"],
		randomDoubleBattleMoves: ["crabhammer","swordsdance","rockslide","substitute","xscissor","superpower","knockoff","protect"],
		type: ["Water"],
		nfe: 1
	},
	99: {
		species: "Kingler",
		randomBattleMoves: ["crabhammer","xscissor","rockslide","swordsdance","agility","superpower","knockoff"],
		randomDoubleBattleMoves: ["crabhammer","xscissor","rockslide","substitute","superpower","knockoff","protect","wideguard"],
		type: ["Water"]
	},
	100: {
		species: "Voltorb",
		randomBattleMoves: ["voltswitch","thunderbolt","taunt","foulplay","hiddenpowerice"],
		randomDoubleBattleMoves: ["voltswitch","thunderbolt","taunt","foulplay","hiddenpowerice","protect","thunderwave"],
		type: ["Electric"],
		nfe: 1
	},
	101: {
		species: "Electrode",
		randomBattleMoves: ["voltswitch","thunderbolt","taunt","foulplay","hiddenpowergrass","signalbeam"],
		randomDoubleBattleMoves: ["voltswitch","discharge","taunt","foulplay","hiddenpowerice","protect","thunderwave"],
		type: ["Electric"],
		nfe: 1
	},
	102: {
		species: "Exeggcute",
		randomBattleMoves: ["substitute","leechseed","gigadrain","psychic","sleeppowder","stunspore","hiddenpowerfire","synthesis"],
		randomDoubleBattleMoves: ["substitute","leechseed","gigadrain","psychic","sleeppowder","stunspore","hiddenpowerfire","protect","trickroom"],
		type: ["Grass", "Psychic"]
	},
	103: {
		species: "Exeggutor",
		randomBattleMoves: ["substitute","leechseed","gigadrain","psychic","sleeppowder","hiddenpowerfire"],
		randomDoubleBattleMoves: ["substitute","leechseed","gigadrain","psychic","sleeppowder","hiddenpowerfire","protect","trickroom","psyshock"],
		type: ["Grass", "Psychic"]
	},
	104: {
		species: "Cubone",
		randomBattleMoves: ["substitute","bonemerang","doubleedge","rockslide","firepunch","earthquake"],
		randomDoubleBattleMoves: ["substitute","bonemerang","doubleedge","rockslide","firepunch","earthquake","protect"],
		type: ["Ground"],
		nfe: 1
	},
	105: {
		species: "Marowak",
		randomBattleMoves: ["bonemerang","earthquake","knockoff","doubleedge","stoneedge","stealthrock","substitute"],
		randomDoubleBattleMoves: ["substitute","bonemerang","doubleedge","rockslide","firepunch","earthquake","protect","swordsdance"],
		type: ["Ground"]
	},
	106: {
		species: "Hitmonlee",
		randomBattleMoves: ["highjumpkick","knockoff","stoneedge","rapidspin","machpunch","poisonjab","fakeout"],
		randomDoubleBattleMoves: ["knockoff","rockslide","machpunch","fakeout","highjumpkick","earthquake","blazekick","wideguard","protect"],
		type: ["Fighting"]
	},
	107: {
		species: "Hitmonchan",
		randomBattleMoves: ["bulkup","drainpunch","icepunch","firepunch","machpunch","rapidspin"],
		randomDoubleBattleMoves: ["fakeout","drainpunch","icepunch","firepunch","machpunch","earthquake","rockslide","protect","thunderpunch"],
		type: ["Fighting"]
	},
	108: {
		species: "Lickitung",
		randomBattleMoves: ["wish","protect","dragontail","curse","bodyslam","return","powerwhip","swordsdance","earthquake","toxic","healbell"],
		randomDoubleBattleMoves: ["wish","protect","dragontail","knockoff","bodyslam","return","powerwhip","swordsdance","earthquake","toxic","healbell"],
		type: ["Normal"],
		nfe: 1
	},
	109: {
		species: "Koffing",
		randomBattleMoves: ["painsplit","sludgebomb","willowisp","fireblast","toxic","clearsmog","rest","sleeptalk","thunderbolt"],
		randomDoubleBattleMoves: ["protect","sludgebomb","willowisp","fireblast","toxic","rest","sleeptalk","thunderbolt"],
		type: ["Poison"],
		nfe: 1
	},
	110: {
		species: "Weezing",
		randomBattleMoves: ["painsplit","sludgebomb","willowisp","fireblast","protect","toxicspikes"],
		randomDoubleBattleMoves: ["protect","sludgebomb","willowisp","fireblast","toxic","painsplit","thunderbolt","explosion"],
		type: ["Poison"]
	},
	111: {
		species: "Rhyhorn",
		randomBattleMoves: ["stoneedge","earthquake","aquatail","megahorn","stealthrock","rockblast","rockpolish"],
		randomDoubleBattleMoves: ["stoneedge","earthquake","aquatail","megahorn","stealthrock","rockslide","protect"],
		type: ["Ground", "Rock"],
		nfe: 1
	},
	112: {
		species: "Rhydon",
		randomBattleMoves: ["stealthrock","earthquake","rockblast","roar","swordsdance","stoneedge","megahorn","rockpolish"],
		randomDoubleBattleMoves: ["stoneedge","earthquake","aquatail","megahorn","stealthrock","rockslide","protect"],
		type: ["Ground", "Rock"],
		nfe: 1
	},
	113: {
		species: "Chansey",
		randomBattleMoves: ["softboiled","healbell","stealthrock","thunderwave","toxic","seismictoss","wish","protect","counter"],
		randomDoubleBattleMoves: ["aromatherapy","toxic","thunderwave","helpinghand","softboiled","lightscreen","seismictoss","protect","wish"],
		type: ["Normal"],
		nfe: 1
	},
	114: {
		species: "Tangela",
		randomBattleMoves: ["gigadrain","sleeppowder","hiddenpowerfire","hiddenpowerice","leechseed","knockoff","leafstorm","sludgebomb","synthesis"],
		randomDoubleBattleMoves: ["gigadrain","sleeppowder","hiddenpowerrock","hiddenpowerice","leechseed","knockoff","leafstorm","stunspore","protect","hiddenpowerfire"],
		type: ["Grass"],
		nfe: 1
	},
	115: {
		species: "Kangaskhan",
		randomBattleMoves: ["return","suckerpunch","earthquake","drainpunch","crunch","fakeout"],
		randomDoubleBattleMoves: ["fakeout","return","suckerpunch","earthquake","doubleedge","drainpunch","crunch","protect"],
		megaRandomBattleMoves: ["fakeout","return","suckerpunch","earthquake","poweruppunch","crunch"],
		megaRandomDoubleBattleMoves: ["fakeout","return","suckerpunch","earthquake","doubleedge","poweruppunch","drainpunch","crunch","protect"],
		type: ["Normal"],
		mega: ["mega"]
	},
	116: {
		species: "Horsea",
		randomBattleMoves: ["hydropump","icebeam","substitute","hiddenpowergrass","raindance"],
		randomDoubleBattleMoves: ["hydropump","icebeam","substitute","hiddenpowergrass","raindance","muddywater","protect"],
		type: ["Water"],
		nfe: 1
	},
	117: {
		species: "Seadra",
		randomBattleMoves: ["hydropump","icebeam","agility","substitute","hiddenpowergrass"],
		randomDoubleBattleMoves: ["hydropump","icebeam","substitute","hiddenpowergrass","agility","muddywater","protect"],
		type: ["Water"],
		nfe: 1
	},
	118: {
		species: "Goldeen",
		randomBattleMoves: ["waterfall","megahorn","knockoff","drillrun","icebeam"],
		randomDoubleBattleMoves: ["waterfall","megahorn","knockoff","drillrun","icebeam","protect"],
		type: ["Water"],
		nfe: 1
	},
	119: {
		species: "Seaking",
		randomBattleMoves: ["waterfall","megahorn","knockoff","drillrun","scald","icebeam"],
		randomDoubleBattleMoves: ["waterfall","surf","megahorn","knockoff","drillrun","icebeam","icywind","protect"],
		type: ["Water"]
	},
	120: {
		species: "Staryu",
		randomBattleMoves: ["scald","thunderbolt","icebeam","rapidspin","recover","dazzlinggleam","hydropump"],
		randomDoubleBattleMoves: ["scald","thunderbolt","icebeam","protect","recover","dazzlinggleam","hydropump"],
		type: ["Water"],
		nfe: 1
	},
	121: {
		species: "Starmie",
		randomBattleMoves: ["thunderbolt","icebeam","rapidspin","recover","psyshock","scald","hydropump"],
		randomDoubleBattleMoves: ["surf","thunderbolt","icebeam","protect","recover","psychic","psyshock","scald","hydropump"],
		type: ["Water", "Psychic"]
	},
	122: {
		species: "Mr.Mime",
		randomBattleMoves: ["nastyplot","psychic","psyshock","dazzlinggleam","shadowball","batonpass","focusblast","healingwish","encore"],
		randomDoubleBattleMoves: ["fakeout","thunderwave","hiddenpowerfighting","teeterdance","thunderbolt","encore","icywind","protect","wideguard","dazzlinggleam"],
		type: ["Psychic", "Fairy"]
	},
	123: {
		species: "Scyther",
		randomBattleMoves: ["swordsdance","roost","bugbite","quickattack","brickbreak","aerialace","batonpass","uturn","knockoff"],
		randomDoubleBattleMoves: ["swordsdance","protect","bugbite","quickattack","brickbreak","aerialace","feint","uturn","knockoff"],
		type: ["Bug", "Flying"],
		nfe: 1
	},
	124: {
		species: "Jynx",
		randomBattleMoves: ["icebeam","psychic","focusblast","trick","nastyplot","lovelykiss","substitute","psyshock"],
		randomDoubleBattleMoves: ["icebeam","psychic","hiddenpowerfighting","shadowball","protect","lovelykiss","substitute","psyshock"],
		type: ["Ice", "Psychic"]
	},
	125: {
		species: "Electabuzz",
		randomBattleMoves: ["thunderbolt","voltswitch","substitute","hiddenpowerice","hiddenpowergrass","focusblast","psychic"],
		randomDoubleBattleMoves: ["thunderbolt","crosschop","voltswitch","substitute","icepunch","psychic","hiddenpowergrass","protect","focusblast","discharge"],
		type: ["Electric"],
		nfe: 1
	},
	126: {
		species: "Magmar",
		type: ["Fire"],
		nfe: 1
	},
	127: {
		species: "Pinsir",
		randomBattleMoves: ["earthquake","xscissor","closecombat","stoneedge","stealthrock","knockoff"],
		randomDoubleBattleMoves: ["protect","swordsdance","xscissor","earthquake","closecombat","substitute","rockslide"],
		megaRandomBattleMoves: ["swordsdance","earthquake","closecombat","quickattack","return"],
		megaRandomDoubleBattleMoves: ["feint","protect","swordsdance","xscissor","earthquake","closecombat","substitute","quickattack","return","rockslide"],
		type: ["Bug"],
		mega: ["mega"]
	},
	128: {
		species: "Tauros",
		randomBattleMoves: ["rockclimb","earthquake","zenheadbutt","rockslide","doubleedge"],
		randomDoubleBattleMoves: ["return","earthquake","zenheadbutt","rockslide","stoneedge","protect","doubleedge"],
		type: ["Normal"]
	},
	129: {
		species: "Magikarp",
		randomBattleMoves: ["bounce","flail","tackle","hydropump"],
		type: ["Water"],
		nfe: 1
	},
	130: {
		species: "Gyarados",
		randomBattleMoves: ["dragondance","waterfall","earthquake","bounce","rest","sleeptalk","dragontail","stoneedge","substitute"],
		randomDoubleBattleMoves: ["dragondance","waterfall","earthquake","bounce","taunt","protect","thunderwave","stoneedge","substitute","icefang"],
		megaRandomBattleMoves: ["dragondance","waterfall","earthquake","substitute","icefang","crunch"],
		megaRandomDoubleBattleMoves: ["dragondance","waterfall","earthquake","bounce","taunt","protect","thunderwave","stoneedge","substitute","icefang"],
		type: ["Water", "Flying"],
		mega: ["mega"]
	},
	131: {
		species: "Lapras",
		randomBattleMoves: ["icebeam","thunderbolt","healbell","toxic","hydropump","substitute"],
		randomDoubleBattleMoves: ["icebeam","thunderbolt","healbell","hydropump","surf","substitute","protect","iceshard","icywind"],
		type: ["Water", "Ice"]
	},
	132: {
		species: "Ditto",
		randomBattleMoves: ["transform"],
		randomBattleMoves: ["quickattack","return","bite","batonpass","irontail","yawn","protect","wish"],
		randomDoubleBattleMoves: ["quickattack","return","bite","helpinghand","irontail","yawn","protect","wish"],
		type: ["Normal"]
	},
	133: {
		species: "Eevee",
		randomBattleMoves: ["wish","protect","scald","roar","icebeam","healbell","batonpass"],
		randomDoubleBattleMoves: ["helpinghand","wish","protect","scald","muddywater","icebeam","toxic","hydropump"],
		type: ["Normal"],
		nfe: 1
	},
	134: {
		species: "Vaporeon",
		randomBattleMoves: ["wish","protect","scald","roar","icebeam","healbell","batonpass"],
		randomDoubleBattleMoves: ["helpinghand","wish","protect","scald","muddywater","icebeam","toxic","hydropump"],
		type: ["Water"]
	},
	135: {
		species: "Jolteon",
		randomBattleMoves: ["thunderbolt","voltswitch","hiddenpowerice","batonpass","substitute","signalbeam"],
		randomDoubleBattleMoves: ["thunderbolt","voltswitch","hiddenpowergrass","hiddenpowerice","helpinghand","protect","substitute","signalbeam"],
		type: ["Electric"]
	},
	136: {
		species: "Flareon",
		randomBattleMoves: ["flamecharge","facade","flareblitz","superpower","wish","protect","toxic"],
		randomDoubleBattleMoves: ["flamecharge","facade","flareblitz","superpower","wish","protect","helpinghand"],
		type: ["Fire"]
	},
	137: {
		species: "Porygon",
		randomBattleMoves: ["triattack","icebeam","recover","toxic","thunderwave","discharge","trick"],
		type: ["Normal"],
		nfe: 1
	},
	138: {
		species: "Omanyte",
		randomBattleMoves: ["shellsmash","surf","icebeam","earthpower","hiddenpowerelectric","spikes","toxicspikes","stealthrock","hydropump"],
		type: ["Rock", "Water"],
		nfe: 1
	},
	139: {
		species: "Omastar",
		randomBattleMoves: ["shellsmash","scald","icebeam","earthpower","spikes","stealthrock","hydropump"],
		randomDoubleBattleMoves: ["shellsmash","muddywater","icebeam","earthpower","hiddenpowerelectric","protect","hydropump"],
		type: ["Rock", "Water"]
	},
	140: {
		species: "Kabuto",
		randomBattleMoves: ["aquajet","rockslide","rapidspin","stealthrock","honeclaws","waterfall","toxic"],
		type: ["Rock", "Water"],
		nfe: 1
	},
	141: {
		species: "Kabutops",
		randomBattleMoves: ["aquajet","stoneedge","rapidspin","swordsdance","waterfall","knockoff"],
		randomDoubleBattleMoves: ["aquajet","stoneedge","protect","rockslide","swordsdance","waterfall","superpower","knockoff"],
		type: ["Rock", "Water"]
	},
	142: {
		species: "Aerodactyl",
		randomBattleMoves: ["stealthrock","taunt","stoneedge","earthquake","aquatail","roost","doubleedge"],
		randomDoubleBattleMoves: ["wideguard","taunt","stoneedge","rockslide","earthquake","aquatail","protect","icefang","skydrop","tailwind"],
		megaRandomBattleMoves: ["aquatail","defog","honeclaws","stoneedge","firefang","icefang","aerialace","roost"],
		megaRandomDoubleBattleMoves: ["wideguard","taunt","stoneedge","rockslide","earthquake","ironhead","aerialace","protect","icefang","skydrop","tailwind"],
		type: ["Rock", "Flying"],
		mega: ["Mega"]
	},
	143: {
		species: "Snorlax",
		randomBattleMoves: ["rest","curse","sleeptalk","bodyslam","earthquake","return","firepunch","crunch","pursuit","whirlwind"],
		randomDoubleBattleMoves: ["curse","protect","bodyslam","earthquake","return","firepunch","icepunch","crunch","selfdestruct"],
		type: ["Normal"]
	},
	144: {
		species: "Articuno",
		randomBattleMoves: ["icebeam","roost","freezedry","toxic","substitute","hurricane"],
		randomDoubleBattleMoves: ["freezedry","roost","protect","substitute","hurricane","tailwind"],
		type: ["Ice", "Flying"]
	},
	145: {
		species: "Zapdos",
		randomBattleMoves: ["thunderbolt","heatwave","hiddenpowerice","roost","toxic","uturn","defog"],
		randomDoubleBattleMoves: ["thunderbolt","heatwave","hiddenpowergrass","hiddenpowerice","tailwind","protect","discharge"],
		type: ["Electric", "Flying"]
	},
	146: {
		species: "Moltres",
		randomBattleMoves: ["fireblast","hiddenpowergrass","roost","substitute","toxic","willowisp","hurricane"],
		randomDoubleBattleMoves: ["fireblast","hiddenpowergrass","airslash","roost","substitute","protect","uturn","willowisp","hurricane","heatwave","tailwind"],
		type: ["Fire", "Flying"]
	},
	147: {
		species: "Dratini",
		randomBattleMoves: ["dragondance","outrage","waterfall","fireblast","extremespeed","dracometeor","substitute"],
		type: ["Dragon"],
		nfe: 1
	},
	148: {
		species: "Dragonair",
		randomBattleMoves: ["dragondance","outrage","waterfall","fireblast","extremespeed","dracometeor","substitute"],
		type: ["Dragon"],
		nfe: 1
	},
	149: {
		species: "Dragonite",
		randomBattleMoves: ["dragondance","outrage","firepunch","extremespeed","earthquake","roost"],
		randomDoubleBattleMoves: ["dragondance","firepunch","extremespeed","dragonclaw","earthquake","roost","substitute","superpower","dracometeor","protect","skydrop"],
		type: ["Dragon", "Flying"]
	},
	150: {
		species: "Mewtwo",
		randomBattleMoves: ["psystrike","aurasphere","fireblast","icebeam","calmmind","recover"],
		randomDoubleBattleMoves: ["psystrike","aurasphere","fireblast","icebeam","calmmind","substitute","recover","thunderbolt","willowisp","taunt","protect"],
		type: ["Psychic"],
		mega: ["mega-x", "mega-y"],
		//Mewtwo X
		megaRandomBattleMoves: ["bulkup","drainpunch","earthquake","taunt","stoneedge","zenheadbutt","icebeam"],
		//Mewtwo Y
		extraMegaRandomBattleMoves: ["psystrike","aurasphere","shadowball","fireblast","icebeam","calmmind","recover","willowisp","taunt"],
		uber: 1,
		legend: 1
	},
	151: {
		species: "Mew",
		randomBattleMoves: ["defog","roost","willowisp","knockoff","taunt","icebeam","earthpower","aurasphere","stealthrock","nastyplot","psyshock","batonpass"],
		randomDoubleBattleMoves: ["taunt","willowisp","transform","roost","psyshock","nastyplot","aurasphere","fireblast","icebeam","thunderbolt","protect","fakeout","helpinghand","tailwind"],
		type: ["Psychic"],
		legend: 1
	},
	152: {
		species: "Chikorita",
		randomBattleMoves: ["reflect","lightscreen","aromatherapy","grasswhistle","leechseed","toxic","gigadrain","synthesis"],
		type: ["Grass"],
		nfe: 1
	},
	153: {
		species: "Bayleef",
		randomBattleMoves: ["reflect","lightscreen","aromatherapy","grasswhistle","leechseed","toxic","gigadrain","synthesis"],
		type: ["Grass"],
		nfe: 1
	},
	154: {
		species: "Meganium",
		randomBattleMoves: ["reflect","lightscreen","aromatherapy","leechseed","toxic","gigadrain","synthesis","dragontail"],
		randomDoubleBattleMoves: ["reflect","lightscreen","aromatherapy","leechseed","petalblizzard","gigadrain","synthesis","dragontail","healpulse","toxic","protect"],
		type: ["Grass"]
	},
	155: {
		species: "Cyndaquil",
		randomBattleMoves: ["eruption","fireblast","flamethrower","hiddenpowergrass","hiddenpowerice"],
		type: ["Fire"],
		nfe: 1
	},
	156: {
		species: "Quilava",
		randomBattleMoves: ["eruption","fireblast","flamethrower","hiddenpowergrass","hiddenpowerice"],
		type: ["Fire"],
		nfe: 1
	},
	157: {
		species: "Typhlosion",
		randomBattleMoves: ["eruption","fireblast","hiddenpowergrass","extrasensory","focusblast"],
		randomDoubleBattleMoves: ["eruption","fireblast","hiddenpowergrass","extrasensory","focusblast","heatwave","protect"],
		type: ["Fire"]
	},
	158: {
		species: "Totodile",
		randomBattleMoves: ["aquajet","waterfall","crunch","icepunch","superpower","dragondance","swordsdance"],
		type: ["Water"],
		nfe: 1
	},
	159: {
		species: "Croconaw",
		randomBattleMoves: ["aquajet","waterfall","crunch","icepunch","superpower","dragondance","swordsdance"],
		type: ["Water"],
		nfe: 1
	},
	160: {
		species: "Feraligatr",
		randomBattleMoves: ["aquajet","waterfall","crunch","icepunch","dragondance","swordsdance","earthquake"],
		randomDoubleBattleMoves: ["aquajet","waterfall","crunch","icepunch","dragondance","swordsdance","earthquake","protect"],
		type: ["Water"]
	},
	161: {
		species: "Sentret",
		randomBattleMoves: ["superfang","trick","toxic","uturn","knockoff"],
		type: ["Normal"],
		nfe: 1
	},
	162: {
		species: "Furret",
		randomBattleMoves: ["uturn","trick","aquatail","firepunch","knockoff","doubleedge"],
		randomDoubleBattleMoves: ["uturn","suckerpunch","icepunch","firepunch","knockoff","doubleedge","superfang","followme","helpinghand","protect"],
		type: ["Normal"]
	},
	163: {
		species: "Hoothoot",
		randomBattleMoves: ["reflect","toxic","roost","whirlwind","nightshade","magiccoat"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	164: {
		species: "Noctowl",
		randomBattleMoves: ["roost","whirlwind","airslash","nightshade","toxic","defog"],
		randomDoubleBattleMoves: ["roost","tailwind","airslash","hypervoice","heatwave","protect","hypnosis"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	165: {
		species: "Ledyba",
		randomBattleMoves: ["roost","agility","lightscreen","encore","reflect","knockoff","swordsdance","batonpass","toxic"],
		type: ["Bug", "Flying"],
		nfe: 1
	},
	166: {
		species: "Ledian",
		randomBattleMoves: ["roost","lightscreen","encore","reflect","knockoff","toxic","uturn"],
		randomDoubleBattleMoves: ["protect","lightscreen","encore","reflect","knockoff","bugbuzz","uturn","tailwind"],
		type: ["Bug", "Flying"]
	},
	167: {
		species: "Spinarak",
		randomBattleMoves: ["agility","toxic","xscissor","toxicspikes","poisonjab","batonpass","stickyweb"],
		type: ["Bug", "Poison"],
		nfe: 1
	},
	168: {
		species: "Ariados",
		randomBattleMoves: ["megahorn","toxicspikes","poisonjab","suckerpunch","stickyweb"],
		randomDoubleBattleMoves: ["protect","megahorn","stringshot","poisonjab","stickyweb","ragepowder"],
		type: ["Bug", "Poison"]
	},
	169: {
		species: "Crobat",
		randomBattleMoves: ["bravebird","roost","toxic","taunt","defog","uturn","superfang"],
		randomDoubleBattleMoves: ["bravebird","taunt","tailwind","crosspoison","uturn","protect","superfang"],
		type: ["Poison", "Flying"]
	},
	170: {
		species: "Chinchou",
		randomBattleMoves: ["voltswitch","thunderbolt","hiddenpowergrass","hydropump","icebeam","surf","thunderwave","scald","discharge","healbell"],
		type: ["Water", "Electric"],
		nfe: 1
	},
	171: {
		species: "Lanturn",
		randomBattleMoves: ["voltswitch","hiddenpowergrass","hydropump","icebeam","thunderwave","scald","thunderbolt","healbell","toxic"],
		randomDoubleBattleMoves: ["thunderbolt","hiddenpowergrass","hydropump","icebeam","thunderwave","scald","discharge","protect","surf"],
		type: ["Water", "Electric"]
	},
	172: {
		species: "Pichu",
		randomBattleMoves: ["fakeout","volttackle","encore","irontail","toxic","thunderbolt"],
		randomDoubleBattleMoves: ["fakeout","volttackle","encore","irontail","protect","thunderbolt"],
		type: ["Electric"],
		forms: ["norm", "spiky-eared"],
		nfe: 1
	},
	173: {
		species: "Cleffa",
		randomBattleMoves: ["reflect","thunderwave","lightscreen","toxic","fireblast","encore","wish","protect","aromatherapy"],
		randomDoubleBattleMoves: ["reflect","thunderwave","lightscreen","safeguard","fireblast","protect"],
		type: ["Fairy"],
		nfe: 1
	},
	174: {
		species: "Igglybuff",
		randomBattleMoves: ["wish","thunderwave","reflect","lightscreen","healbell","seismictoss","counter","protect"],
		randomDoubleBattleMoves: ["wish","thunderwave","reflect","lightscreen","seismictoss","protect"],
		type: ["Normal", "Fairy"],
		nfe: 1
	},
	175: {
		species: "Togepi",
		randomBattleMoves: ["protect","fireblast","toxic","thunderwave","softboiled","dazzlinggleam"],
		type: ["Fairy"],
		nfe: 1
	},
	176: {
		species: "Togetic",
		randomBattleMoves: ["nastyplot","dazzlinggleam","fireblast","batonpass","roost","defog","toxic","thunderwave","healbell"],
		type: ["Fairy", "Flying"],
		nfe: 1
	},
	177: {
		species: "Natu",
		randomBattleMoves: ["thunderwave","roost","toxic","reflect","lightscreen","uturn","wish","psychic","nightshade"],
		type: ["Psychic", "Flying"],
		nfe: 1
	},
	178: {
		species: "Xatu",
		randomBattleMoves: ["thunderwave","toxic","roost","psychic","uturn","reflect","lightscreen","nightshade","heatwave"],
		randomDoubleBattleMoves: ["thunderwave","tailwind","roost","psychic","uturn","reflect","lightscreen","grassknot","heatwave","protect"],
		type: ["Psychic", "Flying"]
	},
	179: {
		species: "Mareep",
		randomBattleMoves: ["reflect","lightscreen","thunderbolt","discharge","thunderwave","toxic","hiddenpowerice","cottonguard","powergem"],
		type: ["Electric"],
		nfe: 1
	},
	180: {
		species: "Flaaffy",
		randomBattleMoves: ["reflect","lightscreen","thunderbolt","discharge","thunderwave","toxic","hiddenpowerice","cottonguard","powergem"],
		type: ["Electric"],
		nfe: 1
	},
	181: {
		species: "Ampharos",
		randomBattleMoves: ["voltswitch","reflect","lightscreen","focusblast","thunderbolt","toxic","healbell","hiddenpowerice"],
		randomDoubleBattleMoves: ["focusblast","hiddenpowerice","hiddenpowergrass","thunderbolt","discharge","dragonpulse","protect"],
		megaRandomBattleMoves: ["voltswitch","focusblast","agility","thunderbolt","healbell","dragonpulse"],
		megaRandomDoubleBattleMoves: ["focusblast","hiddenpowerice","hiddenpowergrass","thunderbolt","discharge","dragonpulse","protect"],
		type: ["Electric"],
		mega: ["mega"]
	},
	182: {
		species: "Bellossom",
		randomBattleMoves: ["gigadrain","synthesis","sleeppowder","hiddenpowerfire","sunnyday"],
		randomDoubleBattleMoves: ["gigadrain","sludgebomb","sleeppowder","stunspore","protect","hiddenpowerfire","moonblast","dazzlinggleam","sunnyday","solarbeam"],
		type: ["Grass"],
		nfe: 1
	},
	183: {
		species: "Marill",
		randomBattleMoves: ["waterfall","knockoff","encore","toxic","aquajet","superpower","icepunch","protect","playrough","poweruppunch"],
		type: ["Water", "Fairy"],
		nfe: 1
	},
	184: {
		species: "Azumarill",
		randomBattleMoves: ["waterfall","aquajet","playrough","superpower","bellydrum","knockoff"],
		randomDoubleBattleMoves: ["waterfall","aquajet","playrough","superpower","bellydrum","knockoff","protect"],
		type: ["Water", "Fairy"]
	},
	185: {
		species: "Sudowoodo",
		randomBattleMoves: ["stoneedge","earthquake","suckerpunch","woodhammer","toxic","stealthrock"],
		randomDoubleBattleMoves: ["stoneedge","earthquake","suckerpunch","woodhammer","explosion","stealthrock","rockslide","helpinghand","protect"],
		type: ["Rock"]
	},
	186: {
		species: "Politoed",
		randomBattleMoves: ["scald","toxic","encore","perishsong","protect","hypnosis","rest"],
		randomDoubleBattleMoves: ["scald","hypnosis","icywind","encore","helpinghand","protect","icebeam","focusblast","hydropump","hiddenpowergrass"],
		type: ["Water"]
	},
	187: {
		species: "Hoppip",
		randomBattleMoves: ["encore","sleeppowder","uturn","toxic","leechseed","substitute","protect"],
		type: ["Grass", "Flying"],
		nfe: 1
	},
	188: {
		species: "Skiploom",
		randomBattleMoves: ["encore","sleeppowder","uturn","toxic","leechseed","substitute","protect"],
		type: ["Grass", "Flying"],
		nfe: 1
	},
	189: {
		species: "Jumpluff",
		randomBattleMoves: ["swordsdance","sleeppowder","uturn","encore","toxic","acrobatics","leechseed","seedbomb","substitute"],
		randomDoubleBattleMoves: ["encore","sleeppowder","uturn","helpinghand","leechseed","gigadrain","ragepowder","protect"],
		type: ["Grass", "Flying"]
	},
	190: {
		species: "Aipom",
		randomBattleMoves: ["fakeout","return","brickbreak","seedbomb","knockoff","uturn","icepunch","irontail"],
		type: ["Normal"],
		nfe: 1
	},
	191: {
		species: "Sunkern",
		randomBattleMoves: ["sunnyday","gigadrain","solarbeam","hiddenpowerfire","toxic","earthpower","leechseed"],
		type: ["Grass"],
		nfe: 1
	},
	192: {
		species: "Sunflora",
		randomBattleMoves: ["sunnyday","gigadrain","solarbeam","hiddenpowerfire","earthpower"],
		randomDoubleBattleMoves: ["sunnyday","gigadrain","solarbeam","hiddenpowerfire","hiddenpowerice","earthpower","protect","encore"],
		type: ["Grass"]
	},
	193: {
		species: "Yanma",
		randomBattleMoves: ["bugbuzz","airslash","hiddenpowerground","uturn","protect","gigadrain","ancientpower"],
		type: ["Bug", "Flying"],
		nfe: 1
	},
	194: {
		species: "Wooper",
		randomBattleMoves: ["recover","earthquake","scald","toxic","stockpile","yawn","protect"],
		type: ["Water", "Ground"],
		nfe: 1
	},
	195: {
		species: "Quagsire",
		randomBattleMoves: ["recover","earthquake","scald","toxic","encore","icebeam"],
		randomDoubleBattleMoves: ["icywind","earthquake","waterfall","scald","rockslide","curse","yawn","icepunch","protect"],
		type: ["Water", "Ground"]
	},
	196: {
		species: "Espeon",
		randomBattleMoves: ["psychic","psyshock","substitute","shadowball","calmmind","morningsun","batonpass","dazzlinggleam"],
		randomDoubleBattleMoves: ["psychic","psyshock","substitute","wish","shadowball","hiddenpowerfighting","helpinghand","protect","dazzlinggleam"],
		type: ["Psychic"]
	},
	197: {
		species: "Umbreon",
		randomBattleMoves: ["wish","protect","healbell","toxic","batonpass","foulplay"],
		randomDoubleBattleMoves: ["moonlight","wish","protect","healbell","snarl","foulplay","helpinghand"],
		type: ["Dark"]
	},
	198: {
		species: "Murkrow",
		randomBattleMoves: ["substitute","suckerpunch","bravebird","heatwave","hiddenpowergrass","roost","darkpulse","thunderwave"],
		type: ["Dark", "Flying"],
		nfe: 1
	},
	199: {
		species: "Slowking",
		randomBattleMoves: ["scald","fireblast","icebeam","psychic","grassknot","thunderwave","toxic","slackoff","trickroom","nastyplot","dragontail","psyshock"],
		randomDoubleBattleMoves: ["scald","fireblast","icebeam","psychic","grassknot","thunderwave","slackoff","trickroom","protect","psyshock"],
		type: ["Water", "Psychic"]
	},
	200: {
		species: "Misdreavus",
		randomBattleMoves: ["nastyplot","thunderbolt","dazzlinggleam","willowisp","shadowball","taunt","painsplit"],
		type: ["Ghost"],
		nfe: 1
	},
	201: {
		species: "Unown",
		type: ["Psychic"],
		forms: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "?"],
		randomBattleMoves: ["hiddenpowerpsychic"],
	},
	202: {
		species: "Wobbuffet",
		randomBattleMoves: ["destinybond","counter","mirrorcoat","encore"],
		type: ["Psychic"]
	},
	203: {
		species: "Girafarig",
		randomBattleMoves: ["psychic","psyshock","thunderbolt","nastyplot","batonpass","substitute","hypervoice"],
		randomDoubleBattleMoves: ["psychic","psyshock","thunderbolt","nastyplot","protect","agility","hypervoice"],
		type: ["Normal", "Psychic"]
	},
	204: {
		species: "Pineco",
		randomBattleMoves: ["rapidspin","toxicspikes","spikes","bugbite","stealthrock"],
		type: ["Bug"],
		nfe: 1
	},
	205: {
		species: "Forretress",
		randomBattleMoves: ["rapidspin","toxic","spikes","voltswitch","stealthrock","gyroball"],
		randomDoubleBattleMoves: ["rockslide","drillrun","toxic","voltswitch","stealthrock","gyroball","protect"],
		type: ["Bug", "Steel"]
	},
	206: {
		species: "Dunsparce",
		randomBattleMoves: ["coil","rockslide","bite","headbutt","glare","bodyslam","roost"],
		randomDoubleBattleMoves: ["coil","rockslide","bite","headbutt","glare","bodyslam","protect"],
		type: ["Normal"]
	},
	207: {
		species: "Gligar",
		randomBattleMoves: ["stealthrock","toxic","roost","defog","earthquake","uturn","knockoff"],
		type: ["Ground", "Flying"],
		nfe: 1
	},
	208: {
		species: "Steelix",
		randomBattleMoves: ["stealthrock","earthquake","ironhead","roar","toxic","rockslide"],
		randomDoubleBattleMoves: ["stealthrock","earthquake","ironhead","rockslide","protect","explosion"],
		megaRandomBattleMoves: ["stealthrock","earthquake","heavyslam","roar","toxic","dragontail"],
		megaRandomDoubleBattleMoves: ["stealthrock","earthquake","heavyslam","rockslide","protect","explosion"],
		type: ["Steel", "Ground"],
		mega: ["mega"]
	},
	209: {
		species: "Snubbull",
		randomBattleMoves: ["thunderwave","firepunch","crunch","closecombat","icepunch","earthquake","playrough"],
		type: ["Fairy"],
		nfe: 1
	},
	210: {
		species: "Granbull",
		randomBattleMoves: ["thunderwave","playrough","crunch","earthquake","healbell"],
		randomDoubleBattleMoves: ["thunderwave","playrough","crunch","earthquake","snarl","rockslide","protect"],
		type: ["Fairy"]
	},
	211: {
		species: "Qwilfish",
		randomBattleMoves: ["toxicspikes","waterfall","spikes","painsplit","thunderwave","taunt","destinybond"],
		randomDoubleBattleMoves: ["poisonjab","waterfall","swordsdance","protect","thunderwave","taunt","destinybond"],
		type: ["Water", "Poison"]
	},
	212: {
		species: "Scizor",
		randomBattleMoves: ["swordsdance","bulletpunch","bugbite","superpower","uturn","pursuit","knockoff"],
		randomDoubleBattleMoves: ["swordsdance","roost","bulletpunch","bugbite","superpower","uturn","protect","feint","knockoff"],
		megaRandomBattleMoves: ["swordsdance","roost","bulletpunch","bugbite","superpower","uturn","batonpass","pursuit","defog","knockoff"],
		megaRandomDoubleBattleMoves: ["swordsdance","roost","bulletpunch","bugbite","superpower","uturn","protect","feint","knockoff"],
		type: ["Bug", "Steel"],
		mega: ["Mega"]
	},
	213: {
		species: "Shuckle",
		randomBattleMoves: ["toxic","encore","stealthrock","knockoff","stickyweb","infestation"],
		randomDoubleBattleMoves: ["encore","stealthrock","knockoff","stickyweb","guardsplit","powersplit","toxic","helpinghand"],
		type: ["Bug", "Rock"]
	},
	214: {
		species: "Heracross",
		randomBattleMoves: ["closecombat","megahorn","stoneedge","swordsdance","knockoff","earthquake"],
		randomDoubleBattleMoves: ["closecombat","megahorn","stoneedge","swordsdance","knockoff","earthquake","protect"],
		megaRandomBattleMoves: ["closecombat","pinmissile","rockblast","swordsdance","bulletseed","substitute"],
		megaRandomDoubleBattleMoves: ["closecombat","pinmissile","rockblast","swordsdance","bulletseed","knockoff","earthquake","protect"],
		type: ["Bug", "Fighting"],
		mega: ["mega"]
	},
	215: {
		species: "Sneasel",
		randomBattleMoves: ["iceshard","iciclecrash","lowkick","pursuit","swordsdance","knockoff"],
		type: ["Dark", "Ice"],
		nfe: 1
	},
	216: {
		species: "Teddiursa",
		randomBattleMoves: ["swordsdance","protect","facade","closecombat","firepunch","crunch","playrough","gunkshot"],
		type: ["Normal"],
		nfe: 1
	},
	217: {
		species: "Ursaring",
		randomBattleMoves: ["swordsdance","facade","closecombat","crunch","protect"],
		randomDoubleBattleMoves: ["swordsdance","facade","closecombat","earthquake","crunch","protect"],
		type: ["Normal"]
	},
	218: {
		species: "Slugma",
		randomBattleMoves: ["stockpile","recover","lavaplume","willowisp","toxic","hiddenpowergrass","earthpower","memento"],
		type: ["Fire"],
		nfe: 1
	},
	219: {
		species: "Magcargo",
		randomBattleMoves: ["recover","lavaplume","toxic","hiddenpowergrass","stealthrock","fireblast","earthpower","shellsmash","ancientpower"],
		randomDoubleBattleMoves: ["protect","heatwave","willowisp","shellsmash","hiddenpowergrass","ancientpower","stealthrock","fireblast","earthpower"],
		type: ["Fire", "Rock"]
	},
	220: {
		species: "Swinub",
		randomBattleMoves: ["earthquake","iciclecrash","iceshard","superpower","endeavor","stealthrock"],
		type: ["Ice", "Ground"],
		nfe: 1
	},
	221: {
		species: "Piloswine",
		randomBattleMoves: ["earthquake","iciclecrash","iceshard","superpower","endeavor","stealthrock"],
		type: ["Ice", "Ground"]
	},
	222: {
		species: "Corsola",
		randomBattleMoves: ["recover","toxic","powergem","scald","stealthrock"],
		randomDoubleBattleMoves: ["protect","icywind","powergem","scald","stealthrock","earthpower","icebeam"],
		type: ["Water", "Rock"]
	},
	223: {
		species: "Remoraid",
		randomBattleMoves: ["waterspout","hydropump","fireblast","hiddenpowerground","icebeam","seedbomb","rockblast"],
		type: ["Water"],
		nfe: 1
	},
	224: {
		species: "Octillery",
		randomBattleMoves: ["hydropump","fireblast","icebeam","energyball","rockblast","waterspout"],
		randomDoubleBattleMoves: ["hydropump","surf","fireblast","icebeam","energyball","chargebeam","waterspout","protect"],
		type: ["Water"]
	},
	225: {
		species: "Delibird",
		randomBattleMoves: ["rapidspin","iceshard","icepunch","aerialace","spikes","destinybond"],
		randomDoubleBattleMoves: ["fakeout","iceshard","icepunch","aerialace","brickbreak","protect"],
		type: ["Ice", "Flying"]
	},
	226: {
		species: "Mantine",
		randomBattleMoves: ["scald","airslash","rest","sleeptalk","toxic","defog"],
		randomDoubleBattleMoves: ["raindance","hydropump","scald","airslash","icebeam","tailwind","wideguard","helpinghand","protect","surf"],
		type: ["Water", "Flying"]
	},
	227: {
		species: "Skarmory",
		randomBattleMoves: ["whirlwind","bravebird","roost","spikes","stealthrock","defog"],
		randomDoubleBattleMoves: ["skydrop","bravebird","tailwind","taunt","feint","protect","ironhead"],
		type: ["Steel", "Flying"]
	},
	228: {
		species: "Houndour",
		randomBattleMoves: ["pursuit","suckerpunch","fireblast","darkpulse","hiddenpowerfighting","nastyplot"],
		type: ["Dark", "Fire"],
		nfe: 1
	},
	229: {
		species: "Houndoom",
		randomBattleMoves: ["nastyplot","darkpulse","suckerpunch","fireblast","hiddenpowergrass"],
		randomDoubleBattleMoves: ["nastyplot","darkpulse","suckerpunch","heatwave","hiddenpowerfighting","protect"],
		megaRandomBattleMoves: ["nastyplot","darkpulse","taunt","fireblast","hiddenpowergrass"],
		megaRandomDoubleBattleMoves: ["nastyplot","darkpulse","taunt","heatwave","hiddenpowergrass","protect"],
		type: ["Dark", "Fire"],
		mega: ["mega"]
	},
	230: {
		species: "Kingdra",
		randomBattleMoves: ["dragondance","waterfall","outrage","ironhead","substitute","raindance","hydropump","dracometeor"],
		randomDoubleBattleMoves: ["hydropump","icebeam","focusenergy","dracometeor","dragonpulse","muddywater","protect"],
		type: ["Water", "Dragon"]
	},
	231: {
		species: "Phanpy",
		randomBattleMoves: ["stealthrock","earthquake","iceshard","headsmash","knockoff","seedbomb","superpower","playrough"],
		type: ["Ground"],
		nfe: 1
	},
	232: {
		species: "Donphan",
		randomBattleMoves: ["stealthrock","rapidspin","iceshard","earthquake","knockoff","stoneedge"],
		randomDoubleBattleMoves: ["stealthrock","knockoff","iceshard","earthquake","rockslide","protect"],
		type: ["Ground"]
	},
	233: {
		species: "Porygon2",
		randomBattleMoves: ["triattack","icebeam","recover","toxic","thunderwave","thunderbolt"],
		randomDoubleBattleMoves: ["triattack","icebeam","discharge","shadowball","protect","recover"],
		type: ["Normal"],
		nfe: 1
	},
	234: {
		species: "Stantler",
		randomBattleMoves: ["doubleedge","megahorn","jumpkick","earthquake","suckerpunch"],
		randomDoubleBattleMoves: ["return","megahorn","jumpkick","earthquake","suckerpunch","protect"],
		type: ["Normal"]
	},
	235: {
		species: "Smeargle",
		randomBattleMoves: ["spore","spikes","stealthrock","destinybond","whirlwind","stickyweb"],
		randomDoubleBattleMoves: ["spore","fakeout","wideguard","helpinghand","followme","tailwind","kingsshield","transform"],
		type: ["Normal"]
	},
	236: {
		species: "Tyrogue",
		randomBattleMoves: ["highjumpkick","rapidspin","fakeout","bulletpunch","machpunch","toxic","counter"],
		randomDoubleBattleMoves: ["highjumpkick","fakeout","bulletpunch","machpunch","helpinghand","protect"],
		type: ["Fighting"],
		nfe: 1
	},
	237: {
		species: "Hitmontop",
		randomBattleMoves: ["suckerpunch","machpunch","rapidspin","closecombat","toxic"],
		randomDoubleBattleMoves: ["fakeout","feint","suckerpunch","closecombat","helpinghand","machpunch","wideguard"],
		type: ["Fighting"]
	},
	238: {
		species: "Smoochum",
		randomBattleMoves: ["icebeam","psychic","hiddenpowerfighting","trick","shadowball","grassknot"],
		randomDoubleBattleMoves: ["icebeam","psychic","hiddenpowerfighting","trick","shadowball","grassknot","fakeout","protect"],
		type: ["Ice", "Psychic"],
		nfe: 1
	},
	239: {
		species: "Elekid",
		randomBattleMoves: ["thunderbolt","crosschop","voltswitch","substitute","icepunch","psychic","hiddenpowergrass"],
		randomDoubleBattleMoves: ["thunderbolt","crosschop","voltswitch","substitute","icepunch","psychic","hiddenpowergrass","protect"],
		type: ["Electric"],
		nfe: 1
	},
	240: {
		species: "Magby",
		randomBattleMoves: ["flareblitz","substitute","fireblast","hiddenpowergrass","hiddenpowerice","crosschop","thunderpunch","overheat"],
		type: ["Fire"],
		nfe: 1
	},
	241: {
		species: "Miltank",
		randomBattleMoves: ["milkdrink","stealthrock","bodyslam","healbell","curse","earthquake","toxic"],
		randomDoubleBattleMoves: ["protect","helpinghand","bodyslam","healbell","curse","earthquake","thunderwave"],
		type: ["Normal"]
	},
	242: {
		species: "Blissey",
		randomBattleMoves: ["toxic","flamethrower","seismictoss","softboiled","wish","healbell","protect","thunderwave","stealthrock"],
		randomDoubleBattleMoves: ["wish","softboiled","protect","toxic","aromatherapy","seismictoss","helpinghand","thunderwave","flamethrower","icebeam"],
		type: ["Normal"]
	},
	243: {
		species: "Raikou",
		randomBattleMoves: ["thunderbolt","hiddenpowerice","aurasphere","calmmind","substitute","voltswitch","extrasensory"],
		randomDoubleBattleMoves: ["thunderbolt","hiddenpowerice","extrasensory","calmmind","substitute","snarl","protect"],
		type: ["Electric"],
		legend: 1
	},
	244: {
		species: "Entei",
		randomBattleMoves: ["extremespeed","flareblitz","bulldoze","stoneedge","sacredfire"],
		randomDoubleBattleMoves: ["extremespeed","flareblitz","ironhead","bulldoze","stoneedge","sacredfire","protect"],
		type: ["Fire"],
		legend: 1
	},
	245: {
		species: "Suicune",
		randomBattleMoves: ["hydropump","icebeam","scald","hiddenpowergrass","rest","sleeptalk","calmmind"],
		randomDoubleBattleMoves: ["hydropump","icebeam","scald","hiddenpowergrass","snarl","tailwind","protect","calmmind"],
		type: ["Water"],
		legend: 1
	},
	246: {
		species: "Larvitar",
		randomBattleMoves: ["earthquake","stoneedge","facade","dragondance","superpower","crunch"],
		type: ["Rock", "Ground"],
		nfe: 1
	},
	247: {
		species: "Pupitar",
		randomBattleMoves: ["earthquake","stoneedge","crunch","dragondance","superpower","stealthrock"],
		type: ["Rock", "Ground"],
		nfe: 1
	},
	248: {
		species: "Tyranitar",
		randomBattleMoves: ["crunch","stoneedge","pursuit","earthquake","fireblast","icebeam","stealthrock"],
		randomDoubleBattleMoves: ["crunch","stoneedge","rockslide","earthquake","firepunch","icepunch","stealthrock","protect"],
		megaRandomBattleMoves: ["crunch","stoneedge","earthquake","icepunch","dragondance"],
		megaRandomDoubleBattleMoves: ["crunch","stoneedge","earthquake","icepunch","dragondance","rockslide","protect"],
		type: ["Rock", "Dark"],
		mega: ["mega"]
	},
	249: {
		species: "Lugia",
		randomBattleMoves: ["toxic","roost","substitute","whirlwind","thunderwave","dragontail","aeroblast"],
		randomDoubleBattleMoves: ["aeroblast","roost","substitute","tailwind","icebeam","psychic","calmmind","skydrop","protect"],
		type: ["Psychic", "Flying"],
		uber: 1,
		legend: 1
	},
	250: {
		species: "Ho-Oh",
		randomBattleMoves: ["substitute","sacredfire","bravebird","earthquake","roost","toxic","flamecharge"],
		randomDoubleBattleMoves: ["substitute","sacredfire","bravebird","earthquake","roost","toxic","tailwind","skydrop","protect"],
		type: ["Fire", "Flying"],
		uber: 1,
		legend: 1
	},
	251: {
		species: "Celebi",
		randomBattleMoves: ["nastyplot","psychic","gigadrain","recover","healbell","batonpass","earthpower","hiddenpowerfire","leafstorm","uturn","thunderwave"],
		randomDoubleBattleMoves: ["protect","psychic","gigadrain","leechseed","recover","earthpower","hiddenpowerfire","nastyplot","leafstorm","uturn","thunderwave"],
		type: ["Psychic", "Grass"],
		legend: 1
	},
	252: {
		species: "Treecko",
		randomBattleMoves: ["substitute","leechseed","leafstorm","hiddenpowerice","hiddenpowerrock","endeavor"],
		type: ["Grass"],
		nfe: 1
	},
	253: {
		species: "Grovyle",
		randomBattleMoves: ["substitute","leechseed","gigadrain","leafstorm","hiddenpowerice","hiddenpowerrock","endeavor"],
		type: ["Grass"],
		nfe: 1
	},
	254: {
		species: "Sceptile",
		randomBattleMoves: ["substitute","gigadrain","leafstorm","hiddenpowerice","focusblast","hiddenpowerfire"],
		randomDoubleBattleMoves: ["substitute","gigadrain","leafstorm","hiddenpowerice","focusblast","hiddenpowerfire","protect"],
		megaRandomBattleMoves: ["substitute","gigadrain","dragonpulse","focusblast","swordsdance","outrage","leafblade","earthquake","hiddenpowerfire"],
		megaRandomDoubleBattleMoves: ["substitute","gigadrain","leafstorm","hiddenpowerice","focusblast","dragonpulse","hiddenpowerfire","protect"],
		type: ["Grass"],
		mega: ["mega"]
	},
	255: {
		species: "Torchic",
		randomBattleMoves: ["protect","batonpass","substitute","hiddenpowergrass","swordsdance","firepledge"],
		type: ["Fire"],
		nfe: 1
	},
	256: {
		species: "Combusken",
		randomBattleMoves: ["flareblitz","skyuppercut","protect","swordsdance","substitute","batonpass","shadowclaw"],
		type: ["Fire", "Fighting"],
		nfe: 1
	},
	257: {
		species: "Blaziken",
		randomBattleMoves: ["flareblitz","highjumpkick","protect","swordsdance","substitute","batonpass","stoneedge","knockoff"],
		megaRandomBattleMoves: ["flareblitz","highjumpkick","protect","swordsdance","substitute","batonpass","stoneedge","knockoff"],
		type: ["Fire", "Fighting"],
		mega: ["mega"],
		uber: 1
	},
	258: {
		species: "Mudkip",
		randomBattleMoves: ["hydropump","earthpower","hiddenpowerelectric","icebeam","sludgewave"],
		type: ["Water"],
		nfe: 1
	},
	259: {
		species: "Marshtomp",
		randomBattleMoves: ["waterfall","earthquake","superpower","icepunch","rockslide","stealthrock"],
		type: ["Water", "Ground"],
		nfe: 1
	},
	260: {
		species: "Swampert",
		randomBattleMoves: ["stealthrock","earthquake","scald","icebeam","roar","toxic","protect"],
		randomDoubleBattleMoves: ["waterfall","earthquake","icebeam","stealthrock","wideguard","scald","rockslide","muddywater","protect","icywind"],
		megaRandomBattleMoves: ["raindance","waterfall","earthquake","icepunch","superpower"],
		megaRandomDoubleBattleMoves: ["waterfall","earthquake","raindance","icepunch","superpower","protect"],
		type: ["Water", "Ground"],
		mega: ["mega"]
	},
	261: {
		species: "Poochyena",
		randomBattleMoves: ["superfang","foulplay","suckerpunch","toxic","crunch","firefang","icefang","poisonfang"],
		type: ["Dark"],
		nfe: 1
	},
	262: {
		species: "Mightyena",
		randomBattleMoves: ["crunch","suckerpunch","playrough","firefang","irontail"],
		randomDoubleBattleMoves: ["suckerpunch","crunch","playrough","firefang","taunt","protect"],
		type: ["Dark"]
	},
	263: {
		species: "Zigzagoon",
		randomBattleMoves: ["trick","thunderwave","icebeam","thunderbolt","gunkshot","lastresort"],
		type: ["Normal"],
		nfe: 1
	},
	264: {
		species: "Linoone",
		randomBattleMoves: ["bellydrum","extremespeed","seedbomb","shadowclaw"],
		randomDoubleBattleMoves: ["bellydrum","extremespeed","seedbomb","protect","shadowclaw"],
		type: ["Normal"]
	},
	265: {
		species: "Wurmple",
		randomBattleMoves: ["bugbite","poisonsting","tackle","electroweb"],
		type: ["Bug"],
		nfe: 1
	},
	266: {
		species: "Silcoon",
		randomBattleMoves: ["bugbite","poisonsting","tackle","electroweb"],
		type: ["Bug"],
		nfe: 1
	},
	267: {
		species: "Beautifly",
		randomBattleMoves: ["quiverdance","bugbuzz","gigadrain","hiddenpowerrock","psychic","aircutter"],
		randomDoubleBattleMoves: ["quiverdance","bugbuzz","gigadrain","hiddenpowerrock","psychic","aircutter","tailwind","stringshot","protect"],
		type: ["Bug", "Flying"]
	},
	268: {
		species: "Cascoon",
		randomBattleMoves: ["bugbite","poisonsting","tackle","electroweb"],
		type: ["Bug"],
		nfe: 1
	},
	269: {
		species: "Dustox",
		randomBattleMoves: ["roost","defog","bugbuzz","sludgebomb","quiverdance","uturn","shadowball"],
		randomDoubleBattleMoves: ["tailwind","stringshot","strugglebug","bugbuzz","protect","sludgebomb","quiverdance","shadowball"],
		type: ["Bug", "Poison"]
	},
	270: {
		species: "Lotad",
		randomBattleMoves: ["gigadrain","icebeam","scald","naturepower","raindance"],
		type: ["Water", "Grass"],
		nfe: 1
	},
	271: {
		species: "Lombre",
		randomBattleMoves: ["fakeout","swordsdance","waterfall","seedbomb","icepunch","firepunch","thunderpunch","poweruppunch","gigadrain","icebeam"],
		type: ["Water", "Grass"],
		nfe: 1
	},
	272: {
		species: "Ludicolo",
		randomBattleMoves: ["raindance","hydropump","scald","gigadrain","icebeam","focusblast"],
		randomDoubleBattleMoves: ["raindance","hydropump","surf","gigadrain","icebeam","fakeout","protect"],
		type: ["Water", "Grass"]
	},
	273: {
		species: "Seedot",
		randomBattleMoves: ["defog","naturepower","seedbomb","explosion","foulplay"],
		type: ["Grass"],
		nfe: 1
	},
	274: {
		species: "Nuzleaf",
		randomBattleMoves: ["naturepower","seedbomb","explosion","swordsdance","rockslide","lowsweep"],
		type: ["Grass", "Dark"],
		nfe: 1
	},
	275: {
		species: "Shiftry",
		randomBattleMoves: ["leafstorm","swordsdance","leafblade","suckerpunch","defog","lowkick","knockoff"],
		randomDoubleBattleMoves: ["leafstorm","swordsdance","leafblade","suckerpunch","knockoff","lowkick","fakeout","protect"],
		type: ["Grass", "Dark"]
	},
	276: {
		species: "Taillow",
		randomBattleMoves: ["bravebird","facade","quickattack","uturn","protect"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	277: {
		species: "Swellow",
		randomBattleMoves: ["bravebird","facade","quickattack","uturn","endeavor"],
		randomDoubleBattleMoves: ["bravebird","facade","quickattack","uturn","protect"],
		type: ["Normal", "Flying"]
	},
	278: {
		species: "Wingull",
		randomBattleMoves: ["scald","icebeam","tailwind","uturn","airslash","knockoff","defog"],
		type: ["Water", "Flying"],
		nfe: 1
	},
	279: {
		species: "Pelipper",
		randomBattleMoves: ["scald","uturn","hurricane","toxic","roost","defog","knockoff"],
		randomDoubleBattleMoves: ["scald","surf","hurricane","wideguard","protect","tailwind","knockoff"],
		type: ["Water", "Flying"]
	},
	280: {
		species: "Ralts",
		randomBattleMoves: ["trickroom","destinybond","psychic","willowisp","hypnosis","dazzlinggleam","substitute","trick"],
		type: ["Psychic", "Fairy"],
		nfe: 1
	},
	281: {
		species: "Kirlia",
		randomBattleMoves: ["trick","dazzlinggleam","psychic","willowisp","signalbeam","thunderbolt","destinybond","substitute"],
		type: ["Psychic", "Fairy"],
		nfe: 1
	},
	282: {
		species: "Gardevoir",
		randomBattleMoves: ["psychic","thunderbolt","focusblast","shadowball","moonblast","calmmind","substitute","willowisp"],
		randomDoubleBattleMoves: ["psyshock","focusblast","shadowball","moonblast","taunt","willowisp","thunderbolt","trickroom","helpinghand","protect","dazzlinggleam"],
		megaRandomBattleMoves: ["calmmind","hypervoice","psyshock","focusblast","substitute","taunt","willowisp"],
		megaRandomDoubleBattleMoves: ["psyshock","focusblast","shadowball","calmmind","thunderbolt","hypervoice","protect"],
		type: ["Psychic", "Fairy"],
		mega: ["mega"]
	},
	283: {
		species: "Surskit",
		randomBattleMoves: ["hydropump","signalbeam","hiddenpowerfire","stickyweb","gigadrain","powersplit"],
		type: ["Bug", "Water"],
		nfe: 1
	},
	284: {
		species: "Masquerain",
		randomBattleMoves: ["quiverdance","bugbuzz","airslash","hydropump","roost","substitute","batonpass","stickyweb"],
		randomDoubleBattleMoves: ["hydropump","bugbuzz","airslash","quiverdance","substitute","tailwind","roost","strugglebug","protect"],
		type: ["Bug", "Flying"]
	},
	285: {
		species: "Shroomish",
		randomBattleMoves: ["spore","substitute","leechseed","gigadrain","protect","toxic","stunspore"],
		type: ["Grass"],
		nfe: 1
	},
	286: {
		species: "Breloom",
		randomBattleMoves: ["spore","machpunch","bulletseed","rocktomb","swordsdance"],
		randomDoubleBattleMoves: ["spore","helpinghand","machpunch","bulletseed","rocktomb","protect","drainpunch"],
		type: ["Grass", "Fighting"]
	},
	287: {
		species: "Slakoth",
		randomBattleMoves: ["doubleedge","hammerarm","firepunch","counter","retaliate","toxic"],
		type: ["Normal"],
		nfe: 1
	},
	288: {
		species: "Vigoroth",
		randomBattleMoves: ["bulkup","return","earthquake","firepunch","suckerpunch","slackoff","icepunch","lowkick"],
		type: ["Normal"],
		nfe: 1
	},
	289: {
		species: "Slaking",
		randomBattleMoves: ["earthquake","pursuit","nightslash","doubleedge","retaliate"],
		randomDoubleBattleMoves: ["earthquake","nightslash","doubleedge","retaliate","hammerarm","rockslide"],
		type: ["Normal"]
	},
	290: {
		species: "Nincada",
		randomBattleMoves: ["xscissor","dig","aerialace","nightslash"],
		type: ["Bug", "Ground"],
		nfe: 1
	},
	291: {
		species: "Ninjask",
		randomBattleMoves: ["batonpass","swordsdance","substitute","protect","xscissor"],
		randomDoubleBattleMoves: ["batonpass","swordsdance","substitute","protect","xscissor","aerialace"],
		type: ["Bug", "Flying"]
	},
	292: {
		species: "Shedinja",
		randomBattleMoves: ["swordsdance","willowisp","xscissor","shadowsneak","shadowclaw","batonpass"],
		type: ["Bug", "Ghost"]
	},
	293: {
		species: "Whismur",
		randomBattleMoves: ["hypervoice","fireblast","shadowball","icebeam","extrasensory"],
		type: ["Normal"],
		nfe: 1
	},
	294: {
		species: "Loudred",
		randomBattleMoves: ["hypervoice","fireblast","shadowball","icebeam","circlethrow","bodyslam"],
		type: ["Normal"],
		nfe: 1
	},
	295: {
		species: "Exploud",
		randomBattleMoves: ["boomburst","fireblast","icebeam","surf","focusblast"],
		randomDoubleBattleMoves: ["boomburst","fireblast","icebeam","surf","focusblast","protect","hypervoice"],
		type: ["Normal"]
	},
	296: {
		species: "Makuhita",
		randomBattleMoves: ["crosschop","bulletpunch","closecombat","icepunch","bulkup","fakeout","earthquake"],
		type: ["Fighting"],
		nfe: 1
	},
	297: {
		species: "Hariyama",
		randomBattleMoves: ["bulletpunch","closecombat","icepunch","stoneedge","bulkup","knockoff"],
		randomDoubleBattleMoves: ["bulletpunch","closecombat","icepunch","stoneedge","fakeout","knockoff","helpinghand","wideguard","protect"],
		type: ["Fighting"]
	},
	298: {
		species: "Azurill",
		randomBattleMoves: ["scald","return","bodyslam","encore","toxic","protect","knockoff"],
		type: ["Normal", "Fairy"],
		nfe: 1
	},
	299: {
		species: "Nosepass",
		randomBattleMoves: ["powergem","thunderwave","stealthrock","painsplit","explosion","voltswitch"],
		type: ["Rock"],
		nfe: 1
	},
	300: {
		species: "Skitty",
		randomBattleMoves: ["doubleedge","zenheadbutt","thunderwave","fakeout","playrough","healbell"],
		type: ["Normal"],
		nfe: 1
	},
	301: {
		species: "Delcatty",
		randomBattleMoves: ["doubleedge","suckerpunch","wildcharge","fakeout","thunderwave","healbell"],
		randomDoubleBattleMoves: ["doubleedge","suckerpunch","playrough","wildcharge","fakeout","thunderwave","protect","helpinghand"],
		type: ["Normal"]
	},
	302: {
		species: "Sableye",
		randomBattleMoves: ["recover","willowisp","taunt","toxic","knockoff","foulplay"],
		randomDoubleBattleMoves: ["recover","willowisp","taunt","fakeout","knockoff","foulplay","helpinghand","snarl","protect"],
		megaRandomBattleMoves: ["recover","willowisp","darkpulse","calmmind","shadowball"],
		megaRandomDoubleBattleMoves: ["fakeout","knockoff","darkpulse","shadowball","willowisp","protect"],
		type: ["Dark", "Ghost"],
		mega: ["mega"]
	},
	303: {
		species: "Mawile",
		randomBattleMoves: ["swordsdance","ironhead","substitute","playrough","suckerpunch","batonpass"],
		randomDoubleBattleMoves: ["swordsdance","ironhead","firefang","substitute","playrough","suckerpunch","knockoff","protect"],
		megaRandomBattleMoves: ["swordsdance","ironhead","firefang","substitute","playrough","suckerpunch","knockoff","focuspunch"],
		megaRandomDoubleBattleMoves: ["swordsdance","ironhead","firefang","substitute","playrough","suckerpunch","knockoff","protect"],
		type: ["Steel", "Fairy"],
		mega: ["mega"]
	},
	304: {
		species: "Aron",
		randomBattleMoves: ["headsmash","ironhead","earthquake","superpower","stealthrock","endeavor"],
		type: ["Steel", "Rock"],
		nfe: 1
	},
	305: {
		species: "Lairon",
		randomBattleMoves: ["headsmash","ironhead","earthquake","superpower","stealthrock"],
		type: ["Steel", "Rock"],
		nfe: 1
	},
	306: {
		species: "Aggron",
		randomBattleMoves: ["autotomize","headsmash","earthquake","lowkick","heavyslam","aquatail","stealthrock"],
		randomDoubleBattleMoves: ["rockslide","headsmash","earthquake","lowkick","heavyslam","aquatail","stealthrock","protect"],
		megaRandomBattleMoves: ["earthquake","heavyslam","icepunch","stealthrock","thunderwave","roar","toxic"],
		megaRandomDoubleBattleMoves: ["rockslide","earthquake","lowkick","heavyslam","aquatail","protect"],
		type: ["Steel", "Rock"],
		mega: ["mega"]
	},
	307: {
		species: "Meditite",
		randomBattleMoves: ["highjumpkick","psychocut","icepunch","thunderpunch","trick","fakeout","bulletpunch","drainpunch","zenheadbutt"],
		type: ["Fighting", "Psychic"],
		nfe: 1
	},
	308: {
		species: "Medicham",
		randomBattleMoves: ["highjumpkick","drainpunch","zenheadbutt","icepunch","bulletpunch"],
		randomDoubleBattleMoves: ["highjumpkick","drainpunch","zenheadbutt","icepunch","bulletpunch","protect","fakeout"],
		megaRandomBattleMoves: ["highjumpkick","drainpunch","icepunch","fakeout","zenheadbutt"],
		megaRandomDoubleBattleMoves: ["highjumpkick","drainpunch","zenheadbutt","icepunch","bulletpunch","protect","fakeout"],
		type: ["Fighting", "Psychic"],
		mega: ["mega"]
	},
	309: {
		species: "Electrike",
		randomBattleMoves: ["voltswitch","thunderbolt","hiddenpowerice","switcheroo","flamethrower","hiddenpowergrass"],
		type: ["Electric"],
		nfe: 1
	},
	310: {
		species: "Manectric",
		randomBattleMoves: ["voltswitch","thunderbolt","hiddenpowerice","hiddenpowergrass","overheat","flamethrower"],
		randomDoubleBattleMoves: ["voltswitch","thunderbolt","hiddenpowerice","hiddenpowergrass","overheat","flamethrower","snarl","protect"],
		megaRandomBattleMoves: ["voltswitch","thunderbolt","hiddenpowerice","hiddenpowergrass","overheat"],
		megaRandomDoubleBattleMoves: ["voltswitch","thunderbolt","hiddenpowerice","hiddenpowergrass","overheat","flamethrower","snarl","protect"],
		type: ["Electric"],
		mega: ["mega"]
	},
	311: {
		species: "Plusle",
		randomBattleMoves: ["nastyplot","thunderbolt","substitute","batonpass","hiddenpowerice","encore"],
		randomDoubleBattleMoves: ["nastyplot","thunderbolt","substitute","protect","hiddenpowerice","encore","helpinghand"],
		type: ["Electric"]
	},
	312: {
		species: "Minun",
		randomBattleMoves: ["nastyplot","thunderbolt","substitute","batonpass","hiddenpowerice","encore"],
		randomDoubleBattleMoves: ["nastyplot","thunderbolt","substitute","protect","hiddenpowerice","encore","helpinghand"],
		type: ["Electric"]
	},
	313: {
		species: "Volbeat",
		randomBattleMoves: ["tailglow","batonpass","substitute","bugbuzz","thunderwave","encore","tailwind"],
		randomDoubleBattleMoves: ["stringshot","strugglebug","helpinghand","bugbuzz","thunderwave","encore","tailwind","protect"],
		type: ["Bug"]
	},
	314: {
		species: "Illumise",
		randomBattleMoves: ["substitute","batonpass","bugbuzz","encore","thunderbolt","tailwind","uturn","thunderwave"],
		randomDoubleBattleMoves: ["protect","helpinghand","bugbuzz","encore","thunderbolt","tailwind","uturn"],
		type: ["Bug"]
	},
	315: {
		species: "Roselia",
		randomBattleMoves: ["spikes","toxicspikes","sleeppowder","gigadrain","stunspore","rest","sludgebomb","synthesis"],
		type: ["Grass", "Poison"],
		nfe: 1
	},
	316: {
		species: "Gulpin",
		randomBattleMoves: ["stockpile","sludgebomb","sludgewave","icebeam","toxic","painsplit","yawn","encore"],
		type: ["Poison"],
		nfe: 1
	},
	317: {
		species: "Swalot",
		randomBattleMoves: ["sludgebomb","icebeam","toxic","yawn","encore","painsplit","earthquake"],
		randomDoubleBattleMoves: ["sludgebomb","icebeam","protect","yawn","encore","gunkshot","earthquake"],
		type: ["Poison"]
	},
	318: {
		species: "Carvanha",
		randomBattleMoves: ["protect","hydropump","surf","icebeam","waterfall","crunch","aquajet","destinybond"],
		type: ["Water", "Dark"],
		nfe: 1
	},
	319: {
		species: "Sharpedo",
		randomBattleMoves: ["protect","icebeam","crunch","earthquake","waterfall","destinybond"],
		randomDoubleBattleMoves: ["protect","icebeam","crunch","earthquake","waterfall","destinybond"],
		megaRandomBattleMoves: ["protect","icefang","crunch","earthquake","waterfall","zenheadbutt"],
		type: ["Water", "Dark"],
		mega: ["mega"]
	},
	320: {
		species: "Wailmer",
		randomBattleMoves: ["waterspout","surf","hydropump","icebeam","hiddenpowergrass","hiddenpowerelectric"],
		type: ["Water"],
		nfe: 1
	},
	321: {
		species: "Wailord",
		randomBattleMoves: ["waterspout","hydropump","icebeam","hiddenpowergrass","hiddenpowerfire"],
		randomDoubleBattleMoves: ["waterspout","hydropump","icebeam","hiddenpowergrass","hiddenpowerfire","protect"],
		type: ["Water"]
	},
	322: {
		species: "Numel",
		randomBattleMoves: ["curse","earthquake","rockslide","fireblast","flamecharge","rest","sleeptalk","stockpile","hiddenpowerelectric","earthpower","lavaplume"],
		type: ["Fire", "Ground"],
		nfe: 1
	},
	323: {
		species: "Camerupt",
		randomBattleMoves: ["rockpolish","fireblast","earthpower","lavaplume","stealthrock","hiddenpowergrass","roar","stoneedge"],
		randomDoubleBattleMoves: ["rockpolish","fireblast","earthpower","heatwave","eruption","hiddenpowergrass","protect"],
		megaRandomBattleMoves: ["stealthrock","fireblast","earthpower","ancientpower","willowisp","toxic"],
		megaRandomDoubleBattleMoves: ["fireblast","earthpower","heatwave","eruption","rockslide","protect"],
		type: ["Fire", "Ground"],
		mega: ["mega"]
	},
	324: {
		species: "Torkoal",
		randomBattleMoves: ["shellsmash","fireblast","earthpower","hiddenpowergrass","stealthrock","rapidspin","yawn","lavaplume"],
		randomDoubleBattleMoves: ["protect","heatwave","earthpower","willowisp","shellsmash","fireblast","hiddenpowergrass"],
		type: ["Fire"]
	},
	325: {
		species: "Spoink",
		randomBattleMoves: ["psychic","reflect","lightscreen","thunderwave","trick","healbell","calmmind","hiddenpowerfighting","shadowball"],
		type: ["Psychic"],
		nfe: 1
	},
	326: {
		species: "Grumpig",
		randomBattleMoves: ["psychic","thunderwave","healbell","whirlwind","toxic","focusblast","reflect","lightscreen"],
		randomDoubleBattleMoves: ["psychic","psyshock","thunderwave","trickroom","taunt","protect","focusblast","reflect","lightscreen"],
		type: ["Psychic"]
	},
	327: {
		species: "Spinda",
		randomBattleMoves: ["return","superpower","suckerpunch","trickroom"],
		randomDoubleBattleMoves: ["doubleedge","return","superpower","suckerpunch","trickroom","fakeout","protect"],
		type: ["Normal"]
	},
	328: {
		species: "Trapinch",
		randomBattleMoves: ["earthquake","rockslide","crunch","quickattack","superpower"],
		type: ["Ground"],
		nfe: 1
	},
	329: {
		species: "Vibrava",
		randomBattleMoves: ["substitute","earthquake","outrage","roost","uturn","superpower","defog"],
		type: ["Ground", "Dragon"],
		nfe: 1
	},
	330: {
		species: "Flygon",
		randomBattleMoves: ["earthquake","outrage","uturn","roost","stoneedge","firepunch","fireblast","defog"],
		randomDoubleBattleMoves: ["earthquake","protect","dragonclaw","uturn","rockslide","firepunch","fireblast","tailwind","feint"],
		type: ["Ground", "Dragon"]
	},
	331: {
		species: "Cacnea",
		randomBattleMoves: ["swordsdance","spikes","suckerpunch","seedbomb","drainpunch"],
		type: ["Grass"],
		nfe: 1
	},
	332: {
		species: "Cacturne",
		randomBattleMoves: ["swordsdance","spikes","suckerpunch","seedbomb","drainpunch","substitute"],
		randomDoubleBattleMoves: ["swordsdance","spikyshield","suckerpunch","seedbomb","drainpunch","substitute"],
		type: ["Grass", "Dark"]
	},
	333: {
		species: "Swablu",
		randomBattleMoves: ["roost","toxic","cottonguard","pluck","hypervoice","return"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	334: {
		species: "Altaria",
		randomBattleMoves: ["dragondance","dracometeor","outrage","dragonclaw","earthquake","roost","fireblast","healbell"],
		randomDoubleBattleMoves: ["dragondance","dracometeor","protect","dragonclaw","earthquake","fireblast","tailwind"],
		megaRandomBattleMoves: ["dragondance","return","hypervoice","healbell","earthquake","roost","dracometeor","fireblast"],
		megaRandomDoubleBattleMoves: ["dragondance","return","doubleedge","dragonclaw","earthquake","protect","fireblast"],
		type: ["Dragon", "Flying"],
		mega: ["mega"]
	},
	335: {
		species: "Zangoose",
		randomBattleMoves: ["swordsdance","closecombat","knockoff","quickattack","facade"],
		randomDoubleBattleMoves: ["protect","closecombat","knockoff","quickattack","facade"],
		type: ["Normal"]
	},
	336: {
		species: "Seviper",
		randomBattleMoves: ["flamethrower","sludgewave","gigadrain","darkpulse","switcheroo","coil","earthquake","poisonjab","suckerpunch"],
		randomDoubleBattleMoves: ["flamethrower","gigadrain","earthquake","suckerpunch","aquatail","protect","glare","poisonjab","sludgebomb"],
		type: ["Poison"]
	},
	337: {
		species: "Lunatone",
		randomBattleMoves: ["psychic","earthpower","stealthrock","rockpolish","batonpass","calmmind","icebeam","hiddenpowerrock","moonlight","toxic"],
		randomDoubleBattleMoves: ["psychic","earthpower","rockpolish","calmmind","helpinghand","icebeam","hiddenpowerrock","moonlight","trickroom","protect"],
		type: ["Rock", "Psychic"]
	},
	338: {
		species: "Solrock",
		randomBattleMoves: ["stealthrock","explosion","rockslide","reflect","lightscreen","willowisp","morningsun"],
		randomDoubleBattleMoves: ["protect","helpinghand","stoneedge","zenheadbutt","willowisp","trickroom","rockslide"],
		type: ["Rock", "Psychic"]
	},
	339: {
		species: "Barboach",
		randomBattleMoves: ["dragondance","waterfall","earthquake","return","bounce"],
		type: ["Water", "Ground"],
		nfe: 1
	},
	340: {
		species: "Whiscash",
		randomBattleMoves: ["dragondance","waterfall","earthquake","stoneedge","zenheadbutt"],
		randomDoubleBattleMoves: ["dragondance","waterfall","earthquake","stoneedge","zenheadbutt","protect"],
		type: ["Water", "Ground"]
	},
	341: {
		species: "Corphish",
		randomBattleMoves: ["dragondance","waterfall","crunch","superpower","swordsdance","knockoff","aquajet"],
		type: ["Water"],
		nfe: 1
	},
	342: {
		species: "Crawdaunt",
		randomBattleMoves: ["dragondance","crabhammer","superpower","swordsdance","knockoff","aquajet"],
		randomDoubleBattleMoves: ["dragondance","crabhammer","crunch","superpower","swordsdance","knockoff","aquajet","protect"],
		type: ["Water", "Dark"]
	},
	343: {
		species: "Baltoy",
		randomBattleMoves: ["stealthrock","earthquake","toxic","psychic","reflect","lightscreen","icebeam","rapidspin"],
		type: ["Ground", "Psychic"],
		nfe: 1
	},
	344: {
		species: "Claydol",
		randomBattleMoves: ["stealthrock","toxic","psychic","icebeam","earthquake","rapidspin"],
		randomDoubleBattleMoves: ["earthpower","trickroom","psychic","icebeam","earthquake","protect"],
		type: ["Ground", "Psychic"]
	},
	345: {
		species: "Lileep",
		randomBattleMoves: ["stealthrock","recover","ancientpower","hiddenpowerfire","gigadrain","stockpile"],
		type: ["Rock", "Grass"],
		nfe: 1
	},
	346: {
		species: "Cradily",
		randomBattleMoves: ["stealthrock","recover","gigadrain","toxic","seedbomb","rockslide","curse"],
		randomDoubleBattleMoves: ["protect","recover","seedbomb","rockslide","earthquake","curse","swordsdance"],
		type: ["Rock", "Grass"]
	},
	347: {
		species: "Anorith",
		randomBattleMoves: ["stealthrock","brickbreak","toxic","xscissor","rockslide","swordsdance","rockpolish"],
		type: ["Rock", "Bug"],
		nfe: 1
	},
	348: {
		species: "Armaldo",
		randomBattleMoves: ["stealthrock","stoneedge","toxic","xscissor","swordsdance","knockoff","rapidspin"],
		randomDoubleBattleMoves: ["rockslide","stoneedge","stringshot","xscissor","swordsdance","knockoff","protect"],
		type: ["Rock", "Bug"]
	},
	349: {
		species: "Feebas",
		randomBattleMoves: ["protect","confuseray","hypnosis","scald","toxic"],
		type: ["Water"],
		nfe: 1
	},
	350: {
		species: "Milotic",
		randomBattleMoves: ["recover","scald","toxic","icebeam","dragontail","rest","sleeptalk"],
		randomDoubleBattleMoves: ["recover","scald","hydropump","icebeam","dragontail","hypnosis","protect","hiddenpowergrass"],
		type: ["Water"]
	},
	351: {
		species: "Castform",
		randomBattleMoves: ["No data present. Refer to Sunny and Rainy forms."],
		sunnyBattleMoves: ["sunnyday","weatherball","solarbeam","icebeam"],
		rainyBattleMoves: ["raindance","weatherball","thunder","hurricane"],
		type: ["Normal"],
		forms: ["norm", "sunny", "rainy", "snowy"]
	},
	352: {
		species: "Kecleon",
		randomBattleMoves: ["fakeout","knockoff","drainpunch","suckerpunch","shadowsneak","stealthrock","recover"],
		randomDoubleBattleMoves: ["knockoff","fakeout","trickroom","recover","drainpunch","suckerpunch","shadowsneak","protect"],
		type: ["Normal"]
	},
	353: {
		species: "Shuppet",
		randomBattleMoves: ["trickroom","destinybond","taunt","shadowsneak","suckerpunch","willowisp"],
		type: ["Ghost"],
		nfe: 1
	},
	354: {
		species: "Banette",
		randomBattleMoves: ["destinybond","taunt","shadowclaw","suckerpunch","willowisp","shadowsneak","knockoff"],
		randomDoubleBattleMoves: ["shadowclaw","suckerpunch","willowisp","shadowsneak","knockoff","protect"],
		megaRandomBattleMoves: ["destinybond","taunt","shadowclaw","suckerpunch","willowisp","knockoff"],
		megaRandomDoubleBattleMoves: ["destinybond","taunt","shadowclaw","suckerpunch","willowisp","knockoff","protect"],
		type: ["Ghost"],
		mega: ["mega"]
	},
	355: {
		species: "Duskull",
		randomBattleMoves: ["willowisp","shadowsneak","icebeam","painsplit","substitute","nightshade"],
		type: ["Ghost"],
		nfe: 1
	},
	356: {
		species: "Dusclops",
		randomBattleMoves: ["willowisp","shadowsneak","icebeam","painsplit","substitute","seismictoss","toxic","trickroom"],
		type: ["Ghost"]
	},
	357: {
		species: "Tropius",
		randomBattleMoves: ["leechseed","substitute","airslash","gigadrain","toxic","protect"],
		randomDoubleBattleMoves: ["leechseed","protect","airslash","gigadrain","earthquake","hiddenpowerfire","tailwind","sunnyday","roost"],
		type: ["Grass", "Flying"]
	},
	358: {
		species: "Chimecho",
		randomBattleMoves: ["psychic","yawn","recover","calmmind","shadowball","healingwish","healbell","taunt"],
		randomDoubleBattleMoves: ["protect","psychic","thunderwave","recover","shadowball","dazzlinggleam","trickroom","helpinghand","taunt"],
		type: ["Psychic"]
	},
	359: {
		species: "Absol",
		randomBattleMoves: ["swordsdance","suckerpunch","knockoff","superpower","pursuit","playrough"],
		randomDoubleBattleMoves: ["swordsdance","suckerpunch","knockoff","fireblast","superpower","protect","playrough"],
		megaRandomBattleMoves: ["swordsdance","suckerpunch","knockoff","fireblast","superpower","pursuit","playrough","icebeam"],
		megaRandomDoubleBattleMoves: ["swordsdance","suckerpunch","knockoff","fireblast","superpower","protect","playrough"],
		type: ["Dark"],
		mega: ["mega"]
	},
	360: {
		species: "Wynaut",
		randomBattleMoves: ["destinybond","counter","mirrorcoat","encore"],
		type: ["Psychic"],
		nfe: 1
	},
	361: {
		species: "Snorunt",
		randomBattleMoves: ["spikes","icebeam","hiddenpowerground","iceshard","crunch","switcheroo"],
		type: ["Ice"],
		nfe: 1
	},
	362: {
		species: "Glalie",
		randomBattleMoves: ["spikes","icebeam","iceshard","taunt","earthquake","explosion","superfang"],
		randomDoubleBattleMoves: ["icebeam","iceshard","taunt","earthquake","protect"],
		megaRandomBattleMoves: ["crunch","iceshard","taunt","earthquake","explosion","return","spikes"],
		megaRandomDoubleBattleMoves: ["crunch","iceshard","taunt","earthquake","explosion","protect","return"],
		type: ["Ice"],
		mega: ["mega"]
	},
	363: {
		species: "Spheal",
		randomBattleMoves: ["substitute","protect","toxic","surf","icebeam","yawn","superfang"],
		type: ["Ice", "Water"],
		nfe: 1
	},
	364: {
		species: "Sealeo",
		randomBattleMoves: ["substitute","protect","toxic","surf","icebeam","yawn","superfang"],
		type: ["Ice", "Water"],
		nfe: 1
	},
	365: {
		species: "Walrein",
		randomBattleMoves: ["substitute","protect","toxic","surf","icebeam","roar"],
		randomDoubleBattleMoves: ["protect","icywind","surf","icebeam"],
		type: ["Ice", "Water"]
	},
	366: {
		species: "Clamperl",
		randomBattleMoves: ["shellsmash","icebeam","surf","hiddenpowergrass","hiddenpowerelectric","substitute"],
		type: ["Water"],
		nfe: 1
	},
	367: {
		species: "Huntail",
		randomBattleMoves: ["shellsmash","waterfall","icebeam","batonpass","suckerpunch"],
		randomDoubleBattleMoves: ["shellsmash","waterfall","icefang","batonpass","suckerpunch","protect"],
		type: ["Water"]
	},
	368: {
		species: "Gorebyss",
		randomBattleMoves: ["shellsmash","batonpass","hydropump","icebeam","hiddenpowergrass","substitute"],
		randomDoubleBattleMoves: ["shellsmash","batonpass","surf","icebeam","hiddenpowergrass","substitute","protect"],
		type: ["Water"]
	},
	369: {
		species: "Relicanth",
		randomBattleMoves: ["headsmash","waterfall","earthquake","doubleedge","stealthrock","toxic"],
		randomDoubleBattleMoves: ["headsmash","waterfall","earthquake","doubleedge","rockslide","protect"],
		type: ["Water", "Rock"]
	},
	370: {
		species: "Luvdisc",
		randomBattleMoves: ["icebeam","toxic","sweetkiss","protect","scald"],
		type: ["Water"]
	},
	371: {
		species: "Bagon",
		randomBattleMoves: ["outrage","dragondance","firefang","rockslide","dragonclaw"],
		type: ["Dragon"],
		nfe: 1
	},
	372: {
		species: "Shelgon",
		randomBattleMoves: ["outrage","brickbreak","dragonclaw","dragondance","crunch","zenheadbutt"],
		type: ["Dragon"],
		nfe: 1
	},
	373: {
		species: "Salamence",
		randomBattleMoves: ["outrage","fireblast","earthquake","dracometeor","dragondance","dragonclaw"],
		randomDoubleBattleMoves: ["protect","fireblast","earthquake","dracometeor","tailwind","dragondance","dragonclaw","hydropump","rockslide"],
		megaRandomBattleMoves: ["doubleedge","return","fireblast","earthquake","dracometeor","roost","dragondance"],
		megaRandomDoubleBattleMoves: ["doubleedge","return","fireblast","earthquake","dracometeor","protect","dragondance","dragonclaw"],
		type: ["Dragon", "Flying"],
		mega: ["mega"]
	},
	374: {
		species: "Beldum",
		randomBattleMoves: ["ironhead","zenheadbutt","headbutt","irondefense"],
		type: ["Steel", "Psychic"],
		nfe: 1
	},
	375: {
		species: "Metang",
		randomBattleMoves: ["stealthrock","meteormash","toxic","earthquake","bulletpunch","zenheadbutt"],
		type: ["Steel", "Psychic"],
		nfe: 1
	},
	376: {
		species: "Metagross",
		randomBattleMoves: ["meteormash","earthquake","agility","stealthrock","zenheadbutt","bulletpunch","thunderpunch","explosion","icepunch"],
		randomDoubleBattleMoves: ["meteormash","earthquake","protect","zenheadbutt","bulletpunch","thunderpunch","explosion","icepunch","hammerarm"],
		megaRandomBattleMoves: ["meteormash","earthquake","agility","zenheadbutt","hammerarm","icepunch"],
		megaRandomDoubleBattleMoves: ["meteormash","earthquake","protect","zenheadbutt","thunderpunch","icepunch"],
		type: ["Steel", "Psychic"],
		mega: ["mega"]
	},
	377: {
		species: "Regirock",
		randomBattleMoves: ["stealthrock","thunderwave","stoneedge","drainpunch","curse","rest","rockslide","toxic"],
		randomDoubleBattleMoves: ["stealthrock","thunderwave","stoneedge","drainpunch","curse","rockslide","protect"],
		type: ["Rock"],
		legend: 1
	},
	378: {
		species: "Regice",
		randomBattleMoves: ["thunderwave","icebeam","thunderbolt","rest","sleeptalk","focusblast","rockpolish"],
		randomDoubleBattleMoves: ["thunderwave","icebeam","thunderbolt","icywind","protect","focusblast","rockpolish"],
		type: ["Ice"],
		legend: 1
	},
	379: {
		species: "Registeel",
		randomBattleMoves: ["stealthrock","ironhead","curse","rest","thunderwave","toxic","seismictoss"],
		randomDoubleBattleMoves: ["stealthrock","ironhead","curse","rest","thunderwave","protect","seismictoss"],
		type: ["Steel"],
		legend: 1
	},
	380: {
		species: "Latias",
		randomBattleMoves: ["dracometeor","psyshock","hiddenpowerfire","roost","thunderbolt","healingwish","defog"],
		randomDoubleBattleMoves: ["dragonpulse","psychic","tailwind","helpinghand","healpulse","lightscreen","reflect","protect"],
		megaRandomBattleMoves: ["calmmind","dragonpulse","surf","dracometeor","roost","hiddenpowerfire","substitute","psyshock"],
		megaRandomDoubleBattleMoves: ["dragonpulse","psychic","tailwind","helpinghand","healpulse","lightscreen","reflect","protect"],
		type: ["Dragon", "Psychic"],
		mega: ["mega"],
		legend: 1
	},
	381: {
		species: "Latios",
		randomBattleMoves: ["dracometeor","hiddenpowerfire","surf","thunderbolt","psyshock","roost","trick","defog"],
		randomDoubleBattleMoves: ["dracometeor","dragonpulse","surf","thunderbolt","psyshock","substitute","trick","tailwind","protect","hiddenpowerfire"],
		megaRandomBattleMoves: ["calmmind","dracometeor","hiddenpowerfire","psyshock","roost","memento","defog"],
		megaRandomDoubleBattleMoves: ["dracometeor","dragonpulse","surf","thunderbolt","psyshock","substitute","trick","tailwind","protect","hiddenpowerfire"],
		type: ["Dragon", "Psychic"],
		mega: ["mega"],
		legend: 1
	},
	382: {
		species: "Kyogre",
		randomBattleMoves: ["waterspout","originpulse","scald","thunder","icebeam"],
		randomDoubleBattleMoves: ["waterspout","muddywater","originpulse","thunder","icebeam","calmmind","rest","sleeptalk","protect"],
		megaRandomBattleMoves: ["calmmind","waterspout","originpulse","scald","thunder","icebeam","rest","sleeptalk"],
		megaRandomDoubleBattleMoves: ["waterspout","originpulse","muddywater","thunder","icebeam","calmmind","rest","sleeptalk","protect"],
		type: ["Water"],
		mega: ["primal"],
		uber: 1,
		legend: 1
	},
	383: {
		species: "Groudon",
		randomBattleMoves: ["precipiceblades","earthquake","stealthrock","lavaplume","stoneedge","dragontail","roar","toxic","swordsdance","rockpolish","firepunch"],
		randomDoubleBattleMoves: ["precipiceblades","rockslide","protect","stoneedge","swordsdance","rockpolish","dragonclaw","firepunch"],
		megaRandomBattleMoves: ["stealthrock","precipiceblades","earthquake","lavaplume","stoneedge","overheat","rockpolish","thunderwave"],
		megaRandomDoubleBattleMoves: ["precipiceblades","lavaplume","rockslide","stoneedge","swordsdance","overheat","rockpolish","firepunch","protect"],
		type: ["Ground"],
		mega: ["primal"],
		uber: 1,
		legend: 1
	},
	384: {
		species: "Rayquaza",
		randomBattleMoves: ["outrage","vcreate","extremespeed","dragondance","earthquake","dracometeor","dragonclaw"],
		randomDoubleBattleMoves: ["tailwind","vcreate","extremespeed","dragondance","earthquake","dracometeor","dragonclaw","protect"],
		megaRandomBattleMoves: ["vcreate","extremespeed","swordsdance","earthquake","dragonascent","dragonclaw","dragondance"],
		megaRandomDoubleBattleMoves: ["vcreate","extremespeed","swordsdance","earthquake","dragonascent","dragonclaw","dragondance","protect"],
		type: ["Dragon", "Flying"],
		mega: ["mega"],
		uber: 1,
		legend: 1
	},
	385: {
		species: "Jirachi",
		randomBattleMoves: ["ironhead","uturn","firepunch","icepunch","trick","stealthrock","bodyslam","toxic","wish","substitute"],
		randomDoubleBattleMoves: ["bodyslam","ironhead","icywind","thunderwave","helpinghand","trickroom","uturn","followme","psychic","protect"],
		type: ["Steel", "Psychic"],
		uber: 1,
		legend: 1
	},
	386: {
		species: "Deoxys",
		//Normal form
		randomBattleMoves: ["psychoboost","stealthrock","spikes","firepunch","superpower","extremespeed","knockoff","taunt"],
		randomDoubleBattleMoves: ["psychoboost","superpower","extremespeed","icebeam","thunderbolt","firepunch","protect","knockoff","psyshock"],
		//Attack form
		atkBattleMoves: ["psychoboost","superpower","icebeam","knockoff","extremespeed","firepunch","stealthrock"],
		atkDoubleBattleMoves: ["psychoboost","superpower","extremespeed","icebeam","thunderbolt","firepunch","protect","knockoff"],
		//Defence form
		defBattleMoves: ["spikes","stealthrock","recover","taunt","toxic","seismictoss","knockoff"],
		defDoubleBattleMoves: ["protect","stealthrock","recover","taunt","reflect","seismictoss","lightscreen","trickroom"],
		//Speed form
		spdBattleMoves: ["spikes","stealthrock","superpower","psychoboost","taunt","magiccoat","knockoff"],
		spdDoubleBattleMoves: ["superpower","icebeam","psychoboost","taunt","lightscreen","reflect","protect","knockoff"],
		
		type: ["Psychic"],
		forms: ["norm", "attack", "defence", "speed"],
		uber: 1,
		legend: 1
	},
	387: {
		species: "Turtwig",
		randomBattleMoves: ["reflect","lightscreen","stealthrock","seedbomb","substitute","leechseed","toxic"],
		type: ["Grass"],
		nfe: 1
	},
	388: {
		species: "Grotle",
		randomBattleMoves: ["reflect","lightscreen","stealthrock","seedbomb","substitute","leechseed","toxic"],
		type: ["Grass"],
		nfe: 1
	},
	389: {
		species: "Torterra",
		randomBattleMoves: ["stealthrock","earthquake","woodhammer","stoneedge","synthesis","rockpolish"],
		randomDoubleBattleMoves: ["protect","earthquake","woodhammer","stoneedge","rockslide","wideguard","rockpolish"],
		type: ["Grass", "Ground"]
	},
	390: {
		species: "Chimchar",
		randomBattleMoves: ["stealthrock","overheat","hiddenpowergrass","fakeout","uturn","gunkshot"],
		type: ["Fire"],
		nfe: 1
	},
	391: {
		species: "Monferno",
		randomBattleMoves: ["stealthrock","overheat","hiddenpowergrass","fakeout","vacuumwave","uturn","gunkshot"],
		type: ["Fire", "Fighting"],
		nfe: 1
	},
	392: {
		species: "Infernape",
		randomBattleMoves: ["closecombat","fireblast","grassknot","machpunch","flareblitz","uturn","stealthrock","hiddenpowerice","thunderpunch","nastyplot","swordsdance"],
		randomDoubleBattleMoves: ["fakeout","heatwave","closecombat","uturn","grassknot","stoneedge","machpunch","feint","taunt","flareblitz","hiddenpowerice","thunderpunch","protect"],
		type: ["Fire", "Fighting"]
	},
	393: {
		species: "Piplup",
		randomBattleMoves: ["stealthrock","hydropump","scald","icebeam","hiddenpowerelectric","hiddenpowerfire","yawn","defog"],
		type: ["Water"],
		nfe: 1
	},
	394: {
		species: "Prinplup",
		randomBattleMoves: ["stealthrock","hydropump","scald","icebeam","hiddenpowerelectric","hiddenpowerfire","yawn","defog"],
		type: ["Water"],
		nfe: 1
	},
	395: {
		species: "Empoleon",
		randomBattleMoves: ["hydropump","flashcannon","grassknot","hiddenpowerfire","icebeam","scald","toxic","roar","stealthrock"],
		randomDoubleBattleMoves: ["icywind","scald","surf","icebeam","hiddenpowerelectric","protect","grassknot","flashcannon"],
		type: ["Water", "Steel"]
	},
	396: {
		species: "Starly",
		randomBattleMoves: ["bravebird","return","uturn","pursuit"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	397: {
		species: "Staravia",
		randomBattleMoves: ["bravebird","return","uturn","pursuit","defog"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	398: {
		species: "Staraptor",
		randomBattleMoves: ["bravebird","closecombat","uturn","quickattack","roost","doubleedge"],
		randomDoubleBattleMoves: ["bravebird","closecombat","uturn","quickattack","doubleedge","tailwind","protect"],
		type: ["Normal", "Flying"]
	},
	399: {
		species: "Bidoof",
		randomBattleMoves: ["return","aquatail","curse","quickattack","stealthrock","superfang"],
		type: ["Normal"],
		nfe: 1
	},
	400: {
		species: "Bibarel",
		randomBattleMoves: ["return","waterfall","curse","quickattack","stealthrock","rest"],
		randomDoubleBattleMoves: ["return","waterfall","curse","quickattack","protect","rest"],
		type: ["Normal", "Water"]
	},
	401: {
		species: "Kricketot",
		randomBattleMoves: ["endeavor","mudslap","bugbite","strugglebug"],
		type: ["Bug"],
		nfe: 1
	},
	402: {
		species: "Kricketune",
		randomBattleMoves: ["xscissor","endeavor","taunt","toxic","stickyweb","knockoff"],
		randomDoubleBattleMoves: ["bugbite","protect","taunt","stickyweb","knockoff"],
		type: ["Bug"]
	},
	403: {
		species: "Shinx",
		randomBattleMoves: ["wildcharge","icefang","firefang","crunch"],
		type: ["Electric"],
		nfe: 1
	},
	404: {
		species: "Luxio",
		randomBattleMoves: ["wildcharge","icefang","firefang","crunch"],
		type: ["Electric"],
		nfe: 1
	},
	405: {
		species: "Luxray",
		randomBattleMoves: ["wildcharge","icefang","voltswitch","crunch","superpower","facade"],
		randomDoubleBattleMoves: ["wildcharge","icefang","voltswitch","crunch","superpower","facade","protect"],
		type: ["Electric"]
	},
	406: {
		species: "Budew",
		randomBattleMoves: ["spikes","sludgebomb","sleeppowder","gigadrain","stunspore","rest"],
		type: ["Grass", "Poison"],
		nfe: 1
	},
	407: {
		species: "Roserade",
		randomBattleMoves: ["sludgebomb","gigadrain","sleeppowder","leafstorm","spikes","toxicspikes","rest","synthesis","hiddenpowerfire"],
		randomDoubleBattleMoves: ["sludgebomb","gigadrain","sleeppowder","leafstorm","protect","hiddenpowerfire"],
		type: ["Grass", "Poison"]
	},
	408: {
		species: "Cranidos",
		randomBattleMoves: ["headsmash","rockslide","earthquake","zenheadbutt","firepunch","rockpolish","crunch"],
		type: ["Rock"],
		nfe: 1
	},
	409: {
		species: "Rampardos",
		randomBattleMoves: ["headsmash","earthquake","rockpolish","crunch","rockslide","firepunch"],
		randomDoubleBattleMoves: ["headsmash","earthquake","zenheadbutt","rockslide","crunch","stoneedge","protect"],
		type: ["Rock"]
	},
	410: {
		species: "Shieldon",
		randomBattleMoves: ["stealthrock","metalburst","fireblast","icebeam","protect","toxic","roar"],
		type: ["Rock", "Steel"],
		nfe: 1
	},
	411: {
		species: "Bastiodon",
		randomBattleMoves: ["stealthrock","rockblast","metalburst","protect","toxic","roar"],
		randomDoubleBattleMoves: ["stealthrock","stoneedge","metalburst","protect","wideguard","guardsplit"],
		type: ["Rock", "Steel"]
	},
	412: {
		species: "Burmy",
		randomBattleMoves: ["bugbite","hiddenpowerice","electroweb","protect"],
		type: ["Bug"],
		forms: ["plant", "sandy", "trash"],
		nfe: 1
	},
	413: {
		species: "Wormadam",
		//Plant
		randomBattleMoves: ["gigadrain","signalbeam","protect","toxic","synthesis"],
		randomDoubleBattleMoves: ["leafstorm","gigadrain","signalbeam","hiddenpowerice","hiddenpowerrock","stringshot","protect"],
		
		//Sandy
		sandyBattleMoves: ["earthquake","toxic","rockblast","protect","stealthrock"],
		sandyDoubleBattleMoves: ["earthquake","suckerpunch","rockblast","protect","stringshot"],
		
		//Trash
		trashBattleMoves: ["stealthrock","toxic","gyroball","protect"],
		trashDoubleBattleMoves: ["strugglebug","stringshot","gyroball","protect"],
		
		type: ["Bug", "Grass"],
		forms: ["plant", "sandy", "trash"]
	},
	414: {
		species: "Mothim",
		randomBattleMoves: ["quiverdance","bugbuzz","airslash","gigadrain","hiddenpowerground","uturn"],
		randomDoubleBattleMoves: ["quiverdance","bugbuzz","airslash","gigadrain","roost","protect"],
		type: ["Bug", "Flying"]
	},
	415: {
		species: "Combee",
		randomBattleMoves: ["bugbuzz","aircutter","endeavor","ominouswind","tailwind"],
		type: ["Bug", "Flying"],
		nfe: 1
	},
	416: {
		species: "Vespiquen",
		randomBattleMoves: ["substitute","healorder","toxic","attackorder","defendorder","infestation"],
		randomDoubleBattleMoves: ["tailwind","healorder","stringshot","attackorder","strugglebug","protect"],
		type: ["Bug", "Flying"]
	},
	417: {
		species: "Pachirisu",
		randomBattleMoves: ["nuzzle","thunderbolt","superfang","toxic","uturn"],
		randomDoubleBattleMoves: ["nuzzle","thunderbolt","superfang","followme","uturn","helpinghand","protect"],
		type: ["Electric"]
	},
	418: {
		species: "Buizel",
		randomBattleMoves: ["waterfall","aquajet","switcheroo","brickbreak","bulkup","batonpass","icepunch"],
		type: ["Water"],
		nfe: 1
	},
	419: {
		species: "Floatzel",
		randomBattleMoves: ["bulkup","batonpass","waterfall","icepunch","substitute","taunt","aquajet","brickbreak"],
		randomDoubleBattleMoves: ["waterfall","aquajet","switcheroo","raindance","protect","icepunch","crunch","taunt"],
		type: ["Water"]
	},
	420: {
		species: "Cherubi",
		randomBattleMoves: ["sunnyday","solarbeam","weatherball","hiddenpowerice","aromatherapy","dazzlinggleam"],
		type: ["Grass"],
		nfe: 1
	},
	421: {
		species: "Cherrim",
		randomBattleMoves: ["energyball","dazzlinggleam","hiddenpowerfire","synthesis","healingwish"],
		randomDoubleBattleMoves: ["sunnyday","solarbeam","weatherball","gigadrain","protect"],
		sunnyRandomBattleMoves: ["sunnyday","solarbeam","gigadrain","weatherball","hiddenpowerice"],
		sunnyRandomDoubleBattleMoves: ["sunnyday","solarbeam","gigadrain","weatherball","protect"],
		type: ["Grass"],
		forms: ["overcast", "sunshine"]
	},
	422: {
		species: "Shellos",
		randomBattleMoves: ["scald","clearsmog","recover","toxic","icebeam","stockpile"],
		type: ["Water"],
		forms: ["west sea", "east sea"],
		nfe: 1
	},
	423: {
		species: "Gastrodon",
		randomBattleMoves: ["earthquake","icebeam","scald","toxic","recover","clearsmog"],
		randomDoubleBattleMoves: ["earthpower","icebeam","scald","muddywater","recover","icywind","protect"],
		type: ["Water", "Ground"],
		forms: ["west sea", "east sea"]
	},
	424: {
		species: "Ambipom",
		randomBattleMoves: ["fakeout","return","knockoff","uturn","switcheroo","seedbomb","acrobatics","lowkick"],
		randomDoubleBattleMoves: ["fakeout","return","knockoff","uturn","doublehit","icepunch","lowkick","protect"],
		type: ["Normal"]
	},
	425: {
		species: "Drifloon",
		randomBattleMoves: ["shadowball","substitute","calmmind","hypnosis","hiddenpowerfighting","thunderbolt","destinybond","willowisp","stockpile","batonpass","disable"],
		type: ["Ghost", "Flying"],
		nfe: 1
	},
	426: {
		species: "Drifblim",
		randomBattleMoves: ["acrobatics","willowisp","substitute","destinybond","shadowball"],
		randomDoubleBattleMoves: ["shadowball","substitute","hypnosis","hiddenpowerfighting","thunderbolt","destinybond","willowisp","protect"],
		type: ["Ghost", "Flying"]
	},
	427: {
		species: "Buneary",
		randomBattleMoves: ["fakeout","return","switcheroo","thunderpunch","jumpkick","firepunch","icepunch","healingwish"],
		type: ["Normal"],
		nfe: 1
	},
	428: {
		species: "Lopunny",
		randomBattleMoves: ["return","switcheroo","highjumpkick","icepunch","healingwish"],
		randomDoubleBattleMoves: ["return","switcheroo","highjumpkick","firepunch","icepunch","fakeout","protect","encore"],
		megaRandomBattleMoves: ["return","highjumpkick","substitute","thunderpunch","icepunch"],
		megaRandomDoubleBattleMoves: ["return","highjumpkick","protect","fakeout","icepunch","encore"],
		type: ["Normal"],
		mega: ["mega"]
	},
	429: {
		species: "Mismagius",
		randomBattleMoves: ["nastyplot","substitute","willowisp","shadowball","thunderbolt","dazzlinggleam","taunt","painsplit","destinybond"],
		randomDoubleBattleMoves: ["nastyplot","substitute","willowisp","shadowball","thunderbolt","dazzlinggleam","taunt","protect"],
		type: ["Ghost"]
	},
	430: {
		species: "Honchkrow",
		randomBattleMoves: ["substitute","superpower","suckerpunch","bravebird","roost","heatwave","pursuit"],
		randomDoubleBattleMoves: ["substitute","superpower","suckerpunch","bravebird","roost","heatwave","protect"],
		type: ["Dark", "Flying"]
	},
	431: {
		species: "Glameow",
		randomBattleMoves: ["fakeout","uturn","suckerpunch","hypnosis","quickattack","return","foulplay"],
		type: ["Normal"],
		nfe: 1
	},
	432: {
		species: "Purugly",
		randomBattleMoves: ["fakeout","uturn","suckerpunch","quickattack","return","knockoff"],
		randomDoubleBattleMoves: ["fakeout","uturn","suckerpunch","quickattack","return","knockoff","protect"],
		type: ["Normal"]
	},
	433: {
		species: "Chingling",
		randomBattleMoves: ["hypnosis","reflect","lightscreen","toxic","recover","psychic","signalbeam","healbell"],
		type: ["Psychic"],
		nfe: 1
	},
	434: {
		species: "Stunky",
		randomBattleMoves: ["pursuit","suckerpunch","crunch","fireblast","explosion","taunt","playrough","defog"],
		type: ["Poison", "Dark"],
		nfe: 1
	},
	435: {
		species: "Skuntank",
		randomBattleMoves: ["pursuit","suckerpunch","crunch","fireblast","taunt","poisonjab","defog"],
		randomDoubleBattleMoves: ["protect","suckerpunch","crunch","fireblast","taunt","poisonjab","playrough","snarl"],
		type: ["Poison", "Dark"]
	},
	436: {
		species: "Bronzor",
		randomBattleMoves: ["stealthrock","psychic","toxic","hypnosis","reflect","lightscreen","trickroom","trick"],
		type: ["Steel", "Psychic"],
		nfe: 1
	},
	437: {
		species: "Bronzong",
		randomBattleMoves: ["stealthrock","earthquake","toxic","reflect","lightscreen","trickroom","explosion","gyroball"],
		randomDoubleBattleMoves: ["earthquake","protect","reflect","lightscreen","trickroom","explosion","gyroball"],
		type: ["Steel", "Psychic"]
	},
	438: {
		species: "Bonsly",
		randomBattleMoves: ["rockslide","brickbreak","doubleedge","toxic","stealthrock","suckerpunch","explosion"],
		type: ["Rock"],
		nfe: 1
	},
	439: {
		species: "MimeJr.",
		randomBattleMoves: ["batonpass","psychic","thunderwave","hiddenpowerfighting","healingwish","nastyplot","thunderbolt","encore"],
		randomDoubleBattleMoves: ["fakeout","psychic","thunderwave","hiddenpowerfighting","healingwish","nastyplot","thunderbolt","encore","icywind","protect"],
		type: ["Psychic", "Fairy"],
		nfe: 1
	},
	440: {
		species: "Happiny",
		randomBattleMoves: ["aromatherapy","toxic","thunderwave","counter","endeavor","lightscreen","fireblast"],
		randomDoubleBattleMoves: ["aromatherapy","toxic","thunderwave","helpinghand","swagger","lightscreen","fireblast","protect"],
		type: ["Normal"],
		nfe: 1
	},
	441: {
		species: "Chatot",
		randomBattleMoves: ["nastyplot","boomburst","heatwave","hiddenpowerground","substitute","chatter","uturn"],
		randomDoubleBattleMoves: ["nastyplot","heatwave","encore","substitute","chatter","uturn","protect","hypervoice","boomburst"],
		type: ["Normal", "Flying"]
	},
	442: {
		species: "Spiritomb",
		randomBattleMoves: ["shadowsneak","suckerpunch","pursuit","willowisp","darkpulse","rest","sleeptalk","foulplay","painsplit","calmmind"],
		randomDoubleBattleMoves: ["shadowsneak","suckerpunch","icywind","willowisp","snarl","darkpulse","protect","foulplay","painsplit"],
		type: ["Ghost", "Dark"]
	},
	443: {
		species: "Gible",
		randomBattleMoves: ["outrage","dragonclaw","earthquake","fireblast","stoneedge","stealthrock"],
		type: ["Dragon", "Ground"],
		nfe: 1
	},
	444: {
		species: "Gabite",
		randomBattleMoves: ["outrage","dragonclaw","earthquake","fireblast","stoneedge","stealthrock"],
		type: ["Dragon", "Ground"],
		nfe: 1
	},
	445: {
		species: "Garchomp",
		randomBattleMoves: ["outrage","dragonclaw","earthquake","stoneedge","fireblast","swordsdance","stealthrock","firefang"],
		randomDoubleBattleMoves: ["substitute","dragonclaw","earthquake","stoneedge","rockslide","swordsdance","protect"],
		megaRandomBattleMoves: ["outrage","dracometeor","earthquake","stoneedge","fireblast","swordsdance"],
		megaRandomDoubleBattleMoves: ["substitute","dragonclaw","earthquake","stoneedge","rockslide","swordsdance","protect","fireblast"],
		type: ["Dragon", "Ground"],
		mega: ["mega"]
	},
	446: {
		species: "Munchlax",
		randomBattleMoves: ["rest","curse","sleeptalk","bodyslam","earthquake","return","firepunch","icepunch","whirlwind","toxic"],
		type: ["Normal"],
		nfe: 1
	},
	447: {
		species: "Riolu",
		randomBattleMoves: ["crunch","rockslide","copycat","drainpunch","highjumpkick","icepunch","swordsdance"],
		type: ["Fighting"],
		nfe: 1
	},
	448: {
		species: "Lucario",
		randomBattleMoves: ["swordsdance","closecombat","crunch","extremespeed","icepunch","nastyplot","aurasphere","darkpulse","vacuumwave","flashcannon"],
		randomDoubleBattleMoves: ["followme","closecombat","crunch","extremespeed","icepunch","bulletpunch","aurasphere","darkpulse","vacuumwave","flashcannon","protect"],
		megaRandomBattleMoves: ["swordsdance","closecombat","crunch","icepunch","bulletpunch","nastyplot","aurasphere","darkpulse","flashcannon"],
		megaRandomDoubleBattleMoves: ["followme","closecombat","crunch","extremespeed","icepunch","bulletpunch","aurasphere","darkpulse","vacuumwave","flashcannon","protect"],
		type: ["Fighting", "Steel"],
		mega: ["mega"]
	},
	449: {
		species: "Hippopotas",
		randomBattleMoves: ["earthquake","slackoff","whirlwind","stealthrock","protect","toxic","stockpile"],
		type: ["Ground"],
		nfe: 1
	},
	450: {
		species: "Hippowdon",
		randomBattleMoves: ["earthquake","slackoff","whirlwind","stealthrock","toxic","stoneedge"],
		randomDoubleBattleMoves: ["earthquake","slackoff","rockslide","stealthrock","protect","stoneedge"],
		type: ["Ground"]
	},
	451: {
		species: "Skorupi",
		randomBattleMoves: ["toxicspikes","xscissor","poisonjab","knockoff","pinmissile","whirlwind"],
		type: ["Poison", "Bug"],
		nfe: 1
	},
	452: {
		species: "Drapion",
		randomBattleMoves: ["knockoff","taunt","toxicspikes","poisonjab","whirlwind","swordsdance","aquatail","earthquake"],
		randomDoubleBattleMoves: ["snarl","taunt","protect","earthquake","aquatail","swordsdance","poisonjab","knockoff"],
		type: ["Poison", "Dark"]
	},
	453: {
		species: "Croagunk",
		randomBattleMoves: ["fakeout","vacuumwave","suckerpunch","drainpunch","darkpulse","knockoff","gunkshot","toxic"],
		type: ["Poison", "Fighting"],
		nfe: 1
	},
	454: {
		species: "Toxicroak",
		randomBattleMoves: ["swordsdance","gunkshot","drainpunch","suckerpunch","icepunch","substitute"],
		randomDoubleBattleMoves: ["suckerpunch","drainpunch","substitute","swordsdance","knockoff","icepunch","gunkshot","fakeout","protect"],
		type: ["Poison", "Fighting"]
	},
	455: {
		species: "Carnivine",
		randomBattleMoves: ["swordsdance","powerwhip","return","sleeppowder","substitute","knockoff"],
		randomDoubleBattleMoves: ["swordsdance","powerwhip","return","sleeppowder","substitute","leechseed","knockoff","ragepowder","protect"],
		type: ["Grass"]
	},
	456: {
		species: "Finneon",
		randomBattleMoves: ["surf","uturn","icebeam","hiddenpowerelectric","hiddenpowergrass"],
		type: ["Water"],
		nfe: 1
	},
	457: {
		species: "Lumineon",
		randomBattleMoves: ["scald","waterfall","icebeam","uturn","toxic","defog"],
		randomDoubleBattleMoves: ["surf","uturn","icebeam","toxic","raindance","tailwind","protect"],
		type: ["Water"]
	},
	458: {
		species: "Mantyke",
		randomBattleMoves: ["raindance","hydropump","scald","airslash","icebeam","rest","sleeptalk","toxic"],
		type: ["Water", "Flying"],
		nfe: 1
	},
	459: {
		species: "Snover",
		randomBattleMoves: ["blizzard","iceshard","gigadrain","leechseed","substitute","woodhammer"],
		type: ["Grass", "Ice"],
		nfe: 1
	},
	460: {
		species: "Abomasnow",
		randomBattleMoves: ["woodhammer","iceshard","blizzard","gigadrain","leechseed","substitute","focuspunch","earthquake"],
		randomDoubleBattleMoves: ["blizzard","iceshard","gigadrain","protect","focusblast","woodhammer","earthquake"],
		megaRandomBattleMoves: ["blizzard","gigadrain","woodhammer","earthquake","iceshard","hiddenpowerfire"],
		megaRandomDoubleBattleMoves: ["blizzard","iceshard","gigadrain","protect","focusblast","woodhammer","earthquake"],
		type: ["Grass", "Ice"],
		mega: ["mega"]
	},
	461: {
		species: "Weavile",
		randomBattleMoves: ["iceshard","iciclecrash","knockoff","pursuit","swordsdance","lowkick"],
		randomDoubleBattleMoves: ["iceshard","iciclecrash","knockoff","fakeout","swordsdance","lowkick","taunt","protect","feint"],
		type: ["Dark", "Ice"]
	},
	462: {
		species: "Magnezone",
		randomBattleMoves: ["thunderbolt","substitute","flashcannon","hiddenpowerice","voltswitch","chargebeam","hiddenpowerfire"],
		randomDoubleBattleMoves: ["thunderbolt","substitute","flashcannon","hiddenpowerice","voltswitch","protect","electroweb","discharge","hiddenpowerfire"],
		type: ["Electric", "Steel"]
	},
	463: {
		species: "Lickilicky",
		randomBattleMoves: ["wish","protect","bodyslam","knockoff","dragontail","healbell","swordsdance","explosion","earthquake","powerwhip"],
		randomDoubleBattleMoves: ["wish","protect","dragontail","knockoff","bodyslam","rockslide","powerwhip","earthquake","toxic","healbell","explosion"],
		type: ["Normal"]
	},
	464: {
		species: "Rhyperior",
		randomBattleMoves: ["stoneedge","earthquake","aquatail","megahorn","stealthrock","rockblast","rockpolish","dragontail"],
		randomDoubleBattleMoves: ["stoneedge","earthquake","hammerarm","megahorn","stealthrock","rockslide","protect"],
		type: ["Ground", "Rock"]
	},
	465: {
		species: "Tangrowth",
		randomBattleMoves: ["gigadrain","leafstorm","knockoff","earthquake","hiddenpowerfire","rockslide","sleeppowder","leechseed","synthesis"],
		randomDoubleBattleMoves: ["gigadrain","sleeppowder","hiddenpowerice","leechseed","knockoff","ragepowder","focusblast","protect","powerwhip","earthquake"],
		type: ["Grass"]
	},
	466: {
		species: "Electivire",
		randomBattleMoves: ["wildcharge","crosschop","icepunch","flamethrower","earthquake","voltswitch"],
		randomDoubleBattleMoves: ["wildcharge","crosschop","icepunch","substitute","flamethrower","earthquake","protect","followme"],
		type: ["Electric"]
	},
	467: {
		species: "Magmortar",
		randomBattleMoves: ["fireblast","focusblast","hiddenpowergrass","hiddenpowerice","thunderbolt","earthquake","substitute"],
		randomDoubleBattleMoves: ["fireblast","taunt","focusblast","hiddenpowergrass","hiddenpowerice","thunderbolt","heatwave","willowisp","protect","followme"],
		type: ["Fire"]
	},
	468: {
		species: "Togekiss",
		randomBattleMoves: ["roost","thunderwave","nastyplot","airslash","aurasphere","batonpass","healbell","defog"],
		randomDoubleBattleMoves: ["roost","thunderwave","nastyplot","airslash","followme","dazzlinggleam","tailwind","protect"],
		type: ["Fairy", "Flying"]
	},
	469: {
		species: "Yanmega",
		randomBattleMoves: ["bugbuzz","airslash","ancientpower","uturn","protect","gigadrain"],
		type: ["Bug", "Flying"]
	},
	470: {
		species: "Leafeon",
		randomBattleMoves: ["swordsdance","leafblade","substitute","xscissor","synthesis","batonpass","knockoff"],
		randomDoubleBattleMoves: ["swordsdance","leafblade","substitute","xscissor","protect","helpinghand","knockoff"],
		type: ["Grass"]
	},
	471: {
		species: "Glaceon",
		randomBattleMoves: ["icebeam","hiddenpowerground","shadowball","healbell","wish","protect","toxic"],
		randomDoubleBattleMoves: ["icebeam","hiddenpowerground","shadowball","wish","protect","healbell","helpinghand"],
		type: ["Ice"]
	},
	472: {
		species: "Gliscor",
		randomBattleMoves: ["roost","substitute","taunt","earthquake","protect","toxic","stealthrock","knockoff"],
		randomDoubleBattleMoves: ["tailwind","substitute","taunt","earthquake","protect","stoneedge","knockoff"],
		type: ["Ground", "Flying"]
	},
	473: {
		species: "Mamoswine",
		randomBattleMoves: ["iceshard","earthquake","endeavor","iciclecrash","stealthrock","superpower","knockoff"],
		randomDoubleBattleMoves: ["iceshard","earthquake","rockslide","iciclecrash","protect","superpower","knockoff"],
		type: ["Ice", "Ground"]
	},
	474: {
		species: "Porygon-Z",
		randomBattleMoves: ["triattack","darkpulse","icebeam","thunderbolt","agility","trick","nastyplot"],
		randomDoubleBattleMoves: ["protect","triattack","darkpulse","hiddenpowerfighting","agility","trick","nastyplot"],
		type: ["Normal"]
	},
	475: {
		species: "Gallade",
		randomBattleMoves: ["bulkup","drainpunch","icepunch","shadowsneak","closecombat","zenheadbutt","knockoff","trick"],
		randomDoubleBattleMoves: ["closecombat","trick","stoneedge","shadowsneak","drainpunch","icepunch","zenheadbutt","knockoff","trickroom","protect","helpinghand","healpulse"],
		megaRandomBattleMoves: ["swordsdance","closecombat","drainpunch","knockoff","zenheadbutt","substitute"],
		megaRandomDoubleBattleMoves: ["closecombat","stoneedge","drainpunch","icepunch","zenheadbutt","swordsdance","knockoff","protect"],
		type: ["Psychic", "Fighting"],
		mega: ["mega"]
	},
	476: {
		species: "Probopass",
		randomBattleMoves: ["stealthrock","thunderwave","toxic","flashcannon","powergem","voltswitch","painsplit"],
		randomDoubleBattleMoves: ["stealthrock","thunderwave","helpinghand","earthpower","powergem","wideguard","protect","voltswitch"],
		type: ["Rock", "Steel"]
	},
	477: {
		species: "Dusknoir",
		randomBattleMoves: ["willowisp","shadowsneak","icepunch","painsplit","substitute","earthquake","focuspunch"],
		randomDoubleBattleMoves: ["willowisp","shadowsneak","icepunch","painsplit","protect","earthquake","helpinghand","trickroom"],
		type: ["Ghost"]
	},
	478: {
		species: "Froslass",
		randomBattleMoves: ["icebeam","spikes","destinybond","shadowball","taunt","thunderwave"],
		randomDoubleBattleMoves: ["icebeam","protect","destinybond","shadowball","taunt","thunderwave"],
		type: ["Ice", "Ghost"]
	},
	479: {
		species: "Rotom",
		//Regular Rotom
		randomBattleMoves: ["thunderbolt","voltswitch","shadowball","substitute","painsplit","hiddenpowerice","trick","willowisp"],
		randomDoubleBattleMoves: ["thunderbolt","voltswitch","shadowball","substitute","painsplit","hiddenpowerice","trick","willowisp","electroweb","protect"],
		
		//Heat Rotom
		heatBattleMoves: ["overheat","thunderbolt","voltswitch","hiddenpowerice","painsplit","willowisp","trick"],
		heatDoubleBattleMoves: ["overheat","thunderbolt","voltswitch","substitute","painsplit","hiddenpowerice","willowisp","trick","electroweb","protect"],
		//Wash Rotom
		washBattleMoves: ["hydropump","thunderbolt","voltswitch","painsplit","hiddenpowerice","willowisp","trick"],
		washDoubleBattleMoves: ["hydropump","thunderbolt","voltswitch","substitute","painsplit","hiddenpowerice","willowisp","trick","electroweb","protect","hiddenpowergrass"],
		//Frost Rotom
		frostBattleMoves: ["blizzard","thunderbolt","voltswitch","substitute","painsplit","willowisp","trick"],
		frostDoubleBattleMoves: ["blizzard","thunderbolt","voltswitch","substitute","painsplit","willowisp","trick","electroweb","protect"],
		//Fan Rotom
		fanBattleMoves: ["airslash","thunderbolt","voltswitch","painsplit","willowisp","trick"],
		fanDoubleBattleMoves: ["airslash","thunderbolt","voltswitch","substitute","painsplit","hiddenpowerice","willowisp","electroweb","discharge","protect"],
		//Mow Rotom
		mowBattleMoves: ["leafstorm","thunderbolt","voltswitch","painsplit","hiddenpowerfire","willowisp","trick"],
		mowDoubleBattleMoves: ["leafstorm","thunderbolt","voltswitch","substitute","painsplit","hiddenpowerfire","willowisp","trick","electroweb","protect"],
		type: ["Electric", "Ghost"],
		forms: ["norm", "heat", "wash", "frost", "fan", "mow"]
	},
	480: {
		species: "Uxie",
		randomBattleMoves: ["stealthrock","thunderwave","psychic","uturn","healbell","knockoff","yawn"],
		randomDoubleBattleMoves: ["uturn","psyshock","yawn","healbell","stealthrock","thunderbolt","protect","helpinghand","thunderwave","skillswap"],
		type: ["Psychic"],
		legend: 1
	},
	481: {
		species: "Mesprit",
		randomBattleMoves: ["calmmind","psychic","psyshock","energyball","signalbeam","hiddenpowerfire","icebeam","healingwish","stealthrock","uturn"],
		randomDoubleBattleMoves: ["calmmind","psychic","thunderbolt","icebeam","substitute","uturn","trick","protect","knockoff","helpinghand"],
		type: ["Psychic"]
	},
	482: {
		species: "Azelf",
		randomBattleMoves: ["nastyplot","psyshock","fireblast","dazzlinggleam","stealthrock","knockoff","taunt","explosion"],
		randomDoubleBattleMoves: ["nastyplot","psychic","fireblast","thunderbolt","icepunch","knockoff","zenheadbutt","uturn","trick","taunt","protect","dazzlinggleam"],
		type: ["Psychic"],
		legend: 1
	},
	483: {
		species: "Dialga",
		randomBattleMoves: ["stealthrock","toxic","dracometeor","fireblast","flashcannon","roar","thunderbolt"],
		randomDoubleBattleMoves: ["dracometeor","dragonpulse","protect","thunderbolt","flashcannon","earthpower","fireblast","aurasphere"],
		type: ["Steel", "Dragon"],
		uber: 1,
		legend: 1
	},
	484: {
		species: "Palkia",
		randomBattleMoves: ["spacialrend","dracometeor","hydropump","thunderwave","dragontail","fireblast"],
		randomDoubleBattleMoves: ["spacialrend","dracometeor","surf","hydropump","thunderbolt","fireblast","protect"],
		type: ["Water", "Dragon"],
		uber: 1,
		legend: 1
	},
	485: {
		species: "Heatran",
		randomBattleMoves: ["fireblast","lavaplume","stealthrock","earthpower","flashcannon","protect","toxic","roar"],
		randomDoubleBattleMoves: ["heatwave","substitute","earthpower","protect","eruption","willowisp"],
		type: ["Fire", "Steel"],
		legend: 1
	},
	486: {
		species: "Regigigas",
		randomBattleMoves: ["thunderwave","substitute","return","drainpunch","earthquake","confuseray"],
		randomDoubleBattleMoves: ["thunderwave","substitute","return","icywind","rockslide","earthquake","knockoff","wideguard"],
		type: ["Normal"],
		legend: 1
	},
	487: {
		species: "Giratina",
		randomBattleMoves: ["rest","sleeptalk","dragontail","roar","willowisp","shadowball","dragonpulse"],
		randomDoubleBattleMoves: ["tailwind","icywind","protect","dragontail","willowisp","calmmind","dragonpulse","shadowball"],
		//Origin form
		originBattleMoves: ["dracometeor","shadowsneak","dragontail","willowisp","defog","toxic","shadowball","stoneedge","earthquake"],
		originDoubleBattleMoves: ["dracometeor","shadowsneak","tailwind","hiddenpowerfire","willowisp","calmmind","substitute","dragonpulse","shadowball","aurasphere","protect","earthquake"],
		type: ["Ghost", "Dragon"],
		forms: ["norm", "origin"],
		uber: 1,
		legend: 1
	},
	488: {
		species: "Cresselia",
		randomBattleMoves: ["moonlight","psychic","icebeam","thunderwave","toxic","substitute","psyshock","moonblast","calmmind"],
		randomDoubleBattleMoves: ["psyshock","icywind","thunderwave","trickroom","moonblast","moonlight","skillswap","reflect","lightscreen","icebeam","protect","helpinghand"],
		type: ["Psychic"],
		legend: 1
	},
	489: {
		species: "Phione",
		randomBattleMoves: ["raindance","scald","uturn","rest","icebeam"],
		randomDoubleBattleMoves: ["raindance","scald","uturn","rest","icebeam","helpinghand","icywind","protect"],
		type: ["Water"],
		legend: 1
	},
	490: {
		species: "Manaphy",
		randomBattleMoves: ["tailglow","surf","icebeam","energyball","psychic"],
		randomDoubleBattleMoves: ["tailglow","surf","icebeam","energyball","protect","scald","icywind","helpinghand"],
		type: ["Water"],
		legend: 1
	},
	491: {
		species: "Darkrai",
		randomBattleMoves: ["darkvoid","darkpulse","focusblast","nastyplot","substitute","sludgebomb"],
		randomDoubleBattleMoves: ["darkpulse","focusblast","nastyplot","substitute","snarl","protect"],
		type: ["Dark"],
		uber: 1,
		legend: 1
	},
	492: {
		species: "Shaymin",
		randomBattleMoves: ["seedflare","earthpower","airslash","psychic","rest","substitute","leechseed"],
		randomDoubleBattleMoves: ["seedflare","earthpower","airslash","hiddenpowerfire","rest","substitute","leechseed","tailwind","protect"],
		//Sky Form
		skyBattleMoves: ["seedflare","earthpower","airslash","hiddenpowerfire","substitute","leechseed","healingwish"],
		skyDoubleBattleMoves: ["seedflare","earthpower","airslash","hiddenpowerfire","rest","substitute","leechseed","tailwind","protect","hiddenpowerice"],
		type: ["Grass"],
		forms: ["norm", "sky"],
		legend: 1
	},
	493: {
		species: "Arceus",
		randomBattleMoves: ["swordsdance","extremespeed","shadowclaw","earthquake","recover"],
		randomDoubleBattleMoves: ["swordsdance","extremespeed","shadowclaw","earthquake","recover","protect"],
		//Bug
		bugBattleMoves: ["swordsdance","xscissor","stoneedge","recover","earthquake","ironhead"],
		bugDoubleBattleMoves: ["swordsdance","xscissor","stoneedge","recover","earthquake","ironhead","protect"],
		//Dark
		darkBattleMoves: ["calmmind","judgment","recover","fireblast","thunderbolt"],
		darkDoubleBattleMoves: ["calmmind","judgment","recover","focusblast","safeguard","snarl","willowisp","protect"],
		//Dragon
		dragonBattleMoves: ["swordsdance","outrage","extremespeed","earthquake","recover","calmmind","judgment","fireblast"],
		dragonDoubleBattleMoves: ["swordsdance","dragonclaw","extremespeed","earthquake","recover","protect"],
		//Electric
		electricBattleMoves: ["calmmind","judgment","recover","icebeam","grassknot","fireblast","willowisp"],
		electricDoubleBattleMoves: ["calmmind","judgment","recover","icebeam","protect"],
		//Fairy
		fairyBattleMoves: ["calmmind","judgment","recover","willowisp","defog","thunderbolt","toxic","fireblast"],
		fairyDoubleBattleMoves: ["calmmind","judgment","recover","willowisp","protect","earthpower","thunderbolt"],
		//Fighting
		fightBattleMoves: ["calmmind","judgment","stoneedge","shadowball","recover","toxic","defog"],
		fightDoubleBattleMoves: ["calmmind","judgment","icebeam","shadowball","recover","willowisp","protect"],
		//Fire
		fireBattleMoves: ["calmmind","judgment","grassknot","thunderbolt","icebeam","recover"],
		fireDoubleBattleMoves: ["calmmind","judgment","thunderbolt","recover","heatwave","protect","willowisp"],
		//flying
		flyingBattleMoves: ["calmmind","judgment","earthpower","fireblast","substitute","recover"],
		flyingDoubleBattleMoves: ["calmmind","judgment","safeguard","recover","substitute","tailwind","protect"],
		//Ghost
		ghostBattleMoves: ["calmmind","judgment","focusblast","recover","swordsdance","shadowforce","brickbreak","willowisp","roar","defog"],
		ghostDoubleBattleMoves: ["calmmind","judgment","focusblast","recover","swordsdance","shadowforce","brickbreak","willowisp","protect"],
		//Grass
		grassBattleMoves: ["judgment","recover","calmmind","icebeam","fireblast"],
		grassDoubleBattleMoves: ["calmmind","icebeam","judgment","earthpower","recover","safeguard","thunderwave","protect"],
		//Ground
		groundBattleMoves: ["swordsdance","earthquake","stoneedge","recover","extremespeed","icebeam"],
		groundDoubleBattleMoves: ["swordsdance","earthquake","stoneedge","recover","calmmind","judgment","icebeam","rockslide","protect"],
		//Ice
		iceBattleMoves: ["calmmind","judgment","thunderbolt","fireblast","recover"],
		iceDoubleBattleMoves: ["calmmind","judgment","thunderbolt","focusblast","recover","protect","icywind"],
		//Poison
		poisonBattleMoves: ["calmmind","sludgebomb","fireblast","recover","willowisp","defog","thunderwave"],
		poisonDoubleBattleMoves: ["calmmind","judgment","sludgebomb","heatwave","recover","willowisp","protect","earthpower"],
		//Psychic
		psychicBattleMoves: ["judgment","calmmind","focusblast","recover","defog","thunderbolt","willowisp"],
		psychicDoubleBattleMoves: ["calmmind","psyshock","focusblast","recover","willowisp","judgment","protect"],
		//Rock
		rockBattleMoves: ["recover","swordsdance","earthquake","stoneedge","extremespeed"],
		rockDoubleBattleMoves: ["swordsdance","stoneedge","recover","rockslide","earthquake","protect"],
		//Steel
		steelBattleMoves: ["calmmind","judgment","recover","willowisp","thunderbolt","swordsdance","ironhead","earthquake","stoneedge"],
		steelDoubleBattleMoves: ["calmmind","judgment","recover","protect","willowisp"],
		//Water
		waterBattleMoves: ["recover","calmmind","judgment","substitute","willowisp","thunderbolt"],
		waterDoubleBattleMoves: ["recover","calmmind","judgment","icebeam","fireblast","icywind","surf","protect"],
		type: ["Normal"],
		forms: ["Normal","Bug","Dark","Dragon","Electric","Fairy","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice","Poison","Psychic","Rock","Steel","Water"],
		uber: 1,
		legend: 1
	},
	494: {
		species: "Victini",
		randomBattleMoves: ["vcreate","boltstrike","uturn","zenheadbutt","grassknot","focusblast","blueflare"],
		randomDoubleBattleMoves: ["vcreate","boltstrike","uturn","psychic","focusblast","blueflare","protect"],
		type: ["Psychic", "Fire"],
		legend: 1
	},
	495: {
		species: "Snivy",
		randomBattleMoves: ["leafstorm","hiddenpowerfire","substitute","leechseed","hiddenpowerice","gigadrain"],
		type: ["Grass"],
		nfe: 1
	},
	496: {
		species: "Servine",
		randomBattleMoves: ["leafstorm","hiddenpowerfire","substitute","leechseed","hiddenpowerice","gigadrain"],
		type: ["Grass"],
		nfe: 1
	},
	497: {
		species: "Serperior",
		randomBattleMoves: ["leafstorm","dragonpulse","hiddenpowerfire","substitute","leechseed","glare"],
		randomDoubleBattleMoves: ["leafstorm","hiddenpowerfire","substitute","taunt","dragonpulse","protect"],
		type: ["Grass"]
	},
	498: {
		species: "Tepig",
		randomBattleMoves: ["flamecharge","flareblitz","wildcharge","superpower","headsmash"],
		type: ["Fire"],
		nfe: 1
	},
	499: {
		species: "Pignite",
		randomBattleMoves: ["flamecharge","flareblitz","wildcharge","superpower","headsmash"],
		type: ["Fire", "Fighting"],
		nfe: 1
	},
	500: {
		species: "Emboar",
		randomBattleMoves: ["flareblitz","superpower","wildcharge","stoneedge","fireblast","grassknot","suckerpunch"],
		randomDoubleBattleMoves: ["flareblitz","superpower","flamecharge","wildcharge","headsmash","protect","heatwave","rockslide"],
		type: ["Fire", "Fighting"]
	},
	501: {
		species: "Oshawott",
		randomBattleMoves: ["swordsdance","waterfall","aquajet","xscissor"],
		type: ["Water"],
		nfe: 1
	},
	502: {
		species: "Dewott",
		randomBattleMoves: ["swordsdance","waterfall","aquajet","xscissor"],
		type: ["Water"],
		nfe: 1
	},
	503: {
		species: "Samurott",
		randomBattleMoves: ["swordsdance","waterfall","aquajet","megahorn","superpower","hydropump","icebeam","grassknot"],
		randomDoubleBattleMoves: ["hydropump","aquajet","icebeam","scald","hiddenpowergrass","taunt","helpinghand","protect"],
		type: ["Water"]
	},
	504: {
		species: "Patrat",
		randomBattleMoves: ["swordsdance","batonpass","substitute","hypnosis","return","superfang"],
		type: ["Normal"],
		nfe: 1
	},
	505: {
		species: "Watchog",
		randomBattleMoves: ["swordsdance","batonpass","substitute","hypnosis","return","superfang"],
		randomDoubleBattleMoves: ["swordsdance","knockoff","substitute","hypnosis","return","superfang","protect"],
		type: ["Normal"]
	},
	506: {
		species: "Lillipup",
		randomBattleMoves: ["return","wildcharge","firefang","crunch","icefang"],
		type: ["Normal"],
		nfe: 1
	},
	507: {
		species: "Herdier",
		randomBattleMoves: ["return","wildcharge","firefang","crunch","icefang"],
		type: ["Normal"],
		nfe: 1
	},
	508: {
		species: "Stoutland",
		randomBattleMoves: ["return","crunch","wildcharge","superpower","icefang"],
		randomDoubleBattleMoves: ["return","wildcharge","superpower","crunch","icefang","protect"],
		type: ["Normal"]
	},
	509: {
		species: "Purrloin",
		randomBattleMoves: ["encore","suckerpunch","playrough","uturn","knockoff"],
		type: ["Dark"],
		nfe: 1
	},
	510: {
		species: "Liepard",
		randomBattleMoves: ["knockoff","encore","suckerpunch","thunderwave","uturn","substitute","nastyplot","darkpulse","copycat"],
		randomDoubleBattleMoves: ["encore","thunderwave","substitute","knockoff","playrough","uturn","suckerpunch","fakeout","protect"],
		type: ["Dark"]
	},
	511: {
		species: "Pansage",
		randomBattleMoves: ["leafstorm","hiddenpowerfire","hiddenpowerice","gigadrain","nastyplot","substitute","leechseed"],
		type: ["Grass"],
		nfe: 1
	},
	512: {
		species: "Simisage",
		randomBattleMoves: ["nastyplot","gigadrain","focusblast","hiddenpowerice","substitute","leafstorm","knockoff","superpower"],
		randomDoubleBattleMoves: ["nastyplot","leafstorm","hiddenpowerfire","hiddenpowerice","gigadrain","focusblast","substitute","taunt","synthesis","helpinghand","protect"],
		type: ["Grass"],
		nfe: 1
	},
	513: {
		species: "Pansear",
		randomBattleMoves: ["nastyplot","fireblast","hiddenpowerelectric","hiddenpowerground","sunnyday","solarbeam","overheat"],
		type: ["Fire"],
		nfe: 1
	},
	514: {
		species: "Simisear",
		randomBattleMoves: ["substitute","nastyplot","fireblast","focusblast","grassknot","hiddenpowerrock"],
		randomDoubleBattleMoves: ["nastyplot","fireblast","focusblast","grassknot","hiddenpowerground","substitute","heatwave","taunt","protect"],
		type: ["Fire"]
	},
	515: {
		species: "Panpour",
		randomBattleMoves: ["nastyplot","hydropump","hiddenpowergrass","substitute","surf","icebeam"],
		type: ["Water"]
	},
	516: {
		species: "Simipour",
		randomBattleMoves: ["substitute","nastyplot","hydropump","icebeam","focusblast"],
		randomDoubleBattleMoves: ["nastyplot","hydropump","icebeam","substitute","surf","taunt","helpinghand","protect"],
		type: ["Water"]
	},
	517: {
		species: "Munna",
		randomBattleMoves: ["psychic","hiddenpowerfighting","hypnosis","calmmind","moonlight","thunderwave","batonpass","psyshock","healbell","signalbeam"],
		type: ["Psychic"],
		nfe: 1
	},
	518: {
		species: "Musharna",
		randomBattleMoves: ["calmmind","psychic","psyshock","signalbeam","batonpass","moonlight","healbell","thunderwave"],
		randomDoubleBattleMoves: ["trickroom","thunderwave","moonlight","psychic","hiddenpowerfighting","helpinghand","psyshock","healbell","signalbeam","protect"],
		type: ["Psychic"]
	},
	519: {
		species: "Pidove",
		randomBattleMoves: ["pluck","uturn","return","detect","roost","wish"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	520: {
		species: "Tranquill",
		randomBattleMoves: ["pluck","uturn","return","detect","roost","wish"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	521: {
		species: "Unfezant",
		randomBattleMoves: ["return","pluck","hypnosis","tailwind","uturn","roost","nightslash"],
		randomDoubleBattleMoves: ["pluck","uturn","return","protect","tailwind","taunt","roost","nightslash"],
		type: ["Normal", "Flying"]
	},
	522: {
		species: "Blitzle",
		randomBattleMoves: ["voltswitch","hiddenpowergrass","wildcharge","mefirst"],
		type: ["Electric"],
		nfe: 1
	},
	523: {
		species: "Zebstrika",
		randomBattleMoves: ["voltswitch","hiddenpowergrass","overheat","wildcharge","thunderbolt"],
		randomDoubleBattleMoves: ["voltswitch","hiddenpowergrass","overheat","wildcharge","protect"],
		type: ["Electric"]
	},
	524: {
		species: "Roggenrola",
		randomBattleMoves: ["autotomize","stoneedge","stealthrock","rockblast","earthquake","explosion"],
		type: ["Rock"],
		nfe: 1
	},
	525: {
		species: "Boldore",
		randomBattleMoves: ["autotomize","stoneedge","stealthrock","rockblast","earthquake","explosion"],
		type: ["Rock"],
		nfe: 1
	},
	526: {
		species: "Gigalith",
		randomBattleMoves: ["stealthrock","rockblast","earthquake","explosion","stoneedge","superpower"],
		randomDoubleBattleMoves: ["stealthrock","rockslide","earthquake","explosion","stoneedge","autotomize","superpower","wideguard","protect"],
		type: ["Rock"]
	},
	527: {
		species: "Woobat",
		randomBattleMoves: ["calmmind","psychic","airslash","gigadrain","roost","heatwave","storedpower"],
		type: ["Psychic", "Flying"],
		nfe: 1
	},
	528: {
		species: "Swoobat",
		randomBattleMoves: ["substitute","calmmind","storedpower","heatwave","psychic","airslash","roost"],
		randomDoubleBattleMoves: ["calmmind","psychic","airslash","gigadrain","protect","heatwave","tailwind"],
		type: ["Psychic", "Flying"]
	},
	529: {
		species: "Drilbur",
		randomBattleMoves: ["swordsdance","rapidspin","earthquake","rockslide","shadowclaw","return","xscissor"],
		type: ["Ground"],
		nfe: 1
	},
	530: {
		species: "Excadrill",
		randomBattleMoves: ["swordsdance","earthquake","ironhead","rockslide","rapidspin"],
		randomDoubleBattleMoves: ["swordsdance","drillrun","earthquake","rockslide","ironhead","substitute","protect"],
		type: ["Ground", "Steel"]
	},
	531: {
		species: "Audino",
		randomBattleMoves: ["wish","protect","healbell","toxic","thunderwave","reflect","lightscreen","doubleedge"],
		randomDoubleBattleMoves: ["healpulse","protect","healbell","trickroom","thunderwave","reflect","lightscreen","doubleedge","helpinghand"],
		megaRandomBattleMoves: ["wish","calmmind","healbell","dazzlinggleam","hypervoice","protect"],
		megaRandomDoubleBattleMoves: ["healpulse","protect","healbell","trickroom","thunderwave","hypervoice","helpinghand","dazzlinggleam"],
		type: ["Normal"],
		mega: ["mega"]
	},
	532: {
		species: "Timburr",
		randomBattleMoves: ["machpunch","bulkup","drainpunch","icepunch","knockoff"],
		type: ["Fighting"],
		nfe: 1
	},
	533: {
		species: "Gurdurr",
		randomBattleMoves: ["bulkup","machpunch","drainpunch","icepunch","knockoff"],
		type: ["Fighting"],
		nfe: 1
	},
	534: {
		species: "Conkeldurr",
		randomBattleMoves: ["bulkup","drainpunch","icepunch","knockoff","machpunch"],
		randomDoubleBattleMoves: ["wideguard","machpunch","drainpunch","icepunch","knockoff","protect"],
		type: ["Fighting"]
	},
	535: {
		species: "Tympole",
		randomBattleMoves: ["hydropump","surf","sludgewave","earthpower","hiddenpowerelectric"],
		type: ["Water"],
		nfe: 1
	},
	536: {
		species: "Palpitoad",
		randomBattleMoves: ["hydropump","surf","sludgewave","earthpower","hiddenpowerelectric","stealthrock"],
		type: ["Water", "Ground"],
		nfe: 1
	},
	537: {
		species: "Seismitoad",
		randomBattleMoves: ["hydropump","scald","sludgewave","earthquake","knockoff","stealthrock","toxic","raindance"],
		randomDoubleBattleMoves: ["hydropump","muddywater","sludgebomb","earthquake","hiddenpowerelectric","icywind","protect"],
		type: ["Water", "Ground"]
	},
	538: {
		species: "Throh",
		randomBattleMoves: ["bulkup","circlethrow","icepunch","stormthrow","rest","sleeptalk","knockoff"],
		randomDoubleBattleMoves: ["helpinghand","circlethrow","icepunch","stormthrow","wideguard","knockoff","protect"],
		type: ["Fighting"]
	},
	539: {
		species: "Sawk",
		randomBattleMoves: ["closecombat","earthquake","icepunch","poisonjab","bulkup","knockoff"],
		randomDoubleBattleMoves: ["closecombat","knockoff","icepunch","rockslide","protect"],
		type: ["Fighting"]
	},
	540: {
		species: "Sewaddle",
		randomBattleMoves: ["calmmind","gigadrain","bugbuzz","hiddenpowerfire","hiddenpowerice","airslash"],
		type: ["Bug", "Grass"],
		nfe: 1
	},
	541: {
		species: "Swadloon",
		randomBattleMoves: ["calmmind","gigadrain","bugbuzz","hiddenpowerfire","hiddenpowerice","airslash","stickyweb"],
		type: ["Bug", "Grass"],
		nfe: 1
	},
	542: {
		species: "Leavanny",
		randomBattleMoves: ["stickyweb","swordsdance","leafblade","xscissor","knockoff","batonpass"],
		randomDoubleBattleMoves: ["swordsdance","leafblade","xscissor","protect","stickyweb","poisonjab"],
		type: ["Bug", "Grass"]
	},
	543: {
		species: "Venipede",
		randomBattleMoves: ["toxicspikes","steamroller","spikes","poisonjab"],
		type: ["Bug", "Poison"],
		nfe: 1
	},
	544: {
		species: "Whirlipede",
		randomBattleMoves: ["toxicspikes","steamroller","spikes","poisonjab"],
		type: ["Bug", "Poison"],
		nfe: 1
	},
	545: {
		species: "Scolipede",
		randomBattleMoves: ["substitute","spikes","toxicspikes","megahorn","rockslide","earthquake","swordsdance","batonpass","poisonjab"],
		randomDoubleBattleMoves: ["substitute","protect","megahorn","rockslide","poisonjab","swordsdance","batonpass","aquatail","superpower"],
		type: ["Bug", "Poison"]
	},
	546: {
		species: "Cottonee",
		randomBattleMoves: ["encore","taunt","substitute","leechseed","toxic","stunspore"],
		type: ["Grass", "Fairy"],
		nfe: 1
	},
	547: {
		species: "Whimsicott",
		randomBattleMoves: ["encore","taunt","substitute","leechseed","uturn","toxic","stunspore","memento","tailwind","moonblast"],
		randomDoubleBattleMoves: ["encore","taunt","substitute","leechseed","uturn","helpinghand","stunspore","moonblast","tailwind","dazzlinggleam","gigadrain","protect"],
		type: ["Grass", "Fairy"]
	},
	548: {
		species: "Petilil",
		randomBattleMoves: ["sunnyday","sleeppowder","solarbeam","hiddenpowerfire","hiddenpowerice","healingwish"],
		type: ["Grass"],
		nfe: 1
	},
	549: {
		species: "Lilligant",
		randomBattleMoves: ["sleeppowder","quiverdance","petaldance","gigadrain","hiddenpowerfire","healingwish"],
		randomDoubleBattleMoves: ["quiverdance","gigadrain","sleeppowder","hiddenpowerice","hiddenpowerfire","hiddenpowerrock","petaldance","helpinghand","protect"],
		type: ["Grass"]
	},
	550: {
		species: "Basculin",
		redBattleMoves: ["waterfall","aquajet","superpower","crunch","zenheadbutt"],
		redDoubleBattleMoves: ["waterfall","aquajet","superpower","crunch","doubleedge","protect"],
		blueBattleMoves: ["waterfall","aquajet","superpower","crunch","zenheadbutt"],
		blueDoubleBattleMoves: ["waterfall","aquajet","superpower","crunch","doubleedge","protect"],
		type: ["Water"],
		forms: ["red-striped", "blue-striped"]
	},
	551: {
		species: "Sandile",
		randomBattleMoves: ["earthquake","stoneedge","pursuit","crunch"],
		type: ["Ground", "Dark"],
		nfe: 1
	},
	552: {
		species: "Krokorok",
		randomBattleMoves: ["earthquake","stoneedge","pursuit","crunch"],
		type: ["Ground", "Dark"],
		nfe: 1
	},
	553: {
		species: "Krookodile",
		randomBattleMoves: ["earthquake","stoneedge","pursuit","knockoff","stealthrock","superpower"],
		randomDoubleBattleMoves: ["earthquake","stoneedge","protect","knockoff","superpower"],
		type: ["Ground", "Dark"]
	},
	554: {
		species: "Darumaka",
		randomBattleMoves: ["uturn","flareblitz","firepunch","rockslide","superpower"],
		type: ["Fire"],
		nfe: 1
	},
	555: {
		species: "Darmanitan",
		randomBattleMoves: ["uturn","flareblitz","firepunch","rockslide","earthquake","superpower"],
		randomDoubleBattleMoves: ["uturn","flareblitz","firepunch","rockslide","earthquake","superpower","protect"],
		type: ["Fire"],
		forms: ["norm", "zen mode"]
	},
	556: {
		species: "Maractus",
		randomBattleMoves: ["spikes","gigadrain","leechseed","hiddenpowerfire","toxic","suckerpunch","spikyshield"],
		randomDoubleBattleMoves: ["grassyterrain","gigadrain","leechseed","hiddenpowerfire","helpinghand","suckerpunch","spikyshield"],
		type: ["Grass"]
	},
	557: {
		species: "Dwebble",
		randomBattleMoves: ["stealthrock","spikes","shellsmash","earthquake","rockblast","xscissor","stoneedge"],
		type: ["Bug", "Rock"],
		nfe: 1
	},
	558: {
		species: "Crustle",
		randomBattleMoves: ["stealthrock","spikes","shellsmash","earthquake","rockblast","xscissor","stoneedge"],
		randomDoubleBattleMoves: ["protect","shellsmash","earthquake","rockslide","xscissor","stoneedge"],
		type: ["Bug", "Rock"]
	},
	559: {
		species: "Scraggy",
		randomBattleMoves: ["dragondance","icepunch","highjumpkick","drainpunch","rest","bulkup","crunch","knockoff"],
		type: ["Dark", "Fighting"],
		nfe: 1
	},
	560: {
		species: "Scrafty",
		randomBattleMoves: ["dragondance","icepunch","highjumpkick","drainpunch","rest","bulkup","knockoff"],
		randomDoubleBattleMoves: ["fakeout","drainpunch","knockoff","icepunch","stoneedge","protect"],
		type: ["Dark", "Fighting"]
	},
	561: {
		species: "Sigilyph",
		randomBattleMoves: ["cosmicpower","roost","storedpower","psychoshift"],
		randomDoubleBattleMoves: ["psyshock","heatwave","icebeam","airslash","energyball","shadowball","tailwind","protect"],
		type: ["Psychic", "Flying"]
	},
	562: {
		species: "Yamask",
		randomBattleMoves: ["nastyplot","trickroom","shadowball","hiddenpowerfighting","willowisp","haze","rest","sleeptalk","painsplit"],
		type: ["Ghost"],
		nfe: 1
	},
	563: {
		species: "Cofagrigus",
		randomBattleMoves: ["nastyplot","trickroom","shadowball","hiddenpowerfighting","willowisp","haze","painsplit"],
		randomDoubleBattleMoves: ["nastyplot","trickroom","shadowball","hiddenpowerfighting","willowisp","protect","painsplit"],
		type: ["Ghost"]
	},
	564: {
		species: "Tirtouga",
		randomBattleMoves: ["shellsmash","aquajet","waterfall","stoneedge","earthquake","stealthrock"],
		type: ["Water", "Rock"],
		nfe: 1
	},
	565: {
		species: "Carracosta",
		randomBattleMoves: ["shellsmash","aquajet","waterfall","stoneedge","earthquake","stealthrock"],
		randomDoubleBattleMoves: ["shellsmash","aquajet","waterfall","stoneedge","earthquake","protect","wideguard","rockslide"],
		type: ["Water", "Rock"]
	},
	566: {
		species: "Archen",
		randomBattleMoves: ["stoneedge","rockslide","earthquake","uturn","pluck","headsmash"],
		type: ["Rock", "Flying"],
		nfe: 1
	},
	567: {
		species: "Archeops",
		randomBattleMoves: ["stoneedge","rockslide","earthquake","uturn","pluck","headsmash"],
		randomDoubleBattleMoves: ["stoneedge","rockslide","earthquake","uturn","pluck","tailwind","taunt","protect"],
		type: ["Rock", "Flying"]
	},
	568: {
		species: "Trubbish",
		randomBattleMoves: ["clearsmog","toxicspikes","spikes","gunkshot","painsplit","toxic"],
		type: ["Poison"],
		nfe: 1
	},
	569: {
		species: "Garbodor",
		randomBattleMoves: ["spikes","toxicspikes","gunkshot","haze","painsplit","toxic","rockblast"],
		randomDoubleBattleMoves: ["protect","painsplit","gunkshot","seedbomb","drainpunch","explosion","rockblast"],
		type: ["Poison"]
	},
	570: {
		species: "Zorua",
		randomBattleMoves: ["suckerpunch","extrasensory","darkpulse","hiddenpowerfighting","uturn","knockoff"],
		type: ["Dark"],
		nfe: 1
	},
	571: {
		species: "Zoroark",
		randomBattleMoves: ["suckerpunch","darkpulse","focusblast","flamethrower","uturn","nastyplot","knockoff","trick"],
		randomDoubleBattleMoves: ["suckerpunch","darkpulse","focusblast","flamethrower","uturn","nastyplot","knockoff","protect"],
		type: ["Dark"]
	},
	572: {
		species: "Minccino",
		randomBattleMoves: ["return","tailslap","wakeupslap","uturn","aquatail"],
		type: ["Normal"],
		nfe: 1
	},
	573: {
		species: "Cinccino",
		randomBattleMoves: ["tailslap","wakeupslap","uturn","knockoff","bulletseed","rockblast"],
		randomDoubleBattleMoves: ["tailslap","wakeupslap","uturn","knockoff","bulletseed","rockblast","protect"],
		type: ["Normal"]
	},
	574: {
		species: "Gothita",
		randomBattleMoves: ["psychic","thunderbolt","hiddenpowerfighting","shadowball","substitute","calmmind","reflect","lightscreen","trick","grassknot","signalbeam"],
		type: ["Psychic"],
		nfe: 1
	},
	575: {
		species: "Gothorita",
		randomBattleMoves: ["psychic","thunderbolt","hiddenpowerfighting","shadowball","substitute","calmmind","reflect","lightscreen","trick","grassknot","signalbeam"],
		type: ["Psychic"],
		nfe: 1
	},
	576: {
		species: "Gothitelle",
		randomBattleMoves: ["psychic","thunderbolt","shadowball","hiddenpowerfire","hiddenpowerfighting","substitute","calmmind","trick","psyshock"],
		randomDoubleBattleMoves: ["psychic","thunderbolt","shadowball","hiddenpowerfighting","reflect","lightscreen","psyshock","energyball","trickroom","taunt","helpinghand","healpulse","protect"],
		type: ["Psychic"]
	},
	577: {
		species: "Solosis",
		randomBattleMoves: ["calmmind","recover","psychic","hiddenpowerfighting","shadowball","trickroom","psyshock"],
		type: ["Psychic"],
		nfe: 1
	},
	578: {
		species: "Duosion",
		randomBattleMoves: ["calmmind","recover","psychic","hiddenpowerfighting","shadowball","trickroom","psyshock"],
		type: ["Psychic"],
		nfe: 1
	},
	579: {
		species: "Reuniclus",
		randomBattleMoves: ["calmmind","recover","psychic","focusblast","shadowball","trickroom","psyshock"],
		randomDoubleBattleMoves: ["energyball","helpinghand","psychic","focusblast","shadowball","trickroom","psyshock","hiddenpowerfire","protect"],
		type: ["Psychic"]
	},
	580: {
		species: "Ducklett",
		randomBattleMoves: ["scald","airslash","roost","hurricane","icebeam","hiddenpowergrass","bravebird","defog"],
		type: ["Water", "Flying"],
		nfe: 1
	},
	581: {
		species: "Swanna",
		randomBattleMoves: ["airslash","roost","hurricane","surf","icebeam","raindance","defog","scald"],
		randomDoubleBattleMoves: ["airslash","roost","hurricane","surf","icebeam","raindance","tailwind","scald","protect"],
		type: ["Water", "Flying"]
	},
	582: {
		species: "Vanillite",
		randomBattleMoves: ["icebeam","explosion","hiddenpowerelectric","hiddenpowerfighting","autotomize"],
		type: ["Ice"],
		nfe: 1
	},
	583: {
		species: "Vanillish",
		randomBattleMoves: ["icebeam","explosion","hiddenpowerelectric","hiddenpowerfighting","autotomize"],
		type: ["Ice"],
		nfe: 1
	},
	584: {
		species: "Vanilluxe",
		randomBattleMoves: ["icebeam","explosion","hiddenpowerground","flashcannon","autotomize","freezedry"],
		randomDoubleBattleMoves: ["icebeam","taunt","hiddenpowerground","flashcannon","autotomize","protect","freezedry"],
		type: ["Ice"]
	},
	585: {
		species: "Deerling",
		randomBattleMoves: ["agility","batonpass","seedbomb","jumpkick","synthesis","return","thunderwave"],
		type: ["Normal", "Grass"],
		forms: ["Spring", "Summer", "Autumn", "Winter"],
		nfe: 1
	},
	586: {
		species: "Sawsbuck",
		randomBattleMoves: ["swordsdance","hornleech","jumpkick","return","substitute","batonpass"],
		randomDoubleBattleMoves: ["swordsdance","hornleech","jumpkick","return","substitute","synthesis","protect"],
		type: ["Normal", "Grass"],
		forms: ["Spring", "Summer", "Autumn", "Winter"]
	},
	587: {
		species: "Emolga",
		randomBattleMoves: ["encore","chargebeam","batonpass","substitute","thunderbolt","airslash","roost"],
		randomDoubleBattleMoves: ["helpinghand","tailwind","encore","substitute","thunderbolt","airslash","roost","protect"],
		type: ["Electric", "Flying"]
	},
	588: {
		species: "Karrablast",
		randomBattleMoves: ["swordsdance","megahorn","return","substitute"],
		type: ["Bug"],
		nfe: 1
	},
	589: {
		species: "Escavalier",
		randomBattleMoves: ["megahorn","pursuit","ironhead","knockoff","swordsdance","drillrun"],
		randomDoubleBattleMoves: ["megahorn","protect","ironhead","knockoff","swordsdance","drillrun"],
		type: ["Bug", "Steel"]
	},
	590: {
		species: "Foongus",
		randomBattleMoves: ["spore","stunspore","gigadrain","clearsmog","hiddenpowerfire","synthesis","sludgebomb"],
		type: ["Grass", "Poison"],
		nfe: 1
	},
	591: {
		species: "Amoonguss",
		randomBattleMoves: ["spore","stunspore","gigadrain","clearsmog","hiddenpowerfire","synthesis","sludgebomb","foulplay"],
		randomDoubleBattleMoves: ["spore","stunspore","gigadrain","ragepowder","hiddenpowerfire","synthesis","sludgebomb","protect"],
		type: ["Grass", "Poison"]
	},
	592: {
		species: "Frillish",
		randomBattleMoves: ["scald","willowisp","recover","toxic","shadowball","taunt"],
		type: ["Water", "Ghost"],
		nfe: 1
	},
	593: {
		species: "Jellicent",
		randomBattleMoves: ["scald","willowisp","recover","toxic","shadowball","icebeam","taunt"],
		randomDoubleBattleMoves: ["scald","willowisp","recover","trickroom","shadowball","icebeam","waterspout","icywind","protect"],
		type: ["Water", "Ghost"]
	},
	594: {
		species: "Alomomola",
		randomBattleMoves: ["wish","protect","knockoff","toxic","scald"],
		randomDoubleBattleMoves: ["wish","protect","knockoff","icywind","scald","helpinghand","wideguard"],
		type: ["Water"]
	},
	595: {
		species: "Joltik",
		randomBattleMoves: ["thunderbolt","bugbuzz","hiddenpowerice","gigadrain","voltswitch"],
		type: ["Bug", "Electric"],
		nfe: 1
	},
	596: {
		species: "Galvantula",
		randomBattleMoves: ["thunder","hiddenpowerice","gigadrain","bugbuzz","voltswitch","stickyweb"],
		randomDoubleBattleMoves: ["thunder","hiddenpowerice","gigadrain","bugbuzz","voltswitch","stickyweb",'protect'],
		type: ["Bug", "Electric"]
	},
	597: {
		species: "Ferroseed",
		randomBattleMoves: ["spikes","stealthrock","leechseed","seedbomb","protect","thunderwave","gyroball"],
		type: ["Grass", "Steel"],
		nfe: 1
	},
	598: {
		species: "Ferrothorn",
		randomBattleMoves: ["spikes","stealthrock","leechseed","powerwhip","thunderwave","protect","knockoff","gyroball"],
		randomDoubleBattleMoves: ["gyroball","stealthrock","leechseed","powerwhip","thunderwave","protect"],
		type: ["Grass", "Steel"]
	},
	599: {
		species: "Klink",
		randomBattleMoves: ["shiftgear","return","geargrind","wildcharge","substitute"],
		type: ["Steel"],
		nfe: 1
	},
	600: {
		species: "Klang",
		randomBattleMoves: ["shiftgear","return","geargrind","wildcharge","substitute"],
		type: ["Steel"],
		nfe: 1
	},
	601: {
		species: "Klinklang",
		randomBattleMoves: ["shiftgear","return","geargrind","wildcharge","substitute"],
		randomDoubleBattleMoves: ["shiftgear","return","geargrind","wildcharge","protect"],
		type: ["Steel"]
	},
	602: {
		species: "Tynamo",
		randomBattleMoves: ["spark","chargebeam","thunderwave","tackle"],
		type: ["Electric"],
		nfe: 1
	},
	603: {
		species: "Eelektrik",
		randomBattleMoves: ["uturn","voltswitch","acidspray","wildcharge","thunderbolt","gigadrain","aquatail","coil"],
		type: ["Electric"],
		nfe: 1
	},
	604: {
		species: "Eelektross",
		randomBattleMoves: ["thunderbolt","flamethrower","uturn","voltswitch","acidspray","gigadrain","knockoff","superpower","aquatail"],
		randomDoubleBattleMoves: ["thunderbolt","flamethrower","uturn","voltswitch","knockoff","gigadrain","protect"],
		type: ["Electric"]
	},
	605: {
		species: "Elgyem",
		randomBattleMoves: ["nastyplot","psychic","thunderbolt","hiddenpowerfighting","substitute","calmmind","recover","trick","trickroom","signalbeam"],
		type: ["Psychic"],
		nfe: 1
	},
	606: {
		species: "Beheeyem",
		randomBattleMoves: ["nastyplot","psychic","psyshock","thunderbolt","hiddenpowerfighting","trick","trickroom","signalbeam"],
		randomDoubleBattleMoves: ["nastyplot","psychic","thunderbolt","hiddenpowerfighting","recover","trick","trickroom","signalbeam","protect"],
		type: ["Psychic"]
	},
	607: {
		species: "Litwick",
		randomBattleMoves: ["calmmind","shadowball","energyball","fireblast","hiddenpowerground","hiddenpowerrock","trick","substitute","painsplit"],
		type: ["Ghost", "Fire"],
		nfe: 1
	},
	608: {
		species: "Lampent",
		randomBattleMoves: ["calmmind","shadowball","energyball","fireblast","hiddenpowerground","hiddenpowerrock","trick","substitute","painsplit"],
		type: ["Ghost", "Fire"],
		nfe: 1
	},
	609: {
		species: "Chandelure",
		randomBattleMoves: ["calmmind","shadowball","energyball","fireblast","hiddenpowerground","trick","substitute","painsplit"],
		randomDoubleBattleMoves: ["shadowball","energyball","overheat","heatwave","hiddenpowerice","trick","protect"],
		type: ["Ghost", "Fire"]
	},
	610: {
		species: "Axew",
		randomBattleMoves: ["dragondance","outrage","dragonclaw","swordsdance","aquatail","superpower","poisonjab","taunt","substitute"],
		type: ["Dragon"],
		nfe: 1
	},
	611: {
		species: "Fraxure",
		randomBattleMoves: ["dragondance","swordsdance","outrage","dragonclaw","aquatail","superpower","poisonjab","taunt","substitute"],
		type: ["Dragon"],
		nfe: 1
	},
	612: {
		species: "Haxorus",
		randomBattleMoves: ["dragondance","swordsdance","outrage","dragonclaw","earthquake","poisonjab","taunt","substitute"],
		randomDoubleBattleMoves: ["dragondance","swordsdance","protect","dragonclaw","earthquake","poisonjab","taunt","substitute"],
		type: ["Dragon"]
	},
	613: {
		species: "Cubchoo",
		randomBattleMoves: ["icebeam","surf","hiddenpowergrass","superpower"],
		type: ["Ice"],
		nfe: 1
	},
	614: {
		species: "Beartic",
		randomBattleMoves: ["iciclecrash","superpower","nightslash","stoneedge","swordsdance","aquajet"],
		randomDoubleBattleMoves: ["iciclecrash","superpower","nightslash","stoneedge","swordsdance","aquajet","protect"],
		type: ["Ice"]
	},
	615: {
		species: "Cryogonal",
		randomBattleMoves: ["icebeam","recover","toxic","rapidspin","haze","freezedry","hiddenpowerground"],
		randomDoubleBattleMoves: ["icebeam","recover","icywind","protect","reflect","freezedry","hiddenpowerground"],
		type: ["Ice"]
	},
	616: {
		species: "Shelmet",
		randomBattleMoves: ["spikes","yawn","substitute","acidarmor","batonpass","recover","toxic","bugbuzz","infestation"],
		type: ["Bug"],
		nfe: 1
	},
	617: {
		species: "Accelgor",
		randomBattleMoves: ["spikes","yawn","bugbuzz","focusblast","gigadrain","hiddenpowerrock","encore"],
		randomDoubleBattleMoves: ["protect","yawn","bugbuzz","focusblast","gigadrain","hiddenpowerrock","encore","sludgebomb"],
		type: ["Bug"]
	},
	618: {
		species: "Stunfisk",
		randomBattleMoves: ["discharge","earthpower","scald","toxic","rest","sleeptalk","stealthrock"],
		randomDoubleBattleMoves: ["discharge","earthpower","scald","electroweb","protect","stealthrock"],
		type: ["Ground", "Electric"]
	},
	619: {
		species: "Mienfoo",
		randomBattleMoves: ["uturn","drainpunch","stoneedge","swordsdance","batonpass","highjumpkick","fakeout","knockoff"],
		type: ["Fighting"],
		nfe: 1
	},
	620: {
		species: "Mienshao",
		randomBattleMoves: ["uturn","fakeout","highjumpkick","stoneedge","substitute","swordsdance","batonpass","knockoff"],
		randomDoubleBattleMoves: ["uturn","fakeout","highjumpkick","stoneedge","drainpunch","swordsdance","wideguard","knockoff","feint","protect"],
		type: ["Fighting"]
	},
	621: {
		species: "Druddigon",
		randomBattleMoves: ["outrage","earthquake","suckerpunch","dragonclaw","dragontail","substitute","glare","stealthrock","firepunch","gunkshot"],
		randomDoubleBattleMoves: ["superpower","earthquake","suckerpunch","dragonclaw","glare","protect","firepunch","thunderpunch"],
		type: ["Dragon"]
	},
	622: {
		species: "Golett",
		randomBattleMoves: ["earthquake","shadowpunch","dynamicpunch","icepunch","stealthrock","rockpolish"],
		type: ["Ground", "Ghost"],
		nfe: 1
	},
	623: {
		species: "Golurk",
		randomBattleMoves: ["earthquake","shadowpunch","dynamicpunch","icepunch","stealthrock","rockpolish"],
		randomDoubleBattleMoves: ["earthquake","shadowpunch","dynamicpunch","icepunch","stoneedge","protect","rockpolish"],
		type: ["Ground", "Ghost"]
	},
	624: {
		species: "Pawniard",
		randomBattleMoves: ["swordsdance","substitute","suckerpunch","ironhead","brickbreak","knockoff"],
		type: ["Dark", "Steel"],
		nfe: 1
	},
	625: {
		species: "Bisharp",
		randomBattleMoves: ["swordsdance","substitute","suckerpunch","ironhead","brickbreak","knockoff"],
		randomDoubleBattleMoves: ["swordsdance","substitute","suckerpunch","ironhead","brickbreak","knockoff","protect"],
		type: ["Dark", "Steel"]
	},
	626: {
		species: "Bouffalant",
		randomBattleMoves: ["headcharge","earthquake","stoneedge","megahorn","swordsdance","superpower"],
		randomDoubleBattleMoves: ["headcharge","earthquake","stoneedge","megahorn","swordsdance","superpower","protect"],
		type: ["Normal"]
	},
	627: {
		species: "Rufflet",
		randomBattleMoves: ["bravebird","rockslide","return","uturn","substitute","bulkup","roost"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	628: {
		species: "Braviary",
		//FREEDOM!
		randomBattleMoves: ["bravebird","superpower","return","uturn","substitute","rockslide","bulkup","roost"],
		randomDoubleBattleMoves: ["bravebird","superpower","return","uturn","tailwind","rockslide","bulkup","roost","skydrop","protect"],
		type: ["Normal", "Flying"]
	},
	629: {
		species: "Vullaby",
		randomBattleMoves: ["knockoff","roost","taunt","whirlwind","toxic","defog","uturn","bravebird"],
		type: ["Dark", "Flying"],
		nfe: 1
	},
	630: {
		species: "Mandibuzz",
		randomBattleMoves: ["knockoff","roost","taunt","whirlwind","toxic","uturn","bravebird","defog"],
		randomDoubleBattleMoves: ["knockoff","roost","taunt","tailwind","snarl","uturn","bravebird","protect"],
		type: ["Dark", "Flying"]
	},
	631: {
		species: "Heatmor",
		randomBattleMoves: ["fireblast","suckerpunch","focusblast","gigadrain","knockoff"],
		randomDoubleBattleMoves: ["fireblast","suckerpunch","focusblast","gigadrain","heatwave","protect"],
		type: ["Fire"]
	},
	632: {
		species: "Durant",
		randomBattleMoves: ["honeclaws","ironhead","xscissor","stoneedge","batonpass","superpower"],
		randomDoubleBattleMoves: ["honeclaws","ironhead","xscissor","rockslide","protect","superpower"],
		type: ["Bug", "Steel"]
	},
	633: {
		species: "Deino",
		randomBattleMoves: ["outrage","crunch","firefang","dragontail","thunderwave","superpower"],
		type: ["Dark", "Dragon"],
		nfe: 1
	},
	634: {
		species: "Zweilous",
		randomBattleMoves: ["outrage","crunch","firefang","dragontail","thunderwave","superpower"],
		type: ["Dark", "Dragon"],
		nfe: 1
	},
	635: {
		species: "Hydreigon",
		randomBattleMoves: ["uturn","dracometeor","dragonpulse","earthpower","fireblast","darkpulse","roost","flashcannon","superpower"],
		randomDoubleBattleMoves: ["uturn","dracometeor","dragonpulse","earthpower","fireblast","darkpulse","roost","flashcannon","superpower","tailwind","protect"],
		type: ["Dark", "Dragon"]
	},
	636: {
		species: "Larvesta",
		randomBattleMoves: ["flareblitz","uturn","wildcharge","zenheadbutt","morningsun","willowisp"],
		type: ["Bug", "Fire"],
		nfe: 1
	},
	637: {
		species: "Volcarona",
		randomBattleMoves: ["quiverdance","fierydance","fireblast","bugbuzz","roost","gigadrain","hiddenpowerice","hiddenpowerground"],
		randomDoubleBattleMoves: ["quiverdance","fierydance","fireblast","bugbuzz","roost","gigadrain","hiddenpowerice","heatwave","willowisp","ragepowder","tailwind","protect"],
		type: ["Bug", "Fire"]
	},
	638: {
		species: "Cobalion",
		randomBattleMoves: ["closecombat","ironhead","swordsdance","substitute","stoneedge","voltswitch","hiddenpowerice","taunt","stealthrock"],
		randomDoubleBattleMoves: ["closecombat","ironhead","swordsdance","substitute","stoneedge","thunderwave","protect"],
		type: ["Steel", "Fighting"],
		legend: 1
	},
	639: {
		species: "Terrakion",
		randomBattleMoves: ["stoneedge","closecombat","swordsdance","substitute","stealthrock","earthquake"],
		randomDoubleBattleMoves: ["stoneedge","closecombat","substitute","rockslide","earthquake","protect"],
		type: ["Rock", "Fighting"],
		legend: 1
	},
	640: {
		species: "Virizion",
		randomBattleMoves: ["swordsdance","closecombat","leafblade","stoneedge","calmmind","focusblast","gigadrain","hiddenpowerice","substitute"],
		randomDoubleBattleMoves: ["taunt","closecombat","stoneedge","leafblade","swordsdance","synthesis","protect"],
		type: ["Grass", "Fighting"],
		legend: 1
	},
	641: {
		species: "Tornadus",
		randomBattleMoves: ["bulkup","acrobatics","knockoff","substitute","hurricane","heatwave","superpower","uturn","taunt","tailwind"],
		randomDoubleBattleMoves: ["hurricane","airslash","uturn","superpower","focusblast","taunt","substitute","heatwave","tailwind","protect","skydrop"],
		therainBattleMoves: ["hurricane","airslash","heatwave","knockoff","superpower","uturn","taunt"],
		therainDoubleBattleMoves: ["hurricane","airslash","focusblast","uturn","heatwave","skydrop","tailwind","taunt","protect"],
		type: ["Flying"],
		forms: ["norm", "therian"],
		legend: 1
	},
	642: {
		species: "Thundurus",
		randomBattleMoves: ["thunderwave","nastyplot","thunderbolt","hiddenpowerice","hiddenpowerflying","focusblast","substitute","knockoff","taunt"],
		randomDoubleBattleMoves: ["thunderwave","nastyplot","thunderbolt","hiddenpowerice","hiddenpowerflying","focusblast","substitute","knockoff","taunt","protect"],
		therainBattleMoves: ["nastyplot","thunderbolt","hiddenpowerflying","hiddenpowerice","focusblast","voltswitch"],
		therainDoubleBattleMoves: ["nastyplot","thunderbolt","hiddenpowerflying","hiddenpowerice","focusblast","voltswitch","protect"],
		type: ["Electric", "Flying"],
		forms: ["norm", "therian"],
		legend: 1
	},
	643: {
		species: "Reshiram",
		randomBattleMoves: ["blueflare","dracometeor","dragonpulse","toxic","flamecharge","stoneedge","roost"],
		randomDoubleBattleMoves: ["blueflare","dracometeor","dragonpulse","heatwave","flamecharge","roost","protect","tailwind"],
		type: ["Dragon", "Fire"],
		uber: 1,
		legend: 1
	},
	644: {
		species: "Zekrom",
		randomBattleMoves: ["boltstrike","outrage","dragonclaw","dracometeor","voltswitch","honeclaws","substitute","roost"],
		randomDoubleBattleMoves: ["voltswitch","protect","dragonclaw","boltstrike","honeclaws","substitute","dracometeor","fusionbolt","roost","tailwind"],
		type: ["Dragon", "Electric"],
		uber: 1,
		legend: 1
	},
	645: {
		species: "Landorus",
		randomBattleMoves: ["calmmind","rockpolish","earthpower","focusblast","psychic","sludgewave","stealthrock","knockoff"],
		randomDoubleBattleMoves: ["earthpower","focusblast","rockpolish","hiddenpowerice","psychic","sludgebomb","protect"],
		therainBattleMoves: ["swordsdance","rockpolish","earthquake","stoneedge","uturn","superpower","stealthrock"],
		therainDoubleBattleMoves: ["rockslide","earthquake","stoneedge","uturn","superpower","knockoff","protect"],
		type: ["Ground", "Flying"],
		forms: ["norm", "therian"],
		legend: 1
	},
	646: {
		species: "Kyurem",
		randomBattleMoves: ["dracometeor","icebeam","earthpower","outrage","substitute","dragonpulse","focusblast","roost"],
		randomDoubleBattleMoves: ["substitute","icebeam","dracometeor","dragonpulse","focusblast","glaciate","earthpower","roost","protect"],
		blackBattleMoves: ["outrage","fusionbolt","icebeam","roost","substitute","earthpower","dragonclaw"],
		blackDoubleBattleMoves: ["protect","fusionbolt","icebeam","roost","substitute","honeclaws","earthpower","dragonclaw"],
		whiteBattleMoves: ["dracometeor","icebeam","fusionflare","earthpower","focusblast","dragonpulse","substitute","roost","toxic"],
		whiteDoubleBattleMoves: ["dracometeor","dragonpulse","icebeam","fusionflare","earthpower","focusblast","roost","protect"],
		type: ["Dragon", "Ice"],
		forms: ["norm", "white", "black"],
		legend: 1
	},
	647: {
		species: "Keldeo",
		randomBattleMoves: ["hydropump","secretsword","calmmind","hiddenpowerflying","hiddenpowerelectric","substitute","scald","icywind"],
		randomDoubleBattleMoves: ["hydropump","secretsword","protect","hiddenpowerflying","hiddenpowerelectric","substitute","surf","icywind","taunt"],
		type: ["Water", "Fighting"],
		forms: ["norm", "resolute"],
		legend: 1
	},
	648: {
		species: "Meloetta",
		randomBattleMoves: ["uturn","calmmind","psyshock","hypervoice","shadowball","focusblast"],
		randomDoubleBattleMoves: ["calmmind","psyshock","thunderbolt","hypervoice","shadowball","focusblast","protect"],
		piruetteBattleMoves: ["relicsong","closecombat","knockoff","return"],
		piruetteDoubleBattleMoves: ["relicsong","closecombat","knockoff","return","protect"],
		type: ["Normal", "Psychic"],
		forms: ["aria", "pirouette"],
		uber: 1,
		legend: 1
	},
	649: {
		species: "Genesect",
		randomBattleMoves: ["uturn","bugbuzz","icebeam","flamethrower","thunderbolt","ironhead","shiftgear","extremespeed","blazekick"],
		randomDoubleBattleMoves: ["uturn","bugbuzz","icebeam","flamethrower","thunderbolt","ironhead","shiftgear","extremespeed","blazekick","protect"],
		type: ["Bug", "Steel"],
		uber: 1,
		legend: 1
	},
	650: {
		species: "Chespin",
		randomBattleMoves: ["curse","gyroball","seedbomb","stoneedge","spikes","synthesis"],
		type: ["Grass"],
		nfe: 1
	},
	651: {
		species: "Quilladin",
		randomBattleMoves: ["curse","gyroball","seedbomb","stoneedge","spikes","synthesis"],
		type: ["Grass"],
		nfe: 1
	},
	652: {
		species: "Chesnaught",
		randomBattleMoves: ["leechseed","synthesis","spikes","drainpunch","spikyshield","woodhammer"],
		randomDoubleBattleMoves: ["leechseed","synthesis","hammerarm","spikyshield","stoneedge","woodhammer","rockslide"],
		type: ["Grass", "Fighting"]
	},
	653: {
		species: "Fennekin",
		randomBattleMoves: ["fireblast","psychic","psyshock","grassknot","willowisp","hypnosis","hiddenpowerrock","flamecharge"],
		type: ["Fire"],
		nfe: 1
	},
	654: {
		species: "Braixen",
		randomBattleMoves: ["fireblast","flamethrower","psychic","psyshock","grassknot","willowisp","hiddenpowerrock"],
		type: ["Fire"],
		nfe: 1
	},
	655: {
		species: "Delphox",
		randomBattleMoves: ["calmmind","fireblast","psyshock","grassknot","switcheroo","shadowball"],
		randomDoubleBattleMoves: ["calmmind","fireblast","psyshock","grassknot","switcheroo","shadowball","heatwave","dazzlinggleam","protect"],
		type: ["Fire", "Psychic"]
	},
	656: {
		species: "Froakie",
		randomBattleMoves: ["quickattack","hydropump","icebeam","waterfall","toxicspikes","poweruppunch","uturn"],
		type: ["Water"],
		nfe: 1
	},
	657: {
		species: "Frogadier",
		randomBattleMoves: ["hydropump","surf","icebeam","uturn","taunt","toxicspikes"],
		type: ["Water"],
		nfe: 1
	},
	658: {
		species: "Greninja",
		randomBattleMoves: ["hydropump","icebeam","darkpulse","gunkshot","uturn","spikes","toxicspikes","taunt"],
		randomDoubleBattleMoves: ["hydropump","uturn","surf","icebeam","matblock","taunt","darkpulse","protect"],
		type: ["Water", "Dark"]
	},
	659: {
		species: "Bunnelby",
		randomBattleMoves: ["agility","earthquake","return","quickattack","uturn","stoneedge","spikes","bounce"],
		type: ["Normal"],
		nfe: 1
	},
	660: {
		species: "Diggersby",
		randomBattleMoves: ["earthquake","return","wildcharge","uturn","swordsdance","quickattack","knockoff","agility"],
		randomDoubleBattleMoves: ["earthquake","uturn","return","wildcharge","protect","quickattack"],
		type: ["Normal", "Ground"]
	},
	661: {
		species: "Fletchling",
		randomBattleMoves: ["roost","swordsdance","uturn","return","overheat","flamecharge","tailwind"],
		type: ["Normal", "Flying"],
		nfe: 1
	},
	662: {
		species: "Fletchinder",
		randomBattleMoves: ["roost","swordsdance","uturn","return","overheat","flamecharge","tailwind","acrobatics"],
		type: ["Fire", "Flying"],
		nfe: 1
	},
	663: {
		species: "Talonflame",
		randomBattleMoves: ["bravebird","flareblitz","roost","swordsdance","uturn","willowisp","tailwind"],
		randomDoubleBattleMoves: ["bravebird","flareblitz","roost","swordsdance","uturn","willowisp","tailwind","taunt","protect"],
		type: ["Fire", "Flying"]
	},
	664: {
		species: "Scatterbug",
		randomBattleMoves: ["tackle","stringshot","stunspore","bugbite","poisonpowder"],
		type: ["Bug"],
		nfe: 1
	},
	665: {
		species: "Spewpa",
		randomBattleMoves: ["tackle","stringshot","stunspore","bugbite","poisonpowder"],
		type: ["Bug"],
		nfe: 1
	},
	666: {
		species: "Vivillon",
		randomBattleMoves: ["sleeppowder","quiverdance","hurricane","bugbuzz","substitute"],
		randomDoubleBattleMoves: ["sleeppowder","quiverdance","hurricane","bugbuzz","roost","protect"],
		type: ["Bug", "Flying"],
		forms: ["archipelago", "continental", "elegant", "garden", "high plains", "icy snow", "jungle", "marine", "meadow", "modern", "monsoon", "ocean", "polar", "river", "sandstorm", "savannah", "sun", "tundra", "poke ball", "fancy"]
	},
	667: {
		species: "Litleo",
		randomBattleMoves: ["hypervoice","fireblast","willowisp","bulldoze","yawn"],
		type: ["Fire", "Normal"],
		nfe: 1
	},
	668: {
		species: "Pyroar",
		randomBattleMoves: ["sunnyday","fireblast","hypervoice","solarbeam","willowisp","darkpulse"],
		randomDoubleBattleMoves: ["hypervoice","fireblast","willowisp","protect","sunnyday","solarbeam"],
		type: ["Fire", "Normal"]
	},
	669: {
		species: "Flabebe",
		randomBattleMoves: ["moonblast","toxic","wish","psychic","aromatherapy","protect","calmmind"],
		type: ["Fairy"],
		forms: ["red", "yellow", "orange", "blue", "white"],
		nfe: 1
	},
	670: {
		species: "Floette",
		randomBattleMoves: ["moonblast","toxic","wish","psychic","aromatherapy","protect","calmmind"],
		//Eternal-Flower Form
		eternalBattleMoves: ["lightofruin","psychic","hiddenpowerfire","hiddenpowerground","moonblast"],
		eternalDoubleBattleMoves: ["lightofruin","dazzlinggleam","wish","psychic","aromatherapy","protect","calmmind"],
		type: ["Fairy"],
		forms: ["red", "yellow", "orange", "blue", "white", "eternal-flower"],
		nfe: 1
	},
	671: {
		species: "Florges",
		randomBattleMoves: ["calmmind","moonblast","synthesis","aromatherapy","wish","toxic","protect"],
		randomDoubleBattleMoves: ["moonblast","dazzlinggleam","wish","psychic","aromatherapy","protect","calmmind"],
		type: ["Fairy"],
		forms: ["red", "yellow", "orange", "blue", "white"]
	},
	672: {
		species: "Skiddo",
		randomBattleMoves: ["hornleech","brickbreak","bulkup","leechseed","milkdrink","rockslide"],
		type: ["Grass"],
		nfe: 1
	},
	673: {
		species: "Gogoat",
		randomBattleMoves: ["bulkup","hornleech","earthquake","rockslide","substitute","leechseed","milkdrink"],
		randomDoubleBattleMoves: ["hornleech","earthquake","brickbreak","bulkup","leechseed","milkdrink","rockslide","protect"],
		type: ["Grass"]
	},
	674: {
		species: "Pancham",
		randomBattleMoves: ["partingshot","skyuppercut","crunch","stoneedge","bulldoze","shadowclaw","bulkup"],
		type: ["Fighting"],
		nfe: 1
	},
	675: {
		species: "Pangoro",
		randomBattleMoves: ["knockoff","superpower","gunkshot","icepunch","partingshot","drainpunch"],
		randomDoubleBattleMoves: ["partingshot","hammerarm","crunch","circlethrow","icepunch","earthquake","poisonjab","protect"],
		type: ["Fighting", "Dark"]
	},
	676: {
		species: "Furfrou",
		randomBattleMoves: ["return","cottonguard","thunderwave","substitute","toxic","suckerpunch","uturn","rest"],
		randomDoubleBattleMoves: ["return","cottonguard","uturn","thunderwave","suckerpunch","snarl","wildcharge","protect"],
		type: ["Normal"],
		forms: ["norm", "heart", "star", "diamond", "debutante", "matron", "dandy", "la reine", "kabuki", "pharaoh"]
	},
	677: {
		species: "Espurr",
		randomBattleMoves: ["fakeout","yawn","thunderwave","psyshock","trick","darkpulse"],
		type: ["Psychic"],
		nfe: 1
	},
	678: {
		species: "Meowstic",
		randomBattleMoves: ["toxic","yawn","thunderwave","psychic","reflect","lightscreen","healbell"],
		randomDoubleBattleMoves: ["fakeout","thunderwave","psychic","reflect","lightscreen","safeguard","protect"],
		femaleBattleMoves: ["calmmind","psychic","psyshock","shadowball","energyball","thunderbolt"],
		femaleDoubleBattleMoves: ["psyshock","darkpulse","fakeout","energyball","signalbeam","thunderbolt","protect","helpinghand"],
		type: ["Psychic"],
		forms: ["Male","Female"]
	},
	679: {
		species: "Honedge",
		randomBattleMoves: ["swordsdance","shadowclaw","shadowsneak","ironhead","rockslide","aerialace","destinybond"],
		type: ["Steel", "Ghost"],
		nfe: 1
	},
	680: {
		species: "Doublade",
		randomBattleMoves: ["swordsdance","shadowclaw","shadowsneak","ironhead","sacredsword"],
		randomDoubleBattleMoves: ["swordsdance","shadowclaw","shadowsneak","ironhead","sacredsword","rockslide","protect"],
		type: ["Steel", "Ghost"],
		nfe: 1
	},
	681: {
		species: "Aegislash",
		randomBattleMoves: ["kingsshield","swordsdance","shadowclaw","sacredsword","ironhead","shadowsneak","hiddenpowerice","shadowball","flashcannon"],
		randomDoubleBattleMoves: ["kingsshield","swordsdance","shadowclaw","sacredsword","ironhead","shadowsneak","wideguard","hiddenpowerice","shadowball","flashcannon"],
		type: ["Steel", "Ghost"],
		forms: ["blade", "shield"],
		uber: 1
	},
	682: {
		species: "Spritzee",
		randomBattleMoves: ["calmmind","drainingkiss","moonblast","psychic","aromatherapy","wish","trickroom","thunderbolt"],
		type: ["Fairy"],
		nfe: 1
	},
	683: {
		species: "Aromatisse",
		randomBattleMoves: ["wish","protect","moonblast","aromatherapy","reflect","lightscreen"],
		randomDoubleBattleMoves: ["moonblast","aromatherapy","wish","trickroom","thunderbolt","protect","healpulse"],
		type: ["Fairy"]
	},
	684: {
		species: "Swirlix",
		randomBattleMoves: ["calmmind","drainingkiss","dazzlinggleam","surf","psychic","flamethrower","bellydrum","thunderbolt","return","thief","cottonguard"],
		type: ["Fairy"],
		nfe: 1
	},
	685: {
		species: "Slurpuff",
		randomBattleMoves: ["substitute","bellydrum","playrough","return","drainpunch","calmmind","drainingkiss","flamethrower","surf"],
		randomDoubleBattleMoves: ["substitute","bellydrum","playrough","return","drainpunch","dazzlinggleam","surf","psychic","flamethrower","protect"],
		type: ["Fairy"]
	},
	686: {
		species: "Inkay",
		randomBattleMoves: ["topsyturvy","switcheroo","superpower","psychocut","flamethrower","rockslide","trickroom"],
		type: ["Dark", "Psychic"],
		nfe: 1
	},
	687: {
		species: "Malamar",
		randomBattleMoves: ["superpower","knockoff","psychocut","rockslide","substitute","trickroom"],
		randomDoubleBattleMoves: ["superpower","psychocut","rockslide","trickroom","knockoff","protect"],
		type: ["Dark", "Psychic"]
	},
	688: {
		species: "Binacle",
		randomBattleMoves: ["shellsmash","razorshell","stoneedge","earthquake","crosschop","poisonjab","xscissor","rockslide"],
		type: ["Rock", "Water"],
		nfe: 1
	},
	689: {
		species: "Barbaracle",
		randomBattleMoves: ["shellsmash","stoneedge","razorshell","earthquake","crosschop","stealthrock"],
		randomDoubleBattleMoves: ["shellsmash","razorshell","earthquake","crosschop","rockslide","protect"],
		type: ["Rock", "Water"]
	},
	690: {
		species: "Skrelp",
		randomBattleMoves: ["scald","sludgebomb","thunderbolt","shadowball","toxicspikes","hydropump"],
		type: ["Poison", "Water"],
		nfe: 1
	},
	691: {
		species: "Dragalge",
		randomBattleMoves: ["dracometeor","sludgewave","focusblast","scald","hiddenpowerfire","toxicspikes","dragonpulse"],
		randomDoubleBattleMoves: ["dracometeor","sludgebomb","focusblast","scald","hiddenpowerfire","protect","dragonpulse"],
		type: ["Poison", "Dragon"]
	},
	692: {
		species: "Clauncher",
		randomBattleMoves: ["waterpulse","flashcannon","uturn","crabhammer","aquajet","sludgebomb"],
		type: ["Water"],
		nfe: 1
	},
	693: {
		species: "Clawitzer",
		randomBattleMoves: ["scald","waterpulse","darkpulse","aurasphere","icebeam","uturn"],
		randomDoubleBattleMoves: ["waterpulse","icebeam","uturn","darkpulse","aurasphere","muddywater","helpinghand","protect"],
		type: ["Water"]
	},
	694: {
		species: "Helioptile",
		randomBattleMoves: ["surf","voltswitch","hiddenpowerice","raindance","thunder","darkpulse","thunderbolt"],
		type: ["Electric", "Normal"],
		nfe: 1
	},
	695: {
		species: "Heliolisk",
		randomBattleMoves: ["raindance","thunder","hypervoice","surf","darkpulse","hiddenpowerice","voltswitch","thunderbolt"],
		randomDoubleBattleMoves: ["surf","voltswitch","hiddenpowerice","raindance","thunder","darkpulse","thunderbolt","electricterrain","protect"],
		type: ["Electric", "Normal"]
	},
	696: {
		species: "Tyrunt",
		randomBattleMoves: ["stealthrock","dragondance","stoneedge","dragonclaw","earthquake","icefang","firefang"],
		type: ["Rock", "Dragon"],
		nfe: 1
	},
	697: {
		species: "Tyrantrum",
		randomBattleMoves: ["stealthrock","dragondance","stoneedge","dragonclaw","earthquake","firefang","outrage","headsmash"],
		randomDoubleBattleMoves: ["rockslide","dragondance","headsmash","dragonclaw","earthquake","icefang","firefang","protect"],
		type: ["Rock", "Dragon"]
	},
	698: {
		species: "Amaura",
		randomBattleMoves: ["naturepower","hypervoice","ancientpower","thunderbolt","darkpulse","thunderwave","dragontail","flashcannon"],
		type: ["Rock", "Ice"],
		nfe: 1
	},
	699: {
		species: "Aurorus",
		randomBattleMoves: ["ancientpower","thunderbolt","encore","thunderwave","earthpower","freezedry","hypervoice","stealthrock"],
		randomDoubleBattleMoves: ["hypervoice","ancientpower","thunderbolt","encore","thunderwave","flashcannon","freezedry","icywind","protect"],
		type: ["Rock", "Ice"]
	},
	700: {
		species: "Sylveon",
		randomBattleMoves: ["hypervoice","calmmind","wish","protect","psyshock","batonpass","shadowball"],
		randomDoubleBattleMoves: ["hypervoice","calmmind","wish","protect","psyshock","helpinghand","shadowball","hiddenpowerground"],
		type: ["Fairy"]
	},
	701: {
		species: "Hawlucha",
		randomBattleMoves: ["swordsdance","highjumpkick","acrobatics","roost","thunderpunch","substitute"],
		randomDoubleBattleMoves: ["swordsdance","highjumpkick","uturn","stoneedge","skydrop","encore","protect"],
		type: ["Fighting", "Flying"]
	},
	702: {
		species: "Dedenne",
		randomBattleMoves: ["voltswitch","thunderbolt","nuzzle","grassknot","hiddenpowerice","uturn","toxic"],
		randomDoubleBattleMoves: ["voltswitch","thunderbolt","nuzzle","grassknot","hiddenpowerice","uturn","helpinghand","protect"],
		type: ["Electric", "Fairy"]
	},
	703: {
		species: "Carbink",
		randomBattleMoves: ["stealthrock","lightscreen","reflect","explosion","powergem","moonblast"],
		randomDoubleBattleMoves: ["trickroom","lightscreen","reflect","explosion","powergem","moonblast","protect"],
		type: ["Rock", "Fairy"]
	},
	704: {
		species: "Goomy",
		randomBattleMoves: ["sludgebomb","thunderbolt","toxic","protect","infestation"],
		type: ["Dragon"],
		nfe: 1
	},
	705: {
		species: "Sliggoo",
		randomBattleMoves: ["sludgebomb","thunderbolt","toxic","protect","infestation","icebeam"],
		type: ["Dragon"],
		nfe: 1
	},
	706: {
		species: "Goodra",
		randomBattleMoves: ["dracometeor","dragonpulse","fireblast","sludgebomb","thunderbolt","earthquake","dragontail"],
		randomDoubleBattleMoves: ["thunderbolt","icebeam","dragonpulse","fireblast","muddywater","dracometeor","focusblast","protect"],
		type: ["Dragon"]
	},
	707: {
		species: "Klefki",
		randomBattleMoves: ["reflect","lightscreen","spikes","magnetrise","playrough","thunderwave","foulplay","toxic"],
		randomDoubleBattleMoves: ["reflect","lightscreen","safeguard","playrough","substitute","thunderwave","protect","flashcannon","dazzlinggleam"],
		type: ["Steel", "Fairy"]
	},
	708: {
		species: "Phantump",
		randomBattleMoves: ["hornleech","leechseed","phantomforce","substitute","willowisp","curse","bulldoze","rockslide","poisonjab"],
		type: ["Ghost", "Grass"],
		nfe: 1
	},
	709: {
		species: "Trevenant",
		randomBattleMoves: ["hornleech","shadowclaw","leechseed","willowisp","rest","substitute","phantomforce"],
		randomDoubleBattleMoves: ["hornleech","woodhammer","leechseed","shadowclaw","willowisp","trickroom","earthquake","rockslide","protect"],
		type: ["Ghost", "Grass"]
	},
	710: {
		species: "Pumpkaboo",
		//Movesets are identical across all forms.
		randomBattleMoves: ["willowisp","shadowsneak","fireblast","synthesis","seedbomb"],
		type: ["Ghost", "Grass"],
		forms: ["small", "average", "large", "super"],
		nfe: 1
	},
	711: {
		species: "Gourgeist",
		//Small & Regular
		randomBattleMoves: ["willowisp","seedbomb","leechseed","shadowsneak","substitute","synthesis"],
		randomDoubleBattleMoves: ["willowisp","shadowsneak","painsplit","seedbomb","leechseed","phantomforce","explosion","protect"],
		//Large & Super
		randomBattleMoves: ["willowisp","seedbomb","leechseed","shadowsneak","substitute","synthesis"],
		randomDoubleBattleMoves: ["willowisp","shadowsneak","painsplit","seedbomb","leechseed","phantomforce","explosion","protect","trickroom"],
		type: ["Ghost", "Grass"],
		forms: ["small", "average", "large", "super"]
	},
	712: {
		species: "Bergmite",
		randomBattleMoves: ["avalanche","recover","stoneedge","curse","gyroball","rapidspin"],
		type: ["Ice"],
		nfe: 1
	},
	713: {
		species: "Avalugg",
		randomBattleMoves: ["avalanche","recover","toxic","rapidspin","roar","earthquake"],
		randomDoubleBattleMoves: ["avalanche","recover","earthquake","protect"],
		type: ["Ice"]
	},
	714: {
		species: "Noibat",
		randomBattleMoves: ["airslash","hurricane","dracometeor","uturn","roost","switcheroo"],
		type: ["Flying", "Dragon"],
		nfe: 1
	},
	715: {
		species: "Noivern",
		randomBattleMoves: ["dracometeor","hurricane","airslash","flamethrower","boomburst","switcheroo","uturn","roost","taunt"],
		randomDoubleBattleMoves: ["airslash","hurricane","dragonpulse","dracometeor","focusblast","flamethrower","uturn","roost","boomburst","switcheroo","tailwind","taunt","protect"],
		type: ["Flying", "Dragon"]
	},
	716: {
		species: "Xerneas",
		randomBattleMoves: ["geomancy","moonblast","thunder","focusblast","thunderbolt","hiddenpowerfire","psyshock","rockslide","closecombat"],
		randomDoubleBattleMoves: ["geomancy","dazzlinggleam","thunder","focusblast","thunderbolt","hiddenpowerfire","psyshock","rockslide","closecombat","protect"],
		type: ["Fairy"],
		uber: 1,
		legend: 1
	},
	717: {
		species: "Yveltal",
		randomBattleMoves: ["darkpulse","hurricane","foulplay","oblivionwing","uturn","suckerpunch","taunt","toxic","roost"],
		randomDoubleBattleMoves: ["darkpulse","oblivionwing","taunt","focusblast","hurricane","roost","suckerpunch","snarl","skydrop","protect"],
		type: ["Dark", "Flying"],
		uber: 1,
		legend: 1
	},
	718: {
		species: "Zygarde",
		randomBattleMoves: ["dragondance","earthquake","outrage","extremespeed","stoneedge"],
		randomDoubleBattleMoves: ["dragondance","landswrath","extremespeed","rockslide","coil","stoneedge","glare","protect"],
		type: ["Dragon", "Ground"],
		legend: 1
	},
	719: {
		species: "Diancie",
		randomBattleMoves: ["reflect","lightscreen","stealthrock","diamondstorm","moonblast","hiddenpowerfire"],
		randomDoubleBattleMoves: ["diamondstorm","moonblast","reflect","lightscreen","safeguard","substitute","calmmind","psychic","dazzlinggleam","protect"],
		megaBattleMoves: ["calmmind","moonblast","earthpower","hiddenpowerfire","psyshock","diamondstorm"],
		megaDoubleBattleMoves: ["diamondstorm","moonblast","calmmind","psyshock","earthpower","hiddenpowerfire","dazzlinggleam","protect"],
		type: ["Rock", "Fairy"],
		mega: ["mega"],
		legend: 1
	},
	720: {
		species: "Hoopa",
		randomBattleMoves: ["nastyplot","psyshock","shadowball","focusblast","trick"],
		randomDoubleBattleMoves: ["hyperspacehole","shadowball","focusblast","protect","psychic"],
		//Hoopa Unbound
		unboundBattleMoves: ["nastyplot","psyshock","darkpulse","focusblast","hyperspacefury","zenheadbutt","icepunch","drainpunch","knockoff","trick"],
		unboundDoubleBattleMoves: ["psychic","darkpulse","focusblast","protect","hyperspacefury","zenheadbutt","icepunch","drainpunch"],
		type: ["Psychic", "Ghost"],
		forms: ["unbound"],
		uber: 1,
		legend: 1
	},
	721: {
		species: "Volcanion",
		randomBattleMoves: ["substitute","steameruption","fireblast","sludgewave","hiddenpowerice","earthpower","superpower"],
		randomDoubleBattleMoves: ["substitute","steameruption","heatwave","sludgebomb","rockslide","earthquake","protect"],
		type: ["Fire", "Water"],
		uber: 1,
		legend: 1
	}
};
