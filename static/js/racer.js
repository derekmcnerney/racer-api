// const getBtn = document.getElementById('get-btn');
// const getBtn = document.getElementById('post-btn');
const api_url =
    "https://ergast.com/api/f1/2020/1/driverStandings.json";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}

function handleTodo(event){
    event.preventDefault()
    let year = document.getElementById("addYear").value;
    let round = document.getElementById("addRound").value;
    getapi(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)

    // set both input values to variables. Set a variable to api string = to the tempate string of the api 
    // `https://ergast.com/api/f1/${season}/${round}/driverStandings.json` 
    // call get api function line 7. pass in string (line 23) with season and round replaced
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab =
        `<tr>
            <th>Position</th>
            <th>Name</th>
            <th>Nationality</th>
            <th>Sponser</th>
            <th>Points</th>
         </tr>`;
    console.log(data.MRData.StandingsTable.StandingsList)
    // Loop to access all rows 

    /* for (let i = 0; i < 7; i++) {
        let r = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i]
        tab += `<tr> 
            <td>${r.position} </td>
            <td>${r.Driver.givenName} ${r.Driver.familyName}</td>
            <td>${r.Driver.nationality}</td>          
            <td>${r.Constructors[0].name}</td>
            <td>${r.points}</td>
        </tr>`;
    } */
    
   /*  let count = 0 */
    for (let r of data.MRData.StandingsTable.StandingsLists[0].DriverStandings) {
        /* if (count >= 7) {
            break
        } */
        tab += `<tr> 
    <td>${r.position} </td>
    <td>${r.Driver.givenName } ${r.Driver.familyName}</td>
    <td>${r.Driver.nationality}</td>          
    <td>${r.Constructors[0].name}</td>
    <td>${r.points}</td>
</tr>`;
        /* count++ */
    }
    // Setting innerHTML as tab variable
    document.getElementById("racers").innerHTML = tab;
}


// newItem.addEventListener('click', function () {
//     employeeCardContainer.innerHTML = `
//                 <div class="card border-primary" data-id=${person.id}>
//                 <div class="card-body">
//                     <h4 class="card-title">${person.firstName} ${person.lastName}</h4>
//                     <p class="card-text">${person.occupation}</p>
//                 </div>
//                 <div class="card-footer">
//                     <ul class="list-group">
//                         ${(function () {
//             let lgi = '';

//             for (const skill in person.skills) {
//                 lgi += `<li class="list-group-item">
//                                             ${skill}
//                                             <span class="float-right">
//                                                 ${person.skills[skill]}
//                                             </span>
//                                         </li>`
//             }
//             return lgi;
//         })()}
//                     </ul>
//                 </div>
//                 </div>
//             `
// })

