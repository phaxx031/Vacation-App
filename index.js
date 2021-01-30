'use strict';


let url = 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=0u67CbcuaZCupc6JheYKXccQGremdxq3I815GMfy';

function getPark(searchTerm, maxResults=10) {
    fetch(`https://api.github.com/users/${searchTerm}/repos`)
    .then(response => response.json())
    .then(responseJson => {
            displayResults(responseJson);
    })
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    let templateStringList = "";
    for (let i = 0; i < responseJson.length; i++) {
        templateStringList += `<p class="result-name">${responseJson[i].name}"</p>
        <p class="result-url"><a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a></p>`;
    }
    $('.results').html(templateStringList);
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let searchTerm = $("#textbox").val();
        let maxResults = $("#dropdown-list").val();
        getPark(searchTerm, maxResults);
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!')
    watchForm();
});