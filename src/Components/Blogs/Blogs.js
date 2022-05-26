import React from 'react';

const Blogs = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row my-5 gy-5">
                    <div className="col-md-10 mx-auto">
                        <h3>1. How will you improve the performance of a React Application?</h3>
                        <ul>
                            <li>Use memo and PureComponent</li>
                            <li>Avoid Anonymous Functions</li>
                            <li>Avoid Object Literals</li>
                            <li>Use React.lazy and React.Suspense</li>
                            <li>Avoid Frequent Mounting/Unmounting</li>
                        </ul>
                    </div>
                    <div className="col-md-10 mx-auto">
                        <h3>2.How does prototypical inheritance work?.</h3>
                        <p>Simply put, prototypical inheritance refers to the ability to
                            access object properties from another object.
                            We use a JavaScript prototype to add new properties
                            and methods to an existing object constructor.
                            We can then essentially tell our JS code to
                            inherit properties from a prototype. Prototypical
                            inheritance allows us to reuse the properties or
                            methods from one JavaScript object to another through
                            a reference pointer function.

                        </p>
                        <p>In this programming paradigm, a class is a blueprint for creating objects. If you want a new class to reuse the functionality of an existing class, you can create a new class that extends the existing class. This is called classical inheritance.
                            JavaScript doesn’t use classical inheritance. Instead, it uses prototypal inheritance.

                            In prototypal inheritance, an object “inherits” properties from another object via the prototype linkage.</p>
                    </div>

                    <div className="col-md-10 mx-auto">
                        <h3>3. What is a unit test? Why should write unit tests?</h3>
                        <p>
                        UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
                        </p>
                        <p>
                        Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.
                        </p>
                    </div>
                    <div className="col-md-10 mx-auto">
                        <h3>4. What are the different ways to manage a state in a React application?</h3>
                        <p>
                        There are four main types of state you need to properly manage in your React apps:
                        </p>
                        <p>
                        Local (UI) state – Local state is data we manage in one or another component.                        
                        </p>
                        <p>
                        Global (UI) state – Global state is data we manage across multiple components.                        </p>
                        <p>
                        Server state – Data that comes from an external server that must be integrated with our UI state.                        </p>
                        <p>
                        URL state – Data that exists on our URLs, including the pathname and query parameters.                        </p>
                    </div>

                    <div className="col-md-10 mx-auto">
                        <h3>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                        <p>
                        In ES6 we can use Array.prototype.find(predicate, thisArg?) like so: i will use array.find method to find product by its name
                        <br />
                         let obj = array.find(product 	= &#62;product.name === 'name')

                        </p>  

                             
                    </div>

                </div>
            </div>
        </>
    );
};

export default Blogs;