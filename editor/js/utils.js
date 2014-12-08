var BASE_URL = "http://anujnm.koding.io/";



function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}


function getPredifinedCode(lesson_number) {


    var pd;


    var pd4 = "var score;\r\n" +
"var scoreGUIText;\r\n" +
"var brickList;\r\n" +
"var ballList;\r\n" +
"var ball;\r\n" +
"var paddleList;\r\n" +
"var paddle;\r\n" +
"var BRICK_TYPE_BLUE = 1;\r\n" +
"var BRICK_TYPE_ORANGE = 2;\r\n" +
"var BRICK_TYPE_RED = 3;\r\n" +
"var BRICK_TYPE_GREEN = 4;\r\n" +

"function onCreate() {\r\n" +
"                // create and set paddle\r\n" +
"                paddle = paddleList.addPaddle();\r\n" +
"                paddle.setX(game.world.centerX)\r\n" +
"                paddle.setY(550);\r\n" +
"                // create and set ball\r\n" +
"                ball = ballList.addBall(game.world.centerX, 500)\r\n" +
"                ball.setVelocityY(-300);\r\n" +
"                ball.setVelocityX(-75);\r\n" +
"                ball.playSpinAnimation();\r\n" +
"                // setup bricks\r\n" +
"                for (var y = 0; y < 4; y++) {\r\n" +
"                    for (var x = 0; x < 15; x++) {\r\n" +
"                        var brick = brickList.addBrick(120 + (x * 36), 100 + (y * 52));\r\n" +
"                        switch (y) {\r\n" +
"                            case 0:\r\n" +
"                                brick.setType(BRICK_TYPE_RED);\r\n" +
"                                break;\r\n" +
"                            case 1:\r\n" +
"                                brick.setType(BRICK_TYPE_GREEN);\r\n" +
"                                break;\r\n" +
"                            case 2:\r\n" +
"                                brick.setType(BRICK_TYPE_ORANGE);\r\n" +
"                                break;\r\n" +
"                            case 3:\r\n" +
"                                brick.setType(BRICK_TYPE_BLUE);\r\n" +
"                                break;\r\n" +
"                        }\r\n" +
"                    }\r\n" +
"                }\r\n" +
"            }\r\n" +
"function onUpdate() {\r\n" +
"                // handle paddle movement\r\n" +
"                if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {\r\n" +
"                    paddle.setX(paddle.getX() - 5);  // -5 here is the speed\r\n" +
"                }\r\n" +
"                else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {\r\n" +
"                    paddle.setX(paddle.getX() + 5); // -5 here is the speed\r\n" +
"                }\r\n" +
"                // reset ball just for debugging easier :)\r\n" +
"                if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {\r\n" +
"                    ball.setX(game.world.centerX);\r\n" +
"                    ball.setY(500);\r\n" +
"                    ball.setVelocityY(-300);\r\n" +
"                    ball.setVelocityX(-75);\r\n" +
"                }\r\n" +
"                // handle paddle collision\r\n" +
"                if (ball.isCollided(paddle)) {\r\n" +
"                    paddle.reflect(ball);\r\n" +
"                }\r\n" +
"                // handle bricks collision\r\n" +
"                var totalBricks = brickList.length();\r\n" +
"                var brickIndexToRemove = -1;\r\n" +
"                for (var i = 0; i < totalBricks; i++) {\r\n" +
"                    var brick = brickList.get(i);\r\n" +
"                    if (ball.isCollided(brick)) {\r\n" +
"                        brickIndexToRemove = i;\r\n" +
"                        brick.destroy();\r\n" +
"                        break;\r\n" +
"                    }\r\n" +
"                }\r\n" +
"                // remove brick from brick list\r\n" +
"                if (brickIndexToRemove >= 0) {\r\n" +
"                    brickList.remove(brickIndexToRemove);\r\n" +
"                }\r\n" +
"}\r\n";





    switch (lesson_number) {

        case "1":

            pd = "var paddleList; \n" +
"var paddle; \n" +
"var BRICK_TYPE_BLUE = 1; \n" +
"var BRICK_TYPE_ORANGE = 2; \n" +
"var BRICK_TYPE_RED = 3; \n" +
"var BRICK_TYPE_GREEN = 4; \n \n \n";

            return pd.concat('function onCreate() {\n \n} \n', " function onUpdate() {\n \n} \n");


        case "2":

            pd = "var brickList; \n" +
"var ballList; \n" +
"var ball; \n" +
"var paddleList; \n" +
"var paddle; \n" +


"var paddleList; \n" +
"var paddle; \n" +
"var BRICK_TYPE_BLUE = 1; \n" +
"var BRICK_TYPE_ORANGE = 2; \n" +
"var BRICK_TYPE_RED = 3; \n" +
"var BRICK_TYPE_GREEN = 4; \n \n" +


"function onCreate() {\r\n" +
"                    paddleList = new PaddleList();\r\n" +
"                    paddle = paddleList.addPaddle();\r\n" +
"                    paddle.setX(game.world.centerX)\r\n" +
"                    paddle.setY(550);\r\n" +
"                }\r\n" +
"function onUpdate() {\r\n" +
"                    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {\r\n" +
"                        paddle.setX(paddle.getX() - 5);  // -5 here is the speed\r\n" +
"                    }\r\n" +
"                    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {\r\n" +
"                        paddle.setX(paddle.getX() + 5); // -5 here is the speed\r\n" +
"                    }\r\n" +
"}\r\n";

            return pd;

        case "3":
            pd = "var brickList;\r\n" +
"var ballList;\r\n" +
"var ball;\r\n" +
"var paddleList;\r\n" +
"var paddle;\r\n" +
"var BRICK_TYPE_BLUE = 1;\r\n" +
"var BRICK_TYPE_ORANGE = 2;\r\n" +
"var BRICK_TYPE_RED = 3;\r\n" +
"var BRICK_TYPE_GREEN = 4;\r\n" +



"function onCreate() {\r\n" +
"                paddleList = new PaddleList();\r\n" +
"                paddle = paddleList.addPaddle();\r\n" +
"                paddle.setX(game.world.centerX)\r\n" +
"                paddle.setY(550);\r\n" +
"                ballList = new BallList();\r\n" +
"                ball = ballList.addBall(game.world.centerX, 500)\r\n" +
"                ball.setVelocityY(-300);\r\n" +
"                ball.setVelocityX(-75);\r\n" +
"                ball.playSpinAnimation();\r\n" +
"                brickList = new BrickList();\r\n" +
"                for (var x = 0; x < 15; x++) {\r\n" +
"                    brickList.addBrick(120 + (x * 36), 152);\r\n" +
"                }\r\n" +
"}\r\n" +
"function onUpdate() {\r\n" +
"                if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {\r\n" +
"                    paddle.setX(paddle.getX() - 5);  // -5 here is the speed\r\n" +
"                }\r\n" +
"                else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {\r\n" +
"                    paddle.setX(paddle.getX() + 5); // -5 here is the speed\r\n" +
"                }\r\n" +
"}\r\n";


            return pd;


        case "4":
            return pd4;



    }


}





function getLessonInfo(lesson_number) {

    var lt1 = "The first lesson will introduce you to the programming environment, the concepts of variables and objects, and if-else statements. " +
"\n \n In programming, a defined set of instructions that performs a specific task is called a function. A good analogy is to think of it as a procedure or routine that you would describe to someone for doing a specific task. That person will be able to use the same set of instructions over and over again if they want to repeat the task. " +
"\n \n In game programming, we are concerned with two specific functions- one function to create the various components of the game (onCreate), and one that will update the status of the game during gameplay (onUpdate). The code editor you see on the left currently contains empty blocks for you to type the instructions of what each of these two functions should do. In each of the rest of the tutorials, you will learn what instructions will help you create the BrickBreaker game." +
"\n \n  In this lesson, we're going to start with the basics- we're going to create the paddle and allow the player to move it left and right. We're not going to bother about the ball or the bricks just yet." +
"\n \n As you've probably already guessed, the code for creating the paddle will go into the onCreate function. To create the paddle, copy the following two lines of code into the onCreate function:" +
"\n \n paddleList = new PaddleList();" +
"\n paddle = paddleList.addPaddle();" +
"\n \n These two lines will tell the compiler (which is what helps the computer interpret the code) that you want to create a paddle object. In the first line you are telling the compiler to create a list of paddles and call that list paddleList. Note that this list is currently empty- it contains no paddles yet. The second line adds a paddle object to the paddleList, and calls that object paddle. Here the paddleList and paddle objects are called variables. Variables in javascript are representations of real world objects. They could be complex objects like paddles, or they could be more primitive like numbers or text. " +
"\n \n Next we must tell the compiler where we want the paddle object placed on the screen." +
"\n \n Game programming uses a cartesian coordinate system to position the components of the game. The origin (0,0) is located on the top-left corner of the screen. The x-coordinate increases from left to right, and the y-coordinate increases from top to bottom. Our game coordinate system will be 800 pixels wide and 600 pixels in height. " +
"\n \n We want the paddle to be positioned in the horizontal center, but near the bottom of the screen. To do this, we can use the call the setX and setY functions on the paddle object as shown below. " +
"\n \n paddle.setX(400)" +
"\n paddle.setY(550);" +
"\n \n Feel free to try using different numeric values instead of 400 and 550. Notice how the paddle's position changes with each new value. " +
"\n \n Next we have to allow the player to move the paddle left and right using the keyboard keys. This is different from just creating the paddle because the game has to check for keyboard presses several times a second. This is taken care of by our game engine. The game engine will call the onUpdate function 60 times per second. This means that each line of code inside the onUpdate function will run 60 times every second. " +
"\n \n To check whether or not the keyboard left or right keys have been pressed, we must use an if-logic block. An if-logic block is a block of code that is run only if a certain condition is met. In this case, that condition is that the keyboard left or right key was pressed. The syntax for writing such a block is as follows:" +
"\n \n if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {" +
"\n	// Any code here will only run if the left key is pressed" +
"\n }" +
"\n \n As mentioned in the code, this block is only run when the keyboard left key is pressed. Now we must use this keyboard press event to move the paddle to the left. You can get the current position of the paddle by using the getX function of the paddle, and set it to a new position using the setX function like before. For example, if you want the paddle to move to the left by 5 pixels on each keyboard press event, you can paste the following code inside the if block we wrote earlier:" +
"\n \n paddle.setX(paddle.getX() - 5);" +
"\n \n You can create the if-block for the right key press event yourself using what you've learnt above. If you're having trouble with the code, feel free to peek at the solution here:" +
"\n \n http://pastebin.com/bSzxMr6G " +
"\n \n To summarise, we've learnt the following concepts in this tutorial:" +
"\n Variables and Functions " +
"\n Game programming concepts" +
"\n if-logic blocks";












    var lt2 = "We ended the previous lesson by creating a paddle and allowing the player to move it left and right. In this lesson, we will also create the ball and a row of 15 bricks. The ball must move with a specified velocity, but it will not interact/collide with anything in its path. It will simply go through bricks and the paddle." +
"\n \n Since this lesson builds on top of the previous lesson, you will need all the code you wrote in the previous lesson. You can use the code from the solution here to ensure that you only need to worry about what we're teaching in this lesson: " +
"\n \n Lesson 1 solution: http://pastebin.com/bSzxMr6G " +
"\n \n First we're going to create the ball. The code to create the ball is very similar to the code to create a paddle. You can copy and paste these two lines into the onCreate function below the code for creating and setting the position of the paddle:" +
"\n \n ballList = new BallList();" +
"\n ball = ballList.addBall(400, 500)" +
"\n \n This will create the ball and set its position just above the paddle. " +
"\n \n Next we must set its velocity. As we mentioned in the previous lesson, even the ball object will have a set of properties and functions that are accessible to use, you can view its complete list of properties and functions in the API document: " +
"\n \n <a target=\"_blank\" href=\"https://docs.google.com/document/d/1PLEUAXkCpt7Wf1Bfypyd8ruCcA97k6GUuDnvKek5K6M/edit\"> Document Link </a> " +
"\n \n Since the game is two dimensional, we're concerned with velocity in two dimensions- x and y. The x and y velocities together will determine the angle and the speed at which the ball will move. You can set the velocity using the ball's setVelocityX and setVelocityY functions: " +
"\n \n ball.setVelocityY(-300);" +
"\n ball.setVelocityX(-75);" +
"\n \n Feel free to try different values for the x and y velocities. Notice how as you change the values, the ball will change its direction and speed. " +
"\n \n That's all we need for creating the ball. Next we move on to creating a row of 15 bricks. " +
"\n \n Creating a single brick is very similar to creating a paddle: " +
"\n \n brickList = new BrickList();" +
"\n brickList.addBrick(400, 152);" +
"\n \n To creating 15 bricks in a row, we could repeat the addBrick command 15 times with different values for the x coordinate, but this would be tedious. Instead, we're going to use a for-loop. A loop in programming is a set of commands that repeats until a certain condition is met. In this case, we want to repeat it one line of code exactly 15 times. To do this, instead of using the second line mentioned above, use the following for-loop:" +
" \n \n    for (var x = 0; x < 15; x++)" +
"    \n      {" +
"    \n         brickList.addBrick(120 + (x * 36), 152);" +
"    \n      }" +
"\n \n For this lesson, since we're only creating objects and not checking for updates, we don't need to add any code to the onUpdate function (except for the code written in the previous lesson).";




















    var lt3 = "In this lesson we'll expand from 1 row of bricks to 4 such rows of bricks, each of a different type. We'll also handle collisions of the ball against the paddle and the bricks. On colliding against the paddle, the ball will simply bounce off it. But on colliding against a brick, once the ball has bounced off it, the brick must get destroyed. " +
"\n \n Like always, this code builds on top of previous code. You can copy the code from the previous tutorials from here:" +
"\n \n http://pastebin.com/M69shiXT " +
"\n \n However, since we're going to add four rows of bricks instead of just one row, and since each row has a different type of brick, we're going to have to modify the brick creation code. " +
"\n \n In the previous lesson, since we only need to add one row of bricks, we only needed one for loop. To add multiple rows of bricks, we would have to run the same for-loop multiple times. We already learned how to run the same block of code multiple times- it's called loops! In this case, we're going to have to put the loop that created one row of bricks inside another loop that will run four times- once for each row. This is called a nested set of loops. " +
"\n \n To create such a nested set of loops, you can use the following code:" +
"\n \n                    for (var y = 0; y < 4; y++)" +
"\n                         {" +
"\n                           for (var x = 0; x < 15; x++)" +
"\n                             {" +
"\n                                var brick = brickList.addBrick(120 + (x * 36), 100 + (y * 52));" +
"\n		                        }" +
"\n	                        }" +
"\n \n This code above will create 4 rows of bricks, all of the same type. Now we must also specify what type of brick is being created in each loop. We already learned one way of doing this via if-logic blocks. Now we'll learn a similar logic construct called switch-case statements. " +
"\n \n A switch case statement is basically a substitute for long if-logic blocks that compare an variable to several values. Here we must find out what the row number (y-value) is and assign a type to the brick based on that row number. The code below demonstrates the use of switch case statements. You can add this code to the onCreate function immediately after the brickList.addBrick statement inside the nested for loops. " +
"\n \n                         switch (y) {" +
"\n                             case 0:" +
"\n                                  brick.setType(BRICK_TYPE_RED);" +
"\n                                    break;" +
"\n                                 case 1:" +
"\n                                     brick.setType(BRICK_TYPE_GREEN);" +
"\n                                    break;" +
"\n                                case 2:" +
"\n                                    brick.setType(BRICK_TYPE_ORANGE);" +
"\n                                    break;" +
"\n                                case 3:" +
"\n                                    brick.setType(BRICK_TYPE_BLUE);" +
"\n                                    break;" +
"\n                            }" +
"\n \n Now that our four rows of bricks are created, each of a different type, we can move on to handling collisions. However, before handling collisions, we're going to add a little feature that will help you debug the game. It's more of a cheat code than a feature. " +
"\n \n Basically, to help you with this tutorial, we want to allow you to re-spawn the ball everytime it misses the paddle collision by pressing space bar. While you should already know how to do this- we've provided the code below just in case. The code just checks for a spacebar key press in the onUpdate function and creates a new ball and places it in the center above the paddle. " +
"\n \n                    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))" +
"\n                        {" +
"\n                         ball.setX(game.world.centerX);" +
"\n                         ball.setY(500);" +
"\n                         ball.setVelocityY(-300);" +
"\n                         ball.setVelocityX(-75);" +
"\n                        }" +
"\n \n Now, moving on to collisions. Since collisions are to be checked for as the game is being played, the code that handles collisions must be placed in the onUpdate function. Handling collisions is not very difficult. The ball object has a function isCollided that returns whether or not it collided against another object. For example, to check for a collision against the paddle, the line of code required is " +
"\n \n                     if (ball.isCollided(paddle)) {" +
"\n 		                   // Handle collision here" +
"\n                         }" +
"\n \n On colliding against the paddle, the ball must simply be reflected by the paddle. The code to handle this is also very simple:" +
"\n \n paddle.reflect(ball);" +
"\n \n Place this code inside the if-block for paddle collisions above. " +
"\n \n Handling brick collisions is slightly more complicated because there are 15 of them on each of the 4 rows. This means we'll have to check for collisions 60 times. The bricks are all stored in the list called brickList, so we can run through the entire list in a loop and call the isCollided function on the ball with each brick as the parameter. The logic to remove the collided brick is slightly complicated, so we've pasted this below." +
"\n \n                     // handle bricks collision" +
"\n                    var totalBricks = brickList.length();" +
"\n                    var brickIndexToRemove = -1;" +
"\n                    for (var i = 0; i < totalBricks; i++) {" +
"\n                        var brick = brickList.get(i);" +
"\n                        if (ball.isCollided(brick))" +
"\n                        {" +
"\n                            brickIndexToRemove = i;" +
"\n                            brick.destroy();" +
"\n                            break;" +
"\n                        }" +
"\n                    }" +
"\n \n                     // remove brick from brick list" +
"\n                    if (brickIndexToRemove >= 0)" +
"\n                   {" +
"\n                        brickList.remove(brickIndexToRemove);" +
"\n                    }" +
"\n \n Basically, whenever the if condition for the isCollided function is true for a specific brick, the brick is destroyed. Once the brick is destroyed, it also needs to be removed from the brickList. But due to a limitation in the programming language, the brick list cannot be removed while it's being looped through. So it has to be done separately. This is handled using the brickIndexToRemove variable. " +
"\n \n With this, we have learnt about nested loops and switch cases. As you're playing the game, you'll notice that we're nearly done getting it ready for gameplay. If you weren't able to follow the instructions, you can use the solution code at the link below to understand what the tutorial was trying to teach you:" +
"\n \n http://pastebin.com/n0m8ug4c ";












    var lt4 = "Congratulations on making it this far! You're almost done creating the BrickBreaker game. All that's left for this lesson is to add a mechanism for keeping track and displaying the score. The score over here refers to the points gathered while destroying bricks. As in most versions of the BrickBreaker game, the number of points gathered on destroying a brick depends on which type of brick was destroyed." +
"\n \n As always, this lesson builds on top of previous lessons. You can copy the solution code for the previous lesson from this link before proceeding:" +
"\n \n http://pastebin.com/n0m8ug4c " +
"\n \n The scoring mechanism will require two variables- an integer variable that will remember the score, and a new type of object called GUIText to display the score. Don't worry about what GUIText means- for us, its just a piece of text that can be displayed in the game. Just like the other objects we've seen so far, you can find out more about this object in the API document:" +
"\n \n <a target=\"_blank\" href=\"https://docs.google.com/document/d/1PLEUAXkCpt7Wf1Bfypyd8ruCcA97k6GUuDnvKek5K6M/edit\">Document Link </a>" +
"\n \n Creation of these variables must be done in the onCreate function like always. The command to create the score variable and the GUIText object are very simple:" +
"\n \n                    score = 0;" +
"\n                    scoreGUIText = new GUIText();" +
"\n \n We must also position the scoreGUIText object by using the following code:" +
"\n \n                     scoreGUIText.setAlign(\"left\"); " +
"\n                    scoreGUIText.setX(5);" +
"\n                    scoreGUIText.setY(5);" +
"\n \n This will set the scoreGUIText object to the top left corner of the screen. " +
"\n \n The score will be increased only when a brick is destroyed. Since the logic for destroying bricks is handled in the onUpdate function, even the score logic will be placed there. Adding points to the score variable is very simple. Say you want to reward the user with 100 points everytime a red brick is destroyed, all you need to do is add the following line inside that brick's switch case statement:" +
"\n \n score += 100;" +
"\n \n You can add similar lines of code with different score values for each of the remaining brick collision switch case statements. That way each type of brick will reward the user a different number of points. " +
"\n \n Lastly we want the score displayed to the user to be updated during gameplay. For this we must update the scoreGUIText variable. This can be done using it's setText function. Simply append this line to the end of the onUpdate function:" +
"\n \n scoreGUIText.setText(\"Score: \" + score);" +
"\n \n With this, your game should be ready for play! The solution for this lesson can be found at:" +
"\n \n http://pastebin.com/1i5StP6y " +
"\n \n We encourage you to explore the API and continue adding features to this game. Some examples include having two balls instead of one. Or perhaps having two paddles- one at the top of the screen and one at the bottom instead of just one. The possibilities are endless! The complete API documentation can be found at:" +
"\n \n <a target=\"_blank\" href=\"https://docs.google.com/document/d/1PLEUAXkCpt7Wf1Bfypyd8ruCcA97k6GUuDnvKek5K6M/edit\">Document Link </a>";


    switch (lesson_number) {
        case "1":
            return lt1;
        case "2":
            return lt2;
        case "3":
            return lt3;
        case "4":
            return lt4;
    }
}



function getLessonTitle(lesson_number) {

    switch (lesson_number) {
        case "1":
            return "Lesson 1: Basics of game programming and if-blocks";
        case "2":
            return "Lesson 2: For loops";
        case "3":
            return "Lesson 3: Nested Loops and Switch Case";
        case "4":
            return "Lesson 4: Wrapping up";
    }

}