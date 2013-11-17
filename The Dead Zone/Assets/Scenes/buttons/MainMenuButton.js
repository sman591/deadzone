#pragma strict

function Start () {

}

function Update () {

}

function OnMouseEnter() {
        this.renderer.material.color = Color.red;
    }

    function OnMouseExit() {
        this.renderer.material.color = Color.white;
    }

    function OnMouseDown() {        
         Application.LoadLevel("MainMenu");
    }