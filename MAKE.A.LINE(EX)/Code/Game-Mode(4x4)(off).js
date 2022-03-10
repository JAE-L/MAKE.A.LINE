window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile_4x4'));
    let player1_announcer = document.querySelector('.winorloseforplayer1-state');
    let player2_announcer = document.querySelector('.winorloseforplayer2-state');
    let player1_ingame_display = document.querySelector('.player1-eggselect-scpb');
    let player2_ingame_display = document.querySelector('.player2-eggselect-scpb');
    let player1_withdraw = document.querySelector('.player1-withdraw');
    let player2_withdraw = document.querySelector('.player2-withdraw');

    let board = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'player1';
    let isGameActive = true;

    const PLAYER1_WON = 'PLAYER1_WON';
    const PLAYER2_WON = 'PLAYER2_WON';
    const TIE = 'TIE';

    let rand_0_9 = Math.floor(Math.random() * 10); //0-9
    let rand_3_12 = Math.floor(Math.random() * 10)+3; //3-12
    let rand_6_15 = Math.floor(Math.random() * 10)+6; //6-15

    do{
        rand_0_9 = Math.floor(Math.random() * 10);
        rand_3_12 =  Math.floor(Math.random() * 10)+3;
        rand_6_15 = Math.floor(Math.random() * 10)+6;
    } while((rand_0_9 === rand_3_12) || (rand_3_12 === rand_6_15) || (rand_0_9 === rand_6_15));

    let randomswitch1 = Math.floor(Math.random() * 100);
    let randomswitch2 = Math.floor(Math.random() * 100);
    let randomswitch3 = Math.floor(Math.random() * 100);

    let player1_Egg_Id = String(document.getElementsByClassName("player1-eggbox")[0].childNodes[1].id);
    //onsole.log(player1_Egg_Id);
    let player2_Egg_Id = String(document.getElementsByClassName("player2-eggbox")[0].childNodes[1].id);
    //let player2_Egg_Id = "blue-egg";
    //console.log(player2_Egg_Id);
    
    let player1_EggField = [
        player1_Egg1 = document.createElement("div"),
        player1_Egg2 = document.createElement("div"),
        player1_Egg3 = document.createElement("div"),
        player1_Egg4 = document.createElement("div"),
        player1_Egg5 = document.createElement("div"),
        player1_Egg6 = document.createElement("div"),
        player1_Egg7 = document.createElement("div"),
        player1_Egg8 = document.createElement("div"),
        player1_Egg9 = document.createElement("div"),
        player1_Egg10 = document.createElement("div"),
        player1_Egg11 = document.createElement("div"),
        player1_Egg12 = document.createElement("div"),
        player1_Egg13 = document.createElement("div"),
        player1_Egg14 = document.createElement("div"),
        player1_Egg15 = document.createElement("div"),
        player1_Egg16 = document.createElement("div"),
    ];
    player1_EggField.forEach(Player1Eggs => {
        Player1Eggs.id = player1_Egg_Id;
    });
    let player2_EggField = [
        player2_Egg1 = document.createElement("div"),
        player2_Egg2 = document.createElement("div"),
        player2_Egg3 = document.createElement("div"),
        player2_Egg4 = document.createElement("div"),
        player2_Egg5 = document.createElement("div"),
        player2_Egg6 = document.createElement("div"),
        player2_Egg7 = document.createElement("div"),
        player2_Egg8 = document.createElement("div"),
        player2_Egg9 = document.createElement("div"),
        player2_Egg10 = document.createElement("div"),
        player2_Egg11 = document.createElement("div"),
        player2_Egg12 = document.createElement("div"),
        player2_Egg13 = document.createElement("div"),
        player2_Egg14 = document.createElement("div"),
        player2_Egg15 = document.createElement("div"),
        player2_Egg16 = document.createElement("div"),
    ];
    player2_EggField.forEach(Player2Eggs => {
        Player2Eggs.id = player2_Egg_Id;
    });


    let green_Egg_for4x4_Class = "green-egg";
    let green_Egg_for4x4_Field = [
        green_Egg_for4x4_1 = document.createElement("div"),
        green_Egg_for4x4_2 = document.createElement("div"),
        green_Egg_for4x4_3 = document.createElement("div"),
    ];

    let green_Egg_for4x4_ImgField = [
        green_Egg_for4x4_Img1 = document.createElement("img"),
        green_Egg_for4x4_Img2 = document.createElement("img"),
        green_Egg_for4x4_Img3 = document.createElement("img"),
    ];
    let ImgField_src = [
        "../Design/numbers/1:1(gi).png", //0
        "../Design/numbers/2:2(gi).png", //1
        "../Design/numbers/3:3(gi).png", //2
        "../Design/numbers/4:4(gi).png", //3
        "../Design/numbers/5:5(gi).png", //4
        "../Design/numbers/6:6(gi).png", //5
        "../Design/numbers/7:7(gi).png", //6
        "../Design/numbers/8:8(gi).png", //7
        "../Design/numbers/9:9(gi).png", //8
    ];
    green_Egg_for4x4_Img1.className = "green-egg-numbers-img"
    green_Egg_for4x4_Img2.className = "green-egg-numbers-img"
    green_Egg_for4x4_Img3.className = "green-egg-numbers-img"
    let green_Egg_for4x4_1_Img_Number = 8;
    let green_Egg_for4x4_2_Img_Number = 7;
    let green_Egg_for4x4_3_Img_Number = 6;
    green_Egg_for4x4_Img1.src = ImgField_src[green_Egg_for4x4_1_Img_Number];
    green_Egg_for4x4_Img2.src = ImgField_src[green_Egg_for4x4_2_Img_Number];
    green_Egg_for4x4_Img3.src = ImgField_src[green_Egg_for4x4_3_Img_Number];

    green_Egg_for4x4_Field.forEach((GreenEgg_for4x4, index) => {
        GreenEgg_for4x4.className = green_Egg_for4x4_Class;
        GreenEgg_for4x4.appendChild(green_Egg_for4x4_ImgField[index])
    });



    const isValidAction = (tile) => {
        if (tile.childNodes[0]){
            return false;
        }
        return true;
    };

    const updateBoard =  (index) => {
        board[index] = currentPlayer;
    }



    let player1_RemainTime = document.querySelector('.player1-remain-time');
    let player2_RemainTime = document.querySelector('.player2-remain-time');

    let player1_Basic_Time = 5;
    let player2_Basic_Time = 5;

    function player1_Reduce_Time(){
        player1_Time = player1_Basic_Time--;
        player1_RemainTime.innerHTML = `00:${player1_Time}`;
        if(player1_Time === 0){
            clearInterval(p1rt);
            clearInterval(p2rt);
            announce(currentPlayer === 'player2' ? PLAYER1_WON : PLAYER2_WON);
            isGameActive = false;
            return;
        }
    };
    let p1rt = setInterval(player1_Reduce_Time, 1000);

    function player2_Reduce_Time(){
        player2_Time = player2_Basic_Time--;
        player2_RemainTime.innerHTML = `00:${player2_Time}`;
        if(player2_Time === 0){
            clearInterval(p1rt);
            clearInterval(p2rt);
            announce(currentPlayer === 'player2' ? PLAYER1_WON : PLAYER2_WON);
            isGameActive = false;
            return;
        }
    };
    let p2rt = setInterval(player1_Reduce_Time, 1000);
    clearInterval(p2rt);



    const changePlayer = () => {
        currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';
        if(String(player1_ingame_display.src).indexOf("now") > -1){
            player1_ingame_display.src = "../Design/scpb/egg-scpb.png";
            player2_ingame_display.src = "../Design/scpb/egg-scpb-playnow.png";
            // --- //
            p2rt = setInterval(player2_Reduce_Time, 1000);
            clearInterval(p1rt);
            player1_Basic_Time = 5;
        } else{
            player1_ingame_display.src = "../Design/scpb/egg-scpb-playnow.png";
            player2_ingame_display.src = "../Design/scpb/egg-scpb.png";
            // --- //
            p1rt = setInterval(player1_Reduce_Time, 1000);
            clearInterval(p2rt);
            player2_Basic_Time = 5;
        };
    }



    let defaultEggNumber = 0;
    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
            EggNumber = defaultEggNumber++;
            if(currentPlayer == 'player1'){
                tile.appendChild(player1_EggField[EggNumber])
            } else{
                tile.appendChild(player2_EggField[EggNumber])
            }

            if(ImgField_src[green_Egg_for4x4_1_Img_Number]){
                green_Egg_for4x4_Img1.src = ImgField_src[--green_Egg_for4x4_1_Img_Number];
            }
            if(ImgField_src[green_Egg_for4x4_2_Img_Number]){
                green_Egg_for4x4_Img2.src = ImgField_src[--green_Egg_for4x4_2_Img_Number];
            }
            if(ImgField_src[green_Egg_for4x4_3_Img_Number]){
                green_Egg_for4x4_Img3.src = ImgField_src[--green_Egg_for4x4_3_Img_Number];
            }
            if(green_Egg_for4x4_1_Img_Number < 0){
                green_Egg_for4x4_Field[0].remove();
            }
            if(green_Egg_for4x4_2_Img_Number < 0){
                green_Egg_for4x4_Field[1].remove();
            }
            if(green_Egg_for4x4_3_Img_Number < 0){
                green_Egg_for4x4_Field[2].remove();
            }

            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }



        /*
        Indexes within the board
        [0] [1] [2] [3]
        [4] [5] [6] [7]
        [8] [9] [10] [11]
        [12] [13] [14] [15]
        */

        const winningConditions = [
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [8, 9, 10, 11],
            [12, 13, 14, 15],
            [0, 4, 8, 12],
            [1, 5, 9, 13],
            [2, 6, 10, 14],
            [3, 7, 11, 15],
            [0, 5, 10, 15],
            [3, 6, 9, 12],
        ];
    
        function handleResultValidation() {
            let roundWon = false;
            for (let i = 0; i <= 9; i++) {
                const winCondition = winningConditions[i];
                const a = board[winCondition[0]];
                const b = board[winCondition[1]];
                const c = board[winCondition[2]];
                const d = board[winCondition[3]];
                if (a === '' || b === '' || c === '' || d === '') {
                    continue;
                }
                if (a === b && b === c && c === d && d === a) {
                    roundWon = true;
                    break;
                }
            }

    if (roundWon) {
            announce(currentPlayer === 'player1' ? PLAYER1_WON : PLAYER2_WON);
            isGameActive = false;
            return;
        }

    if (!board.includes(''))
        announce(TIE);
    }

    const announce = (type) => {
        switch(type){
            case PLAYER2_WON:
                player1_announcer.innerHTML = "LOSE";
                player2_announcer.innerHTML = "WIN!";
                document.querySelector(".player1-withdraw").style.pointerEvents = "none";
                document.querySelector(".player2-withdraw").style.pointerEvents = "none";
                //setTimeout(resetBoard, 3000)
                break;
            case PLAYER1_WON:
                player1_announcer.innerHTML = "WIN!";
                player2_announcer.innerHTML = "LOSE";
                document.querySelector(".player1-withdraw").style.pointerEvents = "none";
                document.querySelector(".player2-withdraw").style.pointerEvents = "none";
                //setTimeout(resetBoard, 3000)
                break;
            case TIE:
                player1_announcer.innerHTML = "TIE";
                player2_announcer.innerHTML = "TIE";
                document.querySelector(".player1-withdraw").style.pointerEvents = "none";
                document.querySelector(".player2-withdraw").style.pointerEvents = "none";
                //setTimeout(resetBoard, 3000)
            }
        player1_announcer.classList.remove('hide');
        player2_announcer.classList.remove('hide');
    };

    player1_withdraw.addEventListener("click", function(){
        document.querySelector(".player1-withdraw-text").style.color = "#EDD75B";;
        //Double Click
        player1_withdraw.addEventListener("click", function(){
            document.querySelector(".player1-withdraw-text").style.color = "#FFFFFF";;
            clearInterval(p1rt);
            clearInterval(p2rt);
            announce(PLAYER2_WON);
            isGameActive = false;
            return;
        })
    })
    player2_withdraw.addEventListener("click", function(){
        document.querySelector(".player2-withdraw-text").style.color = "#EDD75B";;
        //Double Click
        player2_withdraw.addEventListener("click", function(){
            document.querySelector(".player2-withdraw-text").style.color = "#FFFFFF";;
            clearInterval(p1rt);
            clearInterval(p2rt);
            announce(PLAYER1_WON);
            isGameActive = false;
            return;
        })
    })



    function resetBoard(){
        // board = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        // isGameActive = true;
        // player1_announcer.classList.add('hide');
        // player2_announcer.classList.add('hide');
        // player1_RemainTime.innerHTML = "00:15";
        // player2_RemainTime.innerHTML = "00:15";

        // if (currentPlayer === 'player2') {
        //     changePlayer();
        // }

        // tiles.forEach(tile => {
        //     tile.innerText = '';
        // });
        // defaultEggNumber = 0;

        // green_Egg_for4x4_1_Img_Number = 8;
        // green_Egg_for4x4_2_Img_Number = 6;
        // green_Egg_for4x4_Img1.src = ImgField_src[green_Egg_for4x4_1_Img_Number];
        // green_Egg_for4x4_Img2.src = ImgField_src[green_Egg_for4x4_2_Img_Number];
        // green_Egg_for4x4_Field.forEach((GreenEgg_for4x4, index) => {
        //     GreenEgg_for4x4.appendChild(green_Egg_for4x4_ImgField[index])
        // });

        // randomswitch1 = Math.floor(Math.random() * 100);
        // randomswitch2 = Math.floor(Math.random() * 100);

        // rand_0_9 = Math.floor(Math.random() * 10);
        // rand_6_15 = Math.floor(Math.random() * 10)+6;
        // if(rand_0_9 === rand_6_15){
        //     rand_0_9 = Math.floor(Math.random() * 6);
        //     rand_6_15 = Math.floor(Math.random() * 10)+6;
        // }
        // if(randomswitch1 > randomswitch2){
        //     tiles[rand_0_9].appendChild(green_Egg_for4x4_Field[0]);
        //     tiles[rand_6_15].appendChild(green_Egg_for4x4_Field[1]);
        // } else{
        //     tiles[rand_0_9].appendChild(green_Egg_for4x4_Field[1]);
        //     tiles[rand_6_15].appendChild(green_Egg_for4x4_Field[0]);
        // }
        location.reload();
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    if(randomswitch1 > randomswitch2 > randomswitch3){
        tiles[rand_0_9].appendChild(green_Egg_for4x4_Field[0]);
        tiles[rand_3_12].appendChild(green_Egg_for4x4_Field[1]);
        tiles[rand_6_15].appendChild(green_Egg_for4x4_Field[2]);
    } if(randomswitch1 < randomswitch2 < randomswitch3){
        tiles[rand_0_9].appendChild(green_Egg_for4x4_Field[0]);
        tiles[rand_3_12].appendChild(green_Egg_for4x4_Field[2]);
        tiles[rand_6_15].appendChild(green_Egg_for4x4_Field[1]);
    }
    if(randomswitch2 > randomswitch3 > randomswitch1){
        tiles[rand_0_9].appendChild(green_Egg_for4x4_Field[1]);
        tiles[rand_3_12].appendChild(green_Egg_for4x4_Field[2]);
        tiles[rand_6_15].appendChild(green_Egg_for4x4_Field[0]);
    }
    if(randomswitch2 < randomswitch3 < randomswitch1){
        tiles[rand_0_9].appendChild(green_Egg_for4x4_Field[1]);
        tiles[rand_3_12].appendChild(green_Egg_for4x4_Field[0]);
        tiles[rand_6_15].appendChild(green_Egg_for4x4_Field[2]);
    }
    if(randomswitch2 > randomswitch1 > randomswitch3){
        tiles[rand_0_9].appendChild(green_Egg_for4x4_Field[2]);
        tiles[rand_3_12].appendChild(green_Egg_for4x4_Field[0]);
        tiles[rand_6_15].appendChild(green_Egg_for4x4_Field[1]);
    }
    if(randomswitch2 < randomswitch1 < randomswitch3){
        tiles[rand_0_9].appendChild(green_Egg_for4x4_Field[2]);
        tiles[rand_3_12].appendChild(green_Egg_for4x4_Field[1]);
        tiles[rand_6_15].appendChild(green_Egg_for4x4_Field[0]);
    }
    else{
        tiles[rand_0_9].appendChild(green_Egg_for4x4_Field[0]);
        tiles[rand_3_12].appendChild(green_Egg_for4x4_Field[1]);
        tiles[rand_6_15].appendChild(green_Egg_for4x4_Field[2]);
    }
});