import React, { useEffect } from 'react';
import { fetchUsers } from '../redux';
import { connect } from 'react-redux';

function UsersContainer(props) {
    const {fetchUsers, userData } = props;
    useEffect(()=> {
       fetchUsers();
    },[]);

    return (
       <div> {userData.loading ? <h2>Loading...</h2> : userData.error ? <h2>userData.error</h2> : <div>
           <h2>Users List :</h2>
           <div>{userData.users.map(user =><p>{user.name}</p>)}</div>
       </div>};
       
       </div>    
    );
}

const mapStateToProps = ( state ) => {
    return {
        userData : state.users
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchUsers : () => dispatch(fetchUsers())
    }
} 



export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);
