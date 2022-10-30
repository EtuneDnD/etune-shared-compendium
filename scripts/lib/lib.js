

class EtuneSharedCompendium {
    static ID = 'etune-shared-compendium';

    static log(force, ...args) {
        const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugValue(this.ID);

        if (shouldLog) {
            console.log(this.ID, '|', ...args);
        }
    }

    static _getSceneControlButtons(buttons) {
        console.log("adad102eijc")
        
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
                    console.log("aherioaheioh");
                }
            },
            {
                icon: "fas fa-download",
                name: "git-pull",
                title: game.i18n.localize('EtuneSharedCompendium.Download'),
                button: true,
                visible: true,
                onClick: () => {
                    console.log("aherioaheioh");
                }
            }
            ]
        });
        
        console.log("adad102eijc")
    }

}

class EtuneSharedCompendiumLogic {
    static async _callServer() {
        const response = await fetch('http://localhost:3000');
    }
}

Hooks.on('getSceneControlButtons', EtuneSharedCompendium._getSceneControlButtons);