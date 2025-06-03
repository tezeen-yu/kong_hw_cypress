export class Utils {
  public static test_id = 'data-testid=';

  public static getByTestId(elem: string): string {
    return `[${this.test_id}${elem}]`;
  }

  public static getDropdownItem(optionValue: string): string {
    return `select-item-${optionValue}`;
  }
}