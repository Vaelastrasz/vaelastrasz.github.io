data_condition = [
    {
        title: "Blinded",
        icon: "one-eyed",
        subtitle: "You can't see",
        description: "You can't see",
        reference: "Adventurer's Guide, pg. 616.",
        bullets: [
            "A blinded creature can't see and it automatically fails ability checks that require sight.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage."
        ]
    },
    {
        title: "Bloodied",
        icon: "ragged-wound",
        subtitle: "You are bloodied",
        description: "You are bloodied",
        reference: "Adventurer's Guide, pg. 616.",
        bullets: [
            "A creature is bloodied when reduced to half its hit points or less."
        ]
    },
    {
        title: "Charmed",
        icon: "smitten",
        subtitle: "You are charmed",
        description: "You are charmed by another creature",
        reference: "Adventurer's Guide, pg. 616.",
        bullets: [
            "A charmed creature can't take any hostile action against the charmer.",
            "Ability checks the charmer makes to socially interact with the charmed creature have advantage"
        ]
    },
    {
        title: "Confused",
        icon: "think",
        subtitle: "You are confused",
        description: "You are confused",
        reference: "Adventurer's Guide, pg. 616.",
        bullets: [
            "A confused creature can't take reactions.",
            "On its turn a confused creature rolls a d8 to determine what it does.",
            "<table><tr><th>Roll</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>1-4</td><td></td><td></td><td>Does Nothing</td></tr><tr><td>5-6</td><td></td><td></td><td>takes no action or bonus action and uses all its movement to move in a randomly determined direction.</td></tr><tr><td>7-8</td><td></td><td></td><td>makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack.</td></tr></tr></table>"
        ]
    },
    {
        title: "Deafened",
        icon: "elf-ear",
        subtitle: "You can't hear",
        description: "You can't hear",
        reference: "Adventurer's Guide, pg. 616.",
        bullets: [
            "A deafened creature can't hear and automatically fails ability checks that require hearing."
        ]
    },
    {
        title: "Doomed",
        icon: "cursed-star",
        subtitle: "You are doomed",
        description: "You are doomed",
        reference: "Adventurer's Guide, pg. 616.",
        bullets: [
            "A doomed creature dies at a time determined by the Narrator, or within 13 (2d12) hours.",
            "A doomed creature continues to be doomed even after it dies. Magic equivalent to a 7th-level or higher spell can remove the doomed condition (such as regenerate cast on a living creature, resurrection, true resurrection, or wish)."
        ]
    },
    {
        title: "Encumbered",
        icon: "hand-truck",
        subtitle: "You are encumbered",
        description: "You are encumbered",
        reference: "Adventurer's Guide, pg. 616.",
        bullets: [
            "An encumbered creature's Speed is reduced to 5 feet.",
        ]
    },
    {
        title: "Fatigue",
        icon: "crawl",
        subtitle: "You are fatigued",
        description: "fatigue is measured in 7 levels",
        reference: "Adventurer's Guide, pg. 618-619.",
        bullets: [
            "<table><tr><th>Level</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>1</td><td></td><td></td><td>Cannot Sprint</td></tr><tr><td>2</td><td></td><td></td><td>Disadvantage on Strength, Dexterity and Constitution checks</td></tr><tr><td>3</td><td></td><td></td><td>Speed halved and unable to maintain a fast travel pace</td></tr><tr><td>4</td><td></td><td></td><td>Disadvantage on attack rolls and saving throws using Strength, Dexterity, or Constitution, and unable to maintain a normal travel pace</td></tr><tr><td>5</td><td></td><td></td><td>Hit Dice halved</td></tr><tr><td>6</td><td></td><td></td><td>Speed reduced to 5 ft. and unable to maintain a slow travel pace</td></tr><tr><td>7</td><td></td><td></td><td>Doomed</td></tr></table>",
            "You suffer the effect of your current level of Fatigue as well as all lower levels.",
            "Finishing a long rest at a safe haven reduces your fatigue and strife level by 1, provided that you have also had some food and drink (Supply).",
            "A creature does not require a haven to recover from the first level of fatigue or strife, but does still require a long rest.",
            "Also, being raised from the dead reduces a creature's Fatigue and Strife level by 1."
        ]
    },
    {
        title: "Frightened",
        icon: "sharp-smile",
        subtitle: "You are frightened",
        description: "You are frightened",
        reference: "Adventurer's Guide, pg. 617.",
        bullets: [
            "A frightened creature has disadvantage on ability checks and attack rolls while it is able to see the source of its fear",
            "A frightened creature can't willingly move closer to the source of its fear."
        ]
    },
    {
        title: "Grappled",
        icon: "grab",
        subtitle: "You are grappled",
        description: "You are grappled",
        reference: "Adventurer's Guide, pg. 617.",
        bullets: [
            "A grappled creature's Speed becomes 0, and it can't benefit from bonuses to movement speeds.",
            "If the grappler becomes incapacitated the condition ends",
            "If an effect removes the grappled creature from the reach of the grappler or grappling effect (such as when a creature is shoved away by the Doubleteam combat maneuver) the condition ends."
        ]
    },
    {
        title: "Incapacitated",
        icon: "internal-injury",
        subtitle: "You can't take actions or reactions",
        description: "You can't take actions or reactions",
        reference: "Adventurer's Guide, pg. 617.",
        bullets: [
            "An incapacitated creature can't take actions, bonus actions, or reactions"
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "You can't be seen",
        description: "You can't be seen without the aid of magic or a special sense",
        reference: "Adventurer's Guide, pg. 617.",
        bullets: [
            "An invisible creature is impossible to see without the aid of magic or a special sense (it gains no benefits from this condition against creatures still able to see it).",
            "An invisible creature is heavily obscured for the purpose of hiding.",
            "An invisible creature's location can be detected by noises it makes or tracks it leaves.",
            "An invisible creature makes attack rolls with advantage.",
            "Attack rolls against an invisible creature are made with disadvantage."
        ]
    },
    {
        title: "Paralyzed",
        icon: "internal-injury",
        subtitle: "You are paralyzed",
        description: "You can't do anything",
        reference: "Adventurer's Guide, pg. 617.",
        bullets: [
            "A paralyzed creature is incapacitated and can't move or speak.",
            "A paralyzed creature automatically fails Strength and Dexterity saving throws.",
            "Attack rolls against a paralyzed creature have advantage.",
            "Any attack that hits a paralyzed creature is a critical hit if the attacker is within 5 feet."
        ]
    },
    {
        title: "Petrified",
        icon: "stone-pile",
        subtitle: "You are transformed into stone",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)",
        reference: "Adventurer's Guide, pg. 617.",
        bullets: [
            "A petrified creature's weight is increased by a factor of ten and it ceases aging.",
            "A petrified creature is incapacitated, can't move or speak, and is unaware of its surroundings.",
            "A petrified creature automatically fails Strength and Dexterity saving throws.",
            "A petrified creature has resistance to all damage.",
            "A petrified creature is immune to poison and disease (time spent petrified does not affect the duration of a poison or disease already in its system)."
        ]
    },
    {
        title: "Poisoned",
        icon: "deathcab",
        subtitle: "You are poisoned",
        description: "You are poisoned",
        reference: "Adventurer's Guide, pg. 617.",
        bullets: [
            "A poisoned creature has disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Prone",
        icon: "crawl",
        subtitle: "You are prone",
        description: "You are prone",
        reference: "Adventurer's Guide, pg. 617.",
        bullets: [
            "A prone creature's only movement option is to crawl (every 1 foot of movement while crawling costs 1 extra foot) until it stands up.",
            "Standing up requires half a creature's movement.",
            "A prone creature makes melee attack rolls with disadvantage.",
            "An attack roll against a prone creature is made with advantage if the attacker is within 5 feet. Otherwise, the attack roll is made with disadvantage."
        ]
    },
    {
        title: "Rattled",
        icon: "rattlesnake",
        subtitle: "You are rattled",
        description: "You are rattled",
        reference: "Adventurer's Guide, pg. 617.",
        bullets: [
            "A rattled creature cannot benefit from expertise dice",
            "A rattled creature cannot take reactions.",
            "A creature that is immune to being stunned is immune to being rattled."
        ]
    },
    {
        title: "Restrained",
        icon: "imprisoned",
        subtitle: "You are restrained",
        description: "You are restrained",
        reference: "Adventurer's Guide, pg. 618.",
        bullets: [
            "A restrained creature's speed becomes 0, and it can't benefit from bonuses to Speed.",
            "Attack rolls against a restrained creature are made with advantage.",
            "A restrained creature makes attacks rolls with disadvantage.",
            "The restrained creature has disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Slowed",
        icon: "snail",
        subtitle: "You are slowed",
        description: "You are slowed",
        reference: "Adventurer's Guide, pg. 618.",
        bullets: [
            "A slowed creature's Speed is halved.",
            "A slowed creature takes a -2 penalty to AC and Dexterity saving throws.",
            "A slowed creature cannot take reactions.",
            "On its turn, a slowed creature can take either an action or a bonus action, not both. In addition, it can't make more than one melee or ranged attack during its turn."
        ]
    },
    {
        title: "Strife",
        icon: "internal-injury",
        subtitle: "You are suffering from strife",
        description: "Strife is measured in 7 levels",
        reference: "Adventurer's Guide, pg. 619.",
        bullets: [
            "<table><tr><th>Level</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>1</td><td></td><td></td><td>Disadvantage on Intelligence, Wisdom, and Charisma checks</td></tr><tr><td>2</td><td></td><td></td><td>Disadvantage on concentration checks</td></tr><tr><td>3</td><td></td><td></td><td>Can only take a bonus action or action each turn (not both)</td></tr><tr><td>4</td><td></td><td></td><td>Disadvantage on attack rolls and saving throws using Intelligence, Wisdom, and Charisma</td></tr><tr><td>5</td><td></td><td></td><td>Suffer the effects of a randomly determined short-term mental stress effect. (AG, pg. 620)</td></tr><tr><td>6</td><td></td><td></td><td>Cannot cast spells (but can cast cantrips)</td></tr><tr><td>7</td><td></td><td></td><td>Suffer the effects of a randomly determined long-term mental stress effect. (AG, pg. 621)</td></tr></table>",
            "You suffer the effect of your current level of Strife as well as all lower levels.",
            "Finishing a long rest at a safe haven reduces your fatigue and strife level by 1, provided that you have also had some food and drink (Supply).",
            "A creature does not require a haven to recover from the first level of fatigue or strife, but does still require a long rest.",
            "Also, being raised from the dead reduces a creature's Fatigue and Strife level by 1."
        ]
    },
    {
        title: "Stunned",
        icon: "internal-injury",
        subtitle: "You are stunned",
        description: "You are stunned",
        reference: "Adventurer's Guide, pg. 618.",
        bullets: [
            "A stunned creature is incapacitated (see the condition), can't move, and can speak only falteringly.",
            "The creature automatically fails Strength and Dexterity saving throws.",
            "Attack rolls against the creature have advantage.",
            "A creature that is immune to being stunned is immune to being rattled."
        ]
    },
    {
        title: "Unconscious",
        icon: "coma",
        subtitle: "You are unconscious",
        description: "You are unconscious",
        reference: "Adventurer's Guide, pg. 618.",
        bullets: [
            "An unconscious creature is incapacitated, can't move or speak, and is unaware of its surroundings.",
            "An unconscious creature drops whatever it's holding and falls prone.",
            "An unconscious creature automatically fails Strength and Dexterity saving throws.",
            "Attack rolls against an unconscious creature are made with advantage.",
            "Any attack that hits an unconscious creature is a critical hit if the attacker is within 5 feet.",
        ]
    },
    {
        title: "Dying",
        icon: "dead-head",
        subtitle: "You are dying",
        description: "You have been dropped to zero hit points and are dying",
        reference: "Adventurer's Guide, pg. 448.",
        bullets: [
            "If you are reduced to 0 hit points by damage that fails to kill you, you fall unconscious.",
            "If you receive any healing you immediately regain consciousness again and no longer dying.",
            "Whenever you start your turn with 0 hit points and you're not stable, you are dying and you must make a special saving throw called a death saving throw to determine whether you slip closer to death or cling to life. Roll a d20 and do not add any modifiers.",
            "A 10 or higher is a success, 9 or lower is a failure.",
            "On your third success, you become stable.",
            "On your third failure, you die.",
            "Rolling a 1 causes you to suffer 1 level of Fatigue and 1 Level of Strife.",
            "Rolling a 20 immediately causes you to regain 1 hit point and consciousness, and you are able to take the rest of your turn.",
            "You can also be stabilized by an ally taking the Stabilize action and succeeding on a DC 10 Wisdom (Medicine) check.",
            "Once stable, you regain 1 hit point after 1d4 hours.",
            "If you take damage from an attack while you're on 0 hit points, the attacker can choose to make you suffer a death saving throw failure, one level of fatigue, or one level of strife.",
            "If you take any other damage while you have 0 hit points, you suffer a death saving throw failure. At the Narrator's discretion, depending on the nature of the damage, such as blasting steam or errant magic, this may instead inflict a level of fatigue or strife."
        ]
    }
]
