export interface MembersState {
  readonly all: Array<object>
  readonly current?: string
  readonly loading: boolean,
  readonly fetchProgress?: number
}