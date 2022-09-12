namespace TypeList {
  export interface LoginState {
    isLogin: boolean
    token: string
  }
  export interface Effectiveness {
    email: string | boolean
    password: string | boolean
  }
  export interface Item {
    id: number
    itemName: string
  }
  export interface Items {
    totalPages: number
    currentPage: number
    content: Item[]
  }
  export interface ItemStatus {
    status: string
    items: Items
    item: Item | null
  }
}
export default TypeList
