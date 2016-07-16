import { selectedsubreddit, postsBySubreddit } from '../../src/reducers/subreddit'
import { selectSubreddit, requestPosts, receivePosts } from '../../src/actions/subreddit'

describe('subreddit reducer', () => {
  it('selectSubreddit', () => {
    expect(selectedsubreddit(undefined, {})).to.equal('reactjs')
  })

  it('selectedsubreddit2', () => {
    expect(selectedsubreddit('haha', {})).to.equal('haha')
  })

  it('selectedsubreddit3', () => {
    expect(selectedsubreddit('haha', {
      type: selectSubreddit.getType(),
      payload: 'angularjs'
    })).to.equal('angularjs')
  })
})

describe('postsBySubreddit reducer', () => {
  it('postsBySubreddit 1', () => {
    expect(postsBySubreddit(undefined, {})).to.eql({})
  })

  it('postsBySubreddit 2', () => {
    expect(postsBySubreddit({a: 1}), {}).to.eql({a: 1})
  })

  it('postsBySubreddit 3', () => {
    let timeStamp = Date.now()

    expect(postsBySubreddit(undefined, {
      type: receivePosts.getType(),
      payload: {
        subreddit: 'angularjs',
        posts: [],
        receivedAt: timeStamp
      }
    })).to.deep.equal({
      angularjs: {
        isFetching: false,
        didInvalidate: false,
        items: [],
        lastUpdated: timeStamp
      }
    })
  })

  it('postsBySubreddit 4', () => {
    expect(postsBySubreddit(undefined, {
      type: requestPosts.getType(),
      payload: {
        subreddit: 'vuejs'
      }
    })).to.deep.equal({
      vuejs: {
        isFetching: true,
        didInvalidate: false
      }
    })
  })
})
