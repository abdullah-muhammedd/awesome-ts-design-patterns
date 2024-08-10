
# The Problem

- In the book we had a contract to create a new app for the Weather Station which is called **Weather-O-Rama**
- The task is as following
    - What the station do for us
        - It reads different weather data using its sensors (e.g. temperature , humidity, pressure )
        - Then it gives us a WheatherData object that we will work with it has the methods (getTempreature() , getHumidity() , getPreassure())
        - They also provide us with a method measurementsChanged() which will be called when the data is updated
        
        ![image.png](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2F19c8e70b-411a-4033-af5a-ec12f56a8b29%2Fimage.png?table=block&id=350d0573-4cef-45f2-bedf-28c924a8dd9e&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1630&userId=&cache=v2)
        
    - Our job is to implement
        - 3 Display screens classes (Current , Stats , Forecast) their data will be updated whenever we call the method measurementsChanged() ⇒ which we will implement too
        - The app must provide an API for the developers to add as many screens as they want
- What we know now
    - The WeatherData class has getter methods for three measurement values: temperature, humidity and barometric pressure.
    - The measurementsChanged() method is called any time new weather measurement data is available. (We don’t know or care how this method is called; we just know that it *is.)*
    - We need to implement three display elements that use the weather data: a *current conditions* display, a *statistics display* and a *forecast* display. These displays must be updated each time WeatherData has new measurements.
    - The system must be expandable—other developers can create new custom display elements and users can add or remove as many display elements as they want to the application. Currently, we know about only the initial *three* display types (current conditions, statistics and forecast)

### A misguided solution

- First our developers thought that they can just create the screens classes with some update() method, and call it inside the measurementsChanged() methods

```java
public class WeatherData {
	 // instance variable declarations
	 public void measurementsChanged() {
		 float temp = getTemperature();
		 float humidity = getHumidity();
		 float pressure = getPressure();
		 currentConditionsDisplay.update(temp, humidity, pressure);
		 statisticsDisplay.update(temp, humidity, pressure);
		 forecastDisplay.update(temp, humidity, pressure);
	 }
	 // other WeatherData methods here
}
```

### Why this is a bad idea?

1. We are coding to concrete implementations, not interfaces ⇒ Violating the design principle “Program to an interface not to an implementation”
2. For every new display element we need to alter code. 
3. We have no way to add (or remove) display elements at run time. That makes the code not extendable and this is a main requirement
4. We haven’t encapsulated the part that changes. So that will make us change the weather data class to change displays which is not a good thing to do it makes maintaining and updating the code a big nightmare.

# Observer Pattern


> 💡 We need the observer pattern when:
> - Use the Observer pattern when changes to the state of one object may require changing other objects, and the actual set of 
> - objects is unknown beforehand or changes dynamically.


> **From refactoring.guru :**
> 
> 
> **`Observer`** is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.
> 

> **From HFDP :**
> 
> 
> **`The Observer Pattern`** defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically
> 

# Components of Observer Pattern

![image.png](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2Fa78b366f-e9c3-4297-a518-d26eda70aa49%2Fimage.png?table=block&id=6546395c-12e1-47d6-b93a-c7d70ffbb3bd&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=960&userId=&cache=v2)

### **`Subject`**

The Subject is the core component in the Observer pattern, responsible for maintaining the state of interest and managing a list of Observers. It provides methods to attach (register) and detach (unregister) Observers, and it notifies all registered Observers when its state changes. The Subject may also include methods for getting and setting its state, triggering notifications whenever a change occurs.

### **`Observer`**

The Observer defines an interface for objects that wish to be notified of changes in the Subject's state. Observers register themselves with the Subject to receive updates, and they implement an `update` method that is called by the Subject whenever a change occurs. This allows Observers to react to changes in the Subject, such as by updating their own state or performing specific actions.

### **`ConcreteSubject`**

The ConcreteSubject is a specific implementation of the Subject that contains the actual state being observed. It implements the methods for managing and notifying Observers and typically provides getters and setters for its state. When the state changes, the ConcreteSubject triggers notifications to all registered Observers, ensuring they are aware of the new state.

### **`ConcreteObserver`**

The ConcreteObserver is a specific implementation of the Observer that reacts to updates from the Subject. It implements the `update` method, which is called whenever the Subject's state changes. The ConcreteObserver can use this method to synchronize its state with the Subject or perform other actions based on the new state, ensuring it remains consistent with the Subject.

### **`Communication Mechanism`**

The Communication Mechanism in the Observer pattern handles the interaction between the Subject and Observers, determining how state changes are propagated. It can follow a push model, where the Subject directly sends the updated state to Observers, or a pull model, where the Subject only notifies Observers of a change, and they must request the new state themselves. This mechanism ensures that Observers are informed of changes in a manner that suits the application's needs.

# The power of Loose Coupling

> 💡 **When two objects are loosely coupled, they can interact, but have very little knowledge of each other.**

- **The Observer Pattern provides an object design where subjects and observers are loosely coupled.**
- **Why?**
    - **The only thing the subject knows about an observer is that it implements a certain interface** (the Observer interface). It doesn’t need to know the concrete class of the observer, what it does, or anything else about it.
    - **We can add new observers at any time**. Because the only thing the subject depends on is a list of objects that implement the Observer interface, we can add new observers whenever we want. In fact, we can replace any observer at runtime with another observer and the subject will keep purring along. Likewise, we can remove observers at any time.
    - **We never need to modify the subject to add new types of observers**. Let’s say we have a new concrete class come along that needs to be an observer. We don’t need to make any changes to the subject to accommodate the new class type, all we have to do is implement the Observer interface in the new class and register as an observer. The subject doesn’t care; it will deliver notifications to any object that implements the Observer interface.
    - **We can reuse subjects or observers independently of each other**. If we have another use for a subject or an observer, we can easily reuse them because the two aren’t tightly coupled.
    - **Changes to either the subject or an observer will not affect the other**. Because the two are loosely coupled, we are free to make changes to either, as long as the objects still meet their obligations to implement the subject or observer interfaces.
    1. **Define Strategy Interface**: Create an interface that represents the sorting strategy.
    2. **Implement Concrete Strategies**: Implement different sorting strategies.


> 💡 **Loosely coupled designs allow us to build flexible OO systems that can handle change because they minimize the interdependency between objects.**

> 💡 ***The less your classes know about each other The lower maintenance overhead you have ⇒ I just Invented this Quote***

# **Fix Weather-O-Rama Design**

- So based on that we can redesign the app to be something like this

![image.png](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2F366680eb-49bb-4f0f-8462-4dcd2b28aa2f%2Fimage.png?table=block&id=427ab48a-7f98-4d66-b008-c72e53c3b07c&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1540&userId=&cache=v2)

- The book explained two modes to chose between when it comes to how the observers will get their states?

### **Push Model**

In the push model of the Observer pattern, the Subject sends the updated state or relevant data directly to all registered Observers when a change occurs. The Subject takes the initiative to push the new state or data to the Observers through their `update` method, regardless of whether the Observers need or want the entire state. This model provides immediate access to the updated information but can lead to inefficiencies if the Observers do not need all the data being pushed. And it will be bad if we constantly change our state itself 

### **Pull Model**

In the pull model of the Observer pattern, the Subject only notifies the Observers that a change has occurred, without sending any specific data. The Observers are responsible for pulling or retrieving the updated state or data from the Subject themselves. This model gives Observers more control, allowing them to request only the data they need, but it may introduce a slight delay as the Observers must actively fetch the updated state after receiving the notification.

# Relation with Publish/Subscriber Architectural pattern

The Observer pattern and the Publish-Subscribe (Pub/Sub) architectural pattern are both used to manage communication between components in a system, but they differ in scope and implementation.

### **Observer Pattern**

- **Scope**: Typically used within a single application or process.
- **Coupling**: Observers are directly linked to the Subject, meaning they must know about the Subject to subscribe to updates.
- **Notification**: The Subject notifies all Observers directly, either by pushing the updated state (push model) or signaling them to pull the updated state (pull model).
- **Communication**: Generally synchronous and occurs within the same memory space.

### **Publish-Subscribe Pattern**

- **Scope**: Designed for distributed systems, allowing communication across different processes, machines, or networks.
- **Decoupling**: Publishers and Subscribers are decoupled through a message broker or event bus, so they do not need to know about each other directly.
- **Notification**: Publishers send messages to a central broker, which distributes them to all Subscribers interested in the specific topic or event.
- **Communication**: Often asynchronous, with the broker handling message distribution, which can include queuing, persistence, and delivery guarantees.

# Observers Every where Feat.JavaScript

### **JavaScript UI and DOM**

1. **`Event Listeners`**: In the DOM, event listeners are a classic implementation of the Observer pattern. Elements (Subjects) can have multiple event listeners (Observers) attached to them. When an event occurs (e.g., `click`, `keydown`), all registered listeners are notified and executed.
2. **`MutationObserver`**: This API in the DOM allows you to observe changes to the DOM tree. The MutationObserver is the Observer that listens for changes (e.g., attributes, child elements) on a specified element (Subject) and reacts accordingly.

### **Node.js**

1. **`EventEmitter`**: In Node.js, the `EventEmitter` class implements the Observer pattern. Objects can emit events (Subjects) and listeners (Observers) can be attached to these events. When an event is emitted, all listeners are notified and executed.
2. **`Streams`**: Node.js streams are another example, where data chunks are the events. Listeners (Observers) are notified as new data becomes available in the stream (Subject).

### **React**

1. **`State Management with Hooks (useEffect)`**: The `useEffect` hook in React is an Observer that watches for changes in state or props (Subjects). When dependencies change, the `useEffect` hook is notified and executes the provided callback function.
2. **`Redux (State Management)`**: In Redux, the store is the Subject, and components that subscribe to the store are the Observers. When the state in the store changes, all subscribed components are notified and re-rendered.
3. **`Context API`**: React's Context API allows components to subscribe to a context and get notified when the context value changes. This is another example of the Observer pattern, where the context is the Subject, and consuming components are the Observers.
4. **`Component Lifecycle Methods`**: React class components' lifecycle methods, such as `componentDidMount` and `componentDidUpdate`, act as Observers that respond to changes in the component's state or props.


> 💡 And Much Much More



# Real World examples with MERN Stack

## **React.js**

### **Real-World Scenario: Form Validation and Notification**

In a React application, you might have a complex form with multiple fields that need validation. You want to notify the user if any field becomes invalid as they type.

### **Example: Using Classes and Interfaces (TypeScript)**

```tsx
// Observer Interface
interface Observer {
  update(isValid: boolean): void;
}

// Subject Interface
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// ConcreteSubject
class FormField implements Subject {
  private observers: Observer[] = [];
  private valid: boolean = true;

  public attach(observer: Observer): void {
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify(): void {
    this.observers.forEach(observer => observer.update(this.valid));
  }

  public setValid(isValid: boolean): void {
    this.valid = isValid;
    this.notify();
  }
}

// ConcreteObserver
class FormErrorDisplay implements Observer {
  public update(isValid: boolean): void {
    if (!isValid) {
      console.log("The form field is invalid.");
    } else {
      console.log("The form field is valid.");
    }
  }
}

// Usage
const field = new FormField();
const errorDisplay = new FormErrorDisplay();

field.attach(errorDisplay);

// Simulate user typing and validation
field.setValid(false); // Output: The form field is invalid.
field.setValid(true);  // Output: The form field is valid.

```

### **Benefits**

- **Modular Validation**: Each form field manages its own validation state.
- **Real-Time Feedback**: Observers can react immediately to changes, providing instant feedback to users.

### **Example: Using Built-In Features (TypeScript with React Hooks)**

```tsx
import React, { useState, useEffect } from 'react';

const FormField = () => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    console.log(isValid ? "The form field is valid." : "The form field is invalid.");
  }, [isValid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsValid(value.length > 3); // Simple validation: field must be longer than 3 characters
  };

  return <input type="text" onChange={handleChange} />;
};

export default FormField;

```

### **Benefits**

- **Simplified State Management**: Using hooks makes the code cleaner and more aligned with React’s functional programming style.
- **Direct React Integration**: Leverages React's built-in `useEffect` hook to monitor state changes and update the UI.

## **Node.js**

### **Real-World Scenario: Real-Time Logging System**

**Scenario Name**: **Server Request Logging**

In a Node.js application, you may want to log requests to different outputs (e.g., console, file, external logging service) whenever an HTTP request is received by the server.

### **Example: Using Classes and Interfaces (TypeScript)**

```tsx
import http, { IncomingMessage, ServerResponse } from 'http';

interface Observer {
  update(request: IncomingMessage): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(request: IncomingMessage): void;
}

class RequestLogger implements Subject {
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify(request: IncomingMessage): void {
    this.observers.forEach(observer => observer.update(request));
  }

  public logRequest(request: IncomingMessage): void {
    this.notify(request);
  }
}

class ConsoleLogger implements Observer {
  public update(request: IncomingMessage): void {
    console.log(`Request received: ${request.url}`);
  }
}

const requestLogger = new RequestLogger();
const consoleLogger = new ConsoleLogger();
requestLogger.attach(consoleLogger);

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  requestLogger.logRequest(req);
  res.end("Hello, world!");
});

server.listen(3000, () => console.log("Server is running on port 3000"));

```

### **Benefits**

- **Flexible Logging**: Easily attach different types of loggers (e.g., file logger, external service logger).
- **Separation of Concerns**: Loggers are decoupled from the server logic, following the Single Responsibility Principle.

### **Example: Using Built-In Features (TypeScript with EventEmitter)**

```tsx
import http, { IncomingMessage, ServerResponse } from 'http';
import { EventEmitter } from 'events';

const requestLogger = new EventEmitter();

requestLogger.on('log', (request: IncomingMessage) => {
  console.log(`Request received: ${request.url}`);
});

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  requestLogger.emit('log', req);
  res.end("Hello, world!");
});

server.listen(3000, () => console.log("Server is running on port 3000"));

```

### **Benefits**

- **Ease of Use**: The `EventEmitter` class simplifies the implementation of the Observer pattern.
- **Built-In Node.js Integration**: Leverages Node.js's native event system, making the code concise and efficient.

These examples show how the Observer pattern can be applied in common scenarios within a MERN stack, providing flexibility and modularity in handling dynamic updates.