function begining(){

    let player1VerticalVelocity = 1;
    let player1VerticalPosition = 0;
    let player1HorizontalPosition = 100;
    let player1MovingRight = 0;
    let player1MovingLeft = 0;
    let player1DoubleJump = true;
    let player1Direction = "right";
    let player1Wait = false; // if a player is waiting (cannot move)
    let player1AttackCooldown = false;
    let player1Crouch = false;
    let player1Defended = false;
    let player1Damage = 0;
    let player1VerticalAttack = 0;
    let player1HorizontalAttack = 0;
    let player1AttackVariable = 0;//generic attack varable for different classes
    let player1Keys = [];

    let player2VerticalVelocity = 1;
    let player2VerticalPosition = 0;
    let player2HorizontalPosition = 1200;
    let player2MovingRight = 0;
    let player2MovingLeft = 0;
    let player2DoubleJump = true;
    let player2Direction = "left";
    let player2Wait = false; // if a player is waiting (cannot move)
    let player2AttackCooldown = false;
    let player2Crouch = false;
    let player2Defended = false;
    let player2Damage = 0;
    let player2VerticalAttack = 0;
    let player2HorizontalAttack = 0;
    let player2AttackVariable = 0;//generic attack varable for different classes
    let player2Keys = [];

    let stageObjects = []; // list of pieces on the stage
    let verticalMovement = 10; //bumps the player up slightly before jumping
    let jumpForce = 50;
    //shooter,sword,jester
    character1 = "shooter";
    character2 = "jester";

    bulletSpeed = 30;
    bulletMoveTick = 20


    function createStage(){
        let stage = document.createElement("div")
        stage.style.width = String(screen.width) + "px";
        stage.id = "stage";
        stage.style.height = "50px";
        stage.style.background = "black";
        stage.style.position = "absolute";
        stage.style.top = "700px";
        stage.style.left = "0px";
        stage.style.zIndex = 5;
        document.body.append(stage);

        stageObjects.push("stage"); 
    }
    function createPlayers(){
        let player1 = document.createElement("div");
        player1.id = "player1"
        player1.style.height = "50px";
        player1.style.width = "50px";
        player1.style.background = playerBackground(character1);
        player1.style.position = "absolute";
        document.body.append(player1);

        let player2 = document.createElement("div");
        player2.id = "player2"
        player2.style.height = "50px";
        player2.style.width = "50px";
        player2.style.background = playerBackground(character2);
        player2.style.position = "absolute";
        document.body.append(player2);
    }
    function createShields(){
        let player1Shield = document.createElement("div");
        player1Shield.style.width = "40px";
        player1Shield.style.height = "40px";
        player1Shield.id = "player1Shield";
        player1Shield.style.position = "absolute";
        document.body.append(player1Shield);

        let player2Shield = document.createElement("div");
        player2Shield.style.width = "40px";
        player2Shield.style.height = "40px";
        player2Shield.id = "player2Shield";
        player2Shield.style.position = "absolute";
        document.body.append(player2Shield);
    }
    function createAttacks(){
        let player1Attack = document.createElement("div");
        player1Attack.style.width = "40px";
        player1Attack.style.height = "40px";
        player1Attack.id = "player1Attack";
        player1Attack.style.position = "absolute";
        document.body.append(player1Attack);

        let player2Attack = document.createElement("div");
        player2Attack.style.width = "40px";
        player2Attack.style.height = "40px";
        player2Attack.id = "player2Attack";
        player2Attack.style.position = "absolute";
        document.body.append(player2Attack);
    }
    function updateAttacks(){
        setTimeout(function(){
            let attack1 = document.getElementById("player1Attack");
            attack1.style.left = String(player1HorizontalPosition + player1HorizontalAttack) + "px";
            attack1.style.top = String(player1VerticalPosition + player1VerticalAttack) + "px";

            let attack2 = document.getElementById("player2Attack");
            attack2.style.left = String(player2HorizontalPosition + player2HorizontalAttack) + "px";
            attack2.style.top = String(player2VerticalPosition + player2VerticalAttack) + "px";

            updateAttacks();
        },30)
    }
    function createDamageBars(){
        let damageBar1 = document.createElement("div");
        damageBar1.style.width = "300px";
        damageBar1.style.height = "100px";
        damageBar1.style.background = "red";
        damageBar1.style.position = "absolute";
        damageBar1.id = "damageBar1";
        damageBar1.style.top = "750px";
        damageBar1.style.left = "0px";
        damageBar1.innerHTML = String(player1Damage) + "%";
        damageBar1.style.textAlign = "center";
        document.body.append(damageBar1); 

        let damageBar2 = document.createElement("div");
        damageBar2.style.width = "300px";
        damageBar2.style.height = "100px";
        damageBar2.style.background = "teal";
        damageBar2.style.position = "absolute";
        damageBar2.id = "damageBar2"
        damageBar2.style.top = "750px";
        damageBar2.style.right = "0px";
        damageBar2.innerHTML = String(player1Damage) + "%";
        damageBar2.style.textAlign = "center";
        document.body.append(damageBar2); 
    }
    function createVeticalIndicators(){
        let player1VerticalIndicator = document.createElement("div");
        player1VerticalIndicator.style.width = "100px";
        player1VerticalIndicator.style.height = "40px";
        player1VerticalIndicator.style.position = "absolute";
        player1VerticalIndicator.id = "player1VerticalIndicator";
        document.body.append(player1VerticalIndicator);

        let player2VerticalIndicator = document.createElement("div");
        player2VerticalIndicator.style.width = "100px";
        player2VerticalIndicator.style.height = "40px";
        player2VerticalIndicator.style.position = "absolute";
        player2VerticalIndicator.id = "player2VerticalIndicator";
        document.body.append(player2VerticalIndicator);
    }
    function updateVerticalIndicators(){
        setTimeout(function(){
            let indicator1 = document.getElementById("player1VerticalIndicator");
            let indicator2 = document.getElementById("player2VerticalIndicator");

            if (player1HorizontalPosition < 0){
                indicator1.style.left = "50px";
                indicator1.style.top = player1VerticalPosition + "px";
                indicator1.style.background = "red";
            } else if (player1HorizontalPosition > screen.width){
                indicator1.style.left = String(screen.width - 150) + "px";
                indicator1.style.top = player1VerticalPosition + "px";
                indicator1.style.background = "red";
            } else {
                indicator1.style.background = "none";
            }

            if (player2HorizontalPosition < 0){
                indicator2.style.left = "50px";
                indicator2.style.top = player2VerticalPosition + "px";
                indicator2.style.background = "teal";
            } else if (player2HorizontalPosition > screen.width){
                indicator2.style.left = String(screen.width - 150) + "px";
                indicator2.style.top = player2VerticalPosition + "px";
                indicator2.style.background = "teal";
            } else {
                indicator2.style.background = "none";
            }


            updateVerticalIndicators()
        },50)
    }
    function updateDamageBars(){
        setTimeout(function(){
            document.getElementById("damageBar1").innerHTML = String(player1Damage) + "%" + "<br>" + "Constols: w,a,s,d,q,e,r";
            document.getElementById("damageBar2").innerHTML = String(player2Damage) + "%" + "<br>" + "Constols: up,left,down,right,o,p,l";

            updateDamageBars();
        },100)
    }
    function applyGravity(){
        setTimeout(function(){
            
                player1VerticalVelocity += 5;
                player2VerticalVelocity += 5;

                if(player1VerticalPosition > screen.height){
                    player1VerticalPosition = 0;
                    player1HorizontalPosition = 50;
                    player1Damage = 0;
                }
                if(player2VerticalPosition > screen.height){
                    player2VerticalPosition = 0;
                    player2HorizontalPosition = 1200;
                    player2Damage = 0;
                }
            
            applyGravity();
        }, 50)
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
    function isNoIdColide(a,b){
        var aRect = a.getBoundingClientRect();
        var bRect = document.getElementById(b).getBoundingClientRect();

    
        return !(
            ((aRect.top + aRect.height) < (bRect.top)) ||
            (aRect.top > (bRect.top + bRect.height)) ||
            ((aRect.left + aRect.width) < bRect.left) ||
            (aRect.left > (bRect.left + bRect.width))
        );
    }
    function playerBackground(clas){
        if (clas == "shooter" ){
            return("red")
        }
        if (clas == "sword"){
            return("blue")
        }
        if (clas == "jester"){
            return("lime");
        }
    }
    function addPlayer1Controls(){
        document.addEventListener('keydown', function(event) {
            if (player1Wait == false){
                if((player1Crouch == false)&&(player1Defended == false)){
                    if (event.key == "d"){
                        player1MovingRight = 5;
                        player1Direction = "right";
                    }
                    if (event.key == "a"){
                        player1MovingLeft = -5;
                        player1Direction = "left";
                    }
                    if (event.key == "w"){
                        if (isCollide("stage","player1") == true){ 
                            player1VerticalPosition -= verticalMovement;
                            setTimeout(function(){
                                player1VerticalVelocity = -jumpForce;
                            },100)
                        } else if (player1DoubleJump == true){
                            player1DoubleJump = false
                            player1VerticalPosition -= verticalMovement;
                                setTimeout(function(){
                                    player1VerticalVelocity = -jumpForce;
                                },100)
                            }
                    }
                }
                if (event.key == "d"){
                    if(!(player1Keys.includes("d"))){
                        player1Keys.push("d");
                    }
                }
                if (event.key == "a"){
                    if(!(player1Keys.includes("a"))){
                        player1Keys.push("a");
                    }
                }
                if (event.key == "w"){
                    if(!(player1Keys.includes("w"))){
                        player1Keys.push("w");
                    }
                }
                if (event.key == "s"){
                    document.getElementById("player1").style.height = "25px"
                    player1MovingLeft = 0;
                    player1MovingRight = 0;
                    player1Crouch = true;
                    if(!(player1Keys.includes("s"))){
                        player1Keys.push("s");
                    }
                }
                if (event.key == "e"){
                    playerAttack(1);
                }
                if (event.key == "r"){
                    basicAttack(1);
                }
                if (event.key == "q"){
                    shield("player1",true);
                }
            }
        })
        document.addEventListener('keyup', function(event) {
            if (event.key == "d"){
                player1MovingRight = 0;
                if((player1Keys.includes("d"))){
                    for(let i = 0; i < player1Keys.length; i++){
                        if (player1Keys[i] == "d"){
                            player1Keys.splice(i,1);
                        }
                    }
                }
            }
            if (event.key == "a"){
                player1MovingLeft = 0;
                if((player1Keys.includes("a"))){
                    for(let i = 0; i < player1Keys.length; i++){
                        if (player1Keys[i] == "a"){
                            player1Keys.splice(i,1);
                        }
                    }
                }
            }
            if (event.key == "s"){
                player1VerticalPosition -= 30;
                document.getElementById("player1").style.height = "50px"
                player1Crouch = false;
                if((player1Keys.includes("s"))){
                    for(let i = 0; i < player1Keys.length; i++){
                        if (player1Keys[i] == "s"){
                            player1Keys.splice(i,1);
                        }
                    }
                }
            }
            if (event.key == "w"){
                if((player1Keys.includes("w"))){
                    for(let i = 0; i < player1Keys.length; i++){
                        if (player1Keys[i] == "w"){
                            player1Keys.splice(i,1);
                        }
                    }
                }
            }
            if (event.key == "q"){
                shield("player1",false);
            }
        })
    }
    function addPlayer2Controls(){
        document.addEventListener('keydown', function(event) {
            if(player2Wait == false){
                if((player2Crouch == false)&&(player2Defended == false)){
                    if (event.key == "ArrowRight"){
                        player2MovingRight = 5;
                        player2Direction = "right";
                    }
                    if (event.key == "ArrowLeft"){
                        player2MovingLeft = -5;
                        player2Direction = "left";
                    }
                    if (event.key == "ArrowUp"){
                        if (isCollide("stage","player2") == true){ 
                            player2VerticalPosition -= verticalMovement;
                            setTimeout(function(){
                                player2VerticalVelocity = -jumpForce;
                            },100)
                        } else if (player2DoubleJump == true){
                            player2DoubleJump = false
                            player2VerticalPosition -= verticalMovement;
                                setTimeout(function(){
                                    player2VerticalVelocity = -jumpForce;
                                },100)
                        } 
                    }
                }
                if (event.key == "ArrowLeft"){
                    if(!(player2Keys.includes("ArrowLeft"))){
                        player2Keys.push("ArrowLeft");
                    }
                }
                if (event.key == "ArrowRight"){
                    if(!(player2Keys.includes("ArrowRight"))){
                        player2Keys.push("ArrowRight");
                    }
                }
                if (event.key == "ArrowUp"){
                    if(!(player2Keys.includes("ArrowUp"))){
                        player2Keys.push("ArrowUp");
                    }
                }
                if (event.key == "ArrowDown"){
                    document.getElementById("player2").style.height = "25px"
                    player2MovingLeft = 0;
                    player2MovingRight = 0;
                    player2Crouch = true;
                    if(!(player2Keys.includes("ArrowDown"))){
                        player2Keys.push("ArrowDown");
                    }
                }
                if (event.key == "p"){
                    playerAttack(2);
                }
                if (event.key == "o"){
                    basicAttack(2);
                }
                if (event.key == "l"){
                    shield("player2",true);
                }
            }
        })
        document.addEventListener('keyup', function(event) {
            if (event.key == "ArrowRight"){
                player2MovingRight = 0;
                if((player2Keys.includes("ArrowRight"))){
                    for(let i = 0; i < player2Keys.length; i++){
                        if (player2Keys[i] == "ArrowRight"){
                            player2Keys.splice(i,1);
                        }
                    }
                }
            }
            if (event.key == "ArrowLeft"){
                player2MovingLeft = 0;
                if((player2Keys.includes("ArrowLeft"))){
                    for(let i = 0; i < player2Keys.length; i++){
                        if (player2Keys[i] == "ArrowLeft"){
                            player2Keys.splice(i,1);
                        }
                    }
                }
            }
            if (event.key == "ArrowDown"){
                player2VerticalPosition -= 30;
                document.getElementById("player2").style.height = "50px"
                player2Crouch = false;
                if((player2Keys.includes("ArrowDown"))){
                    for(let i = 0; i < player2Keys.length; i++){
                        if (player2Keys[i] == "ArrowDown"){
                            player2Keys.splice(i,1);
                        }
                    }
                }
            }
            if (event.key == "ArrowUp"){
                if((player2Keys.includes("ArrowUp"))){
                    for(let i = 0; i < player2Keys.length; i++){
                        if (player2Keys[i] == "ArrowUp"){
                            player1Keys.splice(i,1);
                        }
                    }
                }
            }
            if (event.key == "l"){
                shield("player2",false);
            }
        })
    }
    function player1Fall(){
        setTimeout(function(){
            let checkCollisions = 0;
            for (let i = 0; i < stageObjects.length; i++){
                if (isCollide(stageObjects[i],"player1") == true){
                    checkCollisions += 1;
                }
            }
        if (checkCollisions == 0){
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
        document.getElementById("player1Shield").style.top = document.getElementById("player1").style.top;

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
        document.getElementById("player2Shield").style.top = document.getElementById("player2").style.top;

        player2Fall();
        },(500 * (1/(Math.abs(player2VerticalVelocity)))))
    }
    function player1HorizontalMove(){
        setTimeout(function(){
                player1HorizontalPosition += player1MovingRight;
                player1HorizontalPosition += player1MovingLeft;

                document.getElementById("player1").style.left = String(player1HorizontalPosition) + "px";
                document.getElementById("player1Shield").style.left = document.getElementById("player1").style.left;

                player1HorizontalMove();  
        },10)
    }
    function player2HorizontalMove(){
        setTimeout(function(){
            
            player2HorizontalPosition += player2MovingRight;
        
            player2HorizontalPosition += player2MovingLeft;

            document.getElementById("player2").style.left = String(player2HorizontalPosition) + "px";
            document.getElementById("player2Shield").style.left = document.getElementById("player2").style.left;

            player2HorizontalMove();  
            
        },10)
    }
    function calculatePlayer1Force(force){
        setTimeout(function(){
            player1HorizontalPosition += force;
            if ( player1VerticalPosition < screen.height - 20){
                if (!((force < 5)&& (force > -5))){
                    if(force > 0){
                        calculatePlayer1Force((force - 5));
                    }
                    if(force < 0){
                        calculatePlayer1Force((force + 5));
                    }
                }
            }
        },50)
    }
    function calculatePlayer2Force(force){
        setTimeout(function(){
            player2HorizontalPosition += force;
            if ( player2VerticalPosition < screen.height - 20){
            if (!((force < 5)&& (force > -5))){
                if(force > 0){
                    calculatePlayer2Force((force - 5));
                }
                if(force < 0){
                    calculatePlayer2Force((force + 5));
                }
            }
        }
        },50)
    }
    function applyForce(force,player,direction){
        let vector = 1;
        let shieldValue = 1;
        if (direction == "left"){
            vector = -1;
        }
        if (player == "player1"){
            if(player1Defended == true){
                shieldValue = 0.5;
            }
            finalForce = force * player1Damage * vector * shieldValue;
            calculatePlayer1Force(finalForce);
        }
        if (player == "player2"){
            if(player2Defended == true){
                shieldValue = 0.5;
            }
            finalForce = force * player2Damage * vector * shieldValue;
            calculatePlayer2Force(finalForce);
        }
        
    }
    function applyDamage(damage,player){
        let shieldMultiplier = 1;
        if(player == "player1"){
            if(player1Defended == true){
                shieldMultiplier = 0.5;
            }
            player1Damage += damage * shieldMultiplier;

        }
        if(player == "player2"){
            if(player2Defended == true){
                shieldMultiplier = 0.5;
            }
            player2Damage += damage * shieldMultiplier;
        }
    }
    function playerAttack(player){
        let currentPlayer;
        if ((player == 1) && (player1AttackCooldown == false)){
            currentPlayer = character1;
        }
        if((player == 2) && (player2AttackCooldown == false)){
            currentPlayer = character2;
        }
        if (currentPlayer == "shooter"){
            shooterAttack(player);
        }
        if (currentPlayer == "sword"){
            swordAttack(player);
        }
        if (currentPlayer == "jester"){
            jesterAttack(player);
        }

    }
    function playerWait(player,time){
        if (player == 1){
            player1Wait = true;
            player1MovingLeft = 0;
            player1MovingRight = 0;
            setTimeout(function(){
                player1Wait = false;
                if(player1Keys.includes("a")){
                    player1MovingLeft = -5;
                }
                if(player1Keys.includes("d")){
                    player1MovingRight = 5;
                }
            },time)
           
        }
        if (player == 2){
            player2Wait = true;
            player2MovingLeft = 0;
            player2MovingRight = 0;
            setTimeout(function(){
                player2Wait = false;
                if(player2Keys.includes("ArrowLeft")){
                    player2MovingLeft = -5;
                }
                if(player2Keys.includes("ArrowRight")){
                    player2MovingRight = 5;
                }
            },time)
            
        }
    }
    function playerAttackCooldown(player,time){
        if (player == 1){
            player1AttackCooldown = true;
            setTimeout(function(){
                player1AttackCooldown = false;
            },time)
        }
        if (player == 2){
            player2AttackCooldown = true;
            setTimeout(function(){
                player2AttackCooldown = false;
            },time)
        }
    }
    function shooterAttack(player){
        let attackDamage = 2;
        let bullet = document.createElement("div");
        bullet.style.width = "50px";
        bullet.style.height = "10px";
        bullet.style.background = "teal";
        bullet.style.position = "absolute";
        document.body.append(bullet);

        playerWait(player,100);

        if (player == 1){
            bulletLeft = player1HorizontalPosition
            bullet.style.left = bulletLeft + "px";
            bullet.style.top = document.getElementById("player1").style.top;


            function bulletMove(direction, enemy, bulletPosition){
                setTimeout(function(){
                    let newBulletPosition;
                    bullet.style.left = bulletPosition + "px";
                    if(direction == "left"){
                        newBulletPosition = bulletPosition - bulletSpeed;
                    } else if (direction == "right"){
                        newBulletPosition = bulletPosition + bulletSpeed;
                    }
                    if ((newBulletPosition < -50) || (newBulletPosition > screen.width)){
                        bullet.remove();
                    } else if (isNoIdColide(bullet,enemy)){
                        applyDamage(attackDamage,"player2")
                        bullet.remove();
                    } else {
                        bulletMove(direction,enemy, newBulletPosition);
                    }
                },bulletMoveTick)
            }
            bulletMove(player1Direction,"player2",bulletLeft);
        }

        if (player == 2){
            bulletLeft = player2HorizontalPosition
            bullet.style.left = bulletLeft + "px";
            bullet.style.top = document.getElementById("player2").style.top;

            function bulletMove(direction, enemy, bulletPosition){
                setTimeout(function(){
                    let newBulletPosition;
                    bullet.style.left = bulletPosition + "px";
                    if(direction == "left"){
                        newBulletPosition = bulletPosition - bulletSpeed;
                    } else if (direction == "right"){
                        newBulletPosition = bulletPosition + bulletSpeed;
                    }
                    if ((newBulletPosition < -50) || (newBulletPosition > screen.width)){
                        bullet.remove();
                    } else if (isNoIdColide(bullet,enemy)){
                        applyDamage(attackDamage,"player1")
                        bullet.remove();
                    } else {
                        bulletMove(direction,enemy, newBulletPosition);
                    }
                },bulletMoveTick)
            }
            bulletMove(player2Direction,"player1",bulletLeft);
        }
    }
    function swordAttack(player){
        let attackDamage = 4;
        let attackStun = 100;
        playerWait(player,400);
        playerAttackCooldown(player, 750);

        if (player == 1){
            let slash = document.getElementById("player1Attack");
            slash.style.height = "10px";
            slash.style.width = "50px";

            enemy = "player2";
            if (player1Direction == "right"){
                player1HorizontalAttack = 50;
                player1VerticalAttack = 0;
            }
            if (player1Direction == "left"){
                player1HorizontalAttack = -50;
                player1VerticalAttack = 0;
            }
            slash.style.left = String(player1HorizontalPosition + player1HorizontalAttack) + "px";
            slash.style.top = String(player1VerticalPosition + player1VerticalAttack) + "px";
            
            slash.style.background = "green";

            setTimeout(function(){
            if (isNoIdColide(slash,enemy) == true){
                applyDamage(attackDamage,"player2")
                playerWait(2,attackStun);
                applyForce(attackDamage,"player2",player1Direction);

            }
            },50)
            setTimeout(function(){
                slash.style.background = "none";
            },200)
            setTimeout(function(){
                player1VerticalAttack = 30;
                slash.style.left = String(player1HorizontalPosition + player1HorizontalAttack) + "px";
                slash.style.top = String(player1VerticalPosition + player1VerticalAttack) + "px";
                slash.style.background = "green";
                if (isNoIdColide(slash,enemy) == true){
                    applyDamage(attackDamage,"player2");
                    applyForce(attackDamage,"player2",player1Direction);
                    playerWait(2,attackStun);

                }
            },300)
            setTimeout(function(){
                slash.style.background = "none";
            },400)
        }

        if (player == 2){

            let slash = document.getElementById("player2Attack");
            slash.style.height = "10px";
            slash.style.width = "50px";

            enemy = "player1";
            if (player2Direction == "right"){
                player2HorizontalAttack = 50;
                player2VerticalAttack = 0;
            }
            if (player2Direction == "left"){
                player2HorizontalAttack = -50;
                player2VerticalAttack = 0;
            }
            slash.style.left = String(player2HorizontalPosition + player2HorizontalAttack) + "px";
            slash.style.top = String(player2VerticalPosition + player2VerticalAttack) + "px";
            
            slash.style.background = "green";

            setTimeout(function(){
            if (isNoIdColide(slash,enemy) == true){
                applyDamage(attackDamage,"player1");
                playerWait(1,attackStun);
                applyForce(attackDamage,"player1",player2Direction)

            }
            },50)
            setTimeout(function(){
                slash.style.background = "none";
            },200)
            setTimeout(function(){
                player2VerticalAttack = 30;
                slash.style.left = String(player2HorizontalPosition + player2HorizontalAttack) + "px";
                slash.style.top = String(player2VerticalPosition + player2VerticalAttack) + "px";
                slash.style.background = "green";
                if (isNoIdColide(slash,enemy) == true){
                    applyDamage(attackDamage,"player1");
                    playerWait(1,attackStun);
                    applyForce(attackDamage,"player1",player2Direction)

                }
            },300)
            setTimeout(function(){
                slash.style.background = "none";
            },400)
        }
    }
    function jesterAttack(player){
        let attackDamage = 1;
        playerAttackCooldown(player, 100);

        

        if (player == 1){
            if (player1AttackVariable < 3){
                player1AttackVariable += 1

                ball = document.createElement("div");
                ball.style.width = "20px";
                ball.style.height = "20px";
                ball.style.background = "orange";
                ball.style.position = "absolute";
                ball.style.borderRadius = "50%";

                function updateBall(object,number){
                    setTimeout(function(){

                        if (number == 1){
                            object.style.left = player1HorizontalPosition + "px";
                        }
                        if (number == 3){
                            object.style.left = String(player1HorizontalPosition + 30) + "px";
                        }
                        if (number == 2){
                            object.style.top = String(player1VerticalPosition) + "px";
                            object.style.left = String(player1HorizontalPosition + 15) + "px";

                        } else {
                            object.style.top = String(player1VerticalPosition + 15) + "px";
                        }
                        if(player1AttackVariable < 4){
                            updateBall(object,number);
                        } else {
                            playerWait(1,100);
                            if (player1Direction == "right"){
                                object.style.left = String(player1HorizontalPosition + 125) + "px";
                                object.style.top = String(player1VerticalPosition + ((number - 1) * 15)) + "px";
                            }     
                            if (player1Direction == "left"){
                                object.style.left = String(player1HorizontalPosition - 95) + "px";
                                object.style.top = String(player1VerticalPosition + ((number - 1) * 15)) + "px";
                            }       
                            if(isNoIdColide(object,"player2")){
                                applyDamage(attackDamage,"player2");
                                applyForce(attackDamage,"player2",player1Direction)
                            }
                            setTimeout(function(){
                                object.remove()
                            },100)
                        }
                    },10)
                }

                updateBall(ball, player1AttackVariable);

                if (player1AttackVariable == 1){
                    ball.style.left = player1HorizontalPosition + "px";
                }
                if (player1AttackVariable == 3){
                    ball.style.left = String(player1HorizontalPosition + 30) + "px";
                }
                if (player1AttackVariable == 2){
                    ball.style.top = String(player1VerticalPosition) + "px";
                    ball.style.left = String(player1HorizontalPosition + 15) + "px";
                } else {
                    ball.style.top = String(player1VerticalPosition + 15) + "px";
                }
                document.body.append(ball);
               
            } else {
                player1AttackVariable += 1;
                if (player1Direction == "right"){
                   
                    for(let i = 0; i < 3; i++){
                        let trail = document.createElement("div");
                        trail.style.height = "10px";
                        trail.style.width = "75px";
                        trail.style.position = "absolute";
                        trail.style.left = String(player1HorizontalPosition + 50) + "px";
                        trail.style.top = String(player1VerticalPosition + ((i) * 15) + 5) + "px";
                        trail.style.background = "green";
                        document.body.append(trail);
                        if(isNoIdColide(trail,"player2")){
                            applyDamage(attackDamage,"player2");
                            applyForce(attackDamage,"player2",player1Direction)
                        }
                        setTimeout(function(){
                            trail.remove();
                        },100)
                    }
                }
                if (player1Direction == "left"){
                    for(let i = 0; i < 3; i++){
                        let trail = document.createElement("div");
                        trail.style.height = "10px";
                        trail.style.width = "75px";
                        trail.style.position = "absolute";
                        trail.style.left = String(player1HorizontalPosition - 75) + "px";
                        trail.style.top = String(player1VerticalPosition + ((i) * 15) + 5) + "px";
                        trail.style.background = "green";
                        document.body.append(trail);
                        if(isNoIdColide(trail,"player2")){
                            applyDamage(attackDamage,"player2");
                            applyForce(attackDamage,"player2",player1Direction)

                        }
                        setTimeout(function(){
                            trail.remove();
                        },100)
                    }
                }
                setTimeout(function(){
                    player1AttackVariable = 0;
                },50)
            }
        }
        

        if (player == 2){
            if (player2AttackVariable < 3){
                player2AttackVariable += 1

                ball = document.createElement("div");
                ball.style.width = "20px";
                ball.style.height = "20px";
                ball.style.background = "orange";
                ball.style.position = "absolute";
                ball.style.borderRadius = "50%";

                function updateBall(object,number){
                    setTimeout(function(){

                        if (number == 1){
                            object.style.left = player2HorizontalPosition + "px";
                        }
                        if (number == 3){
                            object.style.left = String(player2HorizontalPosition + 30) + "px";
                        }
                        if (number == 2){
                            object.style.top = String(player2VerticalPosition) + "px";
                            object.style.left = String(player2HorizontalPosition + 15) + "px";

                        } else {
                            object.style.top = String(player2VerticalPosition + 15) + "px";
                        }
                        if(player2AttackVariable < 4){
                            updateBall(object,number);
                        } else {
                            playerWait(2,100);
                            if (player2Direction == "right"){
                                object.style.left = String(player2HorizontalPosition + 125) + "px";
                                object.style.top = String(player2VerticalPosition + ((number - 1) * 15)) + "px";
                            }     
                            if (player2Direction == "left"){
                                object.style.left = String(player2HorizontalPosition - 95) + "px";
                                object.style.top = String(player2VerticalPosition + ((number - 1) * 15)) + "px";
                            }       
                            if(isNoIdColide(object,"player1")){
                                applyDamage(attackDamage,"player1");
                                applyForce(attackDamage,"player1",player2Direction);
                            }
                            setTimeout(function(){
                                object.remove()
                            },100)
                        }
                    },10)
                }

                updateBall(ball, player2AttackVariable);

                if (player2AttackVariable == 1){
                    ball.style.left = player2HorizontalPosition + "px";
                }
                if (player2AttackVariable == 3){
                    ball.style.left = String(player2HorizontalPosition + 30) + "px";
                }
                if (player2AttackVariable == 2){
                    ball.style.top = String(player2VerticalPosition) + "px";
                    ball.style.left = String(player2HorizontalPosition + 15) + "px";
                } else {
                    ball.style.top = String(player2VerticalPosition + 15) + "px";
                }
                document.body.append(ball);
               
            } else {
                player2AttackVariable += 1;
                if (player2Direction == "right"){
                   
                    for(let i = 0; i < 3; i++){
                        let trail = document.createElement("div");
                        trail.style.height = "10px";
                        trail.style.width = "75px";
                        trail.style.position = "absolute";
                        trail.style.left = String(player2HorizontalPosition + 50) + "px";
                        trail.style.top = String(player2VerticalPosition + ((i) * 15) + 5) + "px";
                        trail.style.background = "green";
                        document.body.append(trail);
                        if(isNoIdColide(trail,"player1")){
                            applyDamage(attackDamage,"player1");
                            applyForce(attackDamage,"player1",player2Direction);
                        }
                        setTimeout(function(){
                            trail.remove();
                        },100)
                    }
                }
                if (player2Direction == "left"){
                    for(let i = 0; i < 3; i++){
                        let trail = document.createElement("div");
                        trail.style.height = "10px";
                        trail.style.width = "75px";
                        trail.style.position = "absolute";
                        trail.style.left = String(player2HorizontalPosition - 75) + "px";
                        trail.style.top = String(player2VerticalPosition + ((i) * 15) + 5) + "px";
                        trail.style.background = "green";
                        document.body.append(trail);
                        if(isNoIdColide(trail,"player1")){
                            applyDamage(attackDamage,"player1");
                            applyForce(attackDamage,"player1",player2Direction);

                        }
                        setTimeout(function(){
                            trail.remove();
                        },100)
                    }
                }
                setTimeout(function(){
                    player2AttackVariable = 0;
                },50)
            }
        }



    }
    function basicAttack(player){
        let attackDamage = 2;
        let attackStun = 100;
        let punch;
        let enemy;
        let leftAdd;
        let direction;
        let enemyNumber;
        playerWait(player,100);
        playerAttackCooldown(player, 200);

        if(player == 1){
            player1VerticalAttack = 0;
            punch = document.getElementById("player1Attack");
            punch.style.top = player1VerticalPosition + "px";
            enemy = "player2";
            if (player1Direction == "right"){
                leftAdd = 50;
            }
            if (player1Direction == "left"){
                leftAdd = -20;
            }
            punch.style.left = String(player1HorizontalPosition + leftAdd) + "px";
            player1HorizontalAttack = leftAdd;
            direction = player1Direction;
            enemyNumber = 1;
        }
        if(player == 2){
            player2VerticalAttack = 0;
            punch = document.getElementById("player2Attack");
            punch.style.top = player2VerticalPosition + "px";
            enemy = "player1";
            if (player2Direction == "right"){
                leftAdd = 50;
            }
            if (player2Direction == "left"){
                leftAdd = -20;
            }
            punch.style.left = String(player2HorizontalPosition + leftAdd) + "px";
            player2HorizontalAttack = leftAdd;
            direction = player2Direction;
            enemyNumber = 2;
        }
        
         punch.style.width = "20px";
         punch.style.height = "50px";
         punch.style.background = "orange";

         if(isNoIdColide(punch,enemy)){
            applyDamage(attackDamage,enemy);
            applyForce(attackDamage,enemy,direction);
            playerWait(enemyNumber,attackStun);
         }
         setTimeout(function(){
            punch.style.background = "none";
         },100)
         
    }
    function shield(player,on){
        let currentShield;
        if(player == "player1"){
            currentShield = document.getElementById("player1Shield");
            player1Defended = on;
            player1MovingRight = 0;
            player1MovingLeft = 0;

        }
        if(player == "player2"){
            currentShield = document.getElementById("player2Shield");
            player2Defended = on;
            player2MovingRight = 0;
            player2MovingLeft = 0;
        }
        if (on == true){
            currentShield.style.border = "5px solid orange";
            currentShield.style.left = document.getElementById(player).style.left;
            currentShield.style.top = document.getElementById(player).style.top;
        }
        if (on == false){
            currentShield.style.border = "none";
            if(player1Keys.includes("a")){
                player1MovingLeft = -5;
            }
            if(player1Keys.includes("d")){
                player1MovingRight = 5;
            }
        }

    }

    createStage();
    createPlayers();
    createShields();
    createAttacks();
    updateAttacks();
    createDamageBars();
    createVeticalIndicators();
    updateVerticalIndicators();
    applyGravity();
    player1Fall();
    player1HorizontalMove();
    player2Fall();
    player2HorizontalMove();
    addPlayer1Controls();
    addPlayer2Controls();
    updateDamageBars();

}