import { type } from 'os';
import React, { useState } from 'react';

type UserType = {
      id: number,
      name: string
}

const HooksType = () => {
      // const [count, setCount] = useState(0);
      const [count, setCount] = useState< number | string>(0);

      // const [user, setUser] = useState<null | UserType>(null);
      const [user, setUser] = useState<UserType>({} as UserType);

      const handleIncrement = () => {
            // setCount(count + 1)
            setCount(10)
      }

      const handleAddUser = () => {
            setUser({id: 1, name: "Afride"})
      }
      return (
            <div>
                  <p>{count}</p>
                  <button onClick={handleIncrement}>Increase Count</button>

                  <p>--------------------</p>

                  {/* <p>{user?.name}</p> */}
                  <p>{user.name}</p>
                  <button onClick={handleAddUser}>Add User</button>
            </div>
      );
};

export default HooksType;