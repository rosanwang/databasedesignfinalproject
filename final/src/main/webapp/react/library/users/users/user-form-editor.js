//import useHistory
//import userParams to parse parameters from URL
const {useParams, useHistory} = window.ReactRouterDOM;

//import React's hooks
const {useState, useEffect} = React;

//import user-service so we can fetch a single user
import userService from "./user-service"

const UserFormEditor = () => {
    const history = useHistory()
        //parse "id" from URL
        //as defined in URL pattern in index.js
        const {userId} = useParams()

        const [user, setUser] = useState({})
        useEffect(() => {
            //only load the user by ID if the ID is not "new"
            if(userId !== "new") {
                //on load
                findUserById(userId)
                //find the user by their ID encoded from path
            }
        }, []);
    const createUser = (user) =>
        userService.createUser(user)
            .then(() => history.goBack())


    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(() => history.goBack())
    //deleteUser even handler accepts user's ID


    const findUserById = (id) =>
            userService.findUserById(id)
                .then(user => setUser(user))
        //fetch a single user using their ID
        //use user service's new findUserById
        //store user from server to local user state variable

    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => history.goBack())
    //update user with ID with new user data
    //send new user to server
    //then go back to user list

    return (
       <div>
            <h2>User Editor</h2>
            <h2>{userId}</h2>
            <label>Id</label>
            <input value={user.id}/><br/>
            <label>First Name</label>
            <input  onChange={(e) =>
                setUser(user =>
                    ({...user, firstName: e.target.value}))}
                    value={user.firstName}/><br/>
            <label>Last Name</label>
            <input                  onChange={(e) =>
                setUser(user =>
                    ({...user, lastName: e.target.value}))}
                                    value={user.lastName}/><br/>
            <label>Username</label>
            <input                  onChange={(e) =>
                setUser(user =>
                    ({...user, username: e.target.value}))}
                                    value={user.username}/><br/>
            <label>Password</label>
            <input               onChange={(e) =>
                setUser(user =>
                    ({...user, password: e.target.value}))}
                                 value={user.password}/>

            <label>Email</label>
            <input               onChange={(e) =>
                setUser(user =>
                    ({...user, email: e.target.value}))}
                                 value={user.email}/>

            <button className="btn btn-danger"
                onClick={() => {
                    history.goBack()}}>
                Cancel
            </button>

            <button className="btn btn-primary"
                onClick={() => deleteUser(user.id)}>
                Delete
            </button>

            <button className="btn btn-primary"
                    onClick={() => updateUser(user.id, user)}>
                Save
            </button>

            <button className="btn btn-success"
                onClick={() => createUser(user)}>
                Create
            </button>

        </div>
    )
}

export default UserFormEditor