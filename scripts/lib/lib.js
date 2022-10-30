class EtuneSharedCompendium {
    static ID = 'etune-shared-compendium';

    static log(force, ...args) {
        const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugValue(this.ID);

        if (shouldLog) {
            console.log(this.ID, '|', ...args);
        }
    }

    static _getSceneControlButtons(buttons) {        
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
                    EtuneSharedCompendiumLogic._callServerPull();
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
    }

}

class EtuneSharedCompendiumLogic {
    static async _callServerPush() {
        const response = await fetch('http://localhost:3000/push');
    }

    static async _callServerPull() {
        const response = await fetch('http://localhost:3000/pull');
    }
}

Hooks.on('getSceneControlButtons', EtuneSharedCompendium._getSceneControlButtons);