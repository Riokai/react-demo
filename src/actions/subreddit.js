import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-act'

function createDescriptorAction (text) {
  const descriptor = text

  return createAction(descriptor)
}

export const selectSubreddit = createDescriptorAction('选择列表')
export const requestPosts = createDescriptorAction('发起请求')
export const receivePosts = createDescriptorAction('收到请求')

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
