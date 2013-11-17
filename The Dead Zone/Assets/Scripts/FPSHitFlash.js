#pragma strict
// Use this script to indicate the player has been hit. Call the FlashRed function on hit

private var hitEffect : Animation; // we need to have these animations in an animation component

function Start () {

hitEffect = GameObject.Find("HitEffect").GetComponent(Animation);

}

function FlashRed ()
{
	hitEffect.animation.Play("HitOverlay");
}

function FlashDead ()
{
	hitEffect.animation.Play("DeathOverlay");
}

function FlashClear ()
{
	hitEffect.animation.Play("ClearOverlay");
}