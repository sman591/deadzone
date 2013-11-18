#pragma strict



var projectile: Rigidbody;

var speed =100;

var fireRate=10;

var framesSinceLastFire=10;

var fired = false;
var defaultRotation;
var offSet = 0.0;
var offSetRate = 0.01;

var shooting : boolean = false;
var projectileLifetime = 2.0;

private var offX = 0.0;
private var offY = 0.0;


function start (){



}

function Update () {

                
                                defaultRotation = transform.rotation;
                if (!shooting == true)
                {
                               fired = false;
                               
                                offSet = 0.0;
                               
                                                 
                 }
                else
                {
                               
                                fired = true;
                               offSet += offSetRate;
                               
                                
                                 
                 }
                
                 if (fired)
                {
                               
                                offX = Random.Range(-offSet, offSet);
                               offY = Random.Range(-offSet, offSet);
                               
                                transform.Rotate(offX, offY, 0);
                               
                 
                 }
    
    
    
    
    if (shooting == true && framesSinceLastFire > fireRate )//Checks if you're pressing the fire1 button and that it's been a certain number of frames since the last time you fired a bullet

    {
                
    
    

        var clone = Instantiate(projectile, transform.position, transform.rotation);//Creates a clone of the set projectile

        clone.velocity= transform.TransformDirection(Vector3(0,0,speed));//sets the velocity of the object

        

        Destroy (clone.gameObject,projectileLifetime);//Destroys the clone after 2 seconds

        framesSinceLastFire = 0;

    

    }

    else

    {

        framesSinceLastFire++;

    }
    
    transform.rotation = defaultRotation;
    

}

function ShootOnce(){

	var clone = Instantiate(projectile, transform.position, transform.rotation);//Creates a clone of the set projectile

    clone.velocity= transform.TransformDirection(Vector3(0,0,speed));//sets the velocity of the object

    Destroy (clone.gameObject,projectileLifetime);//Destroys the clone after 2 seconds

    framesSinceLastFire = 0;

}