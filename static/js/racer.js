fetch('https://ergast.com/api/f1/2020/1/driverStandings.json')






newItem.addEventListener('click', function () {
    employeeCardContainer.innerHTML = `
                <div class="card border-primary" data-id=${person.id}>
                <div class="card-body">
                    <h4 class="card-title">${person.firstName} ${person.lastName}</h4>
                    <p class="card-text">${person.occupation}</p>
                </div>
                <div class="card-footer">
                    <ul class="list-group">
                        ${(function () {
            let lgi = '';

            for (const skill in person.skills) {
                lgi += `<li class="list-group-item">
                                            ${skill}
                                            <span class="float-right">
                                                ${person.skills[skill]}
                                            </span>
                                        </li>`
            }
            return lgi;
        })()}
                    </ul>
                </div>
                </div>
            `
})

