export class CommonProperties {
  id: string
  createdDate: Date
  updatedDate: Date

}

export class Account extends CommonProperties {
  name: string
  amount: number
}