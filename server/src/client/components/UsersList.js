import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from "../actions";

class UsersList extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
    }

    render() {
        return (
            <Fragment>
                <h3>List of Users:</h3>
                <ul>{this.renderUsers()}</ul>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        users: state.users
    }
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);