#pragma strict

var LevelToLoad : String = "";

function OnTriggerEnter(other : Collider){
        if (other.gameObject.tag == "Player") {
        Debug.Log ("yo dawg");
        yield WaitForSeconds(1.5);
        Application.LoadLevel(LevelToLoad);
        }
}