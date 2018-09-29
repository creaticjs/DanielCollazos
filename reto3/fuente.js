/**
 * Reto 3
 * Daniel Collazos
 */
// URL for to query images
var URL_IMAGES = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDWJ-HTEVF4m_6pS01keRXw4le8kyxBxNI&cx=003619409721105142907:nwqrpbadtg4&q=";
// URL for Star Wars
var URL_SW = "https://swapi.co/api/";
// General variable, response about categories of Star Wars
var results;
var category_g;
var index_g;
// Object DOM
var title        = document.getElementById("title");
var body         = document.getElementById("body");
var page         = document.getElementById("page");
var titleparts   = document.getElementById("parts");
var imagen       = document.getElementById('image');
var card         = document.getElementById('card');
// Class for extra queries
class metaData{

    constructor(db){
        this.db  = db;
    }
    makeJson(id,names){
       this.db.push({ key: id,
                values: names });
    }
    makeQuery(){
        this.db.forEach(json=>{
            addInfo(json.key,json.values);
        });
    }
}
function getImage(index, cb) {
    var name;
    if (category_g == "films") {
        name = results[index].title;
    } else {
        name = results[index].name;
    }
    var objXMLHttpRequest = new XMLHttpRequest();
    objXMLHttpRequest.onreadystatechange = function () {
        if (objXMLHttpRequest.readyState == 4 && objXMLHttpRequest.status == 200) {
            cb(JSON.parse(this.responseText), index);
        }
    }
    name = name.replace(' ', '+');
    objXMLHttpRequest.open('GET', URL_IMAGES + name + '&searchType=image');
    objXMLHttpRequest.send();
}
function query(url, cb) {
    var objXMLHttpRequest = new XMLHttpRequest();
    objXMLHttpRequest.onreadystatechange = function () {
        if (objXMLHttpRequest.readyState == 4 && objXMLHttpRequest.status == 200) {
            if (cb) {
                cb(JSON.parse(this.responseText));
            }
        }
    }
    objXMLHttpRequest.open('GET', url);
    objXMLHttpRequest.send();
}
function firstQuery(category) {
    clean();
    category_g = category;
    query(URL_SW + category, principalImage);
}

function pageFunction(url, index) {
    clean();
    index_g = index;
    query(URL_SW + url, prepareTarget2);
}
function principalImage(data) {

    pages = Math.ceil(data.count / 10);
    results = data.results;
    prepareTarget();
}

function prepareTarget() {
    var buttons = "<div>";
    for (let index = 0; index < pages; index++) {
        buttons += `<button type="button" onclick=pageFunction('${category_g}/?page=${index + 1}',${index + 1}) class="btn btn-primary" >Page ${(index + 1)}</button>`;
    }
    buttons += "</div>";
    title.innerHTML = `<div class="alert alert-primary" role="alert">Selected: ${category_g}</div>`;
    body.innerHTML = buttons;
}

function prepareTarget2(data) {

    results = data.results;
    var elemets = '<div class="row">';

    for (let index = 0; index < results.length; index++) {
        if (index == 4) {
            elemets += '</div><div class="row" style="margin-top:30px; margin-bottom:30px;">';
        }
        if (category_g == "films") {
            elemets += `<div class="col-sm"><a onclick="getImage(${index},prepareCard)" class="btn btn-secondary btn-lg">
            <span class="fa fa-star"></span> ${results[index].title} </a></div>`;
        } else {
            elemets += `<div class="col-sm"><a onclick="getImage('${index}',prepareCard)" class="btn btn-secondary btn-lg">
        <span class="fa fa-star"></span> ${results[index].name} </a></div>`;
        }
    }

    page.innerHTML = `<div class="alert alert-primary" role="alert">Selected Page: ${index_g}</div>`;
    titleparts.innerHTML = elemets + "</div>";
}

function prepareCard(img, index) {

    var elemento = img.items[0];
    var photo = `<img src="${elemento.link}">`;
    var keys = Object.keys(results[index]);
    console.log("mira algo"+keys);
    var values = Object.values(results[index]);
    var text = '<table class="table table-dark"><tbody>';
    var db = [];
    var metadata = new metaData(db);
    for (let index = 0; index < keys.length; index++) {
        text += `<tr><th scope="row">${keys[index]}</th>`;
        if (Array.isArray(values[index])) {
            text += `<td id="${keys[index]}"></td>`;
            metadata.makeJson(keys[index],values[index]);
        } else {
            text += `<td>${values[index]}</td></tr>`;
        }
    }
    imagen.innerHTML = photo;
    text += "</tbody></table>";
    card.innerHTML = text;
    metadata.makeQuery();
}
function getPromise(url) {
    return new Promise(function (resolve, reject) {
        var httpX = new XMLHttpRequest();
        httpX.onload = function () {
            //console.log(this.responseText);
            resolve(JSON.parse(this.responseText));
        }
        httpX.onerror = function () {
            reject(Error('Error'));
        }
        httpX.open('GET', url, true);
        httpX.send()
    });
}

function addInfo(name,values) {
    var info = []; 
    var aux2 = document.getElementById(name);
    values.forEach(element => {
        info.push(getPromise(element));
    });
    Promise.all(info)
        .then(function (data) {
            data.forEach(element => {
                if(name == "films"){
                    aux2.innerText += (element.title)+",";
                }else{
                    aux2.innerText += (element.name)+",";
                }                
            });            
        });
}
function clean() {
    imagen.innerHTML = '';
    page.innerHTML = '';
    card.innerHTML = '';
    titleparts.innerHTML = '';
}