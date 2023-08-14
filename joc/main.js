$(function () {

    $(".menu").on("click", function (e) {
        let score = 0
        console.log($(e.target).data("level"))
        if (($(e.target).data("level") == "easy")) {
            var speed = 1500
        }
        else {
            var speed = 1000
        }
         $(".menu").hide()       
        var star = $('.star')
        $(".star").on("click", function () {
            score = parseInt($(".aux_score").text())
            $(".aux_score").text(score + 10)
        })
        setInterval(() => {
            $(".star").css({ "top": Math.random() * 500 + "px", "left": Math.random() * 1000 + "px" })

        }, speed);
        setTimeout(() => {
            $(".star").hide()
            $(".endscreen").show()
            $(".finalscore").text(score)
        }, 15000);
    })

})