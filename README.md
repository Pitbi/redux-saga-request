# redux-saga-request

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

    const memberRequestActions = new RestActions('MEMBER')

component.jsx

    class MemberForm extends React.Component {
      ...
      submit(payload) {
        this.props.dispatch(memberRequestActions.post.action({
          payload
        }))
      }
      ...
    }

sagas.js

    const postMemberSagas = new RequestSagas(memberRequestActions.post, {
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
      case memberRequestActions.post.types.success:
        return {
          ...state,
          members: [...state.members, action.payload.member]
        }
    
    ...

