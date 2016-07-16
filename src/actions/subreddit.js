import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-act'

export const selectSubreddit = createAction('选择列表')
export const requestPosts = createAction('发起请求')
export const receivePosts = createAction('收到请求')

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts({subreddit}))

    return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => {
              dispatch(receivePosts({
                subreddit,
                posts: json.data.children.map(child => child.data),
                receivedAt: Date.now()
              }))
            }
          )
  }
}
