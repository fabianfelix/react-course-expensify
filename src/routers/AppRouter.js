import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import Dashboard from '../components/ExpenseDashboardPage'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import HelpPage from '../components/Help'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter