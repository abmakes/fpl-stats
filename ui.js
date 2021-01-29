
class UI {
  constructor() {
    this.players = document.getElementById('players-table');
  }

  /// iterate through players and generate table items
  showPlayerTable(players) {
    let output = "";

    players.forEach( player => {
      if ( player.form >= 5){
      output += `
      <tr>
        <td>${player.web_name}</td>
        <td>${player.element_type}</td>
        <td>${player.team_code}}</td>
        <td>${player.value_season}}</td>
        <td>${player.total_points}</td>
        <td>${player.form}</td>
        <td>${player.ict_index}</td>
      </tr>
      `
      }
    });

    // output player in table
    document.getElementById('player-stats').innerHTML = output;
  };
}




// Link highlight function

const links = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  }
  
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

links.forEach(a => a.addEventListener('mouseover', highlightLink));