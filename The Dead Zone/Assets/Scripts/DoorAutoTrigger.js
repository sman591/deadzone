#pragma strict

var leftDoor : GameObject;
var rightDoor : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider){
    if (other.CompareTag ("Player")){
    leftDoor.animation.Play("DoorLeftOpen");
    rightDoor.animation.Play("DoorRightOpen");
    }
    
}
   
function OnTriggerExit(other : Collider){
    if (other.CompareTag ("Player")){
    leftDoor.animation.Play("DoorLeftClose");
    rightDoor.animation.Play("DoorRightClose");
    } 
    
}