import * as React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { FlashesState } from '../store/flashes'

interface MembersProps {
  flashes: FlashesState
}

class Flashes extends React.Component<MembersProps> {
  render() {
    const { flashes } = this.props
    if (!flashes.message)
      return <React.Fragment></React.Fragment>
    return (
      <div>
        <h2>Info</h2>
        { flashes.message }
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  flashes: state.flashes
})

export default connect(mapStateToProps)(Flashes)