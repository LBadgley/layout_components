// append a ul
// append a li with 'spot', 'rover', 'bingo', 'joe'
import styles from './index.css';

const root = document.getElementById('root');
const ul = document.createElement('ul');
ul.className = styles.dogs;
root.appendChild(ul);

const bingo = document.createElement('li');
bingo.textContent = 'bingo';

const rover = document.createElement('li');
rover.textContent = 'rover';

const spot = document.createElement('li');
spot.textContent = 'spot';

const joe = document.createElement('li');
joe.textContent = 'joe';

ul.appendChild(bingo);
ul.appendChild(rover);
ul.appendChild(spot);
ul.appendChild(joe);

