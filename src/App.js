import React from 'react';

function App() {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 13 },
    { name: "Koichi" },
    { }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

function User(props) {
  return <div>Hi! I am {props.name}, and {props.age} years old.</div>
}

User.defaultProps = {
  name: "Noname",
  age: 1
}

export default App;
