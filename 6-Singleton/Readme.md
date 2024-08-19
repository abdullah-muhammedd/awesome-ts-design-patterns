# The Problem

- We have a chocolate company Choc-O-Holic, Inc.
- We have a chocolate boiler in the factory that can gets commands from anywhere in the factory system
- The initial design was something like this

```java
public class ChocolateBoiler {
    private boolean empty;
    private boolean boiled;

    private ChocolateBoiler() {
        empty = true;
        boiled = false;
    }

    public void fill() {
        if (isEmpty()) {
            empty = false;
            boiled = false;
            // fill the boiler with a milk/chocolate mixture
        }
    }

    public void drain() {
        if (!isEmpty() && isBoiled()) {
            // drain the boiled milk and chocolate
            empty = true;
        }
    }

    public void boil() {
        if (!isEmpty() && !isBoiled()) {
            // bring the contents to a boil
            boiled = true;
        }
    }

    public boolean isEmpty() {
        return empty;
    }

    public boolean isBoiled() {
        return boiled;
    }
}

```

- But there is a little problem some of our employees created another instance of that class this caused a huge problem because both instances started managing the boiler independently. One instance was trying to fill the boiler while the other was draining it, leading to conflicting states and inconsistent behavior. The boiler was either overfilled, or the chocolate mixture wasn’t boiled properly, causing production delays and a lot of wasted ingredients.
- So We Need to create only one instance of that class

# Singleton Pattern

> **From refactoring.guru :**
> 
> 
> **`Singleton`** is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
> 

> **From HFDP :**
> 
> 
> `Singleton`  ensures a class has only one instance, and provides a global point of access to it.
> 

# Redesign the boiler class

- The Singleton UML class diagram is pretty simple because we will only update 3 things in our old boiler class
    - Update the constructor to be private ⇒ **Yes it is Possible!**
    - Create a static variable of type Boiler
    - Create the public static method `getInstance()` which will create the instance if it is not created before and returns it

![image.png](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2Fbfb0e52d-4d69-4c7b-ad5e-238de4b805eb%2Fimage.png?table=block&id=aee4545b-8459-4505-858a-57980cdf5f4f&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=2000&userId=&cache=v2)

# Why not using simple global variables

- The Singleton Pattern is designed to achieve two key objectives:
    - **Provide a single global point of access to an object.**
    - **Ensure that there is one and only one instance of that object at any given time.**
- While global variables might seem like they can handle the first objective, they fall short on the second. Sure, you can access the same object globally, but nothing prevents someone from accidentally—or intentionally—reassigning that variable to a new object. If that happens, the original object, along with any important state it was holding, is gone. This can lead to unexpected behavior and errors, as the rest of your application might be relying on the consistency of that state.
- Another issue with global variables is initialization. Who’s responsible for setting up the variable the first time? Without a clear and controlled way to manage its creation, you could end up with race conditions or inconsistencies in how the object is initialized.
- The Singleton Pattern addresses all these concerns by tightly controlling the creation of the instance and providing a reliable, global access point that can't be easily overridden or recreated.

# The problems of multithreading and how to tackle them

Let's talk about the challenges of multithreading, especially when you're trying to implement something like the Singleton pattern. When multiple threads are involved, things can get tricky, but don’t worry—there are some solid strategies to handle this.

- **Problem: Multiple Threads, Multiple Instances**
    - So, imagine two threads hit the Singleton's instance creation method at the exact same time. Without any safeguards, both might end up creating their own separate instances, which totally defeats the purpose of having a Singleton.
- **Solution 1: Synchronized Method**
    - One way to handle this is by synchronizing the `getInstance()` method. This ensures that only one thread can access it at a time, so they won’t step on each other’s toes.
    - **But here's the catch**: Synchronization can slow things down, especially if your `getInstance()` method gets called a lot. It’s a bit like having everyone wait in line when only one person really needs to.
- **Solution 2: Eager Initialization**
    - Another approach is to create the Singleton instance right when the class is loaded—before any thread even gets a chance to ask for it. This way, there’s no risk of multiple instances because the work is already done.
    - **The downside?** If your instance is heavy on resources or if it turns out you never even need it, you’ve just wasted memory and processing power for nothing.
- **Solution 3: Double-Checked Locking**
    - This is a bit more clever. You check if the instance is `null` without synchronizing, and only if it is, you synchronize and check again before creating it. This way, you avoid the performance hit of synchronization once the instance is set up.
    - **Sounds great, right?** It is, but it can get a little tricky to implement correctly, especially in languages that aren't as thread-safe as you’d like

# Real World Examples with MERN Stack

### **React.js**

**Real-World Scenario: Single** WebSocket  **over the whole app**

> 💡 For the first time it is a scenario that I did myself in the [`critch`](https://github.com/critch-app/critch-frontend/blob/main/src/renderer/src/api/ws/ws.ts) app



**Description:** **Description:** In a React application, we want to ensure that there is only one WebSocket connection used throughout the entire application. This single connection will handle different incoming data events and will be shared among various components to manage real-time data effectively.

### **Example: Functional Components and Factory Method**

```tsx
import { EventType } from '@renderer/env.d'

class WS {
  private handlers: Map<EventType, (event: MessageEvent) => void> = new Map()
  private socket: WebSocket
  private token: string
  private url(token: string): string {
    return `wss://critch-api.onrender.com/v1/messaging-service?token=${token}`
  }
  
  public constructor(token: string) {
    this.token = token
    this.socket = new WebSocket(this.url(this.token))
    this.socket.addEventListener('message', (event: MessageEvent) => {
      this.handleMessage(event)
    })
    this.socket.onclose = () => {
      this.reconnect()
    }
  }

  private handleMessage(event: MessageEvent): void {
    const data = JSON.parse(event.data)
    const handler = this.handlers.get(data.type)
    if (handler) {
      handler(event)
    }
  }

  public onMessage(handler: (event: MessageEvent) => void, eventType: EventType): void {
    this.handlers.set(eventType, handler)
  }

  public onOpen(handler: () => void): void {
    this.socket.addEventListener('open', handler)
  }

  public onClose(handler: () => void): void {
    this.socket.addEventListener('close', handler)
  }

  public onError(handler: (errorEvent: Event) => void): void {
    this.socket.addEventListener('error', (errorEvent) => {
      handler(errorEvent)
    })
  }

  public sendMessage(message: string): void {
    this.socket.send(message)
  }

  public removeEventListener(eventType: EventType): void {
    this.handlers.delete(eventType)
  }

  public reconnect() {
    this.socket = new WebSocket(this.url(this.token))
    this.socket.addEventListener('message', (event: MessageEvent) => {
      this.handleMessage(event)
    })
    this.socket.onclose = () => {
      this.reconnect()
    }
  }
}

export default WS
```

```tsx
import WS from '@renderer/api/ws/ws' 
import { createContext } from 'react'

const WSProvider = createContext<null | WS>(null)

export function useWebSocketProvider(): React.Context<null | WS> {
  return WSProvider
}
```

### **Benefits**

- **Single WebSocket Connection**: By using a single WebSocket instance across the entire application, you avoid the overhead of establishing multiple connections, which can reduce resource usage and improve performance.
- **Centralized Management**: Handling all WebSocket interactions in one place makes it easier to manage connections, data events, and error handling. This centralization simplifies debugging and maintenance.
- **Consistent Data Handling**: With a single WebSocket instance, you ensure that data events are processed uniformly throughout the application, avoiding inconsistencies and ensuring that all parts of the app receive the same updates.
- **Reconnection Handling**: The WebSocket class includes logic to automatically reconnect if the connection drops, ensuring that the application remains resilient to network issues.
- **Event Handling Flexibility**: The class provides methods to add, remove, and manage event listeners dynamically, allowing components to react to specific events without tight coupling.

### **Node.js with TypeScript**

**Real-World Scenario:** Single Instance Service with TypeScript

**Description:** In a Node.js application using TypeScript, you might need to create a service that ensures only one instance is running throughout the application. This is similar to the Singleton pattern but implemented in a Node.js environment. It’s useful for managing shared resources, such as database connections, configuration settings, or other services that should be unique.

### **Example: Singleton Database Connection**

Here’s an example of how you might implement a Singleton pattern for a database connection in Node.js with TypeScript:

```tsx
import { MongoClient } from 'mongodb';

class DatabaseService {
  private static instance: DatabaseService;
  private client: MongoClient;

  private constructor() {
    const uri = 'mongodb://localhost:27017/mydatabase';
    this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  public async connect(): Promise<void> {
    if (!this.client.isConnected()) {
      await this.client.connect();
    }
  }

  public getClient(): MongoClient {
    return this.client;
  }

  public async close(): Promise<void> {
    await this.client.close();
  }
}

export default DatabaseService;

```

### **Benefits**

- **Single Instance Management**: Ensures that only one instance of the service (e.g., database connection) is created and shared across the application, reducing the risk of issues related to multiple instances, such as connection limits or data inconsistencies.
- **Resource Efficiency**: Avoids the overhead of creating and managing multiple instances of the same service, which can be resource-intensive and lead to performance bottlenecks.
- **Centralized Access**: Provides a single point of access to the service, making it easier to manage and maintain. All parts of the application use the same instance, ensuring consistency in how the service is used.
- **Lazy Initialization**: Creates the service instance only when it is first needed, which can help improve startup performance and reduce unnecessary resource usage.
- **Error Handling**: Centralizes error handling and connection management, making it easier to implement robust error recovery and logging mechanisms.