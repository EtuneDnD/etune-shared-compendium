class EtuneSharedCompendium {
    static ID = 'etune-shared-compendium';

    static log(force, ...args) {
        const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugValue(this.ID);

        if (shouldLog) {
            console.log(this.ID, '|', ...args);
        }
    }

    /* static _getSceneControlButtons(buttons) {        
		if (!game.user.isGM) return;
        
        buttons.push({
            name: EtuneSharedCompendium.ID,
            title: game.i18n.localize('EtuneSharedCompendium.ControlTitle'),
            icon: "fab fa-git-alt",
            layer: "specials",
            visible: true,
            activeTool: "git-action",
            tools: [ {
                icon: "fas fa-upload",
                name: "git-push",
                title: game.i18n.localize('EtuneSharedCompendium.Upload'),
                button: true,
                visible: true,
                onClick: () => {
                    EtuneSharedCompendiumLogic._callServerPush();
                    ui.notifications.info(game.i18n.format("EtuneSharedCompendium.NotificationPush"));
                }
            },
            {
                icon: "fas fa-download",
                name: "git-pull",
                title: game.i18n.localize('EtuneSharedCompendium.Download'),
                button: true,
                visible: true,
                onClick: () => {
                    EtuneSharedCompendiumLogic._callServerPull();
                    ui.notifications.info(game.i18n.format("EtuneSharedCompendium.NotificationPull"));
                }
            }
            ]
        });
    } */

    static _inject(compendium, html) {        
		if (!game.user.isGM) return;
        console.log("ETUNE GIT RENDERING");
        let header = html.find(`[class="window-header flexrow draggable"]`)
        header.append("<button type='button' class='todo-list-icon-button'><i class='fas fa-download'></i></button>");

        html.on('click', '.todo-list-icon-button', (event) => {
            console.log(true, 'Button Clicked!');
          });
    }

    static _inject2(compendium, buttons) {        
		if (!game.user.isGM) return;
        if (compendium.title != "Etune actors") return;
        buttons.unshift(
            {
                "label": "Update Etune",
                "class": "text",
                "icon": "fas fa-download",
                "onclick": async () => {
                    console.log(true, 'Button Clicked!');
                    const actor = await Actor.create({
                        name: "Berkana",
                        type: "character",
                        img: "systems/dnd5e/tokens/heroes/RangerBow.webp",
                        data: {
                            abilities: {
                                str: {
                                    value: 18,
                                    proficient: 1,
                                    bonuses: {
                                        check: "",
                                        save: ""
                                    }
                                },
                                dex: {
                                    value: 18,
                                    proficient: 1,
                                    bonuses: {
                                        check: "",
                                        save: ""
                                    }
                                },
                                con: {
                                    value: 14,
                                    proficient: 0,
                                    bonuses: {
                                        check: "",
                                        save: ""
                                    }
                                },
                                int: {
                                    value: 14,
                                    proficient: 0,
                                    bonuses: {
                                        check: "",
                                        save: ""
                                    }
                                },
                                wis: {
                                    value: 18,
                                    proficient: 0,
                                    bonuses: {
                                        check: "",
                                        save: ""
                                    }
                                },
                                cha: {
                                    value: 15,
                                    proficient: 0,
                                    bonuses: {
                                        check: "",
                                        save: ""
                                    }
                                }
                            },
                            attributes: {
                                ac: {
                                    flat: null,
                                    calc: "default",
                                    formula: ""
                                },
                                hp: {
                                    value: 37,
                                    min: 0,
                                    max: 37,
                                    temp: null,
                                    tempmax: null
                                },
                                init: {
                                    value: 0,
                                    bonus: 0
                                },
                                movement: {
                                    burrow: null,
                                    climb: null,
                                    fly: null,
                                    swim: null,
                                    walk: 30,
                                    units: "ft",
                                    hover: false
                                },
                                attunement: {
                                    max: 3
                                },
                                senses: {
                                    darkvision: 60,
                                    blindsight: 0,
                                    tremorsense: 0,
                                    truesight: 0,
                                    units: "ft",
                                    special: ""
                                },
                                spellcasting: "wis",
                                death: {
                                    success: 0,
                                    failure: 0
                                },
                                exhaustion: 0,
                                inspiration: false,
                                prof: 2
                            },
                            details: {
                                biography: {
                                    value: "",
                                    public: ""
                                },
                                alignment: "",
                                race: "Half-Elf",
                                background: "",
                                originalClass: "ih3u6BghcHjntgXJ",
                                xp: {
                                    value: 4475,
                                    min: 0,
                                    max: 6500,
                                    pct: 68.84615384615384
                                },
                                appearance: "",
                                trait: "Me siento más cómo con los animales que con las personas",
                                ideal: "La vida es como las estaciones, un perpetuo cambio, y debemos cambiar con ella (Caótico)",
                                bond: "Si hieres a la naturaleza virgen de mi hogar, me estas hiriendo a mí.",
                                flaw: "Estoy demasiado enamorada de la cerveza, el vino y otras bebidas espirituosas.",
                                maxPreparedSpells: null,
                                gender: "",
                                age: "",
                                height: "",
                                weight: "",
                                eyes: "",
                                skin: "",
                                hair: "",
                                notes1name: "",
                                notes2name: "",
                                notes3name: "",
                                notes4name: ""
                            },
                            traits: {
                                size: "med",
                                di: {
                                    value: [],
                                    custom: ""
                                },
                                dr: {
                                    value: [],
                                    custom: ""
                                },
                                dv: {
                                    value: [],
                                    custom: ""
                                },
                                ci: {
                                    value: [],
                                    custom: ""
                                },
                                languages: {
                                    value: ["common", "elvish", "gnomish"],
                                    custom: ""
                                },
                                weaponProf: {
                                    value: ["sim", "mar"],
                                    custom: ""
                                },
                                armorProf: {
                                    value: ["lgt", "med", "shl"],
                                    custom: ""
                                },
                                toolProf: {
                                    value: [],
                                    custom: ""
                                }
                            },
                            currency: {
                                pp: 0,
                                gp: 0,
                                ep: 0,
                                sp: 0,
                                cp: 0
                            },
                            skills: {
                                acr: {
                                    value: 1,
                                    ability: "dex",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                ani: {
                                    value: 1,
                                    ability: "wis",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                arc: {
                                    value: 0,
                                    ability: "int",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                ath: {
                                    value: 1,
                                    ability: "str",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                dec: {
                                    value: 0,
                                    ability: "cha",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                his: {
                                    value: 0,
                                    ability: "int",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                ins: {
                                    value: 0,
                                    ability: "wis",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                itm: {
                                    value: 0,
                                    ability: "cha",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                inv: {
                                    value: 0,
                                    ability: "int",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                med: {
                                    value: 0,
                                    ability: "wis",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                nat: {
                                    value: 0,
                                    ability: "int",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                prc: {
                                    value: 1,
                                    ability: "wis",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                prf: {
                                    value: 0,
                                    ability: "cha",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                per: {
                                    value: 0,
                                    ability: "cha",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                rel: {
                                    value: 0,
                                    ability: "int",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                slt: {
                                    value: 0,
                                    ability: "dex",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                ste: {
                                    value: 1,
                                    ability: "dex",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                },
                                sur: {
                                    value: 1,
                                    ability: "wis",
                                    bonuses: {
                                        check: "",
                                        passive: ""
                                    }
                                }
                            },
                            spells: {
                                spell1: {
                                    value: 3,
                                    override: 3,
                                    max: 3
                                },
                                spell2: {
                                    value: 0,
                                    override: null
                                },
                                spell3: {
                                    value: 0,
                                    override: null
                                },
                                spell4: {
                                    value: 0,
                                    override: null
                                },
                                spell5: {
                                    value: 0,
                                    override: null
                                },
                                spell6: {
                                    value: 0,
                                    override: null
                                },
                                spell7: {
                                    value: 0,
                                    override: null
                                },
                                spell8: {
                                    value: 0,
                                    override: null
                                },
                                spell9: {
                                    value: 0,
                                    override: null
                                },
                                pact: {
                                    value: 0,
                                    override: null
                                }
                            },
                            bonuses: {
                                mwak: {
                                    attack: "",
                                    damage: ""
                                },
                                rwak: {
                                    attack: "",
                                    damage: ""
                                },
                                msak: {
                                    attack: "",
                                    damage: ""
                                },
                                rsak: {
                                    attack: "",
                                    damage: ""
                                },
                                abilities: {
                                    check: "",
                                    save: "",
                                    skill: ""
                                },
                                spell: {
                                    dc: ""
                                }
                            },
                            resources: {
                                primary: {
                                    value: 4,
                                    max: 6,
                                    sr: false,
                                    lr: false,
                                    label: "Mana"
                                },
                                secondary: {
                                    value: null,
                                    max: null,
                                    sr: false,
                                    lr: false,
                                    label: ""
                                },
                                tertiary: {
                                    value: null,
                                    max: null,
                                    sr: false,
                                    lr: false,
                                    label: ""
                                }
                            }
                        },
                        token: {
                            name: "Berkana",
                            img: "systems/dnd5e/tokens/heroes/RangerBow.webp",
                            displayName: 30,
                            actorLink: true,
                            width: 1,
                            height: 1,
                            scale: 1,
                            mirrorX: false,
                            mirrorY: false,
                            lockRotation: false,
                            rotation: 0,
                            alpha: 1,
                            vision: true,
                            dimSight: 30,
                            brightSight: 0,
                            sightAngle: 0,
                            light: {
                                alpha: 0.5,
                                angle: 0,
                                bright: 0,
                                coloration: 1,
                                dim: 0,
                                gradual: true,
                                luminosity: 0.5,
                                saturation: 0,
                                contrast: 0,
                                shadows: 0,
                                animation: {
                                    speed: 5,
                                    intensity: 5,
                                    reverse: false
                                },
                                darkness: {
                                    min: 0,
                                    max: 1
                                },
                                color: null
                            },
                            disposition: 1,
                            displayBars: 30,
                            bar1: {
                                attribute: "attributes.hp"
                            },
                            bar2: {
                                attribute: "resources.primary"
                            },
                            flags: {
                                "monks-tokenbar": {
                                    include: "default"
                                },
                                "perfect-vision": {
                                    visionRules: "default",
                                    monoVisionColor: "",
                                    sightLimit: null,
                                    light: {}
                                },
                                core: {
                                    priority: null
                                },
                                "wall-height": {
                                    tokenHeight: 0
                                },
                                tagger: {
                                    tags: ""
                                },
                                splatter: {
                                    bloodColor: ""
                                },
                                "token-auras": {
                                    aura1: {
                                        permission: "all",
                                        colour: "#ffffff",
                                        opacity: 0.5,
                                        distance: null,
                                        square: false
                                    },
                                    aura2: {
                                        permission: "all",
                                        colour: "#ffffff",
                                        opacity: 0.5,
                                        distance: null,
                                        square: false
                                    }
                                }
                            },
                            randomImg: false,
                            tint: null
                        },
                        items: [
                            {
                                _id: "ih3u6BghcHjntgXJ",
                                name: "Ranger",
                                type: "class",
                                img: "icons/weapons/bows/shortbow-recurve-yellow.webp",
                                data: {
                                    description: {
                                        value: '<div class="mb-2 ve-flex-col"><table class="cls-tbl shadow-big w-100 mb-3">\n\t\t\t<tbody>\n\t\t\t<tr><th class="border" colspan="15"></th></tr>\n\t\t\t\n\t\t\t<tr>\n\t\t\t\t<th colspan="3"></th>\n\t\t\t\t<th colspan="1"></th><th class="cls-tbl__col-group" colspan="5">Spell Slots per Spell Level</th>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<th class="cls-tbl__col-level">Level</th>\n\t\t\t\t<th class="cls-tbl__col-prof-bonus">Proficiency Bonus</th>\n\t\t\t\t<th>Features</th>\n\t\t\t\t<th class="cls-tbl__col-generic-center"><div class="cls__squash_header"><a href="https://5etools-mirror-1.github.io/spells.html#blankhash,flstclass:ranger=1">Spells Known</a></div></th><th class="cls-tbl__col-generic-center"><div class="cls__squash_header"><a href="https://5etools-mirror-1.github.io/spells.html#blankhash,flstlevel:1=1,flstclass:ranger=1">1st</a></div></th><th class="cls-tbl__col-generic-center"><div class="cls__squash_header"><a href="https://5etools-mirror-1.github.io/spells.html#blankhash,flstlevel:2=1,flstclass:ranger=1">2nd</a></div></th><th class="cls-tbl__col-generic-center"><div class="cls__squash_header"><a href="https://5etools-mirror-1.github.io/spells.html#blankhash,flstlevel:3=1,flstclass:ranger=1">3rd</a></div></th><th class="cls-tbl__col-generic-center"><div class="cls__squash_header"><a href="https://5etools-mirror-1.github.io/spells.html#blankhash,flstlevel:4=1,flstclass:ranger=1">4th</a></div></th><th class="cls-tbl__col-generic-center"><div class="cls__squash_header"><a href="https://5etools-mirror-1.github.io/spells.html#blankhash,flstlevel:5=1,flstclass:ranger=1">5th</a></div></th>\n\t\t\t</tr>\n\t\t\t<tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">1st</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+2</td>\n\t\t\t\t<td><div class="inline-block">Favored Enemy<span class="mr-1">,</span></div><div class="inline-block">Favored Foe<span class="mr-1">,</span></div><div class="inline-block">Favored Foe<span class="mr-1">,</span></div><div class="inline-block">Natural Explorer<span class="mr-1">,</span></div><div class="inline-block">Deft Explorer<span class="mr-1">,</span></div><div class="inline-block">Deft Explorer</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">2nd</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+2</td>\n\t\t\t\t<td><div class="inline-block">Martial Versatility<span class="mr-1">,</span></div><div class="inline-block">Spellcasting<span class="mr-1">,</span></div><div class="inline-block">Spell Versatility<span class="mr-1">,</span></div><div class="inline-block">Spellcasting Focus<span class="mr-1">,</span></div><div class="inline-block">Spellcasting Focus</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">2</td><td class="cls-tbl__col-generic-center">2</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">3rd</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+2</td>\n\t\t\t\t<td><div class="inline-block">Ranger Archetype<span class="mr-1">,</span></div><div class="inline-block">Primeval Awareness<span class="mr-1">,</span></div><div class="inline-block">Primal Awareness<span class="mr-1">,</span></div><div class="inline-block">Primal Awareness</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">4th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+2</td>\n\t\t\t\t<td><div class="inline-block">Ability Score Improvement<span class="mr-1">,</span></div><div class="inline-block">Proficiency Versatility<span class="mr-1">,</span></div><div class="inline-block">Martial Versatility</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">5th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+3</td>\n\t\t\t\t<td><div class="inline-block">Extra Attack</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">2</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">6th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+3</td>\n\t\t\t\t<td><div class="inline-block">Favored Enemy and Natural Explorer improvements<span class="mr-1">,</span></div><div class="inline-block">Deft Explorer Improvement</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">2</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">7th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+3</td>\n\t\t\t\t<td><div class="inline-block">Ranger Archetype feature</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">5</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">8th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+3</td>\n\t\t\t\t<td><div class="inline-block">Ability Score Improvement<span class="mr-1">,</span></div><div class="inline-block">Proficiency Versatility<span class="mr-1">,</span></div><div class="inline-block">Land\'s Stride</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">5</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">9th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+4</td>\n\t\t\t\t<td>—</td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">6</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">2</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">10th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+4</td>\n\t\t\t\t<td><div class="inline-block">Hide in Plain Sight<span class="mr-1">,</span></div><div class="inline-block">Fade Away<span class="mr-1">,</span></div><div class="inline-block">Nature\'s Veil<span class="mr-1">,</span></div><div class="inline-block">Natural Explorer improvement<span class="mr-1">,</span></div><div class="inline-block">Deft Explorer Improvement</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">6</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">2</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">11th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+4</td>\n\t\t\t\t<td><div class="inline-block">Ranger Archetype feature</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">7</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">12th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+4</td>\n\t\t\t\t<td><div class="inline-block">Ability Score Improvement<span class="mr-1">,</span></div><div class="inline-block">Proficiency Versatility</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">7</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">—</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">13th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+5</td>\n\t\t\t\t<td>—</td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">8</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">1</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">14th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+5</td>\n\t\t\t\t<td><div class="inline-block">Vanish<span class="mr-1">,</span></div><div class="inline-block">Favored Enemy improvement</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">8</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">1</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">15th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+5</td>\n\t\t\t\t<td><div class="inline-block">Ranger Archetype feature</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">9</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">2</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">16th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+5</td>\n\t\t\t\t<td><div class="inline-block">Ability Score Improvement<span class="mr-1">,</span></div><div class="inline-block">Proficiency Versatility</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">9</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">2</td><td class="cls-tbl__col-generic-center">—</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">17th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+6</td>\n\t\t\t\t<td>—</td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">10</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">1</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">18th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+6</td>\n\t\t\t\t<td><div class="inline-block">Feral Senses</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">10</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">1</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">19th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+6</td>\n\t\t\t\t<td><div class="inline-block">Ability Score Improvement<span class="mr-1">,</span></div><div class="inline-block">Proficiency Versatility</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">11</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">2</td>\n\t\t\t</tr><tr class="cls-tbl__stripe-odd">\n\t\t\t\t<td class="cls-tbl__col-level">20th</td>\n\t\t\t\t<td class="cls-tbl__col-prof-bonus">+6</td>\n\t\t\t\t<td><div class="inline-block">Foe Slayer</div></td>\n\t\t\t\t<td class="cls-tbl__col-generic-center">11</td><td class="cls-tbl__col-generic-center">4</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">3</td><td class="cls-tbl__col-generic-center">2</td>\n\t\t\t</tr>\n\t\t\t<tr><th class="border" colspan="15"></th></tr>\n\t\t\t</tbody>\n\t\t</table><div class="rd__b  rd__b--0"><p>Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are planning a raid on a nearby farm. Clutching a shortsword in each hand, he becomes a whirlwind of steel, cutting down one enemy after another.</p><p>After tumbling away from a cone of freezing air, an elf finds her feet and draws back her bow to loose an arrow at the white dragon. Shrugging off the wave of fear that emanates from the dragon like the cold of its breath, she sends one arrow after another to find the gaps between the dragon\'s thick scales.</p><p>Holding his hand high, a half-elf whistles to the hawk that circles high above him, calling the bird back to his side. Whispering instructions in Elvish, he points to the owlbear he\'s been tracking and sends the hawk to distract the creature while he readies his bow.</p><p>Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.</p><div class="rd__b  rd__b--1"><h2 class="rd__h rd__h--1" data-title-index="37"> <span class="entry-title-inner">Deadly Hunters</span><span class="ve-flex-vh-center"><span class="rd__h-toggle ml-2 clickable" data-rd-h-toggle-button="true">[–]</span></span></h2> <p>Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.</p><p>Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature\'s power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger\'s talents and abilities are honed with deadly focus on the grim task of protecting the borderlands.</p></div><div class="rd__b  rd__b--1"><h2 class="rd__h rd__h--1" data-title-index="38"> <span class="entry-title-inner">Independent Adventurers</span><span class="ve-flex-vh-center"><span class="rd__h-toggle ml-2 clickable" data-rd-h-toggle-button="true">[–]</span></span></h2> <p>Though a ranger might make a living as a hunter, a guide, or a tracker, a ranger\'s true calling is to defend the outskirts of civilization from the ravages of monsters and humanoid hordes that press in from the wild. In some places, rangers gather in secretive orders or join forces with druidic circles. Many rangers, though, are independent almost to a fault, knowing that, when a dragon or a band of orcs attacks, a ranger might be the first—and possibly the last—line of defense.</p><p>This fierce independence makes rangers well suited to adventuring, since they are accustomed to life far from the comforts of a dry bed and a hot bath. Faced with city-bred adventurers who grouse and whine about the hardships of the wild, rangers respond with some mixture of amusement, frustration, and compassion. But they quickly learn that other adventurers who can carry their own weight in a fight against civilization\'s foes are worth any extra burden. Coddled city folk might not know how to feed themselves or find fresh water in the wild, but they make up for it in other ways.</p></div><div class="rd__b  rd__b--1"><h2 class="rd__h rd__h--1" data-title-index="39"> <span class="entry-title-inner">Creating a Ranger</span><span class="ve-flex-vh-center"><span class="rd__h-toggle ml-2 clickable" data-rd-h-toggle-button="true">[–]</span></span></h2> <p>As you create your ranger character, consider the nature of the training that gave you your particular capabilities. Did you train with a single mentor, wandering the wilds together until you mastered the ranger\'s ways? Did you leave your apprenticeship, or was your mentor slain—perhaps by the same kind of monster that became your favored enemy? Or perhaps you learned your skills as part of a band of rangers affiliated with a druidic circle, trained in mystic paths as well as wilderness lore. You might be self-taught, a recluse who learned combat skills, tracking, and even a magical connection to nature through the necessity of surviving in the wilds.</p><p>What\'s the source of your particular hatred of a certain kind of enemy? Did a monster kill someone you loved or destroy your home village? Or did you see too much of the destruction these monsters cause and commit yourself to reining in their depredations? Is your adventuring career a continuation of your work in protecting the borderlands, or a significant change? What made you join up with a band of adventurers? Do you find it challenging to teach new allies the ways of the wild, or do you welcome the relief from solitude that they offer?</p><div class="rd__b  rd__b--2"><h3 class="rd__h rd__h--2" data-title-index="40"> <span class="entry-title-inner">Quick Build</span><span class="ve-flex-vh-center"><span class="rd__h-toggle ml-2 clickable" data-rd-h-toggle-button="true">[–]</span></span></h3> <p>You can make a ranger quickly by following these suggestions. First, make Dexterity your highest ability score, followed by Wisdom. (Some rangers who focus on two-weapon fighting make Strength higher than Dexterity.) Second, choose the <a href="https://5etools-mirror-1.github.io/backgrounds.html#outlander_phb" data-vet-page="backgrounds.html" data-vet-source="PHB" data-vet-hash="outlander_phb">outlander</a> background.</p></div></div></div></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    identifier: "ranger",
                                    levels: 4,
                                    hitDice: "d10",
                                    hitDiceUsed: 0,
                                    advancement: [
                                        {
                                            _id: "oi2ynskj9sv53pys",
                                            type: "ItemGrant",
                                            level: 1,
                                            title: "Features",
                                            icon: "icons/weapons/bows/shortbow-recurve-yellow.webp",
                                            configuration: {
                                                items: []
                                            },
                                            value: {
                                                added: {
                                                    M7yq0zvPXr9gPIvy: "",
                                                    cjcZxHuWjBjzi6fB: "",
                                                    bqf6AesEaCYHQgYq: "",
                                                    QXA4yLCmqq9D1qMp: ""
                                                }
                                            }
                                        },
                                        {
                                            _id: "6bg250beofp0cowj",
                                            type: "ItemGrant",
                                            level: 2,
                                            title: "Features",
                                            icon: "icons/weapons/bows/shortbow-recurve-yellow.webp",
                                            configuration: {
                                                items: []
                                            },
                                            value: {
                                                added: {
                                                    xWuE24Dl0a99n5S6: "",
                                                    w30ihIDOX6prVK6d: "",
                                                    "6KYRoQvQzvFShKP4": ""
                                                }
                                            }
                                        },
                                        {
                                            _id: "gecrt4zwd2dz4vlm",
                                            type: "ItemGrant",
                                            level: 3,
                                            title: "Features",
                                            icon: "icons/weapons/bows/shortbow-recurve-yellow.webp",
                                            configuration: {
                                                items: []
                                            },
                                            value: {
                                                added: {
                                                    r9QHxIlBBVVzKAZ2: "",
                                                    xSXCcQG3y6fG5ENG: ""
                                                }
                                            }
                                        },
                                        {
                                            _id: "9hg3u4qwo7gx2a2s",
                                            type: "ItemGrant",
                                            level: 4,
                                            title: "Features",
                                            icon: "icons/weapons/bows/shortbow-recurve-yellow.webp",
                                            configuration: {
                                                items: []
                                            },
                                            value: {
                                                added: {
                                                    GI1YeN577Ap70Gac: ""
                                                }
                                            }
                                        }
                                    ],
                                    saves: ["str", "dex"],
                                    skills: {
                                        number: 3,
                                        choices: [
                                            "ani",
                                            "ath",
                                            "ins",
                                            "inv",
                                            "nat",
                                            "prc",
                                            "ste",
                                            "sur"
                                        ],
                                        value: []
                                    },
                                    spellcasting: {
                                        progression: "half",
                                        ability: "wis"
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 20001,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "classes.html",
                                        source: "PHB",
                                        hash: "ranger_phb",
                                        sourceSubclass: "PHB",
                                        hashSubclass:
                                            "ranger_phb,state:sub-beast-master-phb=b1",
                                        propDroppable: "subclass",
                                        filterValues: {
                                            Source: {
                                                TCE: 1,
                                                ERLW: 1,
                                                UA2020SubclassesPt3: 0,
                                                UAArtificerRevisited: 0,
                                                UAClassFeatureVariants: 0,
                                                UAArtificer: 0,
                                                PHB: 1,
                                                XGE: 1,
                                                UABarbarianPrimalPaths: 0,
                                                UARevisedSubclasses: 0,
                                                SCAG: 1,
                                                UA2020SubclassesPt1: 0,
                                                UA2022GiantOptions: 0,
                                                UABarbarianAndMonk: 0,
                                                UA2020SubclassesPt2: 0,
                                                UABardAndPaladin: 0,
                                                UABardBardColleges: 0,
                                                UAKitsOfOld: 0,
                                                VRGR: 1,
                                                UA2020SubclassesPt4: 0,
                                                UATheRangerRevised: 0,
                                                UA2021MagesOfStrixhaven: 0,
                                                BAEQ: 1,
                                                PSA: 0,
                                                UAModernMagic: 0,
                                                DMG: 1,
                                                UA2022WondersOfTheMultiverse: 0,
                                                UAClericDivineDomains: 0,
                                                GGR: 1,
                                                UAOrderDomain: 0,
                                                UAClericDruidWizard: 0,
                                                TheDemiDragon: 1,
                                                UADruid: 0,
                                                UAThreeSubclasses: 0,
                                                UARevisedClassOptions: 0,
                                                UASidekicks: 0,
                                                UALightDarkUnderdark: 0,
                                                UAWaterborneAdventures: 0,
                                                UAFighter: 0,
                                                EGW: 1,
                                                UAGothicHeroes: 0,
                                                UA2020PsionicOptionsRevisited: 0,
                                                UAFighterRogueWizard: 0,
                                                UAFighterRangerRogue: 0,
                                                FTD: 1,
                                                UA2020SubclassesPt5: 0,
                                                UAATrioOfSubclasses: 0,
                                                UAMonk: 0,
                                                UATheMysticClass: 0,
                                                UAPaladin: 0,
                                                MOT: 1,
                                                UAPrestigeClassesRunMagic: 0,
                                                UARangerAndRogue: 0,
                                                UARanger: 0,
                                                UAModifyingClasses: 0,
                                                UA2020SubclassesRevisited: 0,
                                                UASorcererAndWarlock: 0,
                                                UASorcerer: 0,
                                                UAGiantSoulSorcerer: 0,
                                                UA2022HeroesOfKrynn: 0,
                                                PSK: 0,
                                                UAWarlockAndWizard: 0,
                                                UATheFaithful: 0,
                                                UAEberron: 0,
                                                UAWizardRevisited: 0,
                                                _isActive: true,
                                                _totals: {
                                                    yes: 13,
                                                    no: 0,
                                                    ignored: 52
                                                },
                                                _combineBlue: "or",
                                                _combineRed: "or"
                                            },
                                            Miscellaneous: {
                                                Reprinted: 2,
                                                Sidekick: 2,
                                                SRD: 0,
                                                "Basic Rules": 0,
                                                _isActive: true,
                                                _totals: {
                                                    yes: 0,
                                                    no: 2,
                                                    ignored: 2
                                                },
                                                _combineBlue: "or",
                                                _combineRed: "or"
                                            },
                                            "Other/Text Options": {
                                                isDisplayClassIfSubclassActive: false,
                                                isClassFeatureVariant: true,
                                                _isActive: false
                                            }
                                        },
                                        isPrimaryClass: true,
                                        isDirectImport: true
                                    }
                                }
                            },
                            {
                                _id: "FLxXUYvgk5fV7CJ6",
                                name: "Beast Master",
                                type: "subclass",
                                img: "icons/weapons/bows/shortbow-recurve-yellow.webp",
                                data: {
                                    description: {
                                        value: '<div class="mb-2 ve-flex-col"><div class="rd__b  rd__b--1"><p>The Beast Master archetype embodies a friendship between the civilized races and the beasts of the world. United in focus, beast and ranger work as one to fight the monstrous foes that threaten civilization and the wilderness alike. Emulating the Beast Master archetype means committing yourself to this ideal, working in partnership with an animal as its companion and friend.</p></div></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    identifier: "beast-master",
                                    classIdentifier: "ranger",
                                    advancement: [
                                        {
                                            _id: "bhza3jsu4nb44b5q",
                                            type: "ItemGrant",
                                            level: 3,
                                            title: "Features",
                                            icon: "icons/weapons/bows/shortbow-recurve-yellow.webp",
                                            configuration: {
                                                items: []
                                            },
                                            value: {
                                                added: {
                                                    "7niY6ygVzZosPkyM": "",
                                                    A6es2sKAEiIYdNRu: ""
                                                }
                                            }
                                        }
                                    ],
                                    spellcasting: {
                                        progression: "none",
                                        ability: ""
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 20001,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "classes.html",
                                        source: "PHB",
                                        hash: "ranger_phb",
                                        sourceSubclass: "PHB",
                                        hashSubclass:
                                            "ranger_phb,state:sub-beast-master-phb=b1",
                                        propDroppable: "subclass",
                                        filterValues: {
                                            Source: {
                                                TCE: 1,
                                                ERLW: 1,
                                                UA2020SubclassesPt3: 0,
                                                UAArtificerRevisited: 0,
                                                UAClassFeatureVariants: 0,
                                                UAArtificer: 0,
                                                PHB: 1,
                                                XGE: 1,
                                                UABarbarianPrimalPaths: 0,
                                                UARevisedSubclasses: 0,
                                                SCAG: 1,
                                                UA2020SubclassesPt1: 0,
                                                UA2022GiantOptions: 0,
                                                UABarbarianAndMonk: 0,
                                                UA2020SubclassesPt2: 0,
                                                UABardAndPaladin: 0,
                                                UABardBardColleges: 0,
                                                UAKitsOfOld: 0,
                                                VRGR: 1,
                                                UA2020SubclassesPt4: 0,
                                                UATheRangerRevised: 0,
                                                UA2021MagesOfStrixhaven: 0,
                                                BAEQ: 1,
                                                PSA: 0,
                                                UAModernMagic: 0,
                                                DMG: 1,
                                                UA2022WondersOfTheMultiverse: 0,
                                                UAClericDivineDomains: 0,
                                                GGR: 1,
                                                UAOrderDomain: 0,
                                                UAClericDruidWizard: 0,
                                                TheDemiDragon: 1,
                                                UADruid: 0,
                                                UAThreeSubclasses: 0,
                                                UARevisedClassOptions: 0,
                                                UASidekicks: 0,
                                                UALightDarkUnderdark: 0,
                                                UAWaterborneAdventures: 0,
                                                UAFighter: 0,
                                                EGW: 1,
                                                UAGothicHeroes: 0,
                                                UA2020PsionicOptionsRevisited: 0,
                                                UAFighterRogueWizard: 0,
                                                UAFighterRangerRogue: 0,
                                                FTD: 1,
                                                UA2020SubclassesPt5: 0,
                                                UAATrioOfSubclasses: 0,
                                                UAMonk: 0,
                                                UATheMysticClass: 0,
                                                UAPaladin: 0,
                                                MOT: 1,
                                                UAPrestigeClassesRunMagic: 0,
                                                UARangerAndRogue: 0,
                                                UARanger: 0,
                                                UAModifyingClasses: 0,
                                                UA2020SubclassesRevisited: 0,
                                                UASorcererAndWarlock: 0,
                                                UASorcerer: 0,
                                                UAGiantSoulSorcerer: 0,
                                                UA2022HeroesOfKrynn: 0,
                                                PSK: 0,
                                                UAWarlockAndWizard: 0,
                                                UATheFaithful: 0,
                                                UAEberron: 0,
                                                UAWizardRevisited: 0,
                                                _isActive: true,
                                                _totals: {
                                                    yes: 13,
                                                    no: 0,
                                                    ignored: 52
                                                },
                                                _combineBlue: "or",
                                                _combineRed: "or"
                                            },
                                            Miscellaneous: {
                                                Reprinted: 2,
                                                Sidekick: 2,
                                                SRD: 0,
                                                "Basic Rules": 0,
                                                _isActive: true,
                                                _totals: {
                                                    yes: 0,
                                                    no: 2,
                                                    ignored: 2
                                                },
                                                _combineBlue: "or",
                                                _combineRed: "or"
                                            },
                                            "Other/Text Options": {
                                                isDisplayClassIfSubclassActive: false,
                                                isClassFeatureVariant: true,
                                                _isActive: false
                                            }
                                        },
                                        isPrimaryClass: true,
                                        isDirectImport: true
                                    }
                                }
                            },
                            {
                                _id: "M7yq0zvPXr9gPIvy",
                                name: "Favored Enemy",
                                type: "feat",
                                img: "icons/creatures/abilities/dragon-breath-purple.webp",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--3"><p>Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.</p><div class="rd__spc-inline-post"></div><p>Choose a type of favored enemy: <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:aberration=1">aberrations</a>, <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:beast=1">beasts</a>, <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:celestial=1">celestials</a>, <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:construct=1">constructs</a>, <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:dragon=1">dragons</a>, <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:elemental=1">elementals</a>, <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:fey=1">fey</a>, <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:fiend=1">fiends</a>, <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:giant=1">giants</a>, <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:monstrosity=1">monstrosities</a>, <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:ooze=1">oozes</a>, <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:plant=1">plants</a>, or <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:undead=1">undead</a>. Alternatively, you can select two races of <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flsttype:humanoid=1">humanoid</a> (such as @creature[gnoll||gnolls] and @creature[orc||orcs]) as favored enemies.</p><p>You have advantage on Wisdom (@skill[Survival]) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.</p><p>When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.</p><p>You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: "",
                                        units: ""
                                    },
                                    target: {
                                        value: "",
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: "",
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: "",
                                    actionType: "",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    requirements: "Ranger 1",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 104,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "classfeatures.html",
                                        source: "PHB",
                                        hash: "favored%20enemy_ranger_phb_1_phb"
                                    },
                                    dnd5e: {
                                        advancementOrigin:
                                            "ih3u6BghcHjntgXJ.oi2ynskj9sv53pys"
                                    }
                                }
                            },
                            {
                                _id: "cjcZxHuWjBjzi6fB",
                                name: "Favored Foe",
                                type: "feat",
                                img: "modules/plutonium/media/icon/mighty-force.svg",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--1"><p><i>1st-level ranger @variantrule[optional class features|tce|optional feature], which replaces the Favored Enemy feature and works with the Foe Slayer feature</i></p><p>When you hit a creature with an attack roll, you can call on your mystical bond with nature to mark the target as your favored enemy for 1 minute or until you lose your concentration (as if you were concentrating on a spell).</p><p>The first time on each of your turns that you hit the favored enemy and deal damage to it, including when you mark it, you can increase that damage by [[/r 1d4]].</p><p>You can use this feature to mark a favored enemy a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</p><p>This feature\'s extra damage increases when you reach certain levels in this class: to [[/r 1d6]] at 6th level and to [[/r 1d8]] at 14th level.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "TCE",
                                    activation: {
                                        type: "special",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: 2,
                                        max: "@prof",
                                        per: "lr"
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "other",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "flat"
                                    },
                                    requirements: "Ranger 1",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 1101,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "classfeatures.html",
                                        source: "TCE",
                                        hash: "favored%20foe_ranger_phb_1_tce"
                                    },
                                    dnd5e: {
                                        advancementOrigin:
                                            "ih3u6BghcHjntgXJ.oi2ynskj9sv53pys"
                                    }
                                }
                            },
                            {
                                _id: "bqf6AesEaCYHQgYq",
                                name: "Natural Explorer",
                                type: "feat",
                                img: "icons/magic/nature/tree-roots-glow-yellow.webp",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--3"><p>You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you\'re proficient in.</p><div class="rd__spc-inline-post"></div><p>While traveling for an hour or more in your favored terrain, you gain the following benefits:</p><ul class="rd__list"><li class="rd__li ">Difficult terrain doesn\'t slow your group\'s travel.</li><li class="rd__li ">Your group can\'t become lost except by magical means.</li><li class="rd__li ">Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.</li><li class="rd__li ">If you are traveling alone, you can move stealthily at a normal pace.</li><li class="rd__li ">When you forage, you find twice as much food as you normally would.</li><li class="rd__li ">While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.</li></ul><p>You choose additional favored terrain types at 6th and 10th level.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: "",
                                        units: ""
                                    },
                                    target: {
                                        value: "",
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: "",
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: "",
                                    actionType: "",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    requirements: "Ranger 1",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 109,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "classfeatures.html",
                                        source: "PHB",
                                        hash: "natural%20explorer_ranger_phb_1_phb"
                                    },
                                    dnd5e: {
                                        advancementOrigin:
                                            "ih3u6BghcHjntgXJ.oi2ynskj9sv53pys"
                                    }
                                }
                            },
                            {
                                _id: "QXA4yLCmqq9D1qMp",
                                name: "Deft Explorer",
                                type: "feat",
                                img: "modules/plutonium/media/icon/mighty-force.svg",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--1"><p><i>1st-level ranger @variantrule[optional class features|tce|optional feature], which replaces the Natural Explorer feature</i></p><p>You are an unsurpassed explorer and survivor, both in the wilderness and in dealing with others on your travels. You gain the Canny benefit below, and you gain an additional benefit below when you reach 6th level and 10th level in this class.</p><div class="rd__b  rd__b--2"><h3 class="rd__h rd__h--2" data-title-index="41"> <span class="entry-title-inner">Canny</span><span class="ve-flex-vh-center"><span class="rd__h-toggle ml-2 clickable" data-rd-h-toggle-button="true">[–]</span></span></h3> <p>Choose one of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses the chosen skill.</p><p>You can also speak, read, and write two additional languages of your choice.</p></div></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "TCE",
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "other",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "flat"
                                    },
                                    requirements: "Ranger 1",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 103,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "classfeatures.html",
                                        source: "TCE",
                                        hash: "deft%20explorer_ranger_phb_1_tce"
                                    },
                                    dnd5e: {
                                        advancementOrigin:
                                            "ih3u6BghcHjntgXJ.oi2ynskj9sv53pys"
                                    }
                                }
                            },
                            {
                                _id: "xWuE24Dl0a99n5S6",
                                name: "Spellcasting",
                                type: "feat",
                                img: "icons/magic/nature/trap-spikes-thorns-green.webp",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--3"><p>By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See <a href="https://5etools-mirror-1.github.io/book.html#PHB,10">chapter 10</a> for the general rules of spellcasting and <a href="https://5etools-mirror-1.github.io/book.html#PHB,11">chapter 11</a> for the <a href="https://5etools-mirror-1.github.io/spells.html#blankhash,flstclass:ranger=1">ranger spell list</a>.</p><div class="rd__spc-inline-post"></div><div class="rd__b  rd__b--3"><span class="rd__h rd__h--3" data-title-index="42"> <span class="entry-title-inner">Spell Slots.</span></span> <p>The Ranger table shows how many spell slots you have to cast your <a href="https://5etools-mirror-1.github.io/spells.html#blankhash,flstclass:ranger=1">ranger spells</a> of 1st level and higher. To cast one of these spells, you must expend a slot of the spell\'s level or higher. You regain all expended spell slots when you finish a long rest.</p><div class="rd__spc-inline-post"></div><p>For example, if you know the 1st-level spell @spell[animal friendship] and have a 1st-level and a 2nd-level spell slot available, you can cast @spell[animal friendship] using either slot.</p></div><div class="rd__b  rd__b--3"><span class="rd__h rd__h--3" data-title-index="43"> <span class="entry-title-inner">Spells Known of 1st Level and Higher.</span></span> <p>You know two 1st-level spells of your choice from the ranger spell list.</p><div class="rd__spc-inline-post"></div><p>The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.</p><p>Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.</p></div><div class="rd__b  rd__b--3"><span class="rd__h rd__h--3" data-title-index="44"> <span class="entry-title-inner">Spellcasting Ability.</span></span> <p>Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.</p><div class="rd__spc-inline-post"></div><p></p><div class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Wisdom modifier</div><p></p><p></p><div class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Wisdom modifier</div><p></p></div></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    requirements: "Ranger 2",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 112,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "classfeatures.html",
                                        source: "PHB",
                                        hash: "spellcasting_ranger_phb_2_phb"
                                    },
                                    dnd5e: {
                                        advancementOrigin:
                                            "ih3u6BghcHjntgXJ.6bg250beofp0cowj"
                                    }
                                }
                            },
                            {
                                _id: "w30ihIDOX6prVK6d",
                                name: "Spellcasting Focus",
                                type: "feat",
                                img: "modules/plutonium/media/icon/mighty-force.svg",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--1"><p><i>2nd-level ranger @variantrule[optional class features|tce|optional feature]</i></p><p>You can use a @item[druidic focus|phb] as a spellcasting focus for your ranger spells. A druidic focus might be a sprig of mistletoe or holly, a wand or rod made of yew or another special wood, a staff drawn whole from a living tree, or an object incorporating feathers, fur, bones, and teeth from sacred animals.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "TCE",
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "other",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "flat"
                                    },
                                    requirements: "Ranger 2",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 113,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "classfeatures.html",
                                        source: "TCE",
                                        hash: "spellcasting%20focus_ranger_phb_2_tce"
                                    },
                                    dnd5e: {
                                        advancementOrigin:
                                            "ih3u6BghcHjntgXJ.6bg250beofp0cowj"
                                    }
                                }
                            },
                            {
                                _id: "6KYRoQvQzvFShKP4",
                                name: "Fighting Style: Archery",
                                type: "feat",
                                img: "icons/weapons/bows/shortbow-recurve-yellow.webp",
                                data: {
                                    description: {
                                        value: '<div>\n\t\t\t\t\n\t\t\t\t<div class="rd__b  rd__b--3"><p>You gain a +2 bonus to attack rolls you make with ranged weapons.</p><div class="rd__spc-inline-post"></div></div>\n\t\t\t</div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: "",
                                        units: ""
                                    },
                                    target: {
                                        value: "",
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: "",
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: "",
                                    actionType: "",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    requirements: "Ranger 2",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [
                                    {
                                        _id: "F0Bh4n8Tu1ZZnwSr",
                                        flags: {},
                                        changes: [
                                            {
                                                key: "data.bonuses.rwak.attack",
                                                mode: 2,
                                                value: "+2"
                                            }
                                        ],
                                        disabled: false,
                                        duration: {
                                            startTime: null
                                        },
                                        icon: "icons/weapons/bows/shortbow-recurve-yellow.webp",
                                        label: "Fighting Style: Archery",
                                        origin: "Item.SDsWYh0xtS6nWuH8",
                                        tint: null,
                                        transfer: true
                                    }
                                ],
                                folder: null,
                                sort: 106,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "optionalfeatures.html",
                                        source: "PHB",
                                        hash: "archery_phb"
                                    },
                                    dnd5e: {
                                        advancementOrigin:
                                            "ih3u6BghcHjntgXJ.6bg250beofp0cowj"
                                    }
                                }
                            },
                            {
                                _id: "7niY6ygVzZosPkyM",
                                name: "Ranger's Companion",
                                type: "feat",
                                img: "modules/plutonium/media/icon/mighty-force.svg",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--1"><p>You gain a beast companion that accompanies you on your adventures and is trained to fight alongside you. Choose a <a href="https://5etools-mirror-1.github.io/bestiary.html#blankhash,flstchallenge%20rating:min=&amp;0~max=&amp;1/4,flsttype:beast=1,flstsize:f=1~d=1~t=1~s=1~m=1,flstmiscellaneous:swarm=2">beast that is no larger than Medium and that has a challenge rating of 1/4 or lower</a>. Add your proficiency bonus to the beast\'s AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals its normal maximum or four times your ranger level, whichever is higher. Like any creature, the beast can spend Hit Dice during a short rest.</p><p>The beast obeys your commands as best as it can. It takes its turn on your initiative. On your turn, you can verbally command the beast where to move (no action required by you). You can use your action to verbally command it to take the @action[Attack], @action[Dash], @action[Disengage], or @action[Help] action. If you don\'t issue a command, the beast takes the @action[Dodge] action. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the @action[Attack] action.</p><p>If you are @condition[incapacitated] or absent, your beast companion acts on its own, focusing on protecting you and itself. It never requires your command to use its reaction, such as when making an opportunity attack.</p><p>While traveling through your favored terrain with only the beast, you can move stealthily at a normal pace.</p><p>If the beast dies, you can obtain another one by spending 8 hours magically bonding with another beast that isn\'t hostile to you, either the same type of beast as before or a different one.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "other",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "flat"
                                    },
                                    requirements: "Ranger 3 (Beast Master)",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 1105,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "classfeatures.html",
                                        source: "PHB",
                                        hash: "ranger's%20companion_ranger_phb_beast%20master_phb_3_phb"
                                    },
                                    dnd5e: {
                                        advancementOrigin:
                                            "FLxXUYvgk5fV7CJ6.bhza3jsu4nb44b5q"
                                    }
                                }
                            },
                            {
                                _id: "A6es2sKAEiIYdNRu",
                                name: "Primal Companion",
                                type: "feat",
                                img: "modules/plutonium/media/icon/mighty-force.svg",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--1"><p><i>3rd-level Beast Master variant feature, which replaces the Ranger\'s Companion feature</i></p><p>You magically summon a primal beast, which draws strength from your bond with nature. The beast is friendly to you and your companions and obeys your commands. Choose its stat block—@creature[Beast of the Land|TCE], @creature[Beast of the Sea|TCE], or @creature[Beast of the Sky|TCE]—which uses your proficiency bonus (PB) in several places. You also determine the kind of animal the beast is, choosing a kind appropriate for the stat block. Whatever kind you choose, the beast bears primal markings, indicating its mystical origin.</p><p>In combat, the beast acts during your turn. It can move and use its reaction on its own, but the only action it takes is the @action[Dodge] action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. You can also sacrifice one of your attacks when you take the @action[Attack] action to command the beast to take the @action[Attack] action. If you are @condition[incapacitated], the beast can take any action of its choice, not just @action[Dodge].</p><p>If the beast has died within the last hour, you can use your action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored.</p><p>When you finish a long rest, you can summon a different primal beast. The new beast appears in an unoccupied space within 5 feet of you, and you choose its stat block and appearance. If you already have a beast from this feature, it vanishes when the new beast appears. The beast also vanishes if you die.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "TCE",
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: 1,
                                        max: "1",
                                        per: "lr"
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "other",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "flat"
                                    },
                                    requirements: "Ranger 3 (Beast Master)",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 1103,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "classfeatures.html",
                                        source: "TCE",
                                        hash: "primal%20companion_ranger_phb_beast%20master_phb_3_tce"
                                    },
                                    dnd5e: {
                                        advancementOrigin:
                                            "FLxXUYvgk5fV7CJ6.bhza3jsu4nb44b5q"
                                    }
                                }
                            },
                            {
                                _id: "r9QHxIlBBVVzKAZ2",
                                name: "Primeval Awareness",
                                type: "feat",
                                img: "icons/magic/perception/eye-slit-pink.webp",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--3"><p>Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn\'t reveal the creatures\' location or number.</p><div class="rd__spc-inline-post"></div></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition:
                                            "It also expends a spell slot; the slot level dictates duration."
                                    },
                                    duration: {
                                        value: null,
                                        units: "spec"
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: null,
                                        type: "self"
                                    },
                                    range: {
                                        value: 1,
                                        long: 6,
                                        units: "mi"
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: "",
                                    actionType: "",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    requirements: "Ranger 3",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 1104,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "classfeatures.html",
                                        source: "PHB",
                                        hash: "primeval%20awareness_ranger_phb_3_phb"
                                    },
                                    dnd5e: {
                                        advancementOrigin:
                                            "ih3u6BghcHjntgXJ.gecrt4zwd2dz4vlm"
                                    }
                                }
                            },
                            {
                                _id: "xSXCcQG3y6fG5ENG",
                                name: "Primal Awareness",
                                type: "feat",
                                img: "modules/plutonium/media/icon/mighty-force.svg",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--1"><p><i>3rd-level ranger @variantrule[optional class features|tce|optional feature], which replaces the Primeval Awareness feature</i></p><p>You can focus your awareness through the interconnections of nature: you learn additional spells when you reach certain levels in this class if you don\'t already know them, as shown in the Primal Awareness Spells table. These spells don\'t count against the number of ranger spells you know.</p><table class="w-100 rd__table  stripe-odd-table"><caption>Primal Awareness Spells</caption><thead><tr><th class="col-2 text-center" data-rd-isroller="false">Ranger Level</th><th class="col-10" data-rd-isroller="false">Spell</th></tr></thead><tbody><tr><td class="col-2 text-center">3rd</td><td class="col-10">@spell[speak with animals]</td></tr><tr><td class="col-2 text-center">5th</td><td class="col-10">@spell[beast sense]</td></tr><tr><td class="col-2 text-center">9th</td><td class="col-10">@spell[speak with plants]</td></tr><tr><td class="col-2 text-center">13th</td><td class="col-10">@spell[locate creature]</td></tr><tr><td class="col-2 text-center">17th</td><td class="col-10">@spell[commune with nature]</td></tr></tbody></table><p>You can cast each of these spells once without expending a spell slot. Once you cast a spell in this way, you can\'t do so again until you finish a long rest.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "TCE",
                                    activation: {
                                        type: "special",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: 1,
                                        max: "1",
                                        per: "lr"
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "other",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "flat"
                                    },
                                    requirements: "Ranger 3",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 1102,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "classfeatures.html",
                                        source: "TCE",
                                        hash: "primal%20awareness_ranger_phb_3_tce"
                                    },
                                    dnd5e: {
                                        advancementOrigin:
                                            "ih3u6BghcHjntgXJ.gecrt4zwd2dz4vlm"
                                    }
                                }
                            },
                            {
                                _id: "7xjryHqie4RJo6nP",
                                name: "Arrow",
                                type: "consumable",
                                img: "icons/weapons/ammunition/arrow-head-war.webp",
                                data: {
                                    description: {
                                        value: "\n\t\t",
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 24,
                                    weight: 0.05,
                                    price: 0.05,
                                    attunement: 0,
                                    equipped: false,
                                    rarity: "",
                                    identified: false,
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: 5,
                                        long: 0,
                                        units: "ft"
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: "",
                                        autoDestroy: false
                                    },
                                    consume: {
                                        type: "",
                                        target: "",
                                        amount: null
                                    },
                                    ability: "",
                                    actionType: "rwak",
                                    attackBonus: "0",
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [["", "piercing"]],
                                        versatile: "",
                                        value: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    consumableType: "ammo",
                                    attributes: {
                                        spelldc: 10
                                    },
                                    proficient: true,
                                    attuned: false,
                                    armor: {
                                        value: null,
                                        dex: null
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 3001,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "arrow_phb"
                                    },
                                    "midi-qol": {
                                        fumbleThreshold: null,
                                        effectActivation: false
                                    },
                                    midiProperties: {
                                        nodam: false,
                                        fulldam: false,
                                        halfdam: false,
                                        rollOther: false,
                                        critOther: false,
                                        magicdam: false,
                                        magiceffect: false,
                                        concentration: false,
                                        toggleEffect: false
                                    }
                                }
                            },
                            {
                                _id: "Naqn64BGQII9s6fh",
                                name: "Backpack",
                                type: "backpack",
                                img: "icons/containers/bags/pack-simple-leather.webp",
                                data: {
                                    description: {
                                        value: '\n\t\t<div class="rd__b  rd__b--2"><p>A <i>backpack</i> can hold one cubic foot or 30 pounds of gear. You can also strap items, such as a bedroll or a coil of rope, to the outside of a <i>backpack</i>.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 1,
                                    weight: 5,
                                    price: 2,
                                    attunement: 0,
                                    equipped: false,
                                    rarity: "",
                                    identified: false,
                                    capacity: {
                                        type: "weight",
                                        value: 30,
                                        weightless: false
                                    },
                                    currency: {
                                        cp: 0,
                                        sp: 0,
                                        ep: 0,
                                        gp: 0,
                                        pp: 0
                                    },
                                    damage: {
                                        parts: []
                                    },
                                    proficient: true,
                                    attuned: false,
                                    consume: {
                                        type: "",
                                        target: "",
                                        amount: null
                                    },
                                    range: {
                                        value: 0,
                                        long: 0,
                                        units: "ft"
                                    },
                                    armor: {
                                        value: null,
                                        dex: null
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 5001,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "backpack_phb"
                                    }
                                }
                            },
                            {
                                _id: "UXSrOKv2JcIBn6Uq",
                                name: "Crowbar",
                                type: "loot",
                                img: "icons/tools/hand/pickaxe-steel-white.webp",
                                data: {
                                    description: {
                                        value: '\n\t\t<div class="rd__b  rd__b--2"><p>Using a <i>crowbar</i> grants advantage to Strength checks where the <i>crowbar</i>\'s leverage can be applied.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 1,
                                    weight: 5,
                                    price: 2,
                                    attunement: 0,
                                    equipped: false,
                                    rarity: "",
                                    identified: false,
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: 0,
                                        long: 0,
                                        units: "ft"
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null,
                                        autoUse: false,
                                        autoDestroy: false
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    consume: {
                                        type: "",
                                        target: "",
                                        amount: null
                                    },
                                    armor: {
                                        value: null,
                                        dex: null
                                    },
                                    hp: {
                                        value: 0,
                                        max: 0,
                                        dt: null,
                                        conditions: ""
                                    },
                                    properties: {
                                        amm: false,
                                        fin: false,
                                        fir: false,
                                        foc: false,
                                        hvy: false,
                                        lgt: false,
                                        lod: false,
                                        rch: false,
                                        rel: false,
                                        ret: false,
                                        spc: false,
                                        thr: false,
                                        two: false,
                                        ver: false
                                    },
                                    proficient: true,
                                    attuned: false
                                },
                                effects: [],
                                folder: null,
                                sort: 6001,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "crowbar_phb"
                                    }
                                }
                            },
                            {
                                _id: "l8rKEGi9WfG3Vyjs",
                                name: "Hammer",
                                type: "loot",
                                img: "icons/tools/hand/hammer-cobbler-steel.webp",
                                data: {
                                    description: {
                                        value: "\n\t\t",
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 1,
                                    weight: 3,
                                    price: 1,
                                    attunement: 0,
                                    equipped: false,
                                    rarity: "",
                                    identified: false,
                                    damage: {
                                        parts: []
                                    },
                                    proficient: true,
                                    attuned: false,
                                    consume: {
                                        type: "",
                                        target: "",
                                        amount: null
                                    },
                                    range: {
                                        value: 0,
                                        long: 0,
                                        units: "ft"
                                    },
                                    armor: {
                                        value: null,
                                        dex: null
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 6002,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "hammer_phb"
                                    }
                                }
                            },
                            {
                                _id: "hgedbJk5vgo3jOys",
                                name: "Piton",
                                type: "consumable",
                                img: "icons/tools/fasteners/nail-steel.webp",
                                data: {
                                    description: {
                                        value: "\n\t\t",
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 10,
                                    weight: 0.25,
                                    price: 0.05,
                                    attunement: 0,
                                    equipped: false,
                                    rarity: "",
                                    identified: false,
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: 5,
                                        long: 0,
                                        units: "ft"
                                    },
                                    uses: {
                                        value: 1,
                                        max: 1,
                                        per: "charges",
                                        autoDestroy: false,
                                        autoUse: true
                                    },
                                    consume: {
                                        type: "",
                                        target: "",
                                        amount: null
                                    },
                                    ability: "",
                                    actionType: "util",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    consumableType: "trinket",
                                    proficient: true,
                                    attuned: false,
                                    armor: {
                                        value: null,
                                        dex: null
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 3003,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "piton_phb"
                                    }
                                }
                            },
                            {
                                _id: "GOYTg7WrKzRm7zBq",
                                name: "Torch",
                                type: "consumable",
                                img: "icons/sundries/lights/torch-black.webp",
                                data: {
                                    description: {
                                        value: '\n\t\t<div class="rd__b  rd__b--2"><p>A <i>torch</i> burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning <i>torch</i> and hit, it deals 1 fire damage.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 10,
                                    weight: 1,
                                    price: 0.01,
                                    attunement: 0,
                                    equipped: false,
                                    rarity: "",
                                    identified: false,
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition: ""
                                    },
                                    duration: {
                                        value: 1,
                                        units: "hour"
                                    },
                                    target: {
                                        value: 40,
                                        width: null,
                                        units: "ft",
                                        type: "radius"
                                    },
                                    range: {
                                        value: 0,
                                        long: 0,
                                        units: "ft"
                                    },
                                    uses: {
                                        value: 1,
                                        max: 1,
                                        per: "charges",
                                        autoDestroy: false,
                                        autoUse: true
                                    },
                                    consume: {
                                        type: "",
                                        target: "",
                                        amount: null
                                    },
                                    ability: "str",
                                    actionType: "mwak",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [["1", "fire"]],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    consumableType: "trinket",
                                    proficient: true,
                                    attuned: false,
                                    armor: {
                                        value: null,
                                        dex: null
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 3005,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "torch_phb"
                                    }
                                }
                            },
                            {
                                _id: "8ToTkjWS9RSsM5Rc",
                                name: "Tinderbox",
                                type: "loot",
                                img: "icons/sundries/lights/torch-black.webp",
                                data: {
                                    description: {
                                        value: '\n\t\t<div class="rd__b  rd__b--2"><p>This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch—or anything else with abundant, exposed fuel—takes an action. Lighting any other fire takes 1 minute.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 1,
                                    weight: 1,
                                    price: 0.5,
                                    attunement: 0,
                                    equipped: false,
                                    rarity: "",
                                    identified: false,
                                    damage: {
                                        parts: []
                                    },
                                    proficient: true,
                                    attuned: false,
                                    consume: {
                                        type: "",
                                        target: "",
                                        amount: null
                                    },
                                    range: {
                                        value: 0,
                                        long: 0,
                                        units: "ft"
                                    },
                                    armor: {
                                        value: null,
                                        dex: null
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 6003,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "tinderbox_phb"
                                    }
                                }
                            },
                            {
                                _id: "x4f9n2m5J9DcGX9W",
                                name: "Rations (1 day)",
                                type: "consumable",
                                img: "icons/consumables/meat/hock-leg-pink-brown.webp",
                                data: {
                                    description: {
                                        value: '\n\t\t<div class="rd__b  rd__b--2"><p><i>Rations</i> consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 10,
                                    weight: 2,
                                    price: 0.5,
                                    attunement: 0,
                                    equipped: false,
                                    rarity: "",
                                    identified: false,
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition: ""
                                    },
                                    duration: {
                                        value: 0,
                                        units: ""
                                    },
                                    target: {
                                        value: 1,
                                        width: null,
                                        units: "",
                                        type: "creature"
                                    },
                                    range: {
                                        value: 0,
                                        long: 0,
                                        units: "touch"
                                    },
                                    uses: {
                                        value: 1,
                                        max: 1,
                                        per: "charges",
                                        autoDestroy: true,
                                        autoUse: true
                                    },
                                    consume: {
                                        type: "",
                                        target: "",
                                        amount: null
                                    },
                                    ability: "",
                                    actionType: "util",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    consumableType: "food",
                                    proficient: true,
                                    attuned: false,
                                    armor: {
                                        value: null,
                                        dex: null
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 3004,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "rations%20(1%20day)_phb"
                                    }
                                }
                            },
                            {
                                _id: "0CRbiRvQ7J4gmk72",
                                name: "Waterskin",
                                type: "consumable",
                                img: "icons/sundries/survival/wetskin-leather-purple.webp",
                                data: {
                                    description: {
                                        value: '\n\t\t<div class="rd__b  rd__b--2"><p>A <i>waterskin</i> can hold up to 4 pints of liquid.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 1,
                                    weight: 5,
                                    price: 0.2,
                                    attunement: 0,
                                    equipped: false,
                                    rarity: "",
                                    identified: false,
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition: ""
                                    },
                                    duration: {
                                        value: 0,
                                        units: ""
                                    },
                                    target: {
                                        value: 0,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: 0,
                                        long: 0,
                                        units: "touch"
                                    },
                                    uses: {
                                        value: 4,
                                        max: 4,
                                        per: "charges",
                                        autoDestroy: false,
                                        autoUse: true
                                    },
                                    consume: {
                                        type: "",
                                        target: "",
                                        amount: null
                                    },
                                    ability: "",
                                    actionType: "util",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    consumableType: "food",
                                    proficient: true,
                                    attuned: false,
                                    armor: {
                                        value: null,
                                        dex: null
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 3006,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "waterskin_phb"
                                    }
                                }
                            },
                            {
                                _id: "ouxJGyRxug4lbBGR",
                                name: "Hempen Rope (50 feet)",
                                type: "consumable",
                                img: "icons/sundries/survival/rope-wrapped-brown.webp",
                                data: {
                                    description: {
                                        value: '\n\t\t<div class="rd__b  rd__b--2"><p>Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 1,
                                    weight: 10,
                                    price: 1,
                                    attunement: 0,
                                    equipped: false,
                                    rarity: "",
                                    identified: false,
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: 0,
                                        long: 0,
                                        units: "ft"
                                    },
                                    uses: {
                                        value: 1,
                                        max: 1,
                                        per: "charges",
                                        autoDestroy: false,
                                        autoUse: true
                                    },
                                    consume: {
                                        type: "",
                                        target: "",
                                        amount: null
                                    },
                                    ability: "",
                                    actionType: "abil",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "str",
                                        dc: 17,
                                        scaling: "flat"
                                    },
                                    consumableType: "trinket",
                                    proficient: true,
                                    attuned: false,
                                    armor: {
                                        value: null,
                                        dex: null
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 3002,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "hempen%20rope%20(50%20feet)_phb"
                                    }
                                }
                            },
                            {
                                _id: "lq8oaaE0nsUzvyJQ",
                                name: "Leather Armor",
                                type: "equipment",
                                img: "icons/equipment/chest/breastplate-quilted-brown.webp",
                                data: {
                                    description: {
                                        value: '\n\t\t<div class="rd__b  rd__b--2"><p>The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 1,
                                    weight: 10,
                                    price: 10,
                                    attunement: 0,
                                    equipped: true,
                                    rarity: "",
                                    identified: false,
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: 0,
                                        long: 0,
                                        units: "ft"
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: "",
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    armor: {
                                        value: 11,
                                        type: "light",
                                        dex: null
                                    },
                                    hp: {
                                        value: 0,
                                        max: 0,
                                        dt: null,
                                        conditions: ""
                                    },
                                    baseItem: "leather",
                                    speed: {
                                        value: null,
                                        conditions: ""
                                    },
                                    strength: null,
                                    stealth: false,
                                    proficient: true,
                                    attuned: false
                                },
                                effects: [],
                                folder: null,
                                sort: 2002,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "leather%20armor_phb"
                                    }
                                }
                            },
                            {
                                _id: "1R7Ianb4hedrdgp5",
                                name: "Shortsword",
                                type: "weapon",
                                img: "icons/weapons/swords/sword-guard-brown.webp",
                                data: {
                                    description: {
                                        value: '\n\t\t<div class="rd__b  rd__b--2"></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 2,
                                    weight: 2,
                                    price: 10,
                                    attunement: 0,
                                    equipped: true,
                                    rarity: "",
                                    identified: false,
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: 5,
                                        long: 0,
                                        units: "ft"
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: ""
                                    },
                                    consume: {
                                        type: "",
                                        target: "",
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "mwak",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [["1d6 + @mod", "piercing"]],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    armor: {
                                        value: null,
                                        dex: null
                                    },
                                    hp: {
                                        value: 0,
                                        max: 0,
                                        dt: null,
                                        conditions: ""
                                    },
                                    weaponType: "martialM",
                                    baseItem: "shortsword",
                                    properties: {
                                        fin: true,
                                        lgt: true,
                                        amm: false,
                                        hvy: false,
                                        fir: false,
                                        foc: false,
                                        lod: false,
                                        rch: false,
                                        rel: false,
                                        ret: false,
                                        spc: false,
                                        thr: false,
                                        two: false,
                                        ver: false
                                    },
                                    proficient: true,
                                    attuned: false
                                },
                                effects: [],
                                folder: null,
                                sort: 1003,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "shortsword_phb"
                                    },
                                    enhancedcombathud: {
                                        set2s: true
                                    }
                                }
                            },
                            {
                                _id: "tbRXY3kD5MDHEcC8",
                                name: "Longbow",
                                type: "weapon",
                                img: "icons/weapons/bows/longbow-leather-green.webp",
                                data: {
                                    description: {
                                        value: '\n\t\t<div class="rd__b  rd__b--2"></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 1,
                                    weight: 2,
                                    price: 50,
                                    attunement: 0,
                                    equipped: true,
                                    rarity: "",
                                    identified: false,
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition: ""
                                    },
                                    duration: {
                                        value: 0,
                                        units: ""
                                    },
                                    target: {
                                        value: 0,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: 150,
                                        long: 600,
                                        units: "ft"
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: ""
                                    },
                                    consume: {
                                        type: "ammo",
                                        target: "7xjryHqie4RJo6nP",
                                        amount: 1
                                    },
                                    ability: "",
                                    actionType: "rwak",
                                    attackBonus: "0",
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [["1d8 + @mod", "piercing"]],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    armor: {
                                        value: null,
                                        dex: null
                                    },
                                    hp: {
                                        value: 0,
                                        max: 0,
                                        dt: null,
                                        conditions: ""
                                    },
                                    weaponType: "martialR",
                                    baseItem: "longbow",
                                    properties: {
                                        amm: true,
                                        hvy: true,
                                        two: true,
                                        fin: false,
                                        fir: false,
                                        foc: false,
                                        lgt: false,
                                        rch: false,
                                        rel: false,
                                        ret: false,
                                        spc: false,
                                        thr: false,
                                        ver: false,
                                        ada: false,
                                        lod: false,
                                        mgc: false,
                                        sil: false
                                    },
                                    proficient: true,
                                    attuned: false
                                },
                                effects: [],
                                folder: null,
                                sort: 1002,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "longbow_phb"
                                    },
                                    enhancedcombathud: {
                                        set2p: true
                                    },
                                    "midi-qol": {
                                        fumbleThreshold: null,
                                        effectActivation: false
                                    },
                                    midiProperties: {
                                        nodam: false,
                                        fulldam: false,
                                        halfdam: false,
                                        rollOther: false,
                                        critOther: false,
                                        magicdam: false,
                                        magiceffect: false,
                                        concentration: false,
                                        toggleEffect: false
                                    }
                                }
                            },
                            {
                                _id: "MishMQZvLtiO0Jnc",
                                name: "Age",
                                type: "feat",
                                img: "systems/dnd5e/icons/spells/leaf-jade-2.jpg",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--3"><p>Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.</p><div class="rd__spc-inline-post"></div></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "other",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "flat"
                                    },
                                    requirements: "",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 101,
                                permission: {
                                    default: 0,
                                    C07jiLv6faCEnNum: 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "raceFeature",
                                        source: "PHB",
                                        hash: "age_half-elf_phb_phb"
                                    }
                                }
                            },
                            {
                                _id: "aUE9C6rZ8bR4odwv",
                                name: "Darkvision",
                                type: "feat",
                                img: "systems/dnd5e/icons/spells/leaf-jade-2.jpg",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--3"><p>Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.</p><div class="rd__spc-inline-post"></div></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "other",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "flat"
                                    },
                                    requirements: "",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 102,
                                permission: {
                                    default: 0,
                                    C07jiLv6faCEnNum: 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "raceFeature",
                                        source: "PHB",
                                        hash: "darkvision_half-elf_phb_phb"
                                    }
                                }
                            },
                            {
                                _id: "LpNp3gEyeoy5zDKJ",
                                name: "Fey Ancestry",
                                type: "feat",
                                img: "icons/creatures/mammals/elk-moose-marked-green.webp",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--3"><p>You have advantage on saving throws against being @condition[charmed], and magic can\'t put you to sleep.</p><div class="rd__spc-inline-post"></div></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "other",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "flat"
                                    },
                                    requirements: "",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 105,
                                permission: {
                                    default: 0,
                                    C07jiLv6faCEnNum: 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "raceFeature",
                                        source: "PHB",
                                        hash: "fey%20ancestry_half-elf_phb_phb"
                                    }
                                }
                            },
                            {
                                _id: "LE65qn2Iam1HkMuz",
                                name: "Skill Versatility",
                                type: "feat",
                                img: "systems/dnd5e/icons/spells/leaf-jade-2.jpg",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--3"><p>You gain proficiency in two skills of your choice.</p><div class="rd__spc-inline-post"></div></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "other",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "flat"
                                    },
                                    requirements: "",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 111,
                                permission: {
                                    default: 0,
                                    C07jiLv6faCEnNum: 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "raceFeature",
                                        source: "PHB",
                                        hash: "skill%20versatility_half-elf_phb_phb"
                                    }
                                }
                            },
                            {
                                _id: "oZEtdpqgIwGcSPLm",
                                name: "Languages",
                                type: "feat",
                                img: "systems/dnd5e/icons/spells/leaf-jade-2.jpg",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--3"><p>You can speak, read, and write Common, Elvish, and one extra language of your choice.</p><div class="rd__spc-inline-post"></div></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "other",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "flat"
                                    },
                                    requirements: "",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 107,
                                permission: {
                                    default: 0,
                                    C07jiLv6faCEnNum: 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "raceFeature",
                                        source: "PHB",
                                        hash: "languages_half-elf_phb_phb"
                                    }
                                }
                            },
                            {
                                _id: "YQJ0Ew9F6el6B5gk",
                                name: "Cure Wounds",
                                type: "spell",
                                img: "icons/magic/life/cross-flared-green.webp",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--3"><p>A creature you touch regains a number of hit points equal to [[/r 1d8]] + your spellcasting ability modifier. This spell has no effect on undead or constructs.</p><div class="rd__spc-inline-post"></div></div><div class="rd__b  rd__b--3"><div class="rd__b  rd__b--3"><span class="rd__h rd__h--3" data-title-index="1"> <span class="entry-title-inner">At Higher Levels.</span></span> <p>When you cast this spell using a spell slot of 2nd level or higher, the healing increases by [[/r 1d8]] for each slot level above 1st.</p><div class="rd__spc-inline-post"></div></div><div class="rd__spc-inline-post"></div></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition: ""
                                    },
                                    duration: {
                                        value: 0,
                                        units: "inst"
                                    },
                                    target: {
                                        value: 1,
                                        width: null,
                                        units: "touch",
                                        type: "creature"
                                    },
                                    range: {
                                        value: 0,
                                        long: null,
                                        units: "touch"
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "heal",
                                    attackBonus: null,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [["1d8 + @mod", "healing"]],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    level: 1,
                                    school: "evo",
                                    components: {
                                        value: "",
                                        vocal: true,
                                        somatic: true,
                                        material: false,
                                        ritual: false,
                                        concentration: false
                                    },
                                    materials: {
                                        value: "",
                                        consumed: false,
                                        cost: 0,
                                        supply: 0
                                    },
                                    preparation: {
                                        mode: "always",
                                        prepared: true
                                    },
                                    scaling: {
                                        mode: "level",
                                        formula: "1d8"
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 11001,
                                permission: {
                                    default: 0,
                                    C07jiLv6faCEnNum: 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "spells.html",
                                        source: "PHB",
                                        hash: "cure%20wounds_phb",
                                        propDroppable: "spell"
                                    }
                                }
                            },
                            {
                                _id: "3VeAVCf3j6zi5uLO",
                                name: "Speak with Animals",
                                type: "spell",
                                img: "icons/creatures/mammals/deer-antlers-blue.webp",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--3"><p>You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM\'s discretion.</p><div class="rd__spc-inline-post"></div></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition: ""
                                    },
                                    duration: {
                                        value: 10,
                                        units: "minute"
                                    },
                                    target: {
                                        value: 0,
                                        width: null,
                                        units: "self",
                                        type: "self"
                                    },
                                    range: {
                                        value: 0,
                                        long: null,
                                        units: "self"
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "util",
                                    attackBonus: null,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    level: 1,
                                    school: "div",
                                    components: {
                                        value: "",
                                        vocal: true,
                                        somatic: true,
                                        material: false,
                                        ritual: true,
                                        concentration: false
                                    },
                                    materials: {
                                        value: "",
                                        consumed: false,
                                        cost: 0,
                                        supply: 0
                                    },
                                    preparation: {
                                        mode: "always",
                                        prepared: true
                                    },
                                    scaling: {
                                        mode: "none",
                                        formula: ""
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 11002,
                                permission: {
                                    default: 0,
                                    C07jiLv6faCEnNum: 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "spells.html",
                                        source: "PHB",
                                        hash: "speak%20with%20animals_phb",
                                        propDroppable: "spell"
                                    }
                                }
                            },
                            {
                                _id: "kqFdSY5t9HskGOqM",
                                name: "Thieves' Tools",
                                type: "tool",
                                img: "https://5etools-mirror-1.github.io/img/items/PHB/Thieves%27%20Tools.jpg",
                                data: {
                                    description: {
                                        value: '\n\t\t<div class="rd__b  rd__b--2"><p>This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.</p></div><div class="rd__b  rd__b--2"><p>Perhaps the most common tools used by adventurers, <i>thieves\' tools</i> are designed for picking locks and foiling traps. Proficiency with the tools also grants you a general knowledge of traps and locks.</p><div class="rd__b  rd__b--3"><span class="rd__h rd__h--3" data-title-index="48"> <span class="entry-title-inner">Components.</span></span> <p><i>Thieves\' tools</i> include a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers.</p><div class="rd__spc-inline-post"></div></div><div class="rd__b  rd__b--3"><span class="rd__h rd__h--3" data-title-index="49"> <span class="entry-title-inner">History.</span></span> <p>Your knowledge of traps grants you insight when answering questions about locations that are renowned for their traps.</p><div class="rd__spc-inline-post"></div></div><div class="rd__b  rd__b--3"><span class="rd__h rd__h--3" data-title-index="50"> <span class="entry-title-inner">Investigation and Perception.</span></span> <p>You gain additional insight when looking for traps, because you have learned a variety of common signs that betray their presence.</p><div class="rd__spc-inline-post"></div></div><div class="rd__b  rd__b--3"><span class="rd__h rd__h--3" data-title-index="51"> <span class="entry-title-inner">Set a Trap.</span></span> <p>Just as you can disable traps, you can also set them. As part of a short rest, you can create a trap using items you have on hand. The total of your check becomes the DC for someone else\'s attempt to discover or disable the trap. The trap deals damage appropriate to the materials used in crafting it (such as poison or a weapon) or damage equal to half the total of your check, whichever the DM deems appropriate.</p><div class="rd__spc-inline-post"></div></div><table class="w-100 rd__table  stripe-odd-table"><caption>Thieves\' Tools</caption><thead><tr><th class="col-10" data-rd-isroller="false">Activity</th><th class="col-2 text-center" data-rd-isroller="false">DC</th></tr></thead><tbody><tr><td class="col-10">Pick a lock</td><td class="col-2 text-center">Varies</td></tr><tr><td class="col-10">Disable a trap</td><td class="col-2 text-center">Varies</td></tr></tbody></table></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    quantity: 1,
                                    weight: 1,
                                    price: 25,
                                    attunement: 0,
                                    equipped: false,
                                    rarity: "",
                                    identified: false,
                                    toolType: "",
                                    baseItem: "thief",
                                    ability: "dex",
                                    chatFlavor: "",
                                    proficient: true,
                                    bonus: "",
                                    damage: {
                                        parts: []
                                    },
                                    attuned: false,
                                    consume: {
                                        type: "",
                                        target: "",
                                        amount: null
                                    },
                                    range: {
                                        value: 0,
                                        long: 0,
                                        units: "ft"
                                    },
                                    armor: {
                                        value: null,
                                        dex: null
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 4001,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "PHB",
                                        hash: "thieves'%20tools_phb"
                                    }
                                }
                            },
                            {
                                _id: "Gaj5FLGqJJlAvT7n",
                                name: "Gloves of Thievery",
                                type: "equipment",
                                img: "modules/plutonium/media/icon/crossed-swords.svg",
                                data: {
                                    description: {
                                        value: '\n\t\t<div class="rd__b  rd__b--2"><p>These gloves are @condition[invisible] while worn. While wearing them, you gain a +5 bonus to Dexterity (@skill[Sleight of Hand]) checks and Dexterity checks made to pick locks.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "DMG",
                                    quantity: 1,
                                    weight: 0,
                                    price: null,
                                    attunement: 0,
                                    equipped: false,
                                    rarity: "uncommon",
                                    identified: true,
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: null,
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: "",
                                    actionType: "",
                                    attackBonus: null,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    armor: {
                                        value: null,
                                        type: "trinket",
                                        dex: null
                                    },
                                    hp: {
                                        value: 0,
                                        max: 0,
                                        dt: null,
                                        conditions: ""
                                    },
                                    baseItem: null,
                                    speed: {
                                        value: null,
                                        conditions: ""
                                    },
                                    strength: null,
                                    stealth: false,
                                    proficient: true,
                                    attuned: false
                                },
                                effects: [
                                    {
                                        label: "Fast Hands",
                                        icon: "modules/plutonium/media/icon/crossed-swords.svg",
                                        changes: [
                                            {
                                                key: "data.skills.slt.bonuses.check",
                                                mode: 2,
                                                value: "+5",
                                                priority: 7
                                            }
                                        ],
                                        disabled: false,
                                        duration: {
                                            startTime: null
                                        },
                                        tint: null,
                                        transfer: true,
                                        flags: {},
                                        _id: "6jvdrdbr9qo3z166"
                                    }
                                ],
                                folder: null,
                                sort: 2001,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "DMG",
                                        hash: "gloves%20of%20thievery_dmg"
                                    }
                                }
                            },
                            {
                                _id: "ZcWPkaC7XCunqgYL",
                                name: "Dragon Wing Shortbow",
                                type: "weapon",
                                img: "icons/weapons/bows/shortbow-recurve.webp",
                                data: {
                                    description: {
                                        value: "\n\t\t<div class=\"rd__b  rd__b--2\"><p>The limb tips of this magic bow are shaped like a dragon's wings, and the weapon is infused with the essence of a chromatic, gem, or metallic dragon's breath. When you hit with an attack roll using this magic bow, the target takes an extra [[/r 1d6]] damage of the same type as the breath infused in the bow—acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder.</p><p>If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you pull back the string. The ammunition created by the bow vanishes the instant after it hits or misses a target.</p></div>",
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "FTD",
                                    quantity: 1,
                                    weight: 2,
                                    price: null,
                                    attunement: 2,
                                    equipped: false,
                                    rarity: "rare",
                                    identified: true,
                                    activation: {
                                        type: "action",
                                        cost: 1,
                                        condition: ""
                                    },
                                    duration: {
                                        value: 0,
                                        units: ""
                                    },
                                    target: {
                                        value: 0,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: 80,
                                        long: 320,
                                        units: "ft"
                                    },
                                    uses: {
                                        value: null,
                                        max: null,
                                        per: null
                                    },
                                    consume: {
                                        type: "ammo",
                                        target: "",
                                        amount: 1
                                    },
                                    ability: "dex",
                                    actionType: "rwak",
                                    attackBonus: null,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [["1d6+@mod", "piercing"]],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: 0,
                                        scaling: "spell"
                                    },
                                    armor: {
                                        value: 10
                                    },
                                    hp: {
                                        value: 0,
                                        max: 0,
                                        dt: null,
                                        conditions: ""
                                    },
                                    weaponType: "simpleR",
                                    baseItem: "shortbow",
                                    properties: {
                                        amm: true,
                                        two: true,
                                        mgc: true
                                    },
                                    proficient: true,
                                    attuned: true,
                                    speed: {
                                        value: null,
                                        conditions: ""
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 1001,
                                permission: {
                                    default: 0,
                                    "4rkPnoaGgaMEIREN": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "items.html",
                                        source: "FTD",
                                        hash: "dragon%20wing%20shortbow_ftd"
                                    }
                                }
                            },
                            {
                                _id: "8v1VJIN9homcVytM",
                                name: "Sharpshooter",
                                type: "feat",
                                img: "modules/plutonium/media/icon/mighty-force.svg",
                                data: {
                                    description: {
                                        value: '<div>\n\t\t\t\t\n\t\t\t\t<div class="rd__b  rd__b--3"><p>You have mastered ranged weapons and can make shots that others find impossible. You gain the following benefits:</p><div class="rd__spc-inline-post"></div><ul class="rd__list"><li class="rd__li ">Attacking at long range doesn\'t impose disadvantage on your ranged weapon attack rolls.</li><li class="rd__li ">Your ranged weapon attacks ignore half cover and three-quarters cover.</li><li class="rd__li ">Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack\'s damage.</li></ul></div>\n\t\t\t</div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "PHB",
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: 0,
                                        units: ""
                                    },
                                    target: {
                                        value: 0,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: 0,
                                        long: 0,
                                        units: null
                                    },
                                    uses: {
                                        value: 0,
                                        max: 0,
                                        per: ""
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: "",
                                    actionType: "",
                                    attackBonus: null,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "spell"
                                    },
                                    requirements: "",
                                    recharge: {
                                        value: 0,
                                        charged: true
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 110,
                                permission: {
                                    default: 0,
                                    "9G7UHRfg4VJlHmIH": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "feats.html",
                                        source: "PHB",
                                        hash: "sharpshooter_phb"
                                    }
                                }
                            },
                            {
                                _id: "GI1YeN577Ap70Gac",
                                name: "Martial Versatility",
                                type: "feat",
                                img: "modules/plutonium/media/icon/mighty-force.svg",
                                data: {
                                    description: {
                                        value: '<div class="rd__b  rd__b--1"><p><i>4th-level ranger @variantrule[optional class features|tce|optional feature]</i></p><p>Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace a fighting style you know with another fighting style available to rangers. This replacement represents a shift of focus in your martial practice.</p></div>',
                                        chat: "",
                                        unidentified: ""
                                    },
                                    source: "TCE",
                                    activation: {
                                        type: "",
                                        cost: 0,
                                        condition: ""
                                    },
                                    duration: {
                                        value: null,
                                        units: ""
                                    },
                                    target: {
                                        value: null,
                                        width: null,
                                        units: "",
                                        type: ""
                                    },
                                    range: {
                                        value: null,
                                        long: null,
                                        units: ""
                                    },
                                    uses: {
                                        value: null,
                                        max: "",
                                        per: null
                                    },
                                    consume: {
                                        type: "",
                                        target: null,
                                        amount: null
                                    },
                                    ability: null,
                                    actionType: "other",
                                    attackBonus: 0,
                                    chatFlavor: "",
                                    critical: {
                                        threshold: null,
                                        damage: ""
                                    },
                                    damage: {
                                        parts: [],
                                        versatile: ""
                                    },
                                    formula: "",
                                    save: {
                                        ability: "",
                                        dc: null,
                                        scaling: "flat"
                                    },
                                    requirements: "Ranger 4",
                                    recharge: {
                                        value: null,
                                        charged: false
                                    }
                                },
                                effects: [],
                                folder: null,
                                sort: 108,
                                permission: {
                                    default: 0,
                                    "9G7UHRfg4VJlHmIH": 3
                                },
                                flags: {
                                    srd5e: {
                                        page: "classfeatures.html",
                                        source: "TCE",
                                        hash: "martial%20versatility_ranger_phb_4_tce"
                                    },
                                    dnd5e: {
                                        advancementOrigin:
                                            "ih3u6BghcHjntgXJ.9hg3u4qwo7gx2a2s"
                                    }
                                }
                            }
                        ],
                        effects: [
                            {
                                _id: "r8f3HBYG6IdOUYRW",
                                changes: [
                                    {
                                        key: "data.bonuses.rwak.attack",
                                        mode: 2,
                                        value: "+2"
                                    }
                                ],
                                disabled: false,
                                duration: {
                                    startTime: 1664157961,
                                    startRound: 2,
                                    startTurn: 0
                                },
                                icon: "icons/weapons/bows/shortbow-recurve-yellow.webp",
                                label: "Fighting Style: Archery",
                                origin: "Actor.qgN9p5grN0o9iwDH.Item.6KYRoQvQzvFShKP4",
                                tint: null,
                                transfer: false,
                                flags: {
                                    dae: {
                                        transfer: true,
                                        stackable: "multi"
                                    }
                                }
                            },
                            {
                                _id: "FtkvCZVSIJ1zliUF",
                                changes: [
                                    {
                                        key: "data.skills.slt.bonuses.check",
                                        mode: 2,
                                        value: "+5",
                                        priority: 7
                                    }
                                ],
                                disabled: false,
                                duration: {
                                    startTime: 1665779400
                                },
                                icon: "modules/plutonium/media/icon/crossed-swords.svg",
                                label: "Fast Hands",
                                origin: "Actor.qgN9p5grN0o9iwDH.Item.Gaj5FLGqJJlAvT7n",
                                tint: null,
                                transfer: false,
                                flags: {
                                    dae: {
                                        transfer: true,
                                        stackable: "multi"
                                    }
                                }
                            }
                        ],
                        folder: null,
                        sort: 0,
                        permission: {
                            default: 2,
                            "4rkPnoaGgaMEIREN": 3,
                            "9G7UHRfg4VJlHmIH": 3
                        },
                        flags: {
                            dae: {
                                damageApplied: 5
                            },
                            enhancedcombathud: {
                                activeSet: "set2"
                            },
                            core: {
                                sheetClass: "",
                                sourceId: "Actor.qgN9p5grN0o9iwDH"
                            },
                            "midi-qol": {}
                        },
                        _id: "EVE60NHIJnXNpzpg"
                    }, { pack: "etune-shared-compendium.actors" });
                    console.log(actor);
                    /* EtuneSharedCompendiumLogic._callServerPull(); */
                }
            }
        );
    }
    // Actor.deleteDocuments(["et87x2QPO6nSkYCZ"], {pack: "etune-shared-compendium.actors"})
}

class EtuneSharedCompendiumLogic {
    static async _callServerPush() {
        const response = await fetch('http://127.0.0.1:8000/push');
    }

    static async _callServerPull() {
        const response = await fetch('http://localhost:8000/pull');
        console.log(response);
    }
}

/* Hooks.on('getSceneControlButtons', EtuneSharedCompendium._getSceneControlButtons); */
/* Hooks.on('renderCompendium', EtuneSharedCompendium._inject) */
Hooks.on('getCompendiumHeaderButtons', EtuneSharedCompendium._inject2)