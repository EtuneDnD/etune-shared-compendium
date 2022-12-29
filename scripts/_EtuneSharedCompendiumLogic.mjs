import { EtuneSharedCompendiumGithubFacade } from './_EtuneSharedCompendiumGithubFacade.mjs'

export class EtuneSharedCompendiumLogic {
  static ACTORS_COMPENDIUM_NAME = "etune-shared-compendium-mod.actors";

  static async pull() {
    this._deleteSharedCompendiumData(this.ACTORS_COMPENDIUM_NAME);
    const actors =
      await EtuneSharedCompendiumGithubFacade.getActorsJsonsNoAPI();
    this._populateSharedCompendium(actors, this.ACTORS_COMPENDIUM_NAME);
  }

  static async push() {
    const actors = await this._getDataFromCompendium(
      this.ACTORS_COMPENDIUM_NAME
    );

    for (let actor of actors) {
      await EtuneSharedCompendiumGithubFacade.pushActor(await actor);
      await new Promise((r) => setTimeout(r, 5000));
    }
  }

  static async _getDataFromCompendium(compendiumName) {
    const pack = await game.packs.get(compendiumName);
    return await pack.index.map(async (i) => await pack.getDocument(i._id));
  }

  static async _deleteSharedCompendiumData(compendiumName) {
    const pack = game.packs.get(compendiumName);
    const ids = pack.index.map((i) => i._id);
    await Actor.deleteDocuments(ids, { pack: compendiumName });
  }

  static async _populateSharedCompendium(objects, compendiumName) {
    objects.forEach(async (element) => {
      const actor = await Actor.create(element, {
        pack: compendiumName,
      });
    });
  }
}
