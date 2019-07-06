# This is the code for data analysis of the "Talking with tact" replication study. 

#Load all the necessary libraries

library(tidyverse)
library(brms)
library(rstan)
# set cores to use to the total number of cores (minimally 4)
options(mc.cores = max(parallel::detectCores(), 4))
# save a compiled version of the Stan model file
rstan_options(auto_write = TRUE)
library(faintr)
# set a seed for random number generator
set.seed(123)

#First, the data is read from a csv-file.
d <- read.csv("results.csv", header=T, sep=",")
d1 <- read.csv("results (1).csv")
d2 <- read.csv("results (2).csv")
d3 <- read.csv("results (3).csv")
d <- rbind(d, d1)
d <- rbind(d, d2)
d <- rbind(d, d3)

#Take a first look at the data. 

glimpse(d)

#Select the data of interest: certain columns. Set the data types. Look at the data frame. 
# We *do not* need all the additional info like age etc. 
#We *need*: native languages, goal, utterance, *rating*(=inferred state), submission ID, item (domain), time spent (for removing outliers)  

d <- select(d, c(trial_number, domain, goal, utterance, inferred_goal_state, languages, timeSpent))
# set data types: RT is int, goal & utterance should be factors
# utterance is a predictor which is scaled orinally! 
# factor utterance assigns the ordered levels to the different utterances 
d <- mutate(d, goal = factor(goal), utterance = factor(utterance, levels=c("furchtbar", "schlecht", "okay", "gut", "hervorragend"), ordered=T), inferred_state = inferred_goal_state)
d<- mutate(d, inferred_state = factor(inferred_state, levels=c("1", "2", "3", "4", "5"), ordered=T))
View(d)

# Remove outliers: exclude participants where German was not a native language, and time spent was too long (30 minutes total)
d <- filter(d, timeSpent <= 30)
#exclude non-native speakers
d <- filter(d, grepl("Deutsch", languages, ignore.case = T ))
View(d)

#Show means for each design cell: goal x utterance. 
library(Rmisc)
library(FSA)
# calculate the means of the inferred states dependent on goal and utterance 
# this is used because it gives us the 95% confidence interval as plotted in the original paper 

summ = Summarize(inferred_goal_state ~ utterance+goal+utterance*goal, data=d)
ggplot(summ, aes(x=utterance, y=median, color=goal))+geom_errorbar(aes(ymin=Q1, ymax=Q3), size=0.7, position=position_dodge(.2))+geom_point(shape=15, size=4, position=position_dodge(.2))

#Fit the model: bayesian model with monotonic effects

model1_1 <-brm(inferred_state~utterance+goal+utterance*goal, data=d, family=cumulative("probit"), control = list(max_treedepth = 12))
summary(model1_1, prob=.95)

marginal_effects(model1_1, "utterance", categorical=T)

# Check hypotheses:
#Draw posterior samples
# Inferred states for honest condition are higher than inferred states for nice condition for positive utterances
# Inferred states for nice condition are higher than inferred states for mean consition for positive utterances
# Inferred states for honest and nice conditions are equal for negative utterances
# Inferred states for mean condition are higher than for honest condition for negative utterances 

# posterior samples
post_samples <- posterior_samples(model1_1)%>% as_tibble

post_ehrlich_hervor <- post_samples$`b_Intercept[4]`+post_samples$b_utteranceE4
post_nett_hervor <- post_samples$`b_Intercept[4]`+post_samples$`b_utteranceE4:goalnett`+post_samples$b_goalnett
post_gemein_hervor <- post_samples$`b_Intercept[4]` + post_samples$b_goalgemein + post_samples$`b_utteranceE4:goalgemein`
post_ehrlich_schr <- post_samples$`b_Intercept[1]`+post_samples$b_utterance.L
post_nett_schr <- post_samples$`b_Intercept[1]` + post_samples$b_goalnett + post_samples$`b_utterance.L:goalnett`
post_gemein_schr <- post_samples$`b_Intercept[1]`+post_samples$b_goalgemein+post_samples$`b_utterance.L:goalgemein`

mean(mean(post_ehrlich_hervor)>mean(post_nett_hervor))
mean(mean(post_nett_hervor)>mean(post_gemein_hervor))
mean(mean(post_ehrlich_schr)==mean(post_nett_schr))
mean(mean(post_ehrlich_schr)<mean(post_gemein_schr))

#Fit a model with random by-item efects
#Check same hypotheses 

model2 <- brm(inferred_state ~ utterance+goal+utterance*goal+(1|domain), d, family=cumulative("probit"))
summary(model2)

# check same hypotheses
post_samples2 <- posterior_samples(model2)%>% as_tibble

post_ehrlich_hervor2 <- post_samples2$`b_Intercept[4]`+post_samples2$b_utteranceE4
post_nett_hervor2 <- post_samples2$`b_Intercept[4]`+post_samples2$`b_utteranceE4:goalnett`+post_samples2$b_goalnett
post_gemein_hervor2 <- post_samples2$`b_Intercept[4]` + post_samples2$b_goalgemein + post_samples2$`b_utteranceE4:goalgemein`
post_ehrlich_schr2 <- post_samples2$`b_Intercept[1]`+post_samples2$b_utterance.L
post_nett_schr2 <- post_samples2$`b_Intercept[1]` + post_samples2$b_goalnett + post_samples2$`b_utterance.L:goalnett`
post_gemein_schr2 <- post_samples2$`b_Intercept[1]`+post_samples2$b_goalgemein+post_samples2$`b_utterance.L:goalgemein`

mean(mean(post_ehrlich_hervor2)>mean(post_nett_hervor2))
mean(mean(post_nett_hervor2)>mean(post_gemein_hervor2))
mean(mean(post_ehrlich_schr2)==mean(post_nett_schr2))
mean(mean(post_ehrlich_schr2)<mean(post_gemein_schr2))

loo(model1_1, model2)