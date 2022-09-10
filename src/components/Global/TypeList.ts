namespace TypeList {
  export interface LoginState {
    isLogin: boolean
    token: string
  }
  export interface Effectiveness {
    email: string | boolean
    password: string | boolean
  }
}
export default TypeList
