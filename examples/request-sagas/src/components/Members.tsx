import * as React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { MembersRestActions, membersReducer } from '../store/members'
import { MembersState } from '../store/members'

interface MembersProps {
  getMembers(): any
  members: MembersState
}

class Members extends React.Component<MembersProps> {
    
  componentDidMount = () => {
    this.props.getMembers()
  }

  render() {
    const { members } = this.props
    return (
      <div>
        <h2>Members</h2>
        {
          members.loading && <span>Loading... ({ members.fetchProgress || 0 } %)</span>
        }
        <ul>
          {
            members.all.map((member:object, index) =>
              <li key={ index }>{ member.firstName } {member.lastName }</li>
            )
          }
        </ul>
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