This is a demonstration of a simple, typical OOP class inheritance structure that has a parent and a child.

There's lots of advantages to class inheritance, for example:

- One would expect a youth ministry to behave quite differntly from an adult ministry. By making them both children of a parent "ministry" class, they can be related but have entirely separate behavior. This means I can change the behavior of the youth ministry class without having to mess with every other related class.  
- It keeps us from having to re-write shared behavior over and over. I can expect both the youth and adult ministry to have a "Schedule meetup" behavior, so I can put that in the parent "Ministry" class and be done with it. This is great for scale and to DRY up the code.

-With inherited behavior, we can keep the classes under the single responsibility principle more easily. I can change code with without worrying about breaking a ton of dependencies.

We can see the limitations of class inheritance, though, when we call youthMinistry.startMinistry();  because, they're kids and don't really need extra resources like childcare. We have to put some kind of "null" placeholder in for the needed resources attribute. This can lead to some mistakes, and we can't use one of the parent's methods in a way that makes sense as a result without having to write extra code. 
