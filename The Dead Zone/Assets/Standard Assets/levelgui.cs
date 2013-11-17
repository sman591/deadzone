/*
	Unity 3D: Level GUI Script Source for State Manager
       
    Copyright 2012 FIZIX Digital Agency
    http://www.fizixstudios.com
       
	For more information see the tutorial at:
    http://www.fizixstudios.com/labs/do/view/id/unity-game-state-manager
       
       
    Notes:
        This script is a C# script provides a simple GUI that interfaces with the state manager, you 
        will need the statemanager.cs script and should review the gamestart.cs script for information 
        on how to implement the state manager.
*/



using UnityEngine;
using System.Collections;

public class levelgui : MonoBehaviour {

	// Initialize level
	void Start () 
	{
		print ("Loaded: " + gamestate.Instance.getLevel());
	}
	
	
	
	// ---------------------------------------------------------------------------------------------------
	// OnGUI()
	// --------------------------------------------------------------------------------------------------- 
	// Provides a GUI on level scenes
	// ---------------------------------------------------------------------------------------------------
	void OnGUI()
	{		
				
		// Output stats
		GUI.Label(new Rect(30, 10, 400, 30), "Health: " + gamestate.Instance.getHP().ToString());
		GUI.Label(new Rect(30, 25, 400, 30), "Lives: " + gamestate.Instance.getLives().ToString());
		GUI.Label(new Rect(30, 40, 400, 30), "Score: " + gamestate.Instance.getScore().ToString());
				
	}
}