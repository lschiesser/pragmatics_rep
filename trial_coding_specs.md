# Specifications for coding of the trials

In the showroom files there already are two custom views defined.
Here is a code snippet from this that is concerned with recording the trial data
```javascript
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id
                };

```
Trial data which should be recorded during the trial:

Variable name | Description | Value
---|---|---
trial name | Name of trial | e.g. "pragmatics"
trial number | Number of trial | numerical
goal | goal of speaker | gemein, ehrlich, nett
utterance | utterance of speaker | furchtbar, schlecht, okay, gut, hervorragend
inferred goal state | goal state  inferred by participant | 1, 2, 3, 4, 5

```javascript
                let trial_data = {
                  trial_number: config.name,
                  trial_number: CT,
                  goal: ,
                  utterance: ,
                  inferred_goal_state: ,
                  RT: 
                }
```
