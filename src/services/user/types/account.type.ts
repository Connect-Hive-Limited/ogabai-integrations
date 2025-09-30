import { Account } from "../../../types";
import { AccountFields, accountQuery, WalletFields, walletQuery } from "../user.entity";

export interface GetAccountRequest {
    account: Partial<Account>;
}
export interface GetAccountResponse {
    account: Account;
}
export const getAccountResponse: (keyof GetAccountResponse)[] = [
    "account"
]
export interface GetAccountResponseNestedFields {
    account: AccountFields;
    wallets: WalletFields;
}
export const getAccountResponseNestedFields: GetAccountResponseNestedFields = {
    account: accountQuery,
    wallets: walletQuery,
}