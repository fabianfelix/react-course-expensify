import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }

    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

//should set text filter
test('should set text filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    }

    const action = { 
        type: 'SET_TEXT_FILTER',
        text: 'A'
    }
    const state = filtersReducer(currentState, action)
    expect(state.text).toBe('A')
})

//should set startDate 
test('should set startDate', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment().startOf('month').add(1, 'month')
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(moment().startOf('month').add(1, 'month'))
})

//should set endDate filter
test('should set endDate', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment().endOf('month').add(1, 'month')
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(moment().endOf('month').add(1, 'month'))
})