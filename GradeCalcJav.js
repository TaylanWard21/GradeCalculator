
function calculateCurrentGrade() {
    var homeworkAverage = averageArray(document.getElementById("homeworks").value);
    var midtermAverage = averageArray(document.getElementById("midterms").value);
    var quizzesAverage = averageArray(document.getElementById("quiz").value);
    var testsAverage = averageArray(document.getElementById("test").value);
    var thisArray = [];
    console.log(homeworkAverage);
    console.log(midtermAverage);
    console.log(quizzesAverage);
    console.log(testsAverage);
    thisArray.push(homeworkAverage, midtermAverage, quizzesAverage, testsAverage);
    var homework = parseInt(document.getElementById("homeworkWeight").value) / 100;
    var midterm =  parseInt(document.getElementById("midtermWeight").value) / 100;
    var quizzes =  parseInt(document.getElementById("quizzesWeight").value) / 100;
    var tests =  parseInt(document.getElementById("testsWeight").value) / 100;
    var currentGrade = 0;
    var weightedArray = [];
    weightedArray.push(homework, midterm, quizzes, tests);
    var weightedSum = ( homework + midterm + quizzes + tests);
    for (var i = 0; i < thisArray.length; i++){
        currentGrade += (weightedArray[i] * thisArray[i]);
    }
    console.log(currentGrade);
    console.log(weightedSum);
    if(weightedSum >= 100){
        document.getElementById("currentGrade").innerHTML = "This isn't right"
    }else{
        document.getElementById("currentGrade").innerHTML = " Your Current Grade Is " + (currentGrade / weightedSum) +"%";

    }
    colorRows("q",quizzesAverage);
    colorRows("h",homeworkAverage);
    colorRows("t", testsAverage);
     colorRows("m", midtermAverage);


            return currentGrade;



}


function averageArray(array) {
    var sum = 0;
     array = array.split(",");
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            return "Sorry! Can't Calculate These Numbers";
        }
        array[i] = parseInt(array[i]);
        sum += array[i];
    }
    return sum/array.length;
}


function calculateGradeNeeded() {
    var weightedFinal = document.getElementById("final").value / 100;
   var gradeWanted = document.getElementById("weight").value ;
   var bob = 0;
   console.log(weightedFinal);
   console.log(gradeWanted);
   bob += (gradeWanted - calculateCurrentGrade())/ weightedFinal;
    document.getElementById("thatGrade").innerHTML = "You Will Need A " + bob +"%" + " On The Final";
    return bob;





}

function colorRows(className,score){
    var elements = document.getElementsByClassName(className);  //array
    var color = '';
    console.log(elements);

    if(score >= 90) {
        color = '#008000'
     }
     if(score < 90 && score >= 80){
         color = '#0000ff'
     }
     if(score < 80 && score >= 70){
        color = '#ffff00'
     }
     if(score <70 && score >= 60){
         color = '#ffA500'
     }
     if(score < 60){
        color = '#ff0000'
     }

    //iterate through collection and set:
    for(var i = 0; i < elements.length; i++){
        elements[i].style.background = color

    }
    //

}

