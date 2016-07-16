import { combineReducers } from 'redux'
import { createReducer } from 'redux-act'

import {
  selectSubreddit,
  requestPosts,
  receivePosts
} from '../actions/subreddit'

export const selectedsubreddit = createReducer({
  [selectSubreddit]: (state, subreddit) => {
    return subreddit
  }
}, 'reactjs')


export const postsBySubreddit = createReducer({
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
