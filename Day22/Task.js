function main(){
let score =[[255,211],[203,121],[272,292],[25,275]];
let house=["Gryffindor","Huffelpuff","Ravenclaw","Slytherine"];
HighestScoreInEachHouse(score,house); 
HighestScore(score,house);
FinalWinningHouse(score, house);
}
main();
//Finding The Highest Score in each house
function HighestScoreInEachHouse(score,house){
    for(let i=0;i<score.length;i++){
        let points=0;
        let gender="";
        if(score[i][0]>score[i][1]){
            points=score[i][0];
            gender="Girls";
        }
        else{
            points=score[i][1];
            gender="Boys"
        }
        console.log("The Best performance in "+house[i]+"house of the house meet is "+gender+","+points);
    }
}
//Finding the highest score 
function HighestScore(score,house){
    let scoreBoys=score[0][1],scoreGirls=[0][0];
    let BoysHouse=house[0],GirlsHouse=house[0];
    for(let i=0;i<score.length;i++){
      if(scoreBoys<score[i][1]){
        scoreBoys=score[i][1];
        BoysHouse=house[i];
      }
      if(scoreGirls<score[i][0]){
        scoreGirls=score[i][0];
        GirlsHouse=house[i];
      }
    }
      console.log("The best performance in Boys of the house meet is "+BoysHouse+" "+scoreBoys)
      console.log("The best performance in Girls of the house meet is "+GirlsHouse+" "+scoreGirls)
}
//Finding the winner House 
function FinalWinningHouse(score, house){
    let maxPoints = 0;
    let winningHouse = "";

    for(let i=0; i<score.length; i++){
        let total = score[i][0] + score[i][1];  // Girls + Boys points
        if(total > maxPoints){
            maxPoints = total;
            winningHouse = house[i];
        }
    }

    console.log(" The Final Winning House is "+winningHouse+" with "+maxPoints+" points");
}

