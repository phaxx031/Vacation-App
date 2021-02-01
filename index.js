'use strict';

function getPark(searchTerm, maxResults=10) {
    fetch(`https://developer.nps.gov/api/v1/parks?q=${searchTerm}&limit=${maxResults}&api_key=0u67CbcuaZCupc6JheYKXccQGremdxq3I815GMfy`)
    .then(response => response.json())
    .then(responseJson => {
            displayResults(responseJson);
    })
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    let templateStringList = "";
    for (let i = 0; i < responseJson.data.length; i++) {
        templateStringList += `<p class="result-name">${responseJson.data[i].fullName}</p>
        <p class="result-url"><a href="${responseJson.data[i].url}">${responseJson.data[i].url}</a></p>
        <p class="result-description">${responseJson.data[i].description}</p>
        <hr>`;
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