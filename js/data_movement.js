data_movement = [
    {
        title: "Move",
        icon: "run",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft moved",
        reference: "Adventurer's Guide, pg. 439.",
        bullets: [
            "If you have more than one speed, such as your walking speed and a flying speed, you can switch back and forth between your speeds during your move. Whenever you switch, subtract the distance you've already moved from the new speed.",
            "You can move through a nonhostile creature's space.",
            "You can move through a hostile creature's space only if the creature is at least two sizes larger or smaller than you.",
            "Another creature's space is difficult terrain for you.",
            "Whether a creature is a friend or an enemy, you can't willingly end your move in its space."
        ]
    },
    {
        title: "Climb",
        icon: "crags",
        subtitle: "Cost: 10ft per 5ft",
        description: "Movement cost: 10ft per 5ft climbed",
        reference: "Adventurer's Guide, pg. 439.",
        bullets: [
            "May involve a Strength (Athletics) check if the climb is difficult"
        ]
    },
    {
        title: "Swim",
        icon: "at-sea",
        subtitle: "Cost: 10ft per 5ft",
        description: "Movement cost: 10ft per 5ft swum",
        reference: "Adventurer's Guide, pg. 439.",
        bullets: [
            "May involve a Strength (Athletics) check if the swim is difficult"
        ]
    },
    {
        title: "Drop prone",
        icon: "falling",
        subtitle: "Cost: 0ft",
        description: "Movement cost: 0ft (free)",
        reference: "Adventurer's Guide, pg. 441.",
        bullets: [
            "You can drop prone without using any of your speed",
            "You can also drop prone as a reaction to being targeted by a ranged attack you can see.",
            "To move while prone, you must crawl or use magic such as teleportation",
            "Dropping prone adds the <i>Prone</i> condition (Attackers within 5 feet have advantage against you, otherwise they have disadvantage, your own melee attacks have disadvantage)"
        ]
    },
    {
        title: "Crawl",
        icon: "crawl",
        subtitle: "Cost: 10ft per 5ft",
        description: "Movement cost: 10ft per 5ft crawled",
        reference: "Adventurer's Guide, pg. 441.",
        bullets: [
            "This speed cost stacks with difficult terrain. Crawling in difficult terrain would cost 15ft per 5ft crawled"
        ]
    },
    {
        title: "Stand up",
        icon: "strong",
        subtitle: "Cost: half movement speed",
        description: "Movement cost: half of your speed",
        reference: "Adventurer's Guide, pg. 441.",
        bullets: [
            "You can't stand up if you don't have enough movement left or if your speed is 0"
        ]
    },
    {
        title: "High jump",
        icon: "wingfoot",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft jumped",
        
        reference: "Adventurer's Guide, pg. 419.",
        bullets: [
            "You leap into the air a number of feet equal to <b>3 + your Strength modifier</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing high jump, you can jump only half that distance.",
            "You can extend your arms half your height above yourself during the jump. (Thus a creature can reach above itself equal to the height of a jump plus 1.5 times its height.)",
            "In some circumstances, your DM might allow you to make a Strength (Athletics) check to jump higher than you normally can.",
            "When a creature's jumping distance exceeds its Speed, it can jump up to a distance equal to twice its Speed in a single leap so long as it takes no other movement on that turn other than to jump. In either case, a creature uses up a foot of movement for every foot it covers jumping."
        ]
    },
    {
        title: "Long jump",
        icon: "wingfoot",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft jumped",
        reference: "Adventurer's Guide, pg. 419.",
        bullets: [
            "You cover a number of feet up to your <b>Strength score</b> if you move at least 10 feet on foot immediately before the jump.",
            "May involve a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance). You hit the obstacle on a failed check.",
            "May involve a DC 10 Dexterity (Acrobatics) check to land on your feet in difficult terrain. You land prone on a failed check.",
            "When a creature's jumping distance exceeds its Speed, it can jump up to a distance equal to twice its Speed in a single leap so long as it takes no other movement on that turn other than to jump. In either case, a creature uses up a foot of movement for every foot it covers jumping."
        ]
    },
    {
        title: "Tactical Positioning",
        icon: "encirclement",
        subtitle: "Tactical Positioning in combat",
        description: "Position in combat can give you or your allies the upper hand during Turn-Based Action",
        reference: "Adventurer's Guide, pg. 441.",
        bullets: [
            "Attacking from Above: If you are at least 5 feet above your target and you aren't grappled or restrained, you gain an expertise die on melee attack rolls made against it.",
            "Back-to-Back: When you are adjacent to an ally, you can use a bonus action to stand back-to-back. While back-to- back with an ally it is harder to be caught off guard, and you cannot be flanked. As long as neither you nor your ally move, your passive Perception is increased by 2 until either the start of your next turn or when one of you moves.",
            "Dragging an Ally: While adjacent to a willing ally, you can use your reaction to grab them by the hand and pull them along with your movement even if they've already expended all of theirs. While doing so, every foot of movement costs you an additional 2 feet of move- ment, and the ally cannot use their reaction. This movement provokes opportunity attacks as normal.",
            "Flanking: When you and an ally are on direct opposite sides of a target, you gain an expertise die on your actions against that target. You and your ally cannot flank for one another if either of you are incapacitated. If you are not using a grid for combat, flanking instead occurs when three or more creatures are attacking the same creature in melee.",
            "Pulling From Below: If you are at least 5 feet below your target, your target is your size or smaller, and you aren't grappled or restrained, you gain an expertise die on Strength checks and saving throws made against it."
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any stunt not on this list",
        description: "Perform any movement or stunt you can imagine",
        bullets: [
            "When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    },
    {
        title: "Difficult terrain",
        icon: "stone-pile",
        subtitle: "Cost modifier: +5ft per 5ft",
        reference: "Adventurer's Guide, pg. 451.",
        description: "Moving in difficult terrain costs an additional 5ft per 5ft of movement",
        bullets: [
        ]
    },
    {
        title: "Grapple move",
        icon: "grab",
        subtitle: "Modifier: speed halved",
        description: "Drag or carry the grappled creature with you",
        reference: "Adventurer's Guide, pg. 458-459",
        bullets: [
            "When you move, you can drag or carry the grappled creature with you. When you do so, your Speed is halved, unless the creature's weight is within your carrying capacity and you are not encumbered by bulky items.",
            "See the attack action for how to grapple a creature."
        ]
    }
]
