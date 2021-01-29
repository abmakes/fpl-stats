// Initiate new FPLdata class
const fpldata = new FplData;
const ui = new UI;


const callApi = document.getElementById('stats-button');

callApi.addEventListener('click', (e) => {
  //use button to trigger fetch as to not overload API
  if (e.target.type === "button") {
    fpldata.getData()
      .then(data => {
        ui.showPlayerTable(data.players)
    });
  }
});

//// Search box 