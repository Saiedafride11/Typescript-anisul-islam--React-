import React from 'react';

type userDemoTypes = {
      users: {
            id: number;
            name: string;
            age: number;
            email: string;
        }[]
}

const ArrayObjectType = ({users}: userDemoTypes) => {
      return (
            <div style={{border: '1px solid black', margin: "5px"}}>
                  {
                        users?.map((user) => (
                              <div key={user.id}>
                                    <h2>Name: {user.name}</h2>
                              </div>
                        ))
                  }
            </div>
      );
};

export default ArrayObjectType;