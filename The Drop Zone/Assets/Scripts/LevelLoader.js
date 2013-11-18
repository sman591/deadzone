#pragma strict

var levelToLoad : String = "";
var leftButtonText : String = "Replay";
var rightButtonText : String = "Main Menu";

private var control : GameObject;
private var gameState : GameObject;

function Start () {

        gameState = GameObject.Find("gamestate");
        if(gameState){
                var temp = gameState.GetComponent(gamestate);
                }               
}
        

function Update () {

}

function OnGUI (){

gameState = GameObject.Find("gamestate");
        var temp = gameState.GetComponent(gamestate);           

// Create buttons to move between level 1 and level 2
                if (GUI.Button(Rect ((Screen.width/2)-70, (Screen.height/2)+30 , 150, 30),leftButtonText))
                {
                        temp.Instance.setLevel("Level 1");
                        Application.LoadLevel(levelToLoad);
                }
                
                if (GUI.Button(Rect ((Screen.width/2)-70, (Screen.height/2)+70 , 150, 30), rightButtonText))
                {
                        Debug.Log("Moving to Main Menu");
                        temp.Instance.setLevel("Main Menu");
                        Application.LoadLevel("MainMenu");
                }

}