# Background

- indicate the theoretical background of your study
    - politeness violates basic communicative maxims of quality, yet it is an omnipresent phenomenon in human communication  
    - the authors hypothesize that polite utterances result from a trade-off between informativity and social values.
    - original study was used to create and validate a model which predicts how communicative goals influence people's perception of utterances evaluating a performance
- why is this interesting? where are your research questions coming from
    - interested in cross-linguistic comparisons and studies
    - basis study to state inferences/influence of Du/Sie in German (politeness)
    - politeness: German has politeness markers like "Sie"
    - intuition: interpretation differs depending on the use of "du" or "Sie"
    - question: baseline study investigating the influence of the communicative goal on the interpretation of utterances without the influence of Du/Sie. Will we get the same results as the study in English, if we completely avoid using "du" and "Sie".

# Research questions

- formulate your research question in clear natural language
    - replication of the study: The participants infer the speakers' state of mind. Are the inferred states similar in German and in English?
- give them recognizable names if there are several or number them (like H1, H2 etc.)
- you will restate these research questions more clearly after you have specified the design (see below)
- Answer:

---|schrecklich|schlecht|okay|gut|hervorragend|Effect Goal
---|----------|------|------|---|-----|---
Ehrlich|inferred_ehr_schr|inferred_ehr_schl|inferred_ehr_ok|inferred_ehr_gut|inferred_ehr_herv|inferred_ehr
Nett|inferred_nett_schr|inferred_nett_schl|inferred_nett_ok|inferred_nett_gut|inferred_nett_herv|inferred_nett
Gemein|inferred_gem_schr|inferred_gem_schl|inferred_gem_ok|inferred_gem_gut|inferred_gem_herv|inferred_gem
Effect Utt|inferred_schr|inferred_schl|inferred_ok|inferred_gut|inferred_herv

1. hypothesis 1: positive utterances:
    - mean(nice_inferred) < mean (honest_inferred)
    - mean(nice_inferred) > mean(mean_inferred)
2. hypothesis 2: negative utterances:
    - mean(mean_inferred) > mean(honest_inferred)
    - mean(honest_inferred) = mean(nice_inferred)

# Design of the Experiment

## General remarks about the design

- what kind of a study is it (e.g., a 2x2 within-subjects factorial design)
    - rating study, between subject comparisons (3x5 factorial design)

## Sampling plan

- how many participants will you recruit, and how, where, when?
    - Answer: around 30, Coxi mailing list + course participants, after prereg report has been approved (end of june)
- any special restriction as to who qualifies?
    - Answer: native german speakers only

## Materials

- what materials will you be using? how where they produced
    - Answer: the original online experiment, star rating plugin, we translated the sentences ourselves
- you could include a link to the material if it is available online
    - Answer: https://www.jqueryscript.net/other/Simple-jQuery-Star-Rating-System-For-Bootstrap-3.html, langcog.stanford.edu/expts/EJY/polgrice/L2_S/polgrice_L2_S.html

## Procedure

- describe the experiment here pretty much like you would in a research article without space constraints
    - similar to the statement in the Mental Rotation Task description, but possibly already in full prose
- **Answer:**
- Instructions (as in the instructions view):
    - The participants are presented with written instructions on how the experiment will look like and what their task will be. Here they also state, that their participation is voluntary and they are informed how we will process the data. **Screenshot of scenario and rating scale?**
- Main test phase:
    - Trial sequence: The trials start with the presentation of the scenario and underneath the participant sees the rating scale consisting of 5 hearts. Participants are asked to rate a total of 15 scenarios using the heart rating scale. The scenarios, the goals, the names and the utterances are randomized.
- what is the structure of the experiment?
    - Answer: Introduction, main exp, feedback, thank you
- what types of trials are there (critical, filler, ...)?
    - Answer: only main experiment, rating trials
    - We decided not to include a practice phase, because it was also not part of the original study.
- how is each (type of) trial structured? (e.g., first fixation cross for 50ms, then ...)
    - Answer: question + answer via heart rating (1-5)

## Measured variables

- based on the design you described, what are the variables that you are going to measure?
- how will they be measured in the experiment?
    - variable: inferred state/rating of performance the speaker believes
    - Answer: via the heart rating scale
    - utterance
    - goal
- how will they be treated (e.g., rating scale data will be treated as an ordinal variable; or: XYZ is a factor with 2 levels (A and B) where A is the reference level in dummy coding)
    - goal is factor
    - utterance is an ordered factor (monotonic predictor)
    - rating/inferred state as int such that the mean can be calculated


# Analysis Plan

## Exclusion criteria

- what are the criteria based on which you would exclude data from the analysis
- for single trial data
    - Answer: took longer than 2 minutes
- for data from a whole participant
    - Answer: no native speaker
- ...

## Confirmatory hypothesis testing

- if applicable, describe any transformations that you might want to apply to the data
  - utterances are transformed into an ordered factor using mo()
- describe your statistical model
  - we will use the 'brms' package to run a Bayesian regression model regressing the inferred state against goal, utterance and their interactions
  - we will also try a model with random by-domain effects and compare the fit
  - we will consider the differences within the intervals between the utterance
- describe by what means you will test the hypotheses mentioned earlier
- when you do this you will want to reformulate the hypotheses in a more precise fashion
  - for positive utterances, if H1 is true, we expect the inferred state for honest utterances to be credibly higher that the inferred state for nice utterances in the posterior distribution
  - if H1 is true, we expect the inferred state for nice utterances to be credibly higher than the inferred state for mean utterances in the posterior distribution
  - for negative utterances: if H2 is true, we expect the inferred state for mean utterances to be credibly higher than the inferred state for honest utterances in the posterior distribution
  - if H2 is true, we expect with a credible probability that the inferred state for honest and mean utterances to be equal in the posterior distribution.
