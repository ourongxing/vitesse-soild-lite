import { Accessor } from "solid-js"

const getInitialState = (key: string, initialValue: any) => {
  const item = window.localStorage.getItem(key)
  return item ? JSON.parse(item) : initialValue
}

export function useLocalStorage(
  key: string,
  initialValue: any
): [Accessor<any>, (value: any) => void] {
  const [storedValue, setStoredValue] = createSignal(
    getInitialState(key, initialValue)
  )

  const setValue = (value: any) => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}
