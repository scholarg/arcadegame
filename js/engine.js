/* Engine.js
* 这个文件提供了游戏循环玩耍的功能（更新敌人和渲染）
 * 在屏幕上画出初始的游戏面板，然后调用玩家和敌人对象的 update / render 函数（在 app.js 中定义的）
 *
 * 一个游戏引擎的工作过程就是不停的绘制整个游戏屏幕，和小时候你们做的 flipbook 有点像。当
 * 玩家在屏幕上移动的时候，看上去就是图片在移动或者被重绘。但这都是表面现象。实际上是整个屏幕
 * 被重绘导致这样的动画产生的假象

 * 这个引擎是可以通过 Engine 变量公开访问的，而且它也让 canvas context (ctx) 对象也可以
 * 公开访问，以此使编写app.js的时候更加容易
 */

/**
 * http://discussions.youdaxue.com/t/classic-arcade-game/36088
 * 以上blog给我很大帮助,感谢!
 * 很多东西学习和参考了以上blog.
 */
var level1 = function() {
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, -50);
    }
    for (col = 0; col < 5; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, -30);
    }
    ctx.drawImage(Resources.get('images/Ramp South.png'), 5 * 101, -50);

    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/stone-block.png'), col * 101, 50);
    }

    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 125);
    }
    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 130);
    }
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 205);
    }

    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 285);
    }
    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/Shadow North.png'), col * 101, 283);
    }
    ctx.drawImage(Resources.get('images/Shadow South West.png'), 300, 205);

    ctx.drawImage(Resources.get('images/Roof North West.png'), 0 * 101, 240);
    ctx.drawImage(Resources.get('images/Roof North.png'), 1 * 101, 240);
    ctx.drawImage(Resources.get('images/Roof North East.png'), 2 * 101, 240);
    ctx.drawImage(Resources.get('images/Wood Block.png'), 0 * 101, 460);
    ctx.drawImage(Resources.get('images/Wood Block.png'), 2 * 101, 460);
    ctx.drawImage(Resources.get('images/Window Tall.png'), 0 * 101, 420);
    ctx.drawImage(Resources.get('images/Door Tall Closed.png'), 1 * 101, 470);
    ctx.drawImage(Resources.get('images/Window Tall.png'), 2 * 101, 420);
    ctx.drawImage(Resources.get('images/Wood Block.png'), 1 * 101, 365);
    ctx.drawImage(Resources.get('images/Roof South West.png'), 0 * 101, 320);
    ctx.drawImage(Resources.get('images/Roof South.png'), 1 * 101, 320);
    ctx.drawImage(Resources.get('images/Roof South East.png'), 2 * 101, 320);

    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/Shadow South.png'), col * 101, 400);
    }
    ctx.drawImage(Resources.get('images/Shadow West.png'), 300, 283);

    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 363);
    }
    ctx.drawImage(Resources.get('images/Shadow West.png'), 300, 363);

    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 444);
    }
    ctx.drawImage(Resources.get('images/Shadow West.png'), 300, 444);
    ctx.drawImage(Resources.get('images/Shadow North.png'), 3 * 101, 467);
    ctx.drawImage(Resources.get('images/Shadow North.png'), 5 * 101, 467);
    ctx.drawImage(Resources.get('images/Wall Block.png'), 3 * 101, 465);
    ctx.drawImage(Resources.get('images/Ramp North.png'), 4 * 101, 487);
    ctx.drawImage(Resources.get('images/Wall Block.png'), 5 * 101, 465);

    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/stone-block.png'), col * 101, 572);
    }


    ctx.drawImage(Resources.get('images/Tree Ugly.png'), 505, 175);
    ctx.drawImage(Resources.get('images/Tree Short.png'), 305, 345);
};

var level2 = function() {
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, -50);
    }
    /*First Row */
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/Dirt Block.png'), col * 101, 30);
    }
    /*Second Row */
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 115);
    }
    ctx.drawImage(Resources.get('images/Rock.png'), 3 * 101, 80);
    ctx.drawImage(Resources.get('images/Rock.png'), 4 * 101, 80);
    /*Third Row */
    for (col = 0; col < 2; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 200);
    }
    ctx.drawImage(Resources.get('images/Wall Block.png'), 2 * 101, 190);

    for (col = 3; col < 5; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 200);
    }
    ctx.drawImage(Resources.get('images/Wall Block.png'), 5 * 101, 190);
    /*Fourth Row */
    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 275);
    }
    for (col = 4; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 275);
    }
    ctx.drawImage(Resources.get('images/water-block.png'), 3 * 101, 275);
    /*Fifth Row */
    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 355);
    }
    ctx.drawImage(Resources.get('images/Ramp North.png'), 2 * 101, 352);
    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 355);
    }
    /*Sixth Row */
    for (col = 0; col < 2; col++) {
        ctx.drawImage(Resources.get('images/Shadow South.png'), col * 101, 390);
    }
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/stone-block.png'), col * 101, 435);
    }
    /*Seventh Row */
    for (col = 0; col < 5; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 550);
    }
    ctx.drawImage(Resources.get('images/Ramp South.png'), 5 * 101, 515);
};


var canvas = document.createElement('canvas'),
    win = window,
    ctx = canvas.getContext('2d'),
    lastTime;

canvas.width = 606;
canvas.height = 696;

var Engine = (function() {
    $("#canvas").append(canvas);
    /* 实现定义我们会在这个作用于用到的变量
     * 创建 canvas 元素，拿到对应的 2D 上下文
     * 设置 canvas 元素的高/宽 然后添加到dom中
     */
    // var doc = global.document,
    //     win = global.window,
    //     canvas = doc.createElement('canvas'),
    //     ctx = canvas.getContext('2d'),
    //     lastTime;
    //
    // canvas.width = 505;
    // canvas.height = 606;
    // doc.body.appendChild(canvas);

    /* 这个函数是整个游戏的主入口，负责适当的调用 update / render 函数 */
    function main() {
        /* 如果你想要更平滑的动画过度就需要获取时间间隙。因为每个人的电脑处理指令的
         * 速度是不一样的，我们需要一个对每个人都一样的常数（而不管他们的电脑有多快）
         * 就问你屌不屌！
         */
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        /* 调用我们的 update / render 函数， 传递事件间隙给 update 函数因为这样
         * 可以使动画更加顺畅。
         */

        if (newGame.gameRun === true && !newGame.paused && !newGame.gameOver && !newGame.endGame) {
            update(dt, now);
            render(now);
         }


        if (newGame.gameRun === true && newGame.displayMessage === true) {
            textDrawer("Oh No! I lost the key to the house!", canvas.width / 2, canvas.height / 2 + 100);
            textDrawer("Help me find it in the garden!", canvas.width / 2, (canvas.height / 2) + 140);
        }

        if (newGame.endGame === true) {
            renderEndGame();
        }

        if (newGame.finishedGame === true) {
            ctx.globalAlpha = 1;
            textDrawer("YOU MADE IT!", canvas.width / 2, canvas.height / 2);
            textDrawer("Press SPACE to start again!", canvas.width / 2, (canvas.height / 2) + 40);
        }

        /* 设置我们的 lastTime 变量，它会被用来决定 main 函数下次被调用的事件。 */
        lastTime = now;

        /* 在浏览准备好调用重绘下一个帧的时候，用浏览器的 requestAnimationFrame 函数
         * 来调用这个函数
         */
        win.requestAnimationFrame(main);
    }

    /* 这个函数调用一些初始化工作，特别是设置游戏必须的 lastTime 变量，这些工作只用
     * 做一次就够了
     */
    function init() {
        reset();
        lastTime = Date.now();
        main();
    }

    /* 这个函数被 main 函数（我们的游戏主循环）调用，它本身调用所有的需要更新游戏角色
     * 数据的函数，取决于你怎样实现碰撞检测（意思是如何检测两个角色占据了同一个位置，
     * 比如你的角色死的时候），你可能需要在这里调用一个额外的函数。现在我们已经把这里
     * 注释了，你可以在这里实现，也可以在 app.js 对应的角色类里面实现。
     */
    function update(dt, now) {
        updateEntities(dt);
        checkCollisions(now);
    }

    function checkCollisions(now) {
        if (player.immortal < (now / 1000)) {
            allEnemies.forEach(function(enemy) {
                if (player.x < enemy.x + enemy.width && player.x + player.width > enemy.x &&
                    player.y < enemy.y + enemy.height && player.y + player.height > enemy.y) {
                    player.colision();
                }
            });
        }
        iteams.forEach(function(item) {
            if (player.x < item.x + item.width && player.x + player.width > item.x &&
                player.y < item.y + item.height && player.y + player.height > item.y) {
                item.status = "picked";
            }
        });
    }


    /* 这个函数会遍历在 app.js 定义的存放所有敌人实例的数组，并且调用他们的 update()
     * 函数，然后，它会调用玩家对象的 update 方法，最后这个函数被 update 函数调用。
     * 这些更新函数应该只聚焦于更新和对象相关的数据/属性。把重绘的工作交给 render 函数。
     */
    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
        iteams.forEach(function(item) {
            item.update();
        });
        lifeCounter.update();
    }

    /* 这个函数做了一些游戏的初始渲染，然后调用 renderEntities 函数。记住，这个函数
     * 在每个游戏的时间间隙都会被调用一次（或者说游戏引擎的每个循环），因为这就是游戏
     * 怎么工作的，他们就像是那种每一页上都画着不同画儿的书，快速翻动的时候就会出现是
     * 动画的幻觉，但是实际上，他们只是不停的在重绘整个屏幕。
     */
    function render() {
        if (player.level === "level1") {
            level1();
        } else if (player.level === "level2") {
            level2();
        }
        /* 这个数组保存着游戏关卡的特有的行对应的图片相对路径。 */
        // var rowImages = [
        //         'images/water-block.png',   // 这一行是河。
        //         'images/stone-block.png',   // 第一行石头
        //         'images/stone-block.png',   // 第二行石头
        //         'images/stone-block.png',   // 第三行石头
        //         'images/grass-block.png',   // 第一行草地
        //         'images/grass-block.png'    // 第二行草地
        //     ],
        //     numRows = 6,
        //     numCols = 5,
        //     row, col;

        /* 便利我们上面定义的行和列，用 rowImages 数组，在各自的各个位置绘制正确的图片 */
        // for (row = 0; row < numRows; row++) {
        //     for (col = 0; col < numCols; col++) {
        //         /* 这个 canvas 上下文的 drawImage 函数需要三个参数，第一个是需要绘制的图片
        //          * 第二个和第三个分别是起始点的x和y坐标。我们用我们事先写好的资源管理工具来获取
        //          * 我们需要的图片，这样我们可以享受缓存图片的好处，因为我们会反复的用到这些图片
        //          */
        //         ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
        //     }
        // }

        renderEntities();
    }

    /* 这个函数会在每个时间间隙被 render 函数调用。他的目的是分别调用你在 enemy 和 player
     * 对象中定义的 render 方法。
     */
    function renderEntities() {
        /* 遍历在 allEnemies 数组中存放的作于对象然后调用你事先定义的 render 函数 */
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });
        iteams.forEach(function(item) {
            item.render();
        });
        player.render();
        lifeCounter.render();
    }

    function textDrawer(text, x, y) {
        ctx.font = "28px Sigmar One";
        ctx.textAlign = 'center';
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.strokeText(text, x, y);
        ctx.fillStyle = "white";
        ctx.fillText(text, x, y);
    }

    /* 这个函数现在没干任何事，但是这会是一个好地方让你来处理游戏重置的逻辑。可能是一个
     * 从新开始游戏的按钮，也可以是一个游戏结束的画面，或者其它类似的设计。它只会被 init()
     * 函数调用一次。
     */
    function reset() {
        if (!newGame.gameRun && !newGame.finishedGame || newGame.paused === true) {
            textDrawer("Press SPACE to start", canvas.width / 2, canvas.height / 2);
        }

        if (newGame.gameOver === true) {
            imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < imgData.data.length; i += 4) {
                var red = imgData.data[i];
                var green = imgData.data[i + 1];
                var blue = imgData.data[i + 2];
                var grey = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
                imgData.data[i] = grey;
                imgData.data[i + 1] = grey;
                imgData.data[i + 2] = grey;
            }
            ctx.putImageData(imgData, 0, 0);
            textDrawer("GAME OVER!", canvas.width / 2, canvas.height / 2);
            textDrawer("Press SPACE to start again!", canvas.width / 2, (canvas.height / 2) + 40);
        }

        win.requestAnimationFrame(reset);
    }

    initParticles();
    var particles = [];
    var gravity = 0.04;

    function initParticles() {
        for (var i = 0; i < 100; i++) {
            setTimeout(createParticle, 20 * i, i);
        }
    }

    function createParticle() {
        var x = canvas.width / 2;
        var y = canvas.height / 2 - 150;
        var vx = -2 + Math.random() * 4;
        var vy = Math.random() * -3;
        var opacity = 0.5 + Math.random() * 0.5;
        var p = new Particle(x, y, vx, vy, opacity);
        particles.push(p);
    }

    function Particle(x, y, vx, vy, opacity) {
        function reset() {
            x = canvas.width * 0.5;
            y = canvas.height * 0.5 - 150;
            opacity = 0.5 + Math.random() * 0.5;
            vx = -2 + Math.random() * 4;
            vy = Math.random() * -3;
        }
        this.update = function() {
            // if a particle has faded to nothing we can reset it to the starting position
            if (opacity - 0.005 > 0) opacity -= 0.005;
            else reset();
            // add gravity to vy
            vy += gravity;
            x += vx;
            y += vy;
        };

        this.draw = function() {
            ctx.globalAlpha = opacity;
            ctx.drawImage(Resources.get('images/Heart.png'), x, y);
        };
    }

    function renderEndGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
    }

    /* 紧接着我们来加载我们知道的需要来绘制我们游戏关卡的图片。然后把 init 方法设置为回调函数。
     * 那么党这些图片都已经加载完毕的时候游戏就会开始。
     */
    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/char-pink-girl.png',
        'images/Ramp South.png',
        'images/Ramp East.png',
        'images/Ramp North.png',
        'images/Dirt Block.png',
        'images/Ramp West.png',
        'images/Rock.png',
        'images/Wall Block.png',
        'images/enemy-bug-left.png',
        'images/enemy-bug.png',
        'images/Heart.png',
        'images/Key.png',
        'images/char-pink-girl-holding.png',
        'images/char-pink-girl-immortal.png',
        'images/Roof North East.png',
        'images/Roof North West.png',
        'images/Roof South East.png',
        'images/Roof South West.png',
        'images/Roof South.png',
        'images/Window Tall.png',
        'images/Door Tall Closed.png',
        'images/Roof North.png',
        'images/Wood Block.png',
        'images/Shadow North.png',
        'images/Shadow West.png',
        'images/Shadow South West.png',
        'images/Tree Short.png',
        'images/Tree Ugly.png',
        'images/Selector.png',
        'images/Shadow South.png'
    ]);
    Resources.onReady(init);

    /* 把 canvas 上下文对象绑定在 global 全局变量上（在浏览器运行的时候就是 window
     * 对象。从而开发者就可以在他们的app.js文件里面更容易的使用它。
     */
    // global.ctx = ctx;
});

$("#play").click(function() {
    Engine();
    $("#play").hide();
    $("#show").show();
    $(".menu").css("margin-top", 0);
});

$("#show").click(function() {
    $(".inline2").toggle("slow", function() {
        cssChanger();
    });
    cssChanger();
});

var cssChanger = function() {
    if ($(".inline2").css("display") !== "none") {
        $(".inline1").css("float", "left");
        $(".inline1").css("width", "60%");
    } else if ($(".inline2").css("display") === "none") {
        $(".inline1").css("float", "none");
        $(".inline1").css("width", "100%");
    }
};

$("#instruc").click(function() {
    $("#instrucList").slideToggle("slow");
});
