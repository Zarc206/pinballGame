function begining(){
        document.body.style.background = "yellow";
        let characters = [];
        let player1Class = 0;
        let player2Class = 0;
        let classNumber = 0;
        let currentPlayerSelect = 0;
        let developerArt = false;
        let inGame = false;

        function addCharacter(clas){
            let square = document.createElement("div");
            square.style.width = "90px";
            square.style.height = "90px";
            square.style.border = "5px solid black";
            square.style.background = playerBackground(clas);
            square.innerHTML = clas;
            square.style.textAlign = "center";
            square.style.position = "absolute";
            square.style.top = "100px"
            square.style.left = String(50 + 95 * classNumber) + "px";
            square.id = "square " + clas;

            square.onclick = function(){
                if (currentPlayerSelect == 1){
                    document.getElementById("player1Select").style.background = playerBackground(clas);
                    player1Class = clas;

                }
                if (currentPlayerSelect == 2){
                    document.getElementById("player2Select").style.background = playerBackground(clas);
                    player2Class = clas;
                }
            }
            characters.push(clas);
            document.body.append(square);

            let info = document.createElement("div");
            info.style.width = "90px";
            info.style.height = "90px";
            info.style.border = "5px solid black"
            info.style.background = playerBackground(clas);
            info.innerHTML = "INFO";
            info.style.textAlign = "center";
            info.style.position = "absolute";
            info.style.top = "195px"
            info.style.left = String(50 + 95 * classNumber) + "px";
            info.id = "info" + clas;



            info.onclick = function(){
                createInfoScreen(clas);
            }
            document.body.append(info);
            
            classNumber += 1;


        }
        function createInfoScreen(clas){
            let window = document.createElement("div");
            window.style.width =   screen.width + "px";
            window.style.height =  screen.height + "px";
            window.style.background = "orange";
            window.style.zIndex = 100;
            window.style.position = "absolute";
            window.style.left = "0px";
            window.style.top = "0px";
            document.body.append(window);

            let infoWords = document.createElement("div");
            infoWords.style.width = "490px"
            infoWords.style.border = "5px solid black";
            infoWords.style.height = "250px";
            infoWords.style.background = playerBackground(clas);
            infoWords.style.zIndex = 101;
            infoWords.style.position = "absolute";
            infoWords.style.left = String(screen.width/2 - 250) + "px";
            infoWords.style.top = "50px";
            infoWords.style.textAlign = "center";
            document.body.append(infoWords);

            let xButton = document.createElement("div");
            xButton.style.width = "50px";
            xButton.style.height = "50px";
            xButton.style.position = "absolute";
            xButton.style.left = "0px";
            xButton.style.top = "0px";
            xButton.style.background = "red";
            xButton.style.zIndex = 101
            xButton.onclick = function(){
                window.remove();
                xButton.remove();
                infoWords.remove();
            }
            document.body.append(xButton);

            if(clas == "shooter"){
                infoWords.innerHTML = "SHOOTER <br> <br>A long ranged character with a gun. Launch repetative attacks to whittle down your enemy.<br> <br> MAIN: launch a weak projectile with no knockback (2 damage) <br><br> SIDE: charge and fire a slow-moving missile with heavy knockback (8 damage) <br> <br>UP: propell yourself upwards with three quick downwards bursts (2 damage)";
            }
            if (clas == "sword"){
                infoWords.innerHTML = "SWORD <br><br> A short ranged charcter with a deadly sword. Use quick movements and attacks to knock back your enemy.<br><br> MAIN: cut two quick slices in front of you with some knockback (4 damage)<br><br> SIDE: dash to the side slicing everything in your way with some knockback (4 damage) <br><br> UP: take to the sky lauching yourself upwards slashing any enemy infront of you with some knockback (4 damage)";
            }
            if (clas == "jester"){
                infoWords.innerHTML = "JESTER <br><br> Definitely NOT doing any courting. <br><br> MAIN: Juggle three balls and throw them at your enemy doing some knockback (damage and knockback scale <br><br> SIDE: cartwheel to the side dealing damage and some knockback when you colide with an enemy (2 damage) <br><br> UP: disappear in a puff of smoke and explode upwards dealing heavy damage and knockback (15 damage)";
            }

        }
        function playerBackground(clas){
            if (clas == "shooter" ){
                return("red")
            }
            if (clas == "sword"){
                return("cyan")
            }
            if (clas == "jester"){
                return("lime");
            }
            if (clas == "trapper"){
                return("yellow")
            }
        }
        function addStartButton(){
            let startButton = document.createElement("div");
            startButton.style.width = "200px";
            startButton.style.height = "200px";
            startButton.style.background = "lime";
            startButton.style.position = "absolute";
            startButton.innerHTML = "start";
            startButton.style.textAlign = "center";
            startButton.style.right = String(screen.width/2 - 100) + "px";
            startButton.style.bottom = "50px";
            startButton.onclick = function(){
                if (!((player1Class == 0)||(player2Class == 0))){
                startBattle(player1Class,player2Class);
                document.getElementById("player1Select").remove();
                document.getElementById("player2Select").remove();

                startButton.remove();
                for (let i = 0; i < characters.length; i++){
                    document.getElementById("square "+ characters[i]).remove();
                    document.getElementById("info" + characters[i]).remove();
                }
            }
            }
            document.body.append(startButton);

        }
        function addPlayerSelect(){
            let player1Select = document.createElement("div");
            player1Select.style.width = "180px";
            player1Select.style.height = "180px";
            player1Select.style.background = "magenta";
            player1Select.style.position = "absolute";
            player1Select.style.bottom = "50px";
            player1Select.style.left = "200px";
            player1Select.style.border = "10px solid black";
            player1Select.onclick = function(){
                currentPlayerSelect = 1;
            }
            player1Select.id = "player1Select";
            document.body.append(player1Select);

            let player2Select = document.createElement("div");
            player2Select.style.width = "180px";
            player2Select.style.height = "180px";
            player2Select.style.background = "teal";
            player2Select.style.position = "absolute";
            player2Select.style.bottom = "50px";
            player2Select.style.right = "200px";
            player2Select.style.border = "10px solid black";
            player2Select.onclick = function(){
                currentPlayerSelect = 2;
            }
            player2Select.id = "player2Select";
            document.body.append(player2Select);
        }

        addCharacter("shooter");
        addCharacter("sword");
        addCharacter("jester");
        addCharacter("trapper");

        addStartButton();
        addPlayerSelect();

        function startBattle(player1Class,player2Class){
            inGame = true;
            document.body.style.background = "white";
            let player1VerticalVelocity = 1;
            let player1VerticalPosition = 0;
            let player1HorizontalPosition = 250;
            let player1MovingRight = 0;
            let player1MovingLeft = 0;
            let player1DoubleJump = true;
            let player1ArialAttack = true;
            let player1Direction = "right";
            let player1Wait = false; // if a player is waiting (cannot move)
            let player1AttackCooldown = false;
            let player1Crouch = false;
            let player1Defended = false;
            let player1Invincible = false;
            let player1FrozenVertical = false;
            let player1FrozenHorizontal = false;
            let player1Damage = 0;
            let player1Lives = 3;
            let player1VerticalAttack = 0;
            let player1HorizontalAttack = 0;
            let player1AttackVariable = 0;//generic attack varable for different classes
            let player1Keys = [];

            let player2VerticalVelocity = 1;
            let player2VerticalPosition = 0;
            let player2HorizontalPosition = 1150;
            let player2MovingRight = 0;
            let player2MovingLeft = 0;
            let player2DoubleJump = true;
            let player2ArialAttack = true;
            let player2Direction = "left";
            let player2Wait = false; // if a player is waiting (cannot move)
            let player2AttackCooldown = false;
            let player2Crouch = false;
            let player2Defended = false;
            let player2Invincible = false;
            let player2FrozenVertical = false;
            let player2FrozenHorizontal = false;
            let player2Damage = 0;
            let player2Lives = 3;
            let player2VerticalAttack = 0;
            let player2HorizontalAttack = 0;
            let player2AttackVariable = 0;//generic attack varable for different classes
            let player2Keys = [];

            let stageObjects = []; // list of pieces on the stage
            let fieldObjects = []; // list of objects on the field
            let verticalMovement = 10; //bumps the player up slightly before jumping
            let jumpForce = 50;
            //shooter,sword,jester
            let character1 = player1Class;
            let character2 = player2Class;

            bulletSpeed = 30;
            bulletMoveTick = 20

            function createStage(){
                let stage = document.createElement("div")
                stage.style.width = String(screen.width - 400) + "px";
                stage.id = "stage";
                stage.style.height = "10px";
                if(developerArt == true){
                    stage.style.background = "black";
                    stage.style.border = "none"
                    stage.style.width = String(screen.width - 400) + "px";
                    stage.style.height = "10px";
                } else {
                    stage.style.background = "black";
                    stage.style.border = "2px solid white"
                    stage.style.width = String(screen.width - 410) + "px";
                    stage.style.height = "5px";
                    document.body.style.background = "black";



                    function createStar(){
                        let star = document.createElement("div");
                        star.style.height = "1px";
                        star.style.width = "1px";
                        star.style.background = "white";
                        star.style.position = "absolute";
                        star.style.left = String(Math.floor(Math.random() * screen.width)) + "px";
                        star.style.top = String(Math.floor(Math.random() * screen.height)) + "px";
                        star.style.zIndex = 1;
                        document.body.append(star);
                        fieldObjects.push(star);
                    }

                    for(let i = 0; i < 200; i++){
                        createStar();
                    }
                }
                stage.style.position = "absolute";
                stage.style.top = "650px";
                stage.style.left = "200px";
                stage.style.zIndex = 5;
                fieldObjects.push(stage);

                document.body.append(stage);

                let stageBottom = document.createElement("div")
                stageBottom.style.width = String(screen.width - 400) + "px";
                stageBottom.id = "stageBottom";
                stageBottom.style.height = "40px";
                if (developerArt == true){
                    stageBottom.style.background = "orange";
                }
                stageBottom.style.position = "absolute";
                stageBottom.style.top = "660px";
                stageBottom.style.left = "200px";
                stageBottom.style.zIndex = 5;
                fieldObjects.push(stageBottom);

                document.body.append(stageBottom);

                stageObjects.push("stage"); 
            }     
            function createPlayers(){
                let player1 = document.createElement("div");
                player1.id = "player1"
                player1.style.height = "40px";
                player1.style.width = "40px";
                player1.style.border = "5px solid magenta";
                player1.style.background = playerBackground(character1);
                player1.style.position = "absolute";
                player1.style.zIndex = 3;
                fieldObjects.push(player1);
                document.body.append(player1);

                let player2 = document.createElement("div");
                player2.id = "player2"
                player2.style.height = "40px";
                player2.style.width = "40px";
                player2.style.border = "5px solid teal";
                player2.style.background = playerBackground(character2);
                player2.style.position = "absolute";
                player2.style.zIndex = 3;
                fieldObjects.push(player2);
                document.body.append(player2);
            }
            function createShields(){
                let player1Shield = document.createElement("div");
                player1Shield.style.width = "40px";
                player1Shield.style.height = "40px";
                player1Shield.id = "player1Shield";
                player1Shield.style.position = "absolute";
                player1Shield.style.zIndex = 5;
                fieldObjects.push(player1Shield);
                document.body.append(player1Shield);

                let player2Shield = document.createElement("div");
                player2Shield.style.width = "40px";
                player2Shield.style.height = "40px";
                player2Shield.id = "player2Shield";
                player2Shield.style.position = "absolute";
                player2Shield.style.zIndex = 5;
                fieldObjects.push(player2Shield);
                document.body.append(player2Shield);
            }
            function createAttacks(){
                let player1Attack = document.createElement("div");
                player1Attack.style.width = "40px";
                player1Attack.style.height = "40px";
                player1Attack.id = "player1Attack";
                player1Attack.style.position = "absolute";
                player1Attack.style.zIndex = 1;
                fieldObjects.push(player1Attack);
                document.body.append(player1Attack);

                let player2Attack = document.createElement("div");
                player2Attack.style.width = "40px";
                player2Attack.style.height = "40px";
                player2Attack.id = "player2Attack";
                player2Attack.style.position = "absolute";
                player2Attack.style.zIndex = 1;
                fieldObjects.push(player2Attack);
                document.body.append(player2Attack);
            }
            function updateAttacks(){
                setTimeout(function(){
                    if(inGame == true){
                        let attack1 = document.getElementById("player1Attack");
                        attack1.style.left = String(player1HorizontalPosition + player1HorizontalAttack) + "px";
                        attack1.style.top = String(player1VerticalPosition + player1VerticalAttack) + "px";

                        let attack2 = document.getElementById("player2Attack");
                        attack2.style.left = String(player2HorizontalPosition + player2HorizontalAttack) + "px";
                        attack2.style.top = String(player2VerticalPosition + player2VerticalAttack) + "px";

                        updateAttacks();
                    }
                },30)
            }
            function createDamageBars(){
                let damageBar1 = document.createElement("div");
                damageBar1.style.width = "300px";
                damageBar1.style.height = "100px";
                damageBar1.style.background = "magenta";
                damageBar1.style.position = "absolute";
                damageBar1.id = "damageBar1";
                damageBar1.style.top = "0px";
                damageBar1.style.left = "0px";
                damageBar1.style.textAlign = "center";
                damageBar1.style.zIndex = 50;
                fieldObjects.push(damageBar1);
                document.body.append(damageBar1); 

                let damageBar2 = document.createElement("div");
                damageBar2.style.width = "300px";
                damageBar2.style.height = "100px";
                damageBar2.style.background = "teal";
                damageBar2.style.position = "absolute";
                damageBar2.id = "damageBar2"
                damageBar2.style.top = "0px";
                damageBar2.style.right = "0px";
                damageBar2.innerHTML = String(player1Damage) + "%<br> Lives:" + String(player2Lives);
                damageBar2.style.textAlign = "center";
                damageBar2.style.zIndex = 50;
                fieldObjects.push(damageBar2);
                document.body.append(damageBar2); 
            }
            function createVeticalIndicators(){
                let player1VerticalIndicator = document.createElement("div");
                player1VerticalIndicator.style.width = "100px";
                player1VerticalIndicator.style.height = "40px";
                player1VerticalIndicator.style.position = "absolute";
                player1VerticalIndicator.id = "player1VerticalIndicator";
                fieldObjects.push(player1VerticalIndicator);
                document.body.append(player1VerticalIndicator);

                let player2VerticalIndicator = document.createElement("div");
                player2VerticalIndicator.style.width = "100px";
                player2VerticalIndicator.style.height = "40px";
                player2VerticalIndicator.style.position = "absolute";
                player2VerticalIndicator.id = "player2VerticalIndicator";
                fieldObjects.push(player2VerticalIndicator);
                document.body.append(player2VerticalIndicator);
            }
            function updateVerticalIndicators(){
                setTimeout(function(){
                    if (inGame == true){
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
                }
                },50)
            }
            function updateDamageBars(){
                setTimeout(function(){
                    if(inGame == true){
                        document.getElementById("damageBar1").innerHTML = String(player1Damage) + "%" + "<br>" + "Constols: w,a,s,d,r,f,c" + "<br> Lives:" + String(player1Lives);
                        document.getElementById("damageBar2").innerHTML = String(player2Damage) + "%" + "<br>" + "Constols: up,left,down,right,o,p,l" + "<br> Lives:" + String(player2Lives);

                        updateDamageBars();
                    }
                },100)
            }
            function applyGravity(){
                setTimeout(function(){
                    if(inGame == true){
                        if (player1FrozenVertical == false){
                            player1VerticalVelocity += 5;
                        }
                        if (player2FrozenVertical == false){
                            player2VerticalVelocity += 5;
                        }

                        if(player1VerticalPosition > screen.height + 150){
                            player1VerticalPosition = 0;
                            player1HorizontalPosition = 250;
                            player1Damage = 0;
                            player1Lives -= 1;
                        }
                        if(player2VerticalPosition > screen.height + 150){
                            player2VerticalPosition = 0;
                            player2HorizontalPosition = 1150;
                            player2Damage = 0;
                            player2Lives -= 1;
                        }
                        if((player1Lives <= 0) || (player2Lives <= 0)){
                            endGame();
                        }

                    applyGravity();
                    }
                }, 50)
            } // also covers character death
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
            function addPlayer1Controls(){
                function player1ControlDown(event){
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
                                    if(isCollide("stageBottom","player1")){
                                        player1VerticalPosition -= 60;
                                    } else {
                                        player1VerticalPosition -= verticalMovement;
                                        setTimeout(function(){
                                            player1VerticalVelocity = -jumpForce;
                                        },100)
                                    }
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
                        if (event.key == "r"){
                            if(!(player1Keys.includes("r"))){
                                player1Keys.push("r");
                            }
                        }
                        if (event.key == "s"){
                            if (player1FrozenVertical == false){
                            document.getElementById("player1").style.height = "25px"
                            player1MovingLeft = 0;
                            player1MovingRight = 0;
                            player1Crouch = true;
                            if(!(player1Keys.includes("s"))){
                                player1Keys.push("s");
                            }
                        }
                        }
                        if (event.key == "r"){
                            playerAttack(1);
                        }
                        if (event.key == "f"){
                            basicAttack(1);
                        }
                        if (event.key == "c"){
                            shield("player1",true);
                        }
                    }
                }
                function player1ControlUp(event){
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
                        if (player1FrozenVertical == false){
                        player1VerticalPosition -= 30;
                        document.getElementById("player1").style.height = "40px"
                        player1Crouch = false;
                        if((player1Keys.includes("s"))){
                            for(let i = 0; i < player1Keys.length; i++){
                                if (player1Keys[i] == "s"){
                                    player1Keys.splice(i,1);
                                }
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
                    if (event.key == "r"){
                        if((player1Keys.includes("r"))){
                            for(let i = 0; i < player1Keys.length; i++){
                                if (player1Keys[i] == "r"){
                                    player1Keys.splice(i,1);
                                }
                            }
                        }
                    }
                    if (event.key == "c"){
                        shield("player1",false);
                    }
                }

                document.addEventListener('keydown',player1ControlDown);
                document.addEventListener('keyup', player1ControlUp);
                function checkremove(){
                    setTimeout(function(){
                        if (inGame == false){
                                document.removeEventListener('keydown',player1ControlDown);
                                document.removeEventListener('keyup', player1ControlUp);
                        } else {
                            checkremove()
                        }
                    },50)
                }
                checkremove();
            }
            function addPlayer2Controls(){
                function player2ControlDown(event){
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
                                    if(isCollide("stageBottom","player2")){
                                        player2VerticalPosition -= 60;
                                    } else { 
                                    player2VerticalPosition -= verticalMovement;
                                    setTimeout(function(){
                                        player2VerticalVelocity = -jumpForce;
                                    },100)
                                }
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
                        if (event.key == "p"){
                            if(!(player2Keys.includes("p"))){
                                player2Keys.push("p");
                            }
                        }
                        if (event.key == "ArrowDown"){
                            if (player2FrozenVertical == false){
                            document.getElementById("player2").style.height = "25px"
                            player2MovingLeft = 0;
                            player2MovingRight = 0;
                            player2Crouch = true;
                            if(!(player2Keys.includes("ArrowDown"))){
                                player2Keys.push("ArrowDown");
                            }
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
                }
                function player2ControlUp(event){
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
                        if (player2FrozenVertical == false){
                        player2VerticalPosition -= 30;
                        document.getElementById("player2").style.height = "40px"
                        player2Crouch = false;
                        if((player2Keys.includes("ArrowDown"))){
                            for(let i = 0; i < player2Keys.length; i++){
                                if (player2Keys[i] == "ArrowDown"){
                                    player2Keys.splice(i,1);
                                }
                            }
                        }
                    }
                    }
                    if (event.key == "ArrowUp"){
                        if((player2Keys.includes("ArrowUp"))){
                            for(let i = 0; i < player2Keys.length; i++){
                                if (player2Keys[i] == "ArrowUp"){
                                    player2Keys.splice(i,1);
                                }
                            }
                        }
                    }
                    if (event.key == "p"){
                        if((player2Keys.includes("p"))){
                            for(let i = 0; i < player2Keys.length; i++){
                                if (player2Keys[i] == "p"){
                                    player2Keys.splice(i,1);
                                }
                            }
                        }
                    }
                    if (event.key == "l"){
                        shield("player2",false);
                    }
                }
                document.addEventListener('keydown', player2ControlDown);
                document.addEventListener('keyup', player2ControlUp);

                function checkremove(){
                    setTimeout(function(){
                        if (inGame == false){
                                document.removeEventListener('keydown',player2ControlDown);
                                document.removeEventListener('keyup', player2ControlUp);
                        } else {
                            checkremove()
                        }
                    },50)
                }
                checkremove();
            }
            function player1Fall(){
                setTimeout(function(){
                    if(inGame == true){
                    if (player1FrozenVertical == false){
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
                    player1ArialAttack = true;
                }
                }
                document.getElementById("player1").style.top = String(player1VerticalPosition) + "px";
                document.getElementById("player1Shield").style.top = document.getElementById("player1").style.top;

                player1Fall();
                }
                },(500 * (1/(Math.abs(player1VerticalVelocity)))))
            }
            function player2Fall(){
                setTimeout(function(){
                    if (inGame == true){
                if (player2FrozenVertical == false){
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
                    player2ArialAttack = true;
                }
            }
                document.getElementById("player2").style.top = String(player2VerticalPosition) + "px";
                document.getElementById("player2Shield").style.top = document.getElementById("player2").style.top;

                player2Fall();
                }
                },(500 * (1/(Math.abs(player2VerticalVelocity)))))
            }
            function player1HorizontalMove(){
                setTimeout(function(){
                    if(inGame == true){
                        if((!(isCollide("player1","stageBottom"))) && (player1FrozenHorizontal == false)){
                                player1HorizontalPosition += player1MovingRight;
                                player1HorizontalPosition += player1MovingLeft;
                        }
                            document.getElementById("player1").style.left = String(player1HorizontalPosition) + "px";
                            document.getElementById("player1Shield").style.left = document.getElementById("player1").style.left;

                            player1HorizontalMove();  
                    }
                },10)
            }
            function player2HorizontalMove(){
                setTimeout(function(){
                    if (inGame == true){
                    if((!(isCollide("player2","stageBottom")) && (player2FrozenHorizontal == false))){
                        player2HorizontalPosition += player2MovingRight;
                        player2HorizontalPosition += player2MovingLeft;
                    }
                    document.getElementById("player2").style.left = String(player2HorizontalPosition) + "px";
                    document.getElementById("player2Shield").style.left = document.getElementById("player2").style.left;

                    player2HorizontalMove();  
                    }
                },10)
            }
            function calculatePlayer1Force(force){
                setTimeout(function(){
                    if(inGame == true){
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
                }
                },50)
            }
            function calculatePlayer2Force(force){
                setTimeout(function(){
                    if(inGame == true){
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
                    if (player1Invincible == false){
                        if(player1Defended == true){
                            shieldValue = 0.5;
                        }
                        finalForce = force * player1Damage * vector * shieldValue / 2;
                        calculatePlayer1Force(finalForce);
                    }
                }
                if (player == "player2"){
                    if (player2Invincible == false){
                        if(player2Defended == true){
                            shieldValue = 0.5;
                        }
                        finalForce = force * player2Damage * vector * shieldValue / 2;
                        calculatePlayer2Force(finalForce);
                    }
                }
                
            }
            function applyDamage(damage,player){
                let shieldMultiplier = 1;
                if(player == "player1"){
                    if(player1Invincible == false){
                            if(player1Defended == true){
                                shieldMultiplier = 0.5;
                            }
                        player1Damage += damage * shieldMultiplier;
                    }
                }
                if(player == "player2"){
                    if (player2Invincible == false){
                        if(player2Defended == true){
                            shieldMultiplier = 0.5;
                        }
                        player2Damage += damage * shieldMultiplier;
                    }
                }
            }
            function playerAttack(player){
                let currentPlayer;
                if ((player == 1) && (player1AttackCooldown == false)){
                    currentPlayer = character1;

                    if ((player1Keys.includes("w")) && (player1ArialAttack == true)){
                        if (currentPlayer == "shooter"){
                            shooterAttackArial(player);                        
                        }
                        if (currentPlayer == "jester"){
                            jesterAttackArial(player);                        
                        }
                        if (currentPlayer == "sword"){
                            swordAttackArial(player);                        
                        }
                        if (currentPlayer == "trapper"){
                            trapperAttackArial(player);                        
                        }
                    } else if ((player1Keys.includes("a")) || (player1Keys.includes("d"))){
                        if (currentPlayer == "sword"){
                            swordHorizontalAttack(player);                        
                        }
                        if (currentPlayer == "shooter"){
                            shooterHorizontalAttack(player);                        
                        }
                        if (currentPlayer == "jester"){
                            jesterHorizontalAttack(player);                        
                        }
                        if (currentPlayer == "trapper"){
                            trapperHorizontalAttack(player);                        
                        }
                    } else {
                    if (currentPlayer == "shooter"){
                        shooterAttack(player);
                    }
                    if (currentPlayer == "sword"){
                        swordAttack(player);
                    }
                    if (currentPlayer == "jester"){
                        jesterAttack(player);
                    }
                    if (currentPlayer == "trapper"){
                        trapperAttack(player);
                    }
                }
                }
                if((player == 2) && (player2AttackCooldown == false)){
                    currentPlayer = character2;
                    if ((player2Keys.includes("ArrowUp")) && (player2ArialAttack == true)){
                        if (currentPlayer == "shooter"){
                            shooterAttackArial(player);                        
                        }
                        if (currentPlayer == "jester"){
                            jesterAttackArial(player);                        
                        }
                        if (currentPlayer == "sword"){
                            swordAttackArial(player);                        
                        }
                        if (currentPlayer == "trapper"){
                            trapperAttackArial(player);                        
                        }
                    } else if ((player2Keys.includes("ArrowLeft")) || (player2Keys.includes("ArrowRight"))){
                        if (currentPlayer == "sword"){
                            swordHorizontalAttack(player);                        
                        }
                        if (currentPlayer == "shooter"){
                            shooterHorizontalAttack(player);                        
                        }
                        if (currentPlayer == "jester"){
                            jesterHorizontalAttack(player);                        
                        }
                        if (currentPlayer == "trapper"){
                            trapperHorizontalAttack(player);                        
                        }
                    } else {
                    if (currentPlayer == "shooter"){
                        shooterAttack(player);
                    }
                    if (currentPlayer == "sword"){
                        swordAttack(player);
                    }
                    if (currentPlayer == "jester"){
                        jesterAttack(player);
                    }
                    if (currentPlayer == "trapper"){
                        trapperAttack(player);
                    }
                }
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
                bullet.style.background = "orange";
                bullet.style.position = "absolute";
                document.body.append(bullet);

                playerWait(player,100);

                if (player == 1){
                    bulletLeft = player1HorizontalPosition
                    bullet.style.left = bulletLeft + "px";
                    bullet.style.top = document.getElementById("player1").style.top;
                    playerAttackCooldown(1,300);


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
                    playerAttackCooldown(2,300);

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
            function shooterAttackArial(player){
                let attackDamage = 4;
                let enemy;
                playerAttackCooldown(player,300);
                playerWait(player,150);
                if (player == 1 ){
                    enemy = "player2"
                }
                if (player == 2){
                    enemy = "player1"
                }
                
                function generateShot(number){
                    if (number < 3){
                        let bullet = document.createElement("div");
                        bullet.style.width = "10px";
                        bullet.style.height = "50px";
                        bullet.style.background = "orange";
                        bullet.style.position = "absolute";
                        document.body.append(bullet);
                        if (player == 1){
                            player1VerticalPosition -= 50;
                            player1VerticalVelocity = -30;                    
                            player1ArialAttack = false;
                        }
                        if (player == 2){
                            player2VerticalPosition -= 50;
                            player2VerticalVelocity = -30;
                            player2ArialAttack = false;
                        }
                    
                        function bulletMove(height){
                            setTimeout(function(){
                                bullet.style.top = String(height) + "px";
                                if(isNoIdColide(bullet,enemy) == true){
                                    bullet.remove();
                                    applyDamage(attackDamage,enemy);
                                } else if((isNoIdColide(bullet,"stage") == true) || (height > screen.height)){
                                    bullet.remove();
                                } else {
                                    bulletMove(height + 40);
                                }
                            },50)
                        }
                        if (player == 1){
                            bullet.style.top = String(player1VerticalPosition + 50) + "px";
                            bullet.style.left = String(player1HorizontalPosition + 25) + "px";
                            bulletMove(player1VerticalPosition);
                            }
                        if (player == 2){
                            bullet.style.top = String(player2VerticalPosition + 50) + "px";
                            bullet.style.left = String(player2HorizontalPosition + 25) + "px";
                            bulletMove(player2VerticalPosition);

                            }
                        setTimeout(function(){
                            generateShot(number + 1);
                        },200)
                    }
                }
                generateShot(0);
            }
            function shooterHorizontalAttack(player){
                let attackDamage = 8;
                let attackStun = 50;
                let direction;
                let enemy;
                playerWait(player,500);
                playerAttackCooldown(player, 750);

                if (player == 1){
                    document.getElementById("player1").style.background = "orange";
                    player1FrozenHorizontal = true;
                    player1FrozenVertical = true;
                    direction = player1Direction;
                }
                if (player == 2){
                    document.getElementById("player2").style.background = "orange";
                    player2FrozenHorizontal = true;
                    player2FrozenVertical = true;
                    direction = player2Direction;
                }
                setTimeout(function(){
                    if (player == 1){
                        document.getElementById("player1").style.background = playerBackground(player1Class);
                        player1FrozenHorizontal = false;
                        player1FrozenVertical = false;
                    }
                    if (player == 2){
                        document.getElementById("player2").style.background = playerBackground(player2Class);
                        player2FrozenHorizontal = false;
                        player2FrozenVertical = false;
                    }
                    function createMissile(){
                    
                        let missile = document.createElement("div");
                        missile.style.width = "50px";
                        missile.style.height = "50px"
                        missile.style.position = "absolute";
                        missile.style.background = "orange";
                        missile.style.borderRadius = "50%";

                        function missileMove(position){
                            missile.style.left = String(position) + "px";
                            setTimeout(function(){
                                if(isNoIdColide(missile,enemy)){
                                    applyDamage(attackDamage,enemy);
                                    applyForce(attackDamage,enemy,direction);
                                    playerWait(enemy,attackStun)
                                    missile.remove()

                                } else {
                                    if (direction == "left"){
                                        if ((position - 30 ) > 0){
                                            missileMove(position - 30);
                                        } else {
                                            missile.remove();
                                        }
                                    }
                                    if (direction == "right"){
                                        if ((position + 30) < screen.width){
                                            missileMove(position + 30);
                                        } else {
                                            missile.remove();
                                        }
                                    }
                                }
                            },50)
                        }
                        if (player == 1){
                            missile.style.left = String(player1HorizontalPosition) + "px";
                            missile.style.top = String(player1VerticalPosition) + "px";
                            enemy = "player2";
                            missileMove(player1HorizontalPosition);
                        }
                        if (player == 2){
                            missile.style.left = String(player2HorizontalPosition) + "px";
                            missile.style.top = String(player2VerticalPosition) + "px";
                            enemy = "player1";
                            missileMove(player2HorizontalPosition);
                        }
                        document.body.append(missile);



                    }
                    createMissile();

                },500)


            }

            function swordAttack(player){
                let attackDamage = 4;
                let attackStun = 100;
                playerWait(player,400);
                playerAttackCooldown(player, 750);

                if (player == 1){
                    let slice = document.getElementById("player1Attack");
                    slice.style.height = "10px";
                    slice.style.width = "50px";

                    enemy = "player2";
                    if (player1Direction == "right"){
                        player1HorizontalAttack = 50;
                        player1VerticalAttack = 0;
                    }
                    if (player1Direction == "left"){
                        player1HorizontalAttack = -50;
                        player1VerticalAttack = 0;
                    }
                    slice.style.left = String(player1HorizontalPosition + player1HorizontalAttack) + "px";
                    slice.style.top = String(player1VerticalPosition + player1VerticalAttack) + "px";
                    
                    slice.style.background = "orange";

                    setTimeout(function(){
                    enemy = "player2";
                    if (isNoIdColide(slice,enemy) == true){
                        applyDamage(attackDamage,"player2")
                        playerWait(2,attackStun);
                        applyForce(attackDamage,"player2",player1Direction);

                    }
                    },50)
                    setTimeout(function(){
                        slice.style.background = "none";
                    },200)
                    setTimeout(function(){
                        player1VerticalAttack = 30;
                        slice.style.left = String(player1HorizontalPosition + player1HorizontalAttack) + "px";
                        slice.style.top = String(player1VerticalPosition + player1VerticalAttack) + "px";
                        slice.style.background = "orange";
                        enemy = "player2";
                        if (isNoIdColide(slice,enemy) == true){
                            applyDamage(attackDamage,"player2");
                            applyForce(attackDamage,"player2",player1Direction);
                            playerWait(2,attackStun);

                        }
                    },300)
                    setTimeout(function(){
                        slice.style.background = "none";
                    },400)
                }

                if (player == 2){

                    let slice = document.getElementById("player2Attack");
                    slice.style.height = "10px";
                    slice.style.width = "50px";

                    enemy = "player1";
                    if (player2Direction == "right"){
                        player2HorizontalAttack = 50;
                        player2VerticalAttack = 0;
                    }
                    if (player2Direction == "left"){
                        player2HorizontalAttack = -50;
                        player2VerticalAttack = 0;
                    }
                    slice.style.left = String(player2HorizontalPosition + player2HorizontalAttack) + "px";
                    slice.style.top = String(player2VerticalPosition + player2VerticalAttack) + "px";
                    
                    slice.style.background = "orange";

                    setTimeout(function(){
                        enemy = "player1";
                    if (isNoIdColide(slice,enemy) == true){
                        applyDamage(attackDamage,"player1");
                        playerWait(1,attackStun);
                        applyForce(attackDamage,"player1",player2Direction)

                    }
                    },50)
                    setTimeout(function(){
                        slice.style.background = "none";
                    },200)
                    setTimeout(function(){
                        player2VerticalAttack = 30;
                        slice.style.left = String(player2HorizontalPosition + player2HorizontalAttack) + "px";
                        slice.style.top = String(player2VerticalPosition + player2VerticalAttack) + "px";
                        slice.style.background = "orange";
                        enemy = "player1";
                        if (isNoIdColide(slice,enemy) == true){
                            applyDamage(attackDamage,"player1");
                            playerWait(1,attackStun);
                            applyForce(attackDamage,"player1",player2Direction)

                        }
                    },300)
                    setTimeout(function(){
                        slice.style.background = "none";
                    },400)
                }
            }
            function swordAttackArial(player){
                let attackDamage = 4;
                let attackStun = 50;
                let slash;
                playerWait(player,400);
                playerAttackCooldown(player, 600);
                
                if (player == 1){
                    slash = document.getElementById("player1Attack");
                    player1VerticalAttack = 0;
                    if(player1Direction == "right"){
                        player1HorizontalAttack = 50;
                    }
                    if(player1Direction == "left"){
                        player1HorizontalAttack = -50;
                    }
                    player1ArialAttack = false;
                }
                if (player == 2){
                    slash = document.getElementById("player2Attack");
                    player2VerticalAttack = 0;
                    if(player2Direction == "right"){
                        player2HorizontalAttack = 50;
                    }
                    if(player2Direction == "left"){
                        player2HorizontalAttack = -50;
                    }
                    player2ArialAttack = false;
                }
                slash.style.height = "10px";
                slash.style.width = "50px";

                function jumpSlash(number){
                    setTimeout(function(){
                        slash.style.background = "orange";
                        if(number > 0){
                            if(player == 1){
                                enemy = "player2"
                                slash = document.getElementById("player1Attack");
                                player1VerticalPosition -= 15;
                                player1VerticalVelocity = -15;
                                if (isNoIdColide(document.getElementById("player1Attack"),enemy)){
                                    applyDamage(attackDamage,enemy);
                                    applyForce(attackDamage,enemy, player1Direction);
                                    playerWait(2,attackStun);
                                }
                            }
                            if(player == 2){
                                enemy = "player1";
                                slash = document.getElementById("player2Attack");
                                player2VerticalPosition -= 15;
                                player2VerticalVelocity = -15;
                                if (isNoIdColide(document.getElementById("player2Attack"),enemy)){
                                    applyDamage(attackDamage,enemy);
                                    applyForce(attackDamage,enemy,player2Direction);
                                    playerWait(1,attackStun);
                                }
                            }
                            
                        jumpSlash(number - 1)
                        } else{
                            slash.style.background = "none";
                        }
                    },25)
                }
                jumpSlash(12)

            }
            function swordHorizontalAttack(player){
                let attackDamage = 4;
                let attackStun = 50;
                let slash;
                let enemy;
                playerWait(player,250);
                playerAttackCooldown(player, 400);
                
                if (player == 1){
                    enemy = "player2";
                    slash = document.getElementById("player1Attack");
                    document.getElementById("player1").style.background = "orange";
                    player1FrozenHorizontal = true;
                    player1FrozenVertical = true;
                    direction = player1Direction;
                    if (direction == "left"){
                        player1HorizontalAttack = 50;
                        player1HorizontalPosition -= 300;
                    }
                    if (direction == "right"){
                        player1HorizontalAttack = -300;
                        player1HorizontalPosition += 300;
                    }
                    setTimeout(function(){
                        slash.style.width = "300px";
                        slash.style.height = "10px";
                        player1VerticalAttack = 20;
                
                        slash.style.background = "orange"
                    
                        player1FrozenHorizontal = false;
                        player1FrozenVertical = false;

                        setTimeout(function(){
                            if(isNoIdColide(slash,enemy)){
                                applyDamage(attackDamage,enemy)
                                applyForce(attackDamage,enemy,player1Direction)
                                playerWait("player2",attackStun);
                            }
                            document.getElementById("player1").style.background = playerBackground(character1);
                            slash.style.background = "none"
                            player1FrozenHorizontal = false;
                            player1HorizontalAttack = 0;
                        },50)
                    },200)
                }
                if (player == 2){
                    enemy = "player1";
                    slash = document.getElementById("player2Attack");
                    document.getElementById("player2").style.background = "orange";
                    player2FrozenHorizontal = true;
                    player2FrozenVertical = true;
                    direction = player2Direction;
                    if (direction == "left"){
                        player2HorizontalAttack = 50;
                        player2HorizontalPosition -= 300;
                    }
                    if (direction == "right"){
                        player2HorizontalAttack = -300;
                        player2HorizontalPosition += 300;
                    }
                    setTimeout(function(){
                        slash.style.width = "300px";
                        slash.style.height = "10px";
                        player2VerticalAttack = 20;
                    
                        slash.style.background = "orange"
                    
                        player2FrozenHorizontal = false;
                        setTimeout(function(){
                            if(isNoIdColide(slash,enemy)){
                                applyDamage(attackDamage,enemy)
                                applyForce(attackDamage,enemy,player2Direction)
                                playerWait("player1",attackStun);
                            }
                            document.getElementById("player2").style.background = playerBackground(character2);
                            slash.style.background = "none"
                            player2FrozenHorizontal = false;
                            player2FrozenVertical = false;
                            player1HorizontalAttack = 0;

                        },50)
                    },200)
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
                        ball.style.zIndex = 4;

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
                                trail.style.background = "orange";
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
                                trail.style.background = "orange";
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
                        ball.style.zIndex = 4;

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
                                trail.style.background = "orange";
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
                                trail.style.background = "orange";
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
            function jesterAttackArial(player){
                let attackDamage = 15;
                let attackForce = 6;
                let enemy;
                let boom;
                playerAttackCooldown(player,750);
                playerWait(player,500);
                if (player == 1 ){
                    enemy = "player2"
                    player1Invincible = true;
                    player1FrozenVertical = true
                    document.getElementById("player1").style.background = "none";
                    boom = document.getElementById("player1Attack");
                    player1VerticalAttack = -50;
                    player1HorizontalAttack = -50;
                    player1VerticalPosition -= 300;
                }
                if (player == 2){
                    enemy = "player1"
                    player2Invincible = true;
                    player2FrozenVertical = true;
                    document.getElementById("player2").style.background = "none";
                    boom = document.getElementById("player2Attack");
                    player2VerticalAttack = -50;
                    player2HorizontalAttack = -50;
                    player2VerticalPosition -= 300;

                }
                setTimeout(function(){
                    boom.style.background = "orange";
                    boom.style.width = "150px";
                    boom.style.height = "150px";
                    if (player == 1 ){
                        player1Invincible = false;
                        player1VerticalVelocity = -50;
                        document.getElementById("player1").style.background = "lime";
                        player1ArialAttack = false;
                        if (isNoIdColide(boom,enemy)){
                            applyDamage(attackDamage,enemy);
                            if (player1HorizontalPosition < player2HorizontalPosition){
                                applyForce(attackForce,enemy,"right");
                            }
                            if (player1HorizontalPosition > player2HorizontalPosition){
                                applyForce(attackForce,enemy,"left");
                            }
                        }
                    }
                    if (player == 2){
                        player2Invincible = false;
                        player2VerticalVelocity = -50;
                        document.getElementById("player2").style.background = "lime";
                        player2ArialAttack = false;
                        if (isNoIdColide(boom,enemy)){
                            applyDamage(attackDamage,enemy);
                            if (player1HorizontalPosition < player2HorizontalPosition){
                                applyForce(attackForce,enemy,"left");
                            }
                            if (player1HorizontalPosition > player2HorizontalPosition){
                                applyForce(attackForce,enemy,"right");
                            }
                        }
                    }

                },500)
                setTimeout(function(){
                    if (player == 1){
                        player1FrozenVertical = false;
                    }
                    if (player == 2){
                        player2FrozenVertical = false;
                    }
                    boom.style.background = "none";
                },600)
            }
            function jesterHorizontalAttack(player){
                let attackDamage = 2;
                let attackStun = 50;
                let enemy;
                let cartwheel;
                let direction;
                playerAttackCooldown(player,1200);
                playerWait(player,800);

                if (player == 1){
                    player1FrozenHorizontal = true;
                    player1FrozenVertical = true;
                    document.getElementById("player1").style.background = "orange";
                    direction = player1Direction;
                    cartwheel = document.getElementById("player1Attack");
                    player1HorizontalAttack = -25;
                    player1VerticalAttack = -25;
                    enemy = "player2";
                }
                if (player == 2){
                    player2FrozenHorizontal = true;
                    player2FrozenVertical = true;
                    document.getElementById("player2").style.background = "orange";
                    direction = player2Direction;
                    cartwheel = document.getElementById("player2Attack");
                    player2HorizontalAttack = -25;
                    player2VerticalAttack = -25;
                    enemy = "player1";
                }
                cartwheel.style.width = "100px";
                cartwheel.style.height = "100px";
                cartwheel.style.background = "orange";
                function doACartwheel(number){
                    if (number > 0){
                    setTimeout(function(){
                    if (direction == "left"){
                        if (player == 1){
                            player1HorizontalPosition -= 75;
                        }
                        if (player == 2){
                            player2HorizontalPosition -= 75;
                        }
                    }
                    if (direction == "right"){
                        if (player == 1){
                            player1HorizontalPosition += 75;
                        }
                        if (player == 2){
                            player2HorizontalPosition += 75;
                        }
                    }
                    if (isNoIdColide(cartwheel,enemy)){
                        applyDamage(attackDamage,enemy);
                        applyForce(attackDamage,enemy,direction);
                        playerWait(enemy,attackStun);
                    }
                    doACartwheel(number - 1);
                    },200)
                    } else {
                        cartwheel.style.background = "none";
                        if (player == 1){
                            player1FrozenHorizontal = false;
                            player1FrozenVertical = false;
                            document.getElementById("player1").style.background = playerBackground(player1Class);
                        }
                        if (player == 2){
                            player2FrozenHorizontal = false;
                            player2FrozenVertical = false;
                            document.getElementById("player2").style.background = playerBackground(player2Class);
                        }
                    }
                }

                doACartwheel(4);
            }

            function trapperAttack(player){
                let attackDamage = 8;
                let attackStun = 500;
                let enemy;
                let enemyStun;
                let trap;
                let trapTop;
                playerAttackCooldown(player,600);
                playerWait(player,200);
                
                if (((player == 1) && (player1AttackVariable == 0)) || (player == 2) && (player2AttackVariable == 0)){
                trap = document.createElement("div");
                trap.style.width = "50px";
                trap.style.height = "10px";
                trap.style.background = "orange";
                trap.style.position = "absolute";
                trap.style.zIndex = 5;
                if (player == 1){
                    trap.style.left = player1HorizontalPosition + "px";
                    trapTop = player1VerticalPosition;
                    trap.style.top = trapTop + "px";
                    player1AttackVariable = 1;
                    enemy = "player2";
                    enemyStun = 2;
                }
                if (player == 2){
                    trap.style.left = player2HorizontalPosition + "px";
                    trapTop =  player2VerticalPosition;
                    trap.style.top = trapTop + "px";
                    player2AttackVariable = 1;
                    enemy = "player1";
                    enemyStun = 1;

                }
                document.body.append(trap);
                checkTraps();

                } else if (((player == 1) && (player1AttackVariable == 1)) || (player == 2) && (player2AttackVariable == 1)){
                    if(player == 1){
                        player1AttackVariable = 2;
                    }
                    if(player == 2){
                        player2AttackVariable = 2;
                    }
                }
            function checkTraps(){
                let checking = 0;
                setTimeout(function(){
                
                if(isNoIdColide(trap,"stage") == false){
                    trapTop += 5;
                    trap.style.top = trapTop + "px";
                    if (trapTop > screen.height){
                        trap.remove();
                        checking = 1;
                        if (player == 1){
                            player1AttackVariable = 0;
                        }
                        if (player == 2){
                            player2AttackVariable = 0;
                        }
                    } 
                } else {
                    if (((player == 2) && (player2AttackVariable == 2)) || ((enemy == "player1") && (isNoIdColide(trap,enemy)))){
                        trap.style.height = "50px";
                        trapTop -= 40;
                        trap.style.top = trapTop + "px";
                        player2AttackVariable = 0;
                        checking = 1;
                        setTimeout(function(){
                            if (isNoIdColide(trap,enemy)){
                                applyDamage(attackDamage,enemy);
                                playerWait(enemyStun,attackStun);
                            }
                            trap.remove();
                        },20)
                    }
                    if (((player == 1) && (player1AttackVariable == 2))|| ((enemy == "player2") && (isNoIdColide(trap,enemy)))){
                        trap.style.height = "50px";
                        trapTop -= 40;
                        trap.style.top = trapTop + "px";
                        player1AttackVariable = 0;
                        checking = 1;
                        setTimeout(function(){
                            if (isNoIdColide(trap,enemy)){
                                applyDamage(attackDamage,enemy);
                                playerWait(enemyStun,attackStun);
                            }
                            trap.remove();
                        },20)
                    }
                }
                if (checking == 0){
                    checkTraps();
                }
            },20)
            }
            }
            function trapperHorizontalAttack(player){
                let direction;
                let enemy;
                let arrowPosition;
                let arrowLength = 0;

                let arrow = document.createElement("div");
                arrow.style.height = "10px";
                arrow.style.width = "1px";
                arrow.style.background = "orange";
                arrow.style.position = "absolute";

                if(player == 1){
                    player1FrozenHorizontal = true;
                    player1FrozenVertical = true;
                    player1AttackCooldown = true;
                    direction = player1Direction;
                    enemy = "player2";
                    arrow.style.top = player1VerticalPosition + "px";
                    if (player1Direction == "left"){
                        arrowPosition = player1HorizontalPosition;
                        arrow.style.left = arrowPosition + "px";
                    }
                    if (player1Direction == "right"){
                        arrowPosition = player1HorizontalPosition + 50
                        arrow.style.left = arrowPosition + "px";
                    }
                }
                if(player == 2){
                    player2FrozenHorizontal = true;
                    player2FrozenVertical = true;
                    player2AttackCooldown = true;
                    direction = player2Direction;
                    enemy = "player1";
                    arrow.style.top = player2VerticalPosition + "px";
                    if (player2Direction == "left"){
                        arrowPosition = player2HorizontalPosition;
                        arrow.style.left = arrowPosition + "px";
                    }
                    if (player2Direction == "right"){
                        arrowPosition = player2HorizontalPosition + 50
                        arrow.style.left = arrowPosition + "px";
                    }
                }

                document.body.append(arrow);

                function growArrow(){
                    setTimeout(function(){
                        function moveArrow(){
                            setTimeout(function(){
                            if (direction == "left"){
                                arrowPosition -= 30;
                                arrow.style.left = arrowPosition + "px";
                            }
                            if (direction == "right"){
                                arrowPosition += 30;
                                arrow.style.left = arrowPosition + "px";
                            }
                            if (isNoIdColide(arrow,enemy)){
                                let attackDamage = Math.floor(arrowLength /2.5)
                                applyDamage(attackDamage,enemy);
                                applyForce(attackDamage,enemy,direction);
                                arrow.remove();
                            } else if ((arrowPosition > screen.width) || (arrowPosition < (0 - arrowLength))){
                                arrow.remove();
                            } else {
                                moveArrow();
                            }
                        },50)
                        }
                        if (((player == 1) && ((player1Keys.includes("r")))) || ((player == 2) && ((player2Keys.includes("p"))))){
                            if (direction == "right"){
                                if (arrowLength < 10){
                                    arrowLength += 1;
                                }
                                arrow.style.width = (arrowLength * 5) + "px";
                                growArrow();
                            }
                            if (direction == "left"){
                                if (arrowLength < 10){
                                    arrowLength += 1;
                                }
                                arrow.style.width = (arrowLength * 5) + "px";
                                let newArrowPosition = arrowPosition - arrowLength * 5;
                                arrow.style.left = newArrowPosition + "px";

                                growArrow();
                            }
                        } else if (((player == 1) && (!(player1Keys.includes("r")))) || ((player == 2) && (!(player2Keys.includes("p"))))){
                            if(player == 1){
                                player1FrozenHorizontal = false;
                                player1FrozenVertical = false;
                                player1AttackCooldown = false;
                            }
                            if(player == 2){
                                player2FrozenHorizontal = false;
                                player2FrozenVertical = false;
                                player2AttackCooldown = false;
                            }
                            playerAttackCooldown(player,500);
                            moveArrow();
                        }  
                    },50)
                }
                arrowLength = 5;
                growArrow();
            }
            function trapperAttackArial(player){
                let attackDamage = 15;
                let enemy;
                let fallDistance = 240;
                playerWait(player,150);
                playerAttackCooldown(player, 225);

                function grabAttack(){
                    function playerFall(fallingPlayer,damage,number){
                        setTimeout(function(){
                            if (number > 0){
                                if (isCollide(fallingPlayer,"stage")){
                                    if (damage == true){
                                        applyDamage(attackDamage,enemy);
                                    }
                                    if (fallingPlayer == "player1"){
                                        if (player1VerticalPosition > 600){
                                            player1VerticalPosition = 600;
                                        }
                                        if (player2VerticalPosition > 600){
                                            player2VerticalPosition = 600;
                                        }
                                        player1FrozenHorizontal = false;
                                        player1FrozenVertical = false;
                                    }
                                    if (fallingPlayer == "player2"){
                                        if (player1VerticalPosition > 600){
                                            player1VerticalPosition = 600;
                                        }
                                        if (player2VerticalPosition > 600){
                                            player2VerticalPosition = 600;
                                        }
                                        player2FrozenHorizontal = false;
                                        player2FrozenVertical = false;
                                    }
                                } else {
                                    if (fallingPlayer == "player1"){
                                        player1VerticalPosition += 5;
                                    }
                                    if (fallingPlayer == "player2"){
                                        player2VerticalPosition += 5;
                                    }
                                    playerFall(fallingPlayer,damage,(number - 1));
                                }
                            } else {
                                if (fallingPlayer == "player2"){
                                    player2FrozenHorizontal = false;
                                    player2FrozenVertical = false;
                                } 
                                if (fallingPlayer == "player1"){
                                    player1FrozenHorizontal = false;
                                    player1FrozenVertical = false;
                                }
                            }
                        },5)
                    }
                    let grab;
                    if (player == 1){
                        grab = document.getElementById("player1Attack");
                        player1FrozenHorizontal = true;
                        player1FrozenVertical = true;
                    }
                    if (player == 2){
                        grab = document.getElementById("player2Attack");
                        player2FrozenHorizontal = true;
                        player2FrozenVertical = true;
                    }
                    grab.style.width = "50px";
                    grab.style.height = "50px";
                    grab.style.background = "orange";

                    if (isNoIdColide(grab,enemy)){
                        let enemyPlayer = document.getElementById(enemy);
                        if (player == 2){
                            player1FrozenHorizontal = true;
                            player1FrozenVertical = true;
                            playerFall("player1",true,fallDistance);
                            playerFall("player2",false,fallDistance);
                        }
                        if (player == 1){
                            player2FrozenHorizontal = true;
                            player2FrozenVertical = true;
                            playerFall("player1",false,fallDistance);
                            playerFall("player2",true,fallDistance);
                        }

                    } else {
                        if (player == 1){
                            player1FrozenHorizontal = false;
                            player1FrozenVertical = false;
                        }
                        if (player == 2){
                            player2FrozenHorizontal = false;
                            player2FrozenVertical = false;
                        } 
                    }
                    setTimeout(function(){
                        grab.style.background = "none";
                    },50)

                }
                function jumpAttack(number){
                    if (number > 0){
                        setTimeout(function(){
                            if (player == 1){
                                player1VerticalPosition -= 30;
                                player1VerticalVelocity = -30;                    
                                player1ArialAttack = false;
                                enemy = "player2";
                                if (player1Direction == "left"){
                                    player1HorizontalPosition -= 5;
                                    player1HorizontalAttack = -50;
                                }
                                if (player1Direction == "right"){
                                    player1HorizontalPosition += 10;
                                    player1HorizontalAttack = 50;
                                }
                                player1VerticalAttack = -25;
                                
                            }
                            if (player == 2){
                                player2VerticalPosition -= 30;
                                player2VerticalVelocity = -30;
                                player2ArialAttack = false;
                                enemy = "player1";
                                if (player2Direction == "left"){
                                    player2HorizontalPosition -= 5;
                                    player2HorizontalAttack = -50;
                                }
                                if (player2Direction == "right"){
                                    player2HorizontalPosition += 10;
                                    player2HorizontalAttack = 50;
                                }
                                player2VerticalAttack = -25;
                            }
                            if(number == 1){
                                grabAttack()
                            }
                            jumpAttack(number-1);
                        },25)
                    }
                }
                jumpAttack(3);
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

            function endGame(){
                inGame = false;
                for(let i = 0; i < fieldObjects.length; i++){
                    fieldObjects[i].remove();
                }

                document.body.style.background = "yellow";
                characters = [];
                player1Class = 0;
                player2Class = 0;
                classNumber = 0;
                currentPlayerSelect = 0;

                addCharacter("shooter");
                addCharacter("sword");
                addCharacter("jester");
                addCharacter("trapper");
        
                addStartButton();
                addPlayerSelect();

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
    }   