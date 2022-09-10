namespace TypeList {
  export interface LoginState {
    isLogin: boolean
    token: string
  }
  export interface LoginSlice extends LoginState {
    status: string
  }
}
export default TypeList
