// fetch("https://fantasy.premierleague.com/api/bootstrap-static/")
//   .then(response => response.json())
//   .then(data => console.log(data));

// const fplData = request("https://fantasy.premierleague.com/api/bootstrap-static/").then(response => 
// console.log(response.data));

class FplData {
  constructor() {
    this.cors = "https://cors-anywhere.herokuapp.com/";
    this.apiFpl = "https://fantasy.premierleague.com/api/bootstrap-static/"
    this.apiFixtures = "https://fantasy.premierleague.com/api/fixtures/"
    this.player_count = 10;
    this.player_sort = 'value_season: asc';
  }

  async getData() {
    const fplResponse = await fetch(this.cors+this.apiFpl);
    const fixturesResponse = await fetch(this.cors+this.apiFixtures);

    const data = await fplResponse.json();
    const fixtures = await fixturesResponse.json();

    return {
      players: data.elements,
      teams: data.teams,
      positions: data.element_types,
      fixtures: fixtures
    }
  }
}
