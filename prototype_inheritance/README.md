This is a different type of inheritance, that may be useful for creating many small objects, with many subtle differences between them. They do not inherent from a parent class, instead they pick and choose from pre-defined global constants that they have some of, but not all, in common with each other.

Although not class-based (aka no syntactic constructor sugar), it bears mentioning that this sort of object construction behaves somewhat like a family that would be similarly created with a parent/child class based inheritance.

In this example, I took attributes of a wide variety of ministries and stored them in constants as an object literal, with 1 representing they exist. New Objects are then created picking and choosing their associated attributes from the global constant variables to suit each particular object's needs, which eliminates the issue of inheriting *too much* from a parent class.

Then within each object, the data can be manipulated for each object's behavior.

Contrast this with the previous example of a youth ministry object being created inheriting from a parent ministry class, where we had to create a placeholder because of the parent's constructor method.
