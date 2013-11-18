    #pragma strict
    
    var distance : float;
    static var target : Transform;
    var lookAtDistance = 15.0;
    var attackRange = 10.0;
    var moveSpeed = 5.0;
    var damping = 6.0;
    private var isItAttacking = false;
    var Barrel : AI_Shoot;
        
    function Start () {
    target = GameObject.FindWithTag("Player").transform;
    }
    
    function Update (){
    	if(target == null){
    		target = GameObject.FindWithTag("Respawn").transform;
    	}
    	
    	if(target !== null){
    		distance = Vector3.Distance(target.position, transform.position);
    
    		//if(!transform.localRotation.y == transform.parent.localRotation.y){
   			//transform.localRotation.y = transform.parent.localRotation.y;
   			//} 
    		if(distance < lookAtDistance && Barrel !== null){
    			isItAttacking = false;
    			lookAt ();
    			Barrel.shooting = false;

    		//renderer.material.color = Color.yellow;
    	
    		}
    		if(distance > lookAtDistance){
    			if(Barrel !== null){
    				Barrel.shooting = false;
    				}
    		//renderer.material.color = Color.green;
    		}
    		if(distance < attackRange){
    			//attack ();
    		}
    		if(isItAttacking){
    		//renderer.material.color = Color.red;
    		}
    	}
    } 
     
    function lookAt (){
     // if(target.transform.y > transform.y){
     // transform.Rotate(Vector3.right, Time.deltaTime);
     // }else if(target.transform.y < transform.y){
     // transform.Rotate(Vector3.left, Time.deltaTime);
     // }
     //var gunElevation = transform.main.transform;
     //var elevationRelative = gunElevation.InverseTransformPoint(transform.position);
     var rotation = Quaternion.LookRotation(target.position - transform.position);
     //rotation.x = 0;
     //rotation.y = 0;
     rotation.z = 0;
     //rotation.z = transform.parent.rotation.z;
     //rotation.y = transform.parent.rotation.y;
     //transform.localRotation.y = transform.parent.y;
     //transform.localRotation.z = transform.parent.z;
     
     
     transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);  
     //transform.localRotation.y = transform.parent.y;
     //transform.localRotation.z = transform.parent.z;   
	 //transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
    }
     
    function attack (){
    	isItAttacking = true;  
    		if(Barrel !== null){
    		Barrel.shooting = true;
    		}
    }