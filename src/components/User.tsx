import React from 'react';

type userProps = { 
      name: string;
      age: number,
      isRegistered: boolean,
      lang: string[]
}

// const User = (props: {name: string; age: number}) => {
// const User = (props: userProps) => {
const User = ({name, age, isRegistered, lang}: userProps) => {
      return (
            <div>
                  {/* <h3>{props.name}</h3>
                  <p>mdsaied.afride@gmail.com</p>
                  <p>{props.age} years old</p> */}

                  <h3>{name}</h3>
                  <p>mdsaied.afride@gmail.com</p>
                  <p>{age} years old</p>
                  {
                        isRegistered ? "Successfully registered student" : "Not registered"
                  }

                  <p>
                        Speaks:
                        {
                              lang?.map((language, index) => <span key={index}>{language} </span>)
                        }
                  </p>
            </div>
      );
};

export default User;

