data_action = [
    {
        title: "Атака",
        icon: "crossed-swords",
        subtitle: "Ближняя или дальняя атака",
        description: "Совершение ближнего либо дальнего удара вашим оружием",
        reference: "Adventurer's Guide, pgs. 443-447.",
        bullets: [
            "Некоторые умения, такие как <i>Дополнительная атака</i> у воина, позволяют совершать несколько атак одним действием. Каждая такая атака использует отдельный бросок и может иметь другую цель. Между основной и дополнительной атакой можно двигаться.",
            "Когда вы атакуете лёгким рукопашным оружием, вы можете использовать оружие во второй руке, чтобы совершить бонусную атаку (см. бонусное действие <i>Атака второй рукой</i>).",
            "Вы можете заменить вторую атаку на <i>Базовый боевой манёвр</i>",
            "Некоторые состояния дают преимущество при атаке: атака против слепых, парализованных, окаменевших, опутанных или бессознательных целей; атаки, совершаемые невидимыми или скрывающимися нападающими.",
            "Некоторые состояния дают помехи при атаке: атака против невидимых или скрытых целей; дальнобойный атаки против лежащих целей; атаки, совершаемые слепыми, напуганными, отравленными или опутанными нападающими."
        ]
    },
    {
        title: "Базовые манёвры",
        icon: "crossed-swords",
        subtitle: "Ближние базовые манёвры",
        description: "Совершение базового боевого манёвра",
        reference: "Adventurer's Guide, pgs. 458-459.",
        bullets: [
            "Когда вы успешно используете боевой манёвр вы также наносите физический урон. Урон равен 1 + модификатору Силы",
            "Вы не можете использовать боевой манёвр чтобы активировать любую способность что наносит дополнительный урон (такие как Sneak Attack или Divine Smite) если в способности не указано обратного",
            "Манёвр иногда вынуждает цель совершить спасбросок чтобы противостоять его эффекту. Спасбросок высчитывается следующим образом: 8 + мастерство + модификатор Силы или Ловкости. Боевые манёвры не являются магией"
        ]
    },
    {
        title: "Разоружение",
        icon: "drop-weapon",
        subtitle: "Базовый боевой манёвр",
        description: "Попытка выбить из руки существа предмет или оружие", 
        reference: "Adventurer's Guide, pg. 458",
        bullets: [
            "Цель должна быть в вашей досягаемости и держать предмет (носимый или экипированный)",
            "Цель совершает спасбросок Силы либо Ловкости против вашего манёвра",
            "На провал, вы наносите базовый урон и цель бросает предмет в пределах своего пространства",
            "У цели преимущество если она больше вас либо держит предмет в двух или больше руках, также цель меньше вас получает помеху."
        ]
    },
    {
        title: "Взобраться",
        icon: "mountain-climbing",
        subtitle: "Базовый боевой манёвр",
        description: "Попытка взобраться на существо",
        reference: "Adventurer's Guide, pg. 458",
        bullets: [
            "Попытка залезть на спину существа, которое на две или больше категории больше вас.",
            "Сделайте спасбросок Силы либо Ловкости против Сложности манёвра существа чтобы сохранить баланс, карабкаясь по его телу",
            "В случае успеха, вы двигаетесь на пространство существа и можете двигаться по его телу как по труднопроходимой местности.",
            "Когда вы залезли на большое существо, у вас преимущество на атакующие броски против него.",
            "Существо может потратить действие или заменить одну из своих атак в ходу чтобы попробовать вас сбросить (например стряхивая вас, или ударяя о стену), вынуждая вас совершить спасбросок Силы или Ловкости против его Сложности манёвра или упасть ничком в ближайшее место рядом с существом, получая базовый урон ближнего боя в процессе.",
            "Если существо выбирает перекат чтобы вас сбросить, оно падает ничком, но у вас помеха на спасброски на попытку удержаться на существе."
        ]
    },
    {
        title: "Схватить",
        icon: "grab",
        subtitle: "Базовый боевой манёвр",
        description: "Попытка схватить существо или бороться с ним",
        reference: "Adventurer's Guide, pg. 458-459",
        bullets: [
            "Если вы хотите схватить существо или побороться с ним, вы можете использовать действие <i>Атака</i> для совершения особой рукопашной атаки, захвата. Если вы можете совершать многочисленные атаки действием <i>Атака</i>, эта атака заменяет одну из них.",
            "Цель вашего захвата должна быть не более чем на одну категорию больше вас, и она должна находиться в пределах вашей досягаемости.",
            "Используя как минимум одну свободную руку, вы пытаетесь схватить цель, совершая проверку захвата: проверку Силы (Атлетика), противопоставленную проверке Силы (Атлетика) или Ловкости (Акробатика) цели (цель сама выбирает, какую характеристику использовать).",
            "Если вы преуспеете, цель становится схваченной. В описании состояния сказано, что его оканчивает, и вы в любой момент можете отпустить цель (действие не требуется).",
            "Когда схвачено, существо может использовать своё действие чтобы попытаться выбраться. Оно должно преуспеть в спасброске Силы или Ловкости против вашей Сложности маневров",
            "Когда вы двигаетесь, вы можете перетаскивать захваченное существо с вами. Когда вы это делаете, ваша Скорость падает вдвое, если вес существа не меньше вашего возможного переносимого веса.",
            "Вы можете использовать Схватить чтобы попытаться освободить другое схваченное существо. Существо, против которого вы это применили, совершает спасбросок Силы против вашей Сложности манёвра. Если оно проваливает, захваченное существо освобождено. Дополнительно вы можете переместить освобождённое существо на 5 футов в любом направлении"
        ]
    },
    {
        title: "Нокдаун",
        icon: "tripwire",
        subtitle: "Базовый боевой манёвр",
        description: "Сбейте врага с ног",
        reference: "Adventurer's Guide, pg. 459",
        bullets: [
            "Используя действие <i>Атаки</i> вы можете совершить специальню атаку ближнего боя чтобы сбить существо с ног. Если вы можете совершить несколько действий Атаки, это действие заменяет одно из них.",
            "Цель должна быть не более чем на одну категорию больше вас и должна быть досягаема.",
            "Цель совершает спасбросок Силы против вашей Сложности манёвра",
            "На провал, вы наносите базовый урон и сбиваете цель с ног."
        ]
    },
    {
        title: "Протолкнутся",
        icon: "bulldozer",
        subtitle: "Базовый боевой манёвр",
        description: "Используйте действие или бонусное действие чтобы протолкнутся через врага",
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
        title: "Толкнуть",
        icon: "hand",
        subtitle: "Базовый боевой манёвр",
        description: "Толкните существо, чтобы сбить его с ног или оттолкнуть от себя",
        reference: "Adventurer's Guide, pg. 459",
        bullets: [
            "При помощи действия Атака совершить особую рукопашную атаку, чтобы или сбить цель с ног, или оттолкнуть от себя. Если вы можете совершать многочисленные атаки действием Атака, эта атака может заменить одну из них.",
            "Цель вашего толкания должна быть не более чем на одну категорию больше вас, и она должна находиться в пределах вашей досягаемости.",
            "Цель совершает спасбросок Силы против вашей Сложности манёвра",
            "На провал, вы наносите базовый урон и отталкиваете цель на количество футов равное 5 + 5 за каждые 5 пунктов на которое провалило спасбросок. Вы можете оттолкнуть существо в любом направлении от вас (в сторону, вперёд, диагонально).",
            "Существо, которое столкнули с обрыва, срывается с того места, на котором оно стояло — оно не получает никаких спасбросков или проверок способности схватиться за что-то, чтобы не упасть вниз."
        ]
    },
    {
        title: "Наложить заклинание",
        icon: "magic-swirl",
        subtitle: "Время каста - 1 действие",
        description: "Наложите заклинание за время 1 действи",
        reference: "Adventurer's Guide, pg. 442, 491.",
        bullets: [
            "You can't cast a spell with your action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ]
    },
    {
        title: "Рывок",
        icon: "sprint",
        subtitle: "Удваивает скорость движения",
        description: "До конца текущего хода ваша скорость удваивается",
        reference: "Adventurer's Guide, pg. 442",
        bullets: [
            "Если вы совершаете действие Рывок, вы получаете дополнительное перемещение в текущем ходу, равное вашей скорости после применения всех модификаторов."
        ]
    },
    {
        title: "Разрыв дистанции",
        icon: "journey",
        subtitle: "Разорвите дистанцию ближнего боя",
        description: "Попытка высвобождения из захвата или от оков",
        reference: "Adventurer's Guide, pg. 442",
        bullets: [
            "Высвобождение не провоцирует вражеские атаки до конца хода."
        ]
    },
    {
        title: "Уворот",
        icon: "aura",
        subtitle: "Повышает защиту",
        description: "Сфокусируйтесь на увороте от атак",
        reference: "Adventurer's Guide, pg. 442",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Помощь",
        icon: "telepathy",
        subtitle: "Помочь союзнику",
        description: "Помочь союзнику в атаке или проверке способности",
        reference: "Adventurer's Guide, pg. 442",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "Спрятаться",
        icon: "hood",
        subtitle: "Тс-с-с",
        description: "Попытка спрятаться",
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
        title: "Готовность",
        icon: "stopwatch",
        subtitle: "Выберите условие и действие",
        description: "Выберите условие и ответное действие",
        reference: "Adventurer's Guide, pg. 443",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Поиск",
        icon: "magnifying-glass",
        subtitle: "Внимательно ищите",
        description: "Направьте всю вашу внимательность на поиск",
        reference: "Adventurer's Guide, pg. 443",
        bullets: [
            "В зависимости от цели вашего поиска, ДМ может вынудить вас совершить спасбросок Мудрости (Проницательность) либо Интеллекта (Анализ)."
        ]
    },
    {
        title: "Спринт",
        icon: "sprint",
        subtitle: "До 4х скорости",
        description: "Бегите в 4 раза быстрее",
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
        title: "Используйте объект",
        icon: "snatch",
        subtitle: "Взаимодействуйте, используйте специальные способности",
        description: "Взаимодействуйте, используйте специальные способности",
        reference: "Adventurer's Guide, pg. 444",
        bullets: [
            "Вы можете взаимодействовать с одним объектом бесплатно во время вашего хода (к примеру, достать оружие либо открыть дверь). Если вы хотите взаимодейстовать со вторым объектом, используйте это действие.",
            "Когда объект требует использования действия (стабилизация или использование зелья), вы также используете это действие."
        ]
    },
    {
        title: "Используйте щит",
        icon: "round-shield",
        subtitle: "Экипируйте или снимите щит",
        description: "Экипируйте или снимите щит",
        reference: "Adventurer's Guide, pg. 320",
        bullets: [
            "Щит всегда требует действия чтобы его экипировать или снять.",
            "Броня требует нескольких минут чтобы экипировать или снять."
        ]
    },
    {
        title: "Используйте классовую способность",
        icon: "embrassed-energy",
        subtitle: "Некоторые способности используют действие",
        description: "Используйте расовую либо классовую способность, что требует действия",
        reference: "Посмотрите страницу класса для большей информации.",
        bullets: [

        ]
    },
    {
        title: "Стабилизируйте существо",
        icon: "first-aid",
        subtitle: "Окажите первую помощь умирающему существу",
        description: "Избавьте умирающее существо от необходимости совершать спасброски от смерти",
        reference: "Adventurer's Guide, pg. 449.",
        bullets: [
            "Совершите бросок Мудрости (Медицина) со сложностью 10",
            "На успех, существо стабильно и более не нуждается в пробрасывании спасбросков от смерти",
            "Стабильное существо восстанавливает 1 очко жизни после 1к4 часов"
        ]
    },
    {
        title: "Импровизируйте",
        icon: "juggler",
        subtitle: "Любое действие не в списке",
        description: "Любое действие, которое вы можете вообразить",
        reference: "Adventurer's Guide, pg. 442.",
        bullets: [
            "Когда вы описываете действие, которое не определено в правилах, ДМ говорит вам, какие действия возможны и какие броски вам следует совершить, если таковы нужны, чтобы определить успех или провал."
        ]
    }
]
