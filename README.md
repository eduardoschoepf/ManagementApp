Data Model

1. Dashboard: inflows and outflows of the year, balance per month (actual and planned)
2. Current month tab: consultant name and amount to be paid for the month
3. Year tab: consultant name, Portugal working days, amount to be paid per month (considering working days)
4. Consultant registration tab: name of the consultant, start and end of contract, fee payable and receivable, payment terms (days after invoice) and IBAN of the consultant
5. Working days tab: number of working days of the month and number of days worked by the consultant, with the possibility of changing these values and a column of value to be used (actual or planned).

```
const dashboard = {
  year: {
    revenue: {
      real: 1000,
      planned: 2000
    },
    expenses: {
      real: 500,
      planned: 1000
    },
    balance: {
      real: 500,
      planned: 1000
    },
    month: {
      january: {
        revenue: {
          real: 100,
          planned: 200
        },
        expenses: {
          real: 50,
          planned: 100
        },
        balance: {
          real: 50,
          planned: 100
        }
      },
      // Other months with the same structure
    }
  }
}

const currentMonthTab = {
  consultants: [
    {
      name: 'John Doe',
      payment: 500
    },
    // Other consultants with the same structure
  ]
}

const yearTab = {
  consultants: [
    {
      name: 'John Doe',
      businessDays: 21,
      payment: {
        january: 250,
        // Other months with the same structure
      }
    },
    // Other consultants with the same structure
  ]
}

const consultantsTab = {
  consultants: [
    {
      name: 'John Doe',
      startDate: '01/01/2022',
      endDate: '01/01/2023',
      rate: {
        toPay: 50,
        toReceive: 100
      },
      paymentTerms: [0, 30, 60, 90],
      iban: 'PT50 000 0000 0001 2345 67'
    },
    // Other consultants with the same structure
  ]
}

const workingDaysTab = {
  consultants: [
    {
      name: 'John Doe',
      january: {
        businessDays: 21,
        workedDays: 5,
        valueToUse: 'real'
      },
    // Other months with the same structure
    }
    // Other consultants with the same structure
  ]
}
```