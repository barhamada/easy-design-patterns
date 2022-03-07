## Design Patterns with Typescript

 - [Introduction](#introduction)
 - [Creational Design Patterns](#creational-design-patterns)
		- [Singleton Pattern](#singleton-pattern)
		- [Factory Pattern](#factory-pattern)
		- [Abstract Factory Pattern](#abstract-factory-pattern)
		- [Prototype Pattern](#prototype-pattern)
		- [Builder Pattern](#builder-pattern)
 - [Structural Design Patterns](#structural-design-patterns)
		 - [Adapter Pattern](#adapter-pattern) 
		 - [Composite Pattern](#composite-pattern) 
		 - [Bridge Pattern](#bridge-pattern) 
		 - [Decorator Pattern](#decorator-pattern) 
		 - [Facade Pattern](#facade-pattern) 
		 - [Flyweight Pattern](#flyweight-pattern) 
		 - [Proxy Pattern](#proxy-pattern) 
 - [Behavioral Design Patterns](#behavioral-design-patterns)
		 - [Command Pattern](#command-pattern)
		 - [Interpreter Pattern](#interpreter-pattern)
		 - [Iterator Pattern](#iterator-pattern)
		 - [Mediator Pattern](#mediator-pattern)
		 - [Memento Pattern](#memento-pattern)
		 - [Observer Pattern](#observer-pattern)
		 - [State Pattern](#state-pattern)
		 - [Strategy Pattern](#strategy-pattern)
		 - [Template Pattern](#template-pattern)
		 - [Visitor Pattern](#visitor-pattern)
		 - [NullObject Pattern](#nullobject-pattern)


## Introduction
Almost all examples are from [tutorialspoint](https://www.tutorialspoint.com/design_pattern/index.htm). I only converted them from Java to Typescript.

**Dependencies**:

 - [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
 - [typescript](https://www.npmjs.com/package/typescript)
 
 **Notice**:
 all these scripts was executed with:
 
 - windows 10 Pro
 - Node.js v14.17.3
 - Npm 6.14.13
---------
Design patterns represent the best practices used by experienced object-oriented software developers. Design patterns are solutions to general problems that software developers faced during software development. These solutions were obtained by trial and error by numerous software developers over quite a substantial period of time.

## Creational Design Patterns
Creational design patterns are concerned with **the way of creating objects.** These design patterns are used when a decision must be made at the time of instantiation of a class (i.e. creating an object of a class).

### **Singleton Pattern**
This pattern involves a single class which is responsible to create an object while making sure that only single object gets created. This class provides a way to access its only object which can be accessed directly without need to instantiate the object of the class.

Command:

    npm run Singleton

### **Factory Pattern**
In Factory pattern, we create object without exposing the creation logic to the client and refer to newly created object using a common interface.

**Implementation**
We're going to create a  _Shape_  interface and concrete classes implementing the  _Shape_  interface. A factory class  _ShapeFactory_  is defined as a next step.
Our entry point will use  _ShapeFactory_  to get a  _Shape_  object. It will pass information (_CIRCLE / RECTANGLE / SQUARE_) to  _ShapeFactory_  to get the type of object it needs.

Command:

    npm run Factory

### **Abstract Factory Pattern**
In Abstract Factory pattern an interface is responsible for creating a factory of related objects without explicitly specifying their classes. Each generated factory can give the objects as per the Factory pattern.

**Implementation**
We are going to create a Shape interface and a concrete class implementing it. We create an abstract factory class AbstractFactory as next step. Factory class ShapeFactory is defined, which extends AbstractFactory. A factory creator/generator class FactoryProducer is created.

Our entry poiny uses FactoryProducer to get a AbstractFactory object. It will pass information (CIRCLE / RECTANGLE / SQUARE for Shape) to AbstractFactory to get the type of object it needs.

Command:

    npm run AbstractFactory

### **Prototype Pattern**
This pattern involves implementing a prototype interface which tells to create a clone of the current object. This pattern is used when creation of object directly is costly. For example, an object is to be created after a costly database operation. We can cache the object, returns its clone on next request and update the database as and when needed thus reducing database calls.

**Implementation**
We're going to create an abstract class  _Shape_  and concrete classes extending the  _Shape_  class. A class  _ShapeCache_  is defined as a next step which stores shape objects in a  _Hashtable_  and returns their clone when requested.
Our entry point will use _ShapeCache_ class to get a _Shape_ object.

Command:

    npm run Prototype

### **Builder Pattern**

Builder pattern builds a complex object using simple objects and using a step by step approach. This type of design pattern comes under creational pattern as this pattern provides one of the best ways to create an object.
A Builder class builds the final object step by step. This builder is independent of other objects.

**Implementation**

We are going to create a concrete class _User_ .
Our entry point will use UserBuilder to build a user step by step

Command:

    npm run Builder

## Structural Design Patterns
**Structural design patterns**  are concerned with how classes and objects can be composed, to form larger structures.
The structural design patterns  **simplifies the structure by identifying the relationships**.
These patterns focus on, how the classes inherit from each other and how they are composed from other classes.

### **Adapter Pattern**
Adapter pattern works as a bridge between two incompatible interfaces. This type of design pattern comes under structural pattern as this pattern combines the capability of two independent interfaces.
This pattern involves a single class which is responsible to join functionalities of independent or incompatible interfaces. A real life example could be a case of card reader which acts as an adapter between memory card and a laptop. You plugin the memory card into card reader and card reader into the laptop so that memory card can be read via laptop.
We are demonstrating use of Adapter pattern via following example in which an audio player device can play mp3 files only and wants to use an advanced audio player capable of playing vlc and mp4 files.

**Implementation**
We have a  _MediaPlayer_  interface and a concrete class  _AudioPlayer_  implementing the  _MediaPlayer_  interface.  _AudioPlayer_  can play mp3 format audio files by default.
We are having another interface  _AdvancedMediaPlayer_  and concrete classes implementing the  _AdvancedMediaPlayer_  interface. These classes can play vlc and mp4 format files.
We want to make  _AudioPlayer_  to play other formats as well. To attain this, we have created an adapter class  _MediaAdapter_  which implements the  _MediaPlayer_  interface and uses  _AdvancedMediaPlayer_  objects to play the required format.
_AudioPlayer_  uses the adapter class  _MediaAdapter_  passing it the desired audio type without knowing the actual class which can play the desired format. 
Our entry point will use  _AudioPlayer_  class to play various formats.

Command:

    npm run Adapter

### **Composite Pattern**
This pattern creates a class that contains group of its own objects. This class provides ways to modify its group of same objects.
We are demonstrating use of composite pattern via following example in which we will show employees hierarchy of an organization.

**Implementation**
We have a class  _Employee_  which acts as composite pattern actor class. 
Our entry point will use  _Employee_  class to add department level hierarchy and print all employees.

Command:

    npm run Composite

### **Bridge Pattern**

This pattern involves an interface which acts as a bridge which makes the functionality of concrete classes independent from interface implementer classes. Both types of classes can be altered structurally without affecting each other.
We are demonstrating use of Bridge pattern via following example in which a circle can be drawn in different colors using same abstract class method but different bridge implementer classes.

**Implementation**
We have a  _DrawAPI_  interface which is acting as a bridge implementer and concrete classes  _RedCircle_,  _GreenCircle_  implementing the  _DrawAPI_  interface.  _Shape_  is an abstract class and will use object of  _DrawAPI_.  
Our entry point will use  _Shape_  class to draw different colored circle.

Command:

    npm run Bridge

### **Decorator Pattern**
This pattern creates a decorator class which wraps the original class and provides additional functionality keeping class methods signature intact.
We are demonstrating the use of decorator pattern via following example in which we will decorate a shape with some color without alter shape class.

**Implementation**
We're going to create a  _Shape_  interface and concrete classes implementing the  _Shape_  interface. We will then create an abstract decorator class  _ShapeDecorator_  implementing the  _Shape_  interface and having  _Shape_  object as its instance variable.
_RedShapeDecorator_  is concrete class implementing  _ShapeDecorator_.
Our entry point will use  _RedShapeDecorator_  to decorate  _Shape_  objects.

Command:

    npm run Decorator

### **Facade Pattern**
Facade pattern hides the complexities of the system and provides an interface to the client using which the client can access the system. This type of design pattern comes under structural pattern as this pattern adds an interface to existing system to hide its complexities.

This pattern involves a single class which provides simplified methods required by client and delegates calls to methods of existing system classes.

**Implementation**
We are going to create a  _Shape_  interface and concrete classes implementing the  _Shape_  interface. A facade class  _ShapeMaker_  is defined as a next step.
_ShapeMaker_  class uses the concrete classes to delegate user calls to these classes.
Our entry point will use  _ShapeMaker_  class to show the results.

Command:

    npm run Facade

### **Flyweight Pattern**
Flyweight pattern tries to reuse already existing similar kind objects by storing them and creates new object when no matching object is found. We will demonstrate this pattern by drawing 20 circles of different locations but we will create only 5 objects. Only 5 colors are available so color property is used to check already existing  _Circle_  objects.

**Implementation**
We are going to create a  _Shape_  interface and concrete class  _Circle_  implementing the  _Shape_  interface. A factory class  _ShapeFactory_  is defined as a next step.
_ShapeFactory_  has a  _HashMap_  of  _Circle_  having key as color of the  _Circle_  object. Whenever a request comes to create a circle of particular color to  _ShapeFactory_, it checks the circle object in its  _HashMap_, if object of  _Circle_  found, that object is returned otherwise a new object is created, stored in hashmap for future use, and returned to client.
Our entry point will use  _ShapeFactory_  to get a  _Shape_  object. It will pass information (_red / green / blue/ black / white_) to  _ShapeFactory_  to get the circle of desired color it needs.

Command:

    npm run Flyweight

### **Proxy Pattern**
In proxy pattern, a class represents functionality of another class. This type of design pattern comes under structural pattern.
In proxy pattern, we create object having original object to interface its functionality to outer world.

**Implementation**
We are going to create an  _Image_  interface and concrete classes implementing the  _Image_  interface.  _ProxyImage_  is a a proxy class to reduce memory footprint of  _RealImage_  object loading.
Our entry point will use  _ProxyImage_  to get an  _Image_  object to load and display as it needs.

Command:

    npm run Proxy

## Behavioral Design Patterns

Behavioral design patterns are concerned with  **the interaction and responsibility of objects.**
In these design patterns,  **the interaction between the objects should be in such a way that they can easily talk to each other and still should be loosely coupled.**
That means the implementation and the client should be loosely coupled in order to avoid hard coding and dependencies.

### **Command Pattern**
Command pattern is a data driven design pattern and falls under behavioral pattern category. A request is wrapped under an object as command and passed to invoker object. Invoker object looks for the appropriate object which can handle this command and passes the command to the corresponding object which executes the command.

**Implementation**
We have created an interface  _Order_  which is acting as a command. We have created a  _Stock_  class which acts as a request. We have concrete command classes  _BuyStock_  and  _SellStock_  implementing  _Order_  interface which will do actual command processing. A class  _Broker_  is created which acts as an invoker object. It can take and place orders.
_Broker_  object uses command pattern to identify which object will execute which command based on the type of command.
Our entry point will use  _Broker_  class to demonstrate command pattern.

Command:

    npm run Command

### **Interpreter Pattern**
Interpreter pattern provides a way to evaluate language grammar or expression. This type of pattern comes under behavioral pattern. This pattern involves implementing an expression interface which tells to interpret a particular context. This pattern is used in SQL parsing, symbol processing engine etc.

**Implementation**
We are going to create an interface  _Expression_  and concrete classes implementing the  _Expression_  interface. A class  _TerminalExpression_  is defined which acts as a main interpreter of context in question. Other classes  _OrExpression_,  _AndExpression_  are used to create combinational expressions.
Our entry point will use  _Expression_  class to create rules and demonstrate parsing of expressions.

Command:

    npm run Interpreter

### **Iterator Pattern**
This pattern is used to get a way to access the elements of a collection object in sequential manner without any need to know its underlying representation.
Iterator pattern falls under behavioral pattern category.

**Implementation**
We're going to create a  _Iterator_  interface which narrates navigation method and a  _Container_  interface which retruns the iterator . Concrete classes implementing the  _Container_  interface will be responsible to implement  _Iterator_  interface and use it
Our entry point will use  _NamesRepository_, a concrete class implementation to print a  _Names_  stored as a collection in  _NamesRepository_.

Command:

    npm run Iterator

### **Mediator Pattern**
Mediator pattern is used to reduce communication complexity between multiple objects or classes. This pattern provides a mediator class which normally handles all the communications between different classes and supports easy maintenance of the code by loose coupling. Mediator pattern falls under behavioral pattern category.

**Implementation**
We are demonstrating mediator pattern by example of a chat room where multiple users can send message to chat room and it is the responsibility of chat room to show the messages to all users. We have created two classes  _ChatRoom_  and  _User_.  _User_  objects will use  _ChatRoom_  method to share their messages.
Our entry will use  _User_  objects to show communication between them.

Command:

    npm run Mediator

### **Memento Pattern**
Memento pattern is used to restore state of an object to a previous state. Memento pattern falls under behavioral pattern category.

**Implementation**
Memento pattern uses three actor classes. Memento contains state of an object to be restored. Originator creates and stores states in Memento objects and Caretaker object is responsible to restore object state from Memento. We have created classes  _Memento_,  _Originator_  and  _CareTaker_.
Our entry point will use  _CareTaker_  and  _Originator_  objects to show restoration of object states.

Command:

    npm run Memento

### **Observer Pattern**
Observer pattern is used when there is one-to-many relationship between objects such as if one object is modified, its depenedent objects are to be notified automatically. Observer pattern falls under behavioral pattern category.

**Implementation**
Observer pattern uses three actor classes. Subject, Observer and Client. Subject is an object having methods to attach and detach observers to a client object. We have created an abstract class  _Observer_  and a concrete class  _Subject_  that is extending class  _Observer_.
Our entry point will use  _Subject_  and concrete class object to show observer pattern in action.

Command:

    npm run Observer

### **State Pattern**
In State pattern a class behavior changes based on its state. This type of design pattern comes under behavior pattern.
In State pattern, we create objects which represent various states and a context object whose behavior varies as its state object changes.

**Implementation**
We are going to create a  _State_  interface defining an action and concrete state classes implementing the  _State_  interface.  _Context_  is a class which carries a State.
Our entry point will use  _Context_  and state objects to demonstrate change in Context behavior based on type of state it is in.

Command:

    npm run State

### **Strategy Pattern**
In Strategy pattern, a class behavior or its algorithm can be changed at run time. This type of design pattern comes under behavior pattern.
In Strategy pattern, we create objects which represent various strategies and a context object whose behavior varies as per its strategy object. The strategy object changes the executing algorithm of the context object.

**Implementation**
We are going to create a  _Strategy_  interface defining an action and concrete strategy classes implementing the  _Strategy_  interface.  _Context_  is a class which uses a Strategy.
Our entry point will use  _Context_  and strategy objects to demonstrate change in Context behaviour based on strategy it deploys or uses.

Command:

    npm run Strategy

### **Template Pattern**
In Template pattern, an abstract class exposes defined way(s)/template(s) to execute its methods. Its subclasses can override the method implementation as per need but the invocation is to be in the same way as defined by an abstract class. This pattern comes under behavior pattern category.

**Implementation**
We are going to create a  _Game_  abstract class defining operations with a template method set to be final so that it cannot be overridden.  _Cricket_  and  _Football_  are concrete classes that extend  _Game_  and override its methods.
Our entry point will use  _Game_  to demonstrate use of template pattern.

Command:

    npm run Template

### **Visitor Pattern**
In Visitor pattern, we use a visitor class which changes the executing algorithm of an element class. By this way, execution algorithm of element can vary as and when visitor varies. This pattern comes under behavior pattern category. As per the pattern, element object has to accept the visitor object so that visitor object handles the operation on the element object.

**Implementation**
We are going to create a  _ComputerPart_  interface defining accept opearation._Keyboard_,  _Mouse_,  _Monitor_  and  _Computer_  are concrete classes implementing  _ComputerPart_  interface. We will define another interface  _ComputerPartVisitor_  which will define a visitor class operations.  _Computer_  uses concrete visitor to do corresponding action.
Our entry point will use  _Computer_  and  _ComputerPartVisitor_  classes to demonstrate use of visitor pattern.

Command:

    npm run Visitor

### **NullObject Pattern**

In Null Object pattern, a null object replaces check of NULL object instance. Instead of putting if check for a null value, Null Object reflects a do nothing relationship. Such Null object can also be used to provide default behaviour in case data is not available.
In Null Object pattern, we create an abstract class specifying various operations to be done, concrete classes extending this class and a null object class providing do nothing implemention of this class and will be used seemlessly where we need to check null value.

**Implementation**
We are going to create a  _AbstractCustomer_  abstract class defining opearations. Here the name of the customer and concrete classes extending the  _AbstractCustomer_  class. A factory class  _CustomerFactory_  is created to return either  _RealCustomer_  or  _NullCustomer_  objects based on the name of customer passed to it.

Our entry point will use  _CustomerFactory_  to demonstrate the use of Null Object pattern.

Command:

    npm run NullObject

----

**Feel free to contact me**:
amadoubeye1988@gmail.com