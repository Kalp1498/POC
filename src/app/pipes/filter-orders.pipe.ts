import { IOrder } from '../models/order.interface';
import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filterOrders'
})
@Injectable({
  providedIn: 'root'
})
export class FilterOrdersPipe implements PipeTransform {

  transform(orders: IOrder[], selectedFields: any): any {
    if (!orders) {
      return []
    }

    if (!selectedFields) {
      return orders
    }
    
    return orders.filter(item => {
      if (typeof(selectedFields) === 'string') {
        if (isNaN(parseInt(selectedFields)) && item['customerName'].toString().toLowerCase().includes(selectedFields.toLowerCase())) {
          return item
        } else {
            if (item['id'].toString().toLowerCase().includes(selectedFields.toLowerCase())) {
              return item
            }
        }
      } else {
        if (Object.keys(selectedFields).length === 1) {
          if (Object.keys(selectedFields).includes('selectedCustomerNames')) {
            return selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1
          } else if (Object.keys(selectedFields).includes('selectedShippers')) {
            return selectedFields.selectedShippers.indexOf(item['shipper']) > -1
          } else if (Object.keys(selectedFields).includes('selectedFromDate')) {
            return item['orderDate'] >= selectedFields.selectedFromDate
          } else if (Object.keys(selectedFields).includes('selectedToDate')) {
            return item['orderDate'] <= selectedFields.selectedToDate
          } else if (Object.keys(selectedFields).includes('selectedFromAmount')) {
            return item['orderTotal'] >= selectedFields.selectedFromAmount
          } else {
            return item['orderTotal'] <= selectedFields.selectedToAmount
          }
        } else if (Object.keys(selectedFields).length === 2) {
          if (Object.keys(selectedFields).includes('selectedCustomerNames')) {
            if (Object.keys(selectedFields).includes('selectedShippers')) {
              return (
                selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                selectedFields.selectedShippers.indexOf(item['shipper']) > -1
              )
            } else if (Object.keys(selectedFields).includes('selectedFromDate')) {
              return (
                selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                item['orderDate'] >= selectedFields.selectedFromDate
              )
            } else if (Object.keys(selectedFields).includes('selectedToDate')) {
              return (
                selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                item['orderDate'] <= selectedFields.selectedToDate
              )
            } else if (Object.keys(selectedFields).includes('selectedFromAmount')) {
              return (
                selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                item['orderTotal'] >= selectedFields.selectedFromAmount
              )
            } else if (Object.keys(selectedFields).includes('selectedToAmount')) {
              return (
                selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                item['orderTotal'] <= selectedFields.selectedToAmount
              )
            }
          } else if (Object.keys(selectedFields).includes('selectedShippers')) {
            if (Object.keys(selectedFields).includes('selectedFromDate')) {
              return (
                selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                item['orderDate'] >= selectedFields.selectedFromDate
              )
            } else if (Object.keys(selectedFields).includes('selectedToDate')) {
              return (
                selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                item['orderDate'] <= selectedFields.selectedToDate
              )
            } else if (Object.keys(selectedFields).includes('selectedFromAmount')) {
              return (
                selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                item['orderTotal'] >= selectedFields.selectedFromAmount
              )
            } else if (Object.keys(selectedFields).includes('selectedToAmount')) {
              return (
                selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                item['orderTotal'] <= selectedFields.selectedToAmount
              )
            }
          } else if (Object.keys(selectedFields).includes('selectedFromDate')) {
            if (Object.keys(selectedFields).includes('selectedToDate')) {
              return (
                item['orderDate'] >= selectedFields.selectedFromDate &&
                item['orderDate'] <= selectedFields.selectedToDate
              )
            } else if (Object.keys(selectedFields).includes('selectedFromAmount')) {
              return (
                item['orderDate'] >= selectedFields.selectedFromDate &&
                item['orderTotal'] >= selectedFields.selectedFromAmount
              )
            } else if (Object.keys(selectedFields).includes('selectedToAmount')) {
              return (
                item['orderDate'] >= selectedFields.selectedFromDate &&
                item['orderTotal'] <= selectedFields.selectedToAmount
              )
            }
          } else if (Object.keys(selectedFields).includes('selectedToDate')) {
            if (Object.keys(selectedFields).includes('selectedFromAmount')) {
              return (
                item['orderDate'] <= selectedFields.selectedToDate &&
                item['orderTotal'] >= selectedFields.selectedFromAmount
              )
            } else if (Object.keys(selectedFields).includes('selectedToAmount')) {
              return (
                item['orderDate'] <= selectedFields.selectedToDate &&
                item['orderTotal'] <= selectedFields.selectedToAmount
              )
            }
          } else {
            return (
              item['orderTotal'] >= selectedFields.selectedFromAmount &&
              item['orderTotal'] <= selectedFields.selectedToAmount
            )
          }
        } else if (Object.keys(selectedFields).length === 3) {
          if (Object.keys(selectedFields).includes('selectedCustomerNames')) {
            if (Object.keys(selectedFields).includes('selectedShippers')) {
              if (Object.keys(selectedFields).includes('selectedFromDate')) {
                return (
                  selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                  selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                  item['orderDate'] >= selectedFields.selectedFromDate
                )
              } else if (Object.keys(selectedFields).includes('selectedToDate')) {
                return (
                  selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                  selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                  item['orderDate'] <= selectedFields.selectedToDate
                )
              } else if (Object.keys(selectedFields).includes('selectedFromAmount')) {
                return (
                  selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                  selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                  item['orderTotal'] >= selectedFields.selectedFromAmount
                )
              } else {
                return (
                  selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                  selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                  item['orderTotal'] <= selectedFields.selectedToAmount
                )
              }
            } else if (Object.keys(selectedFields).includes('selectedFromDate')) {
              if (Object.keys(selectedFields).includes('selectedToDate')) {
                return (
                  selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                  item['orderDate'] >= selectedFields.selectedFromDate &&
                  item['orderDate'] <= selectedFields.selectedToDate
                )
              } else if (Object.keys(selectedFields).includes('selectedFromAmount')) {
                return (
                  selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                  item['orderDate'] >= selectedFields.selectedFromDate &&
                  item['orderTotal'] >= selectedFields.selectedFromAmount
                )
              } else {
                return (
                  selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                  item['orderDate'] >= selectedFields.selectedFromDate &&
                  item['orderTotal'] <= selectedFields.selectedToAmount
                )
              }
            } else if (Object.keys(selectedFields).includes('selectedToDate')) {
              if (Object.keys(selectedFields).includes('selectedFromAmount')) {
                return (
                  selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                  item['orderDate'] <= selectedFields.selectedToDate &&
                  item['orderTotal'] >= selectedFields.selectedFromAmount
                )
              } else {
                return (
                  selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                  item['orderDate'] <= selectedFields.selectedToDate &&
                  item['orderTotal'] <= selectedFields.selectedToAmount
                )
              }
            } else {
              return (
                selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
                item['orderTotal'] >= selectedFields.selectedFromAmount &&
                item['orderTotal'] <= selectedFields.selectedToAmount
              )
            }
          } else if (Object.keys(selectedFields).includes('selectedShippers')) {
            if (Object.keys(selectedFields).includes('selectedFromDate')) {
              if (Object.keys(selectedFields).includes('selectedToDate')) {
                return (
                  selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                  item['orderDate'] >= selectedFields.selectedFromDate && 
                  item['orderDate'] <= selectedFields.selectedToDate
                )
              } else if (Object.keys(selectedFields).includes('selectedFromAmount')) {
                return (
                  selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                  item['orderDate'] >= selectedFields.selectedFromDate && 
                  item['orderTotal'] >= selectedFields.selectedFromAmount
                )
              } else {
                return (
                  selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                  item['orderDate'] >= selectedFields.selectedFromDate && 
                  item['orderTotal'] <= selectedFields.selectedToAmount
                )
              }
            } else if (Object.keys(selectedFields).includes('selectedToDate')) {
              if (Object.keys(selectedFields).includes('selectedFromAmount')) {
                return (
                  selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                  item['orderDate'] <= selectedFields.selectedToDate && 
                  item['orderTotal'] >= selectedFields.selectedFromAmount
                )
              } else {
                return (
                  selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                  item['orderDate'] <= selectedFields.selectedToDate && 
                  item['orderTotal'] <= selectedFields.selectedToAmount
                )
              }
            } else {
              return (
                selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                item['orderTotal'] >= selectedFields.selectedFromAmount && 
                item['orderTotal'] <= selectedFields.selectedToAmount
              )
            }
          } else if (Object.keys(selectedFields).includes('selectedFromDate')) {
            if (Object.keys(selectedFields).includes('selectedToDate')) {
              if (Object.keys(selectedFields).includes('selectedFromAmount')) {
                return (
                  item['orderDate'] >= selectedFields.selectedFromDate &&
                  item['orderDate'] <= selectedFields.selectedToDate && 
                  item['orderTotal'] >= selectedFields.selectedFromAmount
                )
              } else {
                return (
                  item['orderDate'] >= selectedFields.selectedFromDate &&
                  item['orderDate'] <= selectedFields.selectedToDate && 
                  item['orderTotal'] <= selectedFields.selectedToAmount
                )
              }
            } else {
              return (
                item['orderDate'] >= selectedFields.selectedFromDate &&
                item['orderTotal'] >= selectedFields.selectedFromAmount && 
                item['orderTotal'] <= selectedFields.selectedToAmount
              )
            }
          } else {
            return (
              item['orderDate'] <= selectedFields.selectedToDate &&
              item['orderTotal'] >= selectedFields.selectedFromAmount && 
              item['orderTotal'] <= selectedFields.selectedToAmount
            )
          }
        } else if (Object.keys(selectedFields).length === 4) {
          if (Object.keys(selectedFields).includes('selectedCustomerNames')) {
            if (Object.keys(selectedFields).includes('selectedShippers')) {
              if (Object.keys(selectedFields).includes('selectedFromDate')) {
                if (Object.keys(selectedFields).includes('selectedToDate')) {
                  return (
                    selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                    selectedFields.selectedShippers.indexOf(item['shipper']) > -1 && 
                    item['orderDate'] >= selectedFields.selectedFromDate && 
                    item['orderDate'] <= selectedFields.selectedToDate
                  )
                } else if (Object.keys(selectedFields).includes('selectedFromAmount')) {
                  return (
                    selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                    selectedFields.selectedShippers.indexOf(item['shipper']) > -1 && 
                    item['orderDate'] >= selectedFields.selectedFromDate && 
                    item['orderTotal'] >= selectedFields.selectedFromAmount
                  )
                } else {
                  return (
                    selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                    selectedFields.selectedShippers.indexOf(item['shipper']) > -1 && 
                    item['orderDate'] >= selectedFields.selectedFromDate && 
                    item['orderTotal'] <= selectedFields.selectedToAmount
                  )
                }
              } else if (Object.keys(selectedFields).includes('selectedToDate')) {
                if (Object.keys(selectedFields).includes('selectedFromAmount')) {
                  return (
                    selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                    selectedFields.selectedShippers.indexOf(item['shipper']) > -1 && 
                    item['orderDate'] <= selectedFields.selectedToDate && 
                    item['orderTotal'] >= selectedFields.selectedFromAmount
                  )
                } else {
                  return (
                    selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                    selectedFields.selectedShippers.indexOf(item['shipper']) > -1 && 
                    item['orderDate'] <= selectedFields.selectedToDate && 
                    item['orderTotal'] <= selectedFields.selectedToAmount
                  )
                }
              } else {
                return (
                  selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                  selectedFields.selectedShippers.indexOf(item['shipper']) > -1 && 
                  item['orderTotal'] >= selectedFields.selectedFromAmount && 
                  item['orderTotal'] <= selectedFields.selectedToAmount
                )
              }
            } else if (Object.keys(selectedFields).includes('selectedFromDate')) {
              if (Object.keys(selectedFields).includes('selectedToDate')) {
                if (Object.keys(selectedFields).includes('selectedFromAmount')) {
                  return (
                    selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                    item['orderDate'] >= selectedFields.selectedFromDate && 
                    item['orderDate'] <= selectedFields.selectedToDate && 
                    item['orderTotal'] >= selectedFields.selectedFromAmount
                  )
                } else {
                  return (
                    selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                    item['orderDate'] >= selectedFields.selectedFromDate && 
                    item['orderDate'] <= selectedFields.selectedToDate && 
                    item['orderTotal'] <= selectedFields.selectedToAmount
                  )
                }
              } else {
                return (
                  selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                  item['orderDate'] >= selectedFields.selectedFromDate && 
                  item['orderTotal'] >= selectedFields.selectedFromAmount && 
                  item['orderTotal'] <= selectedFields.selectedToAmount
                )
              }
            } else {
              return (
                selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                item['orderDate'] <= selectedFields.selectedToDate && 
                item['orderTotal'] >= selectedFields.selectedFromAmount && 
                item['orderTotal'] <= selectedFields.selectedToAmount
              )
            }
          } else if (Object.keys(selectedFields).includes('selectedShippers')) {
            if (Object.keys(selectedFields).includes('selectedFromDate')) {
              if (Object.keys(selectedFields).includes('selectedToDate')) {
                if (Object.keys(selectedFields).includes('selectedFromAmount')) {
                  return (
                    selectedFields.selectedShippers.indexOf(item['shipper']) > -1 && 
                    item['orderDate'] >= selectedFields.selectedFromDate &&
                    item['orderDate'] <= selectedFields.selectedToDate && 
                    item['orderTotal'] >= selectedFields.selectedFromAmount
                  )
                } else {
                  return (
                    selectedFields.selectedShippers.indexOf(item['shipper']) > -1 && 
                    item['orderDate'] >= selectedFields.selectedFromDate &&
                    item['orderDate'] <= selectedFields.selectedToDate && 
                    item['orderTotal'] <= selectedFields.selectedToAmount
                  )
                }
              } else {
                return (
                  selectedFields.selectedShippers.indexOf(item['shipper']) > -1 && 
                  item['orderDate'] >= selectedFields.selectedFromDate &&
                  item['orderTotal'] >= selectedFields.selectedFromAmount && 
                  item['orderTotal'] <= selectedFields.selectedToAmount
                )
              }
            } else {
              return (
                selectedFields.selectedShippers.indexOf(item['shipper']) > -1 && 
                item['orderDate'] <= selectedFields.selectedToDate &&
                item['orderTotal'] >= selectedFields.selectedFromAmount && 
                item['orderTotal'] <= selectedFields.selectedToAmount
              )
            }
          } else {
            return (
              item['orderDate'] >= selectedFields.selectedFromDate &&
              item['orderDate'] <= selectedFields.selectedToDate &&
              item['orderTotal'] >= selectedFields.selectedFromAmount && 
              item['orderTotal'] <= selectedFields.selectedToAmount
            )
          }
        } else if (Object.keys(selectedFields).length === 5) {
          if (Object.keys(selectedFields).includes('selectedCustomerNames')) {
            if (Object.keys(selectedFields).includes('selectedShippers')) {
              if (Object.keys(selectedFields).includes('selectedFromDate')) {
                if (Object.keys(selectedFields).includes('selectedToDate')) {
                  if (Object.keys(selectedFields).includes('selectedFromAmount')) {
                    return (
                      selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                      selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                      item['orderDate'] >= selectedFields.selectedFromDate && 
                      item['orderDate'] <= selectedFields.selectedToDate && 
                      item['orderTotal'] >= selectedFields.selectedFromAmount
                    )
                  } else {
                    return (
                      selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                      selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                      item['orderDate'] >= selectedFields.selectedFromDate && 
                      item['orderDate'] <= selectedFields.selectedToDate && 
                      item['orderTotal'] <= selectedFields.selectedToAmount
                    )
                  }
                } else {
                  return (
                    selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                    selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                    item['orderDate'] >= selectedFields.selectedFromDate && 
                    item['orderTotal'] >= selectedFields.selectedFromAmount && 
                    item['orderTotal'] <= selectedFields.selectedToAmount
                  )
                }
              } else {
                return (
                  selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                  selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
                  item['orderDate'] <= selectedFields.selectedToDate && 
                  item['orderTotal'] >= selectedFields.selectedFromAmount && 
                  item['orderTotal'] <= selectedFields.selectedToAmount
                )
              }
            } else {
              return (
                selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 && 
                item['orderDate'] >= selectedFields.selectedFromDate &&
                item['orderDate'] <= selectedFields.selectedToDate && 
                item['orderTotal'] >= selectedFields.selectedFromAmount && 
                item['orderTotal'] <= selectedFields.selectedToAmount
              )
            }
          } else {
            return (
              selectedFields.selectedShippers.indexOf(item['shipper']) > -1 && 
              item['orderDate'] >= selectedFields.selectedFromDate &&
              item['orderDate'] <= selectedFields.selectedToDate && 
              item['orderTotal'] >= selectedFields.selectedFromAmount && 
              item['orderTotal'] <= selectedFields.selectedToAmount
            )
          }
        } else if (Object.keys(selectedFields).length === 6) {
          return (
            selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1 &&
            selectedFields.selectedShippers.indexOf(item['shipper']) > -1 &&
            item['orderDate'] >= selectedFields.selectedFromDate &&
            item['orderDate'] <= selectedFields.selectedToDate &&
            item['orderTotal'] >= selectedFields.selectedFromAmount &&
            item['orderTotal'] <= selectedFields.selectedToAmount
          )
        } else {
          return orders
        }
      }
    })
  }
}