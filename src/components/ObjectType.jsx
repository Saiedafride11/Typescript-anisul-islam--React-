
import React from 'react';

type userProps = { 
      user: {
            name: string;
            age: number;
            isRegistered: boolean;
            lang: string[];
      }
}

// const User = (props: {name: string; age: number}) => {
// const User = (props: userProps) => {
const ObjectType = ({user}: userProps) => {
      return (
            <div style={{border: '1px solid red', margin: "5px"}}>
                  {/* <h3>{props.name}</h3>
                  <p>mdsaied.afride@gmail.com</p>
                  <p>{props.age} years old</p> */}

                  <h3>{user?.name}</h3>
                  <p>mdsaied.afride@gmail.com</p>
                  <p>{user?.age} years old</p>
                  {
                        user?.isRegistered ? "Successfully registered student" : "Not registered"
                  }

                  <p>
                        Speaks:
                        {
                              user?.lang?.map((language, index) => <span key={index}>{language} </span>)
                        }
                  </p>
            </div>
      );
};

export default ObjectType;