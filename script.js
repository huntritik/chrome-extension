fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())      //yha hum data ko ,json file me kr rhe hai change.
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })
     