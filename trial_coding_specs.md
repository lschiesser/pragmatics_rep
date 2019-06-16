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
- trial name
- trial number
- inferred goal state
- true goal state

```javascript
                let trial_data = {
                  trial_number: config.name,
                  trial_number: CT,
                  response: 
                }
```
