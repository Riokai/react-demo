import { combineReducers } from 'redux'
import { createReducer } from 'redux-act'

import {
  selectSubreddit,
  requestPosts,
  receivePosts
} from '../actions/subreddit'

const selectedsubreddit = createReducer({
  [selectSubreddit]: (state, subreddit) => subreddit
}, 'reactjs')


const postsBySubreddit = createReducer({
  [requestPosts]: (state, payload) => ({
    ...state,
    [payload.subreddit]: {
      isFetching: true,
      didInvalidate: false
    }
  }),
  [receivePosts]: (state, payload) => ({
    ...state,
    [payload.subreddit]: {
      isFetching: false,
      didInvalidate: false,
      items: payload.posts,
      lastUpdated: payload.receivedAt
    }
  })
}, {})

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedsubreddit
})

export default rootReducer
