import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "./services/user.api";


export default function App() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {users} = state;

    useEffect(() => {
        getUsers().then(value => {
            dispatch({type: 'FETCH_USERS', payload: value});
        })
    }, [])

    return (
        <div>
            {
                users.map((value) => <div>{value.name}</div>)
            }
        </div>
    );
}

