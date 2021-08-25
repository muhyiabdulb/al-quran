import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DetailSurah from '../components/DetailSurah'
import ListSurah from '../components/ListSurah'
import NotFound from '../error/NotFound'

const Router = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <ListSurah />
            </Route>
            <Route path='/detail-surah/:identifier'>
                <DetailSurah />
            </Route>
            <Route path='*' component={NotFound} />
        </Switch>
    )
}

export default Router