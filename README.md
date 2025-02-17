Sudoku Game
This is 9\*9 sudoku game grid which generates currently 25 number prefilled to play(hard level). I tried to make the code modular as much as possible .
Architecture & Game Logic :
The Game first ask the name of the Player which is then displayed in the footer.
An answer matrix is created with backtracking and bitmasking and then a visible matrix is created by taking 25 numbers out of it randomly such that it is equally distributed in each big cell
**(Also the logic is written in such a way that it can be extensible for any number of prefilled cell)**
The visible matrix is connected with the actual grid on the webpage in uiHandler.js
The suduko game logic is written with the help of constructor function and prototype and i tried to segregate the game logic and ui logic

Validation:
As user whenever input in the cell it validates at that time only it dont show the user whether he is right or wrong it updates the counter and when player complete the grid and press check button it immediately return the result as we are already validating the result while the user is putting number in the input box thus reducing the complexity.

Extras: A extra button for test for developer is also added which when clicked complete the grid by taking numbers from the ans matrix.

<img width="1512" alt="Screenshot 2025-02-17 at 10 40 40 AM" src="https://github.com/user-attachments/assets/e7efeb3e-65ff-4c98-8840-a444f451e738" />

<img width="1512" alt="Screenshot 2025-02-17 at 10 40 46 AM" src="https://github.com/user-attachments/assets/64a02667-526f-41d1-8a0d-64c291f5d5b5" />
