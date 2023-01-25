import React, { useState } from 'react';

const EventType = () => {
      const [userName, setUserName] = useState("");

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");

      const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setUserName(e.target.value);
      }
      
      const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            alert(userName?.length > 0 ? userName : "Add User")
      }

      // -------------------------------------------------

      const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
      }
      const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
      }

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const newUser = {name, email};

            // alert(newUser)
            console.log(newUser);
      }
      return (
            <div style={{border: '1px solid red', margin: "5px"}}>
                  <h2>Create a new user</h2>

                  <p>{userName}</p>

                  <input value={userName} onChange={handleUserNameChange} type="text" placeholder="Enter user name" />

                  <br />
                  <br />
                  <button onClick={handleClick}>Show name</button>

                  <p>---------------</p>

                  <form onSubmit={handleSubmit}>
                        <div>
                              <label htmlFor="name">
                                    Name
                                    <input value={name} onChange={handleNameChange} type="text" placeholder="Enter name" id="name" required/>
                              </label>
                              <br />
                              <label htmlFor="email">
                                    Email
                                    <input value={email} onChange={handleEmailChange} type="text" placeholder="Enter email" id="email" required/>
                              </label>
                        </div>
                        <button type="submit">Create new user</button>
                  </form>
            </div>
      );
};

export default EventType;