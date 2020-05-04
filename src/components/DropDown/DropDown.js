import React, { Component, useContext } from 'react'
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

import { D3Context } from "../../contexts/D3Context";

// Temporary imports for illustration purposes
import CanadaOrgChart from "../../data/GovernmentCanadaOrgChart/GovernmentOrgChart";

class Dropdown extends Component {
  // TODO: change this when switching to a functional component
  static contextType = D3Context;
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
    console.log("Some GOC org charts")
    console.log(CanadaOrgChart[title][0])
    // Get the d3 state and action dispatcher (TODO: change this when dropdown becomes a functional component)
    const { dispatch } = this.context;
    // API call would go here and fetch the required tree chart root. For illustration
    // just use the imported datasets
    dispatch({
      type: "SET_TREECHART_ROOT",
      dataRoot: CanadaOrgChart[title][0]
    })

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