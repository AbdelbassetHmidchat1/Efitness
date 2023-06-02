let workoutPrograms = {
    fullBody: {
      day1: [{
        exercises:[{
        "legs": [
          { 
            name: "Squat",
            videoLink: "https://example.com/squat-video"
          },
          { 
            name: "Lying leg curl",
            videoLink: "https://example.com/squat-video"
          },
        ],
        
        "Back": [
          { 
            name: "Lat pulldown",
            videoLink: "https://example.com/squat-video"
          },
          { 
            name: "Machine Seated Rows",
            videoLink: "https://example.com/squat-video"
          },
        ],
        "Chest": [
          { 
            name: "Bench Press (Dumbbells)",
            videoLink: "https://example.com/squat-video"
          },
          { 
            name: "Incline Bench Press (Dumbbells)",
            videoLink: "https://example.com/squat-video"
          },
        ],
        "Arms": [
          { 
            name: "Biceps Curl (Dumbbell)",
            videoLink: "https://example.com/squat-video"
          },
          { 
            name: "Triceps Rope Pushdown (Rope)",
            videoLink: "https://example.com/squat-video"
          },
        ],
        "Core":[
          {
            name:"Plank",
            videoLink: "https://example.com/squat-video"
          },

        ]
      }
      ]

      }]


    },
    twoDaySplit: {
      day1:[{
      exercises: [{
        "Back": [
          {
            name: "Lat Pulldown",
            videoLink: "https://example.com/exercise1-back-video"
          },
          {
            name: "Seated Machine Row",
            videoLink: "https://example.com/exercise2-back-video"
          }
        ],
        "Chest": [
          {
            name: " Bench press (Dumbbells)",
            videoLink: "https://example.com/exercise1-chest-video"
          },
          {
            name: "Cable Fly Crossover",
            videoLink: "https://example.com/exercise2-chest-video"
          }
        ],
        "Shoulders": [
          {
            name: "Shoulder press (Dumbbell)",
            videoLink: "https://example.com/exercise1-shoulders-video"
          },
          {
            name: "Lateral raises (Dumbbell)",
            videoLink: "https://example.com/exercise2-shoulders-video"
          }
        ],
        "Biceps": [
          {
            name: "Biceps Curl (EZ Bar Curl)",
            videoLink: "https://example.com/exercise1-biceps-video"
          },
        ],
        "Triceps": [
          {
            name: "Triceps Pushdown (Rope)",
            videoLink: "https://example.com/exercise1-triceps-video"
          },
        ]
      }],
    }
    ],
    day2:[{
      exercises: [{
        "Quads": [
          {
            name: "Smith Machine Squat",
            videoLink: "https://example.com/exercise1-back-video"
          },
          {
            name: " Walking Lunges (Dumbbell)",
            videoLink: "https://example.com/exercise2-back-video"
          }
        ],
        "Hamstrings": [
          {
            name: " Romanian Deadlift (Dumbbell)",
            videoLink: "https://example.com/exercise1-chest-video"
          },
          {
            name: " Lying leg Curl ",
            videoLink: "https://example.com/exercise2-chest-video"
          }
        ],
        "Glutes":[
          {
            name: " Hip thrusts (Barbell)",
            videoLink: "https://example.com/exercise1-chest-video"
          },

        ],
        "Calves": [
          {
            name: "Calf Raises",
            videoLink: "https://example.com/exercise1-shoulders-video"
          },

        ],
      }],
    }
    ]

      
      
    },
    threeDaySplit: {
      day1:[{
      exercises: [{
        "Chest": [
          {
            name: "Bench Press",
            videoLink: "https://example.com/exercise1-back-video"
          },
          {
            name: "Incline Dumbbell Bench Press",
            videoLink: "https://example.com/exercise2-back-video"
          },
          {
            name: "Cable Crossovers",
            videoLink: "https://example.com/exercise2-back-video"
          }
        ],
        "Shoulders": [
          {
            name: " Shoulder press (Dumbbells)",
            videoLink: "https://example.com/exercise1-chest-video"
          },
          {
            name: "Lateral raises",
            videoLink: "https://example.com/exercise2-chest-video"
          },
          {
            name: "Face Pulls",
            videoLink: "https://example.com/exercise2-chest-video"
          }
        ],
        "Triceps": [
          {
            name: "Triceps Rope Pushdown",
            videoLink: "https://example.com/exercise1-shoulders-video"
          },
          {
            name: "Triceps skullcrusher (EZ Bar Curl)",
            videoLink: "https://example.com/exercise2-shoulders-video"
          }
        ],
      }],
    }
    ],
    day2:[{
      exercises: [{
        "Back": [
          {
            name: "Lat Pulldown",
            videoLink: "https://example.com/exercise1-back-video"
          },
          {
            name: " Seated Machine Row",
            videoLink: "https://example.com/exercise2-back-video"
          },
          {
            name: " T Bar Rows",
            videoLink: "https://example.com/exercise2-back-video"
          },
          {
            name: " Lat Pushdown",
            videoLink: "https://example.com/exercise2-back-video"
          },
          {
            name: " Dumbbell Shrugs ",
            videoLink: "https://example.com/exercise2-back-video"
          }
        ],
        "Biceps": [
          {
            name: " Biceps Curl (EZ Bar Curl)",
            videoLink: "https://example.com/exercise1-chest-video"
          },
          {
            name: " Incline Curl (Dumbbell) ",
            videoLink: "https://example.com/exercise2-chest-video"
          },
          {
            name: " Hammer Cul (Rope)",
            videoLink: "https://example.com/exercise2-chest-video"
          }
        ],
      }],
    }
    ],
    day3:[{
      exercises: [{
        "Quads": [
          {
            name: "Smith Machine Squat",
            videoLink: "https://example.com/exercise1-back-video"
          },
          {
            name: " Walking Lunges (Dumbbell)",
            videoLink: "https://example.com/exercise2-back-video"
          }
        ],
        "Hamstrings": [
          {
            name: " Romanian Deadlift (Dumbbell)",
            videoLink: "https://example.com/exercise1-chest-video"
          },
          {
            name: " Lying leg Curl ",
            videoLink: "https://example.com/exercise2-chest-video"
          }
        ],
        "Glutes":[
          {
            name: " Hip thrusts (Barbell)",
            videoLink: "https://example.com/exercise1-chest-video"
          },

        ],
        "Calves": [
          {
            name: "Calf Raises",
            videoLink: "https://example.com/exercise1-shoulders-video"
          },

        ],
        "Core":[
          {
            name:"Plank",
            videoLink: "https://example.com/squat-video"
          },

        ]
      }],
    }
    ]

      
      
    },

    fourDaySplit: {
      day1:[{
        exercises: [{
          "Chest": [
            {
              name: "Bench Press",
              videoLink: "https://example.com/exercise1-back-video"
            },
            {
              name: "Incline Dumbbell Bench Press",
              videoLink: "https://example.com/exercise2-back-video"
            },
            {
              name: "Cable Crossovers",
              videoLink: "https://example.com/exercise2-back-video"
            }
          ],
          "Shoulders": [
            {
              name: " Shoulder press (Dumbbells)",
              videoLink: "https://example.com/exercise1-chest-video"
            },
            {
              name: "Lateral raises",
              videoLink: "https://example.com/exercise2-chest-video"
            },
            {
              name: "Face Pulls",
              videoLink: "https://example.com/exercise2-chest-video"
            }
          ],
          "Triceps": [
            {
              name: "Triceps Rope Pushdown",
              videoLink: "https://example.com/exercise1-shoulders-video"
            },
            {
              name: "Triceps skullcrusher (EZ Bar Curl)",
              videoLink: "https://example.com/exercise2-shoulders-video"
            }
          ],
        }],
      }
      ],
      day2:[{
        exercises: [{
          "Back": [
            {
              name: "Lat Pulldown",
              videoLink: "https://example.com/exercise1-back-video"
            },
            {
              name: " Seated Machine Row",
              videoLink: "https://example.com/exercise2-back-video"
            },
            {
              name: " T Bar Rows",
              videoLink: "https://example.com/exercise2-back-video"
            },
            {
              name: " Lat Pushdown",
              videoLink: "https://example.com/exercise2-back-video"
            },
            {
              name: " Dumbbell Shrugs ",
              videoLink: "https://example.com/exercise2-back-video"
            }
          ],
          "Biceps": [
            {
              name: " Biceps Curl (EZ Bar Curl)",
              videoLink: "https://example.com/exercise1-chest-video"
            },
            {
              name: " Incline Curl (Dumbbell) ",
              videoLink: "https://example.com/exercise2-chest-video"
            },
            {
              name: " Hammer Cul (Rope)",
              videoLink: "https://example.com/exercise2-chest-video"
            }
          ],
        }],
      }
      ],
      day3:[{
        exercises: [{
          "Quads": [
            {
              name: "Smith Machine Squat",
              videoLink: "https://example.com/exercise1-back-video"
            },
            {
              name: " Walking Lunges (Dumbbell)",
              videoLink: "https://example.com/exercise2-back-video"
            }
          ],
          "Hamstrings": [
            {
              name: " Romanian Deadlift (Dumbbell)",
              videoLink: "https://example.com/exercise1-chest-video"
            },
            {
              name: " Lying leg Curl ",
              videoLink: "https://example.com/exercise2-chest-video"
            }
          ],
          "Glutes":[
            {
              name: " Hip thrusts (Barbell)",
              videoLink: "https://example.com/exercise1-chest-video"
            },

          ],
          "Calves": [
            {
              name: "Calf Raises",
              videoLink: "https://example.com/exercise1-shoulders-video"
            },

          ],
          "Core":[
            {
              name:"Plank",
              videoLink: "https://example.com/squat-video"
            },

          ]
        }],
      }
      ],
      day4: [{
        exercises:[{
        "legs": [
          { 
            name: "Squat",
            videoLink: "https://example.com/squat-video"
          },
          { 
            name: "Lying leg curl",
            videoLink: "https://example.com/squat-video"
          },
        ],
        
        "Back": [
          { 
            name: "Lat pulldown",
            videoLink: "https://example.com/squat-video"
          },
          { 
            name: "Machine Seated Rows",
            videoLink: "https://example.com/squat-video"
          },
        ],
        "Chest": [
          { 
            name: "Bench Press (Dumbbells)",
            videoLink: "https://example.com/squat-video"
          },
          { 
            name: "Incline Bench Press (Dumbbells)",
            videoLink: "https://example.com/squat-video"
          },
        ],
        "Arms": [
          { 
            name: "Biceps Curl (Dumbbell)",
            videoLink: "https://example.com/squat-video"
          },
          { 
            name: "Triceps Rope Pushdown (Rope)",
            videoLink: "https://example.com/squat-video"
          },
        ],
        "Core":[
          {
            name:"Plank",
            videoLink: "https://example.com/squat-video"
          },

        ]
      }
      ]

      }]   
    },
    fiveDaySplit: {
      day1:[{
        exercises: [{
          "Chest": [
            {
              name: "Bench Press",
              videoLink: "https://example.com/exercise1-back-video"
            },
            {
              name: "Incline Dumbbell Bench Press",
              videoLink: "https://example.com/exercise2-back-video"
            },
            {
              name: "Cable Crossovers",
              videoLink: "https://example.com/exercise2-back-video"
            }
          ],
          "Shoulders": [
            {
              name: " Shoulder press (Dumbbells)",
              videoLink: "https://example.com/exercise1-chest-video"
            },
            {
              name: "Lateral raises",
              videoLink: "https://example.com/exercise2-chest-video"
            },
            {
              name: "Face Pulls",
              videoLink: "https://example.com/exercise2-chest-video"
            }
          ],
          "Triceps": [
            {
              name: "Triceps Rope Pushdown",
              videoLink: "https://example.com/exercise1-shoulders-video"
            },
            {
              name: "Triceps skullcrusher (EZ Bar Curl)",
              videoLink: "https://example.com/exercise2-shoulders-video"
            }
          ],
        }],
      }
      ],
      day2:[{
        exercises: [{
          "Back": [
            {
              name: "Lat Pulldown",
              videoLink: "https://example.com/exercise1-back-video"
            },
            {
              name: " Seated Machine Row",
              videoLink: "https://example.com/exercise2-back-video"
            },
            {
              name: " T Bar Rows",
              videoLink: "https://example.com/exercise2-back-video"
            },
            {
              name: " Lat Pushdown",
              videoLink: "https://example.com/exercise2-back-video"
            },
            {
              name: " Dumbbell Shrugs ",
              videoLink: "https://example.com/exercise2-back-video"
            }
          ],
          "Biceps": [
            {
              name: " Biceps Curl (EZ Bar Curl)",
              videoLink: "https://example.com/exercise1-chest-video"
            },
            {
              name: " Incline Curl (Dumbbell) ",
              videoLink: "https://example.com/exercise2-chest-video"
            },
            {
              name: " Hammer Cul (Rope)",
              videoLink: "https://example.com/exercise2-chest-video"
            }
          ],
        }],
      }
      ],
      day3:[{
        exercises: [{
          "Quads": [
            {
              name: "Smith Machine Squat",
              videoLink: "https://example.com/exercise1-back-video"
            },
            {
              name: " Walking Lunges (Dumbbell)",
              videoLink: "https://example.com/exercise2-back-video"
            }
          ],
          "Hamstrings": [
            {
              name: " Romanian Deadlift (Dumbbell)",
              videoLink: "https://example.com/exercise1-chest-video"
            },
            {
              name: " Lying leg Curl ",
              videoLink: "https://example.com/exercise2-chest-video"
            }
          ],
          "Glutes":[
            {
              name: " Hip thrusts (Barbell)",
              videoLink: "https://example.com/exercise1-chest-video"
            },

          ],
          "Calves": [
            {
              name: "Calf Raises",
              videoLink: "https://example.com/exercise1-shoulders-video"
            },

          ],
          "Core":[
            {
              name:"Plank",
              videoLink: "https://example.com/squat-video"
            },

          ]
        }],
      }
      ],
      day4:[{
        exercises: [{
          "Back": [
            {
              name: "Lat Pulldown",
              videoLink: "https://example.com/exercise1-back-video"
            },
            {
              name: "Seated Machine Row",
              videoLink: "https://example.com/exercise2-back-video"
            }
          ],
          "Chest": [
            {
              name: " Bench press (Dumbbells)",
              videoLink: "https://example.com/exercise1-chest-video"
            },
            {
              name: "Cable Fly Crossover",
              videoLink: "https://example.com/exercise2-chest-video"
            }
          ],
          "Shoulders": [
            {
              name: "Shoulder press (Dumbbell)",
              videoLink: "https://example.com/exercise1-shoulders-video"
            },
            {
              name: "Lateral raises (Dumbbell)",
              videoLink: "https://example.com/exercise2-shoulders-video"
            }
          ],
          "Biceps": [
            {
              name: "Biceps Curl (EZ Bar Curl)",
              videoLink: "https://example.com/exercise1-biceps-video"
            },
          ],
          "Triceps": [
            {
              name: "Triceps Pushdown (Rope)",
              videoLink: "https://example.com/exercise1-triceps-video"
            },
          ]
        }],
      }
      ],
      day5:[{
        exercises: [{
          "Quads": [
            {
              name: "Smith Machine Squat",
              videoLink: "https://example.com/exercise1-back-video"
            },
            {
              name: " Walking Lunges (Dumbbell)",
              videoLink: "https://example.com/exercise2-back-video"
            }
          ],
          "Hamstrings": [
            {
              name: " Romanian Deadlift (Dumbbell)",
              videoLink: "https://example.com/exercise1-chest-video"
            },
            {
              name: " Lying leg Curl ",
              videoLink: "https://example.com/exercise2-chest-video"
            }
          ],
          "Glutes":[
            {
              name: " Hip thrusts (Barbell)",
              videoLink: "https://example.com/exercise1-chest-video"
            },

          ],
          "Calves": [
            {
              name: "Calf Raises",
              videoLink: "https://example.com/exercise1-shoulders-video"
            },

          ],
        }],
      }
      ]

    }
  };

const program = "twoDaySplit";

const workoutProgram = workoutPrograms[program];
