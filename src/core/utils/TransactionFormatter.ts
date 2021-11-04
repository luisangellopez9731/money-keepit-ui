export class TransactionFormatter {
  static getDateFormatted(date: string) {
    const date_ = new Date(date);
    const hours = date_.getHours();
    const minutes = date_.getMinutes();
    return `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}`;
  }

  static getMoneyFormatted(money: number) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(money);
  }
}
