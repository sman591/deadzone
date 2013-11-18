#pragma strict

private var texture1 : Texture;
var texture2 : Texture;
private var material1 : Material;
var material2 : Material;
var inzone : boolean;

function Start () {
	texture1 = this.renderer.material.mainTexture;
	material1 = this.renderer.material;
}

function OnTriggerEnter () {
	inzone = true;
}

function OnTriggerExit () {
	inzone = false;
	revertMaterial();
}

function OnMouseEnter () {
	if (inzone == true){
		changeMaterial();
		}
}

function OnMouseExit () {
	if (inzone == true){
		revertMaterial();
		}
}

function changeMaterial () {
	renderer.material = material2;
	renderer.material.mainTexture = texture2;
}

function revertMaterial () {
	renderer.material = material1;
	renderer.material.mainTexture = texture1;
}

function Update () {

}
