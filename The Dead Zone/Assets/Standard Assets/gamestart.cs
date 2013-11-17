/*
	Unity 3D: Game Start Script Source for State Manager
       
    Copyright 2012 FIZIX Digital Agency
    http://www.fizixstudios.com
       
	For more information see the tutorial at:
    http://www.fizixstudios.com/labs/do/view/id/unity-game-state-manager
       
       
    Notes:
        This script is a basic GUI script to create a new game state; you will need the statemanager.cs 
        script.
*/

using UnityEngine;
using System.Collections;

public class gamestart : MonoBehaviour 
{

		
	// Our Startscreen GUI
	void OnGUI () 
	{
		if (GUI.Button (new Rect (30, 30, 150, 30), "Start Game"))
		{
			startGame();
		}
	}
	
	private void startGame()
	{
		print("Starting game");
		
		DontDestroyOnLoad(gamestate.Instance);
		gamestate.Instance.startState();	
	}
}