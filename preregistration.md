# Background

- indicate the theoretical background of your study
- why is this interesting? where are your research questions coming from

# Research questions

- formulate your research question in clear natural language 
- give them recognizable names if there are several or number them (like H1, H2 etc.)
- you will restate these research questions more clearly after you have specified the design (see below)

# Design of the Experiment

## General remarks about the design

- what kind of a study is it (e.g., a 2x2 within-subjects factorial design)

## Sampling plan

- how many participants will you recruit, and how, where, when?
- Answer: 30, Coxi mailing list + course participants, after prereg report has been approved (end of july)
- any special restriction as to who qualifies?
- Answer: native german speakers only

## Materials

- what materials will you be using? how where they produced
- Answer: the original experiment, star rating plugin
- you could include a link to the material if it is available online
- Answer: https://www.jqueryscript.net/other/Simple-jQuery-Star-Rating-System-For-Bootstrap-3.html, http://langcog.stanford.edu/expts/EJY/polgrice/L2_S/

## Procedure

- describe the experiment here pretty much like you would in a research article without space constraints
    - similar to the statement in the Mental Rotation Task description, but possibly already in full prose
- what is the structure of the experiment?
- Answer: Introduction, main exp, feedback, thank you
- what types of trials are there (critical, filler, ...)?
- Answer: only main experiment
- how is each (type of) trial structured? (e.g., first fixation cross for 50ms, then ...)
- Answer: question + answer via heart rating (1-5)

## Measured variables

- based on the design you described, what are the variables that you are going to measure?
- how will they be measured in the experiment?
- Answer: via the heart rating scale
- how will they be treated (e.g., rating scale data will be treated as an ordinal variable; or: XYZ is a factor with 2 levels (A and B) where A is the reference level in dummy coding)


# Analysis Plan

## Exclusion criteria

- what are the criteria based on which you would exclude data from the analysis
- for single trial data
- Answer: took longer than XXX
- for data from a whole participant
- Answer: no native speaker, took longer than XXX
- ...

## Confirmatory hypothesis testing

- if applicable, describe any transformations that you might want to apply to the data
- describe your statistical model
  - e.g., we will use the 'brms' package to run a Bayesian regression model regressing XYZ against A, B and C and their interactions
- describe by what means you will test the hypotheses mentioned earlier
- when you do this you will want to reformulate the hypotheses in a more precise fashion
  - e.g., if H1 is true, we expect that parameter X is credibly bigger than zero in the posterior distribution



