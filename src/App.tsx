import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';
import ArrayObjectType from './components/ArrayObjectType';
import UnionType from './components/UnionType';
import ChildrenProps from './components/ChildrenProps';
import ObjectType from './components/ObjectType';
import StyleProps from './components/StyleProps';
import HooksType from './components/HooksType';
import EventType from './components/EventType';
import UseReducerHook from './components/UseReducerHook';

const user1 = {
    name:"Saied Afride",
    age: 32,
    isRegistered: true,
    lang: ["Bangla", "English"] 
}
const userDemo = [
  {
    id: 1,
    name: "Saied Afride",
    age: 20,
    email: "saiedafride@gmail.com",
  },
  {
    id: 2,
    name: "Ridoy",
    age: 22,
    email: "ridoy@gmail.com",
  },
]

function App() {
  return (
    <div className="App">
      <h1>User management</h1>

      <User 
          name="Saied Afride"
          age={32}
          isRegistered={true}
          lang={["Bangla", "English"]}
      />

      <ObjectType user={user1}/>

      <ArrayObjectType users={userDemo}/>

      <UnionType status="success"/>

      <ChildrenProps>Click me</ChildrenProps>

      <StyleProps btnStyle={{color: "red", border: "1px solid black", margin: "10px"}}/>

      <HooksType/>

      <EventType/>

      <UseReducerHook/>

    </div>
  );
}

export default App;

// string, number, boolean, void, null
//user defined type - object, array, enum, union, any, custom type