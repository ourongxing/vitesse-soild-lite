const getInitialState = (query: string, defaultState?: boolean) => {
  if (defaultState !== undefined) return defaultState
  if (window) return window.matchMedia(query).matches
  return false
}

export function useMedia(query: string, defaultState?: boolean) {
  const [state, setState] = createSignal(getInitialState(query, defaultState))

  createEffect(() => {
    let mounted = true
    const mediaQueryList = window.matchMedia(query)
    const onChange = () => {
      if (!mounted) return
      setState(Boolean(mediaQueryList.matches))
    }

    mediaQueryList.addEventListener("change", onChange)
    setState(mediaQueryList.matches)

    onCleanup(() => {
      mounted = false
      mediaQueryList.removeEventListener("change", onChange)
    })
  })

  return state
}
