import React from 'react';
import axios from 'axios';
import './Home.css'
import LoadingSpinner from "./LoadingSpinner";
import { useThemeConsumer } from './../../Context/UseContext';
import { useNavigate } from "react-router-dom";

function Home() {
  const [users, setUsers] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [sortField, setSortField] = React.useState(false);
  const baseUrl = 'https://jsonplaceholder.typicode.com/users';
  const [uname, setUname] = useThemeConsumer();
  const navigate = useNavigate();
  // console.log('uname response ====>', uname)
  // console.log('setUname response ====>', setUname)
  React.useEffect(() => {
    setIsLoading(true);
    axios.get(`${baseUrl}`)
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false)
        console.log('Api response from ======', response.data)
      }).catch((error) => {
        console.log('Api error response from ======', error)
        setIsLoading(false)
      })
  }, [search]);
  if (!users) return "No post!"

  return (

    <div className='table-container'>
      {uname ?
        <>
          <h1>Hi, {uname}</h1>
          <input
            type={'text'}
            placeholder={'Search...'}
            onChange={(event) => {
              setSearch(event.target.value.trim())
            }}
          />
          {/* <button onClick={() => {
            setSortField(!sortField)
          }}>Toggle</button>
          {sortField ?
            users.sort((a, b) => (a.id < b.id ? -1 : 1)).map((user, key) => {
              return (
                <table key={user.id}>
                  <tbody>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                    </tr>
                    <tr >
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                    </tr>
                  </tbody>
                </table>
              )
            }):<h1>HHHHH</h1>} */}
          {isLoading ? <LoadingSpinner /> :

            users
              .filter((value) => {
                if (search === '') {
                  return value;
                }
                else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                  return value;
                }
              })
              .map((user, key) => {
                return (
                  <table key={user.id}>
                    <tbody>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                      </tr>
                      <tr >
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                      </tr>
                    </tbody>
                  </table>
                )
              })
          }
        </>
        :
        <button className='button1' onClick={() => {
          navigate("/login");
        }}>Login</button>
      }
    </div>
  )
}

export default Home