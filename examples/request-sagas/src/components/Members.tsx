import * as React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { MembersRestActions } from '../store/members'
import { MembersState } from '../store/members'

interface MembersProps {
  getMembers(): any
  members: MembersState
}

class Members extends React.Component<MembersProps> {
    
  componentDidMount = () => {
    console.log(this.props)
    this.props.getMembers()
  }

  render() {
    return (
      <div>
        <h2>Members</h2>
        
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  members: state.members
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMembers: () => dispatch(MembersRestActions.get.action())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Members)