import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';

import {
  DropDownWrapper,
  DropDownHeader,
  DropDownHeaderTitle,
  DropDownArrow,
  DropDownUnorderedList,
  DropDownListItem,
  DropDownCheck,
} from "./dropdown-styles";

class Dropdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
    this.close = this.close.bind(this)
  }

  componentDidUpdate(){
    const { listOpen } = this.state
    setTimeout(() => {
      if(listOpen){
        window.addEventListener('click', this.close)
      }
      else{
        window.removeEventListener('click', this.close)
      }
    }, 0)
  }

  componentWillUnmount(){
    window.removeEventListener('click', this.close)
  }

  close(timeOut){
    this.setState({
      listOpen: false
    })
  }

  selectItem(title, id, stateKey){
    this.setState({
      headerTitle: title,
      listOpen: false
    }, this.props.resetThenSet(id, stateKey))
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render(){
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    return(
      <DropDownWrapper>
        <DropDownHeader onClick={() => this.toggleList()}>
          <DropDownHeaderTitle>{headerTitle}</DropDownHeaderTitle>
          {listOpen
            ? <DropDownArrow name="angle-up" />
            : <DropDownArrow name="angle-down" />
          }
        </DropDownHeader>
        {listOpen && <DropDownUnorderedList onClick={e => e.stopPropagation()}>
          {list.map((item)=> (
            <DropDownListItem 
              key={item.id}
              onClick={
                () => this.selectItem(item.title, item.id, item.key)
              }
            >
              {item.title}
              {item.selected && 
              <DropDownCheck>
                <FontAwesome name="fas fa-check-square"/>
              </DropDownCheck>
              }
            </DropDownListItem>
          ))}
        </DropDownUnorderedList>}
      </DropDownWrapper>
    )
  }
}

export default Dropdown