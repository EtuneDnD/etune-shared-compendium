export class EtuneSharedCompendiumGithubFacade {
  static REPO_URL =
    "https://api.github.com/repos/EtuneDnD/etune-shared-compendium-db/contents/actors/";

  static async pushActor(actor5e) {
    let actorFile = await this.getActorFileAPI(actor5e.name);

    let sha = null;

    if (actorFile != null) {
      sha = actorFile.sha;
    }

    await this.updateActorFileAPI(sha, actor5e);
  }

  static async getAvailableActorsNamesAPI() {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/vnd.github.v3.raw");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      "https://api.github.com/repos/EtuneDnD/etune-shared-compendium-db/contents/actors",
      requestOptions
    );

    const responseJson = await response.json();

    return responseJson
      .filter((element) => element.name != "README.md")
      .map((element) => element.name);
  }

  static async getActorsJsonsNoAPI() {
    let actorsJsonArray = [];
    const actorsDbUrl =
      "https://raw.githubusercontent.com/EtuneDnD/etune-shared-compendium-db/main/actors/";
    const actorNames = await this.getAvailableActorsNamesAPI();

    for (let actorName of actorNames) {
      const response = await fetch(`${actorsDbUrl}${actorName}`);
      let jsonResponse = await response.json();
      actorsJsonArray.push(jsonResponse);
    }

    return actorsJsonArray;
  }

  static async getActorFileAPI(actorName) {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      let response = await fetch(
        this.REPO_URL + this.formatActorName(actorName) + ".json",
        requestOptions
      );

      if (response.ok) {
        let actorJson = await response.json();
        return actorJson;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async updateActorFileAPI(sha, actor5e) {
    let myHeaders = new Headers();

    const bearerToken = game.settings.get(
      EtuneSharedCompendium.ID,
      EtuneSharedCompendium.SETTINGS.TOKEN
    );

    myHeaders.append("Authorization", bearerToken);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      message:
        "Updating actors collection by " + game.users.get(game.userId).name,
      sha: sha,
      content: Base64.encode(JSON.stringify(actor5e, null, 4)),
    });

    let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      this.REPO_URL + this.formatActorName(actor5e.name) + ".json",
      requestOptions
    );
  }

  static formatActorName(actorName) {
    return actorName.replace(" ", "-").toLowerCase();
  }
}