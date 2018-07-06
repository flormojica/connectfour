let board = new Array(6);
for (let i = 0; i < 7; i++) board[i] = new Array();
console.log(board);
let currentPlayer = 'yellow';

let col = document.querySelectorAll('.column');
for (let i = 0; i < col.length; i++)
	col[i].addEventListener('click', function (event) {
            console.log(event.target.parentElement.querySelectorAll('.row'));
		for (let cell of Array.from(event.target.parentElement.querySelectorAll('.row')))
			if (cell.innerHTML === '') {
				console.log('found at ', cell);
				let checker = document.createElement('div');
				checker.classList.add('checker', currentPlayer);
                cell.appendChild(checker);
                board[i].push(currentPlayer === 'yellow' ? '0' : '1');
                console.log(board[i]);

				currentPlayer = currentPlayer === 'yellow' ? 'red' : 'yellow';
				break;
			}
	});

