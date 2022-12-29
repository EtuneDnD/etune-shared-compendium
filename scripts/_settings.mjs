export class Settings {
  static SETTINGS = {
    TOKEN: "github-token",
  };
  
  static initialize() {
    game.settings.register(
      EtuneSharedCompendium.ID,
      EtuneSharedCompendium.SETTINGS.TOKEN,
      {
        name: "Token",
        default: "",
        type: String,
        scope: "client",
        config: true,
        hint: "Token de Github para poder subir cambios al repositorio.",
      }
    );
  }
}