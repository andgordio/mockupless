# Booleans as conditions

A variable of [string data type](./../Data/variables.html#strings) is a good place to store a state. String values are usually clear and allow for infinite amount of options. Yet some states are binary: is user authenticated? Did they upload a profile image? Is data being uploaded to server? Strings can handle these states too, but [Booleans](./../Data/variables.html#boolean) could be a better fit for the job.

Imagine you want to add authentication screen to your prototype. You want it to be shown when the user is not logged in... and here I come to realization that NOT is required for this article