# redux-rest-saga

## Get started

    yarn
    yarn testw
    
### To do

- ✅ RequestAction
- ✅ RestActions
- 🔲 RequestSagas
- 🔲 RestSagas

### Usage example


actions.js

    const memberRestActions = new RestActions('MEMBER')

component.jsx

    class MemberForm extends React.Component {
      ...
      submit(payload) {
        this.props.dispatch(memberRestActions.post.action({
          payload
        }))
      }
      ...
    }

sagas.js

    const postMemberSagas = new RequestSagas(memberRestActions.post, {
      method: 'POST',
      endpoint: '/members'
    })

    postMemberSagas.success = function* (action) {
      ...
    }

    postMemberSagas.failure = function* (action) {
      ...
    }

    export default [
      fork(postMemberSagas.saga)
    ]

reducers.js

    ...
    switch (action.type) {
      case memberRestActions.post.types.success:
        return {
          ...state,
          members: [...state.members, action.payload.member]
        }
    
    ...

