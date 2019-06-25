function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}
// shuffle function
function shuffle (a)
{
    var o = [];
    for (var i=0; i < a.length; i++) {
	o[i] = a[i];
    }
    for (var j, x, i = o.length;
	 i;
	 j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function shuffledArray(arrLength)
{
  var j, tmp;
  var arr = new Array(arrLength);
  for (i = 0; i < arrLength; i++)
  {
    arr[i] = i;
  }
  for (i = 0; i < arrLength-1; i++)
  {
    j = Math.floor((Math.random() * (arrLength - 1 - i)) + 0.99) + i;
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function shuffledSampleArray(arrLength, sampleLength)
{
  var arr = shuffledArray(arrLength);
  var beginIndex = Math.floor(Math.random() * (arrLength-sampleLength+1));
  return arr.slice(beginIndex, beginIndex+sampleLength);
}

// ---------------- PARAMETERS ------------------

// CONDITION ASSIGNMENT


var score = shuffle(["nett", "ehrlich", "gemein"]);


var state_knowledge = "unknown";



var domains1 =
    shuffle(["Gedicht", "Kuchen", "Kekse", "Vortrag", "Lied", "Film", "Solo", "Monolog", "Stepptanz", "Bild", "App", "Rezension", "Konzert"]);
var domains2 =
    shuffle(["Gedicht", "Kuchen"]);

//var domains2 =
//    shuffle(["Gedicht", "Kuchen", "Kekse", "Vortrag", "Lied", "Film", "Solo", "Monolog", "Stepptanz", "Bild", "App", "Rezension", "Konzert"]);
var domains = domains1.concat(domains2)

//var states =
//    ["furchtbar", "schlecht", "furchtbar", "schlecht", "furchtbar", "schlecht"];
//
var states1 =
    ["furchtbar", "schlecht", "okay", "gut", "hervorragend"];
var states2 =
    ["schlecht", "okay", "gut", "hervorragend", "furchtbar"];
var states3 =
    ["okay", "gut", "hervorragend", "furchtbar", "schlecht"];
var states4 =
    ["gut", "hervorragend", "furchtbar", "schlecht", "okay"];
var states5 =
    ["hervorragend", "furchtbar", "schlecht", "okay", "gut"];
var states = states1.concat(states2, states3, states4, states5)

var utterances1 =
    ["furchtbar", "schlecht", "okay", "gut", "hervorragend"];
var utterances2 =
    ["furchtbar", "schlecht", "okay", "gut", "hervorragend"];
var utterances3 =
    ["furchtbar", "schlecht", "okay", "gut", "hervorragend"];

var utterances = utterances1.concat(utterances2, utterances3)

var goals =
    ["nett", "ehrlich", "gemein", "nett", "ehrlich", "gemein", "nett", "ehrlich", "gemein", "nett", "ehrlich", "gemein", "nett", "ehrlich", "gemein"];

    var allConditions =
shuffle(
    [

shuffle(
    [
{"domain": domains[0],
 "state": states[0],
 "utterance": utterances[0],
 "people": "people1",
 "goal": goals[0],
},
{"domain": domains[1],
 "state": states[1],
 "utterance": utterances[1],
 "people": "people2",
 "goal": goals[1],
},
{"domain": domains[2],
 "state": states[2],
 "utterance": utterances[2],
 "people": "people3",
 "goal": goals[2],
},
{"domain": domains[3],
 "state": states[3],
 "utterance": utterances[3],
 "people": "people4",
 "goal": goals[3],
},
{"domain": domains[4],
 "state": states[4],
 "utterance": utterances[4],
 "people": "people5",
 "goal": goals[4],
},
{"domain": domains[5],
 "state": states[5],
 "utterance": utterances[5],
 "people": "people6",
 "goal": goals[5],
},
{"domain": domains[6],
 "state": states[6],
 "utterance": utterances[6],
 "people": "people7",
 "goal": goals[6],
},
{"domain": domains[7],
 "state": states[7],
 "utterance": utterances[7],
 "people": "people8",
 "goal": goals[7],
},
{"domain": domains[8],
 "state": states[8],
 "utterance": utterances[8],
 "people": "people9",
 "goal": goals[8],
},
{"domain": domains[9],
 "state": states[9],
 "utterance": utterances[9],
 "people": "people10",
 "goal": goals[9],
},
{"domain": domains[10],
 "state": states[10],
 "utterance": utterances[10],
 "people": "people11",
 "goal": goals[10],
},
{"domain": domains[11],
 "state": states[11],
 "utterance": utterances[11],
 "people": "people12",
 "goal": goals[11],
},
{"domain": domains[12],
 "state": states[12],
 "utterance": utterances[12],
 "people": "people13",
 "goal": goals[12],
},
{"domain": domains[13],
 "state": states[13],
 "utterance": utterances[13],
 "people": "people14",
 "goal": goals[13],
},
{"domain": domains[14],
 "state": states[14],
 "utterance": utterances[14],
 "people": "people15",
 "goal": goals[14],
},

    ])
]);

speakers = shuffle([["Lukas","Leon",], ["Anna", "Hannah"], ["Lea", "Leonie"], ["Tim", "Luka"], ["Fynn", "Jonas"],
                    ["Lena", "Johanna"], ["Jan", "Niklas"], ["Laura", "Sarah"], ["Felix", "Paul"], ["Marie", "Emily"],
                    ["Tom", "Max"], ["Louis", "Julian"], ["Emma", "Sophie"], ["Lara", "Julia"], ["Philip", "Ben"],
                    ["Jannik", "Moritz"], ["Marc", "Niko"], ["Mia", "Yvonne"], ["Rebecca", "Lina"], ["Alina", "Lisa"],
                    ["David", "Simon"], ["Alexander", "Elias"], ["Fabian", "Noah"], ["Amelie", "Louisa"], ["Paula", "Annika"]]);
speakers1 = shuffle(speakers[0]);
speakers2 = shuffle(speakers[1]);
speakers3 = shuffle(speakers[2]);
speakers4 = shuffle(speakers[3]);
speakers5 = shuffle(speakers[4]);
speakers6 = shuffle(speakers[5]);
speakers7 = shuffle(speakers[6]);
speakers8 = shuffle(speakers[7]);
speakers9 = shuffle(speakers[8]);
speakers10 = shuffle(speakers[9]);
speakers11 = shuffle(speakers[10]);
speakers12 = shuffle(speakers[11]);
speakers13 = shuffle(speakers[12]);
speakers14 = shuffle(speakers[13]);
speakers15 = shuffle(speakers[14]);
speakers16 = shuffle(speakers[15]);
speakers17 = shuffle(speakers[16]);
speakers18 = shuffle(speakers[17]);
speakers19 = shuffle(speakers[18]);
speakers20 = shuffle(speakers[19]);
speakers21 = shuffle(speakers[20]);
speakers22 = shuffle(speakers[21]);
speakers23 = shuffle(speakers[22]);
speakers24 = shuffle(speakers[23]);
speakers25 = shuffle(speakers[24]);

var sents = {
    utterances: {
        furchtbar: {
            sent_utterance: " <b>\"BB war furchtbar.\"</b>"
        },
        schlecht: {
            sent_utterance: " <b>\"BB war schlecht.\"</b>"
        },
        okay: {
            sent_utterance: " <b>\"BB war okay.\"</b>"
        },
        gut: {
            sent_utterance: " <b>\"BB war gut.\"</b>"
        },
        hervorragend: {
            sent_utterance: " <b>\"BB war hervorragend.\"</b>"
        },
    },

    domains: {
       Vortrag: {
            sent_precontext: "Stellen Sie sich vor, dass LS gerade einen Vortrag gehalten hat, ",
            sent_context: " SP hat den Vortrag gesehen. LS fragt daraufhin SP: \"Wie war mein Vortrag?\"",
            BB: "Der Vortrag",
			BK: "den Vortrag",
	},
	   Kekse: {
            sent_precontext: "Stellen Sie sich vor, dass LS Kekse gebacken hat, ",
            sent_context: " SP hat die Kekse probiert. LS fragt daraufhin SP: \"Wie waren meine Kekse?\"",
            BB: "Die Kekse",
			BK: "die Kekse",
	},
	   Gedicht: {
            sent_precontext: "Stellen Sie sich vor, dass LS ein Gedicht geschrieben hat, ",
            sent_context: " SP hat das Gedicht gelesen. LS fragt daraufhin SP: \"Wie war mein Gedicht?\"",
            BB: "Das Gedicht",
			BK: "das Gedicht",
	},
	   Kuchen: {
            sent_precontext: "Stellen Sie sich vor, dass LS einen Kuchen gebacken hat, ",
            sent_context: " SP hat den Kuchen gegessen. LS fragt daraufhin SP: \"Wie war mein Kuchen?\"",
            BB: "Der Kuchen",
			BK: "den Kuchen",
	},
	   Lied: {
            sent_precontext: "Stellen Sie sich vor, dass LS ein Lied geschrieben hat, ",
            sent_context: " SP hat das Lied gehört. LS fragt daraufhin SP: \"Wie war mein Lied?\"",
            BB: "Das Lied",
			BK: "das Lied",
	},
	   Film: {
            sent_precontext: "Stellen Sie sich vor, dass LS einen Film gedreht hat, ",
            sent_context: " SP hat den Film gesehen. LS fragt daraufhin SP: \"Wie war mein Film?\"",
            BB: "Der Film",
			BK: "den Film",
	},
	   Solo: {
            sent_precontext: "Stellen Sie sich vor, dass LS ein Cello Solo gespielt hat, ",
            sent_context: " SP hat das Cello Solo gehört. LS fragt daraufhin SP: \"Wie war mein Cello Solo?\"",
            BB: "Das Solo",
			BK: "das Solo",
	},
	   Stepptanz: {
            sent_precontext: "Stellen Sie sich vor, dass LS einen Stepptanz aufgeführt hat, ",
            sent_context: " SP hat den Stepptanz Auftritt gesehen. LS fragt daraufhin SP: \"Wie war mein Stepptanz Auftritt?\"",
            BB: "Der Stepptanz",
			BK: "den Stepptanz",
	},
	   Bild: {
            sent_precontext: "Stellen Sie sich vor, dass LS ein Bild gemalt hat, ",
            sent_context: " SP hat das Bild gesehen. LS fragt daraufhin SP: \"Wie ist mein Bild?\"",
            BB: "Das Bild",
			BK: "das Bild",
	},
	   Monolog: {
            sent_precontext: "Stellen Sie sich vor, dass LS einen Monolog bei einem Theaterstück vorgetragen hat, ",
            sent_context: " SP hat den Monolog gehört. LS fragt daraufhin SP: \"Wie war mein Monolog?\"",
            BB: "Der Monolog",
			BK: "den Monolog",
	},
	   App: {
            sent_precontext: "Stellen Sie sich vor, dass LS eine Handy App entwickelt hat, ",
            sent_context: " SP hat die App ausprobiert. LS fragt daraufhin SP: \"Wie ist meine App?\"",
            BB: "Die App",
			BK: "die App",
	},
	   Rezension: {
            sent_precontext: "Stellen Sie sich vor, dass LS eine Rezension für ein Buch geschrieben hat, ",
            sent_context: " SP hat die Rezension gelesen. LS fragt daraufhin SP: \"Wie ist meine Rezension?\"",
            BB: "Die Rezension",
			BK: "die Rezension",
	},
	   Konzert: {
            sent_precontext: "Stellen Sie sich vor, dass LS ein Klavierkonzert gespielt hat ",
            sent_context: " SP hat das Konzert gehört. LS fragt daraufhin SP: \"Wie war mein Konzert?\"",
            BB: "Das Konzert",
			BK: "das Konzert",
	},
    },
    states: {
        furchtbar: {
            state: " <b>everyone thought LS's BB war furchtbar</b>,"
        },
        schlecht: {
            state: " <b>everyone thought LS's BB war schlecht</b>,"
        },
        okay: {
            state: " <b>everyone thought LS's BB war just okay</b>,"
        },
        gut: {
            state: " <b>everyone thought LS's BB war gut</b>,"
        },
        hervorragend: {
            state: " <b>everyone thought LS's BB war hervorragend</b>,"
        },
    },
    goals: {
        nett: {
            goal: " <b>SP möchte nett sein und antwortet: "
        },
        ehrlich: {
            goal: " <b>SP möchte ehrlich sein und antwortet: "
        },
        gemein: {
            goal: " <b>SP möchte gemein sein und antwortet: "
        }
    },
    people: {
        people1: {
            SP: speakers1[0],
            LS: speakers1[1],
        },
        people2: {
            SP: speakers2[0],
            LS: speakers2[1],
        },
        people3: {
            SP: speakers3[0],
            LS: speakers3[1],
        },
        people4: {
            SP: speakers4[0],
            LS: speakers4[1],
        },
        people5: {
            SP: speakers5[0],
            LS: speakers5[1],
        },
        people6: {
            SP: speakers6[0],
            LS: speakers6[1],
        },
        people7: {
            SP: speakers7[0],
            LS: speakers7[1],
        },
        people8: {
            SP: speakers8[0],
            LS: speakers8[1],
        },
        people9: {
            SP: speakers9[0],
            LS: speakers9[1],
        },
        people10: {
            SP: speakers10[0],
            LS: speakers10[1],
        },
        people11: {
            SP: speakers11[0],
            LS: speakers11[1],
        },
        people12: {
            SP: speakers12[0],
            LS: speakers12[1],
        },
        people13: {
            SP: speakers13[0],
            LS: speakers13[1],
        },
        people14: {
            SP: speakers14[0],
            LS: speakers14[1],
        },
        people15: {
            SP: speakers15[0],
            LS: speakers15[1],
        },
        people16: {
            SP: speakers16[0],
            LS: speakers16[1],
        },
        people17: {
            SP: speakers17[0],
            LS: speakers17[1],
        },
        people18: {
            SP: speakers18[0],
            LS: speakers18[1],
        },
        people19: {
            SP: speakers19[0],
            LS: speakers19[1],
        },
        people20: {
            SP: speakers20[0],
            LS: speakers20[1],
        },
        people21: {
            SP: speakers21[0],
            LS: speakers21[1],
        },
        people22: {
            SP: speakers22[0],
            LS: speakers22[1],
        },
        people23: {
            SP: speakers23[0],
            LS: speakers23[1],
        },
        people24: {
            SP: speakers24[0],
            LS: speakers24[1],
        },
        people25: {
            SP: speakers25[0],
            LS: speakers25[1],
        },
    }
};

function doSentSubs (sents, polite, domain, utterance, people, goal)
{
    utterance = sents["utterances"][utterance]["sent_utterance"];
    precontext = sents["domains"][domain]["sent_precontext"];
    context = sents["domains"][domain]["sent_context"];
    state = sents["states"][state]["state"]
    goal = sents["goals"][goal]["goal"]
    if (state_knowledge == "known") {
        knowledge = " <b>and LS knew it</b>."
    } else if (state_knowledge == "unknown") {
        knowledge = " aber nicht weiß wie andere Leute darüber denken."
    }

    question = "Based on what SP said, how likely do you think that <b>SP's goal</b> was to be:";


    question2 = "Was denken Sie: Wie denkt SP <b>wirklich</b> über BK von LS?";
    question3 = "Based on what SP said, how likely is it for you to <b>like SP</b>?";

    BB = sents["domains"][domain]["BB"]; //Item 2
	BK = sents["domains"][domain]["BK"]; //Item 2
    SP = sents["people"][people]["SP"]; //speaker
    LS = sents["people"][people]["LS"]; //addressee

    utterance = utterance.replace("BB",BB).replace("SP",SP).replace("LS",LS);
    context = context.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    precontext = precontext.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    state = state.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    question = question.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    question2 = question2.replace("BK",BK).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    question3 = question3.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    knowledge = knowledge.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);
    goal = goal.replace("BB",BB).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("SP",SP).replace("LS",LS).replace("LS",LS).replace("LS",LS);


    return [utterance, context, state, precontext, question, question2, question3, knowledge, goal];
}

var numConditions = allConditions.length;
var chooseCondition = random(0, numConditions-1);
var allTrialOrders = allConditions[chooseCondition];
var numTrials = allTrialOrders.length;
var shuffledOrder = shuffledSampleArray(allTrialOrders.length, numTrials);
var currentTrialNum = 0;
var trial;
var numComplete = 0;
var buyer;

function composeArray () {
  var scenes = [];
  while (scenes.length < 15) {
    currentTrialNum = numComplete;
    console.log(numComplete);
    trial = allTrialOrders[shuffledOrder[numComplete]];
    console.log(trial);
    utterance = trial.utterance;
    state = trial.state;
    domain = trial.domain;
    context = trial.context;
    people = trial.people;
    goal = trial.goal;
    console.log(domain);
    sent_materials = doSentSubs(sents, state, domain, utterance, people, goal);
    sent_materials.push(domain);
    sent_materials.push(goal);
    sent_materials.push(utterance);
    console.log(sent_materials);
    //context = sent_materials[3] + sent_materials[7] + sent_materials[1] + sent_materials[8] + sent_materials[0];
    //console.log(context);
    //console.log(sent_materials[5]);
    //$("#context").html(sent_materials[3] + sent_materials[7] + sent_materials[1] + sent_materials[8] + sent_materials[0]);
    //$("#question").html(sent_materials[5]);
    scenes.push(sent_materials);
    numComplete++;
  }
  return scenes;
}
