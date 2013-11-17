#pragma strict

var anim : Animator;

function Start () {
anim = GetComponentInChildren(Animator);

}

function Update () {

	if (Input.GetButtonDown ("Fire1")) {
			anim.SetBool("Shoot",true);
		}
		
	if (Input.GetButtonUp ("Fire1")) {
			anim.SetBool("Shoot",false);
		}
 	if (Input.GetAxis("Vertical") || Input.GetAxis("Horizontal")) {
			anim.SetBool("Walk",true);
			anim.SetBool("Idle",false);
	}else{
			anim.SetBool("Walk",false);
			anim.SetBool("Idle",true);
  	}
  
    if (Input.GetKeyDown("v")) {
    		anim.SetBool("Melee",true);
      	}
    if (Input.GetKeyUp("v")) {
    		anim.SetBool("Melee",false);
      	}    

}

function GunDown () {
	anim.SetBool("Down",true);
}

function GunUp () {
	anim.SetBool("Down",false);
}

//function PlayOnce ( string : paramName ){

		//anim.SetBool( paramName, true );

       // yield return null;

        //anim.SetBool( paramName, false );

//}