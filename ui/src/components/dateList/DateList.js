import React, { Component } from 'react'
import { setDateMonth } from '../../actions/wishActions'
import './DateList.scss'
import { connect } from 'react-redux';
class DateList extends Component {
  state = {
    iconState: 'collapsed',
  }
  months = () => {
    return [
      'January', 
      'February', 
      'March', 
      'April', 
      'May', 
      'June', 
      'July', 
      'August', 
      'September', 
      'October', 
      'November', 
      'December', 
    ]
  }
  setDateMonth = (month) => {
    if (this.props.dateMonth !== month){
      this.props.setDateMonth(month)
    }
  }
  handleClick = (month) => {
    if(this.state.iconState === 'chevronCollapsed'){
      this.setDateMonth(month)
      this.setState({iconState: 'chevronExpanded'})
    }else{
      this.setDateMonth(month)
      this.setState({iconState: 'chevronCollapsed'})
    }
   
  }

  // displayMonthList = () => {
  //   return this.months().map((month)=>{
  //     (<li onClick={() => this.handleClick(month)} className="list-group-item d-flex justify-content-between align-items-center">
  //     Morbi leo risus
  //     <span className="badge badge-primary badge-pill">1</span>
  //     </li>)
  //   })
  // }
  render() {
    return (
      <div>
        <ul class="list-group">
          {/* {this.displayMonthList()} */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dateMonth: state.wish.dateMonth
  }
}
export default connect(
  mapStateToProps,
  {
    setDateMonth,
  }
)(DateList)