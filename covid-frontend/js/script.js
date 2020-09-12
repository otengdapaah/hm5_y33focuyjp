let baseUri = 'http://localhost:5500'

window.onload = async (e) => {

    var cases = []
    var totalCases = 0
    var totalRecovered = 0
    var totalActive = 0
    var totalDeath = 0

    var getGlobalCases = () => {

        return fetch(baseUri + '/cases').then((response) => {
            return response.json()
        }).then((res) => {
            cases = res
        })
            .catch((err) => {
                console.log(err)
            })
    }

    var activeCases = () => {
        return fetch(baseUri + '/total-active').then((response) => {
            return response.json()
        }).then((res) => {
            document.querySelector('#loading').innerHTML = ''
            totalActive = res
        })
            .catch((err) => {
                console.log(err)
            })
    }

    var recoveredCases = () => {
        return fetch(baseUri + '/total-recovered').then((response) => {
            return response.json()
        }).then((res) => {
            document.querySelector('#loading').innerHTML = ''
            totalRecovered = res
        })
            .catch((err) => {
                console.log(err)
            })
    }

    var deathCases = () => {
        return fetch(baseUri + '/total-deaths').then((response) => {
            return response.json()
        }).then((res) => {
            document.querySelector('#loading').innerHTML = ''
            totalDeath = res
        })
            .catch((err) => {
                console.log(err)
            })
    }

    var TotalCases = () => {
        return fetch(baseUri + '/total-cases').then((response) => {
            return response.json()
        }).then((res) => {
            document.querySelector('#loading').innerHTML = ''
            totalCases = res
        })
            .catch((err) => {
                console.log(err)
            })
    }

    await getGlobalCases()
    await activeCases()
    await recoveredCases()
    await deathCases()
    await TotalCases()

    document.querySelector('#loading').style.display = 'none'

    document.querySelector('#total-cases').innerHTML = totalCases
    document.querySelector('#total-recovered').innerHTML = totalRecovered
    document.querySelector('#total-active').innerHTML = totalActive
    document.querySelector('#total-deaths').innerHTML = totalDeath

    var tbody = document.querySelector('#td');
    for (var data of cases) {
        var tr = tbody.appendChild(document.createElement('tr'));
        tr.setAttribute('onclick', `get('${data.country_region}')`)
        tr.appendChild(document.createElement('td')).innerHTML = data.Country_Region
        tr.appendChild(document.createElement('td')).innerHTML = data.Confirmed
        tr.appendChild(document.createElement('td')).innerHTML = data.Deaths
        tr.appendChild(document.createElement('td')).innerHTML = data.Recovered
        tr.appendChild(document.createElement('td')).innerHTML = data.Active
    }
}

function getCountry() {
    fetch(baseUri + '/cases/').then((response) => {
        return response.json()
    }).then((res) => {
        console.log(res)
    })
        .catch((err) => {
            console.log(err)
        })
}