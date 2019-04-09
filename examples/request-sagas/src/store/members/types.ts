export interface Member {
  _id: string
  firstName: string
  lastName: string
}

export interface MembersState {
  readonly all: Array<Member>
  readonly current?: Member
  readonly loading: boolean
  readonly fetchProgress?: number
}