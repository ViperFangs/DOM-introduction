const container = document.querySelector('#container');

const p1 = document.createElement('p');
p1.textContent = 'Hey I\'m red';
container.appendChild(p1);

const heading = document.createElement('h3');
heading.textContent = 'I\'m a blue h3';
container.appendChild(heading);

const divContainer = document.createElement('div');

/* const divStyle = divContainer.style;
divStyle.cssText = 'border: 2px black solid; background-color: pink;'; */

divContainer.setAttribute('style', 'border: 2px black solid; background-color: pink;');

const h1Tag = document.createElement('h1');
h1Tag.textContent= 'I\'m in a div';
const p2Tag = document.createElement('p');
p2Tag.textContent = 'ME TOO!';

divContainer.appendChild(h1Tag);
divContainer.appendChild(p2Tag);

container.appendChild(divContainer);

function alertFunction() {
    alert("Hello World");
  }

const button = document.createElement('button');
//button.setAttribute('onclick', 'alert("Hello World");');
//button.onclick = () => alert("Hello World");
//button.addEventListener('click', alertFunction);

button.addEventListener('click', function (e) {
    console.log(e.target.style.backgroundColor = 'blue');
  });

button.textContent = 'Click me';

container.appendChild(button);