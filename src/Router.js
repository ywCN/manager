import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return ( // initial make the scene the first one to show
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key='login' component={LoginForm} title='Please Login' />
            <Scene key='employeeList' component={EmployeeList} title='Employees' />
        </Router>
    );
};

export default RouterComponent;