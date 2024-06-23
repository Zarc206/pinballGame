function begining(){
    let stageObjects = [];

    let player1VerticalVelocity = 1;
    let player1VerticalPosition = 0;
    let player1HorizontalPosition = 0;
    let player1MovingRight = 0;
    let player1MovingLeft = 0;
    let player1DoubleJump = true;

    let player2VerticalVelocity = 1;
    let player2VerticalPosition = 0;
    let player2HorizontalPosition = 0;
    let player2MovingRight = 0;
    let player2MovingLeft = 0;
    let player2DoubleJump = true;

    let verticalMovement = 10;





    function createStage(){
        let stage = document.createElement("div")
        stage.style.width = String(screen.width) + "px";
        stage.id = "stage";
        stage.style.height = "50px";
        stage.style.background = "black";
        stage.style.position = "absolute";
        stage.style.top = "700px";
        stage.style.left = "0px";
        document.body.append(stage);

        stageObjects.push("stage");


        let platform1 = document.createElement("div");
        platform1.id = "platform1";
        platform1.style.height = "50px";
        platform1.style.background = "black";
        platform1.style.position = "absolute";
        platform1.style.width = "200px";
        platform1.style.top = "500px";
        platform1.style.left = "400px";
        document.body.append(platform1)

        stageObjects.push("platform1");
    }
    function createPlayers(){
        let player1 = document.createElement("div");
        player1.id = "player1"
        player1.style.height = "50px";
        player1.style.width = "50px";
        player1.style.background = "red";
        player1.style.position = "absolute";
        document.body.append(player1);

        let player2 = document.createElement("div");
        player2.id = "player2"
        player2.style.height = "50px";
        player2.style.width = "50px";
        player2.style.background = "blue";
        player2.style.position = "absolute";
        document.body.append(player2);
    }
    function applyGravity(){
        setTimeout(function(){
            player1VerticalVelocity += 5
            player2VerticalVelocity += 5
            applyGravity()
        }, 50)
    }
    function player1Fall(){
        setTimeout(function(){
        if (isCollide("stage","player1") == false){
            if (player1VerticalVelocity > 0){
            player1VerticalPosition += verticalMovement;
            } else if (player1VerticalVelocity < 0){
                player1VerticalPosition -= verticalMovement;

            }
        } else {
            player1VerticalVelocity = 5;
            player1DoubleJump = true;
        }
        document.getElementById("player1").style.top = String(player1VerticalPosition) + "px";
        player1Fall();
        },(500 * (1/(Math.abs(player1VerticalVelocity)))))
    }
    function player2Fall(){
        setTimeout(function(){
        let checkCollisions = 0;
        for (let i = 0; i < stageObjects.length; i++){
            if (isCollide(stageObjects[i],"player2") == true){
                checkCollisions += 1;
            }
        }
        if (checkCollisions == 0){
            if (player2VerticalVelocity > 0){
            player2VerticalPosition += verticalMovement;
            } else if (player2VerticalVelocity < 0){
                player2VerticalPosition -= verticalMovement;

            }
        } else {
            player2VerticalVelocity = 5;
            player2DoubleJump = true;
        }
        document.getElementById("player2").style.top = String(player2VerticalPosition) + "px";
        player2Fall();
        },(500 * (1/(Math.abs(player2VerticalVelocity)))))
    }
    function player1HorizontalMove(){
        setTimeout(function(){
                player1HorizontalPosition += player1MovingRight;
                player1HorizontalPosition += player1MovingLeft;

                document.getElementById("player1").style.left = String(player1HorizontalPosition) + "px";
                player1HorizontalMove();  
        },10)
    }
    function player2HorizontalMove(){
        setTimeout(function(){
            
            player2HorizontalPosition += player2MovingRight;
        
            player2HorizontalPosition += player2MovingLeft;

            document.getElementById("player2").style.left = String(player2HorizontalPosition) + "px";
            player2HorizontalMove();  
            
        },10)
    }
    function isCollide(a, b) {
        var aRect = document.getElementById(a).getBoundingClientRect();
        var bRect = document.getElementById(b).getBoundingClientRect();

    
        return !(
            ((aRect.top + aRect.height) < (bRect.top)) ||
            (aRect.top > (bRect.top + bRect.height)) ||
            ((aRect.left + aRect.width) < bRect.left) ||
            (aRect.left > (bRect.left + bRect.width))
        );
    }
    function addPlayer1Controls(){
        document.addEventListener('keydown', function(event) {
            if (event.key == "d"){
                player1MovingRight = 5;
            }
            if (event.key == "a"){
                player1MovingLeft = -5;
            }
            if (event.key == "w"){
                if (isCollide("stage","player1") == true){ 
                    player1VerticalPosition -= verticalMovement;
                    setTimeout(function(){
                        player1VerticalVelocity = -50;
                    },100)
                } else if (player1DoubleJump == true){
                    player1DoubleJump = false
                    player1VerticalPosition -= verticalMovement;
                        setTimeout(function(){
                            player1VerticalVelocity = -50;
                        },100)
            }
        }
        })
        document.addEventListener('keyup', function(event) {
            if (event.key == "d"){
                player1MovingRight = 0;
            }
            if (event.key == "a"){
                player1MovingLeft = 0;
            }
        })
    }
    function addPlayer2Controls(){
        document.addEventListener('keydown', function(event) {
            if (event.key == "ArrowRight"){
                player2MovingRight = 5;
            }
            if (event.key == "ArrowLeft"){
                player2MovingLeft = -5;
            }
            if (event.key == "ArrowUp"){
                if (isCollide("stage","player2") == true){ 
                    player2VerticalPosition -= verticalMovement;
                    setTimeout(function(){
                        player2VerticalVelocity = -50;
                    },100)
                } else if (player2DoubleJump == true){
                    player2DoubleJump = false
                    player2VerticalPosition -= verticalMovement;
                        setTimeout(function(){
                            player2VerticalVelocity = -50;
                        },100)
            } 
        }
        })
        document.addEventListener('keyup', function(event) {
            if (event.key == "ArrowRight"){
                player2MovingRight = 0;
            }
            if (event.key == "ArrowLeft"){
                player2MovingLeft = 0;
            }
        })
    }


    createStage();
    createPlayers();
    applyGravity();
    player1Fall();
    player1HorizontalMove();
    player2Fall();
    player2HorizontalMove();
    addPlayer1Controls();
    addPlayer2Controls();

}