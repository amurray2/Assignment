$("#gradeCalculator").click(function () {
    //Sets the weight of the different grade categories.
    var assignmentPercent = 50.0
    var groupProjectPercent = 10.0
    var quizPercent = 10.0
    var examPercent = 20.0
    var intexPercent = 10.0

    //Grabs the input data
    //I did not do error handling because the instructions didn't say anything about that. 
    var assignmentValue = $("#assignment").val()
    var groupProjectValue = $("#project").val()
    var quizValue = $("#quiz").val()
    var examValue = $("#exam").val()
    var intexValue = $("#intex").val()

    //Calculates the final grade
    var finalGradeValue = parseFloat((assignmentValue * (assignmentPercent * .01)) + (groupProjectValue * (groupProjectPercent * .01)) +
        (quizValue * (quizPercent * .01)) + (examValue * (examPercent * .01)) + (intexValue * (intexPercent * .01)))

    var letterGrade = "";

    //determines the letter grade
    if (finalGradeValue >= 94) {
        letterGrade = "A"
    }
    else if (finalGradeValue >= 90) {
        letterGrade = "A-"
    }
    else if (finalGradeValue >= 87) {
        letterGrade = "B+"
    }
    else if (finalGradeValue >= 84) {
        letterGrade = "B"
    }
    else if (finalGradeValue >= 80) {
        letterGrade = "B-"
    }
    else if (finalGradeValue >= 77) {
        letterGrade = "C+"
    }
    else if (finalGradeValue >= 74) {
        letterGrade = "C"
    }
    else if (finalGradeValue >= 70) {
        letterGrade = "C-"
    }
    else if (finalGradeValue >= 67) {
        letterGrade = "D+"
    }
    else if (finalGradeValue >= 64) {
        letterGrade = "D"
    }
    else if (finalGradeValue >= 60) {
        letterGrade = "D-"
    }
    else {
        letterGrade = "E"
    }

    //Outputs the final grade and final letter grade.
    var output = "Final Grade Percentage: " + finalGradeValue.toFixed(3) + "%\nLetter Grade: " + letterGrade
    alert(output)

});