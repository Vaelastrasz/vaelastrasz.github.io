data_action = [
    {
        title: "Attack",
        icon: "crossed-swords",
        subtitle: "Melee or ranged attack",
        description: "Perform a melee or ranged attack with your weapon",
        reference: "Adventurer's Guide, pgs. 443-447.",
        bullets: [
            "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks.",
            "When you attack with a weapon that does not have the heavy property and is wielded in one hand, you can use a bonus action to attack with a different dual-wielding weapon in your other hand (see the <i>Offhand attack</i> bonus action).",
            "You may replace one of your melee attacks with a <i>Basic Maneuver</i>.",
            "Some conditions give advantage on the attack: attacks against blinded, paralyzed, petrified, restrained, stunned, or unconscious targets; melee attacks against prone targets; attacks by invisible or hidden attackers.",
            "Some conditions give disadvantage on the attack: attacks against invisible or hidden targets; ranged attacks against prone targets; attacks by blinded, frightened, poisoned, or restrained attackers."
        ]
    },
    {
        title: "Basic Maneuvers",
        icon: "crossed-swords",
        subtitle: "Melee basic maneuvers",
        description: "Perform a basic combat maneuver",
        reference: "Adventurer's Guide, pgs. 458-459.",
        bullets: [
            "When you successfully use a basic maneuver you also deal basic melee damage. This is equal to 1 + your Strength modifier.",
            "You cannot use a basic maneuver to activate any features that deal additional damage (such as Sneak Attack or Divine Smite) unless the feature specifically states otherwise",
            "A maneuver sometimes forces a target to make a saving throw to resist its effects. The saving throw DC is calculated as follows: Maneuver DC = 8 + your proficiency bonus + your Strength or Dexterity modifier Combat maneuvers are nonmagical.",
        ]
    },
    {
        title: "Disarm",
        icon: "drop-weapon",
        subtitle: "Basic Combat Maneuver",
        description: " attempt to knock an item or weapon from a creature's hand",
        reference: "Adventurer's Guide, pg. 458",
        bullets: [
            "The target must be within your reach and be holding an item (either carried or wielded)",
            "The target makes a Strength or Dexterity saving throw against your maneuver DC.",
            "On a failure, you deal basic melee damage and the target drops the item in its space",
            "The target has advantage if it is larger than you or holding the item with two or more hands, and a target smaller than you has disadvantage."
        ]
    },
    {
        title: "Grab On",
        icon: "mountain-climbing",
        subtitle: "Basic Combat Maneuver",
        description: "Attempt to grab on to a creature",
        reference: "Adventurer's Guide, pg. 458",
        bullets: [
            "Attempt to grab on to a creature two or more size categories larger than you and climb or jump onto it's back.",
            "Make a Strength or Dexterity saving throw against the creature's maneuver DC to cling to or balance upon its body",
            "On a success, you move into the creature's space and can move upon its body as if it is difficult terrain.",
            "While grabbing onto a larger creature, you gain advantage on attack rolls against it.",
            "A creature can can also use an action or replace one of its attacks on its turn to try to dislodge you, such as shaking you loose or bashing you against a wall, forcing you to make a Strength or Dexterity saving throw against its maneuver DC or fall prone into the nearest space adjacent to the creature, taking its basic melee damage in the process.",
            "If the creature chooses to roll over in order to dislodge you, it becomes prone, but you have disadvantage on the saving throw to hang on."
        ]
    },
    {
        title: "Grapple",
        icon: "grab",
        subtitle: "Basic Combat Maneuver",
        description: "Attempt to grab a creature or wrestle with it",
        reference: "Adventurer's Guide, pg. 458-459",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
            "Using at least one free hand, you try to seize the target by making a grapple check, The target makes a Strength or Dexterity saving throw against your maneuver DC.",
            "The target makes a Strength or Dexterity saving throw against your maneuver DC.",
            "On a failure, you deal basic melee damage and the target becomes grappled (see Appendix A: Conditions on page 616).",
            "While grappled, a creature can use its action to attempt to escape. It must succeed on a Strength or Dexterity saving throw against your maneuver DC.",
            "When you move, you can drag or carry the grappled creature with you. When you do so, your Speed is halved, unless the creature's weight is within your carrying capacity and you are not encumbered by bulky items.",
            "You can use the Grapple maneuver to try to free another grappled or restrained creature. The creature grappling or restraining the target makes a Strength saving throw against your maneuver DC. If it fails the saving throw, the grappled or restrained creature is freed. Additionally, you may move the freed creature 5 feet in any direction."
        ]
    },
    {
        title: "Knockdown",
        icon: "tripwire",
        subtitle: "Basic Combat Maneuver",
        description: "Trip or push a creature down",
        reference: "Adventurer's Guide, pg. 459",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
            "The target makes a Strength saving throw against your maneuver DC.",
            "On a failure, you deal basic melee damage and knock the target prone."
        ]
    },
    {
        title: "Overrun",
        icon: "bulldozer",
        subtitle: "Basic Combat Maneuver",
        description: "Use an action or Bonus action to move through a creature's space",
        reference: "Adventurer's Guide, pg. 459",
        bullets: [
            "Make a Strength saving throw against the target's maneuver DC.",
            "On a success, you deal basic melee damage and can move through the hostile creature's space once this turn.",
            "You have advantage if you are larger than the target, or disadvantage if you are smaller.",
            " If you are two or more sizes smaller than the target, you can move through the hostile creature's space without making a save.",
            "You still provoke opportunity attacks if you move beyond a creature's reach."
        ]
    },
    {
        title: "Shove",
        icon: "hand",
        subtitle: "Basic Combat Maneuver",
        description: "Shove a creature, either to knock it prone or push it away from you",
        reference: "Adventurer's Guide, pg. 459",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
            "The target makes a Strength saving throw against your maneuver DC.",
            "On a failure, you deal basic melee damage and push the target a number of feet away from you equal to 5 + 5 for every 5 points it failed its saving throw by. You can move the creature in any direction away from you (to the side, forward, or diagonally away).",
            "A creature that is shoved off of a precipice is propelled off of whatever it is standing on—it does not receive any saving throw or ability check to grab onto something to avoid falling down below."
        ]
    },
    {
        title: "Cast a spell",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 action",
        description: "Cast a spell with a casting time of 1 action",
        reference: "Adventurer's Guide, pg. 442, 491.",
        bullets: [
            "You can't cast a spell with your action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Double movement speed",
        description: "Gain extra movement for the current turn",
        reference: "Adventurer's Guide, pg. 442",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "Adventurer's Guide, pg. 442",
        bullets: [
            "Movement does not provoke opportunity attacks for the rest of the turn."
        ]
    },
    {
        title: "Dodge",
        icon: "aura",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "Adventurer's Guide, pg. 442",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Help",
        icon: "telepathy",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "Adventurer's Guide, pg. 442",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "Hide",
        icon: "hood",
        subtitle: "Sneaky Sneaky",
        description: "Attempt to hide",
        reference: "Adventurer's Guide, pg. 443",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "Adventurer's Guide, pg. 443",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Devote your attention to finding something",
        reference: "Adventurer's Guide, pg. 443",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "Sprint",
        icon: "sprint",
        subtitle: "Up to 4x speed",
        description: "Run up to quadruple your speed",
        reference: "Adventurer's Guide, pg. 443",
        bullets: [
            "You may not take any other actions, bonus actions or reactions other than your move speed for the turn.",
            "If you are unencumbered, your Speed is quadrupled for one turn. If you are encumbered or wearing heavy armor, your Speed is tripled for one turn.",
            "You must Sprint in a straight line each turn, although you can change direction each time you Sprint.",
            "You may Sprint for a number of turns equal to your Constitution modifier.",
            "Each turn you Sprint after that, you make a Constitution (Athletics) check (DC 10 + 1 per previous check made in the last minute) or you suffer a level of fatigue.",
            "You recover fatigue suffered from sprinting one minute after you stop sprinting."
        ]
    },
    {
        title: "Tumble",
        icon: "rolling-energy",
        subtitle: "Tumble past an enemy",
        description: "Move through an enemy's space",
        reference: "Adventurer's Guide, pg. 444",
        bullets: [
            "You can use an Action or Bonus Action to Tumble through a hostile creature's space",
            "Make a Dexterity saving throw against the Target's combat maneuver DC.",
            "On a success, you can move through the hostile creature's space once this turn.",
            "If you have proficiency in Acrobatics, you gain an expertise die on the save (or you gain a 1d6 expertise die if you also have the tumbling specialty).",
            "If you are smaller than the target, you have advantage. If you are two or more sizes larger, you can move through uncontested.",
            "You still provoke Opportunity attacks if you move beyond a creature's reach"
        ]
    },
    {
        title: "Use Object",
        icon: "snatch",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "Adventurer's Guide, pg. 444",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use (like administering or drinking a potion), you also take this action."
        ]
    },
    {
        title: "Use shield",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "Adventurer's Guide, pg. 320",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabilize a creature",
        icon: "first-aid",
        subtitle: "Administer first aid to a dying creature",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "Adventurer's Guide, pg. 449.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10",
            "On a success, the creature is stable and no longer needs to make death saving throws",
            "A stable creature regains 1 hit point after 1d4 hours"
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "Adventurer's Guide, pg. 442.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
