import { EtuneSharedCompendiumLogic } from "./_EtuneSharedCompendiumLogic.mjs";
import { Settings } from "./_settings.mjs";

class EtuneSharedCompendium {
  static ID = "etune-shared-compendium";

  static _inject(compendium, buttons) {
    if (!game.user.isGM) return;
    if (compendium.title != "Etune actors") return;

    buttons.unshift({
      label: "Update Etune",
      class: "text1",
      icon: "fas fa-download",
      onclick: async () => {
        await EtuneSharedCompendiumLogic.pull();
      },
    });

    if (
      game.settings.get(
        EtuneSharedCompendium.ID,
        Settings.SETTINGS.TOKEN
      ) != ""
    ) {
      buttons.unshift({
        label: "Push to Etune",
        class: "text2",
        icon: "fas fa-upload",
        onclick: async () => {
          await EtuneSharedCompendiumLogic.push();
        },
      });
    }
  }
}

Hooks.on("getCompendiumHeaderButtons", EtuneSharedCompendium._inject);