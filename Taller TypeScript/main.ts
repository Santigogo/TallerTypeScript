
import { Serie } from './serie.js';

import { series } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
//const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
//const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const dConteiner = document.getElementById("dConteiner");
//const totalCreditElm: HTMLElement = document.getElementById("seasons-average")!;


//btnfilterByName.onclick = () => applyFilterByName();

const createCard = (serie: Serie) => {
	return `
    <div class="card">
        <img src="${serie.link}" class="card-img-top"  alt="${serie.name}">
        <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.summary}</p>
        <a href="${serie.link}" class="btn btn-primary">Go to website</a>
        </div>
    </div>
    `;
};

renderSeriesInTable(series);

//seasonsAvergaEle.innerHTML = `${getSeasonsAverage(series)}`


function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td class="serie-name">${serie.name}</td>
                           <td>${serie.producer}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
    // Agregar evento de clic al nombre de la serie
    const serieNameCell = trElement.querySelector('.serie-name')!;
    serieNameCell.addEventListener('click', () => {
      showSerieDetails(serie.id);
        });
    });
}

function showSerieDetails(serieId: number) {
    const selectedSerieId = serieId
    const selectedSerie = series.find(serie => serie.id === selectedSerieId);
    if (selectedSerie) {
        const details = document.getElementById('details')!;
        details.innerHTML = `
            <div class="card">
                <img src="${selectedSerie.img}" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${selectedSerie.name}</h5>
                    <p class="card-text">${selectedSerie.summary}</p>
                    <a href="${selectedSerie.link}" target="_blank" class="card-link">${selectedSerie.link}</a>
                </div>
            </div>
        `;
    }
}
 

/*function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}
*/

const seasonAverage = getSeasonsAverage(series);
const seasonsAverageText = document.getElementById('seasonsAverageText')!;
seasonsAverageText.textContent = `Seasons average: ${seasonAverage}`;
function getSeasonsAverage(series: Serie[]): number {
  let seasonsAverage: number = 0;
  series.forEach((serie) => seasonsAverage = seasonsAverage + serie.seasons);
  return seasonsAverage/series.length;
}

/*
function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}*/