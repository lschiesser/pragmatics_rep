// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    title: 'Willkommen',
    text:   `Liebe Teilnehmer,
    <br>
    Vielen Dank für Ihr Interesse an unserem Experiment. Diesen Versuch führen wir im Rahmen des Kurses "Experimental Psychology Lab" an der Universität Osnabrück durch. Hierbei geht es um die <b>Einschätzung verschiedener Szenarien zwischen zwei Gesprächspartnern</b>.
    <br>
    <br>
    Durch das Klicken des "Experiment beginnen" Button erklären Sie sich bereit, freiwillig an unserem Experiment teilzunehmen. Sie können den Versuch jederzeit und ohne Angaben von Gründen abbrechen.
    Die gesammelten Daten werden nur zu <b>wissenschaftlichen Forschungszwecken</b> gesammelt und <b>anonym</b> behandelt.
    <br>
    <br>
    Die Bearbeitung des Experiments dauert ungefähr <b>15 Minuten</b>. Bitte lesen Sie sich die Aufgaben genau durch. Klicken Sie auf den "Experiment beginnen" Button, um zur Experimentbeschreibung zu gelangen.
    <br>
    <br>
    Wir bedanken uns für Ihre Teilnahme.
    <br>
    Bei Fragen kontaktieren Sie uns bitte unter ptsvilodub@uos.de. `,
   buttonText: 'Experiment beginnen'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instrucions',
    title: 'Experimentbeschreibung',
    text:  `In diesem Experiment werden Ihnen verschiedene hypothetische <b>Szenarien/Gespräche</b> zwischen zwei Personen beschrieben. Ihre Aufgabe wird es sein die <b>Aussagen</b> der Gesprächspartner zu <b>bewerten</b>. In den Szenarien wird beschrieben was die Personen gemacht oder gesagt haben und eine <b>mögliche Interpretation</b> dieses Gesprächs wird Ihnen angeboten. Sie werden dann gebeten zu entscheiden, wie wahrscheinlich es ist, dass diese Interpretation <b>wahr</b> ist.
    <br>
    <br>
    Bitte klicken Sie auf "Weiter", um das Experiment zu beginnen.`,
    buttonText: 'Weiter'
});
// Sie werden gebeten zu entscheiden, die Interpretationen zu evaluieren. Dabei befindet sich auf der Bewertungsskala bei 1 die schlechteste, bei 5 die betste Bewertung. 


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'post_test',
    title: 'Weitere Informationen',
    text: 'Bitte beantworten Sie die folgenden Fragen. Die Beantwortung ist optional, hilft aber bei der Analyse der Ergebnisse',

    //You can change much of what appears here, e.g., to present it in a different language, as follows:
    buttonText: 'Weiter',
    age_question: 'Alter',
    gender_question: 'Geschlecht',
    gender_male: 'männlich',
    gender_female: 'weiblich',
    gender_other: 'divers',
    edu_question: 'Höchster Bildungsabschluss',
    edu_graduated_hauptschule: 'Hauptschulabschluss',
    edu_graduated_realschule: 'Mittlere Reife',
    edu_graduated_high_school: 'Abitur',
    edu_graduated_college: 'Hochschulabschluss',
    edu_higher_degree: 'Universitärer Abschluss',
    languages_question: 'Muttersprache',
    languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Vielen Dank für Ihre Teilnahme!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#trial-views
*/

const scenes = composeArray();
// Here, we initialize a normal forced_choice view
const pragmatics_1 = custom_pragmatics({
  name: 'pragmatics',
  trials: 15,
  data: [
    {
      context: scenes[0][3] + scenes[0][7] + scenes[0][1] + scenes[0][8] + scenes[0][0],
      question: scenes[0][5],
      goal: scenes[0][10],
      utterance: scenes[0][11],
      domain: scenes[0][9]
    },
    {
      context: scenes[1][3] + scenes[1][7] + scenes[1][1] + scenes[1][8] + scenes[1][0],
      question: scenes[1][5],
      goal: scenes[1][10],
      utterance: scenes[1][11],
      domain: scenes[1][9]
    },
    {
      context: scenes[2][3] + scenes[2][7] + scenes[2][1] + scenes[2][8] + scenes[2][0],
      question: scenes[2][5],
      goal: scenes[2][10],
      utterance: scenes[2][11],
      domain: scenes[2][9]
    },
    {
      context: scenes[3][3] + scenes[3][7] + scenes[3][1] + scenes[3][8] + scenes[3][0],
      question: scenes[3][5],
      goal: scenes[3][10],
      utterance: scenes[3][11],
      domain: scenes[3][9]
    },
    {
      context: scenes[4][3] + scenes[4][7] + scenes[4][1] + scenes[4][8] + scenes[4][0],
      question: scenes[4][5],
      goal: scenes[4][10],
      utterance: scenes[4][11],
      domain: scenes[4][9]
    },
    {
      context: scenes[5][3] + scenes[5][7] + scenes[5][1] + scenes[5][8] + scenes[5][0],
      question: scenes[5][5],
      goal: scenes[5][10],
      utterance: scenes[5][11],
      domain: scenes[5][9]
    },
    {
      context: scenes[6][3] + scenes[6][7] + scenes[6][1] + scenes[6][8] + scenes[6][0],
      question: scenes[6][5],
      goal: scenes[6][10],
      utterance: scenes[6][11],
      domain: scenes[6][9]
    },
    {
      context: scenes[7][3] + scenes[7][7] + scenes[7][1] + scenes[7][8] + scenes[7][0],
      question: scenes[7][5],
      goal: scenes[7][10],
      utterance: scenes[7][11],
      domain: scenes[7][9]
    },
    {
      context: scenes[8][3] + scenes[8][7] + scenes[8][1] + scenes[8][8] + scenes[8][0],
      question: scenes[8][5],
      goal: scenes[8][10],
      utterance: scenes[8][11],
      domain: scenes[8][9]
    },
    {
      context: scenes[9][3] + scenes[9][7] + scenes[9][1] + scenes[9][8] + scenes[9][0],
      question: scenes[9][5],
      goal: scenes[9][10],
      utterance: scenes[9][11],
      domain: scenes[9][9]
    },
    {
      context: scenes[10][3] + scenes[10][7] + scenes[10][1] + scenes[10][8] + scenes[10][0],
      question: scenes[10][5],
      goal: scenes[10][10],
      utterance: scenes[10][11],
      domain: scenes[10][9]
    },
    {
      context: scenes[11][3] + scenes[11][7] + scenes[11][1] + scenes[11][8] + scenes[11][0],
      question: scenes[11][5],
      goal: scenes[11][10],
      utterance: scenes[11][11],
      domain: scenes[11][9]
    },
    {
      context: scenes[12][3] + scenes[12][7] + scenes[12][1] + scenes[12][8] + scenes[12][0],
      question: scenes[12][5],
      goal: scenes[12][10],
      utterance: scenes[12][11],
      domain: scenes[12][9]
    },
    {
      context: scenes[13][3] + scenes[13][7] + scenes[13][1] + scenes[13][8] + scenes[13][0],
      question: scenes[13][5],
      goal: scenes[13][10],
      utterance: scenes[13][11],
      domain: scenes[13][9]
    },
    {
      context: scenes[14][3] + scenes[14][7] + scenes[14][1] + scenes[14][8] + scenes[14][0],
      question: scenes[14][5],
      goal: scenes[14][10],
      utterance: scenes[14][11],
      domain: scenes[14][9]
    }
  ]
})

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
