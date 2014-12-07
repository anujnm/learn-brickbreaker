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


    }


}