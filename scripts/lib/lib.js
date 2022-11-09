class EtuneSharedCompendium {
    static ID = 'etune-shared-compendium';

    static log(force, ...args) {
        const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugValue(this.ID);

        if (shouldLog) {
            console.log(this.ID, '|', ...args);
        }
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
                    await EtuneSharedCompendiumLogic._getActorsFromGithub();
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

    static async _getActorsFromGithub() {
        const response = await fetch('https://raw.githubusercontent.com/EtuneDnD/etune-shared-compendium-db/main/actors.db');
        const text = await response.text();
        const lines = text.split(/\r?\n/);

        const pack = game.packs.get("etune-shared-compendium.actors");
        const ids = pack.index.map(i => i._id);
        await Actor.deleteDocuments(ids, {pack: "etune-shared-compendium.actors"});
        
        lines.forEach(async element => {
            if(!element.includes('$$deleted":true')) {
                const actor = await Actor.create(JSON.parse(element), { pack: "etune-shared-compendium.actors" });
            }
        });
    }
}

Hooks.on('getCompendiumHeaderButtons', EtuneSharedCompendium._inject2)