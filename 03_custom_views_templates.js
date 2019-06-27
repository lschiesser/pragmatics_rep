// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the babe-object as input
// and has to call babe.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call babe.trial_data.push(trial_data) to save the trial information

const custom_pragmatics = function(config, startTime) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        // The render functions gets the babe object as well as the current trial in view counter as input
        render: function (CT, babe, startTime) {
            // Here, you can do whatever you want, eventually you should call babe.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with babe.trial_data.push(trial_data)

            // Normally, you want to display some kind of html, to do this you append your html to the main element
            // You could use one of our predefined html-templates, with (babe.)stimulus_container_generators["<view_name>"](config, CT)
            $("main").html(`<div class='babe-view'>
                <p id="context" class="block-text"></p>
                <p id = "question" class="block-text"></p>
                <div id="test" name= "star" align="center">
                    <input id="rating-system" type="number" class="rating"
                      min="0" max="5" step="1"
                      data-showCaption="true" showClear="false" hoverEnabled="false">
                    <button type="button" id="next" class='babe-view-button'>Weiter</button>
                </div>
                </div>`);
                var script = document.createElement('script');
                script.src = 'star-rating.js';
                document.head.appendChild(script);

            // This function will handle  the response
            const handle_click = function(startTime) {
              if (ValidateStar(document.star)) {
                console.log(printResult(document.star))
                const time_spent = Date.now() - startTime;
                // We will just save the response and continue to the next view
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT,
                    goal: config.data[CT].goal,
                    utterance: config.data[CT].utterance,
                    domain: config.data[CT].domain,
                    inferred_goal_state: printResult(document.star),
                    time_spent: time_spent
                };
                // Here, we save the trial_data
                babe.trial_data.push(trial_data);

                // Now, we will continue with the next view
                babe.findNextView();
              }
                // Often it makes sense to also save the config information:
                // trial_data = babeUtils.view.save_config_trial_data(config.data[CT], trial_data);


            };
            const ValidateStar = function(form) {
              var judgment = $(".rating-stars").attr("style");
              console.log("judgment: ", judgment);
              judgment = parseInt(judgment.replace(/[^\d.]/g, ''));
              console.log("judgment: ", judgment); //for debuggging
              if (judgment == 0) {
                //Else respondent didn't make a response
                  alert ( "Please answer this question." );
                  judgment = $(".rating-stars").attr("style");
                  judgment = parseInt(judgment.replace(/[^\d.]/g, ''));
                  return false;
              } else {
                    return true;
              }
            };
            const printResult = function(form) {
              var judgment = $(".rating-stars").attr("style");
              judgment = parseInt(judgment.replace(/[^\d.]/g, ''));
              return judgment/20;
            };

            // We will add the handle_click functions to both buttons
            $('#context').html(config.data[CT].context)
            $('#question').html(config.data[CT].question)
            $('#next').on("click", handle_click);

            // That's everything for this view
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};
