# A Data-Driven Approach to Formula One Race Outcome Prediction
## Spring 2025 Data Science Project
**Sathya Selvam, Daniel Valencia, Aidan Buergin, Qiyu An**

Formula 1 is one of the most advanced and fast-paced motorsports in the world, combining driver skill, engineering, and strategy. Each race produces a large amount of data, including qualifying times, pit stop durations, and final race positions. With so many variables influencing the outcome, we were interested in exploring whether machine learning could help us predict the finishing positions of drivers based on pre-race information.

In this project, our goal is to compare different supervised regression models to see how accurately they can predict a driver's final position in a race. Some of the features we consider include qualifying position, constructor (team), and other race-related information. We test a variety of models, from linear regression to more advanced techniques like random forests and gradient-boosted trees.

Throughout this tutorial, we follow the full data science process: from cleaning and organizing the data, to training models and analyzing results. By the end, we hope to identify which regression approach gives us the most accurate predictions and gain insights into which features most strongly influence race outcomes.

In our data, we have 14 .csv files, all with unique categories from which we can draw different conclusions. Some of these files include driver information, team/constructor information, circuits, pit stop information, and qualifying information. Almost all .csv files share a column called “driverId” and a column called “raceId”. These categories being shared among the files allow us to utilize separate .csv files for analyses, linking together rows in separate files with the same driverId or raceId value. Another intriguing feature of the data is that some of the rows have NA values for certain categories. These especially include time in milliseconds for datasets like pit stop times and race finish times. For past races in which they did not have the technology to record this information, the columns remain as NA.
