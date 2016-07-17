import React, { Component, PropTypes, Children, cloneElement } from 'react'
// import { findDOMNode } from 'react-dom'

export default class InfiniteScroll extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    addItem: PropTypes.func.isRequired
  }

  handleScroll () {
    const target = this.refs.container

    // const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    // const scrollHeight =  document.documentElement.scrollHeight
    // const clientHeight = document.documentElement.clientHeight

    const scrollTop = target.scrollTop
    const scrollHeight = target.scrollHeight
    const clientHeight = target.clientHeight

    // console.log('scrollTop', scrollTop);
    // console.log('scrollHeight', scrollHeight);
    // console.log('clientHeight', clientHeight);

    if (scrollTop + clientHeight >= scrollHeight) {
      this.props.addItem()
    }
  }

  componentDidMount () {
    console.log(this.props.children);
    console.log(this.refs.container)
    // React.Children.map(this.props.children, (child) => {
    //   console.log(child);
    // })
    // console.log('target', this.refs.container);
     this.refs.container.addEventListener('scroll', this.handleScroll.bind(this))
  }

  render () {
    return (
      <div>
      {
        Children.map(this.props.children, (child) => {
          return cloneElement(child, {
            ref: 'container'
          })
        })
      }
      </div>
    )
  }
}
